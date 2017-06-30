/// <reference path="../libs/core/types.d.ts"/>

namespace pxsim.UI {
    //%
    export function userInterfaceImpl(theme: UITheme, body: pxsim.RefAction) {

    }

    //%
    export function groupElementImpl(
        name: string,
        direction: UIGroupDirection,
        flex: boolean,
        className: UIGroupClass,
        style: StylePropertySet,
        children: pxsim.RefAction): void {

    }

    //%
    export function scrollerElementImpl(
        name: string,
        flex: boolean,
        className: UIGroupClass,
        horz: boolean,
        style: StylePropertySet,
        children: pxsim.RefAction): void {

    }

    //%
    export function buttonElementImpl(
        name: string,
        flex: boolean,
        className: UIButtonClass,
        style: StylePropertySet,
        children: pxsim.RefAction,
        whenPressed: pxsim.RefAction): void {

    }

    //%
    export function textElementImpl(
        flex: boolean,
        className: UITextClass,
        style: StylePropertySet,
        value: string): void {

    }

    //%
    export function textInputElementImpl(
        name: string,
        flex: boolean,
        className: UITextInputClass,
        style: StylePropertySet,
        initialValue: string,
        whenTextChanges: (text: string) => void): void {

    }

    //%
    export function imageElementImpl(
        flex: boolean,
        width: number,
        height: number,
        style: StylePropertySet,
        url: string): void {

    }

    //%
    export function dividerElementImpl(
        className: UIDividerClass,
        style: StylePropertySet): void {

    }

    //%
    export function updateUIImpl(): void {

    }
}

namespace pxsim.Style {
    //%
    export function styleDefImpl(body: pxsim.RefAction): StylePropertySet {
        return null;
    }
}

namespace pxsim.Data {
    //%
    export function getSharedStringImpl(name: string): string {
        return "sample";
    }

    //%
    export function getSharedNumberImpl(name: string): number {
        return -1;
    }

    //%
    export function getSharedBooleanImpl(name: string): boolean {
        return false;
    }

    //%
    export function getSharedListImpl(name: string): Array<string> {
        return [];
    }

    //%
    export function setSharedStringImpl(name: string, v: string): void {
    }

    //%
    export function setSharedNumberImpl(name: string, v: number): void {
    }

    //%
    export function setSharedBooleanImpl(name: string, v: boolean): void {
    }

    //%
    export function setSharedListImpl(name: string, v: Array<string>): void {
    }

    //%
    export function onSharedVariableChangeImpl(name: string, body: pxsim.RefAction): void {

    }
}

