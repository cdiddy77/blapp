/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>

import { Board } from './sim';

function board(): Board {
    return pxsim.runtime.board as Board;
}

/**
    * A ghost on the screen.
    */
//%
export class Sprite {
    /**
     * The X-coordiante
     */
    //%
    public x = 100;
    /**
    * The Y-coordiante
    */
    //%
    public y = 100;
    public angle = 90;

    /** 
     * Make new sprite
     */
    //%
    constructor() {
    }

    private foobar() { }

    /**
     * Move the thing forward
     */
    //%
    public forwardAsync(steps: number) {
        let deg = this.angle / 180 * Math.PI;
        this.x += Math.cos(deg) * steps * 10;
        this.y += Math.sin(deg) * steps * 10;
        board().updateView();
        return Promise.delay(400)
    }



}