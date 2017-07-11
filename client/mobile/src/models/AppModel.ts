// import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { ModelBase } from './ModelBase';
import { CodegenRuntime, CodegenHost } from '../../../shared/src/util/CodegenRuntime';
import * as pxtexec from '../../../shared/src/util/PxtExec';

export class AppModel extends ModelBase implements CodegenHost {
    constructor() {
        super();
        CodegenRuntime.setCodegenHost(this);
    }

    readonly serverUri: string;
    readonly pairingCode: string;
    readonly lastEvalError: Error;
    readonly code: string;
    readonly connectionState: string = 'not connected';

    loadSettings(): Promise<void[]> {
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
        CgRt.resetCodeState();
        CgRt.updateUI();

        // need to figure out a way to know whether we are pxt or not
        try {
            console.log('evaluating new code');
            console.log(this.code);
            pxtexec.executeCode(this.code);
            // eval(this.testCode());
            this.setProperty('lastEvalError', null);
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
        let savedYieldState = pxtexec.pxsim.runtime.yieldingDisabled;
        pxtexec.pxsim.runtime.yieldingDisabled = true;
        pxtexec.pxsim.runtime.runFiberSync(a, resolve, arg0, arg1, arg2);
        pxtexec.pxsim.runtime.yieldingDisabled = savedYieldState;
    }
    //
    ////////////////////////////////////////////////////////////////////////////
}