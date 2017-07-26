/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../../../libs/core/types.d.ts"/>

import { CodegenRuntime } from './CodegenRuntime';
//import BleManager from 'react-native-ble-manager';

export namespace pxsimsensors {
    export function fooImpl(arg:string): void {
        console.log('fooImpl called');
        // do whatever the block does
    }

    export function scanForNearbyDevicesImpl(scanDurationMilliseconds: number, callback: pxsim.RefAction): void {
        // TODO: find nearby devices and return them as an array
        console.log('scanForNearbyDevicesImpl called');

        // let retVal = CodegenRuntime.getCodegenHost().createRefCollection();
        // //let retVal = new Array<string>();
        // retVal.push("device1");
        // retVal.push("device2");

        // return retVal;
        //CodegenRuntime.setIntervalr(() => {
        //    CodegenRuntime.getCodegenHost().runFiberSync(body, (r) => {});
        //});
        CodegenRuntime.getCodegenHost().blueTooth.scanForDevices(scanDurationMilliseconds, callback);
    }

    export function getDeviceListImpl() {
        return CodegenRuntime.getCodegenHost().blueTooth.getDeviceList();
    }

    export function getBlueToothStatusImpl(): string {
        return CodegenRuntime.getCodegenHost().blueTooth.getBlueToothStatus();
    }

    export function toggleBlueToothStatusImpl(): void {
        CodegenRuntime.getCodegenHost().blueTooth.toggleBlueToothState();
    }

    export function connectToDeviceImpl(deviceName: string, callback: pxsim.RefAction): void {
        CodegenRuntime.getCodegenHost().blueTooth.connectToDevice(deviceName, callback);
    }
}