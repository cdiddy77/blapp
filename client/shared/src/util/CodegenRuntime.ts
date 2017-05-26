import * as jsutil from './jsutil';
import * as React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableHighlight,
    ScrollView,
    Dimensions
} from 'react-native';

import { GroupBlock } from '../components/GroupBlock';
import { ScrollerBlock } from '../components/ScrollerBlock';
import { ButtonBlock } from '../components/ButtonBlock';
import { TextBlock } from '../components/TextBlock';
import { ImageBlock } from '../components/ImageBlock';
import { TextInputBlock } from '../components/TextInputBlock';
import { DividerBlock } from '../components/DividerBlock';
import { SpriteBlock } from '../components/SpriteBlock';
import { CanvasBlock } from '../components/CanvasBlock';

import * as BlockThemes from '../util/BlockThemes';

export interface CodegenHost {
}

export type EdgeKind = 'none' | 'left' | 'top' | 'right' | 'bottom';

export interface CodegenComponent {
    resetState(): void;
    componentName(): string;
}
export interface PushContainerOptions {
    canvasId?: string;
}

export namespace CodegenRuntime {
    type ShareVarUpdatedCallback = () => void;

    interface Cont {
        opts: PushContainerOptions;
        elems: any[];
    }
    var curelems: Cont[] = [];
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

    export function setCodegenHost(host: CodegenHost): void {
        cgHost = host;
    }

    export function resetCodeState() {
        setTargetRenderProc(null);
        setResetApplicationProc(null);
        clearAllShareVarUpdateHandlers();
        clearAllIntervalHandlers();
        clearIdentifiedElements();
        clearIdentifiedState();
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

    export function pushCont(opts?: PushContainerOptions) {
        curelems.push({ opts: opts || {}, elems: [] });
    }
    export function popCont(): any[] {
        return curelems.pop().elems;
    }
    export function getContOpts(): PushContainerOptions {
        if (curelems.length == 0) {
            return null;
        } else {
            return curelems[curelems.length - 1].opts
        }
    }

    export function pushElem(e: any) {
        if (curelems.length >= 1)
            curelems[curelems.length - 1].elems.push(e);
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

    var rootStyleCalm: any = {
        backgroundColor: "white",
        flex: 1,
        overflow: "hidden"
    };
    var rootStyleBright: any = {
        backgroundColor: "white",
        flex: 1,
        overflow: "hidden"
    };
    var rootStyleDark: any = {
        backgroundColor: "black",
        flex: 1,
        overflow: "hidden"
    };
    var currentRootStyle: any = rootStyleCalm;
    export function getRootStyle(): any {
        return currentRootStyle;
    }

    export function setDefaultTheme(theme: string): void {
        BlockThemes.setDefaultTheme(BlockThemes.themes[theme]);
        if (theme == 'darkTheme') {
            currentRootStyle = rootStyleDark;
        } else if (theme == 'brightTheme') {
            currentRootStyle = rootStyleBright;
        } else {
            currentRootStyle = rootStyleCalm;
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

    export function getScreenWidth(): number {
        return Dimensions.get('screen').width;
    }

    export function getScreenHeight(): number {
        return Dimensions.get('screen').height;
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

        // the wild thing about react is that even though we 
        // are completely replacing all of the code for the render method
        // and other stuff, and re-rendering, the actual components (which 
        // we are clearing out here), their lifetimes may continue on. In 
        // some situations, the components are keeping extra state around that
        // we really need to be reset
        for (var key in identifiedElements) {
            if (identifiedElements.hasOwnProperty(key)) {
                let idElem = identifiedElements[key];
                if (idElem && idElem.resetState) {
                    idElem.resetState();
                }
            }
        }
        identifiedElements = {};
    }

    var identifiedState: jsutil.Map<any> = {};
    export function setIdState(name: string, elem: any): void {
        identifiedState[name] = elem;
    }
    export function getIdState(name: string): any {
        if (name)
            return identifiedState[name];
    }
    export function updateIdState(name: string, elem: any): void {
        if (identifiedState[name]) {
            identifiedState[name] = Object.assign(identifiedState[name], elem);
        } else {
            identifiedState[name] = elem;
        }
    }

    function clearIdentifiedState() {
        identifiedState = {};
    }

    // CANVAS routines //////////////////////////////////////////////////
    //
    export function canvasGetWidth(name: string): number {
        let canvas: CanvasBlock = getIdElem(name);
        if (canvas && canvas.width) {
            return canvas.width;
        } else {
            return 0;
        }
    }
    export function canvasGetHeight(name: string): number {
        let canvas: CanvasBlock = getIdElem(name);
        if (canvas && canvas.height) {
            return canvas.height;
        } else {
            return 0;
        }
    }
    //
    /////////////////////////////////////////////////////////////////////
    // SPRITE routines //////////////////////////////////////////////////
    //
    export function spriteGetX(name: string): number {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.getX)
            return sprite.getX();
    }
    export function spriteGetY(name: string): number {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.getY)
            return sprite.getY();
    }
    export function spriteGetDirection(name: string): number {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.getDirection)
            return sprite.getDirection();
    }
    export function spriteGetScale(name: string): number {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.getScale)
            return sprite.getScale() * 100;
    }
    export function spriteSetX(name: string, val: number) {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.setX)
            sprite.setX(val);
    }
    export function spriteSetY(name: string, val: number) {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.setY)
            sprite.setY(val);
    }
    export function spriteSetPosition(name: string, xval: number, yval: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.setPosition)
            sprite.setPosition(xval, yval);
    }
    export function spriteSetDirection(name: string, val: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.setDirection)
            sprite.setDirection(val);
    }
    export function spriteSetScale(name: string, val: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.setScale)
            sprite.setScale(val / 100);
    }
    export function spriteRotateLeft(name: string, val: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.rotateLeft)
            sprite.rotateLeft(val);
    }
    export function spriteRotateRight(name: string, val: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.rotateRight)
            sprite.rotateRight(val);
    }
    export function spriteChangeX(name: string, val: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.changeX)
            sprite.changeX(val);
    }
    export function spriteChangeY(name: string, val: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.changeY)
            sprite.changeY(val);
    }
    export function spriteChangePosition(name: string, xval: number, yval: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.changePosition)
            sprite.changePosition(xval, yval);
    }
    export function spriteChangeScale(name: string, val: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.changeScale)
            sprite.changeScale(val / 100);
    }
    export function spriteMove(name: string, val: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.move)
            sprite.move(val);
    }
    export function spriteIsIntersectingEdge(name: string): string {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.isIntersectingEdge)
            return sprite.isIntersectingEdge();
        else
            return 'none';
    }
    export function spriteIsIntersectingSprite(name: string, other: string): boolean {
        let sprite: SpriteBlock = getIdElem(name);
        let otherSprite: SpriteBlock = getIdElem(other);
        if (sprite && sprite.isIntersectingSprite
            && otherSprite && otherSprite.isIntersectingSprite)
            return sprite.isIntersectingSprite(otherSprite);
        else
            return false;
    }
    //
    /////////////////////////////////////////////////////////////////////

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
    export var TextBlockf = TextBlock;
    export var ImageBlockf = ImageBlock;
    export var TextInputBlockf = TextInputBlock;
    export var DividerBlockf = DividerBlock;

    export var SpriteBlockf = SpriteBlock;
    export var CanvasBlockf = CanvasBlock;
}