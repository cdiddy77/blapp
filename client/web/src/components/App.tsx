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
import { InputFilePrompt } from './InputFilePrompt';

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
    window.addEventListener('resize', this.onResize.bind(this), false);
  }

  onResize(ev: Event) {
    this.forceUpdate();
  }

  render() {
    let width = window.innerWidth;
    let divider = width * 2 / 3;
    let headerHeight = 60;
    let footerHeight = 60;
    let modelData = this.props.model.data;
    return (
      <div className="App">
        <div className="App-header">
          <p>Le Blappage du Jour</p>
          <p>pairing code: {modelData.pairingCode}</p>
        </div>
        <div id='blocksArea' ref={(elem) => { this.blocksArea = elem; }}
          style={{
            position: 'absolute',
            left: 0,
            width: divider,
            height: window.innerHeight - (headerHeight + footerHeight),
            top: headerHeight
          }}></div>
        <div id='previewArea' ref={(elem) => { this.previewArea = elem; }}
          style={{
            position: 'absolute',
            left: divider,
            width: width - divider,
            height: window.innerHeight - (headerHeight + footerHeight),
            top: headerHeight
          }}>
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
        <SimplePrompt {...modelData.simplePrompt} />
        <InputFilePrompt {...modelData.inputFilePrompt}/>
        <footer className="footer">
          <div className="container">
           <button type='button' className='btn btn-primary' onClick={()=>this.props.model.clearWorkspace()}>Clear all</button>
           <button type='button' className='btn btn-primary' onClick={()=>this.props.model.saveWorkspaceToFile()}>Save</button>
           <button type='button' className='btn btn-primary' onClick={()=>this.props.model.loadWorkspaceFromFile()}>Load</button>
          </div>
        </footer>
      </div>

    );
  }
}

export default App;
