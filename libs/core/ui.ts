
/**
 * Basic functionalities.
 */
//% color=#00BCD4 weight=100
namespace UI {
    /**
     * The User Interface goes inside this
     * @param theme the general look of various UI elements, eg: UITheme.Calm
    **/
    //% weight=100
    //% blockId=user_interface
    //% block="UI theme %theme"
    export function userInterface(theme: UITheme, body: Action) {
        userInterfaceImpl(theme, body);
    }
    /**
      * An element for grouping other elements
      */
    //% weight=90
    //% blockId=group_element
    //% block="Group id %name|dir %direction|flex %flex|class %className|style %style=StylePropertySet"
    //% handlerStmt=true
    export function groupElement(
        name: string,
        direction: UIGroupDirection,
        flex: boolean,
        className: UIGroupClass,
        style: StylePropertySet,
        children: Action): void {
        groupElementImpl(name, direction, flex, className, style, children);
    }

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
        style: StylePropertySet,
        children: Action): void {
        scrollerElementImpl(name, flex, className, horz, style, children);
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
        style: StylePropertySet,
        children: Action): void {
        buttonElementImpl(name, flex, className, style, children, null);
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
        style: StylePropertySet,
        value: string): void {
        textElementImpl(flex, className, style, value);
    }

    /**
     * A block for making a text input element
     */
    //% weight=50
    //% blockId=textinput_element
    //% block="Text Input id %name|flex %flex|class %className|style %style|initial %initialValue| when text changes"
    //% handlerStmt=true
    export function textInputElement(
        name: string,
        flex: boolean,
        className: UITextInputClass,
        style: StylePropertySet,
        initialValue: string,
        whenTextChanges: Action): void {
        textInputElementImpl(name, flex, className, style, initialValue, whenTextChanges);
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
        style: StylePropertySet,
        url: string): void {
        imageElementImpl(flex, width, height, style, url);
    }

    /**
     * A block for making a divider element
     */
    //% weight=40
    //% blockId=divider_element
    //% block="Divider class %className|style %style"
    export function dividerElement(
        className: UIDividerClass,
        style: StylePropertySet): void {
        dividerElementImpl(className, style);
    }
}
