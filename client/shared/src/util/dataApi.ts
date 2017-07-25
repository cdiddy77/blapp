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

    export function joinImpl(arrayToBeJoined: pxsim.RefCollection, joinString: string): string {
        console.log('joinImpl called');

        let s: string = "";

        //for(var v in arrayToBeJoined.) {
        for(var i: number = 0; i < arrayToBeJoined.getLength(); i++) {
            s += arrayToBeJoined.getAt(i) + joinString;
        }

        return s;
    }

    export function splitImpl(stringToSplit: string, splitValue: string): string[] {
        console.log('splitImpl called');

        let a: string[] = [];
        let index: number = -1;

        do {
            index = stringToSplit.indexOf(splitValue);

            if (index > -1) {
                a.push(stringToSplit.substr(0, index - 1));

                var index2 = index + splitValue.length;

                if (index2 >= stringToSplit.length)
                    index2 = stringToSplit.length - 1;

                stringToSplit = stringToSplit.substr(index2);
            } else {
                a.push(stringToSplit);
            }
            
        } while(index > -1);

        return a;
    }

}