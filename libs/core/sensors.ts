//% color=#00e600 weight=100
namespace Sensors {
    /**
   * This is the help text for the Foo block
   * @param arg help text for arg goes here
  **/
    //% weight=100
    //% color=#00e600
    //% blockId=sensors_foo
    //% block="Foo arg %arg"
    //% subcategory=Bluetooth
    export function foo(arg: string) {
        fooImpl(arg);
    }

    /**
   * scans for nearby bluetooth devices
    **/
    //% weight=100
    //% color=#00e600
    //% blockId=sensors_scanNearbyDevices
    //% block="Scan for %scanDurationMilliseconds milliseconds| for nearby devices"
    //% scanDurationMilliseconds.defl=3000
    //% subcategory=Bluetooth
    //% handlerStmt=true
    export function scanForNearbyDevices(scanDurationMilliseconds: number, callback: () => void): void {
        scanForNearbyDevicesImpl(scanDurationMilliseconds, callback);
    }

        /**
   * scans for nearby bluetooth devices
    **/
    //% weight=100
    //% color=#00e600
    //% blockId=sensors_list
    //% block="list all devices found nearby"
    //% subcategory=Bluetooth
    export function listDevices(): string[] {
        return getDeviceListImpl();
    }
    

    /**
   * returns true or false depending on whether or not bluetooth is turned On or not
    **/
    //% weight=100
    //% color=#00e600
    //% blockId=sensors_getBluetoothStatus
    //% block="BlueToothStatus"
    //% subcategory=Bluetooth
    export function getBluetoothStatus(): string {
        return getBlueToothStatusImpl();
    }

        /**
   * toggles BT status
    **/
    //% weight=100
    //% color=#00e600
    //% blockId=sensors_toggleBlueToothStatus
    //% block="ToggleBluetoothOnOrOff"
    //% subcategory=Bluetooth
    export function toggleBlueToothStatus(): void {
        toggleBlueToothStatusImpl();
    }

    /**
   * connects to the named device
    **/
    //% weight=100
    //% color=#00e600
    //% blockId=sensors_connectToBTDevice
    //% block="Connect to BT device called %deviceName"
    //% subcategory=Bluetooth
    //% handlerStmt=true
    export function connectToDevice(deviceName: string, callback: () => void): void {
        connectToDeviceImpl(deviceName, callback);
    }
}