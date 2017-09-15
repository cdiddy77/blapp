import * as React from 'react';
import { Image } from 'react-native';
import * as BlockThemes from '../../../shared/src/util/BlockThemes';

export class VideoBlock extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        let {
            style,
            theme,
            width,
            height,
            visualPurpose,
            isFlex,
            imagesource,
            videosource,
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
                viewStyles.push(themeBlock['image_' + visualPurpose]);
        }

        // some of the properties apply indirectly to styles
        // if any of these properties are present, then create
        // a style block just for them 
        if (isFlex || width || height) {
            let propStyle: React.CSSProperties = {};
            if (isFlex) {
                propStyle.flex = 1;
            }
            if (width) {
                propStyle.width = width;
            }
            if (height) {
                propStyle.height = height;
            }
            viewStyles.push(propStyle);
        }
        // finally, if the user defined their own style block
        // that trumps everything else
        if (style) {
            viewStyles.push(style);
        }
        return (
                <Image source={imagesource} style={viewStyles} />
        )

    }
}   