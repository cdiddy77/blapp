import { Platform } from 'react-native';

export var serverHost = function () {
    let platformOs: string = Platform.OS;
    if (platformOs == 'web') {
        return document.location.origin;
    } else {
        // The URI is different for the PXT branch
        return __DEV__ ? 'http://localhost:3000' : 'https://theblapp-pxt.azurewebsites.net'
    }
}();
