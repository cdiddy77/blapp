/// <reference path="../localtypings/blockly.d.ts" />

import * as jsutil from '../../../shared/src/util/jsutil';
import { BlocklyConfig } from './BlocklyConfig';

export namespace UIBlockConfig {

    interface UIBlockOptPropDesc {
        name: string;
        displayName: string;
        type: 'val' | 'func' | 'text' | 'enum' | 'bool';
        enumVals?: string[][];
        defaultVal?: any;
    }
    class UIBlockDesc {
        optionalProps: jsutil.Map<UIBlockOptPropDesc>;
    }

    interface UIBlockMutateInfo {
        descriptorName: string;
        installedProps: string[];
    }

    class OptPropMutatorItemBlock extends Blockly.Block {
        desc_?: UIBlockOptPropDesc;
    }

    var friendlyThemePropDesc: UIBlockOptPropDesc = {
        name: 'theme',
        displayName: 'theme',
        type: 'enum',
        enumVals: [
            ['first', 'firstTheme']
        ]
    };
    var friendlyStylePropDesc: UIBlockOptPropDesc = {
        name: 'style',
        displayName: 'visuals',
        type: 'val'
    };

    // FRIENDLY : HERE BE block descriptors
    var uiBlockDescriptors: jsutil.Map<UIBlockDesc> = {
        // FRIENDLY : group
        'friendly_group_element': {
            optionalProps: {
                theme: friendlyThemePropDesc,
                style: friendlyStylePropDesc,
                onLayout: {
                    name: 'onLayout',
                    displayName: 'when sized',
                    type: 'func'
                }
            }
        },
        // FRIENDLY : scroller
        'friendly_scroller_element': {
            optionalProps: {
                theme: friendlyThemePropDesc,
                style: friendlyStylePropDesc,
                horizontal: {
                    name: 'horizontal',
                    displayName: 'should scroll horizontally',
                    type: 'bool'
                },
                // inherited from view_element ///////
                pointerEvents: {
                    name: 'pointerEvents',
                    displayName: 'pointer events',
                    type: 'enum',
                    enumVals: [
                        ['box-none', 'box-none'],
                        ['none', 'none'],
                        ['box-only', 'box-only'],
                        ['normal', 'auto']
                    ]
                },
                onLayout: {
                    name: 'onLayout',
                    displayName: 'when sized',
                    type: 'func'
                },
                ///////////////////////////////////////
                contentContainerStyle: {
                    name: 'contentContainerStyle',
                    displayName: 'container appearance',
                    type: 'val'
                },

                keyboardDismissMode: {
                    name: 'keyboardDismissMode',
                    displayName: 'keyboard dismissed on drag?',
                    type: 'enum',
                    enumVals: [
                        ['none', 'none'],
                        ['interactive', 'interactive'],
                        ['on drag', 'on-drag'],
                    ]
                },
                keyboardShouldPersistTaps: {
                    name: 'keyboardShouldPersistTaps',
                    displayName: 'keyboard visible after tap?',
                    type: 'enum',
                    enumVals: [
                        ['always', 'always'],
                        ['never', 'never'],
                        ['handled', 'handled'],
                    ]
                },
                // refreshControl:{
                //     name:'refreshControl',
                //     displayName:'UI',
                //     type:'func'
                // },
                scrollEnabled: {
                    name: 'scrollEnabled',
                    displayName: 'scrolling enabled?',
                    type: 'val'
                },
                showsHorizontalScrollIndicator: {
                    name: 'showsHorizontalScrollIndicator',
                    displayName: 'show horizontal scroll indicator',
                    type: 'bool'
                },
                showsVerticalScrollIndicator: {
                    name: 'showsVerticalScrollIndicator',
                    displayName: 'show vertical scroll indicator',
                    type: 'bool'
                },
                pagingEnabled: {
                    name: 'pagingEnabled',
                    displayName: 'paging enabled?',
                    type: 'bool'
                },
            }
        },
        // FRIENDLY : button
        'friendly_button_element': {
            optionalProps: {
                theme: friendlyThemePropDesc,
                style: friendlyStylePropDesc,
                disabled: {
                    name: 'disabled',
                    displayName: 'disabled',
                    type: 'bool'
                },
                activeOpacity: {
                    name: 'activeOpacity',
                    displayName: 'fade when touched',
                    type: 'val'
                },
                underlayColor: {
                    name: 'underlayColor',
                    displayName: 'background color when touched',
                    type: 'val'
                },
            }
        },
        // FRIENDLY : text
        'friendly_text_element': {
            optionalProps: {
                theme: friendlyThemePropDesc,
                style: friendlyStylePropDesc,
                // FRIENDLY : text optional properties
            }
        },
        // FRIENDLY : image
        // FRIENDLY : textinput
        // FRIENDLY : rectangle
        'view_element': {
            optionalProps: {
                pointerEvents: {
                    name: 'pointerEvents',
                    displayName: 'pointer events',
                    type: 'enum',
                    enumVals: [
                        ['box-none', 'box-none'],
                        ['none', 'none'],
                        ['box-only', 'box-only'],
                        ['normal', 'auto']
                    ]
                },
                onLayout: {
                    name: 'onLayout',
                    displayName: 'when sized',
                    type: 'func'
                }
            }
        },
        'textinput_element': {
            optionalProps: {
                onSubmitEditing: {
                    name: 'onSubmitEditing',
                    displayName: 'when the submit button is pressed',
                    type: 'func'
                },
                autoFocus: {
                    name: 'autoFocus',
                    displayName: 'auto-focus',
                    type: 'bool'
                },
                blurOnSubmit: {
                    name: 'blurOnSubmit',
                    displayName: 'blur on submit',
                    type: 'bool'
                },
                multiline: {
                    name: 'multiline',
                    displayName: 'multi-line',
                    type: 'bool'
                },
                onChangeText: {
                    name: 'onChangeText',
                    displayName: 'when the text changes',
                    type: 'func'
                },
                placeholder: {
                    name: 'placeholder',
                    displayName: 'placeholder text',
                    type: 'text'
                },
                defaultValue: {
                    name: 'defaultValue',
                    displayName: 'default value',
                    type: 'text'
                },
                editable: {
                    name: 'editable',
                    displayName: 'editable',
                    type: 'bool'
                },
                keyboardType: {
                    name: 'keyboardType',
                    displayName: 'keyboard type',
                    type: 'enum',
                    enumVals: [
                        ['normal', 'default'],
                        ['numeric', 'numeric'],
                        ['email address', 'email-address'],
                        ['phone pad', 'phone-pad']
                    ]
                },
                returnKeyType: {
                    name: 'returnKeyType',
                    displayName: 'return key text',
                    type: 'enum',
                    enumVals: [
                        ['done', 'done'],
                        ['go', 'go'],
                        ['next', 'next'],
                        ['search', 'search'],
                        ['send', 'send'],
                    ]
                },
                secureTextEntry: {
                    name: 'secureTextEntry',
                    displayName: 'password',
                    type: 'bool'
                },
                selectTextOnFocus: {
                    name: 'selectTextOnFocus',
                    displayName: 'select on focus',
                    type: 'bool'
                },
                maxLength: {
                    name: 'maxLength',
                    displayName: 'max characters',
                    type: 'val'
                },
                autoCapitalize: {
                    name: 'autoCapitalize',
                    displayName: 'auto-capitalize',
                    type: 'enum',
                    enumVals: [
                        ['sentences', 'sentences'],
                        ['none', 'none'],
                        ['words', 'words'],
                        ['characters', 'characters']
                    ]
                },
                autoCorrect: {
                    name: 'autoCorrect',
                    displayName: 'autocorrect',
                    type: 'bool'
                },
                caretHidden: {
                    name: 'caretHidden',
                    displayName: 'hide caret',
                    type: 'bool'
                },
                onBlur: {
                    name: 'onBlur',
                    displayName: 'when caret moves away',
                    type: 'func'
                },
                onEndEditing: {
                    name: 'onEndEditing',
                    displayName: 'when the user is done editing',
                    type: 'func'
                },
                onFocus: {
                    name: 'onFocus',
                    displayName: 'when the user starts editing',
                    type: 'func'
                },
                onSelectionChange: {
                    name: 'onSelectionChange',
                    displayName: 'when the selection changes',
                    type: 'func'
                },
            }
        },
        'touchable_element': {
            optionalProps: {
                disabled: {
                    name: 'disabled',
                    displayName: 'disabled',
                    type: 'bool'
                },
                activeOpacity: {
                    name: 'activeOpacity',
                    displayName: 'fade when touched',
                    type: 'val'
                },
                underlayColor: {
                    name: 'underlayColor',
                    displayName: 'background color when touched',
                    type: 'val'
                },
            }
        },
        'scrollview_element': {
            optionalProps: {
                // inherited from view_element ///////
                pointerEvents: {
                    name: 'pointerEvents',
                    displayName: 'pointer events',
                    type: 'enum',
                    enumVals: [
                        ['box-none', 'box-none'],
                        ['none', 'none'],
                        ['box-only', 'box-only'],
                        ['normal', 'auto']
                    ]
                },
                onLayout: {
                    name: 'onLayout',
                    displayName: 'when sized',
                    type: 'func'
                },
                ///////////////////////////////////////
                contentContainerStyle: {
                    name: 'contentContainerStyle',
                    displayName: 'container appearance',
                    type: 'val'
                },
                horizontal: {
                    name: 'horizontal',
                    displayName: 'should scroll horizontally',
                    type: 'bool'
                },
                keyboardDismissMode: {
                    name: 'keyboardDismissMode',
                    displayName: 'keyboard dismissed on drag?',
                    type: 'enum',
                    enumVals: [
                        ['none', 'none'],
                        ['interactive', 'interactive'],
                        ['on drag', 'on-drag'],
                    ]
                },
                keyboardShouldPersistTaps: {
                    name: 'keyboardShouldPersistTaps',
                    displayName: 'keyboard visible after tap?',
                    type: 'enum',
                    enumVals: [
                        ['always', 'always'],
                        ['never', 'never'],
                        ['handled', 'handled'],
                    ]
                },
                // refreshControl:{
                //     name:'refreshControl',
                //     displayName:'UI',
                //     type:'func'
                // },
                scrollEnabled: {
                    name: 'scrollEnabled',
                    displayName: 'scrolling enabled?',
                    type: 'val'
                },
                showsHorizontalScrollIndicator: {
                    name: 'showsHorizontalScrollIndicator',
                    displayName: 'show horizontal scroll indicator',
                    type: 'bool'
                },
                showsVerticalScrollIndicator: {
                    name: 'showsVerticalScrollIndicator',
                    displayName: 'show vertical scroll indicator',
                    type: 'bool'
                },
                pagingEnabled: {
                    name: 'pagingEnabled',
                    displayName: 'paging enabled?',
                    type: 'bool'
                },
            }
        },

    };

