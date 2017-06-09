import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppModel } from './AppModel';
import App from './App';
import * as svcConn from '../util/ServiceConnection';
import './index.css';

const appModel: AppModel = new AppModel();
svcConn.init(appModel);
// add a comment
ReactDOM.render(
    <App model={appModel} />,
    document.getElementById('root')
);