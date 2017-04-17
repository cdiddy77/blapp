// import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { ModelBase } from './ModelBase';
import { CodegenRuntime } from '../util/CodegenRuntime';

export class AppModel extends ModelBase {
    constructor() {
        super();
    }

    readonly serverUri: string;
    readonly pairingCode: string;
    readonly lastEvalError: Error;
    readonly code: string;
    readonly connectionState: string = 'not connected';

    loadSettings(): Promise<[void, void]> {
        let p1 = AsyncStorage.getItem('serverUri').then((v) => {
            this.setProperty('serverUri', v);
        })
        let p2 = AsyncStorage.getItem('pairingCode').then((v) => {
            this.setProperty('pairingCode', v);
        });
        return Promise.all([p1, p2]);
    }

    saveSettings(): Promise<void> {
        return AsyncStorage.setItem('serverUri', this.serverUri)
            .then(() => {
                return AsyncStorage.setItem('pairingCode', this.pairingCode);
            });
    }

    private evalCode() {
        let CgRt = CodegenRuntime;
        CgRt.setTargetRenderProc(null);
        try {
            eval(this.code);
            this.setProperty('lastEvalError', null);
        } catch (e) {
            this.setProperty('lastEvalError', e);
        }
    }


    setProperty<T>(prop: keyof AppModel, v: T) {
        (<any>this)[prop] = v;
        if(prop=='code'){
            this.evalCode();
        }
        this.fire("change", prop);
    }

}