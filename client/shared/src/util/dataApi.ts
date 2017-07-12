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

    export function getSharedListImpl(name: string): pxsim.RefCollection {
        // HACK: we are copying the entire list each time we move it back and forth, which is super-inefficient
        let arr: string[] = CodegenRuntime.getShareVar(name);
        let retval: pxsim.RefCollection = CodegenRuntime.getCodegenHost().createRefCollection();
        for (let i = 0; i < arr.length; i++) {
            retval.push(arr[i]);
        }
        return retval;
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

    export function setSharedListImpl(name: string, v: pxsim.RefCollection): void {
        // HACK: we are copying the entire list each time we move it back and forth, which is super-inefficient
        let arr: string[] = [];
        for (let i = 0; i < v.getLength(); i++) {
            arr.push(v.getAt(i));
        }
        CodegenRuntime.setShareVar(name, arr);
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