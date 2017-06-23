import * as React from 'react';
import { AppModel } from './AppModel';
import { TabbedArea, TabPane } from '../components/TabbedArea';
import { Target } from './Target';

interface AppProps {
    model: AppModel;
}


interface AppState {
}


export default class App extends React.Component<AppProps, AppState>{
    componentDidMount() {
        this.props.model.on('change', prop => {
            this.forceUpdate();
        });
    }

    render() {
        let modelData = this.props.model.data;
        return (
            <div id='appRoot'>
                <div id='pairingCode'>Pairing code: {modelData.pairingCode}</div>
                <TabbedArea activeIndex={1}>
                    <TabPane display="Code">
                        <div className='codeWrapper'>
                            <pre className='codePre'>{modelData.code}</pre>
                        </div>
                    </TabPane>
                    <TabPane display={modelData.lastEvalError ? 'Preview(ERR)' : 'Preview'}>
                        <div className='previewWrapper'><Target model={this.props.model} /></div>
                    </TabPane>
                </TabbedArea>
            </div>
        );
    }
}