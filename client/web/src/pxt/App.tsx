import * as React from 'react';
import { AppModel } from './AppModel';
import { TabbedArea, TabPane } from '../components/TabbedArea';
import { Target } from './Target';
import * as constants from '../../../shared/src/util/constants'

interface AppProps {
    model: AppModel;
}


interface AppState {
    isDisplayShareMessage: boolean;
}


export default class App extends React.Component<AppProps, AppState>{
    componentWillMount() {
        this.setState({ isDisplayShareMessage: false });
    }
    componentDidMount() {
        this.props.model.on('change', prop => {
            if (prop == 'sharingCode') {
                this.setState({ isDisplayShareMessage: true });
            }
            this.forceUpdate();
        });
    }

    render() {
        let modelData = this.props.model.data;
        let displayShareMsg = null;
        if (this.state.isDisplayShareMessage) {
            let link = `${constants.serverHost}/pxt/pair.html?pairingCode=!${modelData.sharingCode}`;
            displayShareMsg = (
                <div id='sharingMsg'>
                    Your project was shared.
                    <ul>
                        <li>To access it from the Android App, enter pairing code: <em>!{modelData.sharingCode}</em></li>
                        <li>To access it via a web browser on your phone or PC, go to:<br /> <a href={link}>{link}</a></li>
                    </ul>
                    <button type='button' className='btn btn-link' onClick={() => this.setState({ isDisplayShareMessage: false })}>done</button>
                </div>
            );
        }

        return (
            <div id='appRoot'>
                <div id='pairingCode'>Pairing code: {modelData.pairingCode}&nbsp;&nbsp;&nbsp;
                    <button type='button' className='btn btn-link' onClick={() => this.props.model.resetPairingCode()}>reset</button>
                    <button type='button' className='btn btn-link' onClick={() => this.props.model.shareLink()}>share</button>
                </div>
                {displayShareMsg}
                <div className='previewWrapper'><Target model={this.props.model} /></div>
            </div>
        );
    }
}