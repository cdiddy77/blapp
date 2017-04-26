/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />


import * as React from 'react';
import '../App.css';
import { AppModel } from '../models/AppModel';
import { TabbedArea, TabPane } from './TabbedArea';
import { Target } from './Target';
import { TestTarget } from './TestTarget';
import * as svcConn from '../util/ServiceConnection';
import { SimplePrompt } from './SimplePrompt';
// import * as Blockly from '../localtypings/blockly';

interface AppProps {
  model: AppModel;
}

interface AppState {
}

class App extends React.Component<AppProps, AppState> {
  blocksArea: HTMLElement;
  previewArea: HTMLElement;

  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.model.initializeBlockly(this.blocksArea);
    this.props.model.on('change', prop => {
      this.forceUpdate();
    });
  }

  render() {
    let modelData = this.props.model.data;
    return (
      <div className="App">
        <div className='row'>
          <div className="App-header">
            <h2>New Blappage du Jour</h2>
            <p>pairing code: {modelData.pairingCode}</p>
          </div>
        </div>
        <div className='row'>
          <div id='blocksArea' ref={(elem) => { this.blocksArea = elem; }} className="col-sm-8"></div>
          <div id='previewArea' ref={(elem) => { this.previewArea = elem; }} className="col-sm-4">
            <TabbedArea activeIndex={1}>
              <TabPane display="Code">
                <div className='codeWrapper'>
                  <pre>{modelData.code}</pre>
                </div>
              </TabPane>
              <TabPane display={modelData.lastEvalError ? 'Preview(ERR)' : 'Preview'}>
                <div><Target model={this.props.model} /></div>
              </TabPane>
              <TabPane display="Test">
                <div><TestTarget /></div>
              </TabPane>
            </TabbedArea>
          </div>
        </div>
        <SimplePrompt {...modelData.simplePrompt}/>
      </div>

    );
  }
}

export default App;
