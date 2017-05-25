import { Component, CSSProperties } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Platform,
    ViewStyle,
    TextStyle,
    ImageStyle
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
//      label,button,menu,caption,body1,body2,subtitle,title,headline1,headline2,headline3,headline4
// textinput:
//      inline,form,headline,
// image:(TBD)
//      smallsquare,medsquare,largesquare,thumbnail
// divider:
//      verticalleft,verticalright,verticalmid,horizontaltop,horizontalbottom,horizontalmiddle


export interface BlockTheme {
    group_panel?: ViewStyle;
    group_frame?: ViewStyle;
    group_framepanel?: ViewStyle;
    group_header?: ViewStyle;
    group_footer?: ViewStyle;
    group_row?: ViewStyle;
    scroller_panel?: ViewStyle;
    scroller_frame?: ViewStyle;
    scroller_framepanel?: ViewStyle;
    scroller_header?: ViewStyle;
    scroller_footer?: ViewStyle;
    scroller_row?: ViewStyle;
    button_small?: ViewStyle;
    button_medium?: ViewStyle;
    button_large?: ViewStyle;
    button_small_accent?: ViewStyle;
    button_medium_accent?: ViewStyle;
    button_large_accent?: ViewStyle;
    text_label?: TextStyle;
    text_button?: TextStyle;
    text_button_accent?: TextStyle;
    text_menu?: TextStyle;
    text_caption?: TextStyle;
    text_body?: TextStyle;
    text_subtitle?: TextStyle;
    text_title?: TextStyle;
    text_headline?: TextStyle;
    textinput_inline?: TextStyle;
    textinput_form?: TextStyle;
    textinput_headline?: TextStyle;
    divider_verticalleft?: ViewStyle;
    divider_verticalright?: ViewStyle;
    divider_horizontaltop?: ViewStyle;
    divider_horizontalbottom?: ViewStyle;

    [key: string]: ViewStyle | TextStyle | ImageStyle;
}

const colors = {
    firstThemeSoftGray: 'rgb(243,244,245)',
    firstThemeButtonGray:'#DDDDDD',
    // firstThemeBright: '#17bed2',
    firstThemeBorder: '#a6a7aa',
    firstThemeDarkText: '#515769',
    firstThemeMidText: '#81848f',
    firstThemeLightText: '#a6a7aa',
    firstThemeAccentText: '#fff',
    firstThemeAccentButton: '#17bed2',
    brightThemeLightBkgd: '#90F2FF',//changed
    // brightThemeBright: '#3454D1',//changed
    brightThemeBorder: '#0b7482',//changed
    brightThemeDarkText: 'black', // '#8E24AA',
    brightThemeMidText: '#0b7482',
    brightThemeLightText: '#0b7482',
    brightThemeAccentText: '#fff',
    brightThemeAccentButton: '#ff8b27',//changed
    darkThemeFaded: '#30305A',
    darkThemeButton:'#262641',
    // darkThemeBright: '#17bed2',
    darkThemeBorder: '#FFEEBB',
    darkThemeDarkText: '#FFEEBB',
    darkThemeMidText: '#F280D0',
    darkThemeLightText: '#22AA39',
    darkThemeAccentButton: '#406385',
    darkThemeAccentText: '#FFEEBB',
}
const constants = {
    firstThemeGridSize: 5,
    firstThemeBorderWidth: 1,
    brightThemeGridSize: 6,
    brightThemeBorderWidth: 2,
    brightThemeStdRadius: 6,//changed
    darkThemeGridSize: 5,
    darkThemeBorderWidth: 2,
    darkThemeStdRadius: 5,
}

// FRIENDLY : flat rectangular

