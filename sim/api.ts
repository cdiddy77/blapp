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
    export function dividerElementImpl(
        className: UIDividerClass,
        style: string[]): void {

    }

    //%
    export function updateUIImpl(): void {

    }
}

namespace pxsim.Style {
    //%
    export function stylePropAlignContentImpl(v: StyAlignContent): string {
        let value: string;
        switch (v) {
            case StyAlignContent.Start:
                value = 'flex-start';
                break;
            case StyAlignContent.End:
                value = 'flex-end';
                break;
            case StyAlignContent.Center:
                value = 'center';
                break;
            case StyAlignContent.Stretch:
                value = 'stretch';
                break;
            case StyAlignContent.SpaceBetween:
                value = 'space-between';
                break;
            case StyAlignContent.SpaceAround:
                value = 'space-around';
                break;
        }
        return `{ 'alignContent': '${value}' }`;
    }

    //% 
    export function stylePropAlignItemsImpl(v: StyAlignItems): string {
        let value: string;
        switch (v) {
            case StyAlignItems.start:
                value = 'flex-start';
                break;
            case StyAlignItems.end:
                value = 'flex-end';
                break;
            case StyAlignItems.center:
                value = 'center';
                break;
            case StyAlignItems.stretch:
                value = 'stretch';
                break;
            case StyAlignItems.baseline:
                value = 'baseline';
                break;
        }
        return `{ 'alignItems': '${value}' }`;
    }

    //% 
    export function stylePropAlignSelfImpl(v: StyAlignItems): string {
        let value: string;
        switch (v) {
            case StyAlignItems.start:
                value = 'flex-start';
                break;
            case StyAlignItems.end:
                value = 'flex-end';
                break;
            case StyAlignItems.center:
                value = 'center';
                break;
            case StyAlignItems.stretch:
                value = 'stretch';
                break;
            case StyAlignItems.baseline:
                value = 'baseline';
                break;
        }
        return `{ 'alignSelf': '${value}' }`;
    }

    //% 
    export function stylePropFlexDirectionImpl(v: StyFlexDirection): string {
        let value: string;
        switch (v) {
            case StyFlexDirection.row:
                value = '';
                break;
            //% block=reverse row
            case StyFlexDirection.rowReverse:
                value = '';
                break;
            //% block=column
            case StyFlexDirection.column:
                value = '';
                break;
            //% block=reverse column
            case StyFlexDirection.columnReverse:
                value = '';
                break;
        }
        return `{ 'flexDirection': '${value}' }`;
    }

    //% 
    export function stylePropJustifyContentImpl(v: StyAlignContent): string {
        let value: string;
        switch (v) {
            case StyAlignContent.Start:
                value = 'flex-start';
                break;
            case StyAlignContent.End:
                value = 'flex-end';
                break;
            case StyAlignContent.Center:
                value = 'center';
                break;
            case StyAlignContent.Stretch:
                value = 'stretch';
                break;
            case StyAlignContent.SpaceBetween:
                value = 'space-between';
                break;
            case StyAlignContent.SpaceAround:
                value = 'space-around';
                break;
        }
        return `{ 'justifyContent': '${value}' }`;
    }

    //% 
    export function stylePropFlexWrapImpl(v: StyFlexWrap): string {
        let value: string;
        switch (v) {
            case StyFlexWrap.wrap:
                value = 'wrap';
                break;
            case StyFlexWrap.nowrap:
                value = 'nowrap';
                break;
        }
        return `{ 'flexWrap': '${value}' }`;
    }

    //% 
    export function stylePropPositionImpl(v: StyPosition): string {
        let value: string;
        switch (v) {
            case StyPosition.absolute:
                value = 'absolute';
                break;
            case StyPosition.relative:
                value = 'relative';
                break;
        }
        return `{ 'position': '${value}' }`;
    }


    //% 
    export function stylePropOffsetImpl(v: StyOffsetType, p: number): string {
        let property: string;
        switch (v) {
            case StyOffsetType.bottom:
                property = 'bottom';
                break;
            case StyOffsetType.left:
                property = 'left';
                break;
            case StyOffsetType.right:
                property = 'right';
                break;
            case StyOffsetType.top:
                property = 'top';
                break;
            case StyOffsetType.zIndex:
                property = 'zIndex';
                break;
        }
        return `{ '${property}': ${p} }`;
    }

    //% 
    export function stylePropAspectRatioImpl(v: number): string {
        return `{ 'aspectRatio': ${v} }`;
    }

    //% 
    export function stylePropBackgroundColorImpl(v: string): string {
        return `{ 'backgroundColor': '${v}' }`;
    }

