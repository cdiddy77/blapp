/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
import {Sprite} from './Sprite';
import * as api from './api';

// brutal hack
var hackPxsim:any = pxsim;

hackPxsim.turtle = api.pxsimturtle;
hackPxsim.console = api.pxsimconsole;
hackPxsim.control = api.pxsimcontrol;
// end of brutal hack

pxsim.initCurrentRuntime = () => {
    pxsim.runtime.board = new Board();
};

export class Board extends pxsim.BaseBoard {
    public element: SVGElement;
    public spriteElement: SVGCircleElement;
    public sprite: Sprite;

    constructor() {
        super();
        this.element = <SVGElement><any>document.getElementById('svgcanvas');
        this.spriteElement = <SVGCircleElement><any>document.getElementById('svgsprite');
        this.sprite = new Sprite();
    }

    initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
        console.log('messing up simulator');

        document.body.innerHTML = ''; // clear children
        document.body.appendChild(this.element);

        return Promise.resolve();
    }

    updateView() {
        this.spriteElement.cx.baseVal.value = this.sprite.x;
        this.spriteElement.cy.baseVal.value = this.sprite.y;
    }
}
