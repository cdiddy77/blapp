/// <reference path="../localtypings/blockly.d.ts" />
import { iconData } from './IconData';

export namespace BlocklyConfig {

    export function initBlockDefinitions(): void {
        Blockly.BlockSvg.START_HAT = true;
        Blockly.Blocks['user_interface'] = {
            init: function () {
                this.appendStatementInput("elements")
                    .setCheck(null)
                    .appendField("UI");
                this.setColour(285);
                this.setTooltip('insert the elements of the UI');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['container_element'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField(new Blockly.FieldImage("media/av/ic_web_white_48dp.png", 16, 16, "*"))
                    .appendField("container")
                    .appendField(new Blockly.FieldTextInput("", null), "NAME");
                this.appendStatementInput("child elements")
                    .setCheck(null);
                this.appendValueInput("style")
                    .setCheck("STYLE")
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("appearance");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['text_element'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField(new Blockly.FieldImage("media/content/ic_font_download_white_48dp.png", 16, 16, "*"))
                    .appendField("text");
                this.appendValueInput("text value")
                    .setCheck("String")
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("value");
                this.appendValueInput("style")
                    .setCheck("STYLE")
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("formatting");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(195);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['image_element'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField(new Blockly.FieldImage("media/image/ic_photo_white_48dp.png", 16, 16, "*"))
                    .appendField("image");
                this.appendValueInput("URL")
                    .setCheck("String")
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("URL");
                this.appendValueInput("style")
                    .setCheck("STYLE")
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("visuals");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(135);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
        Blockly.Blocks['button_element'] = {
            init: function () {
                this.appendDummyInput()
                     .appendField(new Blockly.FieldImage("media/image/ic_photo_white_48dp.png", 16, 16, "*"))
                    .appendField("button");
                this.appendValueInput("color")
                    .setCheck(null)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("Color");
                this.appendValueInput("title")
                    .setCheck("String")
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("Title");
                this.appendStatementInput("onpress")
                    .setCheck(null)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("When Pressed");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
        Blockly.Blocks['styledef'] = {
            init: function () {
                this.appendStatementInput("STYLES")
                    .setCheck("STYLEPROP")
                    .appendField("style");
                this.setOutput(true, "STYLE");
                this.setColour(230);
                this.setTooltip('define visual appearance');
                this.setHelpUrl('');
            }
        };
        Blockly.Blocks['stylejoindef'] = {
            init: function () {
                this.appendValueInput("STYLEARRAY")
                    .setCheck("Array")
                    .appendField("combine styles");
                this.setOutput(true, "STYLE");
                this.setColour(230);
                this.setTooltip('define visual appearance by combining other styles');
                this.setHelpUrl('');
            }
        };

    }
    export function initStyleBlockDefinitions(): void {

        Blockly.Blocks['styleprop_aligncontent'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("align content")
                    .appendField(new Blockly.FieldDropdown([["start", "flex-start"], ["end", "flex-end"], ["center", "center"], ["stretch", "stretch"], ["space between", "space-between"], ["space around", "space-around"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_alignitems'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("align items")
                    .appendField(new Blockly.FieldDropdown([["start", "flex-start"], ["end", "flex-end"], ["center", "center"], ["stretch", "stretch"], ["baseline", "baseline"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_alignself'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("align self")
                    .appendField(new Blockly.FieldDropdown([["start", "flex-start"], ["end", "flex-end"], ["center", "center"], ["stretch", "stretch"], ["baseline", "baseline"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_flexdirection'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("child direction")
                    .appendField(new Blockly.FieldDropdown([["row", "row"], ["reverse row", "row-reverse"], ["column", "column"], ["reverse column", "column-reverse"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_justifycontent'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("arrange children")
                    .appendField(new Blockly.FieldDropdown([["start", "flex-start"], ["end", "flex-end"], ["center", "center"], ["space between", "space-between"], ["space around", "space-around"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_flexwrap'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("wrap content")
                    .appendField(new Blockly.FieldDropdown([["yes", "wrap"], ["no", "nowrap"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_position'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("position")
                    .appendField(new Blockly.FieldDropdown([["bottom", "bottom"], ["left", "left"], ["right", "right"], ["top", "top"], ["z-index", "zIndex"]]), "NAME")
                    .appendField("value")
                    .appendField(new Blockly.FieldNumber(0), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_aspectratio'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("aspect ratio")
                    .appendField(new Blockly.FieldNumber(1, 0, 1000, 2), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_backgroundcolor'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("background color")
                    .appendField(new Blockly.FieldColour("#ff0000"), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('background color for the UI element');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_generic'] = {
            init: function () {
                this.appendValueInput("VALUE")
                    .setCheck(null)
                    .appendField("style property")
                    .appendField(new Blockly.FieldDropdown([["align items", "alignItems"], ["align self", "alignSelf"], ["backface visibility", "backfaceVisibility"], ["background color", "backgroundColor"], ["border bottom color", "borderBottomColor"], ["border bottom left radius", "borderBottomLeftRadius"], ["border bottom right radius", "borderBottomRightRadius"], ["border bottom width", "borderBottomWidth"], ["border color", "borderColor"], ["border left color", "borderLeftColor"], ["border left width", "borderLeftWidth"], ["border radius", "borderRadius"], ["border right color", "borderRightColor"], ["border right width", "borderRightWidth"], ["border style", "borderStyle"], ["border top color", "borderTopColor"], ["border top left radius", "borderTopLeftRadius"], ["border top right radius", "borderTopRightRadius"], ["border top width", "borderTopWidth"], ["border width", "borderWidth"], ["direction", "direction"], ["display", "display"], ["flex", "flex"], ["flex basis", "flexBasis"], ["flex direction", "flexDirection"], ["flex grow,", "flexGrow"], ["flex shrink", "flexShrink"], ["flex wrap", "flexWrap"], ["height", "height"], ["justify content", "justifyContent"], ["left", "left"], ["margin", "margin"], ["margin bottom", "marginBottom"], ["margin horizontal", "marginHorizontal"], ["margin left", "marginLeft"], ["margin right", "marginRight"], ["margin top", "marginTop"], ["margin vertical", "marginVertical"], ["max height", "maxHeight"], ["max width", "maxWidth"], ["min height", "minHeight"], ["min width", "minWidth"], ["opacity", "opacity"], ["overflow", "overflow"], ["padding", "padding"], ["padding bottom", "paddingBottom"], ["padding horizontal", "paddingHorizontal"], ["padding left", "paddingLeft"], ["padding right", "paddingRight"], ["padding top", "paddingTop"], ["padding vertical", "paddingVertical"], ["position", "position"], ["right", "right"], ["top", "top"], ["width", "width"]]), "PROPNAME");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_bordercolor'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("border")
                    .appendField(new Blockly.FieldDropdown([["all", "borderColor"], ["bottom", "borderBottomColor"], ["top", "borderTopColor"], ["left", "borderLeftColor"], ["right", "borderRightColor"]]), "NAME")
                    .appendField("color")
                    .appendField(new Blockly.FieldColour("#ff0000"), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_borderradius'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("border")
                    .appendField(new Blockly.FieldDropdown([["all", "borderRadius"], ["bottom left", "borderBottomLeftRadius"], ["bottom right", "borderBottomRightRadius"], ["top left", "borderTopLeftRadius"], ["top right", "borderTopRightRadius"]]), "NAME")
                    .appendField("radius")
                    .appendField(new Blockly.FieldNumber(0), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_borderwidth'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("border")
                    .appendField(new Blockly.FieldDropdown([["all", "borderWidth"], ["bottom", "borderBottomWidth"], ["left", "borderLeftWidth"], ["top", "borderTopWidth"], ["right", "borderRightWidth"]]), "NAME")
                    .appendField("width")
                    .appendField(new Blockly.FieldNumber(0), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_borderstyle'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("border style")
                    .appendField(new Blockly.FieldDropdown([["solid", "solid"], ["dotted", "dotted"], ["dashed", "dashed"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_flexvalues'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("flex")
                    .appendField(new Blockly.FieldDropdown([["---", "flex"], ["basis", "flexBasis"], ["grow", "flexGrow"], ["shrink", "flexShrink"]]), "NAME")
                    .appendField("value")
                    .appendField(new Blockly.FieldNumber(0), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_size'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("size")
                    .appendField(new Blockly.FieldDropdown([["height", "height"], ["width", "width"], ["max height", "maxHeight"], ["max width", "maxWidth"], ["min height", "minHeight"], ["min width", "minWidth"]]), "NAME")
                    .appendField("value")
                    .appendField(new Blockly.FieldNumber(0), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_margin'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("margin")
                    .appendField(new Blockly.FieldDropdown([["all", "margin"], ["bottom", "marginBottom"], ["horizontal", "marginHorizontal"], ["left", "marginLeft"], ["right", "marginRight"], ["top", "marginTop"], ["vertical", "marginVertical"]]), "NAME")
                    .appendField("value")
                    .appendField(new Blockly.FieldNumber(0), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_padding'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("padding")
                    .appendField(new Blockly.FieldDropdown([["all", "padding"], ["bottom", "paddingBottom"], ["horizontal", "paddingHorizontal"], ["left", "paddingLeft"], ["right", "paddingRight"], ["top", "paddingTop"], ["vertical", "paddingVertical"]]), "NAME")
                    .appendField("value")
                    .appendField(new Blockly.FieldNumber(0), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_overflow'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("overflow")
                    .appendField(new Blockly.FieldDropdown([["visible", "visible"], ["hidden", "hidden"], ["scroll", "scroll"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_opacity'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("opacity")
                    .appendField(new Blockly.FieldNumber(1, 0, 1, 0), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_image_resizemode'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("image resize mode")
                    .appendField(new Blockly.FieldDropdown([["cover", "cover"], ["contain", "contain"], ["center", "center"], ["stretch", "stretch"], ["repeat", "repeat"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_image_tintcolor'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("image tint color")
                    .appendField(new Blockly.FieldColour("#ff0000"), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('tint the image');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_text_color'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("text color")
                    .appendField(new Blockly.FieldColour("#ff0000"), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_text_fontfamily'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("font family")
                    .appendField(new Blockly.FieldTextInput("sans-serif", null), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_text_fontsize'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("font size")
                    .appendField(new Blockly.FieldNumber(12, 5, 144), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_text_fontstyle'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("font style")
                    .appendField(new Blockly.FieldDropdown([["normal", "normal"], ["italic", "italic"]]), "VALUE");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_text_fontweight'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("font weight")
                    .appendField(new Blockly.FieldDropdown([["normal", "normal"], ["bold", "bold"], ["100", "100"], ["200", "200"], ["300", "300"], ["400", "400"], ["500", "500"], ["600", "600"], ["700", "700"], ["800", "800"], ["900", "900"]]), "value");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_text_lineheight'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("line height")
                    .appendField(new Blockly.FieldNumber(12), "VALUE");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_text_textalign'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("alignment")
                    .appendField(new Blockly.FieldDropdown([["auto", "auto"], ["left", "left"], ["right", "right"], ["center", "center"], ["justify", "justify"]]), "value");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['styleprop_text_textdecorationline'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("decoration")
                    .appendField(new Blockly.FieldDropdown([["none", "none"], ["underline", "underline"], ["line through", "line-through"], ["both", "underline line-through"]]), "value");
                this.setPreviousStatement(true, "STYLEPROP");
                this.setNextStatement(true, "STYLEPROP");
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
    }
    export function initIconBlockDefinitions(): void {
        for (let k in iconData) {
            if (!iconData.hasOwnProperty(k)) {
                continue;
            }
            let vals = iconData[k];
            let mappedVals = vals.map((v, i, arr) => {
                return [
                    {
                        "src": "media/" + k + "/ic_" + v + "_black_48dp.png",
                        "width": 16,
                        "height": 16,
                        "alt": v
                    }, v
                ];
            });
            Blockly.Blocks['icon_' + k] = {
                init: function () {
                    this.appendDummyInput()
                        .appendField(k)
                        .appendField(new Blockly.FieldDropdown(mappedVals), "VALUE")
                        .appendField("size")
                        .appendField(new Blockly.FieldNumber(24, 8, 184), "SIZE")
                        .appendField(new Blockly.FieldDropdown([["dark", "black"], ["light", "white"]]), "SHADE");
                    this.appendValueInput("style")
                        .setCheck("STYLE")
                        .setAlign(Blockly.ALIGN_RIGHT)
                        .appendField("visuals");
                    this.setPreviousStatement(true, null);
                    this.setNextStatement(true, null);
                    this.setColour(75);
                    this.setTooltip('');
                    this.setHelpUrl('');
                }
            };
        }
    }

    var curVarIndex: number = 0;
    function getVarName(prefix: string): string {
        curVarIndex++;
        return prefix + curVarIndex;
    }
    export function initCodeGenerators(): void {

        Blockly.JavaScript['user_interface'] = (block: Blockly.Block) => {
            var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');
            let code = '\nvar __f,result={};\nCgRt.setTargetRenderProc(function(){';
            code += '\nCgRt.pushCont();\n';
            code += statements_elements;
            code += '\nvar cl=CgRt.popCont();';
            code += '\nreturn CgRt.createElement(CgRt.Viewr, {style:{backgroundColor:"white",height:600}}, cl);\n});';
            return code;
        };

        Blockly.JavaScript['container_element'] = (block: Blockly.Block) => {
            let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
            // properties
            let code = '{\nCgRt.beginProps();\n';

            //styles
            let value_style = Blockly.JavaScript.valueToCode(block, 'style', Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }
            //endprops
            let propsVarName = getVarName('p');
            code += `\nvar ${propsVarName}=CgRt.getProps();`;

            // children
            code += '\nCgRt.pushCont();\n{';
            code += statements_child_elements;
            let childrenVarName = getVarName('cl');
            code += `}\nvar ${childrenVarName}=CgRt.popCont();`;
            code += `\nCgRt.pushElem(CgRt.createElement(CgRt.Viewr, ${propsVarName},${childrenVarName}));\n}\n`;
            return code;
        };

        Blockly.JavaScript['text_element'] = (block: Blockly.Block) => {
            var value_text_value = Blockly.JavaScript.valueToCode(block, 'text value', Blockly.JavaScript.ORDER_ATOMIC);
            // properties
            let code = '{\nCgRt.beginProps();\n';

            //styles
            let value_style = Blockly.JavaScript.valueToCode(block, 'style', Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }
            //endprops
            let propsVarName = getVarName('p');
            code += `\nvar ${propsVarName}=CgRt.getProps();`;

            code += `\nCgRt.pushElem(CgRt.createElement(CgRt.Textr,${propsVarName},[`;
            code += value_text_value && value_text_value !== '' ? value_text_value : "''";
            code += ']));\n}\n';
            return code;
        };

        Blockly.JavaScript['image_element'] = (block: Blockly.Block) => {
            var value_name = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ASSIGNMENT);
            //properties
            let code = '\n{\nCgRt.beginProps();\n';

            code += '\nCgRt.addProp("source",{uri:';
            code += value_name && value_name !== '' ? value_name : "''";
            code += '});'
            //styles
            let value_style = Blockly.JavaScript.valueToCode(block, 'style', Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }

            //endprops
            code += '\nvar p=CgRt.getProps();';

            code += '\nCgRt.pushElem(CgRt.createElement(CgRt.Imager,p));\n}';
            return code;
        };
  
        Blockly.JavaScript['styledef'] = (block: Blockly.Block) => {
            let statements_name = Blockly.JavaScript.statementToCode(block, 'STYLES');
            let code = '\nfunction(){\nvar result={};';
            code += statements_name;
            code += '\nreturn result;\n}()';
            return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
        };

        Blockly.JavaScript['stylejoindef'] = function (block: Blockly.Block) {
            var value_stylearray = Blockly.JavaScript.valueToCode(block, 'STYLEARRAY', Blockly.JavaScript.ORDER_ATOMIC);
            var code = value_stylearray;
            return [code, Blockly.JavaScript.ORDER_ATOMIC];
        };

        Blockly.JavaScript['sharvar_get'] = function (block: Blockly.Block) {
            var dropdown_varname = block.getFieldValue('varname');
            // TODO: Assemble JavaScript into code variable.
            var code = `CgRt.getShareVar('${dropdown_varname}')`;
            // TODO: Change ORDER_NONE to the correct strength.
            return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
        };
        Blockly.JavaScript['sharvar_set'] = function (block: Blockly.Block) {
            var dropdown_varname = block.getFieldValue('varname');
            var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
            if (!value_value || value_value == '') {
                value_value = 'null';
            }
            // TODO: Assemble JavaScript into code variable.
            var code = `\nCgRt.setShareVar('${dropdown_varname}',${value_value});`;
            // TODO: Change ORDER_NONE to the correct strength.
            return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
        };
    }

    function genStyleStringProp(name: string, value: string): string {
        return '\nresult.' + name + '="' + value + '";';
    }

    function genStyleNumberProp(name: string, value: string): string {
        return '\nresult.' + name + '=' + value + ';';
    }

    export function initStyleBlockCodeGenerators(): void {
        Blockly.JavaScript['styleprop_aligncontent'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('alignContent', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_alignitems'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('alignItems', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_alignself'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('alignSelf', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_flexdirection'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('flexDirection', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_justifycontent'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('justifyContent', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_flexwrap'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('flexWrap', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_position'] = (block: Blockly.Block) => {
            var dropdown_name = block.getFieldValue('NAME');
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp(dropdown_name, number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_aspectratio'] = (block: Blockly.Block) => {
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp('aspectRatio', number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_backgroundcolor'] = (block: Blockly.Block) => {
            var colour_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('backgroundColor', colour_value);
            return code;
        };

        Blockly.JavaScript['styleprop_generic'] = (block: Blockly.Block) => {
            var dropdown_propname = block.getFieldValue('PROPNAME');
            var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };

        Blockly.JavaScript['styleprop_bordercolor'] = (block: Blockly.Block) => {
            var dropdown_name = block.getFieldValue('NAME');
            var colour_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp(dropdown_name, colour_value);
            return code;
        };

        Blockly.JavaScript['styleprop_borderradius'] = (block: Blockly.Block) => {
            var dropdown_name = block.getFieldValue('NAME');
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp(dropdown_name, number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_borderwidth'] = (block: Blockly.Block) => {
            var dropdown_name = block.getFieldValue('NAME');
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp(dropdown_name, number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_borderstyle'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('borderStyle', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_flexvalues'] = (block: Blockly.Block) => {
            var dropdown_name = block.getFieldValue('NAME');
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp(dropdown_name, number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_size'] = (block: Blockly.Block) => {
            var dropdown_name = block.getFieldValue('NAME');
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp(dropdown_name, number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_margin'] = (block: Blockly.Block) => {
            var dropdown_name = block.getFieldValue('NAME');
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp(dropdown_name, number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_padding'] = (block: Blockly.Block) => {
            var dropdown_name = block.getFieldValue('NAME');
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp(dropdown_name, number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_overflow'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('overflow', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_opacity'] = (block: Blockly.Block) => {
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp('opacity', number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_image_resizemode'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('resizeMode', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_image_tintcolor'] = (block: Blockly.Block) => {
            var colour_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('tintColor', colour_value);
            return code;
        };

        Blockly.JavaScript['styleprop_text_color'] = (block: Blockly.Block) => {
            var colour_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('color', colour_value);
            return code;
        };

        Blockly.JavaScript['styleprop_text_fontfamily'] = (block: Blockly.Block) => {
            var text_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('fontFamily', text_value);
            return code;
        };

        Blockly.JavaScript['styleprop_text_fontsize'] = (block: Blockly.Block) => {
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp('fontSize', number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_text_fontstyle'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('VALUE');
            var code = genStyleStringProp('fontStyle', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_text_fontweight'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('value');
            var code = genStyleStringProp('fontWeight', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_text_lineheight'] = (block: Blockly.Block) => {
            var number_value = block.getFieldValue('VALUE');
            var code = genStyleNumberProp('lineHeight', number_value);
            return code;
        };

        Blockly.JavaScript['styleprop_text_textalign'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('value');
            var code = genStyleStringProp('textAlign', dropdown_value);
            return code;
        };

        Blockly.JavaScript['styleprop_text_textdecorationline'] = (block: Blockly.Block) => {
            var dropdown_value = block.getFieldValue('value');
            var code = genStyleStringProp('textDecorationLine', dropdown_value);
            return code;
        };
    }
    export function initIconBlockCodeGenerators(): void {
        for (let k in iconData) {
            if (!iconData.hasOwnProperty(k)) {
                continue;
            }

            Blockly.JavaScript['icon_' + k] = (block: Blockly.Block) => {
                var dropdown_value = block.getFieldValue('VALUE');
                var number_size = block.getFieldValue('SIZE');
                var dropdown_shade = block.getFieldValue('SHADE');
                //properties
                let code = '\n{\nCgRt.beginProps();\n';


                code += '\nCgRt.addProp("source",{uri:"';
                code += dropdown_value && dropdown_value !== ''
                    ? ("media/" + k + "/ic_" + dropdown_value + "_" + dropdown_shade + "_48dp.png")
                    : "''";
                code += '"});'

                //styles
                let value_style = Blockly.JavaScript.valueToCode(block, 'style', Blockly.JavaScript.ORDER_ATOMIC);
                let default_style = '[{width:' + number_size + ',height:' + number_size;

                if (value_style && value_style !== '') {
                    default_style += '},' + value_style + ']';
                } else {
                    default_style += '}]';
                }
                code += '\nCgRt.addProp("style",' + default_style + ');';

                //endprops
                code += '\nvar p=CgRt.getProps();';

                code += '\nCgRt.pushElem(CgRt.createElement(CgRt.Imager,p));\n}';
                return code;
            };
        }

    }
}