// Auto-generated from simulator. Do not edit.
declare namespace UI {
    //%
    //% shim=UI::userInterfaceImpl
    function userInterfaceImpl(theme: UITheme, body: () => void): void;

    //%
    //% shim=UI::groupElementImpl
    function groupElementImpl(name: string, direction: UIGroupDirection, flex: boolean, className: UIGroupClass, style: StylePropertySet, children: () => void): void;

    //%
    //% shim=UI::scrollerElementImpl
    function scrollerElementImpl(name: string, flex: boolean, className: UIGroupClass, horz: boolean, style: StylePropertySet, children: () => void): void;

    //%
    //% shim=UI::buttonElementImpl
    function buttonElementImpl(name: string, flex: boolean, className: UIButtonClass, style: StylePropertySet, children: () => void, whenPressed: () => void): void;

    //%
    //% shim=UI::textElementImpl
    function textElementImpl(flex: boolean, className: UITextClass, style: StylePropertySet, value: string): void;

    //%
    //% shim=UI::textInputElementImpl
    function textInputElementImpl(name: string, flex: boolean, className: UITextInputClass, style: StylePropertySet, initialValue: string, whenTextChanges: () => void): void;

    //%
    //% shim=UI::imageElementImpl
    function imageElementImpl(flex: boolean, width: number, height: number, style: StylePropertySet, url: string): void;

    //%
    //% shim=UI::dividerElementImpl
    function dividerElementImpl(className: UIDividerClass, style: StylePropertySet): void;

}

// Auto-generated. Do not edit. Really.
