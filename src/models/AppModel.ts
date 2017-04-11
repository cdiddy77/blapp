/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />


import * as jsutil from '../util/jsutil';
import { ModelBase } from './ModelBase';

// these are the events that we fire
type AppModelEvent = 'code_change';

export class AppModel extends ModelBase {

    constructor() {
        super();
    }

    workspace: Blockly.Workspace;
    code: string;

    initializeBlockly(container: HTMLElement): Promise<void> {
        let result: Promise<void> = jsutil.requestURL({
            url: '/toolbox.xml'
        }).then(txt => {
            // download the toolbox
            let toolboxXml = Blockly.Xml.textToDom(txt);
            const options = {
                toolbox: toolboxXml,
                collapse: true,
                comments: true,
                disable: true,
                maxBlocks: Infinity,
                trashcan: true,
                horizontalLayout: false,
                toolboxPosition: 'start',
                css: true,
                media: 'https://blockly-demo.appspot.com/static/media/',
                rtl: false,
                scrollbars: true,
                sounds: true,
                oneBasedIndex: true,
                // grid: {
                //   spacing: 20,
                //   length: 0,
                //   colour: '#ccc',
                //   snap: true
                // }
            };
            this.workspace = Blockly.inject(container, options);
            this.workspace.addChangeListener((e) => {
                this.code = Blockly.JavaScript.workspaceToCode(this.workspace);
                this.fireEvent('code_change', this.code);
                this.backupWorkspace();
            });
            this.initBlockDefinitions();
            this.initCodeGenerators();
            setTimeout(this.restoreWorkspace(), 0);
        });

        return result;
    }
    private restoreWorkspace() {
        var url = window.location.href.split('#')[0];
        if ('localStorage' in window && window.localStorage[url]) {
            var xml = Blockly.Xml.textToDom(window.localStorage[url]);
            Blockly.Xml.domToWorkspace(xml, this.workspace);
        }
    }
    private backupWorkspace() {
        var xml = Blockly.Xml.workspaceToDom(this.workspace);
        // Gets the current URL, not including the hash.
        var url = window.location.href.split('#')[0];
        window.localStorage.setItem(url, Blockly.Xml.domToText(xml));
    }
    private fireEvent(ev: AppModelEvent, args?: any) {
        super.fire(ev, args);
    }

    private initBlockDefinitions(): void {
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
                    .appendField("container UI");
                this.appendValueInput("style")
                    .setCheck(null)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField("style");
                this.appendStatementInput("child elements")
                    .setCheck(null);
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['text_element'] = {
            init: function () {
                this.appendValueInput("text value")
                    .setCheck("String")
                    .appendField("text UI");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['image_element'] = {
            init: function () {
                this.appendValueInput("NAME")
                    .setCheck("String")
                    .appendField("image UI");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
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
    }
    private initCodeGenerators(): void {

        Blockly.JavaScript['user_interface'] = (block: Blockly.Block) => {
            var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');
            let code = '{\nCgRt.pushCont();\n';
            code += statements_elements;
            code += '\nlet cl=CgRt.popCont();'
            code += '\nCgRt.setTargetRenderProc(() => {';
            code += '\nreturn React.createElement("View", null, ...cl);\n});\n}';
            return code;
        };

        Blockly.JavaScript['container_element'] = (block: Blockly.Block) => {
            var statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
            let code = '{\nCgRt.pushCont();\n';
            code += statements_child_elements;
            code += '\nlet cl=CgRt.popCont();'
            code += '\nCgRt.pushElem(React.createElement("View", null, ...cl));\n}';
            return code;
        };

        Blockly.JavaScript['text_element'] = (block: Blockly.Block) => {
            var value_text_value = Blockly.JavaScript.valueToCode(block, 'text value', Blockly.JavaScript.ORDER_ATOMIC);
            var code = '\nCgRt.pushElem(React.createElement("Text",null,'
            code += value_text_value && value_text_value !== '' ? value_text_value : "''";
            code += '));';
            return code;
        };

        Blockly.JavaScript['image_element'] = (block: Blockly.Block) => {
            var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ASSIGNMENT);
            var code = '\nCgRt.pushElem(React.createElement(RnImage,{style:{width:100,height:100},source:{uri:'
            code += value_name && value_name !== '' ? value_name : "''";
            code += '}}));';
            return code;
        };
        Blockly.JavaScript['styleprop_aligncontent'] = function (block: Blockly.Block) {
            var dropdown_value = block.getFieldValue('VALUE');
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };
    }
}