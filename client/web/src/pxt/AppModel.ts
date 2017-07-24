/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
import * as jsutil from '../../../shared/src/util/jsutil';
import { ModelWithEvents } from '../models/ModelWithEvents';
import { CodegenRuntime, CodegenHost } from '../../../shared/src/util/CodegenRuntime';
import * as svcConn from '../util/ServiceConnection';
// import * as pxtexec from '../../../shared/src/util/PxtExec';

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
        // return pxtexec.pxsim.runtime.runFiberAsync(a, arg0, arg1, arg2);
    }
    runFiberSync(a: any, resolve: (thenableOrResult?: any) => void, arg0?: any, arg1?: any, arg2?: any): void {
        pxsim.runtime.errorHandler = (e) => {
            console.log('runFiberSync Err:EXCEPTION', JSON.stringify(e));
        }
        try {
            let savedYieldState = pxsim.runtime.yieldingDisabled;
            pxsim.runtime.yieldingDisabled = true;
            pxsim.runtime.runFiberSync(a, resolve, arg0, arg1, arg2);
            pxsim.runtime.yieldingDisabled = savedYieldState;
            // return pxtexec.pxsim.runtime.runFiberSync(a, resolve, arg0, arg1, arg2);
        } catch (e) {
            console.log('runFiberSync EXCEPTION', JSON.stringify(e));
        }
    }
    createRefCollection(): any {
        return new pxsim.RefCollection();
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
        // see ChParker note below as to why this is commented out
        // if (prop == 'code') {
        //     this.evalCode();
        // }
    }

    // ChParker Note: This function doesn't actually get called, because
    // the PXT framework "magically" executes the code as necessary
    private evalCode() {
        let CgRt = CodegenRuntime;
        CgRt.resetCodeState();
        // force a re-render, which will result in the old
        // VDOM to be discarded. This is important
        CgRt.updateUI();
        try {
            eval(this.data.code);
            // pxtexec.executeCode(this.data.code);
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

    resetPairingCode() {
        svcConn.createNewSession();
    }
}
