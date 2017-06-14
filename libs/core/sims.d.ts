// Auto-generated from simulator. Do not edit.
declare namespace ui {
    /**
     * The User Interface goes inside this
     * @param theme the general look of various UI elements, eg: UITheme.Calm
     */
    //% weight=90
    //% blockId=user_interface
    //% block="UI theme %theme"
    //% shim=ui::userInterface
    function userInterface(theme: UITheme, body: () => void): void;

    /**
     * An element for grouping other elements
     */
    //% weight=90
    //% blockId=group_element
    //% block="Group id %name|dir %direction|flex %flex|class %className"
    //% handlerStmt=true
    //% shim=ui::groupElement
    function groupElement(name: string, direction: UIGroupDirection, flex: boolean, className: UIGroupClass, children: () => void): void;

    /**
     * An element for grouping other elements in a scrollable region
     */
    //% weight=90
    //% blockId=scroller_element
    //% block="Scroller id %name|flex %flex|class %className|horizontal? %horz"
    //% handlerStmt=true
    //% shim=ui::scrollerElement
    function scrollerElement(name: string, flex: boolean, className: UIGroupClass, horz: boolean, children: () => void): void;

    /**
     * A block for making a button
     */
    //% weight=90
    //% blockId=button_element
    //% block="Button id %name|flex %flex|class %className"
    //% handlerStmt=true
    //% shim=ui::buttonElement
    function buttonElement(name: string, flex: boolean, className: UIButtonClass, children: () => void, whenPressed: () => void): void;

    /**
     * A block for making a text element
     */
    //% weight=90
    //% blockId=text_element
    //% block="Text flex %flex|class %className|%value"
    //% handlerStmt=true
    //% shim=ui::textElement
    function textElement(flex: boolean, className: UITextClass, value: string): void;

    //% weight=90
    //% blockId=addsomeeventhandler
    //% block="Some Event Handler"
    //% mutate=objectdestructuring
    //% mutateText="My Arguments"
    //% mutateDefaults="argumentA;argumentA,argumentB"
    //% shim=ui::SomeEventHandler
    function SomeEventHandler(foo: (a: ArgumentClass) => void): void;

    /**
     * A block for making a image element
     */
    //% weight=90
    //% blockId=image_element
    //% block="Image flex %flex|width %width|height %height|URL %url"
    //% shim=ui::imageElement
    function imageElement(flex: boolean, width: number, height: number, url: string): void;

    /**
     * A block for making a divider element
     */
    //% weight=90
    //% blockId=divider_element
    //% block="Divider class %className"
    //% shim=ui::dividerElement
    function dividerElement(className: UIDividerClass): void;

}

// Auto-generated. Do not edit. Really.
