/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    initCurrentRuntime = () => {
        runtime.board = new Board();
    };

    export function board() : Board {
        return runtime.board as Board;
    }

    export class Board extends pxsim.BaseBoard {
        constructor() {
            super();
        }
        
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            console.log('messing up  simulator')
            return Promise.resolve();
        }       
        
        updateView() {
        }
    }
}