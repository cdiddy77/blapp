/**
 * Basic functionalities.
 */
//% color=210 weight=80 icon="\uf1e0"
namespace Data {
    /**
     * get the current value of a shared text
     */
    //% weight=100
    //% blockId=get_shared_string
    //% block="shared string %name"
    export function getSharedString(name: string): string {
        return getSharedStringImpl(name);
    }

    /**
     * get the current value of a shared number
     */
    //% weight=90
    //% blockId=get_shared_number
    //% block="shared number %name"
    export function getSharedNumber(name: string): number {
        return getSharedNumberImpl(name);
    }

    /**
     * get the current value of a shared true/false value
     */
    //% weight=80
    //% blockId=get_shared_boolean
    //% block="shared true/false value %name"
    export function getSharedBoolean(name: string): boolean {
        return getSharedBooleanImpl(name);
    }

    /**
     * get the current value of a shared list of texts
     */
    //% weight=70
    //% blockId=get_shared_string_list
    //% block="shared list of texts %name"
    export function getSharedStringList(name: string): string[] {
        return getSharedStringListImpl(name);
    }

  /**
     * get the current value of a shared list of numbers
     */
    //% weight=60
    //% blockId=get_shared_number_list
    //% block="shared list of numbers %name"
    export function getSharedNumberList(name: string): number[] {
        return getSharedNumberListImpl(name);
    }

    /**
     * sets a shared text value
     */
    //% weight=50
    //% blockId=set_shared_string
    //% block="set shared string %name|to %v"
    export function setSharedString(name: string, v: string): void {
        return setSharedStringImpl(name, v);
    }

    /**
     * sets a shared number value
     */
    //% weight=40
    //% blockId=set_shared_number
    //% block="set shared number %name|to %v"
    export function setSharedNumber(name: string, v: number): void {
        return setSharedNumberImpl(name, v);
    }

    /**
     * sets a shared true/false value
     */
    //% weight=30
    //% blockId=set_shared_boolean
    //% block="set shared true/false value %name|to %v"
    export function setSharedBoolean(name: string, v: boolean): void {
        return setSharedBooleanImpl(name, v);
    }

    /**
     * sets a shared list of texts
     */
    //% weight=29
    //% blockId=set_shared_string_list
    //% block="set shared list of texts %name|to %v"
    export function setSharedStringList(name: string, v: string[]): void {
        return setSharedStringListImpl(name, v);
    }

   /**
     * sets a shared list of numbers
     */
    //% weight=28
    //% blockId=set_shared_number_list
    //% block="set shared list of numbers %name|to %v"
    export function setSharedNumberList(name: string, v: number[]): void {
        return setSharedNumberListImpl(name, v);
    }

    /**
     * when a shared variable is changed, make something happen
    **/
    //% weight=27
    //% blockId=on_shared_change
    //% block="When shared %name|changes"
    export function onSharedVariableChange(name: string, body: ()=>void): void {
        onSharedVariableChangeImpl(name, body);
    }

    /**
     * convert number to text
     */
    //% weight=26
    //% blockId=convert_number_to_text
    //% block="To text %value"
    //% blockNamespace=text
    export function convertNumberToText(value: number): string {
        if (value === undefined)
            return null;
        else
            return value.toString();
    }

    /**
     * test whether text contains another text
     */
    //% weight=27
    //% blockId=text_contains_text
    //% block="Does %text|contain %subtext"
    //% blockNamespace=text
    export function textContainsText(text:string,subtext:string): boolean {
        return textContainsImpl(text,subtext);
    }

    /**
     * Perform an operation for each value of a string
     */
    //% weight=25
    //% blockId=for_each_string
    //% block="for each string %array"
    //% externallyLoadedBlock=true
    //% blockNamespace=loops
    export function forEachString(array: string[], cb: (value: string, index: number) => void) {
        for (let i = 0; i < array.length; i++) {
            cb(array[i], i);
        }
    }
}