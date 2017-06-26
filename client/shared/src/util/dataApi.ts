/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../../../libs/core/types.d.ts"/>

import { CodegenRuntime } from './CodegenRuntime';

export namespace pxsimdata {
    export function getSharedStringImpl(name: string): string {
        return CodegenRuntime.getShareVar(name);
    }

    export function getSharedNumberImpl(name: string): number {
        return CodegenRuntime.getShareVar(name);
    }

    export function getSharedBooleanImpl(name: string): boolean {
        return CodegenRuntime.getShareVar(name);
    }

    export function getSharedListImpl(name: string): Array<string> {
        return CodegenRuntime.getShareVar(name);
    }

    export function setSharedStringImpl(name: string, v: string): void {
        CodegenRuntime.setShareVar(name, v);
    }

    export function setSharedNumberImpl(name: string, v: number): void {
        CodegenRuntime.setShareVar(name, v);
    }

    export function setSharedBooleanImpl(name: string, v: boolean): void {
        CodegenRuntime.setShareVar(name, v);
    }

    export function setSharedListImpl(name: string, v: Array<string>): void {
        CodegenRuntime.setShareVar(name, v);
    }

    export function onSharedVariableChangeImpl(name: string, body: pxsim.RefAction): void {
        console.log('onSharedVariableChange called');
        if (!name || name == '') {
            CodegenRuntime.registerShareVarUpdateWildcardHandler(function () {
                CodegenRuntime.getCodegenHost().runFiberSync(body, (r: any) => {
                    // console.log('wildcard updated handler ran',name);
                });
            });
        } else {
            CodegenRuntime.registerShareVarUpdateHandler(name, function () {
                CodegenRuntime.getCodegenHost().runFiberSync(body, (r: any) => {
                    // console.log('updated handler ran',name);
                });
            });
        }
    }

}