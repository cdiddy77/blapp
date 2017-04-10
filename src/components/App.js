/// <reference path="../refs.d.ts" />
/// <reference path="../localtypings/blockly.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
var logo = require('../logo.svg');
require("../App.css");
class App extends React.Component {
    componentDidMount() {
        this.props.model.initializeBlockly(this.blocksArea, this.previewArea);
    }
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: "App-header" },
                    React.createElement("h2", null, "Blapp"))),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { id: 'blocksArea', ref: (elem) => { this.blocksArea = elem; }, className: "col-sm-8" }),
                React.createElement("div", { id: 'previewArea', ref: (elem) => { this.previewArea = elem; }, className: "col-sm-4" },
                    React.createElement("textarea", { id: 'codearea', value: 'preview area' })))));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map