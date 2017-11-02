/// <reference path="../localtypings/blockly.d.ts" />
import { AppModel } from '../models/AppModel';

export function initGuiBlocks(model: AppModel) {
    Blockly.Blocks['create_gui_var'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create UI variable")
                .appendField(new Blockly.FieldTextInput("variable name"), "name");
            this.appendValueInput("initial_value")
                .setCheck(null)
                .appendField("initial value");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['create_gui_num_var'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create UI number")
                .appendField(new Blockly.FieldTextInput("variable name"), "var_name");
            this.appendValueInput("initial_value")
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("initial value");
            this.appendValueInput("min_value")
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("min");
            this.appendValueInput("max_value")
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("max");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['create_gui_choice_var'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create UI choice")
                .appendField(new Blockly.FieldTextInput("variable name"), "var_name");
            this.appendValueInput("initial_value")
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("initial value");
            this.appendValueInput("choices")
                .setCheck("Array")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("choices");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['create_gui_color_var'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create UI color")
                .appendField(new Blockly.FieldTextInput("variable name"), "var_name");
            this.appendDummyInput()
                .appendField("initial value")
                .appendField(new Blockly.FieldColour("#ff0000"), "colorValue");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['get_gui_var'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("get UI value")
                .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "var_name");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['create_gui_button'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create button")
                .appendField(new Blockly.FieldTextInput("button name"), "name");
            this.appendStatementInput("button_handler")
                .setCheck(null);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['create_gui_var'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('name');
        let value_initial_value = Blockly.JavaScript.valueToCode(block, 'initial_value', Blockly.JavaScript.ORDER_COMMA);
        if (!value_initial_value || value_initial_value == '')
            value_initial_value = 'null';
        let code = `CgRt.createGuiVariable('${text_name}',${value_initial_value});\n`;
        return code;
    };

    Blockly.JavaScript['create_gui_num_var'] = function (block: Blockly.Block) {
        let text_var_name = block.getFieldValue('var_name');
        let value_initial_value = Blockly.JavaScript.valueToCode(block, 'initial_value', Blockly.JavaScript.ORDER_COMMA);
        let value_min_value = Blockly.JavaScript.valueToCode(block, 'min_value', Blockly.JavaScript.ORDER_COMMA);
        let value_max_value = Blockly.JavaScript.valueToCode(block, 'max_value', Blockly.JavaScript.ORDER_COMMA);
        let code = `CgRt.createGuiNumberVariable('${text_var_name}',${value_initial_value},${value_min_value},${value_max_value});\n`;
        return code;
    };

    Blockly.JavaScript['create_gui_choice_var'] = function (block: Blockly.Block) {
        let text_var_name = block.getFieldValue('var_name');
        let value_initial_value = Blockly.JavaScript.valueToCode(block, 'initial_value', Blockly.JavaScript.ORDER_COMMA);
        let value_choices = Blockly.JavaScript.valueToCode(block, 'choices', Blockly.JavaScript.ORDER_COMMA);
        // TODO: Assemble JavaScript into code variable.
        let code = '...;\n';
        return code;
    };

    Blockly.JavaScript['create_gui_color_var'] = function (block: Blockly.Block) {
        let text_var_name = block.getFieldValue('var_name');
        let colour_colorvalue = block.getFieldValue('colorValue');
        // TODO: Assemble JavaScript into code variable.
        let code = '...;\n';
        return code;
    };

    Blockly.JavaScript['get_gui_var'] = function (block: Blockly.Block) {
        let dropdown_var_name = block.getFieldValue('var_name');
        // TODO: Assemble JavaScript into code variable.
        let code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['create_gui_button'] = function (block: Blockly.Block) {
        let text_name = block.getFieldValue('name');
        let statements_button_handler = Blockly.JavaScript.statementToCode(block, 'button_handler');
        // TODO: Assemble JavaScript into code variable.
        let code = '...;\n';
        return code;
    };
}