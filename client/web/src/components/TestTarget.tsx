import * as React from 'react';
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';
import { CodegenRuntime } from '../../../shared/src/util/CodegenRuntime';
import { GroupBlock } from '../../../shared/src/components/GroupBlock';

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
            <GroupBlock  background='red'>
                <Text>foobar</Text>
            </GroupBlock>
        );
    }
}