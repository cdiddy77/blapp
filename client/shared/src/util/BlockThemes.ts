import { Component, CSSProperties } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import * as jsutil from './jsutil';

var screenDims = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
};

// different block types have different potential visual purposes
// group:
//      panel,frame,framepanel,header,footer,row
// scroller:
//      (same as group)
// button:
//      small,medium,large,smallstrong,mediumstrong,largestrong,
// text:
//      button,menu,caption,body1,body2,subtitle,title,headline1,headline2,headline3,headline4
// textinput:
//      inline,form,headline,
// divider:
//      verticalleft,verticalright,verticalmid,horizontaltop,horizontalbottom,horizontalmiddle


export interface BlockTheme {
    group_panel?: CSSProperties;
    group_frame?: CSSProperties;
    group_framepanel?: CSSProperties;
    group_header?: CSSProperties;
    group_footer?: CSSProperties;
    group_row?: CSSProperties;
    scroller_panel?: CSSProperties;
    scroller_frame?: CSSProperties;
    scroller_framepanel?: CSSProperties;
    scroller_header?: CSSProperties;
    scroller_footer?: CSSProperties;
    scroller_row?: CSSProperties;
    button_small?: CSSProperties;
    button_medium?: CSSProperties;
    button_large?: CSSProperties;
    button_smallstrong?: CSSProperties;
    button_mediumstrong?: CSSProperties;
    button_largestrong?: CSSProperties;
    text_button?: CSSProperties;
    text_menu?: CSSProperties;
    text_caption?: CSSProperties;
    text_body1?: CSSProperties;
    text_body2?: CSSProperties;
    text_subtitle?: CSSProperties;
    text_title?: CSSProperties;
    text_headline1?: CSSProperties;
    text_headline2?: CSSProperties;
    text_headline3?: CSSProperties;
    text_headline4?: CSSProperties;
    textinput_inline?: CSSProperties;
    textinput_form?: CSSProperties;
    textinput_headline?: CSSProperties;
    divider_verticalleft?: CSSProperties;
    divider_verticalright?: CSSProperties;
    divider_verticalmid?: CSSProperties;
    divider_horizontalleft?: CSSProperties;
    divider_horizontalright?: CSSProperties;
    divider_horizontalmid?: CSSProperties;

    [key: string]: CSSProperties;
}

export const themes: jsutil.Map<BlockTheme> = {
    firstTheme: StyleSheet.create({
        group_panel: {
            margin: 4,
            padding: 4,
            backgroundColor: '#aaaaaa',
            borderColor: 'black',
            borderWidth: 0
        },
        scroller_frame: {
            margin: 4,
            padding: 4,
            borderColor: 'black',
            borderWidth: 1
        },
        button_small: {
            margin: 4,
            backgroundColor: '#888888',
        },
        button_medium: {
            margin: 4,
            padding: 12
        },
        button_large: {

        },
        button_smallstrong: {

        },
        button_mediumstrong: {

        },
        button_largestrong: {

        },
    })
};

// FRIENDLY : flat rectangular

// FRIENDLY : bubbles, more saturated

// FRIENDLY : Black and white with borders

var defaultTheme = themes.firstTheme;

export function setDefaultTheme(theme: BlockTheme) {
    defaultTheme = theme;
}
export function getDefaultTheme(): BlockTheme {
    return defaultTheme;
}

export function getThemeByName(name: string): BlockTheme {
    return themes[name];
}