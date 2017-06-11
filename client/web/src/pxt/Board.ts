/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
import * as api from '../../../shared/src/util/api';

// brutal hack
var hackPxsim: any = pxsim;

hackPxsim.ui = api.pxsimui;

// end of brutal hack

export function registerBoard() {
    pxsim.initCurrentRuntime = () => {
        pxsim.runtime.board = new Board();
    };
}

export class Board extends pxsim.BaseBoard {

    constructor() {
        super();
    }

    initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
        console.log('initialized simulator');
        return Promise.resolve();
    }

    updateView() {
    }
}
