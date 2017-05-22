import { Component,CSSProperties } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';

var screenDims = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
};

interface BlockTheme{
    groupBlock:CSSProperties;
}

export const firstTheme:BlockTheme = StyleSheet.create({
    groupBlock: {
        margin: 4,
        padding: 4,
        background: 'gray'
    }
});

export var defaultTheme = firstTheme;

export function setDefaultTheme(theme: BlockTheme) {
    defaultTheme = theme;
}