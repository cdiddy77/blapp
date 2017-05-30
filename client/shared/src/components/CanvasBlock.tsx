import * as React from 'react';
import { View, LayoutChangeEvent, PanResponderInstance } from 'react-native';
import * as BlockThemes from '../util/BlockThemes';

export class CanvasBlock extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.resetState();
    }

    // gestureHandler: PanResponderInstance;
    // componentWillMount() {
    //     this.gestureHandler = this.props.gestureHandler;
    // }

    // CodegenComponent implementation ///////////////////////////////////////////////
    //
    resetState(): void {
        // this.gestureHandler = null;
    }
    componentName(): string {
        return 'CanvasBlock';
    }
    //
    //////////////////////////////////////////////////////////////////////////////////

    laidoutWidth: number;
    laidoutHeight: number;
    render() {
        let {
            style,
            theme,
            visualPurpose,
            gestureHandler,
            isFlex,
            children,
            ...other
        } = this.props;

        let viewStyles: any = [];

        // if there is a theme, then grab the correct
        // style from the theme, otherwise use the default
        // theme, whatever that is
        if (visualPurpose != 'none') {
            let themeBlock: BlockThemes.BlockTheme;
            if (theme) {
                themeBlock = BlockThemes.getThemeByName(theme);
            } else {
                themeBlock = BlockThemes.getDefaultTheme();
            }
            if (themeBlock)
                viewStyles.push(themeBlock['group_' + visualPurpose]);
        }

        // some of the properties apply indirectly to styles
        // if any of these properties are present, then create
        // a style block just for them 
        if (isFlex) {
            let propStyle: React.CSSProperties = {};
            if (isFlex) {
                propStyle.flex = 1;
            }
            viewStyles.push(propStyle);
        }
        // finally, if the user defined their own style block
        // that trumps everything else
        if (style) {
            viewStyles.push(style);
        }
        // GESTURE : add panresponder whooey if the property is set
        if (gestureHandler) {
            Object.assign(other, gestureHandler.panHandlers);
        }

        return (
            <View {...other} style={viewStyles}
                onLayout={(e) => {
                    this.laidoutWidth = e.nativeEvent.layout.width;
                    this.laidoutHeight = e.nativeEvent.layout.height;
                }}
            >
                {this.props.children}
            </View>
        );
    }
}