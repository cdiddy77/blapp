/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../../../libs/core/types.d.ts"/>

import { CodegenRuntime } from './CodegenRuntime';

export namespace pxsimtime {
    export function afterTimeImpl(
        ms: number,
        body: pxsim.RefAction): void {
        CodegenRuntime.setTimeoutr(() => {
            CodegenRuntime.getCodegenHost().runFiberSync(body, (r) => {
            });
        }, ms);
    }
    export function everyTimeImpl(
        ms: number,
        body: pxsim.RefAction): void {
        CodegenRuntime.setIntervalr(() => {
            CodegenRuntime.getCodegenHost().runFiberSync(body, (r) => {
            });
        }, ms);
    }

    export function resetApplicationImpl(): void {
        if (CodegenRuntime.getResetApplicationProc()) {
            CodegenRuntime.getResetApplicationProc()();
        }
    }

    export function whenAppResetImpl(body: pxsim.RefAction): void {
        CodegenRuntime.setResetApplicationProc(() => {
            CodegenRuntime.getCodegenHost().runFiberSync(body, (r) => {
            });
        });
    }
}