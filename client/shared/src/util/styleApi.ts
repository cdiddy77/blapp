/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../../../libs/core/types.d.ts"/>

import { CodegenRuntime } from './CodegenRuntime';

export namespace pxsimstyle{
     export function styleDefImpl(body: pxsim.RefAction): StylePropertySet {
        CodegenRuntime.beginStyles();
          CodegenRuntime.getCodegenHost().runFiberSync(body, (r) => {
            console.log('styledef:it ran');
        });
        let result:StylePropertySet = CodegenRuntime.getStyles();
        return result;
    }
}