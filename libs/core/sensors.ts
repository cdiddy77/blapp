//% color=#7fff00 weight=100
namespace Sensors { 
       /**
      * This is the help text for the Foo block
      * @param arg help text for arg goes here
     **/
     //% weight=100
     //% color=#935BA5
     //% blockId=sensors_foo
     //% block="Foo arg %arg"
     //% subcategory=Bluetooth
     export function foo(arg: string) {
         fooImpl(arg);
     } 

     export function listNearbyDevices() {
         listNearbyDevicesImpl();
     }
}