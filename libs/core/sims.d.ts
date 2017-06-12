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

}

// Auto-generated. Do not edit. Really.
