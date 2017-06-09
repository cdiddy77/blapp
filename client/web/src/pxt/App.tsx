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
    render() {
        let modelData = this.props.model.data;
        return (
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
        );
    }
}