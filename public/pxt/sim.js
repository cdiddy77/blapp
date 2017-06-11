/// <reference path="../libs/core/enums.d.ts"/>
// examples of stuff you can do ///////////////////////////////////
//
//    /**
//      * Moves the sprite forward
//      * @param steps number of steps to move, eg: 1
//      */
//     //% weight=90
//     //% blockId=sampleForward block="forward %steps"
//     export function forwardAsync(steps: number) {
//         return board().sprite.forwardAsync(steps)
//     }
//     /**
//      * Moves the sprite forward
//      * @param direction the direction to turn, eg: Direction.Left
//      * @param angle degrees to turn, eg:90
//      */
//     //% weight=85
//     //% blockId=sampleTurn block="turn %direction|by %angle degrees"
//     export function turnAsync(direction: Direction, angle: number) {
//         let b = board();
//         if (direction == Direction.Left)
//             b.sprite.angle -= angle;
//         else
//             b.sprite.angle += angle;
//         return Promise.delay(400)
//     }
//
///////////////////////////////////////////////////////////////////
var pxsim;
(function (pxsim) {
    var ui;
    (function (ui) {
        /**
         * The User Interface goes inside this
         * @param theme the general look of various UI elements, eg: UITheme.Calm
         */
        //% weight=90
        //% blockId=user_interface
        //% block="UI theme %theme"
        function userInterface(theme, body) {
        }
        ui.userInterface = userInterface;
        /**
         * An element for grouping other elements
         */
        //% weight=90
        //% blockId=group_element
        //% block="Group id %name|dir %direction|flex %flex|class %className"
        function groupElement(name, direction, flex, className, children) {
        }
        ui.groupElement = groupElement;
    })(ui = pxsim.ui || (pxsim.ui = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
var pxsim;
(function (pxsim) {
    pxsim.initCurrentRuntime = () => {
        pxsim.runtime.board = new Board();
    };
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    class Board extends pxsim.BaseBoard {
        constructor() {
            super();
        }
        initAsync(msg) {
            console.log('messing up  simulator');
            return Promise.resolve();
        }
        updateView() {
        }
    }
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
