// import React, { Component } from 'react';
import { AsyncStorage, Platform } from 'react-native';
import { ModelBase } from './ModelBase';
import { CodegenRuntime, CodegenHost } from '../util/CodegenRuntime';
import * as pxtexec from '../util/PxtExec';
import * as constants from '../util/constants';


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
        CgRt.updateUI();

        // need to figure out a way to know whether we are pxt or not
        try {
            console.log('evaluating new code');
            // console.log(this.code);
            this.setProperty('lastEvalError', null);
            var pxsim: any = pxtexec.pxsim;
            pxtexec.executeCode(this.code, (e) => {
                console.log('execCode:errCB:', JSON.stringify(e));
                this.setProperty('lastEvalError', e);
            });
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
    runFiberAsync(a: any, arg0?: any, arg1?: any, arg2?: any): Promise<any> {
        return pxtexec.pxsim.runtime.runFiberAsync(a, arg0, arg1, arg2);
    }
    runFiberSync(a: any, resolve: (thenableOrResult?: any) => void, arg0?: any, arg1?: any, arg2?: any): void {
        // HACK: this shouldn't be necessary and it doesn't actually prevent an RSOD (why??)
        pxtexec.pxsim.runtime.errorHandler = (e) => {
            console.log('runFiberSync Err:EXCEPTION', JSON.stringify(e));
        }
        try {
            let savedYieldState = pxtexec.pxsim.runtime.yieldingDisabled;
            pxtexec.pxsim.runtime.yieldingDisabled = true;
            pxtexec.pxsim.runtime.runFiberSync(a, resolve, arg0, arg1, arg2);
            pxtexec.pxsim.runtime.yieldingDisabled = savedYieldState;
        } catch (e) {
            console.log('runFiberSync EXCEPTION', JSON.stringify(e));
        }
    }
    createRefCollection(): any {
        return new pxtexec.pxsim.RefCollection();
    }
    //
    ////////////////////////////////////////////////////////////////////////////
}