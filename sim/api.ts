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

namespace pxsim.ui {
    /**
     * The User Interface goes inside this
     * @param theme the general look of various UI elements, eg: UITheme.Calm
     */
    //% weight=90
    //% blockId=user_interface
    //% block="UI theme %theme"
    export function userInterface(theme: UITheme, body: pxsim.RefAction): void {

    }
    /**
     * An element for grouping other elements
     */
    //% weight=90
    //% blockId=group_element
    //% block="Group id %name|dir %direction|flex %flex|class %className"
    export function groupElement(
        name: string,
        direction: UIGroupDirection,
        flex: boolean,
        className: UIGroupClass,
        children:pxsim.RefAction): void {

    }
}
