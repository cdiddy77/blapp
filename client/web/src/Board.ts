/// <reference path="./../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
import * as uiApi from './../../shared/src/util/uiApi';
import * as dataApi from './../../shared/src/util/dataApi';
import * as styleApi from './../../shared/src/util/styleApi';
import * as timeApi from './../../shared/src/util/timeApi';
import { CodegenRuntime } from './../../shared/src/util/CodegenRuntime';
import { AppModel } from './AppModel';

// brutal hack //////////////////////////////////////////
var hackPxsim: any = pxsim;

hackPxsim.UI = uiApi.pxsimui;
hackPxsim.Data = dataApi.pxsimdata;
hackPxsim.Style = styleApi.pxsimstyle;
hackPxsim.Time = timeApi.pxsimtime;
//
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
