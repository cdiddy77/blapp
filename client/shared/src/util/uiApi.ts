/// <reference path="../../../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../../../libs/core/types.d.ts"/>

import { CodegenRuntime } from './CodegenRuntime';

export namespace pxsimui {
    export function userInterfaceImpl(theme: UITheme, body: pxsim.RefAction): void {
        console.log('userInterface called');
        let defaultTheme: string;
        switch (theme) {
            case UITheme.Calm:
                defaultTheme = 'firstTheme';
                break;
            case UITheme.Bright:
                defaultTheme = 'brightTheme';
                break;
            case UITheme.Dark:
                defaultTheme = 'darkTheme';
                break;
        }
        CodegenRuntime.setDefaultTheme(defaultTheme);
        CodegenRuntime.setTargetRenderProc(function () {
            console.log('targetrenderproc called');
            CodegenRuntime.pushCont();
            CodegenRuntime.getCodegenHost().runFiberSync(body, (r: any) => {
                console.log('it ran');
            });
            let cl = CodegenRuntime.popCont();
            return CodegenRuntime.createElement(
                CodegenRuntime.Viewr, { style: CodegenRuntime.getRootStyle() }, cl);
        });
    }

    export function groupElementImpl(
        id: string,
        direction: UIGroupDirection,
        flex: boolean,
        className: UIGroupClass,
        style: string[],
        children: pxsim.RefAction): void {
        let childDirection: string;
        switch (direction) {
            case UIGroupDirection.Column:
                childDirection = 'column';
                break;
            case UIGroupDirection.ReverseColumn:
                childDirection = 'column-reverse';
                break;
            case UIGroupDirection.Row:
                childDirection = 'row';
                break;
            case UIGroupDirection.ReverseRow:
                childDirection = 'row-reverse';
                break;
        }
        let groupClass: string;
        switch (className) {
            case UIGroupClass.Panel:
                groupClass = 'panel';
                break;
            case UIGroupClass.Frame:
                groupClass = 'frame';
                break;
            case UIGroupClass.Framepanel:
                groupClass = 'framepanel';
                break;
            case UIGroupClass.Header:
                groupClass = 'header';
                break;
            case UIGroupClass.Footer:
                groupClass = 'footer';
                break;
            case UIGroupClass.Row:
                groupClass = 'row';
                break;
            case UIGroupClass.None:
                groupClass = 'none';
                break;
        }
        CodegenRuntime.beginProps();
        genRefProp(id);
        genFlexProp(flex);
        genStyleProp(style);
        CodegenRuntime.addProp('childDirection', childDirection);
        CodegenRuntime.addProp('visualPurpose', groupClass);
        let props = CodegenRuntime.getProps();
        CodegenRuntime.pushCont();
        CodegenRuntime.getCodegenHost().runFiberSync(children, (r) => {
            console.log('group:it ran');
        });
        let cl = CodegenRuntime.popCont();
        CodegenRuntime.pushElem(
            CodegenRuntime.createElement(CodegenRuntime.GroupBlockf, props, cl));
    }

    export function scrollerElementImpl(
        id: string,
        flex: boolean,
        className: UIGroupClass,
        horz: boolean,
        style: string[],
        children: pxsim.RefAction): void {

        let groupClass: string;
        switch (className) {
            case UIGroupClass.Panel:
                groupClass = 'panel';
                break;
            case UIGroupClass.Frame:
                groupClass = 'frame';
                break;
            case UIGroupClass.Framepanel:
                groupClass = 'framepanel';
                break;
            case UIGroupClass.Header:
                groupClass = 'header';
                break;
            case UIGroupClass.Footer:
                groupClass = 'footer';
                break;
            case UIGroupClass.Row:
                groupClass = 'row';
                break;
            case UIGroupClass.None:
                groupClass = 'none';
                break;
        }
        CodegenRuntime.beginProps();
        genRefProp(id);
        genFlexProp(flex);
        genStyleProp(style);
        CodegenRuntime.addProp('visualPurpose', groupClass);
        CodegenRuntime.addProp('horizontal', horz);
        let props = CodegenRuntime.getProps();
        CodegenRuntime.pushCont();
        CodegenRuntime.getCodegenHost().runFiberSync(children, (r) => {
            console.log('scroller:it ran');
        });
        let cl = CodegenRuntime.popCont();
        CodegenRuntime.pushElem(
            CodegenRuntime.createElement(CodegenRuntime.ScrollerBlockf, props, cl));
    }

    export function buttonElementImpl(
        id: string,
        flex: boolean,
        className: UIButtonClass,
        style: string[],
        children: pxsim.RefAction,
        whenPressed: pxsim.RefAction): void {

        let buttonClass: string;
        switch (className) {
            case UIButtonClass.Large:
                buttonClass = 'large';
                break;
            case UIButtonClass.LargeAccent:
                buttonClass = 'large_accent';
                break;
            case UIButtonClass.Medium:
                buttonClass = 'medium';
                break;
            case UIButtonClass.MediumAccent:
                buttonClass = 'medium_accent';
                break;
            case UIButtonClass.Small:
                buttonClass = 'small';
                break;
            case UIButtonClass.Small:
                buttonClass = 'small_accent';
                break;
            case UIButtonClass.None:
                buttonClass = 'none';
                break;
        }
        CodegenRuntime.beginProps();
        genRefProp(id);
        genFlexProp(flex);
        genStyleProp(style);
        CodegenRuntime.addProp('visualPurpose', buttonClass);
        CodegenRuntime.addProp('onPress', () => {
            if (whenPressed) {
                CodegenRuntime.getCodegenHost().runFiberSync(whenPressed, (r) => {
                    CodegenRuntime.updateUI();
                });
            }
        });

        let props = CodegenRuntime.getProps();
        CodegenRuntime.pushCont();
        CodegenRuntime.getCodegenHost().runFiberSync(children, (r) => {
            console.log('button:it ran');
        });
        let cl = CodegenRuntime.popCont();
        CodegenRuntime.pushElem(
            CodegenRuntime.createElement(CodegenRuntime.ButtonBlockf, props, cl));
    }

