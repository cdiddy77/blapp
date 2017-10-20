import * as React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform
} from 'react-native';

export var screenDims = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderWidth: 0,
    alignItems: 'flex-start'
  },
  column: {
    flexDirection: 'column',
    // borderColor: 'green',
    // borderWidth: 1,
  }, 
  redBorder: {
    borderColor: 'red',
    borderWidth: 1,
    margin: 2
  },
  greenBorder: {
    borderColor: 'green',
    borderWidth: 1,
    margin: 2
  },
  rootContainer: {
    width:"100%",
    height:"100%",
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    margin:0,
    padding:0,
    marginTop: (Platform.OS === 'ios') ? 20 : 0
  },
  textInput: {
    height: (Platform.OS == 'ios') ? 20: 60,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth:1,
    borderBottomColor:'black'
  },
  targetContainer: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    height: 50,
    marginTop: 20
  },
  instructions: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  targetErrorText:{
    fontSize:18
  }
});