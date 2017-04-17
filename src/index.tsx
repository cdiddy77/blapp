import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppModel } from './models/AppModel';
import App from './components/App';
import * as svcConn from './util/ServiceConnection';
import './index.css';

const appModel: AppModel = new AppModel();
svcConn.init(appModel);

ReactDOM.render(
  <App model={appModel} />,
  document.getElementById('root')
);
