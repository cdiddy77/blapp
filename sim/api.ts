/// <reference path="../libs/core/types.d.ts"/>

namespace pxsim.UI {
    //%
    export function userInterfaceImpl(theme: UITheme, body: pxsim.RefAction) {

    }

    //%
    export function groupElementImpl(
        name: string,
        direction: UIGroupDirection,
        flex: boolean,
        className: UIGroupClass,
        style: string[],
        children: pxsim.RefAction): void {

    }

    //%
    export function scrollerElementImpl(
        name: string,
        flex: boolean,
        className: UIGroupClass,
        horz: boolean,
        style: string[],
        children: pxsim.RefAction): void {

    }

    //%
    export function buttonElementImpl(
        name: string,
        flex: boolean,
        className: UIButtonClass,
        style: string[],
        children: pxsim.RefAction,
        whenPressed: pxsim.RefAction): void {

    }

    //%
    export function textElementImpl(
        flex: boolean,
        className: UITextClass,
        style: string[],
        value: string): void {

    }

    //%
    export function textInputElementImpl(
        name: string,
        flex: boolean,
        className: UITextInputClass,
        style: string[],
        initialValue: string,
        whenTextChanges: (text: string) => void): void {

    }

    //%
    export function imageElementImpl(
        flex: boolean,
        width: number,
        height: number,
        style: string[],
        url: string): void {

    }

    //%
    export function videoElementImpl(
        flex: boolean,
        width: number,
        height: number,
        style: string[],
        imageurl: string,
        videourl: string): void {

        }

    //%
    export function dividerElementImpl(
        className: UIDividerClass,
        style: string[]): void {

    }

    //%
    export function updateUIImpl(): void {

    }

    //%
    export function iconElementImpl(
        category: string,
        name: number,
        iconType: IconType,
        size: number,
        style: string[]) {

    }
}

namespace pxsim.Style {
    //%
    export function stylePropAlignContentImpl(v: StyAlignContent): string {
        return null;
    }

    //% 
    export function stylePropAlignItemsImpl(v: StyAlignItems): string {
        return null;
    }

    //% 
    export function stylePropAlignSelfImpl(v: StyAlignItems): string {
        return null;
    }

    //% 
    export function stylePropFlexDirectionImpl(v: StyFlexDirection): string {
        return null;
    }

    //% 
    export function stylePropJustifyContentImpl(v: StyAlignContent): string {
        return null;
    }

    //% 
    export function stylePropFlexWrapImpl(v: StyFlexWrap): string {
        return null;
    }

    //% 
    export function stylePropPositionImpl(v: StyPosition): string {
        return null;
    }


    //% 
    export function stylePropOffsetImpl(v: StyOffsetType, p: number): string {
        return null;
    }

    //% 
    export function stylePropAspectRatioImpl(v: number): string {
        return null;
    }

    //% 
    export function stylePropBackgroundColorImpl(v: string): string {
        return null;
    }

    //% 
    export function stylePropBorderColorImpl(p: StyBoxSide, v: string): string {
        return null;
    }

    //% 
    export function stylePropBorderRadiusImpl(p: StyBoxCorner, v: number): string {
        return null;
    }

    //% 
    export function stylePropBorderWidthImpl(p: StyBoxSide, v: number): string {
        return null;
    }

    //% 
    export function stylePropBorderStyleImpl(v: StyBorderStyle): string {
        return null;
    }

    //% 
    export function stylePropFlexValuesImpl(p: StyFlexType, v: number): string {
        return null;
    }

    //% 
    export function stylePropSizeImpl(p: StyPropSize, v: number): string {
        return null;
    }

    //% 
    export function stylePropMarginImpl(p: StyPropMargin, v: number): string {
        return null;
    }

    //% 
    export function stylePropPaddingImpl(p: StyPropPadding, v: number): string {
        return null;
    }

    //% 
    export function stylePropOverflowImpl(v: StyPropOverflow): string {
        return null;
    }

    //% 
    export function stylePropOpacityImpl(v: number): string {
        return null;
    }

    //% 
    export function stylePropImageResizeModeImpl(v: StyImageResizeMode): string {
        return null;
    }

    //% 
    export function stylePropImageTintColorImpl(v: string): string {
        return null;
    }

    //% 
    export function stylePropTextColorImpl(v: string): string {
        return null;
    }

    //% 
    export function stylePropTextFontFamilyImpl(v: string): string {
        return null;
    }

    //% 
    export function stylePropTextFontSizeImpl(v: number): string {
        return null;
    }

    //% 
    export function stylePropTextFontStyleImpl(v: StyTextFontStyle): string {
        return null;
    }

    //% 
    export function stylePropTextFontWeightImpl(v: StyTextFontWeight): string {
        return null;
    }

    //% 
    export function stylePropTextLineHeightImpl(v: number): string {
        return null;
    }

    //% 
    export function stylePropTextAlignImpl(v: StyTextAlign): string {
        return null;
    }

    //% 
    export function stylePropTextDecorationLineImpl(v: StyTextDecorationLine): string {
        return null;
    }

}

namespace pxsim.Data {
    //%
    export function getSharedStringImpl(name: string): string {
        return "sample";
    }

    //%
    export function getSharedNumberImpl(name: string): number {
        return -1;
    }

    //%
    export function getSharedBooleanImpl(name: string): boolean {
        return false;
    }

    //%
    export function getSharedStringListImpl(name: string): Array<string> {
        return [];
    }

    //%
    export function getSharedNumberListImpl(name: string): Array<number> {
        return [];
    }

    //%
    export function setSharedStringImpl(name: string, v: string): void {
    }

    //%
    export function setSharedNumberImpl(name: string, v: number): void {
    }

    //%
    export function setSharedBooleanImpl(name: string, v: boolean): void {
    }

    //%
    export function setSharedStringListImpl(name: string, v: Array<string>): void {
    }

    //%
    export function setSharedNumberListImpl(name: string, v: Array<number>): void {
    }

    //%
    export function onSharedVariableChangeImpl(name: string, body: pxsim.RefAction): void {

    }

    //%
    export function textContainsImpl(text: string, subtext: string): boolean {
        return false;
    }

}

namespace pxsim.Time {
    //%
    export function afterTimeImpl(
        ms: number,
        body: pxsim.RefAction): void {
    }
    //%
    export function everyTimeImpl(
        ms: number,
        body: pxsim.RefAction): void {
    }

    //%
    export function resetApplicationImpl(): void {

    }

    //%
    export function whenAppResetImpl(body: pxsim.RefAction): void {
    }

}

