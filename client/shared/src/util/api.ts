/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../../../libs/core/enums.d.ts"/>

import { CodegenRuntime } from './CodegenRuntime';

export namespace pxsimui {
    export function userInterface(theme: UITheme, body: pxsim.RefAction): void {
        console.log('userInterface called');
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
            console.log('targetrenderproc called');
            CodegenRuntime.pushCont();
            pxsim.runtime.runFiberSync(body, (r) => {
                console.log('it ran');
            });
            let cl = CodegenRuntime.popCont();
            return CodegenRuntime.createElement(
                CodegenRuntime.Viewr, { style: CodegenRuntime.getRootStyle() }, cl);
        });
    }

    export function groupElement(
        name: string,
        direction: UIGroupDirection,
        flex: boolean,
        className: UIGroupClass,
        children: pxsim.RefAction): void {
        let childDirection: string;
        switch (direction) {
            case UIGroupDirection.Column:
                childDirection = 'column';
                break;
            case UIGroupDirection.ReverseColumn:
                childDirection = 'column-reverse';
                break;
            case UIGroupDirection.Row:
                childDirection = 'row';
                break;
            case UIGroupDirection.ReverseRow:
                childDirection = 'row-reverse';
                break;
        }
        let groupClass: string;
        switch (className) {
            case UIGroupClass.Panel:
                groupClass = 'panel';
                break;
            case UIGroupClass.Frame:
                groupClass = 'frame';
                break;
            case UIGroupClass.Framepanel:
                groupClass = 'framepanel';
                break;
            case UIGroupClass.Header:
                groupClass = 'header';
                break;
            case UIGroupClass.Footer:
                groupClass = 'footer';
                break;
            case UIGroupClass.Row:
                groupClass = 'row';
                break;
            case UIGroupClass.None:
                groupClass = 'none';
                break;
        }
        CodegenRuntime.beginProps();
        genRefProp(name);
        genFlexProp(flex);
        CodegenRuntime.addProp('childDirection', childDirection);
        CodegenRuntime.addProp('visualPurpose', groupClass);
        let props = CodegenRuntime.getProps();
        CodegenRuntime.pushCont();
        pxsim.runtime.runFiberSync(children, (r) => {
            console.log('group:it ran');
        });
        let cl = CodegenRuntime.popCont();
        CodegenRuntime.pushElem(
            CodegenRuntime.createElement(CodegenRuntime.GroupBlockf, props, cl));
    }
    export class StylePropertySet {
        constructor() {

        }
    }
    function genRefProp(name: string) {
        if (name && name != '') {
            CodegenRuntime.addProp('ref', (e: any) => CodegenRuntime.setIdElem(name, e));
        }
    }

    function genFlexProp(flex: boolean) {
        if (flex) {
            CodegenRuntime.addProp('isFlex', flex);
        }
    }
}

