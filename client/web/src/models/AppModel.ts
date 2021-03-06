/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />
/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
import * as jsutil from '../../../shared/src/util/jsutil';
import { ModelWithEvents } from './ModelWithEvents';
import * as BlocklyConfig from '../blocks/BlocklyConfig';
import * as UIBlockConfig from '../blocks/UIBlockConfig';
import * as UIBlockDefs from '../blocks/UIBlockDefs';
import * as UIMethodDefs from '../blocks/UIMethodDefs';
import * as SpriteCanvasDefs from '../blocks/SpriteCanvasDefs';
import { CodegenRuntime, CodegenHost } from '../../../shared/src/util/CodegenRuntime';
import { SimplePromptModel } from './SimplePromptModel';
import { InputFilePromptModel } from './InputFilePromptModel';
import * as svcConn from '../util/ServiceConnection';

export interface AppModelData {
    lastEvalError: Error;
    code: string;
    pairingCode: string;
    simplePrompt: SimplePromptModel;
    inputFilePrompt: InputFilePromptModel;
    statusMessage: string;
    // not implemented in this version
    sharingCode: string;
}

export class AppModel extends ModelWithEvents<AppModelData>
    implements CodegenHost, svcConn.ServiceConnectionHost {

    constructor() {
        super({
            lastEvalError: null,
            code: null,
            pairingCode: null,
            simplePrompt: null,
            inputFilePrompt: null,
            statusMessage: null,
            sharingCode: null
        });
        CodegenRuntime.setCodegenHost(this);
    }

    // CodegenHost interface ///////////////////////////////////////////////////
    //
    runFiberAsync(a: any, arg0?: any, arg1?: any, arg2?: any): Promise<any> {
        jsutil.notYetImplemented('runFiberAsync');
        return null;
    }
    runFiberSync(a: any, resolve: (thenableOrResult?: any) => void, arg0?: any, arg1?: any, arg2?: any): void {
        jsutil.notYetImplemented('runFiberSync');
    }
    createRefCollection(): any {
        jsutil.notYetImplemented('createRefCollection');
        return null;
    }
    //
    ////////////////////////////////////////////////////////////////////////////

    // ServiceConnectionHost implementation ///////////////
    //
    onChange(cb: (prop: string) => void): void {
        this.on('change', cb);
    }
    getCode(): string {
        return this.data.code;
    }
    getLastEvalError(): Error {
        return this.data.lastEvalError;
    }
    setPairingCode(code: string): void {
        this.setProperty('pairingCode', code);
    }
    setSharingCode(code: string, errorMessage: string): void {
        this.setProperty('sharingCode', errorMessage ? errorMessage : code);
    }
    //
    ///////////////////////////////////////////////////////

    private _workspace: Blockly.Workspace;
    private _performResetOnLoad: boolean = false;

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
                zoom:
                {
                    controls: true,
                    wheel: true,
                    startScale: 1.0,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                },
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
                this.resetDropdownPopulators();
            });

            let getStorageVarsProc = this.getNormalAndSharedVariables.bind(this);

            this.initDynamicCategories();
            BlocklyConfig.initBlockDefinitions();
            this.initSharedVariableBlocks();
            BlocklyConfig.initCodeGenerators();
            BlocklyConfig.initStyleBlockDefinitions();
            BlocklyConfig.initStyleBlockCodeGenerators();
            BlocklyConfig.initIconBlockDefinitions();
            BlocklyConfig.initIconBlockCodeGenerators();
            UIBlockDefs.initAllUIBlockDefs(getStorageVarsProc);
            UIMethodDefs.initUIMethodDefs(this);
            UIBlockDefs.initUIBlockCodegen();
            UIMethodDefs.initUIMethodCodegen();
            SpriteCanvasDefs.initBlockDefs(this);
            SpriteCanvasDefs.initCodegen();
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
    doInputFilePrompt(title: string, prompt: string): Promise<FileList> {
        return new Promise<FileList>((resolve, reject) => {
            let promptVal: InputFilePromptModel = {
                isActive: true,
                okCallback: (input) => {
                    resolve(input);
                    this.setProperty('inputFilePrompt', null);
                },
                cancelCallback: () => {
                    resolve(null);
                    this.setProperty('inputFilePrompt', null);
                },
                title: title,
                prompt: prompt
            };
            this.setProperty('inputFilePrompt', promptVal);
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
        CgRt.resetCodeState();
        // force a re-render, which will result in the old
        // VDOM to be discarded. This is important
        CgRt.updateUI();
        try {
            eval(this.data.code);
            this.setProperty('lastEvalError', null);
            if (this._performResetOnLoad) {
                let resetProc = CodegenRuntime.getResetApplicationProc();
                if (resetProc)
                    resetProc();

                this._performResetOnLoad = false;
            }
        } catch (e) {
            this.setProperty('lastEvalError', e);
        }
    }

    private restoreWorkspace() {
        var url = window.location.href.split('#')[0];
        if ('localStorage' in window && window.localStorage[url]) {
            var xml = Blockly.Xml.textToDom(window.localStorage[url]);
            Blockly.Xml.domToWorkspace(xml, this._workspace);
            this._performResetOnLoad = true;
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

    // dropdown populators //////////////////////////////////////////////
    //
    spritesList: string[][] = null;
    canvasList: string[][] = null;
    scrollerList: string[][] = null;

    resetDropdownPopulators() {
        this.spritesList = null;
        this.canvasList = null;
        this.scrollerList = null;
    }
    repopulateAllLists() {
        this.spritesList = [];
        this.canvasList = [];
        this.scrollerList = [];
        let blocks = this._workspace.getAllBlocks();
        // Iterate through every block and find all sprite_element
        for (var x = 0; x < blocks.length; x++) {
            let b = blocks[x];
            let varName: string = null;
            varName = b.getFieldValue('NAME');
            // Variable name may be null if the block is only half-built.
            if (varName) {
                if (b.type == 'sprite_element') {
                    this.spritesList.push([varName, varName]);
                } else if (b.type == 'canvas_element') {
                    this.canvasList.push([varName, varName]);
                } else if (b.type == 'friendly_scroller_element') {
                    this.scrollerList.push([varName, varName]);
                }
            }
        }

    }

    getSpriteListDropdownPopulator(): string[][] {
        if (!this.spritesList) {
            this.repopulateAllLists();
        }
        if (this.spritesList.length == 0) {
            return [['--', '--']];
        } else {
            return this.spritesList;
        }
    }
    getCanvasListDropdownPopulator(): string[][] {
        if (!this.canvasList) {
            this.repopulateAllLists();
        }
        if (this.canvasList.length == 0) {
            return [['--', '--']];
        } else {
            return this.canvasList;
        }
    }
    getScrollerListDropdownPopulator(): string[][] {
        if (!this.scrollerList) {
            this.repopulateAllLists();
        }
        if (this.scrollerList.length == 0) {
            return [['--', '--']];
        } else {
            return this.scrollerList;
        }
    }
    //
    /////////////////////////////////////////////////////////////////////

    // shared variable stuffs ///////////////////////////////////////////
    //
    private getSharedVariablesList(): string[][] {
        if (this.sharedVariableNames.length == 0) {
            return [['dummy', 'dummy']];
        } else {
            return this.sharedVariableNames.map((v, i, arr) => {
                return [v, v];
            });
        }
    }
    private getSharedVariablesListWithWildcard() {
        return [['--any--', '__ANY__'], ...this.getSharedVariablesList()];
    }

    getNormalAndSharedVariables(): any[][] {
        let sharedVars = this.getSharedVariablesList();
        if (sharedVars.length == 1 && sharedVars[0][0] === 'dummy') {
            sharedVars = [];
        }
        let normalVars = this._workspace.variableList;
        let result: any[][] = [
            ['---', 'dummy'],
            ...sharedVars.map(v => [`[shared] ${v[0]}`, `shared_${v[1]}`]),
            ...normalVars.map(v => [v, `normal_${v}`])
        ];
        return result;
    }

    initSharedVariableBlocks() {
        let getSharedVarsListProc = this.getSharedVariablesList.bind(this);
        let getSharedVarsListWithWildcardProc = this.getSharedVariablesListWithWildcard.bind(this);
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
                    .appendField(new Blockly.FieldDropdown(getSharedVarsListProc), "varname")
                    .appendField("to");
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
        Blockly.Blocks['sharvar_force_update'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField(new Blockly.FieldImage("media/social/ic_share_white_48dp.png", 16, 16, "*"))
                    .appendField("update shared")
                    .appendField(new Blockly.FieldDropdown(getSharedVarsListProc), "varname");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
        Blockly.Blocks['on_sharvar_change'] = {
            init: function () {
                this.appendStatementInput("statements")
                    .setCheck(null)
                    .appendField(new Blockly.FieldImage("media/social/ic_share_white_48dp.png", 16, 16, "*"))
                    .appendField("when")
                    .appendField(new Blockly.FieldDropdown(getSharedVarsListWithWildcardProc), "varname")
                    .appendField("changes");
                this.setColour(285);
                this.setTooltip('when a variable changes, make something happen');
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

            block = document.createElementNS(null, 'block');
            block.setAttribute('type', 'sharvar_force_update');
            xmlList.push(block);
        }
        let block = document.createElementNS(null, 'block');
        block.setAttribute('type', 'on_sharvar_change');
        xmlList.push(block);
        return xmlList;
    }

    //
    /////////////////////////////////////////////////////////////////////
    setUIStatusMessage(status: string) {
        this.setProperty('statusMessage', status);
        setTimeout(() => {
            this.setProperty('statusMessage', null);
        }, 5000);
    }
    // save/load stuffs /////////////////////////////////////////////////
    //
    clearWorkspace() {
        this._workspace.clear();
    }
    saveWorkspaceToFile() {
        this.doSimplePrompt('Save File', 'file name', () => true).then(filename => {
            if (!filename)
                return;
            let xml = Blockly.Xml.workspaceToDom(this._workspace);
            // Gets the current URL, not including the hash.
            let text = Blockly.Xml.domToText(xml);

            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        });
    }
    loadWorkspaceFromFile(clearPrevious: boolean) {
        this.doInputFilePrompt('Load File', 'file location').then(files => {
            if (!files || files.length == 0) {
                return;
            }
            let reader = new FileReader();
            reader.onload = (evt) => {
                let text = (<any>evt.target).result;
                let xml = Blockly.Xml.textToDom(text);
                if (xml.tagName !== 'xml') {
                    this.setUIStatusMessage('could not find blocks in this file');
                    return;
                }
                if (clearPrevious) {
                    this._workspace.clear();
                }
                Blockly.Xml.domToWorkspace(xml, this._workspace);
                this._performResetOnLoad = true;

                // and then walk the workspace, find all of the 
                // shared variables, and keep them in our own list
                this.findAllSharedVariables(true);
            }
            reader.readAsText(files[0]);
        })
    }
    //
    ////////////////////////////////////////////////////////////////////

    undo() {
        this._workspace.undo();
    }
    redo() {
        this._workspace.redo();
    }
    resetApplication() {
        let resetProc = CodegenRuntime.getResetApplicationProc();
        if (resetProc) {
            resetProc();
            // force all the clients to reload
            this.setProperty('code', this.data.code);
        }
    }

    resetPairingCode() {
        svcConn.createNewSession();
    }
}