const firstTheme: BlockTheme = StyleSheet.create<BlockTheme>({
    group_panel: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderWidth: 0
    },
    group_frame: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        // backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderWidth: constants.firstThemeBorderWidth,
    },
    group_framepanel: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderWidth: constants.firstThemeBorderWidth,
    },
    group_header: {
        marginTop: constants.firstThemeGridSize,
        marginLeft: constants.firstThemeGridSize,
        marginRight: constants.firstThemeGridSize,
        marginBottom: 0,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderBottomWidth: constants.firstThemeBorderWidth,
    },
    group_footer: {
        marginTop: 0,
        marginLeft: constants.firstThemeGridSize,
        marginRight: constants.firstThemeGridSize,
        marginBottom: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderTopWidth: constants.firstThemeBorderWidth,
    },
    group_row: {
        marginTop: 0,
        marginLeft: constants.firstThemeGridSize,
        marginRight: constants.firstThemeGridSize,
        marginBottom: 1,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        // borderTopWidth: constants.firstThemeBorderWidth,
        // borderBottomWidth: constants.firstThemeBorderWidth,
    },
    scroller_panel: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderWidth: 0
    },
    scroller_frame: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        // backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderWidth: constants.firstThemeBorderWidth,
    },

    scroller_framepanel: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderWidth: constants.firstThemeBorderWidth,
    },
    scroller_header: {
        marginTop: constants.firstThemeGridSize,
        marginLeft: constants.firstThemeGridSize,
        marginRight: constants.firstThemeGridSize,
        marginBottom: 0,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderBottomWidth: constants.firstThemeBorderWidth,
    },
    scroller_footer: {
        marginTop: 0,
        marginLeft: constants.firstThemeGridSize,
        marginRight: constants.firstThemeGridSize,
        marginBottom: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        borderTopWidth: constants.firstThemeBorderWidth,
    },
    scroller_row: {
        marginTop: 0,
        marginLeft: constants.firstThemeGridSize,
        marginRight: constants.firstThemeGridSize,
        marginBottom: 1,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeSoftGray,
        borderColor: colors.firstThemeBorder,
        // borderTopWidth: constants.firstThemeBorderWidth,
        // borderBottomWidth: constants.firstThemeBorderWidth,
    },
    button_small: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeButtonGray,
        alignItems: "center",
    },
    button_medium: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize * 3,
        backgroundColor: colors.firstThemeButtonGray,
        alignItems: 'center'
    },
    button_large: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize * 5,
        backgroundColor: colors.firstThemeButtonGray,
        alignItems: "center",
    },
    button_small_accent: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize,
        backgroundColor: colors.firstThemeAccentButton,
        alignItems: "center",
    },
    button_medium_accent: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize * 3,
        backgroundColor: colors.firstThemeAccentButton,
        alignItems: "center",
    },
    button_large_accent: {
        margin: constants.firstThemeGridSize,
        padding: constants.firstThemeGridSize * 5,
        backgroundColor: colors.firstThemeAccentButton,
        alignItems: "center",
    },
    text_label: {
        fontSize: 12,
        fontFamily: 'helvetica',
        color: colors.firstThemeMidText,
    },
    text_button: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.firstThemeMidText,
    },
    text_button_accent: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.firstThemeAccentText,
    },
    text_menu: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.firstThemeMidText,
    },
    text_caption: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.firstThemeDarkText,
    },
    text_body: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.firstThemeLightText,
    },
    text_subtitle: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.firstThemeDarkText,
    },
    text_title: {
        fontSize: 36,
        lineHeight: 48,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.firstThemeDarkText,
    },
    text_headline: {
        fontSize: 48,
        lineHeight: 60,
        fontWeight: '700',
        fontFamily: 'helvetica',
        color: colors.firstThemeDarkText,
    },
    textinput_inline: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: colors.firstThemeDarkText,
        borderBottomWidth: constants.firstThemeBorderWidth,
        borderColor: colors.firstThemeLightText,
        padding: constants.firstThemeGridSize,
    },
    textinput_form: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: colors.firstThemeDarkText,
        borderWidth: constants.firstThemeBorderWidth,
        borderColor: colors.firstThemeBorder,
        padding: constants.firstThemeGridSize,
    },
    textinput_headline: {
        fontSize: 48,
        lineHeight: 60,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: colors.firstThemeDarkText,
        borderBottomWidth: constants.firstThemeBorderWidth,
        borderColor: colors.firstThemeBorder,
        padding: constants.firstThemeGridSize,
    },
    divider_verticalleft: {
        backgroundColor: colors.firstThemeBorder,
        width: constants.firstThemeBorderWidth,
        marginRight: constants.firstThemeGridSize,
        marginLeft: 0,
    },
    divider_verticalright: {
        backgroundColor: colors.firstThemeBorder,
        width: constants.firstThemeBorderWidth,
        marginLeft: constants.firstThemeGridSize,
        marginRight: 0,
    },
    divider_horizontaltop: {
        backgroundColor: colors.firstThemeBorder,
        height: constants.firstThemeBorderWidth,
        marginBottom: constants.firstThemeGridSize,
        marginTop: 0,
    },
    divider_horizontalbottom: {
        backgroundColor: colors.firstThemeBorder,
        height: constants.firstThemeBorderWidth,
        marginTop: constants.firstThemeGridSize,
        marginBottom: 0,
    },
});

