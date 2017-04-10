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

  componentDidMount() {
    const options = {
      toolbox: document.getElementById('toolbox'),
      collapse: true,
      comments: true,
      disable: true,
      maxBlocks: Infinity,
      trashcan: true,
      horizontalLayout: false,
      toolboxPosition: 'start',
      css: true,
      media: 'https://blockly-demo.appspot.com/static/media/',
      rtl: false,
      scrollbars: true,
      sounds: true,
      oneBasedIndex: true,
      // grid: {
      //   spacing: 20,
      //   length: 0,
      //   colour: '#ccc',
      //   snap: true
      // }
    };
    var workspace = Blockly.inject(this.blocksArea, options);
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
          <div id='previewArea' className="col-sm-4">preview area</div>
        </div>
      </div>

    );
  }
}

export default App;
