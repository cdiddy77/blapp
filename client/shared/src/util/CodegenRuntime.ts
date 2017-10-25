import * as jsutil from './jsutil';
import * as THREE from 'three';
import * as ThreeUtil from './ThreeUtil';

export interface CodegenHost {
    insertRendererElement(domElement: HTMLCanvasElement): void;
    getRenderWidth(): number;
    getRenderHeight(): number;
    setExecutionError(e: any): void;
}

export type MouseEventValue = "DOWN" | "MOVE" | "UP";
export type KeyEventValue = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "any" | "up" | "down" | "left" | "right" | "space" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
export var KeyNames: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "<any>",
    "Arrow Up",
    "Arrow Down",
    "Arrow Left",
    "Arrow Right",
    "<enter>",
    "<space>",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
export var KeyValues: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Enter",
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

export namespace CodegenRuntime {
    type ShareVarUpdatedCallback = () => void;

    var sharedVars: any = {};
    var cgHost: CodegenHost = null;

    var shareVarSetProc: (name: string, value: any) => void;
    var resetApplicationProc: () => void;

    var onStartProc: () => void;
    var onFrameProc: () => void;

    var keyEventProcs: jsutil.Map<(() => void)[]> = {};

    var renderer: THREE.WebGLRenderer = null;
    var scene: THREE.Scene = null;
    var camera: THREE.PerspectiveCamera = null;
    var stats: { update: () => void } = null;

    var shareVarUpdateWildCardHandlers: ShareVarUpdatedCallback[] = [];
    var shareVarUpdateHandlers: jsutil.Map<ShareVarUpdatedCallback[]> = {};

    export function setCodegenHost(host: CodegenHost): void {
        cgHost = host;
    }

    export function getCodegenHost(): CodegenHost {
        return cgHost;
    }

    export function setStats(s: { update: () => void }) {
        stats = s;
    }

