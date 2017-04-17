import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Modal,
  TextInput
} from 'react-native';

import { AppModel } from './models/AppModel';
import * as svcConn from './util/ServiceConnection';
import { styles } from './styles';
import { Target } from './components/Target';

interface AppProps {

}
interface AppState {
  isSettingsShown: boolean;
}
export default class mobile extends React.Component<AppProps, AppState> {
  model: AppModel = new AppModel();

  constructor(props: AppProps) {
    super(props);
    this.model.loadSettings().then(() => {
      svcConn.resetConnection(this.model);
    });
    this.state = { isSettingsShown: false };
    this.model.on('change', (prop: string) => {
      this.forceUpdate();
    });
  }
  onBackPress() {
    this.setState({ isSettingsShown: true });
    console.log('onBackPress');
  }
  onSettingsOk() {
    console.log('onSettingsOk');
    this.model.saveSettings();
    this.setState({ isSettingsShown: false });
    svcConn.resetConnection(this.model);
  }
  render() {
    console.log('appRENDER');
    return (
      <View style={[styles.rootContainer, styles.column]}>
        <View style={[styles.row]}>

          <Button
            title={'Set Pairing Code'}
            onPress={() => { this.onBackPress() }} />
            <Text 
              style={{
                flex:1,
                flexWrap:'wrap'}}
            >connection status: {this.model.connectionState}</Text>
        </View >
        <View style={[styles.greenBorder, styles.targetContainer]} >
          <Target model={this.model} />
        </View>
        <Modal
          animationType={"fade"}
          visible={this.state.isSettingsShown}
          transparent={true}
        >
          <View style={[styles.column, {
            marginTop: 50,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: '#cccccc',
            padding: 10
          }]}>
            <Text>Server</Text>
            <TextInput
              style={[styles.textInput]}
              value={this.model.serverUri}
              placeholder="URL of server"
              selectTextOnFocus={true}
              onChangeText={(text) => this.model.setProperty('serverUri', text)}
              onSubmitEditing={() => console.log('onsubmitediting')}
            />
            <Text>Pairing Code</Text>
            <TextInput
              style={[styles.textInput]}
              value={this.model.pairingCode}
              placeholder="pairing code"
              selectTextOnFocus={true}
              autoFocus={true}
              onChangeText={(text) => this.model.setProperty('pairingCode', text)}
              onSubmitEditing={() => console.log('onsubmitediting')}
            />
            <Button title={'Connect'} onPress={() => { this.onSettingsOk() }} />
          </View>
        </Modal>
      </View >
    );
  }
}


