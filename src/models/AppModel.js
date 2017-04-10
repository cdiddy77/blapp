/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsutil = require("../util/jsutil");
class AppModel {
    constructor() {
    }
    initializeBlockly(container, preview) {
        let result = jsutil.requestURL({
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
            };
            this.workspace = Blockly.inject(container, options);
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
        });
        this.workspace.addChangeListener((e) => {
            var code = Blockly.JavaScript.workspaceToCode(this.workspace);
            document.getElementById('codearea').value = code;
        });
        return result;
    }
}
exports.AppModel = AppModel;
//# sourceMappingURL=AppModel.js.map