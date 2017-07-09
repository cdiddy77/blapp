
/**
 * Basic functionalities.
 */
//% color=#00BCD4 weight=90
namespace Style {
    /**
     * align content
     */
    //% blockId=styleprop_aligncontent
    //% block="align content %v"
    //% subcategory=Layout
    export function stylePropAlignContent(v: StyAlignContent): string {
        return stylePropAlignContentImpl(v);
    }

    //% blockId=styleprop_alignitems
    //% block="align items %v"
    //% subcategory=Layout
    export function stylePropAlignItems(v: StyAlignItems): string {
        return stylePropAlignItemsImpl(v);
    }

    //% blockId=styleprop_alignself
    //% block="align self %v"
    //% subcategory=Layout
    export function stylePropAlignSelf(v: StyAlignItems): string {
        return stylePropAlignSelfImpl(v);
    }

    //% blockId=styleprop_flexdirection
    //% block="flex direction %v"
    //% subcategory=Layout
    export function stylePropFlexDirection(v: StyFlexDirection): string {
        return stylePropFlexDirectionImpl(v);
    }

    //% blockId=styleprop_justifycontent
    //% block="justify content %v"
    //% subcategory=Layout
    export function stylePropJustifyContent(v: StyAlignContent): string {
        return stylePropJustifyContentImpl(v);
    }

    //% blockId=styleprop_flexwrap
    //% block="wrap content %v"
    //% subcategory=Layout
    export function stylePropFlexWrap(v: StyFlexWrap): string {
        return stylePropFlexWrapImpl(v);
    }

    //% blockId=styleprop_position
    //% block="position %v"
    //% subcategory=Layout
    export function stylePropPosition(v: StyPosition): string {
        return stylePropPositionImpl(v);
    }


    //% blockId=styleprop_offset
    //% block="offset %v|%p"
    //% subcategory=Layout
    export function stylePropOffset(v: StyOffsetType, p: number): string {
        return stylePropOffsetImpl(v,p);
    }

    //% blockId=styleprop_aspectratio
    //% block="aspect ratio %v"
    //% subcategory=Layout
    export function stylePropAspectRatio(v: number): string {
        return stylePropAspectRatioImpl(v);
    }

    //% blockId=styleprop_backgroundcolor
    //% block="background color %v"
    //% subcategory=Color
    export function stylePropBackgroundColor(v: string): string {
        return stylePropBackgroundColorImpl(v);
    }

    //     //% blockId=styleprop_generic'] = {
    //     init: function () {
    //         this.appendValueInput("VALUE")
    //             .setCheck(null)
    //             .appendField("style property")
    //             .appendField(new Blockly.FieldDropdown([
    //                 ["align items", "alignItems"],
    //                 ["align self", "alignSelf"],
    //                 ["backface visibility", "backfaceVisibility"],
    //                 ["background color", "backgroundColor"],
    //                 ["border bottom color", "borderBottomColor"],
    //                 ["border bottom left radius", "borderBottomLeftRadius"],
    //                 ["border bottom right radius", "borderBottomRightRadius"],
    //                 ["border bottom width", "borderBottomWidth"],
    //                 ["border color", "borderColor"],
    //                 ["border left color", "borderLeftColor"],
    //                 ["border left width", "borderLeftWidth"],
    //                 ["border radius", "borderRadius"],
    //                 ["border right color", "borderRightColor"],
    //                 ["border right width", "borderRightWidth"],
    //                 ["border style", "borderStyle"],
    //                 ["border top color", "borderTopColor"],
    //                 ["border top left radius", "borderTopLeftRadius"],
    //                 ["border top right radius", "borderTopRightRadius"],
    //                 ["border top width", "borderTopWidth"],
    //                 ["border width", "borderWidth"],
    //                 ["direction", "direction"],
    //                 ["display", "display"],
    //                 ["flex", "flex"],
    //                 ["flex basis", "flexBasis"],
    //                 ["flex direction", "flexDirection"],
    //                 ["flex grow,", "flexGrow"],
    //                 ["flex shrink", "flexShrink"],
    //                 ["flex wrap", "flexWrap"],
    //                 ["height", "height"],
    //                 ["justify content", "justifyContent"],
    //                 ["left", "left"],
    //                 ["margin", "margin"],
    //                 ["margin bottom", "marginBottom"],
    //                 ["margin horizontal", "marginHorizontal"],
    //                 ["margin left", "marginLeft"],
    //                 ["margin right", "marginRight"],
    //                 ["margin top", "marginTop"],
    //                 ["margin vertical", "marginVertical"],
    //                 ["max height", "maxHeight"],
    //                 ["max width", "maxWidth"],
    //                 ["min height", "minHeight"],
    //                 ["min width", "minWidth"],
    //                 ["opacity", "opacity"],
    //                 ["overflow", "overflow"],
    //                 ["padding", "padding"],
    //                 ["padding bottom", "paddingBottom"],
    //                 ["padding horizontal", "paddingHorizontal"],
    //                 ["padding left", "paddingLeft"],
    //                 ["padding right", "paddingRight"],
    //                 ["padding top", "paddingTop"],
    //                 ["padding vertical", "paddingVertical"],
    //                 ["position", "position"],
    //                 ["right", "right"],
    //                 ["top", "top"],
    //                 ["width", "width"]]), "PROPNAME");
    //         this.setPreviousStatement(true, "STYLEPROP");
    //         this.setNextStatement(true, "STYLEPROP");
    //         this.setColour(230);
    //         this.setTooltip('');
    //         this.setHelpUrl('');
    //     }
    // };