// FRIENDLY : bubbles, more saturated
const brightTheme: BlockTheme = StyleSheet.create<BlockTheme>({
    group_panel: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        borderRadius: constants.brightThemeStdRadius,
        borderWidth: 0
    },
    group_frame: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        // backgroundColor: colors.brightThemeSoftGray,
        borderColor: colors.brightThemeBorder,
        borderRadius: constants.brightThemeStdRadius,
        borderWidth: constants.brightThemeBorderWidth,
    },
    group_framepanel: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        borderRadius: constants.brightThemeStdRadius,
        borderWidth: constants.brightThemeBorderWidth,
    },
    group_header: {
        marginTop: constants.brightThemeGridSize,
        marginLeft: constants.brightThemeGridSize,
        marginRight: constants.brightThemeGridSize,
        marginBottom: 0,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        borderBottomWidth: constants.brightThemeBorderWidth,
        borderTopLeftRadius: constants.brightThemeStdRadius,
        borderTopRightRadius: constants.brightThemeStdRadius,
    },
    group_footer: {
        marginTop: 0,
        marginLeft: constants.brightThemeGridSize,
        marginRight: constants.brightThemeGridSize,
        marginBottom: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        borderTopWidth: constants.brightThemeBorderWidth,
        borderBottomLeftRadius: constants.brightThemeStdRadius,
        borderBottomRightRadius: constants.brightThemeStdRadius,
    },
    group_row: {
        marginTop: 0,
        marginLeft: constants.brightThemeGridSize,
        marginRight: constants.brightThemeGridSize,
        marginBottom: 1,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        // borderTopWidth: constants.brightThemeBorderWidth,
        // borderBottomWidth: constants.brightThemeBorderWidth,
    },
    scroller_panel: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        borderRadius: constants.brightThemeStdRadius,
        borderWidth: 0
    },
    scroller_frame: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        // backgroundColor: colors.brightThemeSoftGray,
        borderColor: colors.brightThemeBorder,
        borderRadius: constants.brightThemeStdRadius,
        borderWidth: constants.brightThemeBorderWidth,
    },
    scroller_framepanel: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        borderRadius: constants.brightThemeStdRadius,
        borderWidth: constants.brightThemeBorderWidth,
    },
    scroller_header: {
        marginTop: constants.brightThemeGridSize,
        marginLeft: constants.brightThemeGridSize,
        marginRight: constants.brightThemeGridSize,
        marginBottom: 0,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        borderBottomWidth: constants.brightThemeBorderWidth,
        borderTopLeftRadius: constants.brightThemeStdRadius,
        borderTopRightRadius: constants.brightThemeStdRadius,
    },
    scroller_footer: {
        marginTop: 0,
        marginLeft: constants.brightThemeGridSize,
        marginRight: constants.brightThemeGridSize,
        marginBottom: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        borderTopWidth: constants.brightThemeBorderWidth,
        borderBottomLeftRadius: constants.brightThemeStdRadius,
        borderBottomRightRadius: constants.brightThemeStdRadius,
    },
    scroller_row: {
        marginTop: 0,
        marginLeft: constants.brightThemeGridSize,
        marginRight: constants.brightThemeGridSize,
        marginBottom: 1,
        padding: constants.brightThemeGridSize,
        backgroundColor: colors.brightThemeLightBkgd,
        borderColor: colors.brightThemeBorder,
        // borderTopWidth: constants.brightThemeBorderWidth,
        // borderBottomWidth: constants.brightThemeBorderWidth,
    },
    button_small: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        borderRadius: constants.brightThemeStdRadius,
        borderWidth: constants.brightThemeBorderWidth,
        borderColor: colors.brightThemeBorder,
        backgroundColor: colors.brightThemeLightBkgd,
        alignItems: "center",
    },
    button_medium: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize * 2,
        borderRadius: constants.brightThemeStdRadius,
        borderWidth: constants.brightThemeBorderWidth,
        borderColor: colors.brightThemeBorder,
        backgroundColor: colors.brightThemeLightBkgd,
        alignItems: 'center'
    },
    button_large: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize * 4,
        borderRadius: constants.brightThemeStdRadius,
        borderWidth: constants.brightThemeBorderWidth,
        borderColor: colors.brightThemeBorder,
        backgroundColor: colors.brightThemeLightBkgd,
        alignItems: "center",
    },
    button_small_accent: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize,
        borderRadius: constants.brightThemeStdRadius,
        backgroundColor: colors.brightThemeAccentButton,
        alignItems: "center",
    },
    button_medium_accent: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize * 2,
        borderRadius: constants.brightThemeStdRadius,
        backgroundColor: colors.brightThemeAccentButton,
        alignItems: "center",
    },
    button_large_accent: {
        margin: constants.brightThemeGridSize,
        padding: constants.brightThemeGridSize * 4,
        borderRadius: constants.brightThemeStdRadius,
        backgroundColor: colors.brightThemeAccentButton,
        alignItems: "center",
    },
    text_label: {
        fontSize: 14,
        fontFamily: 'helvetica',
        color: colors.brightThemeDarkText,
    },
    text_button: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.brightThemeMidText,
    },
    text_button_accent: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.brightThemeAccentText,
    },
    text_menu: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.brightThemeMidText,
    },
    text_caption: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.brightThemeDarkText,
    },
    text_body: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.brightThemeLightText,
    },
    text_subtitle: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.brightThemeMidText,
    },
    text_title: {
        fontSize: 36,
        lineHeight: 48,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.brightThemeMidText,
    },
    text_headline: {
        fontSize: 48,
        lineHeight: 60,
        fontWeight: '700',
        fontFamily: 'helvetica',
        color: colors.brightThemeMidText,
    },
    textinput_inline: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: colors.brightThemeDarkText,
        borderBottomWidth: constants.brightThemeBorderWidth,
        borderColor: colors.brightThemeLightText,
        padding: constants.brightThemeGridSize,
    },
    textinput_form: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: colors.brightThemeDarkText,
        borderWidth: constants.brightThemeBorderWidth,
        borderColor: colors.brightThemeBorder,
        padding: constants.brightThemeGridSize,
    },
    textinput_headline: {
        fontSize: 48,
        lineHeight: 60,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: colors.brightThemeDarkText,
        borderBottomWidth: constants.brightThemeBorderWidth,
        borderColor: colors.brightThemeBorder,
        padding: constants.brightThemeGridSize,
    },
    divider_verticalleft: {
        backgroundColor: colors.brightThemeBorder,
        width: constants.brightThemeBorderWidth,
        marginRight: constants.brightThemeGridSize,
        marginLeft: 0,
    },
    divider_verticalright: {
        backgroundColor: colors.brightThemeBorder,
        width: constants.brightThemeBorderWidth,
        marginLeft: constants.brightThemeGridSize,
        marginRight: 0,
    },
    divider_horizontaltop: {
        backgroundColor: colors.brightThemeBorder,
        height: constants.brightThemeBorderWidth,
        marginBottom: constants.brightThemeGridSize,
        marginTop: 0,
    },
    divider_horizontalbottom: {
        backgroundColor: colors.brightThemeBorder,
        height: constants.brightThemeBorderWidth,
        marginTop: constants.brightThemeGridSize,
        marginBottom: 0,
    },
});

