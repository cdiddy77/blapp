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
}

class App extends React.Component<AppProps, AppState> {
  blocksArea: HTMLElement;
  previewArea: HTMLElement;

  constructor(props: AppProps) {
    super(props);
    this.state = { code: '', isInErrorState: false };
  }
  componentDidMount() {
    this.props.model.initializeBlockly(this.blocksArea);
    this.props.model.on('code_change', newCode => {
      this.setState({
        code: newCode,
        isInErrorState: this.props.model.lastEvalError != null
      });
    });
    this.props.model.on('evalstatus_change', () => {
      console.log('evalstatuschange');
      this.setState({ isInErrorState: this.props.model.lastEvalError != null });
    });
  }

  render() {
    return (
      <div className="App">
        <div className='row'>
          <div className="App-header">
            <h2>Blapp</h2>
            <p>pairing code: {svcConn.getPairingCode()}</p>
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
                <div><TestTarget/></div>
              </TabPane>
             </TabbedArea>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
