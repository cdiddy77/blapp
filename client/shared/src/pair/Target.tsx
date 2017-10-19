import * as React from 'react';

import { AppModel } from './AppModel';
import { styles } from './styles';
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
        this.onModelPropChange = this.onModelPropChange.bind(this);
        //this.setRenderProc = this.setRenderProc.bind(this);
    }
    componentDidMount() {
        this.props.model.on('change', this.onModelPropChange);
        this.onModelPropChange('lastEvalError');

     }
    componentWillUnmount() {
        this.props.model.off('change', this.onModelPropChange);
   }

    onModelPropChange(prop: string) {
        if (prop === 'lastEvalError') {
            if (this.state.evalErrMsg !== this.props.model.lastEvalError) {
                this.setState({ evalErrMsg: this.props.model.lastEvalError });
            }
        }else if(prop==='code'){
            // nothing to do. The re-render is caused at the App level
        }
    }

    renderErrorMessage(err: Error,context:string) {
        return (
            <div>
                <span style={[styles.targetErrorText]}>{context} | {err.name} : {err.message} {JSON.stringify(err)}</span>
            </div>
        );
    }

    render() {
        if (this.state.evalErrMsg != null) {
            return this.renderErrorMessage(this.state.evalErrMsg,'load');
        }
        else {
            return (
                <div id="webglTarget" style={{
                    position:'absolute',
                    left:0,
                    top:0,
                    width:'100%',
                    height:'100%'
                }}>foobar foobar foobar foobar foobar 
                foobar foobar foobar foobar foobar foobar foobar 
                foobar foobar foobar foobar foobar foobar foobar
                 foobar foobar foobar foobar foobar foobar foobar foobar
                  foobar foobar foobar foobar foobar foobar foobar foobar
                   foobar foobar foobar foobar foobar foobar foobar foobar
                    foobar foobar foobar foobar foobar foobar
                     foobar foobar foobar foobar foobar foobar foobar foobar
                      foobar foobar foobar foobar foobar foobar foobar
                       foobar foobar foobar foobar foobar foobar foobar foobar 
                       </div>
            );
        }
    }
}