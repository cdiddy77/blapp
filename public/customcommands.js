/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
var pxt;
(function (pxt) {
    var editor;
    (function (editor) {
        editor.initCustomCommandsAsync = function () {
            var result = {
                commands: {
                    all: [{
                            classValueCb: function () { return "icon openproject"; },
                            iconValueCb: function () { return "folder open large"; },
                            buttonTextCb: function () { return "Assets"; },
                            activateAsync: function () {
                                console.log('assets activate');
                                return Promise.resolve({});
                            }
                        }]
                }
            };
            return Promise.resolve(result);
        };
    })(editor = pxt.editor || (pxt.editor = {}));
})(pxt || (pxt = {}));
