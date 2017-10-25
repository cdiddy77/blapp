// import React, { Component } from 'react';
import { AsyncStorage, Platform } from 'react-native';
import { ModelBase } from './ModelBase';
import { CodegenRuntime, CodegenHost } from '../util/CodegenRuntime';
import * as constants from '../util/constants';
import * as ThreeUtil from '../util/ThreeUtil';


export type AppRuntimeEnv = 'web' | 'native';
export class AppModel extends ModelBase implements CodegenHost {
    constructor() {
        super();
        CodegenRuntime.setCodegenHost(this);
        if ((<string>Platform.OS) == 'web') {
            this.environment = 'web';
        } else {
            this.environment = 'native';
        }
    }

    readonly serverUri: string;
    readonly pairingCode: string;
    readonly lastEvalError: Error;
    readonly code: string;
    readonly connectionState: string = 'not connected';
    readonly environment: AppRuntimeEnv;

    loadSettings(launchPairingCode?: string): Promise<void[]> {
        let promises: Promise<void>[] = [];
        promises.push(AsyncStorage.getItem('pair_serverUri').then((v) => {
            if (!v) {
                if (this.environment == 'web')
                    v = 'unspecified';
                else
                    v = constants.serverHost;
            }
            this.setProperty('serverUri', v);
        }));
        if (launchPairingCode) {
            this.setProperty('pairingCode', launchPairingCode);
        } else {
            promises.push(AsyncStorage.getItem('pair_pairingCode').then((v) => {
                this.setProperty('pairingCode', v);
            }));
        }
        return Promise.all(promises);
    }

    saveSettings(): Promise<void> {
        return AsyncStorage.setItem('pair_serverUri', this.serverUri)
            .then(() => {
                return AsyncStorage.setItem('pair_pairingCode', this.pairingCode);
            });
    }

    private evalCode() {
        let CgRt = CodegenRuntime;
        CgRt.resetCodeState();

        // need to figure out a way to know whether we are pxt or not
        try {
            console.log('evaluating new code');
            // console.log(this.code);
            this.setProperty('lastEvalError', null);
            CgRt.preEval();
            eval(this.code);
            CgRt.postEval();
            // eval(this.testCode());
        } catch (e) {
            this.setProperty('lastEvalError', e);
        }
    }

    setProperty<T>(prop: keyof AppModel, v: T) {
        (<any>this)[prop] = v;
        if (prop == 'code') {
            this.evalCode();
        }
        this.fire("change", prop);
    }

    // CodegenHost interface ///////////////////////////////////////////////////
    //
    insertRendererElement(domElement: HTMLCanvasElement): void {
        let hostElem = document.getElementById('webglTarget');
        hostElem.innerHTML = '';
        hostElem.appendChild(domElement);
        let stats = ThreeUtil.Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.bottom = '0px';
        hostElem.appendChild(stats.domElement);
        CodegenRuntime.setStats(stats);
    }
    getRenderWidth(): number {
        let hostElem = document.getElementById('webglTarget');
        return hostElem ? hostElem.clientWidth : 0;
    }
    getRenderHeight(): number {
        let hostElem = document.getElementById('webglTarget');
        return hostElem ? hostElem.clientHeight : 0;
    }
    setExecutionError(e: any): void {
        this.setProperty('lastEvalError', e);
    }
    //
    ////////////////////////////////////////////////////////////////////////////
}