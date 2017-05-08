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
        desc_?: UIBlockOptPropDesc;
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
            this.setInputsInline(false);
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
                console.log('mutationToDom', this.type);
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
                console.log('domToMutation', this.type);
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
                console.log('decompose', this.type);
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
                console.log('compose', this.type);
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
                console.log('saveConnections', this.type);
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
                console.log('updateShape_', this.type);
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
                            input.appendField(propDesc.displayName);
                            input.appendField(new Blockly.FieldDropdown(propDesc.enumVals), inputName);
                        } else if (propDesc.type == 'func') {
                            input = this.appendStatementInput(inputName);
                            input.appendField(propDesc.displayName);
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