    export function initAllUIBlockDefs(getStorageVarsProc: () => any[][]) {

        // create block items for mutator ui
        for (let p in uiBlockDescriptors) {
            let blockDesc = uiBlockDescriptors[p];
            for (let pop in blockDesc.optionalProps) {
                let mutateItemBlockName = getOptPropBlockName(p, pop);
                if (!Blockly.Blocks[mutateItemBlockName]) {
                    Blockly.Blocks[mutateItemBlockName] = createOptPropMutationItemBlock(
                        blockDesc.optionalProps[pop]);
                }
            }
        }

        let defName = 'view_element';
        let viewBlockDef = createUIBlockDef(uiBlockDescriptors[defName]);
        viewBlockDef.init = function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage("media/av/ic_web_white_48dp.png", 16, 16, "*"))
                .appendField("container")
                .appendField(new Blockly.FieldTextInput("", null), "NAME");
            this.appendStatementInput("child elements")
                .setCheck(null);
            this.appendValueInput("style")
                .setCheck("STYLE")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("appearance");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setInputsInline(false);
            this.setColour(285);
            this.setTooltip('');
            this.setHelpUrl('');
            blockDefInitHelper.call(this, 'view_element');
        };
        Blockly.Blocks[defName] = viewBlockDef;

        defName = 'scrollview_element';
        viewBlockDef = createUIBlockDef(uiBlockDescriptors[defName]);
        viewBlockDef.init = function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage("media/av/ic_web_white_48dp.png", 16, 16, "*"))
                .appendField("scrolling container")
                .appendField(new Blockly.FieldTextInput("", null), "NAME");
            this.appendStatementInput("child elements")
                .setCheck(null);
            this.appendValueInput("style")
                .setCheck("STYLE")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("appearance");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setInputsInline(false);
            this.setColour(285);
            this.setTooltip('');
            this.setHelpUrl('');
            blockDefInitHelper.call(this, 'scrollview_element');
        };
        Blockly.Blocks[defName] = viewBlockDef;

        defName = 'textinput_element';
        viewBlockDef = createUIBlockDef(uiBlockDescriptors[defName]);
        viewBlockDef.init = function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage("media/content/ic_font_download_white_48dp.png", 16, 16, "*"))
                .appendField("text input UI");
            this.appendDummyInput("storage")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("stored in variable")
                .appendField(new Blockly.FieldDropdown(getStorageVarsProc), "storage");
            this.appendValueInput("style")
                .setCheck("STYLE")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("formatting");
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(285);
            this.setTooltip('');
            this.setHelpUrl('');
            blockDefInitHelper.call(this, 'textinput_element');
        };
        Blockly.Blocks[defName] = viewBlockDef;

        defName = 'touchable_element';
        viewBlockDef = createUIBlockDef(uiBlockDescriptors[defName]);
        viewBlockDef.init = function () {
            this.appendDummyInput()
                .appendField("touchable container UI");
            this.appendStatementInput("child elements")
                .setCheck(null);
            this.appendValueInput("style")
                .setCheck("STYLE")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("formatting");
            this.appendStatementInput("onPress")
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("when pressed");
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(285);
            this.setTooltip('');
            this.setHelpUrl('');
            blockDefInitHelper.call(this, 'touchable_element');
        };
        Blockly.Blocks[defName] = viewBlockDef;
        /////////////////////////////////////////////////
        //
        // insert more ui block definitions here
        //
        // FRIENDLY : HERE BE block definitions
        // FRIENDLY : group
        defName = 'friendly_group_element';
        viewBlockDef = createUIBlockDef(uiBlockDescriptors[defName]);
        viewBlockDef.init = function () {
            this.appendDummyInput()
                // .appendField(new Blockly.FieldImage("media/av/ic_web_white_48dp.png", 16, 16, "*"))
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("Group")
                // .appendField("child direction")
                .appendField(new Blockly.FieldDropdown([["row", "row"], ["column", "column"], ["reverse-row", "row-reverse"], ["reverse-column", "column-reverse"]]), "child direction")
                .appendField(new Blockly.FieldImage("/media/action/ic_open_with_white_48dp.png", 16, 16, "*"))
                // .appendField("flex?")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "isFlex")
                .appendField("class")
                .appendField(new Blockly.FieldDropdown([
                    ["panel", "panel"],
                    ["frame", "frame"],
                    ["framed panel", "framepanel"],
                    ["header", "header"],
                    ["footer", "footer"],
                    ["row", "row"],
                    ["(none)", "none"]
                ]),
                "visual purpose");
            this.appendStatementInput("children")
                .setCheck(null)
                .appendField("children");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('container to put other UI elements into');
            this.setHelpUrl('');
            blockDefInitHelper.call(this, 'friendly_group_element');
        };
        Blockly.Blocks[defName] = viewBlockDef;
        // FRIENDLY : scroller
        defName = 'friendly_scroller_element';
        viewBlockDef = createUIBlockDef(uiBlockDescriptors[defName]);
        viewBlockDef.init = function () {
            this.appendDummyInput()
                // .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("Scroller")
                .appendField(new Blockly.FieldImage("/media/action/ic_open_with_white_48dp.png", 16, 16, "*"))
                // .appendField("flex?")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "isFlex")
                .appendField("class")
                .appendField(new Blockly.FieldDropdown([
                    ["panel", "panel"],
                    ["frame", "frame"],
                    ["framed panel", "framepanel"],
                    ["header", "header"],
                    ["footer", "footer"],
                    ["row", "row"],
                    ["(none)", "none"]
                ]),
                "visual purpose");
            this.appendStatementInput("children")
                .setCheck(null)
                .appendField("children");
            // this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
            blockDefInitHelper.call(this, 'friendly_scroller_element');
        };
        Blockly.Blocks[defName] = viewBlockDef;
        // FRIENDLY : button
        defName = 'friendly_button_element';
        viewBlockDef = createUIBlockDef(uiBlockDescriptors[defName]);
        viewBlockDef.init = function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldTextInput(""), "NAME")
                .appendField("Button")
                .appendField(new Blockly.FieldImage("/media/action/ic_open_with_white_48dp.png", 16, 16, "*"))
                // .appendField("flex?")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "isFlex")
                .appendField("class")
                .appendField(new Blockly.FieldDropdown([
                    ["small", "small"],
                    ["medium", "medium"],
                    ["large", "large"],
                    ["emphasis (sm)", "smallstrong"],
                    ["emphasis (md)", "mediumstrong"],
                    ["emphasis (lg)", "largestrong"],
                    ["(none)", "none"]
                ]), "visual purpose");
            this.appendStatementInput("child elements")
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("children");
            this.appendStatementInput("onPress")
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("when pressed");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('create an element that can be clicked or touched to execute code');
            this.setHelpUrl('');
            blockDefInitHelper.call(this, 'friendly_button_element');
        };
        Blockly.Blocks[defName] = viewBlockDef;
        // FRIENDLY : text
        defName = 'friendly_text_element';
        viewBlockDef = createUIBlockDef(uiBlockDescriptors[defName]);
        viewBlockDef.init = function () {
            this.appendValueInput("text value")
                .setCheck(null)
                .appendField("Text")
                .appendField("flex?")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "isFlex")
                .appendField("class")
                .appendField(new Blockly.FieldDropdown([["(none)", "none"], ["button", "button"], ["menu", "menu"], ["caption", "caption"], ["body1", "body1"], ["body2", "body2"], ["subtitle", "subtitle"], ["title", "title"], ["headline1", "headline1"], ["headline2", "headline2"], ["headline3", "headline3"], ["headline4", "headline4"]]), "visual purpose");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('create an element that can be clicked or touched to execute code');
            this.setHelpUrl('');
            blockDefInitHelper.call(this, 'friendly_text_element');
        };
        Blockly.Blocks[defName] = viewBlockDef;
        // FRIENDLY : image
        // FRIENDLY : textinput
        // FRIENDLY : rectangle    

        // initialize the blocks used in the gear window
        Blockly.Blocks['mutable_block1_container'] = {
            /**
             * Mutator block for list container.
             * @this Blockly.Block
             */
            init: function () {
                this.setColour(230);
                this.appendDummyInput()
                    .appendField('include optional properties');
                this.appendStatementInput('STACK');
                this.setTooltip('To include an optional property, drag it into the include block');
                this.contextMenu = false;
            }
        };

        // Blockly.Blocks['mutable_block1_item'] = {
        //     /**
        //      * Mutator block for adding items.
        //      * @this Blockly.Block
        //      */
        //     init: function () {
        //         this.setColour(230);
        //         this.appendDummyInput().
        //             appendField('propertyname')
        //         this.setPreviousStatement(true);
        //         this.setNextStatement(true);
        //         this.setTooltip('LISTS_CREATE_WITH_ITEM_TOOLTIP');
        //         this.contextMenu = false;
        //     }
        // };


    }

    export function initUIMethodDefs() {
        // METHBLOCK : scrollToEnd
        Blockly.Blocks['scroll_scrolltoend_method'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("scroll to end")
                    .appendField(new Blockly.FieldTextInput(""), "element id");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        };
        Blockly.Blocks['console_log'] = {
            init: function () {
                this.appendValueInput("message")
                    .setCheck(null)
                    .appendField("report message");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(230);
                this.setTooltip('');
                this.setHelpUrl('');
            }
        }
    }

    function blockDefInitHelper(defName: string) {
        this.mutateInfo_ = {
            descriptorName: defName,
            installedProps: []
        };

        this.updateShape_();
        let desc = uiBlockDescriptors[defName];
        this.setMutator(new Blockly.Mutator(
            jsutil.mapToArray(desc.optionalProps, (k, v) => {
                return getOptPropBlockName(defName, k);
            })));

    }

    function getOptPropBlockName(defName: string, propName: string): string {
        return `mutable_${defName}_${propName}_item`;
    }
    function getOptPropInputName(propName: string): string {
        return `OProp_${propName}`;
    }

    function createOptPropMutationItemBlock(
        propDesc: UIBlockOptPropDesc): Blockly.BlockDefinition {
        return {
            /**
             * Mutator block for adding items.
             * @this Blockly.Block
             */
            init: function () {
                (<OptPropMutatorItemBlock>this).desc_ = propDesc;
                this.setColour(230);
                this.appendDummyInput().
                    appendField(propDesc.displayName);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('LISTS_CREATE_WITH_ITEM_TOOLTIP');
                this.contextMenu = false;
            }
        };
    }

    function getMutateInfo(b: Blockly.Block): UIBlockMutateInfo {
        return <UIBlockMutateInfo>(b.mutateInfo_);
    }

    function createUIBlockDef(uiBlock: UIBlockDesc): Blockly.BlockDefinition {

        return {
            init: null,
            /**
             * Create XML to represent list inputs.
             * @return {!Element} XML storage element.
             * @this Blockly.Block
             */
            mutationToDom: function () {
                var container = document.createElement('mutation');
                // persist set of properties included
                container.setAttribute('items', this.itemCount_);
                const minfo = getMutateInfo(this);
                container.setAttribute('desc', minfo.descriptorName);
                container.setAttribute('installed', minfo.installedProps.join(','));
                return container;
            },
            /**
             * Parse XML to restore the list inputs.
             * @param {!Element} xmlElement XML storage element.
             * @this Blockly.Block
             */
            domToMutation: function (xmlElement) {
                // read the set of properties that are included
                this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
                this.mutateInfo_ = {
                    descriptorName: xmlElement.getAttribute('desc'),
                    installedProps: xmlElement.getAttribute('installed').split(',')
                };
                if (this.mutateInfo_.installedProps.length == 1
                    && this.mutateInfo_.installedProps[0] === '') {
                    this.mutateInfo_.installedProps = [];
                }
                this.updateShape_();
            },
            /**
             * Populate the mutator's dialog with this block's components.
             * @param {!Blockly.Workspace} workspace Mutator's workspace.
             * @return {!Blockly.Block} Root block in mutator.
             * @this Blockly.Block
             */
            decompose: function (workspace: Blockly.Workspace) {
                var containerBlock = workspace.newBlock('mutable_block1_container');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                let minfo = getMutateInfo(this);
                let desc = uiBlockDescriptors[minfo.descriptorName];
                // for each of the props that have been selected
                for (var i = 0; i < minfo.installedProps.length; i++) {
                    let prop = minfo.installedProps[i];
                    let itemBlock: OptPropMutatorItemBlock =
                        workspace.newBlock(getOptPropBlockName(minfo.descriptorName, prop));
                    itemBlock.desc_ = desc.optionalProps[prop];
                    itemBlock.initSvg();
                    connection.connect(itemBlock.previousConnection);
                    connection = itemBlock.nextConnection;
                }
                return containerBlock;
            },
            /**
             * Reconfigure this block based on the mutator dialog's components.
             * @param {!Blockly.Block} containerBlock Root block in mutator.
             * @this Blockly.Block
             */
            compose: function (containerBlock: Blockly.Block) {
                let self: Blockly.Block = this;
                var itemBlock: OptPropMutatorItemBlock = containerBlock.getInputTargetBlock('STACK');
                // Count number of inputs.
                var mutateUIConnections: { name: string, conn: any }[] = [];
                while (itemBlock) {
                    mutateUIConnections.push({
                        name: itemBlock.desc_.name,
                        conn: itemBlock.valueConnection_
                    });
                    itemBlock = itemBlock.nextConnection &&
                        itemBlock.nextConnection.targetBlock();
                }
                // if we have an input that is no longer in the 
                // mutator container, we clean up the connection stuff
                // Disconnect any children that don't belong.
                let minfo = getMutateInfo(self);
                for (let i = 0; i < minfo.installedProps.length; i++) {
                    let propName = minfo.installedProps[i];
                    let connection = self.getInput(getOptPropInputName(propName)).connection;
                    if (connection) {
                        var target = connection.targetConnection;
                        if (target && !mutateUIConnections.find(c => c.name == propName)) {
                            target.disconnect();
                        }
                    }
                }
                this.itemCount_ = mutateUIConnections.length;
                minfo.installedProps = mutateUIConnections.map((v) => v.name);
                this.updateShape_();
                // Reconnect any child blocks.
                for (var i = 0; i < this.mutateInfo_.installedProps.length; i++) {
                    let propName = minfo.installedProps[i];
                    Blockly.Mutator.reconnect(
                        mutateUIConnections[i].conn,
                        this,
                        getOptPropInputName(propName));
                }
            },
            /**
             * Store pointers to any connected child blocks.
             * @param {!Blockly.Block} containerBlock Root block in mutator.
             * @this Blockly.Block
             */
            saveConnections: function (containerBlock) {
                var itemBlock: OptPropMutatorItemBlock = containerBlock.getInputTargetBlock('STACK');
                var i = 0;
                // stash the connections defined on the UI block in the connections of 
                // the mutator UI block
                while (itemBlock) {
                    var input = this.getInput(getOptPropInputName(itemBlock.desc_.name));
                    itemBlock.valueConnection_ = input && input.connection && input.connection.targetConnection;
                    i++;
                    itemBlock = itemBlock.nextConnection &&
                        itemBlock.nextConnection.targetBlock();
                }
            },
            /**
             * Modify this block to have the correct number of inputs.
             * @private
             * @this Blockly.Block
             */
            updateShape_: function () {
                // CPROP : I think we can just get rid of the empty business
                // if (this.itemCount_ && this.getInput('EMPTY')) {
                //     this.removeInput('EMPTY');
                // } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
                //     this.appendDummyInput('EMPTY')
                //         .appendField('LISTS_CREATE_EMPTY_TITLE');
                // }

                // for properties that the user added
                // Add new inputs.
                let minfo = getMutateInfo(this);
                let blockDesc = uiBlockDescriptors[minfo.descriptorName];

                for (let i = 0; i < minfo.installedProps.length; i++) {
                    let propName = minfo.installedProps[i];
                    let propDesc = blockDesc.optionalProps[propName];
                    let inputName = getOptPropInputName(propName);
                    if (!this.getInput(inputName)) {

                        let input: Blockly.Input;

                        if (propDesc.type == 'val' || propDesc.type == 'text') {
                            input = this.appendValueInput(inputName);
                            // input.setAlign(Blockly.ALIGN_RIGHT);
                            input.appendField(propDesc.displayName);
                        } else if (propDesc.type == 'enum') {
                            input = this.appendDummyInput(inputName);
                            // input.setAlign(Blockly.ALIGN_RIGHT);
                            input.appendField(propDesc.displayName);
                            input.appendField(new Blockly.FieldDropdown(propDesc.enumVals), inputName);
                        } else if (propDesc.type == 'func') {
                            input = this.appendStatementInput(inputName);
                            input.appendField(propDesc.displayName);
                        } else if (propDesc.type == 'bool') {
                            input = this.appendDummyInput(inputName);
                            // input.setAlign(Blockly.ALIGN_RIGHT);
                            input.appendField(propDesc.displayName);
                            input.appendField(new Blockly.FieldCheckbox(propDesc.defaultVal ? "TRUE" : "FALSE"), inputName);
                        } else {
                            console.error('unknown optional prop type', JSON.stringify(propDesc));
                        }
                    }
                }
                // for properties that aren't there any more
                // Remove deleted inputs.
                for (let p in blockDesc.optionalProps) {
                    if (minfo.installedProps.indexOf(p) < 0) {
                        let inputName = getOptPropInputName(p);
                        if (this.getInput(inputName)) {
                            this.removeInput(inputName);
                        }
                    }
                }
            }
        };
    }

    export function initUIBlockCodegen() {
        Blockly.JavaScript['view_element'] = function (block: Blockly.Block) {
            let blockdesc = uiBlockDescriptors[block.type];
            let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');

            // let value_pointerEvents = block.getFieldValue(getOptPropInputName('pointerEvents'));
            // let statements_onLayout = Blockly.JavaScript.statementToCode(block, getOptPropInputName('onLayout'));
            // properties
            let code = '{\nCgRt.beginProps();\n';

            code += generateRefPropCode(block);
            code += generateOptPropCode(blockdesc.optionalProps['pointerEvents'], block);
            code += generateOptPropCode(blockdesc.optionalProps['onLayout'], block);
            // code += BlocklyConfig.conditionalStringPropertySetting('pointerEvents', `'${value_pointerEvents}'`);
            // code += BlocklyConfig.conditionalFuncPropertySetting('onLayout', statements_onLayout, false);

            //styles
            let value_style = Blockly.JavaScript.valueToCode(block, 'style', Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }
            //endprops
            let propsVarName = BlocklyConfig.getVarName('p');
            code += `\nvar ${propsVarName}=CgRt.getProps();`;

            // children
            code += '\nCgRt.pushCont();\n{';
            code += statements_child_elements;
            let childrenVarName = BlocklyConfig.getVarName('cl');
            code += `}\nvar ${childrenVarName}=CgRt.popCont();`;
            code += `\nCgRt.pushElem(CgRt.createElement(CgRt.Viewr, ${propsVarName},${childrenVarName}));\n}\n`;
            return code;
        };
        Blockly.JavaScript['scrollview_element'] = function (block: Blockly.Block) {
            let blockdesc = uiBlockDescriptors[block.type];
            let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
            // properties
            let code = '{\nCgRt.beginProps();\n';

            code += generateRefPropCode(block);

            code += generateOptPropCode(blockdesc.optionalProps['pointerEvents'], block);
            code += generateOptPropCode(blockdesc.optionalProps['onLayout'], block);
            code += generateOptPropCode(blockdesc.optionalProps['contentContainerStyle'], block);
            code += generateOptPropCode(blockdesc.optionalProps['horizontal'], block);
            code += generateOptPropCode(blockdesc.optionalProps['keyboardDismissMode'], block);
            code += generateOptPropCode(blockdesc.optionalProps['keyboardShouldPersistTaps'], block);
            code += generateOptPropCode(blockdesc.optionalProps['scrollEnabled'], block);
            code += generateOptPropCode(blockdesc.optionalProps['showsHorizontalScrollIndicator'], block);
            code += generateOptPropCode(blockdesc.optionalProps['showsVerticalScrollIndicator'], block);
            code += generateOptPropCode(blockdesc.optionalProps['pagingEnabled'], block);

            //styles
            let value_style = Blockly.JavaScript.valueToCode(block, 'style', Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }
            //endprops
            let propsVarName = BlocklyConfig.getVarName('p');
            code += `\nvar ${propsVarName}=CgRt.getProps();`;

            // children
            code += '\nCgRt.pushCont();\n{';
            code += statements_child_elements;
            let childrenVarName = BlocklyConfig.getVarName('cl');
            code += `}\nvar ${childrenVarName}=CgRt.popCont();`;
            code += `\nCgRt.pushElem(CgRt.createElement(CgRt.ScrollViewr, ${propsVarName},${childrenVarName}));\n}\n`;
            return code;
        };
        Blockly.JavaScript['textinput_element'] = function (block: Blockly.Block) {
            let blockdesc = uiBlockDescriptors[block.type];
            let dropdown_storage = Blockly.JavaScript.variableDB_.getName(
                block.getFieldValue('storage'),
                Blockly.Variables.NAME_TYPE);

            // properties
            let code = '{\nCgRt.beginProps();\n';
            let statements_onChangeText = Blockly.JavaScript.statementToCode(block, getOptPropInputName('onChangeText'));

            if (dropdown_storage && dropdown_storage !== 'dummy'
                || (statements_onChangeText && statements_onChangeText !== '')) {
                let callUpdate = '';
                let isShared: boolean = dropdown_storage.startsWith('shared_');
                let varName = dropdown_storage.substring(7); // 'normal_' | 'shared_'
                let functionText: string;
                let varSetText: string;
                if (isShared) {
                    varSetText = `CgRt.setShareVar('${varName}',text);`;
                } else {
                    varSetText = `${varName} = text;`;
                }
                functionText = `function(text){${varSetText}\n${statements_onChangeText}\nCgRt.updateUI();}`;
                code += BlocklyConfig.conditionalPropertySetting('onChangeText', functionText);
                let valueExpression: string;
                if (isShared) {
                    valueExpression = `CgRt.getShareVar('${varName}')`;
                } else {
                    valueExpression = varName;
                }
                code += BlocklyConfig.conditionalPropertySetting('value', valueExpression);
            }

            code += generateOptPropCode(blockdesc.optionalProps['autoCapitalize'], block);
            code += generateOptPropCode(blockdesc.optionalProps['autoCorrect'], block);
            code += generateOptPropCode(blockdesc.optionalProps['autoFocus'], block);
            code += generateOptPropCode(blockdesc.optionalProps['blurOnSubmit'], block);
            code += generateOptPropCode(blockdesc.optionalProps['caretHidden'], block);
            code += generateOptPropCode(blockdesc.optionalProps['defaultValue'], block);
            code += generateOptPropCode(blockdesc.optionalProps['editable'], block);
            code += generateOptPropCode(blockdesc.optionalProps['keyboardType'], block);
            code += generateOptPropCode(blockdesc.optionalProps['maxLength'], block);
            code += generateOptPropCode(blockdesc.optionalProps['multiline'], block);
            code += generateOptPropCode(blockdesc.optionalProps['onBlur'], block);
            code += generateOptPropCode(blockdesc.optionalProps['onEndEditing'], block);
            code += generateOptPropCode(blockdesc.optionalProps['onFocus'], block);
            code += generateOptPropCode(blockdesc.optionalProps['onSelectionChange'], block);
            code += generateOptPropCode(blockdesc.optionalProps['onSubmitEditing'], block);
            code += generateOptPropCode(blockdesc.optionalProps['placeholder'], block);
            code += generateOptPropCode(blockdesc.optionalProps['returnKeyType'], block);
            code += generateOptPropCode(blockdesc.optionalProps['secureTextEntry'], block);
            code += generateOptPropCode(blockdesc.optionalProps['selectTextOnFocus'], block);

            //styles
            let value_style = Blockly.JavaScript.valueToCode(block, 'style', Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }
            //endprops
            let propsVarName = BlocklyConfig.getVarName('p');
            code += `\nvar ${propsVarName}=CgRt.getProps();`;

            code += `\nCgRt.pushElem(CgRt.createElement(CgRt.TextInputr,${propsVarName}));\n}\n`;
            return code;
        };

        Blockly.JavaScript['touchable_element'] = function (block: Blockly.Block) {
            let blockdesc = uiBlockDescriptors[block.type];
            var statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
            var statements_onpress = Blockly.JavaScript.statementToCode(block, 'onPress');
            // TODO: Assemble JavaScript into code variable.
            let code = '{\nCgRt.beginProps();\n';

            code += BlocklyConfig.conditionalPropertySetting('onPress', `function(){${statements_onpress}\nCgRt.updateUI();}`);

            code += generateOptPropCode(blockdesc.optionalProps['disabled'], block);
            code += generateOptPropCode(blockdesc.optionalProps['activeOpacity'], block);
            code += generateOptPropCode(blockdesc.optionalProps['underlayColor'], block);
            // code += BlocklyConfig.conditionalStringPropertySetting('pointerEvents', `'${value_pointerEvents}'`);
            // code += BlocklyConfig.conditionalFuncPropertySetting('onLayout', statements_onLayout, false);

            //styles
            var value_style = Blockly.JavaScript.valueToCode(block, 'style', Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }
            //endprops
            let propsVarName = BlocklyConfig.getVarName('p');
            code += `\nvar ${propsVarName}=CgRt.getProps();`;

            // children
            code += '\nCgRt.pushCont();\n{';
            if (statements_child_elements && statements_child_elements != '') {
                code += statements_child_elements;
            } else {
                code += 'CgRt.pushElem(CgRt.createElement(CgRt.Textr,{style:{textAlign:"center"}},["\<empty\>"]));'
            }
            let childrenVarName = BlocklyConfig.getVarName('cl');
            code += `}\nvar ${childrenVarName}=CgRt.popCont();`;
            code += `\nCgRt.pushElem(CgRt.createElement(CgRt.TouchableHighlightr, ${propsVarName},${childrenVarName}));\n}\n`;
            return code;
        };
        // FRIENDLY : HERE BE block codegen
        // FRIENDLY : group
        Blockly.JavaScript['friendly_group_element'] = function (block: Blockly.Block) {
            let text_name = block.getFieldValue('NAME');
            let dropdown_child_direction = block.getFieldValue('child direction');
            let checkbox_isflex = block.getFieldValue('isFlex') == 'TRUE';
            let statements_children = Blockly.JavaScript.statementToCode(block, 'children');
            let dropdown_visual_purpose = block.getFieldValue('visual purpose');

            let blockdesc = uiBlockDescriptors[block.type];
            // let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');

            // let value_pointerEvents = block.getFieldValue(getOptPropInputName('pointerEvents'));
            // let statements_onLayout = Blockly.JavaScript.statementToCode(block, getOptPropInputName('onLayout'));
            // properties
            let code = '{\nCgRt.beginProps();\n';

            code += generateRefPropCode(block);
            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
            code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('childDirection', dropdown_child_direction);
            code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);
            code += generateOptPropCode(blockdesc.optionalProps['theme'], block);
            code += generateOptPropCode(blockdesc.optionalProps['onLayout'], block);
            // code += BlocklyConfig.conditionalStringPropertySetting('pointerEvents', `'${value_pointerEvents}'`);
            // code += BlocklyConfig.conditionalFuncPropertySetting('onLayout', statements_onLayout, false);

            //styles
            let value_style = Blockly.JavaScript.valueToCode(block, getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }
            //endprops
            let propsVarName = BlocklyConfig.getVarName('p');
            code += `\nvar ${propsVarName}=CgRt.getProps();`;

            // children
            code += '\nCgRt.pushCont();\n{';
            code += statements_children;
            let childrenVarName = BlocklyConfig.getVarName('cl');
            code += `}\nvar ${childrenVarName}=CgRt.popCont();`;
            code += `\nCgRt.pushElem(CgRt.createElement(CgRt.GroupBlockf, ${propsVarName},${childrenVarName}));\n}\n`;
            return code;
        };
        // FRIENDLY : scroller
        Blockly.JavaScript['friendly_scroller_element'] = function (block: Blockly.Block) {
            var text_name = block.getFieldValue('NAME');
            var checkbox_isflex = block.getFieldValue('isFlex') == 'TRUE';
            var statements_children = Blockly.JavaScript.statementToCode(block, 'children');
            let dropdown_visual_purpose = block.getFieldValue('visual purpose');

            let blockdesc = uiBlockDescriptors[block.type];
            // let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');

            // let value_pointerEvents = block.getFieldValue(getOptPropInputName('pointerEvents'));
            // let statements_onLayout = Blockly.JavaScript.statementToCode(block, getOptPropInputName('onLayout'));
            // properties
            let code = '{\nCgRt.beginProps();\n';

            code += generateRefPropCode(block);
            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
            code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);
            code += generateOptPropCode(blockdesc.optionalProps['theme'], block);
            code += generateOptPropCode(blockdesc.optionalProps['pointerEvents'], block);
            code += generateOptPropCode(blockdesc.optionalProps['onLayout'], block);
            code += generateOptPropCode(blockdesc.optionalProps['contentContainerStyle'], block);
            code += generateOptPropCode(blockdesc.optionalProps['horizontal'], block);
            code += generateOptPropCode(blockdesc.optionalProps['keyboardDismissMode'], block);
            code += generateOptPropCode(blockdesc.optionalProps['keyboardShouldPersistTaps'], block);
            code += generateOptPropCode(blockdesc.optionalProps['scrollEnabled'], block);
            code += generateOptPropCode(blockdesc.optionalProps['showsHorizontalScrollIndicator'], block);
            code += generateOptPropCode(blockdesc.optionalProps['showsVerticalScrollIndicator'], block);
            code += generateOptPropCode(blockdesc.optionalProps['pagingEnabled'], block);

            //styles
            let value_style = Blockly.JavaScript.valueToCode(block, getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }
            //endprops
            let propsVarName = BlocklyConfig.getVarName('p');
            code += `\nvar ${propsVarName}=CgRt.getProps();`;

            // children
            code += '\nCgRt.pushCont();\n{';
            code += statements_children;
            let childrenVarName = BlocklyConfig.getVarName('cl');
            code += `}\nvar ${childrenVarName}=CgRt.popCont();`;
            code += `\nCgRt.pushElem(CgRt.createElement(CgRt.ScrollerBlockf, ${propsVarName},${childrenVarName}));\n}\n`;
            return code;
        };
        // FRIENDLY : button
        Blockly.JavaScript['friendly_button_element'] = function (block: Blockly.Block) {
            let blockdesc = uiBlockDescriptors[block.type];
            var checkbox_isflex = block.getFieldValue('isFlex') == 'TRUE';
            var dropdown_visual_purpose = block.getFieldValue('visual purpose');
            var statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
            var statements_onpress = Blockly.JavaScript.statementToCode(block, 'onPress');

            let code = '{\nCgRt.beginProps();\n';

            code += generateRefPropCode(block);
            code += BlocklyConfig.conditionalPropertySetting('onPress', `function(){${statements_onpress}\nCgRt.updateUI();}`);

            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
            code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);
            code += generateOptPropCode(blockdesc.optionalProps['theme'], block);
            code += generateOptPropCode(blockdesc.optionalProps['disabled'], block);
            code += generateOptPropCode(blockdesc.optionalProps['activeOpacity'], block);
            code += generateOptPropCode(blockdesc.optionalProps['underlayColor'], block);
            // code += BlocklyConfig.conditionalStringPropertySetting('pointerEvents', `'${value_pointerEvents}'`);
            // code += BlocklyConfig.conditionalFuncPropertySetting('onLayout', statements_onLayout, false);

            //styles
            var value_style = Blockly.JavaScript.valueToCode(block, 'style', Blockly.JavaScript.ORDER_ATOMIC);
            if (value_style && value_style !== '') {
                code += '\nCgRt.addProp("style",' + value_style + ');';
            }
            //endprops
            let propsVarName = BlocklyConfig.getVarName('p');
            code += `\nvar ${propsVarName}=CgRt.getProps();`;

            // children
            code += '\nCgRt.pushCont();\n{';
            if (statements_child_elements && statements_child_elements != '') {
                code += statements_child_elements;
            } else {
                code += 'CgRt.pushElem(CgRt.createElement(CgRt.Textr,{style:{textAlign:"center"}},["\<empty\>"]));'
            }
            let childrenVarName = BlocklyConfig.getVarName('cl');
            code += `}\nvar ${childrenVarName}=CgRt.popCont();`;
            code += `\nCgRt.pushElem(CgRt.createElement(CgRt.ButtonBlockf, ${propsVarName},${childrenVarName}));\n}\n`;
            return code;
        };
        // FRIENDLY : text
        Blockly.JavaScript['friendly_text_element'] = function (block: Blockly.Block) {
                var checkbox_isflex = block.getFieldValue('isFlex') == 'TRUE';
                var dropdown_visual_purpose = block.getFieldValue('visual purpose');
                var value_text_value = Blockly.JavaScript.valueToCode(block, 'text value', Blockly.JavaScript.ORDER_ATOMIC);
                // TODO: Assemble JavaScript into code variable.
                var code = '...;\n';
                return code;
        };
        // FRIENDLY : image
        // FRIENDLY : textinput
        // FRIENDLY : rectangle    
    }

    export function initUIMethodCodegen() {
        // METHBLOCK : scrollToEnd
        Blockly.JavaScript['scroll_scrolltoend_method'] = function (block: Blockly.Block) {
            var text_element_id = block.getFieldValue('element id');
            let elemVarName = BlocklyConfig.getVarName('elem');
            let code: string = '';
            code = `var ${elemVarName}=CgRt.getIdElem('${text_element_id}');\n`
            code += `if(${elemVarName}&&${elemVarName}.scrollToEnd)\n${elemVarName}.scrollToEnd();\nelse if(${elemVarName}&&${elemVarName}.scrollTo)${elemVarName}.scrollTo({x:1000000,y:1000000,animated:true});\n`;
            return code;
        };
        Blockly.JavaScript['console_log'] = function (block: Blockly.Block) {
            var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_NONE);
            let code = `console.log(${value_message});\n`;
            return code;
        };
    }

    function generateRefPropCode(block: Blockly.Block) {
        let name = block.getFieldValue('NAME');
        if (name && name != '') {
            let elemId = Blockly.JavaScript.variableDB_.getName(
                name,
                Blockly.Variables.NAME_TYPE);
            // goal: CgRt.addProp('ref',function(e){CgRt.setIdElem('name',e);});
            return BlocklyConfig.conditionalPropertySetting('ref',
                `function(e){CgRt.setIdElem('${elemId}',e);}`);
        }


    }
    function generateOptPropCode(desc: UIBlockOptPropDesc, block: Blockly.Block): string {
        if (desc.type == 'val') {
            let value = Blockly.JavaScript.valueToCode(block, getOptPropInputName(desc.name), Blockly.JavaScript.ORDER_COMMA);
            if (!value || value == '') return '';
            return BlocklyConfig.conditionalPropertySetting(desc.name, value);
        } else if (desc.type == 'text') {
            let value = Blockly.JavaScript.valueToCode(block, getOptPropInputName(desc.name), Blockly.JavaScript.ORDER_COMMA);
            if (!value || value == '') return '';
            return BlocklyConfig.conditionalValueToCodeAsStringPropertySetting(desc.name, value);
        } else if (desc.type == 'enum') {
            let value = block.getFieldValue(getOptPropInputName(desc.name));
            if (!value || value == '') return '';
            return BlocklyConfig.conditionalValueToCodeAsStringPropertySetting(desc.name, `'${value}'`);
        } else if (desc.type == 'bool') {
            let value = block.getFieldValue(getOptPropInputName(desc.name));
            if (!value || value == '') return '';
            return BlocklyConfig.conditionalPropertySetting(desc.name, value == "TRUE" ? 'true' : 'false');
        } else if (desc.type == 'func') {
            let statements = Blockly.JavaScript.statementToCode(block, getOptPropInputName(desc.name));
            if (!statements || statements == '') return '';
            return BlocklyConfig.conditionalFuncPropertySetting(desc.name, statements, true);
        } else {
            console.error(`no default code generation for property ${desc.name}, type=${desc.type}`);
            return '';
        }
    }
}