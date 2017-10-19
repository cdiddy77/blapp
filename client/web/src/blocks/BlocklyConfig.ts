/// <reference path="../localtypings/blockly.d.ts" />
import { iconData } from '../../../shared/src/util/IconData';
import * as constants from '../../../shared/src/util/constants';

export function initUtilityBlockDefinitions(): void {
    Blockly.BlockSvg.START_HAT = true;

    Blockly.Blocks['console_log'] = {
        init: function () {
            this.appendValueInput("message")
                .setCheck(null)
                .appendField("console log");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    }
    Blockly.Blocks['set_timeout'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("after ")
                .appendField(new Blockly.FieldNumber(500, 0), "timeout")
                .appendField("milliseconds");
            this.appendStatementInput("statements")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    Blockly.Blocks['set_interval'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("every ")
                .appendField(new Blockly.FieldNumber(500, 0), "timeout")
                .appendField("milliseconds");
            this.appendStatementInput("statements")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    Blockly.Blocks['when_app_reset'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage("/icons/dark/appbar.flag.wavy.png", 25, 25, "*"))
                .appendField("When Application is Reset");
            this.appendStatementInput("statements")
                .setCheck(null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    Blockly.Blocks['reset_app'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Reset Application");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    Blockly.Blocks['check_is_number'] = {
        init: function () {
            this.appendValueInput("VALUE")
                .setCheck("String")
                .appendField("is a number");
            this.setOutput(true, "Boolean");
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    Blockly.Blocks['parse_number'] = {
        init: function () {
            this.appendValueInput("VALUE")
                .setCheck("String")
                .appendField("get number from text");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip('turn the text into a number, if possible');
            this.setHelpUrl('');
        }
    };

   
}

var curVarIndex: number = 0;
export function getVarName(prefix: string): string {
    curVarIndex++;
    return prefix + curVarIndex;
}

// export function conditionalValueToCodeAsStringPropertySetting(prop: string, value: string, defaultValue?: string): string {
//     if (value && value !== 'null' && value !== 'undefined') {
//         value = `String(${value})`;
//     }
//     return conditionalPropertySetting(prop, value, defaultValue);
// }
// export function conditionalAddQuotesToFieldValuePropertySetting(prop: string, value: string, defaultValue?: string): string {
//     if (value && value !== 'null' && value !== 'undefined') {
//         value = `'${value}'`;
//     }
//     return conditionalPropertySetting(prop, value, defaultValue);
// }
// export function conditionalFuncPropertySetting(prop: string, statements: string, updateUI: boolean): string {
//     if (statements && statements !== 'null' && statements !== 'undefined') {
//         let callUpdate = updateUI ? '\nCgRt.updateUI();' : '';
//         statements = `function(){${statements}${callUpdate}}`;
//     }
//     return conditionalPropertySetting(prop, statements);
// }
// export function conditionalBoolStringPropertySetting(prop: string, value: string) {
//     if (!value || value == '') return '';
//     return conditionalPropertySetting(prop, value == "TRUE" ? 'true' : 'false');
// }
// export function conditionalBoolPropertySetting(prop: string, value: boolean) {
//     return conditionalPropertySetting(prop, value ? 'true' : 'false');
// }
// export function conditionalPropertySetting(prop: string, value: string, defaultValue?: string): string {
//     let code: string = '';
//     if (value && value != '') {
//         code += `\nCgRt.addProp("${prop}",${value});`;
//     } else if (defaultValue) {
//         code += `\nCgRt.addProp("${prop}",${defaultValue});`;
//     }
//     return code;
// }
export function initCodeGenerators(): void {
    Blockly.JavaScript['console_log'] = function (block: Blockly.Block) {
        var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_NONE);
        let code = `console.log(${value_message});\n`;
        return code;
    };
    Blockly.JavaScript['sharvar_get'] = function (block: Blockly.Block) {
        var dropdown_varname = block.getFieldValue('varname');
        var code = `CgRt.getShareVar('${dropdown_varname}')`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };
    Blockly.JavaScript['sharvar_set'] = function (block: Blockly.Block) {
        var dropdown_varname = block.getFieldValue('varname');
        var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
        if (!value_value || value_value == '') {
            value_value = 'null';
        }
        var code = `\nCgRt.setShareVar('${dropdown_varname}',${value_value});`;
        return code;
    };
    Blockly.JavaScript['on_sharvar_change'] = function (block: Blockly.Block) {
        var dropdown_varname = block.getFieldValue('varname');
        var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
        let code = '';
        if (dropdown_varname == '__ANY__') {
            code += '\nCgRt.registerShareVarUpdateWildcardHandler(function(){';
        } else {
            code += `\nCgRt.registerShareVarUpdateHandler("${dropdown_varname}",function(){`;
        }
        code += statements_statements;
        code += "\n});"
        return code;
    };
    Blockly.JavaScript['sharvar_force_update'] = function (block: Blockly.Block) {
        var dropdown_varname = block.getFieldValue('varname');
        var code = `CgRt.forceUpdateShareVar('${dropdown_varname}');\n`;
        return code;
    };
    // settimeout
    Blockly.JavaScript['set_timeout'] = function (block: Blockly.Block) {
        let number_timeout = block.getFieldValue('timeout');
        let statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');

        let code = '';
        code += `\nCgRt.setTimeoutr(function(){`;
        code += statements_statements;
        code += `\n},${number_timeout});`
        return code;
    };
    Blockly.JavaScript['set_interval'] = function (block: Blockly.Block) {
        let number_timeout = block.getFieldValue('timeout');
        let statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');

        let code = '';
        code += `\nCgRt.setIntervalr(function(){\n`;
        code += statements_statements;
        code += `\n},${number_timeout});`
        return code;
    };
    Blockly.JavaScript['when_app_reset'] = function (block: Blockly.Block) {
        var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
        let code = '\nCgRt.setResetApplicationProc(function(){';
        code += statements_statements;
        code += '\n});';
        return code;
    };
    Blockly.JavaScript['reset_app'] = function (block: Blockly.Block) {
        var code = 'if(CgRt.getResetApplicationProc()) CgRt.getResetApplicationProc()();\n';
        return code;
    };
    Blockly.JavaScript['check_is_number'] = function (block: Blockly.Block) {
        let value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL);
        let code = `!Number.isNaN(Number(${value}))`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };
    Blockly.JavaScript['parse_number'] = function (block: Blockly.Block) {
        let value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL);
        let code = `Number(${value})`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

}

