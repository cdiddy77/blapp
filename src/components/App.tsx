/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />


import * as React from 'react';
var logo = require<string>('../logo.svg');
import '../App.css';
import { AppModel } from '../models/AppModel';
// import * as Blockly from '../localtypings/blockly';

interface AppProps {
  model: AppModel;
}

class App extends React.Component<AppProps, {}> {
  blocksArea: HTMLElement;
  previewArea: HTMLElement;

  componentDidMount() {
    this.props.model.initializeBlockly(
      this.blocksArea,
      this.previewArea);

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
            <pre id='codearea' value='preview area'></pre>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
