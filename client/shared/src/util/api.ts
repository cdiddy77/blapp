/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../../../libs/core/enums.d.ts"/>

import { CodegenRuntime } from './CodegenRuntime';

export namespace pxsimui {
    export function userInterface(theme: UITheme, body: () => void): void {
        let defaultTheme: string;
        switch (theme) {
            case UITheme.Calm:
                defaultTheme = 'firstTheme';
                break;
            case UITheme.Bright:
                defaultTheme = 'brightTheme';
                break;
            case UITheme.Dark:
                defaultTheme = 'darkTheme';
                break;
        }
        CodegenRuntime.setDefaultTheme(defaultTheme);
        CodegenRuntime.setTargetRenderProc(function () {
            CodegenRuntime.pushCont();
            body();
            let cl = CodegenRuntime.popCont();
            CodegenRuntime.createElement(
                CodegenRuntime.Viewr, { style: CodegenRuntime.getRootStyle() }, cl);
        });
    }

    export function groupElement(
        name: string,
        direction: UIGroupDirection,
        flex: boolean,
        className: UIGroupClass,
        children: () => void): void {

    }
}

