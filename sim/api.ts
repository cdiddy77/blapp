/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.ui {
    export class StylePropertySet {
        constructor() {

        }
    }

    /**
       * The User Interface goes inside this
       * @param theme the general look of various UI elements, eg: UITheme.Calm
       */
    //% weight=90
    //% blockId=user_interface
    //% block="UI theme %theme"
    export function userInterface(theme: UITheme, body: () => void): void {

    }
    /**
     * An element for grouping other elements
     */
    //% weight=90
    //% blockId=group_element
    //% block="Group id %name|dir %direction|flex %flex|class %className"
    //% handlerStmt=true
    export function groupElement(
        name: string,
        direction: UIGroupDirection,
        flex: boolean,
        className: UIGroupClass,
        children: () => void): void {

    }
    /**
     * An element for grouping other elements in a scrollable region
     */
    //% weight=90
    //% blockId=scroller_element
    //% block="Scroller id %name|flex %flex|class %className|horizontal? %horz"
    //% handlerStmt=true
    export function scrollerElement(
        name: string,
        flex: boolean,
        className: UIGroupClass,
        horz: boolean,
        children: () => void): void {

    }

    /**
     * A block for making a button
     */
    //% weight=90
    //% blockId=button_element
    //% block="Button id %name|flex %flex|class %className"
    //% handlerStmt=true
    export function buttonElement(
        name: string,
        flex: boolean,
        className: UIButtonClass,
        children: () => void,
        whenPressed: () => void): void {

    }

    /**
     * A block for making a text element
     */
    //% weight=90
    //% blockId=text_element
    //% block="Text flex %flex|class %className|%value"
    //% handlerStmt=true
    export function textElement(
        flex: boolean,
        className: UITextClass,
        value: string): void {

    }

    export class WhenTextChangesArgumentClass {
        value: string;
        something: string;
    }
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

    export class ArgumentClass {
        argumentA: number;
        argumentB: string;
    }

    //% weight=90
    //% blockId=addsomeeventhandler
    //% block="Some Event Handler"
    //% mutate=objectdestructuring
    //% mutateText="My Arguments"
    //% mutateDefaults="argumentA;argumentA,argumentB"
    export function SomeEventHandler(foo:(a:ArgumentClass)=>void):void{

    }


    /**
     * A block for making a image element
     */
    //% weight=90
    //% blockId=image_element
    //% block="Image flex %flex|width %width|height %height|URL %url"
    export function imageElement(
        flex: boolean,
        width: number,
        height: number,
        url: string): void {

    }

    /**
     * A block for making a divider element
     */
    //% weight=90
    //% blockId=divider_element
    //% block="Divider class %className"
    export function dividerElement(
        className: UIDividerClass): void {

    }

}

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

