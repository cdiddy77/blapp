/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />


import * as React from 'react';
var logo = require<string>('../logo.svg');
import '../App.css';
import { AppModel } from '../models/AppModel';
import { TabbedArea, TabPane } from './TabbedArea';
// import * as Blockly from '../localtypings/blockly';

interface AppProps {
  model: AppModel;
}
interface AppState {
  code: string;
}

class App extends React.Component<AppProps, AppState> {
  blocksArea: HTMLElement;
  previewArea: HTMLElement;

  constructor(props: AppProps) {
    super(props);
    this.state = { code: '' };
  }
  componentDidMount() {
    this.props.model.initializeBlockly(this.blocksArea);
    this.props.model.on('code_change', newCode => {
      this.setState({ code: newCode });
    });
  }

  render() {
    return (
      <div className="App">
        <div className='row'>
          <div className="App-header">
            <h2>Blapp</h2>
          </div>
        </div>
        <div className='row'>
          <div id='blocksArea' ref={(elem) => { this.blocksArea = elem; }} className="col-sm-8"></div>
          <div id='previewArea' ref={(elem) => { this.previewArea = elem; }} className="col-sm-4">
            <TabbedArea>
              <TabPane display="Code">
                <div>
                  <pre>{this.state.code}</pre>
                </div>
              </TabPane>
              <TabPane display="Preview">
                <div>Contents of Tab 2.</div>
              </TabPane>
            </TabbedArea>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
