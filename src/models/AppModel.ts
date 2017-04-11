/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />


import * as jsutil from '../util/jsutil';
import {ModelBase} from './ModelBase';

// these are the events that we fire
type AppModelEvent = 'code_change';

export class AppModel extends ModelBase {

    constructor() {
        super();
    }

    workspace: Blockly.Workspace;
    code:string;

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
                this.fireEvent('code_change',this.code);
            });
            this.initBlockDefinitions();
            this.initCodeGenerators();
        });

        return result;
    }
    private fireEvent(ev:AppModelEvent,args?:any){
        super.fire(ev,args);
    }

    private initBlockDefinitions(): void {
        Blockly.Blocks['user_interface'] = {
            init: function () {
                this.appendStatementInput("elements")
                    .setCheck(null)
                    .appendField("user interface");
                this.setColour(285);
                this.setTooltip('insert the elements of the UI');
                this.setHelpUrl('');
            }
        };

        Blockly.Blocks['container_element'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("container UI");
                this.appendStatementInput("child elements")
                    .setCheck(null);
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
                this.setColour(285);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
    }
    private initCodeGenerators(): void {
        Blockly.JavaScript['user_interface'] = (block: Blockly.Block) => {
            var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };

        Blockly.JavaScript['container_element'] = (block: Blockly.Block) => {
            var statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };

        Blockly.JavaScript['text_element'] = (block: Blockly.Block) => {
            var value_text_value = Blockly.JavaScript.valueToCode(block, 'text value', Blockly.JavaScript.ORDER_ATOMIC);
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };

        Blockly.JavaScript['image_element'] = (block: Blockly.Block) => {
            var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };
    }
}