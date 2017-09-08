import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppModel } from './AppModel';
import App from './App';
import * as svcConn from './util/ServiceConnection';
import './index.css';
import * as board from './Board';

const appModel: AppModel = new AppModel();
svcConn.init(appModel);
board.registerBoard(appModel);

// add a comment
ReactDOM.render(
    <App model={appModel} />,
    document.getElementById('root')
);