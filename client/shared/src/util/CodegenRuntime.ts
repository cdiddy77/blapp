import * as jsutil from './jsutil';
import * as THREE from 'three';
// double hack and a half 
(<any>global).THREE = THREE;

import * as dat from 'dat-gui';

import * as ThreeUtil from './ThreeUtil';
import * as Rto from './RuntimeObjects';

import 'three/examples/js/loaders/MTLLoader';
import 'three/examples/js/loaders/OBJLoader';

export interface CodegenHost {
    insertRendererElement(domElement: HTMLCanvasElement): void;
    getRendererHostElement(): HTMLElement;
    getRenderWidth(): number;
    getRenderHeight(): number;
    setExecutionError(e: any): void;
}

export namespace CodegenRuntime {
    type ShareVarUpdatedCallback = () => void;

    type MouseEventValue = "DOWN" | "MOVE" | "UP";

    interface ObjInfo {
        path: string,
        objname: string,
        mtlname: string,
        cache: THREE.Object3D
    };

    var sharedVars: any = {};
    var cgHost: CodegenHost = null;

    var shareVarSetProc: (name: string, value: any) => void;
    var resetApplicationProc: () => void;

    var onStartProc: () => void;
    var onFrameProc: () => void;

    var keyEventProcs: jsutil.Map<(() => void)[]> = {};

    var renderer: THREE.WebGLRenderer = null;
    var scene: THREE.Scene = null;
    var camera: Rto.CameraObject = null;
    var stats: { update: () => void } = null;
    var cameraControls: Rto.CameraControls = null;
    var clock: THREE.Clock = null;
    var datGui: dat.GUI = null;
    var datGuiObject: any = {};

    var shareVarUpdateWildCardHandlers: ShareVarUpdatedCallback[] = [];
    var shareVarUpdateHandlers: jsutil.Map<ShareVarUpdatedCallback[]> = {};

    export const knownObjs: jsutil.Map<ObjInfo> = {
        DROPSHIP: {
            path: 'assets/dropship/surface/',
            objname: 'DROPSHIP',
            mtlname: 'DROPSHIP',
            cache: null
        }
    };
    export function setCodegenHost(host: CodegenHost): void {
        cgHost = host;
    }

    export function getCodegenHost(): CodegenHost {
        return cgHost;
    }

    export function setStats(s: { update: () => void }) {
        stats = s;
    }

    export function unsetWebGLObjects() {
        if (scene) {
            while (scene.children.length > 0) {
                scene.remove(scene.children[0]);
            }
            scene = null;
        }
        if (renderer) {
            renderer.dispose();
            renderer = null;
        }
        removeDatGui();
    }

    export function resetCodeState() {
        setResetApplicationProc(null);
        setOnStartProc(null);
        setOnFrameProc(null);
        resetKeyEventProcs();

        camera = null;
        if (scene) {
            while (scene.children.length > 0) {
                scene.remove(scene.children[0]);
            }
        }
        datGuiObject = {};
        removeDatGui();

        clearAllShareVarUpdateHandlers();
        clearAllIntervalHandlers();
    }

    function removeDatGui() {
        if (datGui) {
            console.log('destroying datgui');
            if (cgHost.getRendererHostElement())
                cgHost.getRendererHostElement().removeChild(datGui.domElement);
            datGui.destroy();
            datGui = null;
        }

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

    export function setKeyboardEventProc(eventName: string, cb: () => void) {
        let cbs = keyEventProcs[eventName];
        if (!cbs) cbs = keyEventProcs[eventName] = [];
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
            // renderer.shadowMapType = THREE.PCFSoftShadowMap;
            // renderer.shadowMapType=THREE.PCFShadowMap;
            cgHost.insertRendererElement(renderer.domElement);
            renderer.domElement.addEventListener('keydown', onKeyEvent);
        }
        renderer.setSize(width, height);

        if (!scene) {
            scene = new THREE.Scene();
        }

        if (cameraControls && camera)
            cameraControls.disconnectFromCamera(camera);
        // create a new camera
        camera = new Rto.CameraObject(new THREE.PerspectiveCamera(45, width / height, 0.1, 1000));
        if (cameraControls)
            cameraControls.connectToCamera(camera);

        //scene.add(new THREE.AxisHelper(20));
        clock = new THREE.Clock();

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
            if (camera) {
                let perspectCam = <THREE.PerspectiveCamera>camera.getCamera();
                perspectCam.aspect = width / height;
                perspectCam.updateProjectionMatrix();
            }
            renderer.setSize(width, height);
            console.log("changing aspect", width / height);

        }

        // code that needs to get executed before the render should go here
        //
        if (cameraControls)
            cameraControls.updateForRender(clock.getDelta());
        //
        //////////////////////////////////////////