// FRIENDLY : dark
const darkTheme: BlockTheme = StyleSheet.create<BlockTheme>({
    group_panel: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        backgroundColor: colors.darkThemeFaded,
        borderColor: colors.darkThemeBorder,
        borderWidth: 0
    },
    group_frame: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        // backgroundColor: colors.darkThemeSoftGray,
        borderRadius: constants.brightThemeStdRadius,
        borderColor: colors.darkThemeBorder,
        borderWidth: constants.darkThemeBorderWidth,
    },
    group_framepanel: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        backgroundColor: colors.darkThemeFaded,
        borderRadius: constants.brightThemeStdRadius,
        borderColor: colors.darkThemeBorder,
        borderWidth: constants.darkThemeBorderWidth,
    },
    group_header: {
        marginTop: constants.darkThemeGridSize,
        marginLeft: constants.darkThemeGridSize,
        marginRight: constants.darkThemeGridSize,
        marginBottom: 0,
        padding: constants.darkThemeGridSize,
        borderTopLeftRadius: constants.brightThemeStdRadius,
        borderTopRightRadius: constants.brightThemeStdRadius,
        backgroundColor: colors.darkThemeFaded,
        borderColor: colors.darkThemeBorder,
        borderBottomWidth: constants.darkThemeBorderWidth * 2,
        borderTopWidth: constants.darkThemeBorderWidth,
        borderLeftWidth: constants.darkThemeBorderWidth,
        borderRightWidth: constants.darkThemeBorderWidth,
    },
    group_footer: {
        marginTop: 0,
        marginLeft: constants.darkThemeGridSize,
        marginRight: constants.darkThemeGridSize,
        marginBottom: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        backgroundColor: colors.darkThemeFaded,
        borderColor: colors.darkThemeBorder,
        borderTopWidth: constants.darkThemeBorderWidth * 2,
    },
    group_row: {
        marginTop: 0,
        marginLeft: constants.darkThemeGridSize,
        marginRight: constants.darkThemeGridSize,
        marginBottom: 1,
        padding: constants.darkThemeGridSize,
        backgroundColor: colors.darkThemeFaded,
        borderColor: colors.darkThemeBorder,
        // borderTopWidth: constants.darkThemeBorderWidth,
        // borderBottomWidth: constants.darkThemeBorderWidth,
    },
    scroller_panel: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        backgroundColor: colors.darkThemeFaded,
        borderColor: colors.darkThemeBorder,
        borderWidth: 0
    },
    scroller_frame: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        // backgroundColor: colors.darkThemeSoftGray,
        borderRadius: constants.brightThemeStdRadius,
        borderColor: colors.darkThemeBorder,
        borderWidth: constants.darkThemeBorderWidth,
    },
    scroller_framepanel: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        backgroundColor: colors.darkThemeFaded,
        borderRadius: constants.brightThemeStdRadius,
        borderColor: colors.darkThemeBorder,
        borderWidth: constants.darkThemeBorderWidth,
    },
    scroller_header: {
        marginTop: constants.darkThemeGridSize,
        marginLeft: constants.darkThemeGridSize,
        marginRight: constants.darkThemeGridSize,
        marginBottom: 0,
        padding: constants.darkThemeGridSize,
        borderTopLeftRadius: constants.brightThemeStdRadius,
        borderTopRightRadius: constants.brightThemeStdRadius,
        backgroundColor: colors.darkThemeFaded,
        borderColor: colors.darkThemeBorder,
        borderBottomWidth: constants.darkThemeBorderWidth * 2,
        borderTopWidth: constants.darkThemeBorderWidth,
        borderLeftWidth: constants.darkThemeBorderWidth,
        borderRightWidth: constants.darkThemeBorderWidth,
    },
    scroller_footer: {
        marginTop: 0,
        marginLeft: constants.darkThemeGridSize,
        marginRight: constants.darkThemeGridSize,
        marginBottom: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        backgroundColor: colors.darkThemeFaded,
        borderColor: colors.darkThemeBorder,
        borderTopWidth: constants.darkThemeBorderWidth * 2,
    },
    scroller_row: {
        marginTop: 0,
        marginLeft: constants.darkThemeGridSize,
        marginRight: constants.darkThemeGridSize,
        marginBottom: 1,
        padding: constants.darkThemeGridSize,
        backgroundColor: colors.darkThemeFaded,
        borderColor: colors.darkThemeBorder,
        // borderTopWidth: constants.darkThemeBorderWidth,
        // borderBottomWidth: constants.darkThemeBorderWidth,
    },
    button_small: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        borderRadius: constants.darkThemeStdRadius,
        borderWidth:constants.darkThemeBorderWidth,
        borderColor:colors.darkThemeDarkText,
        backgroundColor: colors.darkThemeButton,
        alignItems: "center",
    },
    button_medium: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize * 3,
        borderRadius: constants.darkThemeStdRadius,
        borderWidth:constants.darkThemeBorderWidth,
        borderColor:colors.darkThemeDarkText,
        backgroundColor: colors.darkThemeButton,
        alignItems: 'center'
    },
    button_large: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize * 5,
        borderRadius: constants.darkThemeStdRadius,
        borderWidth:constants.darkThemeBorderWidth,
        borderColor:colors.darkThemeDarkText,
        backgroundColor: colors.darkThemeButton,
        alignItems: "center",
    },
    button_small_accent: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize,
        borderRadius: constants.darkThemeStdRadius,
        backgroundColor: colors.darkThemeAccentButton,
        alignItems: "center",
    },
    button_medium_accent: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize * 3,
        borderRadius: constants.darkThemeStdRadius,
        backgroundColor: colors.darkThemeAccentButton,
        alignItems: "center",
    },
    button_large_accent: {
        margin: constants.darkThemeGridSize,
        padding: constants.darkThemeGridSize * 5,
        borderRadius: constants.darkThemeStdRadius,
        backgroundColor: colors.darkThemeAccentButton,
        alignItems: "center",
    },
    text_label: {
        fontSize: 12,
        fontFamily: 'helvetica',
        color: colors.darkThemeMidText,
    },
    text_button: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.darkThemeDarkText,
    },
    text_button_accent: {
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'helvetica',
        color: colors.darkThemeAccentText,
    },
    text_menu: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.darkThemeMidText,
    },
    text_caption: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.darkThemeDarkText,
    },
    text_body: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.darkThemeLightText,
    },
    text_subtitle: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.darkThemeDarkText,
    },
    text_title: {
        fontSize: 36,
        lineHeight: 48,
        fontWeight: '500',
        fontFamily: 'helvetica',
        color: colors.darkThemeMidText,
    },
    text_headline: {
        fontSize: 48,
        lineHeight: 60,
        fontWeight: '700',
        fontFamily: 'helvetica',
        color: colors.darkThemeDarkText,
    },
    textinput_inline: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: colors.darkThemeDarkText,
        borderBottomWidth: constants.darkThemeBorderWidth,
        borderColor: colors.darkThemeLightText,
        padding: constants.darkThemeGridSize,
    },
    textinput_form: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: colors.darkThemeDarkText,
        borderWidth: constants.darkThemeBorderWidth,
        borderColor: colors.darkThemeBorder,
        padding: constants.darkThemeGridSize,
    },
    textinput_headline: {
        fontSize: 48,
        lineHeight: 60,
        fontWeight: 'normal',
        fontFamily: 'helvetica',
        color: colors.darkThemeDarkText,
        borderBottomWidth: constants.darkThemeBorderWidth,
        borderColor: colors.darkThemeBorder,
        padding: constants.darkThemeGridSize,
    },
    divider_verticalleft: {
        backgroundColor: colors.darkThemeBorder,
        width: constants.darkThemeBorderWidth,
        marginRight: constants.darkThemeGridSize,
        marginLeft: 0,
    },
    divider_verticalright: {
        backgroundColor: colors.darkThemeBorder,
        width: constants.darkThemeBorderWidth,
        marginLeft: constants.darkThemeGridSize,
        marginRight: 0,
    },
    divider_horizontaltop: {
        backgroundColor: colors.darkThemeBorder,
        height: constants.darkThemeBorderWidth,
        marginBottom: constants.darkThemeGridSize,
        marginTop: 0,
    },
    divider_horizontalbottom: {
        backgroundColor: colors.darkThemeBorder,
        height: constants.darkThemeBorderWidth,
        marginTop: constants.darkThemeGridSize,
        marginBottom: 0,
    },
});

export const themes: jsutil.Map<BlockTheme> = {
    firstTheme,
    brightTheme,
    darkTheme
};

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