    export function textElementImpl(
        flex: boolean,
        className: UITextClass,
        style: string[],
        value: string): void {
        let textClass: string;
        switch (className) {
            case UITextClass.Label:
                textClass = 'label';
                break;
            case UITextClass.Button:
                textClass = 'button';
                break;
            case UITextClass.AccentButton:
                textClass = 'button_accent';
                break;
            case UITextClass.Menu:
                textClass = 'menu';
                break;
            case UITextClass.Caption:
                textClass = 'caption';
                break;
            case UITextClass.Body:
                textClass = 'body';
                break;
            case UITextClass.Subtitle:
                textClass = 'subtitle';
                break;
            case UITextClass.Title:
                textClass = 'title';
                break;
            case UITextClass.Headline:
                textClass = 'headline';
                break;
            case UITextClass.None:
                textClass = 'none';
                break;
        }
        CodegenRuntime.beginProps();
        genFlexProp(flex);
        genStyleProp(style);

        CodegenRuntime.addProp('visualPurpose', textClass);
        let props = CodegenRuntime.getProps();
        CodegenRuntime.pushElem(
            CodegenRuntime.createElement(CodegenRuntime.TextBlockf, props, [value]));
    }

    export function textInputElementImpl(
        id: string,
        flex: boolean,
        className: UITextInputClass,
        style: string[],
        initialValue: string,
        whenTextChanges: pxsim.RefAction): void {

        let textInputClass: string;
        switch (className) {
            case UITextInputClass.Inline:
                textInputClass = 'small';
                break;
            case UITextInputClass.Form:
                textInputClass = 'medium';
                break;
            case UITextInputClass.Headline:
                textInputClass = 'large';
                break;
            case UITextInputClass.None:
                textInputClass = 'none';
                break;
        }
        CodegenRuntime.beginProps();
        genRefProp(id);
        genFlexProp(flex);
        genStyleProp(style);
        CodegenRuntime.addProp('visualPurpose', textInputClass);
        CodegenRuntime.addProp('onChangeText', (text: string) => {
            CodegenRuntime.getCodegenHost().runFiberSync(whenTextChanges, (r) => {
                CodegenRuntime.updateUI();
            }, text);
        });
        let props = CodegenRuntime.getProps();
        CodegenRuntime.pushElem(
            CodegenRuntime.createElement(CodegenRuntime.TextInputBlockf, props, []));
    }

    export function imageElementImpl(
        flex: boolean,
        width: number,
        height: number,
        style: string[],
        url: string): void {
        CodegenRuntime.beginProps();
        genFlexProp(flex);
        genStyleProp(style);
        CodegenRuntime.addProp('width', width);
        CodegenRuntime.addProp('height', height);
        CodegenRuntime.addProp('source', { uri: url ? url : '' });
        let props = CodegenRuntime.getProps();
        CodegenRuntime.pushElem(
            CodegenRuntime.createElement(CodegenRuntime.ImageBlockf, props));
    }

    export function dividerElementImpl(
        className: UIDividerClass,
        style: string[]): void {
        let dividerClass: string;
        switch (className) {
            case UIDividerClass.HorzTop:
                dividerClass = 'horizontal top';
                break;
            case UIDividerClass.HorzBottom:
                dividerClass = 'horizontal bottom';
                break;
            case UIDividerClass.VertLeft:
                dividerClass = 'vertical left';
                break;
            case UIDividerClass.VertRight:
                dividerClass = 'vertical right';
                break;
            case UIDividerClass.None:
                dividerClass = 'none';
                break;
        }
        CodegenRuntime.beginProps();
        genStyleProp(style);

        CodegenRuntime.addProp('visualPurpose', dividerClass);
        let props = CodegenRuntime.getProps();
        CodegenRuntime.pushElem(
            CodegenRuntime.createElement(CodegenRuntime.DividerBlockf, props));
    }

    export function updateUIImpl(): void {
        CodegenRuntime.updateUI();
    }

    function genRefProp(name: string) {
        if (name && name != '') {
            CodegenRuntime.addProp('ref', (e: any) => CodegenRuntime.setIdElem(name, e));
        }
    }

    function genFlexProp(flex: boolean) {
        if (flex) {
            CodegenRuntime.addProp('isFlex', flex);
        }
    }

    function genStyleProp(style: string[]) {
        if (!style) return;
        let s: any = {};
        for (let i = 0; i < style.length; i++) {
            let elem: StyleProperty = parseStylePropString(style[i]);
            if (elem.stringValue) {
                s[elem.name] = elem.stringValue;
            } else if (elem.numberValue) {
                s[elem.name] = elem.numberValue;
            } else if (elem.boolValue) {
                s[elem.name] = elem.boolValue;
            }
        }
        CodegenRuntime.addProp('style', s);
    }

    function parseStylePropString(s: string): StyleProperty {
        return JSON.parse(s);
        // let strs = s.split('|');
        // return {name:strs[0],}
    }
}

