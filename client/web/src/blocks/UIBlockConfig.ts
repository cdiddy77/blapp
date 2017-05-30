/// <reference path="../localtypings/blockly.d.ts" />

import * as jsutil from '../../../shared/src/util/jsutil';
import * as BlocklyConfig from './BlocklyConfig';

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
    displayName: 'style',
    type: 'val'
};

// FRIENDLY : HERE BE block descriptors
export const uiBlockDescriptors: jsutil.Map<UIBlockDesc> = {
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
                displayName: 'container style',
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
    'friendly_image_element': {
        optionalProps: {
            // theme: friendlyThemePropDesc,
            style: friendlyStylePropDesc,
            // FRIENDLY : image optional properties
        }
    },
    // FRIENDLY : textinput
    'friendly_textinput_element': {
        optionalProps: {
            theme: friendlyThemePropDesc,
            style: friendlyStylePropDesc,
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
    // FRIENDLY : rectangle
    'friendly_divider_element': {
        optionalProps: {
            theme: friendlyThemePropDesc,
            style: friendlyStylePropDesc,
        }
    },
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
                displayName: 'container style',
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
    'sprite_element': {
        optionalProps: {
            style: friendlyStylePropDesc,
            graphicType: {
                name: 'graphicType',
                displayName: 'graphic type',
                type: 'enum',
                enumVals: [
                    ['image', 'image'],
                    ['rectangle', 'rectangle'],
                ]
            },
            color: {
                name: 'color',
                displayName: 'color',
                type: 'val'
            }
        }
    },
    'canvas_element': {
        optionalProps: {
            theme: friendlyThemePropDesc,
            style: friendlyStylePropDesc,
            gestureHandler: {
                name: 'gestureHandler',
                displayName: 'how to handle user touches',
                type: 'val'
            }
        }
    },

};

export function blockDefInitHelper(defName: string) {
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

export function getOptPropBlockName(defName: string, propName: string): string {
    return `mutable_${defName}_${propName}_item`;
}
export function getOptPropInputName(propName: string): string {
    return `OProp_${propName}`;
}

export function createOptPropMutationItemBlock(
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

export function createUIBlockDef(uiBlock: UIBlockDesc): Blockly.BlockDefinition {

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
                        input.setAlign(Blockly.ALIGN_RIGHT);
                        input.appendField(propDesc.displayName);
                    } else if (propDesc.type == 'enum') {
                        input = this.appendDummyInput(inputName);
                        input.setAlign(Blockly.ALIGN_RIGHT);
                        input.appendField(propDesc.displayName);
                        input.appendField(new Blockly.FieldDropdown(propDesc.enumVals), inputName);
                    } else if (propDesc.type == 'func') {
                        input = this.appendStatementInput(inputName);
                        input.appendField(propDesc.displayName);
                    } else if (propDesc.type == 'bool') {
                        input = this.appendDummyInput(inputName);
                        input.setAlign(Blockly.ALIGN_RIGHT);
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

export function generateRefPropCode(block: Blockly.Block, nameOverride?: string) {
    // REMOVE :
    if (nameOverride) console.log('generating refpropcode for', nameOverride);
    let name = nameOverride || block.getFieldValue('NAME');
    if (name && name != '') {
        let elemId = Blockly.JavaScript.variableDB_.getName(
            name,
            Blockly.Variables.NAME_TYPE);
        // goal: CgRt.addProp('ref',function(e){CgRt.setIdElem('name',e);});
        return BlocklyConfig.conditionalPropertySetting('ref',
            `function(e){CgRt.setIdElem('${elemId}',e);}`);
    }else{
        return '';
    }
}

export function generateOptPropCode(desc: UIBlockOptPropDesc, block: Blockly.Block): string {
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