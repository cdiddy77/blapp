//% color=#7fff00 weight=100
namespace Sensors {
    /**
   * This is the help text for the Foo block
   * @param arg help text for arg goes here
  **/
    //% weight=100
    //% color=#7fff00
    //% blockId=sensors_foo
    //% block="Foo arg %arg"
    //% subcategory=Bluetooth
    export function foo(arg: string) {
        fooImpl(arg);
    }

    /**
   * Returns an array of all nearby bluetooth devices
    **/
    //% weight=100
    //% color=#7fff00
    //% blockId=sensors_listNearbyDevices
    //% block="ListNearbyDevices"
    //% subcategory=Bluetooth
    export function getNearbyDevices(): string[] {
        return getNearbyDevicesImpl();
    }

    /**
   * returns true or false depending on whether or not bluetooth is turned On or not
    **/
    //% weight=100
    //% color=#7fff00
    //% blockId=sensors_getBluetoothStatus
    //% block="IsBluetoothTurnedOn"
    //% subcategory=Bluetooth
    export function getBluetoothStatus(): boolean {
        return getBluetoothStatusImpl();
    }

        /**
   * toggles BT status
    **/
    //% weight=100
    //% color=#7fff00
    //% blockId=sensors_toggleBlueToothStatus
    //% block="ToggleBluetoothOnOrOff"
    //% subcategory=Bluetooth
    export function toggleBlueToothStatus(): void {
        toggleBlueToothStatusImpl();
    }
}