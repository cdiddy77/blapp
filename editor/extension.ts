/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

const groupDirectionOptions = [
    ["column", "UIGroupDirection.Column"],
    ["row", "UIGroupDirection.Row"],
    ["reverse-column", "UIGroupDirection.ReverseColumn"],
    ["reverse-row", "UIGroupDirection.ReverseRow"]
];

const groupClassOptions= [
    ["panel", "UIGroupClass.Panel"],
    ["frame", "UIGroupClass.Frame"],
    ["framed panel", "UIGroupClass.Framepanel"],
    ["header", "UIGroupClass.Header"],
    ["footer", "UIGroupClass.Footer"],
    ["row", "UIGroupClass.Row"],
    ["none", "UIGroupClass.None"]
];

const textClassOptions: [string, string][] = [
    ["label", "UITextClass.Label"],
    ["button", "UITextClass.Button"],
    ["button (accented)", "UITextClass.AccentButton"],
    ["menu", "UITextClass.Menu"],
    ["caption", "UITextClass.Caption"],
    ["body", "UITextClass.Body"],
    ["subtitle", "UITextClass.Subtitle"],
    ["title", "UITextClass.Title"],
    ["headline", "UITextClass.Headline"],
    ["(none)", "UITextClass.None"],
];

const buttonClassOptions: [string, string][]  = [
    ["small", "UIButtonClass.Small"],
    ["medium", "UIButtonClass.Medium"],
    ["large", "UIButtonClass.Large"],
    ["small (accented)", "UIButtonClass.SmallAccent"],
    ["medium (accented)", "UIButtonClass.MediumAccent"],
    ["large (accented)", "UIButtonClass.LargeAccent"],
    ["(none)", "UIButtonClass.None"],
];

class UIBlockDef {
    private fields: any[] = [];
    private message: string = "";
    private currentArg = 1;

    constructor (public type: string, private colour: string, private label: string) {
        this.message = label;
    }

    field(def: any, label?: string): this {
        this.fields.push(def);

        if (label) {
            this.message += " " + label;
        }

        this.message += " %" + this.currentArg++;

        return this;
    }

    handler(name: string, label?: string): this {
        return this.field({
            type: "input_statement",
            name: "HANDLER" + name
        }, label);
    }

    input(name: string, check: string, label?: string): this {
        return this.field({
            type: "input_value",
            name: name,
            check: check
        }, label);
    }

    checkbox(name: string, checked = false, label?: string): this {
        return this.field({
            "type": "field_checkbox",
            "name": name,
            "checked": checked
        }, label);
    }

    textField(name: string, defaultValue: string, label?: string) {
        return this.field({
            "type": "field_input",
            "name": name,
            "text": defaultValue
        }, label);
    }

    dropdown(values: [string, string][]) {
        return this.field({
            "type": "field_dropdown",
            "name": "direction",
            "options": values
        })
    }

    color(color: string): this {
        this.colour = color;
        return this;
    }

    toBlock() {
        const that = this;
        return {
            id: that.type,
            init: function () {
                this.jsonInit({
                    "type": that.type,
                    "message0": that.message,
                    "args0": that.fields,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": that.colour
                });
            }
        }
    }
}


namespace pxt.editor {
    initExtensionsAsync = function(opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading blapp target extensions...')
        const res: pxt.editor.ExtensionResult = {
            blockDefinitions: [
            new UIBlockDef("scroller_element", "#80A55B", "SCROLLER")
                .textField("name", "name")
                .checkbox("flex", false, "flex")
                .checkbox("horz", false, "horizontal")
                .field(groupClassOptions)
                .input("style", "Array", "style")
                .handler("children", "children")
                .toBlock(),
            new UIBlockDef("group_element", "#5B6DA5", "GROUP")
                .textField("name", "name")
                .checkbox("flex", false, "flex")
                .field(groupDirectionOptions)
                .field(groupClassOptions)
                .input("style", "Array", "style")
                .handler("children", "children")
                .toBlock(),
            new UIBlockDef("button_element", "#80A55B", "BUTTON")
                .textField("name", "name")
                .checkbox("flex", false, "flex")
                .dropdown(buttonClassOptions)
                .input("style", "Array", "style")
                .handler("children", "children")
                .handler("whenPressed", "when pressed")
                .toBlock(),
            new UIBlockDef("text_element", "#805BA5", "TEXT")
                .checkbox("flex", false, "flex")
                .dropdown(textClassOptions)
                .input("value", "String", "")
                .input("style", "Array", "style")
                .toBlock()]
        };
        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }
}

