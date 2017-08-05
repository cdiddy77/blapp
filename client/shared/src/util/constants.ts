import { Platform } from 'react-native';

export var serverHost = function () {
    let platformOs: string = Platform.OS;
    if (platformOs == 'web') {
        return document.location.origin;
    } else {
        return __DEV__ ? 'http://localhost:3000' : 'https://theblapp.azurewebsites.net'
    }
}();
