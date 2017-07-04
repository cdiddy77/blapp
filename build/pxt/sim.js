/// <reference path="../libs/core/types.d.ts"/>
var pxsim;
(function (pxsim) {
    var UI;
    (function (UI) {
        //%
        function userInterfaceImpl(theme, body) {
        }
        UI.userInterfaceImpl = userInterfaceImpl;
        //%
        function groupElementImpl(name, direction, flex, className, style, children) {
        }
        UI.groupElementImpl = groupElementImpl;
        //%
        function scrollerElementImpl(name, flex, className, horz, style, children) {
        }
        UI.scrollerElementImpl = scrollerElementImpl;
        //%
        function buttonElementImpl(name, flex, className, style, children, whenPressed) {
        }
        UI.buttonElementImpl = buttonElementImpl;
        //%
        function textElementImpl(flex, className, style, value) {
        }
        UI.textElementImpl = textElementImpl;
        //%
        function textInputElementImpl(name, flex, className, style, initialValue, whenTextChanges) {
        }
        UI.textInputElementImpl = textInputElementImpl;
        //%
        function imageElementImpl(flex, width, height, style, url) {
        }
        UI.imageElementImpl = imageElementImpl;
        //%
        function dividerElementImpl(className, style) {
        }
        UI.dividerElementImpl = dividerElementImpl;
        //%
        function updateUIImpl() {
        }
        UI.updateUIImpl = updateUIImpl;
    })(UI = pxsim.UI || (pxsim.UI = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var Style;
    (function (Style) {
        //%
        function styleDefImpl(body) {
            return null;
        }
        Style.styleDefImpl = styleDefImpl;
    })(Style = pxsim.Style || (pxsim.Style = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var Data;
    (function (Data) {
        //%
        function getSharedStringImpl(name) {
            return "sample";
        }
        Data.getSharedStringImpl = getSharedStringImpl;
        //%
        function getSharedNumberImpl(name) {
            return -1;
        }
        Data.getSharedNumberImpl = getSharedNumberImpl;
        //%
        function getSharedBooleanImpl(name) {
            return false;
        }
        Data.getSharedBooleanImpl = getSharedBooleanImpl;
        //%
        function getSharedListImpl(name) {
            return [];
        }
        Data.getSharedListImpl = getSharedListImpl;
        //%
        function setSharedStringImpl(name, v) {
        }
        Data.setSharedStringImpl = setSharedStringImpl;
        //%
        function setSharedNumberImpl(name, v) {
        }
        Data.setSharedNumberImpl = setSharedNumberImpl;
        //%
        function setSharedBooleanImpl(name, v) {
        }
        Data.setSharedBooleanImpl = setSharedBooleanImpl;
        //%
        function setSharedListImpl(name, v) {
        }
        Data.setSharedListImpl = setSharedListImpl;
        //%
        function onSharedVariableChangeImpl(name, body) {
        }
        Data.onSharedVariableChangeImpl = onSharedVariableChangeImpl;
    })(Data = pxsim.Data || (pxsim.Data = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
var pxsim;
(function (pxsim) {
    pxsim.initCurrentRuntime = () => {
        pxsim.runtime.board = new Board();
    };
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    class Board extends pxsim.BaseBoard {
        constructor() {
            super();
        }
        initAsync(msg) {
            console.log('messing up  simulator');
            return Promise.resolve();
        }
        updateView() {
        }
    }
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
