/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />


import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../App.css';
import { AppModel } from '../models/AppModel';
import { TabbedArea, TabPane } from './TabbedArea';
import { Target } from './Target';
import { TestTarget } from './TestTarget';
// import * as svcConn from '../util/ServiceConnection';
import { SimplePrompt } from './SimplePrompt';
import { InputFilePrompt } from './InputFilePrompt';
import * as constants from '../../../shared/src/util/constants';

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
    let divider = width * 3 / 5;
    let headerHeight = 60;
    let footerHeight = 60;
    let modelData = this.props.model.data;
    let pairLink = `${constants.serverHost}/pair.html?pairingCode=${modelData.pairingCode}`;
    
    return (
      <div className="App">
        <div className="App-header">
          <p className='rightLink'>
            pairing code: <a target='_blank' href={pairLink}>{modelData.pairingCode}</a>&nbsp;
               <button type='button' className='btn btn-link' onClick={() => this.props.model.resetPairingCode()}>New Pairing Code</button>
          </p>
          <p>BLAPP 3D</p>
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
            overflow: 'scroll',
            top: headerHeight
          }}>
          <TabbedArea activeIndex={0}>
            <TabPane display={modelData.lastEvalError ? 'Preview(ERR)' : 'Preview'}>
              <div className='previewWrapper'><Target model={this.props.model} /></div>
            </TabPane>
            <TabPane display="Code">
              <div className='codeWrapper'>
                <pre className='codePre'>{modelData.code}</pre>
              </div>
            </TabPane>
            {/* <TabPane display="Test">
              <div><TestTarget /></div>
            </TabPane> */}
          </TabbedArea>
        </div>
        <SimplePrompt {...modelData.simplePrompt} />
        <InputFilePrompt {...modelData.inputFilePrompt} />
        <footer className="footer">
          <div className="container">
            <button type='button' className='btn btn-primary' onClick={() => this.props.model.clearWorkspace()}>Clear all</button>
            <button type='button' className='btn btn-primary' onClick={() => this.props.model.saveWorkspaceToFile()}>Save</button>
            <button type='button' className='btn btn-primary' onClick={() => this.props.model.loadWorkspaceFromFile(true)}>Clear and Load</button>
            <button type='button' className='btn btn-primary' onClick={() => this.props.model.loadWorkspaceFromFile(false)}>Add-load</button>
            <button type='button' className='btn btn-primary' onClick={() => this.props.model.undo()}>Undo</button>
            <button type='button' className='btn btn-primary' onClick={() => this.props.model.redo()}>Redo</button>
            <button type='button' className='btn btn-primary' onClick={() => this.props.model.resetApplication()}>
              <img src='/icons/dark/appbar.flag.wavy.png' style={{ width: 20, height: 20 }} />
              Reset Application
              </button>
            <CSSTransitionGroup
              transitionName='statusMessage'
              transitionEnterTimeout={0}
              transitionLeaveTimeout={0}>
              {modelData.statusMessage && <span>{modelData.statusMessage}</span>}
            </CSSTransitionGroup>
          </div>
        </footer>
      </div>

    );
  }
}

export default App;
