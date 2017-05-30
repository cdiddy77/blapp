/// <reference path="../localtypings/blockly.d.ts" />

import * as jsutil from '../../../shared/src/util/jsutil';
import * as BlocklyConfig from './BlocklyConfig';
import * as  UIBlockConfig from './UIBlockConfig';

export function initBlockDefs() {
    // sprite
    let defName = 'sprite_element';
    let viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
    viewBlockDef.init = function () {
        this.appendValueInput("URL")
            .setCheck(null)
            .appendField(new Blockly.FieldTextInput(""), "NAME")
            .appendField("Sprite")
            .appendField("width")
            .appendField(new Blockly.FieldNumber(100), "width")
            .appendField("height")
            .appendField(new Blockly.FieldNumber(100), "height")
            .appendField("URL");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
        UIBlockConfig.blockDefInitHelper.call(this, 'sprite_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;
    // canvas
    defName = 'canvas_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
    viewBlockDef.init = function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(""), "NAME")
            .appendField("Canvas")
            .appendField(new Blockly.FieldImage("/media/action/ic_open_with_white_48dp.png", 16, 16, "*"))
            .appendField(new Blockly.FieldCheckbox("FALSE"), "isFlex")
            .appendField("class")
            .appendField(new Blockly.FieldDropdown([
                ["panel", "panel"],
                ["frame", "frame"],
                ["framed panel", "framepanel"],
                ["header", "header"],
                ["footer", "footer"],
                ["row", "row"],
                ["(none)", "none"]
            ]),
            "visual purpose");
        this.appendStatementInput("children")
            .setCheck(null)
            .appendField("children");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip('');
        this.setHelpUrl('');
        UIBlockConfig.blockDefInitHelper.call(this, 'canvas_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;

    Blockly.Blocks['sprite_get_x'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("x position");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_get_y'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("y position");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['canvas_get_width'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("canvas")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("width");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['canvas_get_height'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("canvas")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("height");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_get_direction'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("direction");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_get_scale'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("size %");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_set_x'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("set x");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_set_y'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("set y");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_set_position'] = {
        init: function () {
            this.appendValueInput("xpos")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("set x");
            this.appendValueInput("ypos")
                .setCheck("Number")
                .appendField("y");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_set_direction'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("set direction");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_set_scale'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("set size %");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_rotate_left'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("rotate counter-clockwise");
            this.appendDummyInput()
                .appendField("degrees");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_rotate_right'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("rotate clockwise");
            this.appendDummyInput()
                .appendField("degrees");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_change_x'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("change x by");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_change_y'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("change y by");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_change_position'] = {
        init: function () {
            this.appendValueInput("xval")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("change x by");
            this.appendValueInput("yval")
                .setCheck("Number")
                .appendField("y by");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    Blockly.Blocks['sprite_change_scale'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("change size by");
            this.appendDummyInput()
                .appendField("%");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_move'] = {
        init: function () {
            this.appendValueInput("value")
                .setCheck("Number")
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("move");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_intersect_edge'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("touches side")
                .appendField(new Blockly.FieldDropdown([
                    ["any", "any"],
                    ["left", "left"],
                    ["top", "top"],
                    ["right", "right"],
                    ["bottom", "bottom"],
                    ["left+right", "horizontal"],
                    ["top+bottom", "vertical"]
                ]), "edgetype");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_intersect_edge_bounce'] = {
        init: function () {
            this.appendValueInput("speed")
                .setCheck(null)
                .appendField("if sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("will touch side")
                .appendField(new Blockly.FieldDropdown([
                    ["any", "any"],
                    ["left", "left"],
                    ["top", "top"],
                    ["right", "right"],
                    ["bottom", "bottom"],
                    ["left+right", "horizontal"],
                    ["top+bottom", "vertical"]
                ]), "edgetype")
                .appendField("at speed");
            this.appendDummyInput()
                .appendField("then bounce");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_intersect_sprite'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("touches sprite")
                .appendField(new Blockly.FieldTextInput(""), "OTHER");
            this.setOutput(true, "Boolean");
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.Blocks['sprite_intersect_sprite_bounce'] = {
        init: function () {
            this.appendValueInput("speed")
                .setCheck(null)
                .appendField("if sprite")
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("at speed");
            this.appendValueInput("other speed")
                .setCheck(null)
                .appendField("will touch sprite")
                .appendField(new Blockly.FieldTextInput(""), "OTHER")
                .appendField("at speed");
            this.appendDummyInput()
                .appendField("then bounce");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
}

export function initCodegen() {
    Blockly.JavaScript['sprite_element'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let number_width = block.getFieldValue('width');
        let number_height = block.getFieldValue('height');
        let value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_COMMA);

        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];

        //properties
        let code = '\n{\nCgRt.beginProps();\n';

        code += `\nif(CgRt.getContOpts()&& CgRt.getContOpts().canvasId)CgRt.addProp('canvasId',CgRt.getContOpts().canvasId);`;

        code += UIBlockConfig.generateRefPropCode(block);

        code += BlocklyConfig.conditionalPropertySetting('url', value_url);
        code += BlocklyConfig.conditionalPropertySetting('width', number_width);
        code += BlocklyConfig.conditionalPropertySetting('height', number_height);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['graphicType'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['color'], block);

        // code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('elementId', text_name);

        //styles
        let value_style = Blockly.JavaScript.valueToCode(block, UIBlockConfig.getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
        if (value_style && value_style !== '') {
            code += '\nCgRt.addProp("style",' + value_style + ');';
        }

        //endprops
        code += '\nvar p=CgRt.getProps();';

        code += '\nCgRt.pushElem(CgRt.createElement(CgRt.SpriteBlockf,p));\n}';
        return code;
    };
    Blockly.JavaScript['canvas_element'] = function (block: Blockly.Block) {
        var text_name = block.getFieldValue('NAME');
        var checkbox_isflex = block.getFieldValue('isFlex') == 'TRUE';
        var statements_children = Blockly.JavaScript.statementToCode(block, 'children');
        let dropdown_visual_purpose = block.getFieldValue('visual purpose');
        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];

        if (!text_name || text_name == '') {
            text_name = BlocklyConfig.getVarName('canv');
        }
        // properties
        let code = '{\nCgRt.beginProps();\n';

        code += UIBlockConfig.generateRefPropCode(block, text_name);
        if (checkbox_isflex)
            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
        code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['theme'], block);

        // GESTURES : handle the handleGestures optional property
        
        //styles
        let value_style = Blockly.JavaScript.valueToCode(block, UIBlockConfig.getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
        if (value_style && value_style !== '') {
            code += '\nCgRt.addProp("style",' + value_style + ');';
        }
        //endprops
        let propsVarName = BlocklyConfig.getVarName('p');
        code += `\nvar ${propsVarName}=CgRt.getProps();`;

        // children
        code += `\nCgRt.pushCont({canvasId:'${text_name}'});\n{`;
        code += statements_children;
        let childrenVarName = BlocklyConfig.getVarName('cl');
        code += `}\nvar ${childrenVarName}=CgRt.popCont();`;
        code += `\nCgRt.pushElem(CgRt.createElement(CgRt.CanvasBlockf, ${propsVarName},${childrenVarName}));\n}\n`;
        return code;
    };
    Blockly.JavaScript['sprite_get_x'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let code = `CgRt.spriteGetX('${text_name}')`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };
    Blockly.JavaScript['sprite_get_y'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let code = `CgRt.spriteGetY('${text_name}')`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.JavaScript['canvas_get_width'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let code = `CgRt.canvasGetWidth('${text_name}')`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };
    Blockly.JavaScript['canvas_get_height'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let code = `CgRt.canvasGetHeight('${text_name}')`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.JavaScript['sprite_get_direction'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let code = `CgRt.spriteGetDirection('${text_name}')`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.JavaScript['sprite_get_scale'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let code = `CgRt.spriteGetScale('${text_name}')`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.JavaScript['sprite_set_x'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteSetX('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_set_y'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteSetY('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_set_position'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_xpos = Blockly.JavaScript.valueToCode(block, 'xpos', Blockly.JavaScript.ORDER_COMMA);
        let value_ypos = Blockly.JavaScript.valueToCode(block, 'ypos', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteSetPosition('${text_name}',${value_xpos},${value_ypos});`;
        return code;
    };

    Blockly.JavaScript['sprite_set_direction'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteSetDirection('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_set_scale'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteSetScale('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_rotate_left'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteRotateLeft('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_rotate_right'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteRotateRight('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_change_x'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteChangeX('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_change_y'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteChangeY('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_change_position'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_xval = Blockly.JavaScript.valueToCode(block, 'xval', Blockly.JavaScript.ORDER_COMMA);
        let value_yval = Blockly.JavaScript.valueToCode(block, 'yval', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteChangePosition('${text_name}',${value_xval},${value_yval});`;
        return code;
    };
    Blockly.JavaScript['sprite_change_scale'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteChangeScale('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_move'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('NAME');
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteMove('${text_name}',${value_value});`;
        return code;
    };

    Blockly.JavaScript['sprite_intersect_edge'] = function (block: Blockly.Block) {
        var text_name = block.getFieldValue('NAME');
        var dropdown_edgetype = block.getFieldValue('edgetype');
        var code = `CgRt.spriteIsIntersectingEdge('${text_name}','${dropdown_edgetype}')`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.JavaScript['sprite_intersect_edge_bounce'] = function (block: Blockly.Block) {
        var text_name = block.getFieldValue('NAME');
        var dropdown_edgetype = block.getFieldValue('edgetype');
        var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_COMMA);
        let code = `\nCgRt.spriteBounceOnEdgeIntersect('${text_name}','${dropdown_edgetype}',${value_speed});`;
        return code;
    };

    Blockly.JavaScript['sprite_intersect_sprite'] = function (block: Blockly.Block) {
        var text_name = block.getFieldValue('NAME');
        var text_other = block.getFieldValue('OTHER');
        var code = `CgRt.spriteIsIntersectingSprite('${text_name}','${text_other}')`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.JavaScript['sprite_intersect_sprite_bounce'] = function (block: Blockly.Block) {
        var text_name = block.getFieldValue('NAME');
        var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
        var text_other = block.getFieldValue('OTHER');
        var value_other_speed = Blockly.JavaScript.valueToCode(block, 'other speed', Blockly.JavaScript.ORDER_ATOMIC);
        let code = `\nCgRt.spriteBounceOnSpriteIntersect('${text_name}','${text_other}',${value_speed},${value_other_speed});`;
        return code;
    };
}