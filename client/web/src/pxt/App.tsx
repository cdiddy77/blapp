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
                <div id='pairingCode'>Pairing code: {modelData.pairingCode}&nbsp;&nbsp;&nbsp;
                    <button type='button' className='btn btn-link' onClick={() => this.props.model.resetPairingCode()}>reset</button>
                </div><br />&nbsp;
                <div className='previewWrapper'><Target model={this.props.model} /></div>
            </div>
        );
    }
}