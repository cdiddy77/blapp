import * as React from 'react';
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';
import { CodegenRuntime } from '../../../shared/src/util/CodegenRuntime';

export class TestTarget extends React.Component<{}, {}>{
    ball: Image;
    yval: number = 0;
    timerHandler: number;
    componentDidMount() {
        this.timerHandler = setInterval(() => {
            this.ball.setNativeProps({ style: { transform: [{ translateY: this.yval }] } });
            this.yval += 1;
        }, 50);
    }
    componentWillUnmount() {
        clearInterval(this.timerHandler);
    }
    render() {
        let CgRt = CodegenRuntime;
        CgRt.pushCont();
        {
            CgRt.beginProps();
            undefined
            CgRt.addProp("style", (
                function () {
                    var result: any = {};
                    result.overflow = "hidden";
                    result.height = 600;
                    return result;
                }()));
            var p7 = CgRt.getProps();
            CgRt.pushCont();
            {
                {
                    CgRt.beginProps();

                    CgRt.addProp("source", { uri: 'http://web.arizona.edu/~tigger/site/images/7thimage.png' });
                    CgRt.addProp("style", (
                        function () {
                            var result: any = {};
                            result.height = 100;
                            result.width = 100;
                            result.left = -50;
                            result.top = -50;
                            result.transform = [{ translateY: 100 }];
                            return result;
                        }()));
                    CgRt.addProp('ref', (v: any) => { this.ball = v; });
                    var p = CgRt.getProps();
                    CgRt.pushElem(CgRt.createElement(CgRt.Imager, p));
                }
            }
            var cl8 = CgRt.popCont();
            CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p7, cl8));
        }

        var cl = CgRt.popCont();
        return CgRt.createElement(CgRt.Viewr, { style: { backgroundColor: "white", flex: 1 } }, cl);
    }
}