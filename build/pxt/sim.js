/// <reference path="../libs/core/enums.d.ts"/>
var pxsim;
(function (pxsim) {
    var ui;
    (function (ui) {
        class StylePropertySet {
            constructor() {
            }
        }
        ui.StylePropertySet = StylePropertySet;
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
        //% handlerStmt=true
        function groupElement(name, direction, flex, className, children) {
        }
        ui.groupElement = groupElement;
        /**
         * An element for grouping other elements in a scrollable region
         */
        //% weight=90
        //% blockId=scroller_element
        //% block="Scroller id %name|flex %flex|class %className|horizontal? %horz"
        //% handlerStmt=true
        function scrollerElement(name, flex, className, horz, children) {
        }
        ui.scrollerElement = scrollerElement;
        /**
         * A block for making a button
         */
        //% weight=90
        //% blockId=button_element
        //% block="Button id %name|flex %flex|class %className"
        //% handlerStmt=true
        function buttonElement(name, flex, className, children, whenPressed) {
        }
        ui.buttonElement = buttonElement;
        /**
         * A block for making a text element
         */
        //% weight=90
        //% blockId=text_element
        //% block="Text flex %flex|class %className|%value"
        //% handlerStmt=true
        function textElement(flex, className, value) {
        }
        ui.textElement = textElement;
        class WhenTextChangesArgumentClass {
        }
        ui.WhenTextChangesArgumentClass = WhenTextChangesArgumentClass;
        // /**
        //  * A block for making a text input element
        //  */
        // //% weight=90
        // //% blockId=textinput_element
        // //% block="Text Input id %name|flex %flex|class %className|initial %initialValue"
        // //% mutate=objectdestructuring
        // //% mutateText="value"
        // //% mutateDefaults="value;value,something"
        // //% handlerStmt=true
        // export function textInputElement(
        //     name: string,
        //     flex: boolean,
        //     className: UITextInputClass,
        //     initialValue: string,
        //     whenTextChanges: (a: WhenTextChangesArgumentClass) => void): void {
        // }
        class ArgumentClass {
        }
        ui.ArgumentClass = ArgumentClass;
        //% weight=90
        //% blockId=addsomeeventhandler
        //% block="Some Event Handler"
        //% mutate=objectdestructuring
        //% mutateText="My Arguments"
        //% mutateDefaults="argumentA;argumentA,argumentB"
        function SomeEventHandler(foo) {
        }
        ui.SomeEventHandler = SomeEventHandler;
        /**
         * A block for making a image element
         */
        //% weight=90
        //% blockId=image_element
        //% block="Image flex %flex|width %width|height %height|URL %url"
        function imageElement(flex, width, height, url) {
        }
        ui.imageElement = imageElement;
        /**
         * A block for making a divider element
         */
        //% weight=90
        //% blockId=divider_element
        //% block="Divider class %className"
        function dividerElement(className) {
        }
        ui.dividerElement = dividerElement;
    })(ui = pxsim.ui || (pxsim.ui = {}));
})(pxsim || (pxsim = {}));
// examples of stuff you can do ///////////////////////////////////
//
// export namespace pxsimturtle {
//     /**
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
// }
// export namespace pxsimcontrol {
//     /**
//      * Repeats the code forever in the background. On each iteration, allows other code to run.
//      * @param body TODO
//      */
//     //% help=functions/forever weight=55 blockGap=8
//     //% blockId=device_forever block="forever" icon="\uf01e" 
//     export function forever(body: pxsim.RefAction): void {
//         pxsim.thread.forever(body)
//     }
//     /**
//      * Pause for the specified time in milliseconds
//      * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
//      */
//     //% help=functions/pause weight=54
//     //% block="pause (ms) %pause" blockId=device_pause icon="\uf110"
//     export function pauseAsync(ms: number) {
//         return Promise.delay(ms)
//     }
// }
// function logMsg(m: string) { console.log(m) }
// export namespace pxsimconsole {
//     /**
//      * Print out message
//      */
//     //% 
//     export function log(msg: string) {
//         logMsg("CONSOLE: " + msg)
//         // why doesn't that work?
//         board().writeSerial(msg + "\n")
//     }
// }
//
//////////////////////////////////////////////////////////////////////////////////
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
