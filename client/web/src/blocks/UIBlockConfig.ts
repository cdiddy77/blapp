/// <reference path="../localtypings/blockly.d.ts" />

import * as jsutil from '../../../shared/src/util/jsutil';
import { BlocklyConfig } from './BlocklyConfig';

export namespace UIBlockConfig {

    interface UIBlockOptPropDesc {
        name: string;
        displayName: string;
        type: 'val' | 'func' | 'text' | 'enum';
        enumVals?: string[][];
    }
    class UIBlockDesc {
        optionalProps: jsutil.Map<UIBlockOptPropDesc>;
    }

    interface UIBlockMutateInfo {
        descriptorName: string;
        installedProps: string[];
    }

    class OptPropMutatorItemBlock extends Blockly.Block {
        desc_: UIBlockOptPropDesc;
    }

    var uiBlockDescriptors: jsutil.Map<UIBlockDesc> = {
        'view-block': {
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
        }
    };

    export function initAllUIBlockDefs() {
        for (let p in uiBlockDescriptors) {
            let blockDesc = uiBlockDescriptors[p];
            for (let pop in blockDesc.optionalProps) {
                let mutateItemBlockName = getOptPropBlockName(p, pop);
                if (!Blockly.Blocks[mutateItemBlockName]) {
                    Blockly.Blocks[mutateItemBlockName] = createPropMutationItemBlock(
                        blockDesc.optionalProps[pop]);
                }
            }
        }

        // view-block definition
        const defName = 'view-block';
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
            this.setColour(285);
            this.setTooltip('');
            this.setHelpUrl('');
            blockDefInitHelper.call(this, defName);
        }
        Blockly.Blocks['mutable_block1'] = viewBlockDef;

        // insert more ui block definitions here

        // initialize the blocks used in the gear window
        Blockly.Blocks['mutable_block1_container'] = {
            /**
             * Mutator block for list container.
             * @this Blockly.Block
             */
            init: function () {
                this.setColour(230);
                this.appendDummyInput()
                    .appendField('block name properties');
                this.appendStatementInput('STACK');
                this.setTooltip('LISTS_CREATE_WITH_CONTAINER_TOOLTIP');
                this.contextMenu = false;
            }
        };

        Blockly.Blocks['mutable_block1_item'] = {
            /**
             * Mutator block for adding items.
             * @this Blockly.Block
             */
            init: function () {
                this.setColour(230);
                this.appendDummyInput().
                    appendField('propertyname')
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('LISTS_CREATE_WITH_ITEM_TOOLTIP');
                this.contextMenu = false;
            }
        };


    }

    function blockDefInitHelper(defName: string) {
        // CPROP : replace this with the set of properties that are included
        this.itemCount_ = 3;
        this.mutateInfo_ = {
            descriptorName: defName,
            installedProps: []
        };

        this.updateShape_();
        let desc = uiBlockDescriptors[defName];
        // CPROP : each mutable_block_item is going to have a different name and different props
        this.setMutator(new Blockly.Mutator(
            jsutil.mapToArray(desc.optionalProps, (k, v) => {
                return getOptPropBlockName(defName, k);
            })));

    }

    function getOptPropBlockName(defName: string, propName: string): string {
        return `mutable_${defName}_${propName}_item`;
    }
    function createPropMutationItemBlock(
        propDesc: UIBlockOptPropDesc): Blockly.BlockDefinition {
        return {
            /**
             * Mutator block for adding items.
             * @this Blockly.Block
             */
            init: function () {
                this.setColour(230);
                this.appendDummyInput().
                    appendField(propDesc.displayName)
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
        // CPROP : since each of these kinds of blocks are going to have a 
        // different set of properties, we need to figure out a way to store
        // that information. Presumably we can just add an optional property
        // on BlockDefinition
        return {
            init: null,
            /**
             * Create XML to represent list inputs.
             * @return {!Element} XML storage element.
             * @this Blockly.Block
             */
            mutationToDom: function () {
                var container = document.createElement('mutation');
                // CPROP : persist set of properties included
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
                // CPROP : read the set of properties that are included
                this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
                this.mutateInfo_ = {
                    descriptorName: xmlElement.getAttribute('desc'),
                    installedProps: xmlElement.getAttribute('installed').split(',')
                }
                this.updateShape_();
            },
            /**
             * Populate the mutator's dialog with this block's components.
             * @param {!Blockly.Workspace} workspace Mutator's workspace.
             * @return {!Blockly.Block} Root block in mutator.
             * @this Blockly.Block
             */
            decompose: function (workspace) {
                var containerBlock = workspace.newBlock('mutable_block1_container');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                let minfo = getMutateInfo(this);
                let desc = uiBlockDescriptors[minfo.descriptorName];
                // CPROP : for each of the props that have been selected
                for (var i = 0; i < minfo.installedProps.length; i++) {
                    var itemBlock = workspace.newBlock('mutable_block1_item');
                    // give it the correct name
                    itemBlock.appendDummyInput()
                        // CPROP : need a way to shoehorn the name of the property here
                        .appendField(desc.optionalProps[minfo.installedProps[i]].displayName);
                    // CPROP : need to stuff the name of the property in so that we can get it in 
                    // compose
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
            compose: function (containerBlock) {
                var itemBlock = containerBlock.getInputTargetBlock('STACK');
                // Count number of inputs.
                var connections = [];
                while (itemBlock) {
                    connections.push(itemBlock.valueConnection_);
                    itemBlock = itemBlock.nextConnection &&
                        itemBlock.nextConnection.targetBlock();
                }
                // CPROP : if we have an input that is no longer in the 
                // mutator container, we clean up the connection stuff
                // Disconnect any children that don't belong.
                for (var i = 0; i < this.itemCount_; i++) {
                    var connection = this.getInput('ADD' + i).connection.targetConnection;
                    if (connection && connections.indexOf(connection) == -1) {
                        connection.disconnect();
                    }
                }
                this.itemCount_ = connections.length;
                this.updateShape_();
                // Reconnect any child blocks.
                // CPROP : reconnect
                for (var i = 0; i < this.itemCount_; i++) {
                    Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
                }
            },
            /**
             * Store pointers to any connected child blocks.
             * @param {!Blockly.Block} containerBlock Root block in mutator.
             * @this Blockly.Block
             */
            saveConnections: function (containerBlock) {
                var itemBlock = containerBlock.getInputTargetBlock('STACK');
                var i = 0;
                // CPROP : not sure how we are going to accomplish this
                while (itemBlock) {
                    var input = this.getInput('ADD' + i);
                    itemBlock.valueConnection_ = input && input.connection.targetConnection;
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

                // CPROP : for properties that the user added
                // Add new inputs.
                for (var i = 0; i < this.itemCount_; i++) {
                    if (!this.getInput('ADD' + i)) {
                        var input = this.appendValueInput('ADD' + i);
                        if (i == 0) {
                            input.appendField('block name');
                        }
                    }
                }
                // CPROP : for properties that aren't there any more
                // Remove deleted inputs.
                while (this.getInput('ADD' + i)) {
                    this.removeInput('ADD' + i);
                    i++;
                }
            }
        };

    }

    export function initTestBlockCodegen() {
        Blockly.JavaScript['mutable_block1'] = function (block: Blockly.Block) {
            let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
            // properties
            let code = '{\nCgRt.beginProps();\n';

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

    }
}