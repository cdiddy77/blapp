import * as React from 'react';
import { View, Text, Image } from 'react-native';

import { AppModel } from '../models/AppModel';

interface TargetProps {
    model: AppModel;
}
interface TargetState {
    // renderProc: () => any;
    evalErrMsg: Error;
}
export class Target extends React.Component<TargetProps, TargetState>{
    static renderProc: () => any;
    constructor(props: TargetProps) {
        super(props);
        this.state = {
            // renderProc: null,
            evalErrMsg: null
        };
        this.onErrMsgChange = this.onErrMsgChange.bind(this);
        //this.setRenderProc = this.setRenderProc.bind(this);
    }
    componentDidMount() {
        this.props.model.on('evalstatus_change', this.onErrMsgChange);
        this.onErrMsgChange(this.props.model.lastEvalError);
    }
    componentWillUnmount() {
        this.props.model.off('evalstatus_change', this.onErrMsgChange);
    }

    onErrMsgChange(err: Error) {
        if (this.state.evalErrMsg !== err) {
            this.setState({ evalErrMsg: err });
        }
    }

    renderErrorMessage(err: Error) {
        return (
            <View>
                <Text>{err.name} : {err.message}</Text>
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
                // this will trigger a re-render, so 
                // we wait until we are done rendering.
                setTimeout(() => {
                    this.setState({ evalErrMsg: e });
                    this.props.model.lastEvalError = e;
                });
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