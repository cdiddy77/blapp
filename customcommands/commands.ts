/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
namespace pxt.editor {
    initCustomCommandsAsync = function (): Promise<pxt.editor.CustomCommandsInitResult> {
        let result: CustomCommandsInitResult = {
            commands: {
                all: [{
                    classValueCb: () => "icon openproject",
                    iconValueCb: () => "folder open large",
                    buttonTextCb: () => "Assets",
                    activateAsync() {
                        console.log('assets activate');
                        return Promise.resolve({});
                    }
                }]
            }
        }
        return Promise.resolve<pxt.editor.CustomCommandsInitResult>(result);
    };
}
