import * as React from 'react';
//import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    //   Modal,
    TextInput,
    TouchableHighlight
} from 'react-native';

import { AppModel } from '../../../shared/src/pair/AppModel';
import * as svcConn from '../../../shared/src/pair/ServiceConnection';
import { styles } from '../../../shared/src/pair/styles';
import { Target } from '../../../shared/src/pair/Target';
import * as webUtil from '../util/WebUtil';
import * as constants from '../../../shared/src/util/constants';

interface AppProps {
}
interface AppState {
    isSettingsShown: boolean;
}

export default class PairApp extends React.Component<AppProps, AppState> {
    model: AppModel = new AppModel();

    constructor(props: AppProps) {
        super(props);
        let launchPC = webUtil.getUrlVars().pairingCode;
        this.model.loadSettings(launchPC).then(() => {
            svcConn.resetConnection(this.model);
        });
        this.state = { isSettingsShown: false };
        this.model.on('change', (prop: string) => {
            this.forceUpdate();
        });
    }
    onSetPairingCode() {
        if (!this.state.isSettingsShown) {
            this.setState({ isSettingsShown: true });
            console.log('onSetPairingCode');
        } else {
            console.log('onSettingsOk');
            this.model.saveSettings();
            this.setState({ isSettingsShown: false });
            svcConn.resetConnection(this.model);
        }
    }

    renderConnectionStatus() {
        console.log('renderConnectionStatus', this.model.connectionState);
        let imageSrc = constants.serverHost + '/media/hardware/ic_phonelink_off_white_48dp.png';
        let imageColor = 'orange';
        if (this.model.connectionState == 'unrecognized pairing code') {
            imageSrc = constants.serverHost + '/media/hardware/ic_phonelink_off_white_48dp.png';
            imageColor = 'red';
        } else if (this.model.connectionState == 'joined') {
            imageSrc = constants.serverHost + '/media/hardware/ic_phonelink_white_48dp.png';
            imageColor = 'green';
        } else if (this.model.connectionState == 'disconnected') {
            imageSrc = ''; constants.serverHost + '/media/hardware/ic_phonelink_off_white_48dp.png';
            imageColor = 'red';
        } else if (this.model.connectionState == 'connecting') {
            imageSrc = constants.serverHost + '/media/hardware/ic_phonelink_white_48dp.png';
            imageColor = 'yellow';
        } else if (this.model.connectionState == 'connected') {
            imageSrc = constants.serverHost + '/media/hardware/ic_phonelink_off_white_48dp.png';
            imageColor = 'green';
        }

        return (
            <View style={{
                backgroundColor: imageColor,
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20
            }}>
                <Image source={{ uri: imageSrc }} style={{ width: 20, height: 20 }} />
            </View>
        );
    }
    renderConnectionArea() {
        if (this.state.isSettingsShown) {
            return (
                <TextInput
                    style={{ height: 40, flex: 1 }}
                    value={this.model.pairingCode}
                    placeholder="pairing code"
                    selectTextOnFocus={true}
                    autoFocus={true}
                    onChangeText={(text) => this.model.setProperty('pairingCode', text)}
                    onSubmitEditing={() => this.onSetPairingCode()}
                />

            );
        } else {
            return (
                <Text
                    style={{ flex: 1 }}
                >{this.model.pairingCode}</Text>
            );
        }
    }
    render() {
        console.log('appRENDER');

        let connectionArea = this.renderConnectionArea();
        let connectionStatus = this.renderConnectionStatus();
        return (
            <View style={[styles.rootContainer, styles.column]}>
                <View style={[styles.row, { alignItems: 'center', borderBottomWidth: 1 }]}>
                    <TouchableHighlight
                        style={{
                            backgroundColor: 'grey',
                            margin: 5,
                            width: 150,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => { this.onSetPairingCode() }}>
                        <Text style={{ color: 'white' }}>{this.state.isSettingsShown ? 'Connect' : 'Set Pairing Code'}</Text>
                    </TouchableHighlight>
                    <View style={[styles.row, { alignItems: 'center', flex: 1 }]}>
                        <Text style={{}}
                        >pairing code: </Text>
                        {connectionArea}
                        {connectionStatus}
                    </View >
                </View>
                <View style={[{}, styles.targetContainer]} >
                    <Target model={this.model} />
                </View>
            </View >
        );
    }
}


