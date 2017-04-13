import * as jsutil from './jsutil';
import { Target } from '../components/Target';
import * as React from 'react';
import { View, Text, Image } from 'react-native';

export namespace CodegenRuntime {
    var curelems: any[][] = [];
    var curstyles: any = {};
    var curprops: any = {};

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
        Target.renderProc = renderProc;
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
    export function createElement(...args:any[]){
        console.log('createElement',args[0],JSON.stringify(args[1]));
        return React.createElement(args[0],args[1],...args.slice(2));
    }
    // export var createElement = React.createElement;

    export var Viewr = View;
    export var Imager = Image;
    export var Textr = Text;
}