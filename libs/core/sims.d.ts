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
    function textInputElementImpl(name: string, flex: boolean, className: UITextInputClass, style: StylePropertySet, initialValue: string, whenTextChanges: (text: string) => void): void;

    //%
    //% shim=UI::imageElementImpl
    function imageElementImpl(flex: boolean, width: number, height: number, style: StylePropertySet, url: string): void;

    //%
    //% shim=UI::dividerElementImpl
    function dividerElementImpl(className: UIDividerClass, style: StylePropertySet): void;

    //%
    //% shim=UI::updateUIImpl
    function updateUIImpl(): void;

}
declare namespace Style {
    //%
    //% shim=Style::styleDefImpl
    function styleDefImpl(body: () => void): StylePropertySet;

}
declare namespace Data {
    //%
    //% shim=Data::getSharedStringImpl
    function getSharedStringImpl(name: string): string;

    //%
    //% shim=Data::getSharedNumberImpl
    function getSharedNumberImpl(name: string): number;

    //%
    //% shim=Data::getSharedBooleanImpl
    function getSharedBooleanImpl(name: string): boolean;

    //%
    //% shim=Data::getSharedListImpl
    function getSharedListImpl(name: string): string[];

    //%
    //% shim=Data::setSharedStringImpl
    function setSharedStringImpl(name: string, v: string): void;

    //%
    //% shim=Data::setSharedNumberImpl
    function setSharedNumberImpl(name: string, v: number): void;

    //%
    //% shim=Data::setSharedBooleanImpl
    function setSharedBooleanImpl(name: string, v: boolean): void;

    //%
    //% shim=Data::setSharedListImpl
    function setSharedListImpl(name: string, v: string[]): void;

    //%
    //% shim=Data::onSharedVariableChangeImpl
    function onSharedVariableChangeImpl(name: string, body: () => void): void;

}

// Auto-generated. Do not edit. Really.
