/**
 * Basic functionalities.
 */
//% color=#00BCD4 weight=80
namespace Data {
    /**
     * get the current value of a shared variable
     */
    //% weight=100
    //% blockId=get_shared_string
    //% block="shared string %name"
    export function getSharedString(name: string): string {
        return getSharedStringImpl(name);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=90
    //% blockId=get_shared_number
    //% block="shared number %name"
    export function getSharedNumber(name: string): number {
        return getSharedNumberImpl(name);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=80
    //% blockId=get_shared_boolean
    //% block="shared true/false value %name"
    export function getSharedBoolean(name: string): boolean {
        return getSharedBooleanImpl(name);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=70
    //% blockId=get_shared_string_list
    //% block="shared list of texts %name"
    export function getSharedStringList(name: string): string[] {
        return getSharedStringListImpl(name);
    }

  /**
     * get the current value of a shared variable
     */
    //% weight=60
    //% blockId=get_shared_number_list
    //% block="shared list of numbers %name"
    export function getSharedNumberList(name: string): number[] {
        return getSharedNumberListImpl(name);
    }

    /**
     * set the current value of a shared variable
     */
    //% weight=50
    //% blockId=set_shared_string
    //% block="set shared string %name|to %v"
    export function setSharedString(name: string, v: string): void {
        return setSharedStringImpl(name, v);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=40
    //% blockId=set_shared_number
    //% block="set shared number %name|to %v"
    export function setSharedNumber(name: string, v: number): void {
        return setSharedNumberImpl(name, v);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=30
    //% blockId=set_shared_boolean
    //% block="set shared true/false value %name|to %v"
    export function setSharedBoolean(name: string, v: boolean): void {
        return setSharedBooleanImpl(name, v);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=29
    //% blockId=set_shared_string_list
    //% block="set shared list of texts %name|to %v"
    export function setSharedStringList(name: string, v: string[]): void {
        return setSharedStringListImpl(name, v);
    }

   /**
     * get the current value of a shared variable
     */
    //% weight=28
    //% blockId=set_shared_number_list
    //% block="set shared list of numbers %name|to %v"
    export function setSharedNumberList(name: string, v: number[]): void {
        return setSharedNumberListImpl(name, v);
    }

    /**
     * when the UI is updated, execute some code
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
    export function convertNumberToText(value: number): string {
        if (value === undefined)
            return null;
        else
            return value.toString();
    }

}