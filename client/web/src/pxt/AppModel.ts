/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
import * as jsutil from '../../../shared/src/util/jsutil';
import { ModelWithEvents } from '../models/ModelWithEvents';
import { CodegenRuntime, CodegenHost, BlueTooth } from '../../../shared/src/util/CodegenRuntime';
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

        this.blueTooth.codeGenHost = this;
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

    blueTooth: BlueTooth = {

        btState: "off",
        devices: [],
        deviceNames: null,
        codeGenHost: null,
        scanning: false,
        scanningCompleteCallback: null,

        toggleBlueToothState: function toggleBlueToothState(): string {
            this.btState = this.btState == "on" ? "off" : "on";
            return this.btState;
        },
        getBlueToothStatus: function getBlueToothStatus(): string {
            return this.btState;
        },
        scanForDevices(scanDurationMilliseconds: number, callback: any): void {
            console.log("scanForDevices - started scanning");

            setTimeout(function(caller: BlueTooth) {
                
                // "scan" for devices
                caller.devices = [];
                caller.deviceNames = caller.codeGenHost.createRefCollection();
                let numDevices: number = Math.floor((Math.random() * 5));
                for(var i: number = 0; i < numDevices; i++) {
                    caller.deviceNames.push("device" + i);
                }

                console.log("scanForDevices - completed scanning");

                // call callback function
                caller.codeGenHost.runFiberAsync(callback);

            }, scanDurationMilliseconds, this);
        },
        getDeviceList(): any {
            return this.deviceNames;
        },
        connectToDevice(deviceName: string, callback: any): void {
            // TODO: simulate
            console.log("Attempting to connect to device: " + deviceName);
        }
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
}
