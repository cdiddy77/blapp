import * as React from 'react';
import { View, Text, Image } from 'react-native';

import { AppModel } from '../models/AppModel';

interface TargetProps {
    model: AppModel;
}
interface TargetState {
    // renderProc: () => any;
    evalErrMsg: string;
}
export class Target extends React.Component<TargetProps, TargetState>{
    static renderProc: () => any;
    constructor(props: TargetProps) {
        super(props);
        this.state = {
            // renderProc: null,
            evalErrMsg: null
        };
        this.onCodeChange = this.onCodeChange.bind(this);
        //this.setRenderProc = this.setRenderProc.bind(this);
    }
    componentDidMount() {
        this.props.model.on('code_change', this.onCodeChange);
        this.onCodeChange(this.props.model.code);
    }
    componentWillUnmount() {
        this.props.model.off('code_change', this.onCodeChange);
    }

    onCodeChange(newCode: string) {
    }

    renderErrorMessage(errMsg: string) {
        return (
            <View>
                <Text>{errMsg}</Text>
            </View>
        );
    }

    render() {
        let result: any;
        if (this.state.evalErrMsg != null) {
            return this.renderErrorMessage(this.state.evalErrMsg);
        }
        else if (Target.renderProc != null) {
            try {
                result = Target.renderProc();
                return result;
            } catch (e) {
                return this.renderErrorMessage(e);
            }
        }
        const someText = 'No UI';
        return (
            <View>
                <Text>{someText}</Text>
            </View>
        );
    }
}