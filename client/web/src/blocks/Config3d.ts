/// <reference path="../localtypings/blockly.d.ts" />

export function init3dBlocks() {
    Blockly.Blocks['on_start'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("On Start");
            this.appendStatementInput("statements")
                .setCheck(null);
            this.setColour(230);
            this.setTooltip("Set up your scene here");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['on_start'] = function (block: Blockly.Block) {
        let statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
        let code = `\nCgRt.setOnStartProc(function(){`;
        code += statements_statements;
        code += '\n});';
        return code;
    };

    Blockly.Blocks['on_frame'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("On Frame");
            this.appendStatementInput("statements")
                .setCheck(null);
            this.setColour(45);
            this.setTooltip("Update your scene here before each rendering");
            this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['on_frame'] = function (block: Blockly.Block) {
        let statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
        let code = `\nCgRt.setOnFrameProc(function(){`;
        code += statements_statements;
        code += '\n});';
        return code;
    };
}