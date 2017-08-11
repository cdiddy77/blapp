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
    Dimensions,
    PanResponder,
    PanResponderInstance,
    GestureResponderEvent,
    PanResponderGestureState,
    Platform
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
    runFiberAsync(a: any, arg0?: any, arg1?: any, arg2?: any): Promise<any>;
    runFiberSync(a: any, resolve: (thenableOrResult?: any) => void, arg0?: any, arg1?: any, arg2?: any): void;
    createRefCollection(): any;
}

export type EdgeKind = 'none' | 'left' | 'top' | 'right' | 'bottom';
export type EdgeKinds = 'none' | 'left' | 'top' | 'right' | 'bottom' | 'horizontal' | 'vertical' | 'any';

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

    /////////
    // sharevar latency stuff
    var shv_recordShareVarLatency: boolean = true;
    var shv_lastUpdated: number = 0;
    const shv_updateFrequency: number = 1000; // ms
    var shv_cliTimeCount: number = 0;
    var shv_cliTimeSum: number = 0;
    var shv_srvTimeCount: number = 0;
    var shv_srvTimeSum: number = 0;

    export function handleUpdateSharevarDiags(clientTime: number, serverTime: number) {
        if (!shv_recordShareVarLatency) return;

        let curTime = new Date().getTime();
        if (curTime - shv_lastUpdated >= shv_updateFrequency) {
            setIdState('shv_mps', (shv_cliTimeCount / (curTime - shv_lastUpdated)) * 1000);
            setIdState('shv_avg_cli_late', shv_cliTimeSum / shv_cliTimeCount);
            setIdState('shv_avg_srv_late', shv_srvTimeSum / shv_srvTimeCount);
            shv_cliTimeCount = shv_cliTimeSum = shv_srvTimeCount = shv_srvTimeSum = 0;
            shv_lastUpdated = curTime;
        }
        shv_cliTimeCount++;
        shv_srvTimeCount++;
        shv_cliTimeSum += curTime - clientTime;
        shv_srvTimeSum += curTime - serverTime;
    }
    //
    /////////////////////////

    export function setCodegenHost(host: CodegenHost): void {
        cgHost = host;
    }

    export function getCodegenHost(): CodegenHost {
        return cgHost;
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
        //updateUI();
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

    export function initShareVars(initVars: any): void {
        console.log('initShareVars'); // , JSON.stringify(initVars));
        sharedVars = initVars;
        updateUI();
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
        if (elem)
            identifiedElements[name] = elem;
        else if (identifiedElements[name])
            delete identifiedElements[name];
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

    export function setIdState(name: string, datum: any): void {
        identifiedState[name] = datum;
    }
    export function getIdState(name: string): any {
        if (name)
            return identifiedState[name];
    }
    export function updateIdState(name: string, datum: any): void {
        if (identifiedState[name]) {
            identifiedState[name] = Object.assign(identifiedState[name], datum);
        } else {
            identifiedState[name] = datum;
        }
    }

    function clearIdentifiedState() {
        identifiedState = {};
    }

    // CANVAS routines //////////////////////////////////////////////////
    //
    export function canvasGetWidth(name: string): number {
        let canvas: CanvasBlock = getIdElem(name);
        if (canvas && canvas.laidoutWidth) {
            return canvas.laidoutWidth;
        } else {
            return 0;
        }
    }
    export function canvasGetHeight(name: string): number {
        let canvas: CanvasBlock = getIdElem(name);
        if (canvas && canvas.laidoutHeight) {
            return canvas.laidoutHeight;
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
    export function spriteIsIntersectingEdge(name: string, edgeType: EdgeKinds): string {
        let sprite: SpriteBlock = getIdElem(name);
        if (sprite && sprite.isIntersectingEdge)
            return sprite.isIntersectingEdge(edgeType);
        else
            return 'none';
    }
    export function spriteBounceOnEdgeIntersect(name: string, edgeType: EdgeKinds, speed: number): void {
        let sprite: SpriteBlock = getIdElem(name);
        if (!sprite || !sprite.bounceOnEdgeIntersect) return;
        sprite.bounceOnEdgeIntersect(edgeType, speed);
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
    export function spriteBounceOnSpriteIntersect(name: string, other: string, speed: number, otherSpeed: number) {
        let sprite: SpriteBlock = getIdElem(name);
        let otherSprite: SpriteBlock = getIdElem(other);
        if (sprite && sprite.bounceOnSpriteIntersect
            && otherSprite && otherSprite.bounceOnSpriteIntersect) {
            return sprite.bounceOnSpriteIntersect(speed, otherSprite, otherSpeed);
        }
    }
    //
    /////////////////////////////////////////////////////////////////////

    // TOUCH handling routines //////////////////////////////////////////
    //
    export function createGestureHandler(
        touchStartCb: () => void,
        touchMoveCb: () => void,
        touchEndCb: () => void): PanResponderInstance {
        // DELETE : debuglog
        let touchDown: jsutil.Point = null;
        let result = PanResponder.create({
            // Ask to be the responder:
            onMoveShouldSetPanResponder: (e: GestureResponderEvent, gestureState: PanResponderGestureState): boolean => {
                return true;
            },
            onStartShouldSetPanResponder: (e: GestureResponderEvent, gestureState: PanResponderGestureState): boolean => {
                return true;
            },
            onPanResponderGrant: (e: GestureResponderEvent, gestureState: PanResponderGestureState): void => {
            },
            onPanResponderMove: (e: GestureResponderEvent, gestureState: PanResponderGestureState): void => {
                if (gestureState.numberActiveTouches == 0)
                    return;
                if (touchDown)
                    lastTouchMove = new jsutil.Point(touchDown.x + gestureState.dx, touchDown.y + gestureState.dy);
                else
                    lastTouchMove = null;
                lastTouchDown = touchDown;
                touchMoveCb();
                lastTouchDown = null;
                lastTouchMove = null;
            },
            onPanResponderRelease: (e: GestureResponderEvent, gestureState: PanResponderGestureState): void => {
                lastTouchDown = touchDown;
                if (touchDown)
                    lastTouchMove = new jsutil.Point(touchDown.x + gestureState.dx, touchDown.y + gestureState.dy);
                else
                    lastTouchMove = null;
                touchEndCb();
                lastTouchDown = null;
                lastTouchMove = null;
                touchDown = null;
            },
            onPanResponderTerminate: (e: GestureResponderEvent, gestureState: PanResponderGestureState): void => {
            },
            onMoveShouldSetPanResponderCapture: (e: GestureResponderEvent, gestureState: PanResponderGestureState): boolean => {
                return true;
            },
            onStartShouldSetPanResponderCapture: (e: GestureResponderEvent, gestureState: PanResponderGestureState): boolean => {
                return true;
            },
            onPanResponderReject: (e: GestureResponderEvent, gestureState: PanResponderGestureState): void => {
            },
            onPanResponderStart: (e: GestureResponderEvent, gestureState: PanResponderGestureState): void => {
                if (gestureState.numberActiveTouches == 0)
                    return;
                touchDown = new jsutil.Point(
                    e.nativeEvent.locationX || (<any>e.nativeEvent).offsetX,
                    e.nativeEvent.locationY || (<any>e.nativeEvent).offsetY);
                lastTouchDown = touchDown;
                lastTouchMove = lastTouchDown;
                touchStartCb();
                lastTouchDown = null;
                lastTouchMove = null;

                // HACK HACK HACK : we found that on react-native-web, as of v0.95, 
                // there was a bug that the dx and dy did not get reset when the mouse was released,
                // or pressed. So we are resetting it ourselves. Which is super-sleazy, so we are 
                // limiting the sleaze to web-only
                let platformOs: string = Platform.OS;
                if (platformOs == 'web')
                    gestureState.dx = gestureState.dy = 0;
            },
            onPanResponderEnd: (e: GestureResponderEvent, gestureState: PanResponderGestureState): void => {
            },
            onPanResponderTerminationRequest: (e: GestureResponderEvent, gestureState: PanResponderGestureState): boolean => {
                return true;
            },
        });

        return result;
    }

    var lastTouchDown: jsutil.Point;
    var lastTouchMove: jsutil.Point;

    export function getTouchDownX(): number {
        if (lastTouchDown) return lastTouchDown.x;
    }
    export function getTouchDownY(): number {
        if (lastTouchDown) return lastTouchDown.y;
    }
    export function getTouchMoveX(): number {
        if (lastTouchMove) return lastTouchMove.x;
    }
    export function getTouchMoveY(): number {
        if (lastTouchMove) return lastTouchMove.y;
    }
    export function getTouchDeltaX(): number {
        if (lastTouchDown && lastTouchMove)
            return lastTouchMove.x - lastTouchDown.x;
    }
    export function getTouchDeltaY(): number {
        if (lastTouchDown && lastTouchMove)
            return lastTouchMove.y - lastTouchDown.y;
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