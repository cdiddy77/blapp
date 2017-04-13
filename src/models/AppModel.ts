/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />


import * as jsutil from '../util/jsutil';
import { ModelBase } from './ModelBase';
import { BlocklyConfig } from '../util/BlocklyConfig';
import { CodegenRuntime } from '../util/CodegenRuntime';

// these are the events that we fire
type AppModelEvent = 'code_change' | 'evalstatus_change';

export class AppModel extends ModelBase {

    constructor() {
        super();
    }

    private _workspace: Blockly.Workspace;
    private _lastEvalError: any;
    private _code: string;

    get lastEvalError(): any {
        return this._lastEvalError;
    }
    set lastEvalError(e: any) {
        console.log('set lastEvalError', e);
        if (this._lastEvalError !== e) {
            this._lastEvalError = e;
            this.fireEvent('evalstatus_change',e);
        }
    }

    get code(): string {
        return this._code;
    }

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
                this._code = Blockly.JavaScript.workspaceToCode(this._workspace);
                this.evalCode();
                this.fireEvent('code_change', this._code);
                this.backupWorkspace();
            });
            BlocklyConfig.initBlockDefinitions();
            BlocklyConfig.initCodeGenerators();
            BlocklyConfig.initStyleBlockDefinitions();
            BlocklyConfig.initStyleBlockCodeGenerators();
            setTimeout(this.restoreWorkspace(), 0);
        });

        return result;
    }

    private evalCode() {
        let CgRt = CodegenRuntime;
        CgRt.setTargetRenderProc(null);
        try {
            console.log('eval');
            eval(this._code);
            this.lastEvalError = null;
        } catch (e) {
            this.lastEvalError = e;
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
    private fireEvent(ev: AppModelEvent, args?: any) {
        super.fire(ev, args);
    }


}