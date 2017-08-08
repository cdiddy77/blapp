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
                ],
                toolboxOptions: {
                    blocklyXml: editor.BLOCKLY_XML,
                    monacoToolbox: {
                        arrays: { advanced: false },
                        text: { advanced: false },
                        loops: { advanced: false }
                    }
                }
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
var pxt;
(function (pxt) {
    var editor;
    (function (editor) {
        editor.BLOCKLY_XML = "<xml id=\"blocklyToolboxDefinition\" style=\"display: none\">\n    <category name=\"Loops\" nameid=\"loops\" colour=\"#107c10\" category=\"50\" web-icon=\"\uF01E\" iconclass=\"blocklyTreeIconloops\" expandedclass=\"blocklyTreeIconloops\">\n        <block type=\"controls_repeat_ext\">\n            <value name=\"TIMES\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">4</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"device_while\">\n            <value name=\"COND\">\n                <shadow type=\"logic_boolean\"></shadow>\n            </value>\n        </block>\n        <block type=\"controls_simple_for\">\n            <value name=\"TO\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">4</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"controls_for_of\">\n            <value name=\"LIST\">\n                <shadow type=\"variables_get\">\n                    <field name=\"VAR\">list</field>\n                </shadow>\n            </value>\n        </block>\n    </category>\n    <category name=\"Logic\" nameid=\"logic\" colour=\"#006970\" category=\"49\" web-icon=\"\uF074\" iconclass=\"blocklyTreeIconlogic\" expandedclass=\"blocklyTreeIconlogic\">\n        <block type=\"controls_if\" gap=\"8\">\n            <value name=\"IF0\">\n                <shadow type=\"logic_boolean\">\n                    <field name=\"BOOL\">TRUE</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"controls_if\" gap=\"8\">\n            <mutation else=\"1\"></mutation>\n            <value name=\"IF0\">\n                <shadow type=\"logic_boolean\">\n                    <field name=\"BOOL\">TRUE</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"logic_compare\" gap=\"8\">\n            <value name=\"A\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n            <value name=\"B\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"logic_compare\">\n            <field name=\"OP\">LT</field>\n            <value name=\"A\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n            <value name=\"B\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"logic_operation\" gap=\"8\"></block>\n        <block type=\"logic_operation\" gap=\"8\">\n            <field name=\"OP\">OR</field>\n        </block>\n        <block type=\"logic_negate\"></block>\n        <block type=\"logic_boolean\" gap=\"8\"></block>\n        <block type=\"logic_boolean\">\n            <field name=\"BOOL\">FALSE</field>\n        </block>\n    </category>\n    <category name=\"Variables\" nameid=\"variables\" colour=\"#A80000\" custom=\"VARIABLE\" category=\"48\" iconclass=\"blocklyTreeIconvariables\" expandedclass=\"blocklyTreeIconvariables\">\n    </category>\n    <category name=\"Math\" nameid=\"math\" colour=\"#712672\" category=\"47\" web-icon=\"\uF1EC\" iconclass=\"blocklyTreeIconmath\" expandedclass=\"blocklyTreeIconmath\">\n        <block type=\"math_arithmetic\" gap=\"8\">\n            <value name=\"A\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n            <value name=\"B\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"math_arithmetic\" gap=\"8\">\n            <value name=\"A\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n            <value name=\"B\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n            <field name=\"OP\">MINUS</field>\n        </block>\n        <block type=\"math_arithmetic\" gap=\"8\">\n            <value name=\"A\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n            <value name=\"B\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n            <field name=\"OP\">MULTIPLY</field>\n        </block>\n        <block type=\"math_arithmetic\" gap=\"8\">\n            <value name=\"A\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n            <value name=\"B\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n            <field name=\"OP\">DIVIDE</field>\n        </block>\n        <block type=\"math_number\" gap=\"8\">\n            <field name=\"NUM\">0</field>\n        </block>\n        <category colour=\"#712672\" name=\"More\" nameid=\"more\" iconclass=\"blocklyTreeIconmore\" expandedclass=\"blocklyTreeIconmore\">\n            <block type=\"math_modulo\">\n                <value name=\"DIVIDEND\">\n                    <shadow type=\"math_number\">\n                        <field name=\"NUM\">0</field>\n                    </shadow>\n                </value>\n                <value name=\"DIVISOR\">\n                    <shadow type=\"math_number\">\n                        <field name=\"NUM\">1</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type=\"math_op2\" gap=\"8\">\n                <value name=\"x\">\n                    <shadow type=\"math_number\">\n                        <field name=\"NUM\">0</field>\n                    </shadow>\n                </value>\n                <value name=\"y\">\n                    <shadow type=\"math_number\">\n                        <field name=\"NUM\">0</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type=\"math_op2\" gap=\"8\">\n                <value name=\"x\">\n                    <shadow type=\"math_number\">\n                        <field name=\"NUM\">0</field>\n                    </shadow>\n                </value>\n                <value name=\"y\">\n                    <shadow type=\"math_number\">\n                        <field name=\"NUM\">0</field>\n                    </shadow>\n                </value>\n                <field name=\"op\">max</field>\n            </block>\n            <block type=\"math_op3\">\n                <value name=\"x\">\n                    <shadow type=\"math_number\">\n                        <field name=\"NUM\">0</field>\n                    </shadow>\n                </value>\n            </block>\n        </category>\n    </category>\n    <category name=\"Functions\" nameid=\"functions\" colour=\"#005a9e\" custom=\"PROCEDURE\" category=\"46\" iconclass=\"blocklyTreeIconfunctions\" expandedclass=\"blocklyTreeIconfunctions\">\n    </category>\n    <category colour=\"#66672C\" name=\"Arrays\" nameid=\"arrays\" category=\"45\" web-icon=\"\uF0CB\" iconclass=\"blocklyTreeIconarrays\" expandedclass=\"blocklyTreeIconarrays\">\n        <block type=\"lists_create_with\">\n            <mutation items=\"1\"></mutation>\n            <value name=\"ADD0\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"lists_create_with\">\n            <mutation items=\"2\"></mutation>\n            <value name=\"ADD0\">\n                <shadow type=\"text\">\n                    <field name=\"TEXT\"></field>\n                </shadow>\n            </value>\n            <value name=\"ADD1\">\n                <shadow type=\"text\">\n                    <field name=\"TEXT\"></field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"lists_length\"></block>\n        <block type=\"lists_index_get\">\n            <value name=\"LIST\">\n                <block type=\"variables_get\">\n                    <field name=\"VAR\">list</field>\n                </block>\n            </value>\n            <value name=\"INDEX\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"lists_index_set\">\n            <value name=\"LIST\">\n                <block type=\"variables_get\">\n                    <field name=\"VAR\">list</field>\n                </block>\n            </value>\n            <value name=\"INDEX\">\n                <shadow type=\"math_number\">\n                    <field name=\"NUM\">0</field>\n                </shadow>\n            </value>\n        </block>\n    </category>\n    <category colour=\"#996600\" name=\"Text\" nameid=\"text\" category=\"46\" web-icon=\"\uF035\" iconclass=\"blocklyTreeIcontext\" expandedclass=\"blocklyTreeIcontext\">\n        <block type=\"text\"></block>\n        <block type=\"text_length\">\n            <value name=\"VALUE\">\n                <shadow type=\"text\">\n                    <field name=\"TEXT\">abc</field>\n                </shadow>\n            </value>\n        </block>\n        <block type=\"text_join\">\n            <mutation items=\"2\"></mutation>\n            <value name=\"ADD0\">\n                <shadow type=\"text\">\n                    <field name=\"TEXT\"></field>\n                </shadow>\n            </value>\n            <value name=\"ADD1\">\n                <shadow type=\"text\">\n                    <field name=\"TEXT\"></field>\n                </shadow>\n            </value>\n        </block>\n    </category>\n</xml>";
    })(editor = pxt.editor || (pxt.editor = {}));
})(pxt || (pxt = {}));
