import * as jsutil from '../../../shared/src/util/jsutil';
import * as React from 'react';
import { View, Text, Image, Button } from 'react-native';

export interface CodegenHost {
}

export namespace CodegenRuntime {
    var curelems: any[][] = [];
    var curstyles: any = {};
    var curprops: any = {};

    var sharedVars: any = {};
    var cgHost: CodegenHost = null;

    var targetRenderProc: () => any;
    var forceTargetUpdateProc: () => void;

    export function setCodegenHost(host: CodegenHost): void {
        cgHost = host;
    }

    export function pushCont() {
        curelems.push([]);
    }
    export function popCont(): any[] {
        return curelems.pop();
    }
    export function pushElem(e: any) {
        if (curelems.length >= 1)
            curelems[curelems.length - 1].push(e);
    }
    export function setTargetRenderProc(renderProc: () => any) {
        targetRenderProc = renderProc;
    }
    export function getTargetRenderProc(): () => any {
        return targetRenderProc;
    }
    export function setForceTargetUpdateProc(proc: () => any) {
        forceTargetUpdateProc = proc;
    }
    export function getForceTargetUpdateProc(): () => any {
        return forceTargetUpdateProc;
    }
    export function makeImageUri(url: string): any {
        return { uri: url };
    }
    export function beginStyles() {
        curstyles = {};
    }
    export function addStyle(name: string, value: any) {
        curstyles[name] = value;
    }
    export function getStyles(): any {
        return curstyles;
    }
    export function beginProps() {
        curprops = {};
    }
    export function addProp(name: string, value: any) {
        curprops[name] = value;
    }
    export function getProps(): any {
        return curprops;
    }
    export function createElement(typ: any, props: any, args?: any[]) {
        // console.log('createElement',args[0],JSON.stringify(args[1]));
        if (args) {
            return React.createElement(typ, props, ...args);
        } else {
            return React.createElement(typ, props);
        }
    }

    export function getShareVar(name: string): any {
        return sharedVars[name];
    }

    export function setShareVar(name: string, val: any): void {
        // SHARVAR : implement synchronization of this variable
        sharedVars[name] = val;
    }

    export function testProc() {
        console.log('testProc sfgsdfg');
    }

    export function updateUI() {
        if (forceTargetUpdateProc) {
            forceTargetUpdateProc();
        }
    }

    export function ensureString(v: any): string {
        if (!v) return null;

        return String(v);
    }

    // export var createElement = React.createElement;

    export var Viewr = View;
    export var Imager = Image;
    export var Textr = Text;
    export var Buttonr = Button;
}