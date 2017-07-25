/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../../../libs/core/types.d.ts"/>

import { CodegenRuntime } from './CodegenRuntime';
//import BleManager from 'react-native-ble-manager';

export namespace pxsimsensors {
    export function fooImpl(arg:string): void {
        console.log('fooImpl called');
        // do whatever the block does
    }

    export function getNearbyDevicesImpl(): string[] {
        // TODO: find nearby devices and return them as an array
        console.log('getNearbyDevicesImpl called');

        //return ["device1", "device2"];
        //return null;
        let retVal = CodegenRuntime.getCodegenHost().createRefCollection();
        //let retVal = new Array<string>();
        retVal.push("device1");
        retVal.push("device2");

        return retVal;
    }

    export function getBluetoothStatusImpl(): boolean {
        // TODO: implement
        return false;
    }

    export function toggleBlueToothStatusImpl(): void {
        // TODO: implement
    }
}