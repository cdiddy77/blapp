/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />


import * as jsutil from '../../../shared/src/util/jsutil';
import { ModelHolder } from './ModelHolder';
import { BlocklyConfig } from '../util/BlocklyConfig';
import { CodegenRuntime } from '../util/CodegenRuntime';

export interface AppModelData {
    lastEvalError: Error;
    code: string;
    pairingCode:string;
}

export class AppModel extends ModelHolder<AppModelData> {

    constructor() {
        super({
            lastEvalError: null,
            code: null,
            pairingCode:null
        });
    }

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
                this.setProperty('code',Blockly.JavaScript.workspaceToCode(this._workspace));
                this.backupWorkspace();
            });
            BlocklyConfig.initBlockDefinitions();
            BlocklyConfig.initCodeGenerators();
            BlocklyConfig.initStyleBlockDefinitions();
            BlocklyConfig.initStyleBlockCodeGenerators();
            BlocklyConfig.initIconBlockDefinitions();
            BlocklyConfig.initIconBlockCodeGenerators();
            setTimeout(this.restoreWorkspace(), 0);
        });

        return result;
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
        }
    }
    private backupWorkspace() {
        var xml = Blockly.Xml.workspaceToDom(this._workspace);
        // Gets the current URL, not including the hash.
        var url = window.location.href.split('#')[0];
        window.localStorage.setItem(url, Blockly.Xml.domToText(xml));
    }
}