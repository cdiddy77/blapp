/**
 * Basic functionalities.
 */
//% color=#00BCD4 weight=100
namespace UI {
   //   export class StylePropertySet {
    //     constructor() {

    //     }
    // }

    /**
       * The User Interface goes inside this
       * @param theme the general look of various UI elements, eg: UITheme.Calm
       */
    //% weight=100
    //% blockId=user_interface
    //% block="UI theme %theme"
    export function userInterface(theme: UITheme, body: () => void): void {

    }

    // /**
    //  * An element for grouping other elements
    //  */
    // //% weight=90
    // //% blockId=styledef
    // //% block="Style Group"
    // //% handlerStmt=true
    // export function styleDef(
    //     children: () => void): StylePropertySet {
    //     return null;
    // }

    // /**
    //  * An element for grouping other elements
    //  */
    // //% weight=90
    // //% blockId=group_element
    // //% block="Group id %name|dir %direction|flex %flex|class %className|style %style=StylePropertySet"
    // //% handlerStmt=true
    // export function groupElement(
    //     name: string,
    //     direction: UIGroupDirection,
    //     flex: boolean,
    //     className: UIGroupClass,
    //     style: StylePropertySet,
    //     children: () => void): void {

    // }
    /**
     * An element for grouping other elements in a scrollable region
     */
    //% weight=30
    //% blockId=scroller_element
    //% block="Scroller id %name|flex %flex|class %className|horizontal? %horz|style %style"
    //% handlerStmt=true
    export function scrollerElement(
        name: string,
        flex: boolean,
        className: UIGroupClass,
        horz: boolean,
        style: any,
        children: () => void): void {

    }

    /**
     * A block for making a button
     */
    //% weight=70
    //% blockId=button_element
    //% block="Button id %name|flex %flex|class %className|style %style"
    //% handlerStmt=true
    export function buttonElement(
        name: string,
        flex: boolean,
        className: UIButtonClass,
        style: any,
        children: () => void,
        whenPressed: () => void): void {

    }

    /**
     * A block for making a text element
     */
    //% weight=80
    //% blockId=text_element
    //% block="Text flex %flex|class %className|style %style|%value"
    //% handlerStmt=true
    export function textElement(
        flex: boolean,
        className: UITextClass,
        style: any,
        value: string): void {

    }

    /**
     * A block for making a text input element
     */
    //% weight=50
    //% blockId=textinput_element
    //% block="Text Input id %name|flex %flex|class %className|style %style|initial %initialValue"
    //% handlerStmt=true
    export function textInputElement(
        name: string,
        flex: boolean,
        className: UITextInputClass,
        style: any,
        initialValue: string,
        whenTextChanges: () => void): void {

    }

    /**
     * A block for making a image element
     */
    //% weight=60
    //% blockId=image_element
    //% block="Image flex %flex|width %width|height %height|style %style|URL %url"
    export function imageElement(
        flex: boolean,
        width: number,
        height: number,
        style: any,
        url: string): void {

    }

    /**
     * A block for making a divider element
     */
    //% weight=40
    //% blockId=divider_element
    //% block="Divider class %className|style %style"
    export function dividerElement(
        className: UIDividerClass,
        style: any): void {

    }

}
