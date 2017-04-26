/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />
/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />



import * as jsutil from '../../../shared/src/util/jsutil';
import { ModelWithEvents } from './ModelWithEvents';
import { BlocklyConfig } from '../util/BlocklyConfig';
import { CodegenRuntime, CodegenHost } from '../../../shared/src/util/CodegenRuntime';
import { SimplePromptModel } from './SimplePromptModel';

export interface AppModelData {
    lastEvalError: Error;
    code: string;
    pairingCode: string;
    simplePrompt: SimplePromptModel;
}

export class AppModel extends ModelWithEvents<AppModelData> implements CodegenHost {

    constructor() {
        super({
            lastEvalError: null,
            code: null,
            pairingCode: null,
            simplePrompt: null
        });
        CodegenRuntime.setCodegenHost(this);
    }

    // CodegenHost implementation /////////////////////////
    //

    //
    ///////////////////////////////////////////////////////

    private _workspace: Blockly.Workspace;

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
            this._workspace = Blockly.inject(container, options);
            this._workspace.addChangeListener((e) => {
                this.setProperty('code', Blockly.JavaScript.workspaceToCode(this._workspace));
                this.backupWorkspace();
            });
            this.initDynamicCategories();
            BlocklyConfig.initBlockDefinitions();
            this.initSharedVariableBlocks();
            BlocklyConfig.initCodeGenerators();
            BlocklyConfig.initStyleBlockDefinitions();
            BlocklyConfig.initStyleBlockCodeGenerators();
            BlocklyConfig.initIconBlockDefinitions();
            BlocklyConfig.initIconBlockCodeGenerators();
            setTimeout(this.restoreWorkspace(), 0);
        });

        return result;
    }

    static hidePrompt: SimplePromptModel = {
        isActive: false,
        okCallback: null,
        cancelCallback: null,
        validationCallback: null,
        title: null,
        prompt: null
    };

    doSimplePrompt(title: string, prompt: string, validateCb: (text: string) => boolean): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let promptVal: SimplePromptModel = {
                isActive: true,
                okCallback: (input) => {
                    resolve(input);
                    this.setProperty('simplePrompt', AppModel.hidePrompt);
                },
                cancelCallback: () => {
                    resolve(null);
                    this.setProperty('simplePrompt', AppModel.hidePrompt);
                },
                validationCallback: validateCb,
                title: title,
                prompt: prompt
            };
            this.setProperty('simplePrompt', promptVal);
        })
    }

    initDynamicCategories(): void {
        this._workspace.registerToolboxCategoryCallback(
            'SHARED_VARS_PALETTE',
            this.sharedVarsFlyoutCallback.bind(this));
    }

    protected onPropertySet(prop: keyof AppModelData) {
        if (prop == 'code') {
            this.evalCode();
        }
    }

    private evalCode() {
        let CgRt = CodegenRuntime;
        CgRt.setTargetRenderProc(null);
        try {
            eval(this.data.code);
            this.setProperty('lastEvalError', null);
        } catch (e) {
            this.setProperty('lastEvalError', e);
        }
    }

    private restoreWorkspace() {
        var url = window.location.href.split('#')[0];
        if ('localStorage' in window && window.localStorage[url]) {
            var xml = Blockly.Xml.textToDom(window.localStorage[url]);
            Blockly.Xml.domToWorkspace(xml, this._workspace);

            // and then walk the workspace, find all of the 
            // shared variables, and keep them in our own list
            this.findAllSharedVariables(true);
        }
    }
    private backupWorkspace() {
        var xml = Blockly.Xml.workspaceToDom(this._workspace);
        // Gets the current URL, not including the hash.
        var url = window.location.href.split('#')[0];
        window.localStorage.setItem(url, Blockly.Xml.domToText(xml));
    }

    // shared variable stuffs ///////////////////////////////////////////
    //
    private getSharedVariablesList() {
        if (this.sharedVariableNames.length == 0) {
            return ['dummy', 'dummy'];
        } else {
            return this.sharedVariableNames.map((v, i, arr) => {
                return [v, v];
            });
        }
    }

    initSharedVariableBlocks() {
        let thisModel = this;
        let getSharedVarsListProc = this.getSharedVariablesList.bind(this);
        Blockly.Blocks['sharvar_get'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField(new Blockly.FieldImage("media/social/ic_share_white_48dp.png", 16, 16, "*"))
                    .appendField(new Blockly.FieldDropdown(getSharedVarsListProc), "varname");
                this.setOutput(true, null);
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
        Blockly.Blocks['sharvar_set'] = {
            init: function () {
                this.appendValueInput("value")
                    .setCheck(null)
                    .appendField(new Blockly.FieldImage("media/social/ic_share_white_48dp.png", 16, 16, "*"))
                    .appendField("set shared")
                    .appendField(new Blockly.FieldDropdown(getSharedVarsListProc), "varname");
                this.setInputsInline(false);
                this.setOutput(true, null);
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
    }
    sharedVariableNames: string[] = [];

    createSharedVariable(varName: string) {
        if (this.sharedVariableNames.indexOf(varName) < 0) {
            this.sharedVariableNames.push(varName);
        }
    }
    validateSharedVariableName(varName: string): boolean {
        return varName && varName.length > 0 && this.sharedVariableNames.indexOf(varName) < 0;
    }
    deleteSharedVariable(varName: string) {
        let index = this.sharedVariableNames.indexOf(varName);
        if (index >= 0) {
            this.sharedVariableNames.splice(index, 1);
        }
    }

    private findAllSharedVariables(clear: boolean) {
        let blocks = this._workspace.getAllBlocks();
        let variableHash = Object.create(null);
        // Iterate through every block and add each variable to the hash.
        for (var x = 0; x < blocks.length; x++) {
            let b = blocks[x];
            let varName: string = null;
            if (b.type == 'sharvar_get' || b.type == 'sharvar_set') {
                varName = b.getFieldValue('varname');
            }
            // Variable name may be null if the block is only half-built.
            if (varName) {
                variableHash[varName.toLowerCase()] = varName;
            }
        }
        if (clear)
            this.sharedVariableNames.splice(0);
        // Flatten the hash into a list.
        for (var name in variableHash) {
            this.sharedVariableNames.push(variableHash[name]);
        }
    }

    private getSharedVars(block: Blockly.Block): any[] {
        var vars: any[] = [];
        for (var i = 0, input; input = block.inputList[i]; i++) {
            for (var j = 0, field; field = input.fieldRow[j]; j++) {
                if (field instanceof Blockly.FieldVariable) {
                    // vars.push(field.getValue());
                }
            }
        }
        return vars;
    }

    sharedVarsFlyoutCallback(workspace: Blockly.Workspace): Element[] {
        // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
        var xmlList: Element[] = [];
        var button = goog.dom.createDom('button');
        button.setAttribute('text', 'Create shared variable');
        button.setAttribute('callbackKey', 'CREATE_SHARVAR');
        workspace.registerButtonCallback('CREATE_SHARVAR', (button: any) => {
            // SPROMPT : we should be validating the input : make sure the variable
            // name is unique and valid, as blockly variables.js does
            console.log('here we should be giving the user UI to create a shared variable');
            this.doSimplePrompt(
                'New Shared Variable',
                'What would you like to call this new variable?',
                (text: string) => {
                    return this.validateSharedVariableName(text);
                })
                .then((v) => {
                    console.log(`user entered ${v}`);
                    this.createSharedVariable(v);
                })
        });
        xmlList.push(button);

        if (this.sharedVariableNames.length > 0) {
            let block = document.createElementNS(null, 'block');
            block.setAttribute('type', 'sharvar_get');
            xmlList.push(block);

            block = document.createElementNS(null, 'block');
            block.setAttribute('type', 'sharvar_set');
            xmlList.push(block);
        }
        return xmlList;
    }

    //
    /////////////////////////////////////////////////////////////////////
}