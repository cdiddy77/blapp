
/**
 * Basic functionalities.
 */
//% color=255 weight=90 icon="\uf013"
namespace Style {
    /**
     * align content controls how rows align in the cross direction
     */
    //% blockId=styleprop_aligncontent
    //% block="align content %v"
    //% subcategory=Layout
    export function stylePropAlignContent(v: StyAlignContent): string {
        return stylePropAlignContentImpl(v);
    }

    /**
     * align items aligns children in the cross direction. For example, 
     * if children are flowing vertically, align items controls how they align horizontally.
     */
    //% blockId=styleprop_alignitems
    //% block="align items %v"
    //% subcategory=Layout
    export function stylePropAlignItems(v: StyAlignItems): string {
        return stylePropAlignItemsImpl(v);
    }

    /**
     * align self controls how a child aligns 
     * in the cross direction, overriding the align items of the parent.
     */
    //% blockId=styleprop_alignself
    //% block="align self %v"
    //% subcategory=Layout
    export function stylePropAlignSelf(v: StyAlignItems): string {
        return stylePropAlignSelfImpl(v);
    }

    /**
     * flex direction controls which directions children of a container go. 
     * row goes left to right, column goes top to bottom, and you may be 
     * able to guess what the other two do. 
     */
    //% blockId=styleprop_flexdirection
    //% block="flex direction %v"
    //% subcategory=Layout
    export function stylePropFlexDirection(v: StyFlexDirection): string {
        return stylePropFlexDirectionImpl(v);
    }

    /**
     * justify content aligns children in the main direction. For example, if children 
     * are flowing vertically, justify content controls how they align vertically. 
     */
    //% blockId=styleprop_justifycontent
    //% block="justify content %v"
    //% subcategory=Layout
    export function stylePropJustifyContent(v: StyAlignContent): string {
        return stylePropJustifyContentImpl(v);
    }

    /**
     * flex wrap controls whether children can wrap around after they hit the 
     * end of a flex container. 
     */
    //% blockId=styleprop_flexwrap
    //% block="wrap content %v"
    //% subcategory=Layout
    export function stylePropFlexWrap(v: StyFlexWrap): string {
        return stylePropFlexWrapImpl(v);
    }

    /**
     * If you want to position a child using specific numbers of logical pixels 
     * relative to its parent, set the child to have absolute position.
     */
    //% blockId=styleprop_position
    //% block="position %v"
    //% subcategory=Layout
    export function stylePropPosition(v: StyPosition): string {
        return stylePropPositionImpl(v);
    }


    /**
     * bottom is the number of logical pixels to offset the bottom edge of this component.
     * left is the number of logical pixels to offset the left edge of this component.
     * right is the number of logical pixels to offset the right edge of this component.
     * top is the number of logical pixels to offset the top edge of this component.
     * right is the number of logical pixels to offset the right edge of this component.
     * zIndex controls which components display on top of others. 
     * 
     */
    //% blockId=styleprop_offset
    //% block="offset %v|%p"
    //% subcategory=Layout
    export function stylePropOffset(v: StyOffsetType, p: number): string {
        return stylePropOffsetImpl(v,p);
    }

    /**
     * Aspect ratio controls the size of the undefined dimension of an element.
     */
    //% blockId=styleprop_aspectratio
    //% block="aspect ratio %v"
    //% subcategory=Layout
    export function stylePropAspectRatio(v: number): string {
        return stylePropAspectRatioImpl(v);
    }

    /**
     * background color sets the color for the background of the UI element.
     */
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

    /**
     * sets the color of part or all of the border
     */
    //% blockId=styleprop_bordercolor
    //% block="border color %p|%v"
    //% subcategory=Box
    export function stylePropBorderColor(p: StyBoxSide, v: string): string {
        return stylePropBorderColorImpl(p,v);
    }

    /**
     * Border radius defines how rounded the corners of the border (and the background) are.
     */
    //% blockId=styleprop_borderradius
    //% block="border radius %p|%v"
    //% subcategory=Box
    export function stylePropBorderRadius(p: StyBoxCorner, v: number): string {
        return stylePropBorderRadiusImpl(p,v);
    }

    /**
     * border width controls the width of the border.
     */
    //% blockId=styleprop_borderwidth
    //% block="border width %p|%v"
    //% subcategory=Box
    export function stylePropBorderWidth(p: StyBoxSide, v: number): string {
        return stylePropBorderWidthImpl(p,v);
    }

    /**
     * border style defines the line style of the border.
     */
    //% blockId=styleprop_borderstyle
    //% block="border style %v"
    //% subcategory=Box
    export function stylePropBorderStyle(v: StyBorderStyle): string {
        return stylePropBorderStyleImpl(v);
    }

    /**
     * When flex is a positive number, it makes the component flexible and it will
     * be sized proportional to its flex value. So a component with flex set to 
     * 2 will take twice the space as a component with flex set to 1. When flex 
     * is 0, the component is sized according to width and height and it is inflexible. 
     * When flex is -1, the component is normally sized according width and height. 
     * However, if there's not enough space, the component will shrink to its minWidth 
     * and minHeight.
     */
    //% blockId=styleprop_flexvalues
    //% block="flex %p|%v"
    //% subcategory=Layout
    export function stylePropFlexValues(p: StyFlexType, v: number): string {
        return stylePropFlexValuesImpl(p,v);
    }

