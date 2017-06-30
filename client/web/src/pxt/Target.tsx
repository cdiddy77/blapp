import * as React from 'react';
import { View, Text, Image, Button } from 'react-native';

import { AppModel } from './AppModel';
import { CodegenRuntime } from '../../../shared/src/util/CodegenRuntime';

interface TargetProps {
    model: AppModel;
}
interface TargetState {
    // renderProc: () => any;
    evalErrMsg: Error;
    duringRender: boolean;
}
export class Target extends React.Component<TargetProps, TargetState>{
    constructor(props: TargetProps) {
        super(props);
        this.state = {
            // renderProc: null,
            evalErrMsg: null,
            duringRender: false
        };
        this.onModelChange = this.onModelChange.bind(this);
        //this.setRenderProc = this.setRenderProc.bind(this);
    }
    componentDidMount() {
        this.props.model.on('change', this.onModelChange);
        this.onModelChange('lastEvalError');

        CodegenRuntime.setForceTargetUpdateProc(() => {
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.props.model.off('change', this.onModelChange);
        CodegenRuntime.setForceTargetUpdateProc(null);
    }

    onModelChange(prop: string) {
        if (prop == 'lastEvalError') {
            if (this.state.evalErrMsg !== this.props.model.data.lastEvalError) {
                this.setState({ evalErrMsg: this.props.model.data.lastEvalError });
            }
        } else if (prop == 'code') {
            // this.forceUpdate();
        }
    }

    renderErrorMessage(err: Error, duringRender: boolean) {
        return (
            <View>
                <Text>{duringRender ? 'RENDER:' : 'PRERENDER:'}{err.name} : {err.message}</Text>
            </View>
        );
    }

    render() {
        let result: any;
        if (this.state.evalErrMsg != null) {
            return this.renderErrorMessage(this.state.evalErrMsg, this.state.duringRender);
        } else if (CodegenRuntime.getTargetRenderProc() != null) {
            try {
                result = CodegenRuntime.getTargetRenderProc()();
                return result;
            } catch (e) {
                // this will trigger a re-render, so 
                // we wait until we are done rendering.
                setTimeout(() => {
                    this.setState({ evalErrMsg: e, duringRender: true });
                    this.props.model.setProperty('lastEvalError', e);
                });
                return this.renderErrorMessage(e, true);
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