    export function resetCodeState() {
        setResetApplicationProc(null);
        setOnStartProc(null);
        setOnFrameProc(null);
        resetKeyEventProcs();
        camera = null;
        scene = null;
        renderer = null;
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

    export function resetKeyEventProcs() {
        // right now we don't have to do anything because we recreate the canvas every time
        keyEventProcs = {};
    }

    export function setMouseEventProc(ev: MouseEventValue, cb: () => void) {
        if (!renderer) return;
        let eventName: string;
        switch (ev) {
            case 'DOWN':
                eventName = 'mousedown';
                break;
            case 'MOVE':
                eventName = 'mousemove';
                break;
            case 'UP':
                eventName = 'mouseup';
                break;
            default:

        }
        renderer.domElement.addEventListener(eventName, cb);
    }

    export function setKeyboardEventProc(ev: KeyEventValue, cb: () => void) {
        let cbs = keyEventProcs[ev];
        if (!cbs) cbs = keyEventProcs[ev] = [];
        cbs.push(cb);
    }
    function onKeyEvent(ev: KeyboardEvent): any {
        let cbs = keyEventProcs[ev.key];
        if (ev.key != "*" && cbs) {
            cbs.forEach(cb => {
                cb();
            });
        }
        cbs = keyEventProcs["*"];
        if (cbs) {
            cbs.forEach(cb => {
                cb();
            });
        }
    }

    export function preEval() {
        // create a new renderer if necessary, and append into the 
        // DOM if necessary
        let width = cgHost.getRenderWidth();
        let height = cgHost.getRenderHeight();
        console.log('CodegenRuntime.initialize', width, height);
        if (!renderer) {
            renderer = new THREE.WebGLRenderer({
                clearColor: 0xeeeeee
            });
            renderer.shadowMap.enabled = true;
            // renderer.shadowMapType=THREE.PCFShadowMap;
            cgHost.insertRendererElement(renderer.domElement);
        }
        renderer.setSize(width, height);
        renderer.domElement.addEventListener('keydown', onKeyEvent);

        // create a new scene
        scene = new THREE.Scene();
        // create a new camera
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

        // scene.add(new THREE.AxisHelper(20));

    }
    export function postEval() {
        // execute the on start
        if (getOnStartProc())
            getOnStartProc()();
        // start the animation updates
        renderScene();
    }

    function renderScene() {
        if (!renderer) return;
        window.requestAnimationFrame(renderScene);
        let width = cgHost.getRenderWidth();
        let height = cgHost.getRenderHeight();
        if (width != renderer.getSize().width || height != renderer.getSize().height) {
            renderer.setSize(width, height);
            console.log("changing aspect", width / height);
            // nothing seems to work here
            if (camera) camera.aspect = width / height;
            // if(camera){
            //     let newCam = camera.clone();
            //     newCam.aspect = width/height;
            //     camera = newCam;
            // }
        }
        try {
            // execute the on start
            if (getOnFrameProc())
                getOnFrameProc()();
        } catch (e) {
            cgHost.setExecutionError(e);
        }
        if (stats) stats.update();
        if (renderer && scene && camera) {
            renderer.render(scene, camera);
        }
    }

    export function createPlaneGeometry(width: number, height: number): THREE.Geometry {
        return new THREE.PlaneGeometry(width, height);
    }

    export function createCubeGeometry(width: number, height: number, depth: number): THREE.Geometry {
        return new THREE.CubeGeometry(width, height, depth);
    }

    export function createSphereGeometry(radius: number, width: number, height: number): THREE.Geometry {
        return new THREE.SphereGeometry(radius, width, height);
    }

    export function createMeshBasicMaterial(color: string, wireframe: boolean) {
        return new THREE.MeshLambertMaterial({
            color: new THREE.Color(color),
            wireframe: wireframe
        })
    }

    export function createMesh(geometry: THREE.Geometry, material: THREE.Material): THREE.Mesh {
        var result = new THREE.Mesh(geometry, material);
        result.receiveShadow = true;
        result.castShadow = true;
        return result;
    }

    export function createSpotlight(color: string) {
        var result = new THREE.SpotLight(color);
        result.castShadow = true;
        result.shadow.mapSize.height = 4096;
        return result;
    }

    export function createAmbientlight(color: string) {
        var result = new THREE.AmbientLight(color);
        return result;
    }

    export function sceneAdd(elem: THREE.Object3D) {
        if (scene) scene.add(elem);
    }

    export function setRotation(obj: THREE.Object3D, x: number, y: number, z: number) {
        if (obj) obj.rotation.set(x, y, z);
    }

    export function setPosition(obj: THREE.Object3D, x: number, y: number, z: number) {
        if (obj) obj.position.set(x, y, z);
    }

    export function setRotationX(obj: THREE.Object3D, value: number) {
        if (obj) obj.rotation.x = value;
    }

    export function setRotationY(obj: THREE.Object3D, value: number) {
        if (obj) obj.rotation.y = value;
    }

    export function setRotationZ(obj: THREE.Object3D, value: number) {
        if (obj) obj.rotation.z = value;
    }

    export function setPositionX(obj: THREE.Object3D, value: number) {
        if (obj) obj.position.x = value;
    }

    export function setPositionY(obj: THREE.Object3D, value: number) {
        if (obj) obj.position.y = value;
    }

    export function setPositionZ(obj: THREE.Object3D, value: number) {
        if (obj) obj.position.z = value;
    }

    export function changeRotationX(obj: THREE.Object3D, value: number) {
        if (obj) obj.rotation.x += value;
    }

    export function changeRotationY(obj: THREE.Object3D, value: number) {
        if (obj) obj.rotation.y += value;
    }

    export function changeRotationZ(obj: THREE.Object3D, value: number) {
        if (obj) obj.rotation.z += value;
    }

    export function changePositionX(obj: THREE.Object3D, value: number) {
        if (obj) obj.position.x += value;
    }

    export function changePositionY(obj: THREE.Object3D, value: number) {
        if (obj) obj.position.y += value;
    }

    export function changePositionZ(obj: THREE.Object3D, value: number) {
        if (obj) obj.position.z += value;
    }

    export function getPosition(obj: THREE.Object3D): THREE.Vector3 {
        if (!obj) return new THREE.Vector3();
        return obj.position;
    }

    export function getScenePosition(): THREE.Vector3 {
        if (!scene) return new THREE.Vector3();
        return scene.position;
    }

    export function getCameraPosition(): THREE.Vector3 {
        if (!camera) return new THREE.Vector3();
        return camera.position;
    }

    export function setCameraPositionX(v: number) {
        camera.position.x = v;
    }

    export function setCameraPositionY(v: number) {
        camera.position.y = v;
    }

    export function setCameraPositionZ(v: number) {
        camera.position.z = v;
    }

    export function cameraLookAtObject(obj: THREE.Object3D) {
        camera.lookAt(obj.position);
    }

    export function cameraLookAtPosition(pos: THREE.Vector3) {
        camera.lookAt(pos);
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