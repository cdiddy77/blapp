/**
 * Basic functionalities.
 */
//% color=#00BCD4 weight=80
namespace Data {
    /**
     * get the current value of a shared variable
     */
    //% weight=50
    //% blockId=get_shared_string
    //% block="shared string %name"
    export function getSharedString(name: string): string {
        return getSharedStringImpl(name);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=50
    //% blockId=get_shared_number
    //% block="shared number %name"
    export function getSharedNumber(name: string): number {
        return getSharedNumberImpl(name);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=50
    //% blockId=get_shared_boolean
    //% block="shared true/false value %name"
    export function getSharedBoolean(name: string): boolean {
        return getSharedBooleanImpl(name);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=50
    //% blockId=get_shared_list
    //% block="shared list %name"
    export function getSharedList(name: string): string[] {
        return getSharedListImpl(name);
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
    //% weight=50
    //% blockId=set_shared_number
    //% block="set shared number %name|to %v"
    export function setSharedNumber(name: string, v: number): void {
        return setSharedNumberImpl(name, v);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=50
    //% blockId=set_shared_boolean
    //% block="set shared true/false value %name|to %v"
    export function setSharedBoolean(name: string, v: boolean): void {
        return setSharedBooleanImpl(name, v);
    }

    /**
     * get the current value of a shared variable
     */
    //% weight=50
    //% blockId=set_shared_list
    //% block="set shared list %name|to %v"
    //% acceptArrays=true
    export function setSharedList(name: string, v: string[]): void {
        return setSharedListImpl(name, v);
    }

    /**
     * when the UI is updated, execute some code
    **/
    //% weight=30
    //% blockId=on_shared_change
    //% block="When shared %name|changes"
    export function onSharedVariableChange(name: string, body: Action): void {
        onSharedVariableChangeImpl(name, body);
    }

    /**
     * convert number to text
     */
    //% weight=20
    //% blockId=convert_number_to_text
    //% block="To text %value"
    export function convertNumberToText(value: number): string {
        if (value === undefined)
            return null;
        else
            return value.toString();
    }

}