    //% 
    export function stylePropBorderColorImpl(p: StyBoxSide, v: string): string {
        let property: string;
        switch (p) {
            case StyBoxSide.bottom:
                property = 'borderBottomColor';
                break;
            case StyBoxSide.left:
                property = 'borderLeftColor';
                break;
            case StyBoxSide.right:
                property = 'borderRightColor';
                break;
            case StyBoxSide.top:
                property = 'borderTopColor';
                break;
            case StyBoxSide.all:
                property = 'borderColor';
                break;
        }
        return `{ '${property}': '${v}' }`;
    }

    //% 
    export function stylePropBorderRadiusImpl(p: StyBoxCorner, v: number): string {
        let property: string;
        switch (p) {
            case StyBoxCorner.all:
                property = 'borderRadius';
                break;
            case StyBoxCorner.bottomLeft:
                property = 'borderBottomLeftRadius';
                break;
            case StyBoxCorner.bottomRight:
                property = 'borderBottomRightRadius';
                break;
            case StyBoxCorner.topLeft:
                property = 'borderTopLeftRadius';
                break;
            case StyBoxCorner.topRight:
                property = 'borderTopRightRadius';
                break;
        }
        return `{ '${property}': ${v} }`;
    }

    //% 
    export function stylePropBorderWidthImpl(p: StyBoxSide, v: number): string {
        let property: string;
        switch (p) {
            case StyBoxSide.bottom:
                property = 'borderBottomWidth';
                break;
            case StyBoxSide.left:
                property = 'borderLeftWidth';
                break;
            case StyBoxSide.right:
                property = 'borderRightWidth';
                break;
            case StyBoxSide.top:
                property = 'borderTopWidth';
                break;
            case StyBoxSide.all:
                property = 'borderWidth';
                break;
        }
        return `{ '${property}': ${v} }`;
    }

    //% 
    export function stylePropBorderStyleImpl(v: StyBorderStyle): string {
        let value: string;
        switch (v) {
            case StyBorderStyle.solid:
                value = 'solid';
                break;
            case StyBorderStyle.double:
                value = 'double';
                break;
            case StyBorderStyle.dotted:
                value = 'dotted';
                break;
            case StyBorderStyle.dashed:
                value = 'dashed';
                break;
        }
        return `{ 'borderStyle': '${value}' }`;
    }

    //% 
    export function stylePropFlexValuesImpl(p: StyFlexType, v: number): string {
        let property: string;
        switch (p) {
            case StyFlexType.flex:
                property = 'flex';
                break;
            case StyFlexType.basis:
                property = 'flexBasis';
                break;
            case StyFlexType.grow:
                property = 'flexGrow';
                break;
            case StyFlexType.shrink:
                property = 'flexShrink';
                break;
        }
        return `{ '${property}': ${v} }`;
    }

    //% 
    export function stylePropSizeImpl(p: StyPropSize, v: number): string {
        let property: string;
        switch (p) {
            case StyPropSize.height:
                property = 'height';
                break;
            case StyPropSize.width:
                property = 'width';
                break;
            case StyPropSize.maxHeight:
                property = 'maxHeight';
                break;
            case StyPropSize.maxWidth:
                property = 'maxWidth';
                break;
            case StyPropSize.minHeight:
                property = 'minHeight';
                break;
            case StyPropSize.minWidth:
                property = 'minWidth';
                break;
        }
        return `{ '${property}': ${v} }`;
    }

    //% 
    export function stylePropMarginImpl(p: StyPropMargin, v: number): string {
        let property: string;
        switch (p) {
            case StyPropMargin.margin:
                property = 'margin';
                break;
            case StyPropMargin.marginBottom:
                property = 'marginBottom';
                break;
            case StyPropMargin.marginHorizontal:
                property = 'marginHorizontal';
                break;
            case StyPropMargin.marginLeft:
                property = 'marginLeft';
                break;
            case StyPropMargin.marginRight:
                property = 'marginRight';
                break;
            case StyPropMargin.marginTop:
                property = 'marginTop';
                break;
            case StyPropMargin.marginVertical:
                property = 'marginVertical';
                break;
        }
        return `{ '${property}': ${v} }`;
    }

    //% 
    export function stylePropPaddingImpl(p: StyPropPadding, v: number): string {
        let property: string;
        switch (p) {
            case StyPropPadding.padding:
                property = 'padding';
                break;
            case StyPropPadding.paddingBottom:
                property = 'paddingBottom';
                break;
            case StyPropPadding.paddingHorizontal:
                property = 'paddingHorizontal';
                break;
            case StyPropPadding.paddingLeft:
                property = 'paddingLeft';
                break;
            case StyPropPadding.paddingRight:
                property = 'paddingRight';
                break;
            case StyPropPadding.paddingTop:
                property = 'paddingTop';
                break;
            case StyPropPadding.paddingVertical:
                property = 'paddingVertical';
                break;
        }
        return `{ '${property}': ${v} }`;
    }

