import * as React from 'react';
import { View, Text } from 'react-native';

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
        try {
            eval(newCode);
            this.setState({ evalErrMsg: null });
        } catch (e) {
            this.setState({ evalErrMsg: e.toString() });
        }
    }
    // setRenderProc(newRenderProc: () => any) {
    //     console.log('setRenderProc', this);
    //     this.setState({
    //         renderProc: newRenderProc.bind(this)
    //     });
    // }

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
        const someText = 'No renderee';
        return (
            <View>
                <Text>{someText}</Text>
            </View>
        );
    }
}