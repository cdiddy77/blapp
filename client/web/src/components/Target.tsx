import * as React from 'react';

import { AppModel } from '../models/AppModel';
import { CodegenRuntime } from '../../../shared/src/util/CodegenRuntime';

interface TargetProps {
    model: AppModel;
}
interface TargetState {
    // renderProc: () => any;
    evalErrMsg: Error;
}
export class Target extends React.Component<TargetProps, TargetState>{
    constructor(props: TargetProps) {
        super(props);
        this.state = {
            // renderProc: null,
            evalErrMsg: null
        };
        this.onModelChange = this.onModelChange.bind(this);
        //this.setRenderProc = this.setRenderProc.bind(this);
    }
    componentDidMount() {
        this.props.model.on('change', this.onModelChange);
        this.onModelChange('lastEvalError');

    }
    componentWillUnmount() {
        this.props.model.off('change', this.onModelChange);
    }

    onModelChange(prop: string) {
        if (prop == 'lastEvalError') {
            if (this.state.evalErrMsg !== this.props.model.data.lastEvalError) {
                this.setState({ evalErrMsg: this.props.model.data.lastEvalError });
            }
        }
    }

    renderErrorMessage(err: Error) {
        return (
            <div className='errorMessage'>
                <span>{err.name} : {err.message}</span>
            </div>
        );
    }

    render() {
        if (this.state.evalErrMsg != null) {
            return this.renderErrorMessage(this.state.evalErrMsg);
        }
        else {
            return (
                <div id="webglTarget" style={{width:'100%'}}></div>
            );
        }
    }
}