    //% 
    export function stylePropOverflowImpl(v: StyPropOverflow): string {
        let value: string;
        switch (v) {
            case StyPropOverflow.hidden:
                value = 'hidden';
                break;
            case StyPropOverflow.visible:
                value = 'visible';
                break;
            case StyPropOverflow.scroll:
                value = 'scroll';
                break;
        }
        return `{ 'overflow': '${value}' }`;
    }

    //% 
    export function stylePropOpacityImpl(v: number): string {
        return `{ 'opacity': ${v} }`;
    }

    //% 
    export function stylePropImageResizeModeImpl(v: StyImageResizeMode): string {
        let value: string;
        switch (v) {
            case StyImageResizeMode.cover:
                value = "cover";
                break;
            case StyImageResizeMode.contain:
                value = "contain";
                break;
            case StyImageResizeMode.center:
                value = "center";
                break;
            case StyImageResizeMode.stretch:
                value = "stretch";
                break;
            case StyImageResizeMode.repeat:
                value = "repeat";
                break;
        }
        return `{ 'resizeMode': '${value}' }`;
    }

    //% 
    export function stylePropImageTintColorImpl(v: string): string {
        return `{ 'tintColor': '${v}' }`;
    }

    //% 
    export function stylePropTextColorImpl(v: string): string {
        return `{ 'color': '${v}' }`;
    }

    //% 
    export function stylePropTextFontFamilyImpl(v: string): string {
        return `{ 'justifyContent': '${v}' }`;
    }

    //% 
    export function stylePropTextFontSizeImpl(v: number): string {
        return `{ 'fontSize': ${v} }`;
    }

    //% 
    export function stylePropTextFontStyleImpl(v: StyTextFontStyle): string {
        let value: string;
        switch (v) {
            case StyTextFontStyle.normal:
                value = "normal";
                break;
            case StyTextFontStyle.italic:
                value = "italic";
                break;
        }
        return `{ 'fontStyle': '${value}' }`;
    }

    //% 
    export function stylePropTextFontWeightImpl(v: StyTextFontWeight): string {
        let value: string;
        switch (v) {
            case StyTextFontWeight.normal:
                value = 'normal';
                break;
            case StyTextFontWeight.bold:
                value = 'bold';
                break;
            case StyTextFontWeight.fw100:
                value = '100';
                break;
            case StyTextFontWeight.fw200:
                value = '200';
                break;
            case StyTextFontWeight.fw300:
                value = '300';
                break;
            case StyTextFontWeight.fw400:
                value = '400';
                break;
            case StyTextFontWeight.fw500:
                value = '500';
                break;
            case StyTextFontWeight.fw600:
                value = '600';
                break;
            case StyTextFontWeight.fw700:
                value = '700';
                break;
            case StyTextFontWeight.fw800:
                value = '800';
                break;
            case StyTextFontWeight.fw900:
                value = '900';
                break;
        }
        return `{ 'fontWeight': '${value}' }`;
    }

    //% 
    export function stylePropTextLineHeightImpl(v: number): string {
        return `{ 'lineHeight': ${v} }`;
    }

    //% 
    export function stylePropTextAlignImpl(v: StyTextAlign): string {
        let value: string;
        switch (v) {
            case StyTextAlign.inherit:
                value = 'auto';
                break;
            case StyTextAlign.left:
                value = 'left';
                break;
            case StyTextAlign.right:
                value = 'right';
                break;
            case StyTextAlign.center:
                value = 'center';
                break;
            case StyTextAlign.justify:
                value = 'justify';
                break;
            case StyTextAlign.justifyAll:
                value = 'justify-all';
                break;
        }
        return `{ 'textAlign': '${value}' }`;
    }

    //% 
    export function stylePropTextDecorationLineImpl(v: StyTextDecorationLine): string {
        let value: string;
        switch (v) {
            case StyTextDecorationLine.none:
                value = 'auto';
                break;
            case StyTextDecorationLine.underline:
                value = 'underline';
                break;
            case StyTextDecorationLine.lineThrough:
                value = 'line-through';
                break;
            case StyTextDecorationLine.both:
                value = 'underline line-through';
                break;
        }
        return `{ 'textAlign': '${value}' }`;
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
    export function getSharedListImpl(name: string): Array<string> {
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
    export function setSharedListImpl(name: string, v: Array<string>): void {
    }

    //%
    export function onSharedVariableChangeImpl(name: string, body: pxsim.RefAction): void {

    }
}

