/// <reference path="../localtypings/blockly.d.ts" />

import * as jsutil from '../../../shared/src/util/jsutil';
import * as BlocklyConfig from './BlocklyConfig';
import * as UIBlockConfig from './UIBlockConfig';

export function initUIMethodDefs() {
    // METHBLOCK : scrollToEnd
    Blockly.Blocks['scroll_scrolltoend_method'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("scroll to end")
                .appendField(new Blockly.FieldTextInput(""), "element id");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    Blockly.Blocks['console_log'] = {
        init: function () {
            this.appendValueInput("message")
                .setCheck(null)
                .appendField("report message");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    }
}

export function initUIMethodCodegen() {
    // METHBLOCK : scrollToEnd
    Blockly.JavaScript['scroll_scrolltoend_method'] = function (block: Blockly.Block) {
        var text_element_id = block.getFieldValue('element id');
        let elemVarName = BlocklyConfig.getVarName('elem');
        let code: string = '';
        code = `var ${elemVarName}=CgRt.getIdElem('${text_element_id}');\n`
        code += `if(${elemVarName}&&${elemVarName}.scrollToEnd)\n${elemVarName}.scrollToEnd();\nelse if(${elemVarName}&&${elemVarName}.scrollTo)${elemVarName}.scrollTo({x:1000000,y:1000000,animated:true});\n`;
        return code;
    };
    Blockly.JavaScript['console_log'] = function (block: Blockly.Block) {
        var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_NONE);
        let code = `console.log(${value_message});\n`;
        return code;
    };
}