    /**
     * height sets the height of this component. width sets the width of this component.
     * max height is the maximum height for this component, in logical pixels. 
     * max width is the maximum width for this component, in logical pixels.
     * min height is the minimum height for this component, in logical pixels.
     * min width is the minimum width for this component, in logical pixels.
     */
    //% blockId=styleprop_size
    //% block="size %p|%v"
    //% subcategory=Layout
    export function stylePropSize(p: StyPropSize, v: number): string {
        return stylePropSizeImpl(p,v);
    }

    /**
     * Sets the width of part or all of the margin area (area outside the border)
     * of the UI element
     */
    //% blockId=styleprop_margin
    //% block="margin %p|%v"
    //% subcategory=Box
    export function stylePropMargin(p: StyPropMargin, v: number): string {
        return stylePropMarginImpl(p,v);
    }

    /**
     *  Sets the width of part or all of the padding area (area between the border and
     * the contents) of the UI element
     */
    //% blockId=styleprop_padding
    //% block="padding %p|%v"
    //% subcategory=Box
    export function stylePropPadding(p: StyPropPadding, v: number): string {
        return stylePropPaddingImpl(p,v);
    }

    /**
     * Overflow specifies whether to clip content, show scrollbars, or display 
     * overflowing content when it is too large for the element. 
     */
    //% blockId=styleprop_overflow
    //% block="overflow %v"
    //% subcategory=Layout
    export function stylePropOverflow(v: StyPropOverflow): string {
        return stylePropOverflowImpl(v);
    }

    /**
     * Opacity specifies the level of transparency of an element, that is, 
     * the degree to which the content behind the element is visible.
     * @param v [0-1] e.g. 1
     */
    //% blockId=styleprop_opacity
    //% block="opacity %v"
    //% subcategory=Color
    export function stylePropOpacity(v: number): string {
        return stylePropOpacityImpl(v);
    }

    /**
     * resize mode Determines how to resize the image when the frame doesn't match the raw image dimensions.
     * 'cover': Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding). 
     * 'contain': Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
     * 'stretch': Scale width and height independently, This may change the aspect ratio of the src.
     * 'repeat': Repeats the image within the frame.
     * 'center': Centers the image within the frame.
     */
    //% blockId=styleprop_image_resizemode
    //% block="resize mode %v"
    //% subcategory=Image
    export function stylePropImageResizeMode(v: StyImageResizeMode): string {
        return stylePropImageResizeModeImpl(v);
    }

    /**
     * tint color changes all the non-alpha pixels of the image
     */
    //% blockId=styleprop_image_tintcolor
    //% block="tint color %v"
    //% subcategory=Image
    export function stylePropImageTintColor(v: string): string {
        return stylePropImageTintColorImpl(v);
    }

    /**
     * text color controls the color of the text
     */
    //% blockId=styleprop_text_color
    //% block="text color %v"
    //% subcategory="Text styles"
    export function stylePropTextColor(v: string): string {
        return stylePropTextColorImpl(v);
    }

    /**
     * font family controls the font used to display text
     */
    //% blockId=styleprop_text_fontfamily
    //% block="font family %v"
    //% subcategory="Text styles"
    export function stylePropTextFontFamily(v: string): string {
        return stylePropTextFontFamilyImpl(v);
    }

    /**
     * font size controls the size of the text
     * @param v : [5-144] eg. 12
     */
    //% blockId=styleprop_text_fontsize
    //% block="font size %v"
    //% subcategory="Text styles"
    export function stylePropTextFontSize(v: number): string {
        return stylePropTextFontSizeImpl(v);
    }

    /**
     * font style controls whether the text is italic
     */
    //% blockId=styleprop_text_fontstyle
    //% block="font style %v"
    //% subcategory="Text styles"
    export function stylePropTextFontStyle(v: StyTextFontStyle): string {
        return stylePropTextFontStyleImpl(v);
    }

    /**
     * font weight specifies font weight. The values 'normal' and 'bold' are 
     * supported for most fonts. Not all fonts have a variant for each of the 
     * numeric values, in that case the closest one is chosen.
     */
    //% blockId=styleprop_text_fontweight
    //% block="font weight %v"
    //% subcategory="Text styles"
    export function stylePropTextFontWeight(v: StyTextFontWeight): string {
        return stylePropTextFontWeightImpl(v);
    }

    /**
     * sets the amount of space used for lines.
     */
    //% blockId=styleprop_text_lineheight
    //% block="line height %v"
    //% subcategory="Text styles"
    export function stylePropTextLineHeight(v: number): string {
        return stylePropTextLineHeightImpl(v);
    }

    /**
     * alignment specifies the horizontal alignment of text in an element.
     */
    //% blockId=styleprop_text_textalign
    //% block="alignment %v"
    //% subcategory="Text styles"
    export function stylePropTextAlign(v: StyTextAlign): string {
        return stylePropTextAlignImpl(v);
    }

    /**
     * specifies the appearance of decorative lines used on text. 
     */
    //% blockId=styleprop_text_textdecorationline
    //% block="decoration %v"
    //% subcategory="Text styles"
    export function stylePropTextDecorationLine(v: StyTextDecorationLine): string {
        return stylePropTextDecorationLineImpl(v);
    }

}