    //% blockId=styleprop_bordercolor
    //% block="border color %p|%v"
    //% subcategory=Box
    export function stylePropBorderColor(p: StyBoxSide, v: string): string {
        return stylePropBorderColorImpl(p,v);
    }

    //% blockId=styleprop_borderradius
    //% block="border radius %p|%v"
    //% subcategory=Box
    export function stylePropBorderRadius(p: StyBoxCorner, v: number): string {
        return stylePropBorderRadiusImpl(p,v);
    }

    //% blockId=styleprop_borderwidth
    //% block="border width %p|%v"
    //% subcategory=Box
    export function stylePropBorderWidth(p: StyBoxSide, v: number): string {
        return stylePropBorderWidthImpl(p,v);
    }

    //% blockId=styleprop_borderstyle
    //% block="border style %v"
    //% subcategory=Box
    export function stylePropBorderStyle(v: StyBorderStyle): string {
        return stylePropBorderStyleImpl(v);
    }

    //% blockId=styleprop_flexvalues
    //% block="flex %p|%v"
    //% subcategory=Layout
    export function stylePropFlexValues(p: StyFlexType, v: number): string {
        return stylePropFlexValuesImpl(p,v);
    }

    //% blockId=styleprop_size
    //% block="size %p|%v"
    //% subcategory=Layout
    export function stylePropSize(p: StyPropSize, v: number): string {
        return stylePropSize(p,v);
    }

    //% blockId=styleprop_margin
    //% block="border margin %p|%v"
    //% subcategory=Box
    export function stylePropMargin(p: StyPropMargin, v: number): string {
        return stylePropMarginImpl(p,v);
    }

    //% blockId=styleprop_padding
    //% block="padding %p|%v"
    //% subcategory=Box
    export function stylePropPadding(p: StyPropPadding, v: number): string {
        return stylePropPaddingImpl(p,v);
    }

    //% blockId=styleprop_overflow
    //% block="overflow %v"
    //% subcategory=Layout
    export function stylePropOverflow(v: StyPropOverflow): string {
        return stylePropOverflowImpl(v);
    }

    /**
     * 
     * @param v [0-1] e.g. 1
     */
    //% blockId=styleprop_opacity
    //% block="opacity %v"
    //% subcategory=Color
    export function stylePropOpacity(v: number): string {
        return stylePropOpacityImpl(v);
    }

    //% blockId=styleprop_image_resizemode
    //% block="resize mode %v"
    //% subcategory=Image
    export function stylePropImageResizeMode(v: StyImageResizeMode): string {
        return stylePropImageResizeModeImpl(v);
    }

    //% blockId=styleprop_image_tintcolor
    //% block="tint color %v"
    //% subcategory=Image
    export function stylePropImageTintColor(v: string): string {
        return stylePropImageTintColorImpl(v);
    }

    //% blockId=styleprop_text_color
    //% block="text color %v"
    //% subcategory="Text styles"
    export function stylePropTextColor(v: string): string {
        return stylePropTextColorImpl(v);
    }

    //% blockId=styleprop_text_fontfamily
    //% block="font family %v"
    //% subcategory="Text styles"
    export function stylePropTextFontFamily(v: string): string {
        return stylePropTextFontFamilyImpl(v);
    }

    /**
     * 
     * @param v : [5-144] eg. 12
     */
    //% blockId=styleprop_text_fontsize
    //% block="font size %v"
    //% subcategory="Text styles"
    export function stylePropTextFontSize(v: number): string {
        return stylePropTextFontSizeImpl(v);
    }

    //% blockId=styleprop_text_fontstyle
    //% block="font style %v"
    //% subcategory="Text styles"
    export function stylePropTextFontStyle(v: StyTextFontStyle): string {
        return stylePropTextFontStyleImpl(v);
    }

    //% blockId=styleprop_text_fontweight
    //% block="font weight %v"
    //% subcategory="Text styles"
    export function stylePropTextFontWeight(v: StyTextFontWeight): string {
        return stylePropTextFontWeightImpl(v);
    }

    //% blockId=styleprop_text_lineheight
    //% block="line height %v"
    //% subcategory="Text styles"
    export function stylePropTextLineHeight(v: number): string {
        return stylePropTextLineHeightImpl(v);
    }

    //% blockId=styleprop_text_textalign
    //% block="alignment %v"
    //% subcategory="Text styles"
    export function stylePropTextAlign(v: StyTextAlign): string {
        return stylePropTextAlignImpl(v);
    }

    //% blockId=styleprop_text_textdecorationline
    //% block="decoration %v"
    //% subcategory="Text styles"
    export function stylePropTextDecorationLine(v: StyTextDecorationLine): string {
        return stylePropTextDecorationLineImpl(v);
    }

}
