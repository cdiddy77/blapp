
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
        return { name: 'alignContent', stringValue: value };
    }

    //% blockId=styleprop_alignitems
    //% block="align items %v"
    //% subcategory=Layout
    export function stylePropAlignItems(v: StyAlignItems): string {
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
        return { name: 'alignItems', stringValue: value };
    }

    //% blockId=styleprop_alignself
    //% block="align self %v"
    //% subcategory=Layout
    export function stylePropAlignSelf(v: StyAlignItems): string {
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
        return { name: 'alignSelf', stringValue: value };
    }

    //% blockId=styleprop_flexdirection
    //% block="flex direction %v"
    //% subcategory=Layout
    export function stylePropFlexDirection(v: StyFlexDirection): string {
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
        return { name: 'flexDirection', stringValue: value };
    }

    //% blockId=styleprop_justifycontent
    //% block="justify content %v"
    //% subcategory=Layout
    export function stylePropJustifyContent(v: StyAlignContent): string {
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
        return { name: 'justifyContent', stringValue: value };
    }

    //% blockId=styleprop_flexwrap
    //% block="wrap content %v"
    //% subcategory=Layout
    export function stylePropFlexWrap(v: StyFlexWrap): string {
        let value: string;
        switch (v) {
            case StyFlexWrap.wrap:
                value = 'wrap';
                break;
            case StyFlexWrap.nowrap:
                value = 'nowrap';
                break;
        }
        return { name: 'flexWrap', stringValue: value };
    }

    //% blockId=styleprop_position
    //% block="position %v"
    //% subcategory=Layout
    export function stylePropPosition(v: StyPosition): string {
        let value: string;
        switch (v) {
            case StyPosition.absolute:
                value = 'absolute';
                break;
            case StyPosition.relative:
                value = 'relative';
                break;
        }
        return { name: 'position', stringValue: value };
    }


    //% blockId=styleprop_offset
    //% block="offset %v|%p"
    //% subcategory=Layout
    export function stylePropOffset(v: StyOffsetType, p: number): string {
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
        return { name: property, numberValue: p };
    }

    //% blockId=styleprop_aspectratio
    //% block="aspect ratio %v"
    //% subcategory=Layout
    export function stylePropAspectRatio(v: number): string {
        return { name: 'aspectRatio', numberValue: v };
    }

    //% blockId=styleprop_backgroundcolor
    //% block="background color %v"
    //% subcategory=Color
    export function stylePropBackgroundColor(v: string): string {
        return { name: 'backgroundColor', stringValue: v };
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
        return { name: property, stringValue: v };
    }

    //% blockId=styleprop_borderradius
    //% block="border radius %p|%v"
    //% subcategory=Box
    export function stylePropBorderRadius(p: StyBoxCorner, v: number): string {
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
        return { name: property, numberValue: v };
    }

    //% blockId=styleprop_borderwidth
    //% block="border width %p|%v"
    //% subcategory=Box
    export function stylePropBorderWidth(p: StyBoxSide, v: number): string {
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
        return { name: property, numberValue: v };
    }

    //% blockId=styleprop_borderstyle
    //% block="border style %v"
    //% subcategory=Box
    export function stylePropBorderStyle(v: StyBorderStyle): string {
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
        return { name: 'borderStyle', stringValue: value };
    }

    //% blockId=styleprop_flexvalues
    //% block="flex %p|%v"
    //% subcategory=Layout
    export function stylePropFlexValues(p: StyFlexType, v: number): string {
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
        return { name: property, numberValue: v };
    }

    //% blockId=styleprop_size
    //% block="size %p|%v"
    //% subcategory=Layout
    export function stylePropSize(p: StyPropSize, v: number): string {
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
        return { name: property, numberValue: v };
    }

    //% blockId=styleprop_margin
    //% block="border margin %p|%v"
    //% subcategory=Box
    export function stylePropMargin(p: StyPropMargin, v: number): string {
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
        return { name: property, numberValue: v };
    }

    //% blockId=styleprop_padding
    //% block="padding %p|%v"
    //% subcategory=Box
    export function stylePropPadding(p: StyPropPadding, v: number): string {
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
        return { name: property, numberValue: v };
    }

    //% blockId=styleprop_overflow
    //% block="overflow %v"
    //% subcategory=Layout
    export function stylePropOverflow(v: StyPropOverflow): string {
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
        return { name: 'overflow', stringValue: value };
    }

    /**
     * 
     * @param v [0-1] e.g. 1
     */
    //% blockId=styleprop_opacity
    //% block="opacity %v"
    //% subcategory=Color
    export function stylePropOpacity(v: number): string {
        return { name: 'opacity', numberValue: v };
    }

    //% blockId=styleprop_image_resizemode
    //% block="resize mode %v"
    //% subcategory=Image
    export function stylePropImageResizeMode(v: StyImageResizeMode): string {
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
        return { name: 'resizeMode', stringValue: value };
    }

    //% blockId=styleprop_image_tintcolor
    //% block="tint color %v"
    //% subcategory=Image
    export function stylePropImageTintColor(v: string): string {
        return { name: 'tintColor', stringValue: v };
    }

    //% blockId=styleprop_text_color
    //% block="text color %v"
    //% subcategory="Text styles"
    export function stylePropTextColor(v: string): string {
        return { name: 'color', stringValue: v };
    }

    //% blockId=styleprop_text_fontfamily
    //% block="font family %v"
    //% subcategory="Text styles"
    export function stylePropTextFontFamily(v: string): string {
        return { name: 'fontFamily', stringValue: v };
    }

    /**
     * 
     * @param v : [5-144] eg. 12
     */
    //% blockId=styleprop_text_fontsize
    //% block="font size %v"
    //% subcategory="Text styles"
    export function stylePropTextFontSize(v: number): string {
        return { name: 'fontSize', numberValue: v };
    }

    //% blockId=styleprop_text_fontstyle
    //% block="font style %v"
    //% subcategory="Text styles"
    export function stylePropTextFontStyle(v: StyTextFontStyle): string {
        let value: string;
        switch (v) {
            case StyTextFontStyle.normal:
                value = "normal";
                break;
            case StyTextFontStyle.italic:
                value = "italic";
                break;
        }
        return { name: 'fontStyle', stringValue: value };
    }

    //% blockId=styleprop_text_fontweight
    //% block="font weight %v"
    //% subcategory="Text styles"
    export function stylePropTextFontWeight(v: StyTextFontWeight): string {
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
        return { name: 'fontWeight', stringValue: value };
    }

    //% blockId=styleprop_text_lineheight
    //% block="line height %v"
    //% subcategory="Text styles"
    export function stylePropTextLineHeight(v: number): string {
        return { name: 'lineHeight', numberValue: v };
    }

    //% blockId=styleprop_text_textalign
    //% block="alignment %v"
    //% subcategory="Text styles"
    export function stylePropTextAlign(v: StyTextAlign): string {
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
        return { name: 'textAlign', stringValue: value };
    }

    //% blockId=styleprop_text_textdecorationline
    //% block="decoration %v"
    //% subcategory="Text styles"
    export function stylePropTextDecorationLine(v: StyTextDecorationLine): string {
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
        return { name: 'textAlign', stringValue: value };
    }

}