        try {
            // execute the on start
            if (getOnFrameProc())
                getOnFrameProc()();
        } catch (e) {
            cgHost.setExecutionError(e);
        }
        if (stats) stats.update();
        if (renderer && scene && camera) {
            renderer.render(scene, camera.getCamera());
        }
    }

    // start of 3d apis ///////////////////////////////////////////////////////////
    //
    export function createPlaneGeometry(width: number, height: number): THREE.BufferGeometry {
        return new THREE.PlaneBufferGeometry(width, height);
    }

    export function createCubeGeometry(width: number, height: number, depth: number): THREE.Geometry {
        return new THREE.CubeGeometry(width, height, depth);
    }

    export function createSphereGeometry(radius: number, width: number, height: number): THREE.BufferGeometry {
        return new THREE.SphereBufferGeometry(radius, width, height);
    }

    export function createMeshBasicMaterial(color: string, wireframe: boolean) {
        return new THREE.MeshLambertMaterial({
            color: new THREE.Color(color),
            wireframe: wireframe
        })
    }

    export function createMesh(geometry: THREE.Geometry | THREE.BufferGeometry, material: THREE.Material): Rto.SceneObject {
        var result = new THREE.Mesh(geometry, material);
        result.receiveShadow = true;
        result.castShadow = true;
        return new Rto.SceneObject(result);
    }

    export function createPlane(
        width: number,
        height: number,
        material: string | THREE.Material,
        position: THREE.Vector3): Rto.SceneObject {
        if (!(material instanceof THREE.Material)) {
            material = createMeshBasicMaterial(material, false);
        }
        let result = createMesh(createPlaneGeometry(width, height), material);
        result.o3d.position.set(position.x, position.y, position.z);
        return result;
    }

    export function createCube(
        width: number,
        height: number,
        depth: number,
        material: string | THREE.Material,
        position: THREE.Vector3): Rto.SceneObject {
        if (!(material instanceof THREE.Material)) {
            material = createMeshBasicMaterial(material, false);
        }
        let result = createMesh(createCubeGeometry(width, height, depth), material);
        result.o3d.position.set(position.x, position.y, position.z);
        return result;
    }

    export function createSphere(
        radius: number,
        widthSegments: number,
        heightSegments: number,
        material: string | THREE.Material,
        position: THREE.Vector3): Rto.SceneObject {
        if (!(material instanceof THREE.Material)) {
            material = createMeshBasicMaterial(material, false);
        }
        let result = createMesh(createSphereGeometry(radius, widthSegments, heightSegments), material);
        result.o3d.position.set(position.x, position.y, position.z);
        return result;
    }

    export function createOBJ(objInfo: ObjInfo): Rto.SceneObject {
        // create a placeholder object
        if (objInfo.cache) {
            // clean it out?
            let retval = new Rto.SceneObject(objInfo.cache);
            retval.resetProps();
            return retval;
        }
        let material = createMeshBasicMaterial("#00ff00", false);
        let result = createMesh(new THREE.TorusKnotGeometry(10), material);
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath(objInfo.path);
        mtlLoader.load(objInfo.mtlname + '.mtl', (materials) => {
            materials.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath(objInfo.path);
            objLoader.load(objInfo.objname + '.obj', function(object) {
                let oldobj = result.o3d;
                object.receiveShadow = true;
                object.castShadow = true;
                result.o3d = object;
                result.copyProps(oldobj);
                result.updateInScene(scene);
                objInfo.cache = object;
            },
                (ev) => { },
                (err) => {
                    console.log('error downloading:', JSON.stringify(err));
                });

        }, (ev) => { },
            (errEv) => {
                console.log('error downloading:', JSON.stringify(errEv));
            });

        return result;
    }

    export function createSpotlight(color: string): Rto.LightObject {
        var result = new THREE.SpotLight(color);
        result.castShadow = true;
        result.shadow.mapSize.height = 4096;
        return new Rto.LightObject(result);
    }

    export function createAmbientlight(color: string): Rto.LightObject {
        var result = new THREE.AmbientLight(color);
        return new Rto.LightObject(result);
    }

    export function sceneAdd(elem: Rto.SceneObject) {
        if (scene && elem) scene.add(elem.o3d);
    }

    export function sceneRemove(elem: Rto.SceneObject) {
        if (scene && elem) scene.remove(elem.o3d);
    }

    export function setRotation(obj: Rto.SceneObject, x: number, y: number, z: number) {
        if (obj) obj.o3d.rotation.set(x, y, z);
    }

    export function setPosition(obj: Rto.SceneObject, x: number, y: number, z: number) {
        if (obj) obj.o3d.position.set(x, y, z);
    }

    export function setScale(obj: Rto.SceneObject, x: number, y: number, z: number) {
        if (obj) obj.o3d.scale.set(x, y, z);
    }

    export function setRotationX(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.rotation.x = value;
    }

    export function setRotationY(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.rotation.y = value;
    }

    export function setRotationZ(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.rotation.z = value;
    }

    export function setPositionX(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.position.x = value;
    }

    export function setPositionY(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.position.y = value;
    }

    export function setPositionZ(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.position.z = value;
    }

    export function changeRotationX(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.rotation.x += value;
    }

    export function changeRotationY(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.rotation.y += value;
    }

    export function changeRotationZ(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.rotation.z += value;
    }

    export function changePositionX(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.position.x += value;
    }

    export function changePositionY(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.position.y += value;
    }

    export function changePositionZ(obj: Rto.SceneObject, value: number) {
        if (obj) obj.o3d.position.z += value;
    }

    export function getPosition(obj: Rto.SceneObject): THREE.Vector3 {
        if (!obj) return new THREE.Vector3();
        return obj.o3d.position;
    }

    export function getScenePosition(): THREE.Vector3 {
        if (!scene) return new THREE.Vector3();
        return scene.position;
    }

    export function definePosition(x: number, y: number, z: number): THREE.Vector3 {
        return new THREE.Vector3(x, y, z);
    }

    export function getSceneElements(): Rto.SceneObject[] {
        if (!scene) return [];
        return scene.children.map(v => new Rto.SceneObject(v));
    }

    export function getCameraPosition(): THREE.Vector3 {
        if (!camera) return new THREE.Vector3();
        return camera.getCamera().position;
    }

    export function setCameraPositionX(v: number) {
        camera.getCamera().position.x = v;
    }

    export function setCameraPositionY(v: number) {
        camera.getCamera().position.y = v;
    }

    export function setCameraPositionZ(v: number) {
        camera.getCamera().position.z = v;
    }

    export function cameraLookAtObject(obj: Rto.SceneObject) {
        camera.getCamera().lookAt(obj.o3d.position);
    }

    export function cameraLookAtPosition(pos: THREE.Vector3) {
        camera.getCamera().lookAt(pos);
    }

    export function cameraEnableControls(controls: Rto.CameraControls) {
        cameraControls = controls;
        if (camera && cameraControls)
            cameraControls.connectToCamera(camera);
    }

    export function cameraDisableControls() {
        if (cameraControls) {
            cameraControls.disconnectFromCamera(camera);
        }
    }

    export function createTrackballControls(rotateSpeed: number, zoomSpeed: number, panSpeed: number): Rto.TrackballCameraControls {
        return new Rto.TrackballCameraControls(rotateSpeed, zoomSpeed, panSpeed);
    }

    export function createFlyControls(movementSpeed: number, rollSpeed: number, autoForward: boolean, dragToLook: boolean) {
        return new Rto.FlyCameraControls(movementSpeed, rollSpeed, autoForward, dragToLook, cgHost.getRendererHostElement());
    }
    //
    // end of 3d stuff ///////////////////////////////////////////////////////////

    // gui stuff /////////////////////////////////////////////////////////////////
    //
    function ensureDatGui() {
        console.log('ensuring dat.gui');
        if (!datGui) {
            datGui = new dat.GUI({ autoPlace: false });
            datGui.domElement.style.position = 'absolute';
            datGui.domElement.style.top = '20px';
            datGui.domElement.style.right = '0px';
            cgHost.getRendererHostElement().appendChild(datGui.domElement);
        }
    }
    export function createGuiVariable(name: string, val: any) {
        ensureDatGui();
        if (!val)
            val = '';
        datGuiObject[name] = val;
        datGui.add(datGuiObject, name);
    }
    export function createGuiChoiceVariable(name: string, initial: string | number | boolean, choices: string[] | number[]) {
        ensureDatGui();
        datGuiObject[name] = initial;
        if (!initial && choices.length > 0)
            initial = choices[0];
        datGui.add(datGuiObject, name, choices);
    }
    export function createGuiButton(name: string, fn: () => void) {
        ensureDatGui();
        datGuiObject[name] = fn;
        datGui.add(datGuiObject, name);
    }
    export function createGuiNumberVariable(name: string, initial: number, min: number, max: number) {
        ensureDatGui();
        datGuiObject[name] = initial || 0;
        datGui.add(datGuiObject, name, min, max);
    }
    export function createGuiColorVariable(name: string, initial: string) {
        ensureDatGui();
        datGuiObject[name] = initial || '#ffffff';
        datGui.addColor(datGuiObject, name, initial);
    }
    export function getGuiVariable(name: string): any {
        return datGuiObject[name];
    }
    //
    // end of gui stuff //////////////////////////////////////////////////////////

    // shared var stuff //////////////////////////////////////////////////////////
    //
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
    //
    ///////////////////////////////////////////////////////////////////////////////////

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