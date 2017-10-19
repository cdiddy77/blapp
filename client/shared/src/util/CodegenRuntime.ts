import * as jsutil from './jsutil';
import * as THREE from 'three';
export interface CodegenHost {
    insertRendererElement(domElement: HTMLCanvasElement): void;
    getRenderWidth(): number;
    getRenderHeight(): number;
    setExecutionError(e: any): void;
}

export namespace CodegenRuntime {
    type ShareVarUpdatedCallback = () => void;

    var sharedVars: any = {};
    var cgHost: CodegenHost = null;

    var shareVarSetProc: (name: string, value: any) => void;
    var resetApplicationProc: () => void;

    var onStartProc: () => void;
    var onFrameProc: () => void;

    var renderer: THREE.Renderer = null;
    var scene: THREE.Scene = null;
    var camera: THREE.Camera = null;

    var shareVarUpdateWildCardHandlers: ShareVarUpdatedCallback[] = [];
    var shareVarUpdateHandlers: jsutil.Map<ShareVarUpdatedCallback[]> = {};

    export function setCodegenHost(host: CodegenHost): void {
        cgHost = host;
    }

    export function getCodegenHost(): CodegenHost {
        return cgHost;
    }

    export function resetCodeState() {
        setResetApplicationProc(null);
        setOnStartProc(null);
        setOnFrameProc(null);
        clearAllShareVarUpdateHandlers();
        clearAllIntervalHandlers();
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

    export function setOnStartProc(proc: () => void) {
        onStartProc = proc;
    }
    export function getOnStartProc(): () => void {
        return onStartProc;
    }

    export function setOnFrameProc(proc: () => void) {
        onFrameProc = proc;
    }
    export function getOnFrameProc(): () => void {
        return onFrameProc;
    }

    export function initialize() {
        // create a new renderer if necessary, and append into the 
        // DOM if necessary
        let width = cgHost.getRenderWidth();
        let height = cgHost.getRenderHeight();
        if (!renderer) {
            renderer = new THREE.WebGLRenderer();
            cgHost.insertRendererElement(renderer.domElement);
        }
        renderer.setSize(width, height);

        // create a new scene
        scene = new THREE.Scene();
        // create a new camera
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

        try {
            // execute the on start
            if (getOnStartProc())
                getOnStartProc()();
            // start the animation updates
            renderScene();
        } catch (e) {
            cgHost.setExecutionError(e);
        }
    }

    function renderScene() {
        window.requestAnimationFrame(renderScene);
        try {
            // execute the on start
            if (getOnFrameProc())
                getOnFrameProc()();
        } catch (e) {
            cgHost.setExecutionError(e);
        }
        if (renderer && scene && camera) {
            renderer.render(scene, camera);
        }
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
        // updateUI();
    }
    export function forceUpdateShareVar(name: string): void {
        let val = sharedVars[name];
        if (val && shareVarSetProc) {
            shareVarSetProc(name, val);
        }
    }

    export function ensureString(v: any): string {
        if (!v) return null;

        return String(v);
    }

    var intervalHandlers: number[] = [];
    var timeoutHandlers: number[] = [];
    export function setTimeoutr(fn: () => void, delayMs: number) {
        timeoutHandlers.push(window.setTimeout(fn, delayMs));
    }

    export function setIntervalr(fn: () => void, delayMs: number) {
        intervalHandlers.push(window.setInterval(fn, delayMs));
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

}