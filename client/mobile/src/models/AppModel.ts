// import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { ModelBase } from './ModelBase';
import { CodegenRuntime, CodegenHost } from '../../../shared/src/util/CodegenRuntime';

export class AppModel extends ModelBase implements CodegenHost {
    constructor() {
        super();
        CodegenRuntime.setCodegenHost(this);
    }

    readonly serverUri: string;
    readonly pairingCode: string;
    readonly lastEvalError: Error;
    readonly code: string;
    readonly connectionState: string = 'not connected';

    loadSettings(): Promise<[void, void]> {
        let p1 = AsyncStorage.getItem('serverUri').then((v) => {
            this.setProperty('serverUri', v);
        })
        let p2 = AsyncStorage.getItem('pairingCode').then((v) => {
            this.setProperty('pairingCode', v);
        });
        return Promise.all([p1, p2]);
    }

    saveSettings(): Promise<void> {
        return AsyncStorage.setItem('serverUri', this.serverUri)
            .then(() => {
                return AsyncStorage.setItem('pairingCode', this.pairingCode);
            });
    }

    private evalCode() {
        let CgRt = CodegenRuntime;
        CgRt.setTargetRenderProc(null);
        try {
            console.log('evaluating new code');
            console.log(this.code);
            eval(this.code);
            // eval(this.testCode());
            this.setProperty('lastEvalError', null);
        } catch (e) {
            this.setProperty('lastEvalError', e);
        }
    }

    private testCode(): string {
        // React.createElement()
        return `
var rowstyle, colstyle;



var __f,result={};
CgRt.setTargetRenderProc(function(){
CgRt.pushCont();
  {
  CgRt.beginProps();

  CgRt.addProp("style",rowstyle);
  var p113=CgRt.getProps();
  CgRt.pushCont();
  {  {
    CgRt.beginProps();

    var p111=CgRt.getProps();
    CgRt.pushElem(CgRt.createElement(CgRt.Textr,p111,['jhjhjh']));
    }
    {
    CgRt.beginProps();

    var p112=CgRt.getProps();
    CgRt.pushElem(CgRt.createElement(CgRt.Textr,p112,['line 2']));
    }
  }
  var cl114=CgRt.popCont();
  CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p113,cl114));
  }
  {
  CgRt.beginProps();

  var p115=CgRt.getProps();
  CgRt.pushElem(CgRt.createElement(CgRt.Textr,p115,['line 3']));
  }

var cl=CgRt.popCont();
return CgRt.createElement(CgRt.Viewr, {style:{backgroundColor:"white",height:600}}, cl);
});
rowstyle =
__f= function(){
var result={};
  result.flexDirection="row";
  result.backgroundColor="#ff0000";
return result;
}();

colstyle =
__f= function(){
var result={};
  result.flexDirection="column";
return result;
}();
`;

    }
    setProperty<T>(prop: keyof AppModel, v: T) {
        (<any>this)[prop] = v;
        if (prop == 'code') {
            this.evalCode();
        }
        this.fire("change", prop);
    }

}