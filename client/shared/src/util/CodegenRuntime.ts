import * as jsutil from './jsutil';
import * as React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import { GroupBlock } from '../components/GroupBlock';
import { ScrollerBlock } from '../components/ScrollerBlock';
import { ButtonBlock } from '../components/ButtonBlock';
import { TextBlock } from '../components/TextBlock';

export interface CodegenHost {
}

export namespace CodegenRuntime {
    type ShareVarUpdatedCallback = () => void;

    var curelems: any[][] = [];
    var curstyles: any = {};
    var curprops: any = {};

    var sharedVars: any = {};
    var cgHost: CodegenHost = null;

    var targetRenderProc: () => any;
    var forceTargetUpdateProc: () => void;
    var shareVarSetProc: (name: string, value: any) => void;
    var resetApplicationProc: () => void;

    var shareVarUpdateWildCardHandlers: ShareVarUpdatedCallback[] = [];
    var shareVarUpdateHandlers: jsutil.Map<ShareVarUpdatedCallback[]> = {};

    export var screenHeight = 400;

    export function setCodegenHost(host: CodegenHost): void {
        cgHost = host;
    }

    export function resetCodeState() {
        setTargetRenderProc(null);
        setResetApplicationProc(null);
        clearAllShareVarUpdateHandlers();
        clearAllIntervalHandlers();
        clearIdentifiedElements();
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
    export function setShareVarSetProc(proc: (name: string, value: any) => void) {
        shareVarSetProc = proc;
    }
    export function getShareVarSetProc(): (name: string, value: any) => void {
        return shareVarSetProc;
    }
    export function setResetApplicationProc(proc: () => void) {
        resetApplicationProc = proc;
    }
    export function getResetApplicationProc(): () => void {
        return resetApplicationProc;
    }

    export function onVarUpdated(name: string, value: any) {
        sharedVars[name] = value;
        for (let i = 0; i < shareVarUpdateWildCardHandlers.length; i++) {
            shareVarUpdateWildCardHandlers[i].call(this);
        }
        if (shareVarUpdateHandlers[name]) {
            shareVarUpdateHandlers[name].forEach((v: any, i: number, arr: any[]) => {
                v.call(this);
            });
        }
        updateUI();
    }

    export function registerShareVarUpdateWildcardHandler(cb: ShareVarUpdatedCallback) {
        shareVarUpdateWildCardHandlers.push(cb);
    }
    export function registerShareVarUpdateHandler(name: string, cb: ShareVarUpdatedCallback) {
        if (shareVarUpdateHandlers[name] === undefined)
            shareVarUpdateHandlers[name] = [];
        shareVarUpdateHandlers[name].push(cb);

    }

    export function clearAllShareVarUpdateHandlers() {
        shareVarUpdateWildCardHandlers = [];
        shareVarUpdateHandlers = {};
    }

    // actual routines that are called by generated code
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
        sharedVars[name] = val;
        if (shareVarSetProc)
            shareVarSetProc(name, val);
    }
    export function forceUpdateShareVar(name: string): void {
        let val = sharedVars[name];
        if (val && shareVarSetProc) {
            shareVarSetProc(name, val);
        }
    }

    export function testProc() {
        console.log('testProc called');
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

    var intervalHandlers: number[] = [];
    var timeoutHandlers: number[] = [];
    export function setTimeoutr(fn: () => void, delayMs: number) {
        timeoutHandlers.push(setTimeout(fn, delayMs));
    }

    export function setIntervalr(fn: () => void, delayMs: number) {
        intervalHandlers.push(setInterval(fn, delayMs));
    }

    function clearAllIntervalHandlers() {
        for (let i = 0; i < intervalHandlers.length; i++) {
            clearInterval(intervalHandlers[i]);
        }
        intervalHandlers.splice(0);
        for (let i = 0; i < timeoutHandlers.length; i++) {
            clearTimeout(timeoutHandlers[i]);
        }
        timeoutHandlers.splice(0);
    }

    var identifiedElements: jsutil.Map<any> = {};
    export function setIdElem(name: string, elem: any): void {
        identifiedElements[name] = elem;
    }
    export function getIdElem(name: string): any {
        if (name)
            return identifiedElements[name];
    }

    function clearIdentifiedElements() {
        identifiedElements = {};
    }

    // export var createElement = React.createElement;

    export var Viewr = View;
    export var Imager = Image;
    export var Textr = Text;
    export var Buttonr = Button;
    export var TextInputr = TextInput;
    export var TouchableHighlightr = TouchableHighlight;
    export var ScrollViewr = ScrollView;

    export var GroupBlockf = GroupBlock;
    export var ScrollerBlockf = ScrollerBlock;
    export var ButtonBlockf = ButtonBlock;
    // FRIENDLY : text
    export var TextBlockf = TextBlock;
    // FRIENDLY : image
    // FRIENDLY : textinput
    // FRIENDLY : rectangle
}