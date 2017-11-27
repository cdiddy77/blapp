import * as jsutil from './jsutil';
import * as THREE from 'three';
import * as ThreeUtil from './ThreeUtil';

import 'three/examples/js/controls/TrackballControls';
import 'three/examples/js/controls/FlyControls';

export class SceneObject {
    o3d: THREE.Object3D;
    uname: string;

    private static nameCounter: number = 1;
    private static getUniqueName() {
        return `obj${SceneObject.nameCounter++}`;
    }

    private static setRuntimeOwner(o: THREE.Object3D, owner: SceneObject) {
        if (owner) {
            (<any>o)._runtimeOwner = owner;
        } else {
            delete (<any>o)._runtimeOwner;
        }
    }
    public static getRuntimeOwner(o: THREE.Object3D): SceneObject {
        let owner = (<any>o)._runtimeOwner;
        if (owner)
            return owner;
        else return new SceneObject(o);
    }

    constructor(o: THREE.Object3D) {
        this.o3d = o;
        SceneObject.setRuntimeOwner(this.o3d, this);
        if (!this.o3d.name || this.o3d.name == '') {
            this.uname = SceneObject.getUniqueName();
            this.o3d.name = this.uname;
        }
    }

    copyProps(other: THREE.Object3D) {
        if (this.o3d && other) {
            this.o3d.setRotationFromEuler(other.rotation);
            this.o3d.position.set(other.position.x, other.position.y, other.position.z);
            this.o3d.scale.set(other.scale.x, other.scale.y, other.scale.z);

        }
    }

    resetProps() {
        if (this.o3d) {
            this.o3d.rotation.set(0, 0, 0);
            this.o3d.position.set(0, 0, 0);
            this.o3d.scale.set(1, 1, 1);
        }
    }

    /**
     * Used when we have changed the object in a way that requires that we remove this object and
     * replace it with another
     */
    updateInScene(s: THREE.Scene) {
        let old = s.getObjectByName(this.uname);
        if (old) {
            s.remove(old);
            SceneObject.setRuntimeOwner(old, null);
        }

        if (this.o3d) {
            this.o3d.name = this.uname;
            s.add(this.o3d);
            SceneObject.setRuntimeOwner(this.o3d, this);
        }
    }
}


export class CameraObject extends SceneObject {
    getCamera(): THREE.Camera {
        return <THREE.Camera>this.o3d;
    }
}

export class LightObject extends SceneObject {

}

export class CameraControls {
    connectToCamera(cam: CameraObject) {

    }
    disconnectFromCamera(cam: CameraObject) {

    }
    updateForRender(timeDelta: number) {

    }
}

export class TrackballCameraControls extends CameraControls {
    rotateSpeed: number;
    zoomSpeed: number;
    panSpeed: number;
    controls: THREE.TrackballControls;

    constructor(rotate: number, zoom: number, pan: number) {
        super();
        this.rotateSpeed = rotate;
        this.zoomSpeed = zoom;
        this.panSpeed = pan;
        this.controls = null;
    }
    connectToCamera(cam: CameraObject) {
        this.controls = new THREE.TrackballControls(cam.getCamera());
        this.controls.rotateSpeed = this.rotateSpeed;
        this.controls.zoomSpeed = this.zoomSpeed;
        this.controls.panSpeed = this.panSpeed;
    }
    disconnectFromCamera(cam: CameraObject) {
        if (this.controls) {
            (<any>this.controls).dispose();
            this.controls = null;
        }
    }
    updateForRender(timeDelta: number) {
        if (this.controls)
            this.controls.update();
    }

}

export class FlyCameraControls extends CameraControls {
    movementSpeed: number;
    rollSpeed: number;
    autoForward: boolean;
    dragToLook: boolean;
    domElement: HTMLElement;
    controls: any; // THREE.FlyControls

    constructor(ms: number, rs: number, af: boolean, dtl: boolean, de: HTMLElement) {
        super();
        this.movementSpeed = ms;
        this.rollSpeed = rs;
        this.autoForward = af;
        this.dragToLook = dtl;
        this.domElement = de;
        this.controls = null;
    }

    connectToCamera(cam: CameraObject) {
        this.controls = new THREE.FlyControls(cam.getCamera(), this.domElement);
        this.controls.movementSpeed = this.movementSpeed;
        //this.controls.domElement=this.domElement;
        this.controls.rollSpeed = this.rollSpeed;
        this.controls.autoForward = this.autoForward;
        this.controls.dragToLook = this.dragToLook;
    }
    disconnectFromCamera(cam: CameraObject) {
        if (this.controls) {
            if (this.controls.dispose)
                this.controls.dispose();
            this.controls = null;
        }
    }
    updateForRender(timeDelta: number) {
        if (this.controls)
            this.controls.update(timeDelta);
    }

}