// import React, { Component } from 'react';
import { 
    AsyncStorage,
    NativeAppEventEmitter,
    NativeEventEmitter,
    NativeModules,
 } from 'react-native';
import { ModelBase } from './ModelBase';
import { CodegenRuntime, CodegenHost, BlueTooth } from '../../../shared/src/util/CodegenRuntime';
import * as pxtexec from '../../../shared/src/util/PxtExec';
import BleManager from 'react-native-ble-manager';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export class AppModel extends ModelBase implements CodegenHost {
    constructor() {
        super();
        CodegenRuntime.setCodegenHost(this);

        // start bluetooth
        BleManager.start({showAlert: false})
        .then(() => {
            // Success code
            console.log('Module initialized');
        });

        bleManagerEmitter.addListener('BleManagerDidUpdateState',
            (args: any) => {
                console.log("BleManagerDidUpdateState: " + args.state);
                // The new state: args.state
                this.blueTooth.btState = args.state;
        });
         
        this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
        this.handleStopScan = this.handleStopScan.bind(this);
        this.handleUpdateValueForCharacteristic = this.handleUpdateValueForCharacteristic.bind(this);
        this.handleDisconnectedPeripheral = this.handleDisconnectedPeripheral.bind(this);

        BleManager.start({showAlert: false, allowDuplicates: false});

        this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral );
        this.handlerStop = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan );
        this.handlerDisconnect = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', this.handleDisconnectedPeripheral );
        this.handlerUpdate = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', this.handleUpdateValueForCharacteristic );

    }

    readonly serverUri: string;
    readonly pairingCode: string;
    readonly lastEvalError: Error;
    readonly code: string;
    readonly connectionState: string = 'not connected';
    private handlerDiscover: any;
    private handlerStop: any;
    private handlerDisconnect: any;
    private handlerUpdate: any;

    componentDidMount() {
    }

     componentWillUnmount() {
        this.handlerDiscover.remove();
        this.handlerStop.remove();
        this.handlerDisconnect.remove();
        this.handlerUpdate.update();
    }

    loadSettings(): Promise<void[]> {
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
        CgRt.resetCodeState();
        CgRt.updateUI();

        // need to figure out a way to know whether we are pxt or not
        try {
            console.log('evaluating new code');
            console.log(this.code);
            var pxsim: any = pxtexec.pxsim;
            pxtexec.executeCode(this.code);
            // eval(this.testCode());
            this.setProperty('lastEvalError', null);
        } catch (e) {
            this.setProperty('lastEvalError', e);
        }
    }

    setProperty<T>(prop: keyof AppModel, v: T) {
        (<any>this)[prop] = v;
        if (prop == 'code') {
            this.evalCode();
        }
        this.fire("change", prop);
    }

    // CodegenHost interface ///////////////////////////////////////////////////
    //
    runFiberAsync(a: any, arg0?: any, arg1?: any, arg2?: any): Promise<any> {
        return pxtexec.pxsim.runtime.runFiberAsync(a, arg0, arg1, arg2);
    }
    runFiberSync(a: any, resolve: (thenableOrResult?: any) => void, arg0?: any, arg1?: any, arg2?: any): void {
        // HACK: this shouldn't be necessary and it doesn't actually prevent an RSOD (why??)
        pxtexec.pxsim.runtime.errorHandler=(e)=>{
            console.log('runFiberSync Err:EXCEPTION', JSON.stringify(e));            
        }
        try {
            let savedYieldState = pxtexec.pxsim.runtime.yieldingDisabled;
            pxtexec.pxsim.runtime.yieldingDisabled = true;
            pxtexec.pxsim.runtime.runFiberSync(a, resolve, arg0, arg1, arg2);
            pxtexec.pxsim.runtime.yieldingDisabled = savedYieldState;
        } catch (e) {
            console.log('runFiberSync EXCEPTION', JSON.stringify(e));
        }
    }
    createRefCollection(): any {
        return new pxtexec.pxsim.RefCollection();
    }

    blueTooth: BlueTooth = {

        btState: "off",
        devices: [],
        deviceNames: null,
        codeGenHost: null,
        scanning: false,
        scanningCompleteCallback: null,

        toggleBlueToothState: function toggleBlueToothState(): string {
            BleManager.enableBluetooth()
            .then(() => {
                // Success code
                console.log('The bluetooh is already enabled or the user confirm');
            })
            .catch((error: any) => {
                // Failure code
                console.log('The user refuse to enable bluetooth');
            });
        
            return this.btState;
        },
        getBlueToothStatus: function getBlueToothStatus(): string {
            BleManager.checkState();

            return this.btState;
        },
        scanForDevices(scanDurationMilliseconds: number, callback: pxsim.RefAction): void {
            // setup callback
            this.scanningCompleteCallback = callback;

            //  reset device list
            this.devices = [];
            this.deviceNames = new pxtexec.pxsim.RefCollection();          

            // start scanning for devices
            if (!this.scanning) {
                BleManager.scan([], Math.floor(scanDurationMilliseconds / 1000), false)
                .then((results: any) => {
                    console.log('BleManger Scanning');

                    this.scanning = true;
                })
                .catch((error: any) => {
                    console.log('scanForDevices: ' + error);
                });
            } else {
                console.log("scanForDevices: skipping starting new scan.  scan currently in progress.");
            }
        },
        getDeviceList(): any {
            return this.deviceNames;
        },
        connectToDevice(deviceName: string, callback: any): void {
            // TODO: finish implementing
            
            // find the existing device
            for(var i: number = 0; i < this.devices.length; i++) {
                if (this.devices[i].name == deviceName) {
                    BleManager.connect(this.devices[i].id).then(() => {

                        this.bluetooth.devices[i].connected = true;
                        console.log('Connected to ' + this.bluetooth.devices[i]);
                        /*
                        this.setTimeout(() => {
                          BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
                            console.log('Retrieved peripheral services', peripheralData);
                            BleManager.readRSSI(peripheral.id).then((rssi) => {
                              console.log('Retrieved actual RSSI value', rssi);
                            });
                          });
                          // Specific to test my device
                          BleManager.retrieveServices(peripheral.id).then((peripheralInfo) => {
                            this.setTimeout(() => {
                              BleManager.startNotification(peripheral.id, '00035B03-58E6-07DD-021A-08123A000300', '00035B03-58E6-07DD-021A-08123A000301').then(() => {
                                console.log('Started notification on ' + peripheral.id);
                                this.setTimeout(() => {
               
                                  let messages = [[0, 7, 2, 52, 2, 19, 181],[0, 7, 2, 103, 2, 47, 69],[0, 7, 2, 32, 2, 28, 181], [0, 7, 2, 120, 2, 39, 117]];
                                  let message = messages[Math.floor(Math.random() * 3)];
                                  //console.log(message);
                                  BleManager.write(peripheral.id, '00035B03-58E6-07DD-021A-08123A000300', '00035B03-58E6-07DD-021A-08123A000301', message).then(() => {
                                    console.log('Write confirmed');
                                  });
                                }, 500);
                              }).catch((error) => {
                                console.log('Notification error', error);
                              });
                            }, 200);
                          });
                        }, 900);*/
                    }).catch((e: any) => {
                        console.log('Connection error: ', e);
                    });                    
                }
            }
        }
    }

    //
    ////////////////////////////////////////////////////////////////////////////

    handleDisconnectedPeripheral(data: any) {

    // let peripherals = this.state.peripherals;
    // let peripheral = peripherals.get(data.peripheral);

    // if (peripheral) {
    //   peripheral.connected = false;
    //   peripherals.set(peripheral.id, peripheral);
    //   this.setState({peripherals});
    // }

    console.log('Disconnected from ' + data.peripheral);
  }



  handleUpdateValueForCharacteristic(data: any) {
    console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
  }



  handleStopScan() {
    console.log('Scan is stopped');

    this.blueTooth.scanning = false;
    
    // call the stop scanning callback
    this.runFiberSync(this.blueTooth.scanningCompleteCallback, (r) => {});
  }

  
  handleDiscoverPeripheral(peripheral: any){
    // var peripherals = this.state.peripherals;

    // if (!peripherals.has(peripheral.id)){
    console.log('Found ble peripheral!', peripheral);
    //   peripherals.set(peripheral.id, peripheral);
    //   this.setState({ peripherals })
    // }

    if (peripheral.name != null) {
        this.blueTooth.deviceNames.push(peripheral.name);
        this.blueTooth.devices.push(peripheral);
    }
  }

}