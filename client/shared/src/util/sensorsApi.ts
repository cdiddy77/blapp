/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../../../libs/core/types.d.ts"/>

import { CodegenRuntime } from './CodegenRuntime';

export namespace pxsimsensors {
    export function fooImpl(arg:string): void {
        console.log('fooImpl called');
        // do whatever the block does
    }

    export function listNearbyDevicesImpl(): void {
        // TODO: find nearby devices and return them as an array
    }
}