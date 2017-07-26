// Auto-generated from simulator. Do not edit.
declare namespace UI {
    //%
    //% shim=UI::userInterfaceImpl
    function userInterfaceImpl(theme: UITheme, body: () => void): void;

    //%
    //% shim=UI::groupElementImpl
    function groupElementImpl(name: string, direction: UIGroupDirection, flex: boolean, className: UIGroupClass, style: string[], children: () => void): void;

    //%
    //% shim=UI::scrollerElementImpl
    function scrollerElementImpl(name: string, flex: boolean, className: UIGroupClass, horz: boolean, style: string[], children: () => void): void;

    //%
    //% shim=UI::buttonElementImpl
    function buttonElementImpl(name: string, flex: boolean, className: UIButtonClass, style: string[], children: () => void, whenPressed: () => void): void;

    //%
    //% shim=UI::textElementImpl
    function textElementImpl(flex: boolean, className: UITextClass, style: string[], value: string): void;

    //%
    //% shim=UI::textInputElementImpl
    function textInputElementImpl(name: string, flex: boolean, className: UITextInputClass, style: string[], initialValue: string, whenTextChanges: (text: string) => void): void;

    //%
    //% shim=UI::imageElementImpl
    function imageElementImpl(flex: boolean, width: number, height: number, style: string[], url: string): void;

    //%
    //% shim=UI::dividerElementImpl
    function dividerElementImpl(className: UIDividerClass, style: string[]): void;

    //%
    //% shim=UI::updateUIImpl
    function updateUIImpl(): void;

    //%
    //% shim=UI::iconElementImpl
    function iconElementImpl(category: string, name: number, iconType: IconType, size: number, style: string[]): void;

}
declare namespace Style {
    //%
    //% shim=Style::stylePropAlignContentImpl
    function stylePropAlignContentImpl(v: StyAlignContent): string;

    //%
    //% shim=Style::stylePropAlignItemsImpl
    function stylePropAlignItemsImpl(v: StyAlignItems): string;

    //%
    //% shim=Style::stylePropAlignSelfImpl
    function stylePropAlignSelfImpl(v: StyAlignItems): string;

    //%
    //% shim=Style::stylePropFlexDirectionImpl
    function stylePropFlexDirectionImpl(v: StyFlexDirection): string;

    //%
    //% shim=Style::stylePropJustifyContentImpl
    function stylePropJustifyContentImpl(v: StyAlignContent): string;

    //%
    //% shim=Style::stylePropFlexWrapImpl
    function stylePropFlexWrapImpl(v: StyFlexWrap): string;

    //%
    //% shim=Style::stylePropPositionImpl
    function stylePropPositionImpl(v: StyPosition): string;

    //%
    //% shim=Style::stylePropOffsetImpl
    function stylePropOffsetImpl(v: StyOffsetType, p: number): string;

    //%
    //% shim=Style::stylePropAspectRatioImpl
    function stylePropAspectRatioImpl(v: number): string;

    //%
    //% shim=Style::stylePropBackgroundColorImpl
    function stylePropBackgroundColorImpl(v: string): string;

    //%
    //% shim=Style::stylePropBorderColorImpl
    function stylePropBorderColorImpl(p: StyBoxSide, v: string): string;

    //%
    //% shim=Style::stylePropBorderRadiusImpl
    function stylePropBorderRadiusImpl(p: StyBoxCorner, v: number): string;

    //%
    //% shim=Style::stylePropBorderWidthImpl
    function stylePropBorderWidthImpl(p: StyBoxSide, v: number): string;

    //%
    //% shim=Style::stylePropBorderStyleImpl
    function stylePropBorderStyleImpl(v: StyBorderStyle): string;

    //%
    //% shim=Style::stylePropFlexValuesImpl
    function stylePropFlexValuesImpl(p: StyFlexType, v: number): string;

    //%
    //% shim=Style::stylePropSizeImpl
    function stylePropSizeImpl(p: StyPropSize, v: number): string;

    //%
    //% shim=Style::stylePropMarginImpl
    function stylePropMarginImpl(p: StyPropMargin, v: number): string;

    //%
    //% shim=Style::stylePropPaddingImpl
    function stylePropPaddingImpl(p: StyPropPadding, v: number): string;

    //%
    //% shim=Style::stylePropOverflowImpl
    function stylePropOverflowImpl(v: StyPropOverflow): string;

    //%
    //% shim=Style::stylePropOpacityImpl
    function stylePropOpacityImpl(v: number): string;

    //%
    //% shim=Style::stylePropImageResizeModeImpl
    function stylePropImageResizeModeImpl(v: StyImageResizeMode): string;

    //%
    //% shim=Style::stylePropImageTintColorImpl
    function stylePropImageTintColorImpl(v: string): string;

    //%
    //% shim=Style::stylePropTextColorImpl
    function stylePropTextColorImpl(v: string): string;

    //%
    //% shim=Style::stylePropTextFontFamilyImpl
    function stylePropTextFontFamilyImpl(v: string): string;

    //%
    //% shim=Style::stylePropTextFontSizeImpl
    function stylePropTextFontSizeImpl(v: number): string;

    //%
    //% shim=Style::stylePropTextFontStyleImpl
    function stylePropTextFontStyleImpl(v: StyTextFontStyle): string;

    //%
    //% shim=Style::stylePropTextFontWeightImpl
    function stylePropTextFontWeightImpl(v: StyTextFontWeight): string;

    //%
    //% shim=Style::stylePropTextLineHeightImpl
    function stylePropTextLineHeightImpl(v: number): string;

    //%
    //% shim=Style::stylePropTextAlignImpl
    function stylePropTextAlignImpl(v: StyTextAlign): string;

    //%
    //% shim=Style::stylePropTextDecorationLineImpl
    function stylePropTextDecorationLineImpl(v: StyTextDecorationLine): string;

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
    //% shim=Data::getSharedStringListImpl
    function getSharedStringListImpl(name: string): string[];

    //%
    //% shim=Data::getSharedNumberListImpl
    function getSharedNumberListImpl(name: string): number[];

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
    //% shim=Data::setSharedStringListImpl
    function setSharedStringListImpl(name: string, v: string[]): void;

    //%
    //% shim=Data::setSharedNumberListImpl
    function setSharedNumberListImpl(name: string, v: number[]): void;

    //%
    //% shim=Data::onSharedVariableChangeImpl
    function onSharedVariableChangeImpl(name: string, body: () => void): void;

}
declare namespace Time {
    //%
    //% shim=Time::afterTimeImpl
    function afterTimeImpl(ms: number, body: () => void): void;

    //%
    //% shim=Time::everyTimeImpl
    function everyTimeImpl(ms: number, body: () => void): void;

    //%
    //% shim=Time::resetApplicationImpl
    function resetApplicationImpl(): void;

    //%
    //% shim=Time::whenAppResetImpl
    function whenAppResetImpl(body: () => void): void;

}

// Auto-generated. Do not edit. Really.
