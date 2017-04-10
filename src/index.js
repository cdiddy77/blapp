"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const AppModel_1 = require("./models/AppModel");
const App_1 = require("./components/App");
require("./index.css");
const appModel = new AppModel_1.AppModel();
ReactDOM.render(React.createElement(App_1.default, { model: appModel }), document.getElementById('root'));
//# sourceMappingURL=index.js.map