/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />


import * as React from 'react';
import '../App.css';
import { AppModel } from '../models/AppModel';
import { TabbedArea, TabPane } from './TabbedArea';
import { Target } from './Target';
import { TestTarget } from './TestTarget';
import * as svcConn from '../util/ServiceConnection';
// import * as Blockly from '../localtypings/blockly';

interface AppProps {
  model: AppModel;
}
interface AppState {
  code: string;
  isInErrorState: boolean;
  pairingCode: string;
}

class App extends React.Component<AppProps, AppState> {
  blocksArea: HTMLElement;
  previewArea: HTMLElement;

  constructor(props: AppProps) {
    super(props);
    this.state = { code: '', isInErrorState: false, pairingCode: null };
  }
  componentDidMount() {
    this.props.model.initializeBlockly(this.blocksArea);
    this.props.model.on('change', prop => {
      if (prop == 'code') {
        this.setState({
          code: this.props.model.data.code,
          isInErrorState: this.props.model.data.lastEvalError != null
        });
      } else if (prop === 'lastEvalError') {
        console.log('evalstatuschange');
        this.setState({ isInErrorState: this.props.model.data.lastEvalError != null });
      } else if (prop === 'pairingCode') {
        console.log('painringCodeChange',this.props.model.data.pairingCode);
        this.setState({ pairingCode: this.props.model.data.pairingCode });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className='row'>
          <div className="App-header">
            <h2>New Blapp City</h2>
            <p>pairing code: {this.state.pairingCode}</p>
          </div>
        </div>
        <div className='row'>
          <div id='blocksArea' ref={(elem) => { this.blocksArea = elem; }} className="col-sm-8"></div>
          <div id='previewArea' ref={(elem) => { this.previewArea = elem; }} className="col-sm-4">
            <TabbedArea activeIndex={1}>
              <TabPane display="Code">
                <div className='codeWrapper'>
                  <pre>{this.state.code}</pre>
                </div>
              </TabPane>
              <TabPane display={this.state.isInErrorState ? 'Preview(ERR)' : 'Preview'}>
                <div><Target model={this.props.model} /></div>
              </TabPane>
              <TabPane display="Test">
                <div><TestTarget /></div>
              </TabPane>
            </TabbedArea>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
