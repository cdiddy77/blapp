/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
import * as jsutil from '../../../shared/src/util/jsutil';
import { ModelWithEvents } from '../models/ModelWithEvents';
import { CodegenRuntime, CodegenHost } from '../../../shared/src/util/CodegenRuntime';
import * as svcConn from '../util/ServiceConnection';

export interface AppModelData {
    code: string;
    lastEvalError: Error;
    pairingCode: string;
}

export class AppModel extends ModelWithEvents<AppModelData>
    implements CodegenHost, svcConn.ServiceConnectionHost {
    constructor() {
        super({
            code: null,
            lastEvalError: null,
            pairingCode: null
        });
        CodegenRuntime.setCodegenHost(this);
    }

    // CodegenHost interface ///////////////////////////////////////////////////
    //
    runFiberAsync(a: any, arg0?: any, arg1?: any, arg2?: any): Promise<any> {
        return pxsim.runtime.runFiberAsync(a, arg0, arg1, arg2);
    }
    runFiberSync(a: any, resolve: (thenableOrResult?: any) => void, arg0?: any, arg1?: any, arg2?: any): void {
        pxsim.runtime.runFiberSync(a, resolve, arg0, arg1, arg2);
    }
    //
    ////////////////////////////////////////////////////////////////////////////

    // ServiceConnectionHost implementation ///////////////
    //
    onChange(cb: (prop: string) => void): void {
        this.on('change', cb);
    }
    getCode(): string {
        return this.data.code;
    }
    getLastEvalError(): Error {
        return this.data.lastEvalError;
    }
    setPairingCode(code: string): void {
        this.setProperty('pairingCode', code);
    }
    //
    ///////////////////////////////////////////////////////

 protected onPropertySet(prop: keyof AppModelData) {
        // if (prop == 'code') {
        //     this.evalCode();
        // }
    }

    private evalCode() {
        let CgRt = CodegenRuntime;
        CgRt.resetCodeState();
        // force a re-render, which will result in the old
        // VDOM to be discarded. This is important
        CgRt.updateUI();
        try {
            eval(this.data.code);
            this.setProperty('lastEvalError', null);
            // if (this._performResetOnLoad) {
            //     let resetProc = CodegenRuntime.getResetApplicationProc();
            //     if (resetProc)
            //         resetProc();

            //     this._performResetOnLoad = false;
            // }
        } catch (e) {
            this.setProperty('lastEvalError', e);
        }
    }
}