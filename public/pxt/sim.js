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
    })(UI = pxsim.UI || (pxsim.UI = {}));
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
