/// <reference path="../localtypings/blockly.d.ts" />
import * as jsutil from '../../../shared/src/util/jsutil';
import { ModelWithEvents } from './ModelWithEvents';
import { KnownEvents, FileUploadProgressEvent } from './EventsProvider';
import * as BlocklyConfig from '../blocks/BlocklyConfig';
import * as Config3d from '../blocks/Config3d';
import * as ConfigGui from '../blocks/ConfigGui';
import { CodegenRuntime, CodegenHost } from '../../../shared/src/util/CodegenRuntime';
import { SimplePromptModel } from './SimplePromptModel';
import { InputFilePromptModel } from './InputFilePromptModel';
import { AddAssetPromptModel } from './AddAssetPromptModel';
import * as svcConn from '../util/ServiceConnection';
import * as ThreeUtil from '../../../shared/src/util/ThreeUtil';

export interface AppModelData {
    lastEvalError: Error;
    code: string;
    pairingCode: string;
    simplePrompt: SimplePromptModel;
    inputFilePrompt: InputFilePromptModel;
    statusMessage: string;
    // not implemented in this version
    sharingCode: string;
    previewEnabled: boolean;
    addAssetDialogIsActive: boolean;
}

const blapp3dAssetsKey: string = 'blapp3dAssets';
interface AssetsModel {
    namedUris: string[][];
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
            sharingCode: null,
            previewEnabled: false,
            addAssetDialogIsActive: false
        });
        CodegenRuntime.setCodegenHost(this);
    }

    // CodegenHost interface ///////////////////////////////////////////////////
    //
    insertRendererElement(domElement: HTMLCanvasElement): void {
        let hostElem = document.getElementById('webglTarget');
        //if(!hostElem) return;

        hostElem.innerHTML = '';
        hostElem.appendChild(domElement);
        let stats = ThreeUtil.Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.bottom = '0px';
        hostElem.appendChild(stats.domElement);
        CodegenRuntime.setStats(stats);
    }
    getRendererHostElement(): HTMLElement {
        return document.getElementById('webglTarget');
    }
    getRenderWidth(): number {
        let hostElem = document.getElementById('webglTarget');
        return hostElem ? hostElem.clientWidth : 0;
    }
    getRenderHeight(): number {
        let hostElem = document.getElementById('webglTarget');
        return hostElem ? hostElem.clientHeight : 0;
    }
    setExecutionError(e: any): void {
        this.setProperty('lastEvalError', e);
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

            BlocklyConfig.initUtilityBlockDefinitions();
            // SHAREDVARS
            this.initSharedVariableBlocks();
            this.initAssetBlocks();
            BlocklyConfig.initCodeGenerators();
            Config3d.init3dBlocks();
            ConfigGui.initGuiBlocks(this);
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
        });
    }


    // SHAREDVARS
    initDynamicCategories(): void {
        this._workspace.registerToolboxCategoryCallback(
            'SHARED_VARS_PALETTE',
            this.sharedVarsFlyoutCallback.bind(this));
    }

    protected onPropertySet(prop: keyof AppModelData) {
        if (prop == 'code') {
            if (this.data.previewEnabled)
                this.evalCode();
        } else if (prop == 'previewEnabled') {
            if (!this.data.previewEnabled) {
                CodegenRuntime.unsetWebGLObjects();
            } else {
                window.setTimeout(() => {
                    // trigger a refresh
                    this.setProperty('code', this.data.code);
                }, 300);
            }
        }
    }

    private evalCode() {
        let CgRt = CodegenRuntime;
        CgRt.resetCodeState();
        try {
            this.setProperty('lastEvalError', null);
            CgRt.preEval();
            eval(this.data.code);
            CgRt.postEval();
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
        let url = window.location.href.split('#')[0];
        if ('localStorage' in window && window.localStorage[url]) {
            let xml = Blockly.Xml.textToDom(window.localStorage[url]);
            Blockly.Xml.domToWorkspace(xml, this._workspace);
            this._performResetOnLoad = true;
            // SHAREDVARS
            // and then walk the workspace, find all of the 
            // shared variables, and keep them in our own list
            this.findAllSharedVariables(true);

            // load up the user's assets list from localStorage
            let assetsText = window.localStorage[blapp3dAssetsKey];
            if (assetsText)
                this.userAssets = JSON.parse(assetsText);

            // read all of the assets from the different blocks in the document, keep them in a different asset list
            this.findAllWorkspaceAssetReferences();
        }
    }
    private backupWorkspace() {
        var xml = Blockly.Xml.workspaceToDom(this._workspace);
        // Gets the current URL, not including the hash.
        var url = window.location.href.split('#')[0];
        if ('localStorage' in window) {
            window.localStorage.setItem(url, Blockly.Xml.domToText(xml));
            this.saveUserAssetList();
        }
    }

    // assets ///////////////////////////////////////////////////////////
    //
    userAssets: AssetsModel = { namedUris: [] };
    workspaceAssets: AssetsModel = { namedUris: [] };

    saveUserAssetList(): void {
        // persist asset list in localstorage as users add them
        window.localStorage[blapp3dAssetsKey] = JSON.stringify(this.userAssets);
    }

    findAllWorkspaceAssetReferences(): void {
        // clear previous
        this.workspaceAssets = { namedUris: [] };

        // implement block walk, looking for asset references. we only
        // see the URI, so look up URI in user assets. If it isn't found there, 
        // then create a new workspace asset
        let blocks = this._workspace.getAllBlocks();
        for (var x = 0; x < blocks.length; x++) {
            let b = blocks[x];
            if (b.type == 'asset_reference') {
                let uri = b.getFieldValue('asset');
                // look it up in the list of workspace assets
                if (!this.workspaceAssets.namedUris.find((v) => {
                    return v[1] == uri;
                })) {
                    // if not found, look it up in the list of user assets
                    if (!this.userAssets.namedUris.find((v) => {
                        return v[1] == uri;
                    })) {
                        // if still not found, create a new workspace asset
                        let lastSlash = uri.lastIndexOf('/');

                        let assetName = uri.substr(lastSlash >= 0 ? lastSlash + 1 : 0);
                        this.workspaceAssets.namedUris.push([assetName, uri]);
                    }
                }
            }
        }
    }

    // mapAssetNameToUri(name: string): string {
    //     // ASSETS : translate the name of an asset to the actual URI for generated code
    //     return null;
    // }

    // dropdown populator for assets
    //
    getAssetListDropdownPopulator(): string[][] {
        if (this.userAssets.namedUris.length + this.workspaceAssets.namedUris.length > 0)
            return this.userAssets.namedUris.concat(this.workspaceAssets.namedUris);
        else
            return [['--', '--']];
    }
    /////////////////////////////////////////////////////////////////////

    initAssetBlocks(): void {
        let getAssetListDropdownPopulator = this.getAssetListDropdownPopulator.bind(this);

        Blockly.Blocks['asset_reference'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("asset")
                    .appendField(new Blockly.FieldDropdown(getAssetListDropdownPopulator), "asset");
                this.setOutput(true, "String");
                this.setColour(75);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };
        Blockly.JavaScript['asset_reference'] = function (block: Blockly.Block) {
            let dropdown_asset = block.getFieldValue('asset');
            let code = `"${dropdown_asset}"`;
            return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
        };
    }
    //
    /////////////////////////////////////////////////////////////////////

    // dropdown populators //////////////////////////////////////////////
    //
    guiVarList: string[][] = null;

    resetDropdownPopulators() {
        this.guiVarList = null;
    }
    repopulateAllLists() {
        this.guiVarList = [];
        let blocks = this._workspace.getAllBlocks();
        // Iterate through every block and find all sprite_element
        for (var x = 0; x < blocks.length; x++) {
            let b = blocks[x];
            let varName: string = null;
            varName = b.getFieldValue('var_name');
            // Variable name may be null if the block is only half-built.
            if (varName) {
                if (b.type == 'create_gui_var'
                    || b.type == 'create_gui_num_var'
                    || b.type == 'create_gui_choice_var'
                    || b.type == 'create_gui_color_var') {
                    this.guiVarList.push([varName, varName]);
                }
            }
        }
    }

    getGuiVarListDropdownPopulator(): string[][] {
        if (!this.guiVarList) {
            this.repopulateAllLists();
        }
        if (this.guiVarList.length == 0) {
            return [['--', '--']];
        } else {
            return this.guiVarList;
        }
    }

    // shared variable stuffs ///////////////////////////////////////////
    //
    // SHAREDVARS
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

        if (true) {//this.sharedVariableNames.length > 0) {
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

                // find all of the asset references in the file, add them to a list
                this.findAllWorkspaceAssetReferences();
            };
            reader.readAsText(files[0]);
        });
    }
    //
    ////////////////////////////////////////////////////////////////////
    addAssets() {
        // ASSETS : implement this by prompting user to add assets then upload
        this.setProperty('addAssetDialogIsActive', true);
    }
    onCloseAssetModal() {
        // ASSETS : implement this.
        this.setProperty('addAssetDialogIsActive', false);
    }


    onStartAssetsUpload(files: FileList) {

        if (!files || files.length == 0) {
            return;
        }

        for (let i: number = 0; i < files.length; i++) {
            let originalAssetName = files[i].name;
            let assetName = originalAssetName;
            let suffix: number = 1;
            while (this.userAssets.namedUris.find(v => v[0] == assetName)) {
                assetName = originalAssetName + '_' + suffix++;
            }
            let fileState: FileUploadProgressEvent = {
                index: i,
                assetName: assetName,
                pctComplete: 0,
                statusText: 'not started',
                done: false
            };

            this.fire(KnownEvents.fileUploadProgressEvent, fileState);

            // let formData = new FormData();
            // formData.append('files[]', files[i], assetName);
            let file = files[i];
            file
            let reader = new FileReader();
            reader.onload = (evt) => {
                let data = (<any>evt.target).result;
                let xhr = new XMLHttpRequest();
                xhr.open('POST', '/userassets/' + assetName, true);
                xhr.onprogress = (evt) => {
                    fileState.pctComplete = evt.loaded / evt.total;
                    fileState.statusText = 'in progress';
                    this.fire(KnownEvents.fileUploadProgressEvent, fileState);
                    console.log('xhr.onProgress:', fileState.pctComplete);
                };
                xhr.onload = (evt) => {
                    fileState.pctComplete = 1;
                    fileState.statusText = 'failed'; // pessimistic
                    fileState.done = true;

                    if (xhr.status == 200) {
                        try {
                            let response = JSON.parse(xhr.responseText);
                            if (response) {
                                if (response.error) {
                                    fileState.statusText = 'failed';
                                } else if (response.name) {
                                    fileState.statusText = 'complete';
                                    // now take this name and add it to the local storage
                                    console.log(`saving to local storage:${assetName}:${response.name}`);
                                    this.userAssets.namedUris.push([assetName, '/userassets/' + response.name]);
                                }
                            }
                        } catch (ex) { 
                            console.log(ex);
                        }
                    } else {
                        fileState.statusText = 'failed';
                    }
                    fileState.done = true;

                    this.fire(KnownEvents.fileUploadProgressEvent, fileState);
                    console.log('xhr.onload:', xhr.responseText);
                };
                xhr.onerror = (evt) => {
                    fileState.statusText = 'failed';
                    fileState.done = true;
                    this.fire(KnownEvents.fileUploadProgressEvent, fileState);
                    console.log('xhr.onerror:', evt.error);
                };
                xhr.send(data);
            };
            reader.onerror = (evt) => {
                fileState.pctComplete = 1;
                fileState.statusText = 'read failed';
                fileState.done = true;
                console.log('reader.onerror:', evt.error);
            };
            reader.readAsArrayBuffer(file);
        }
    }

    togglePreview() {
        this.setProperty('previewEnabled', !this.data.previewEnabled);
    }

    undo() {
        if (this._workspace.undo)
            this._workspace.undo();
    }
    redo() {
        if (this._workspace.redo)
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