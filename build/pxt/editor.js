/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
var groupDirectionOptions = [
    ["column", "UIGroupDirection.Column"],
    ["row", "UIGroupDirection.Row"],
    ["reverse-column", "UIGroupDirection.ReverseColumn"],
    ["reverse-row", "UIGroupDirection.ReverseRow"]
];
var groupClassOptions = [
    ["panel", "UIGroupClass.Panel"],
    ["frame", "UIGroupClass.Frame"],
    ["framed panel", "UIGroupClass.Framepanel"],
    ["header", "UIGroupClass.Header"],
    ["footer", "UIGroupClass.Footer"],
    ["row", "UIGroupClass.Row"],
    ["none", "UIGroupClass.None"]
];
var textClassOptions = [
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
var buttonClassOptions = [
    ["small", "UIButtonClass.Small"],
    ["medium", "UIButtonClass.Medium"],
    ["large", "UIButtonClass.Large"],
    ["small (accented)", "UIButtonClass.SmallAccent"],
    ["medium (accented)", "UIButtonClass.MediumAccent"],
    ["large (accented)", "UIButtonClass.LargeAccent"],
    ["(none)", "UIButtonClass.None"],
];
var UIBlockDef = (function () {
    function UIBlockDef(type, colour, label) {
        this.type = type;
        this.colour = colour;
        this.label = label;
        this.fields = [];
        this.message = "";
        this.currentArg = 1;
        this.message = label;
    }
    UIBlockDef.prototype.field = function (def, label) {
        this.fields.push(def);
        if (label) {
            this.message += " " + label;
        }
        this.message += " %" + this.currentArg++;
        return this;
    };
    UIBlockDef.prototype.handler = function (name, label) {
        return this.field({
            type: "input_statement",
            name: "HANDLER" + name
        }, label);
    };
    UIBlockDef.prototype.input = function (name, check, label) {
        return this.field({
            type: "input_value",
            name: name,
            check: check
        }, label);
    };
    UIBlockDef.prototype.checkbox = function (name, checked, label) {
        if (checked === void 0) { checked = false; }
        return this.field({
            "type": "field_checkbox",
            "name": name,
            "checked": checked
        }, label);
    };
    UIBlockDef.prototype.textField = function (name, defaultValue, label) {
        return this.field({
            "type": "field_input",
            "name": name,
            "text": defaultValue
        }, label);
    };
    UIBlockDef.prototype.variableField = function (name, defaultValue, label) {
        return this.field({
            "type": "field_variable",
            "name": name,
            "variable": defaultValue
        }, label);
    };
    UIBlockDef.prototype.dropdown = function (name, values, label) {
        return this.field({
            "type": "field_dropdown",
            "name": name,
            "options": values
        }, label);
    };
    UIBlockDef.prototype.color = function (color) {
        this.colour = color;
        return this;
    };
    UIBlockDef.prototype.toBlock = function (compiler) {
        var that = this;
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
            },
            compiler: compiler
        };
    };
    return UIBlockDef;
}());
var pxt;
(function (pxt) {
    var editor;
    (function (editor) {
        editor.initExtensionsAsync = function (opts) {
            pxt.debug('loading blapp target extensions...');
            var res = {
                blockDefinitions: [
                    new UIBlockDef("scroller_element", "#80A55B", "SCROLLER")
                        .textField("name", "")
                        .checkbox("flex", false, "flex")
                        .checkbox("horz", false, "horizontal")
                        .dropdown("className", groupClassOptions)
                        .input("style", "Array", "style")
                        .handler("children", "children")
                        .toBlock(),
                    new UIBlockDef("group_element", "#5B6DA5", "GROUP")
                        .textField("name", "")
                        .dropdown("direction", groupDirectionOptions, "dir")
                        .checkbox("flex", false, "flex")
                        .dropdown("className", groupClassOptions)
                        .input("style", "Array", "style")
                        .handler("children", "children")
                        .toBlock(),
                    new UIBlockDef("button_element", "#80A55B", "BUTTON")
                        .textField("name", "")
                        .checkbox("flex", false, "flex")
                        .dropdown("className", buttonClassOptions)
                        .input("style", "Array", "style")
                        .handler("children", "children")
                        .handler("whenPressed", "when pressed")
                        .toBlock(),
                    new UIBlockDef("text_element", "#805BA5", "TEXT")
                        .checkbox("flex", false, "flex")
                        .dropdown("className", textClassOptions)
                        .input("value", "String", "")
                        .input("style", "Array", "style")
                        .toBlock(),
                    new UIBlockDef("for_each_string", "#107c10", "for each string ")
                        .variableField("cbValue", "value")
                        .variableField("cbIndex", "index")
                        .input("array", "Array", "in")
                        .handler("", "do")
                        .toBlock(new ForEachCompiler())
                ]
            };
            return Promise.resolve(res);
        };
    })(editor = pxt.editor || (pxt.editor = {}));
})(pxt || (pxt = {}));
var ForEachCompiler = (function () {
    function ForEachCompiler() {
    }
    ForEachCompiler.prototype.getDeclaredVariables = function (block) {
        var value = block.getFieldValue("cbValue");
        var index = block.getFieldValue("cbIndex");
        return [
            { name: value, type: "string" },
            { name: index, type: "number" }
        ];
    };
    ForEachCompiler.prototype.compileBlock = function (block, comments, compiler) {
        var value = block.getFieldValue("cbValue");
        var index = block.getFieldValue("cbIndex");
        var arrTarget = block.getInputTargetBlock("array");
        var array = arrTarget ? compiler.compileExpression(arrTarget, comments) : pxt.blocks.mkText("[]");
        var stmtTarget = block.getInputTargetBlock("HANDLER");
        var statements = stmtTarget ? compiler.compileCodeBlock(stmtTarget) : pxt.blocks.mkBlock([]);
        return pxt.blocks.Helpers.namespaceCall("Data", "forEachString", [
            array,
            pxt.blocks.mkGroup([
                pxt.blocks.mkText("function (" + value + ": string, " + index + ": number)"),
                statements
            ])
        ], false);
    };
    return ForEachCompiler;
}());
