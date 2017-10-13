import * as React from 'react';
import { AppModel } from './AppModel';
import { Target } from './Target';
import * as constants from './../../shared/src/util/constants'

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
        let pairLink = `${constants.serverHost}/pair.html?pairingCode=${modelData.pairingCode}`;
        if (this.state.isDisplayShareMessage) {
            let shareLink = `${constants.serverHost}/pair.html?pairingCode=!${modelData.sharingCode}`;
            displayShareMsg = (
                <div id='sharingMsg'>
                    Your project was shared.
                    <ul>
                        <li>To access it from the Android App, enter pairing code: <em>!{modelData.sharingCode}</em></li>
                        <li>To access it via a web browser on your phone or PC, go to:<br /> <a target='_blank' href={shareLink}>{shareLink}</a></li>
                    </ul>
                    <button type='button' className='btn btn-link' onClick={() => this.setState({ isDisplayShareMessage: false })}>done</button>
                </div>
            );
        }

        return (
            <div id='appRoot'>
                <div id='pairingCode'>Pairing code: <a target='_blank' href={pairLink}>{modelData.pairingCode}</a>&nbsp;&nbsp;&nbsp;
                    <button type='button' className='btn btn-link' onClick={() => this.props.model.resetPairingCode()}>reset</button>
                    <button type='button' className='btn btn-link' onClick={() => this.props.model.shareLink()}>share</button>
                </div>
                {displayShareMsg}
                <div className='previewWrapper'><Target model={this.props.model} /></div>
                <div id='bottomToolbar'><a className='btn btn-link' href='/downloadapk'>Download Android APK</a></div>
            </div>
        );
    }
}