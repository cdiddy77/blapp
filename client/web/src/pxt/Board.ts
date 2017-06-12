/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
import * as api from '../../../shared/src/util/api';
import { CodegenRuntime } from '../../../shared/src/util/CodegenRuntime';
import { AppModel } from './AppModel';

// brutal hack
var hackPxsim: any = pxsim;

hackPxsim.ui = api.pxsimui;

// end of brutal hack

export function registerBoard(model: AppModel) {
    pxsim.initCurrentRuntime = () => {
        pxsim.runtime.board = new Board(model);
    };
}

export class Board extends pxsim.BaseBoard {
    model: AppModel;
    constructor(model: AppModel) {
        super();
        this.model = model;
    }

    initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
        console.log('initialized simulator');
        CodegenRuntime.resetCodeState();
        CodegenRuntime.updateUI();
        this.model.setProperty('lastEvalError', null);
        setTimeout(() => { this.model.setProperty('code', msg.code); }, 0);
        return Promise.resolve();
    }

    updateView() {
    }
}
