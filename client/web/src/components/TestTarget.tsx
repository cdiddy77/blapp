import * as React from 'react';
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';
import { CodegenRuntime } from '../../../shared/src/util/CodegenRuntime';
import { ButtonBlock } from '../../../shared/src/components/ButtonBlock';
import { TextBlock } from '../../../shared/src/components/TextBlock';

export class TestTarget extends React.Component<{}, {}>{
    ball: Image;
    yval: number = 0;
    timerHandler: number;
    componentDidMount() {
        this.timerHandler = setInterval(() => {
            if (this.ball) {
                this.ball.setNativeProps({ style: { transform: [{ translateY: this.yval }] } });
                this.yval += 1;
            }
        }, 50);
    }
    componentWillUnmount() {
        clearInterval(this.timerHandler);
    }
    render() {
        return (
            <View>
                <ButtonBlock onPress={() => { console.log('pressed') }}
                    visualPurpose='small'>
                    <TextBlock visualPurpose='button'>foobar</TextBlock>
                </ButtonBlock>
                <ButtonBlock onPress={() => { console.log('pressed') }}
                    visualPurpose='medium'>
                    <Text>foobar</Text>
                </ButtonBlock>
            </View>
        );
    }
}