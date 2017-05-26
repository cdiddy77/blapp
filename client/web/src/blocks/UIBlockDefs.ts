/// <reference path="../localtypings/blockly.d.ts" />

import * as jsutil from '../../../shared/src/util/jsutil';
import * as BlocklyConfig from './BlocklyConfig';
import * as UIBlockConfig from './UIBlockConfig';

export function initAllUIBlockDefs(getStorageVarsProc: () => any[][]) {

    // create block items for mutator ui
    for (let p in UIBlockConfig.uiBlockDescriptors) {
        let blockDesc = UIBlockConfig.uiBlockDescriptors[p];
        for (let pop in blockDesc.optionalProps) {
            let mutateItemBlockName = UIBlockConfig.getOptPropBlockName(p, pop);
            if (!Blockly.Blocks[mutateItemBlockName]) {
                Blockly.Blocks[mutateItemBlockName] = UIBlockConfig.createOptPropMutationItemBlock(
                    blockDesc.optionalProps[pop]);
            }
        }
    }

    let defName = 'view_element';
    let viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
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
            .appendField("style");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setColour(285);
        this.setTooltip('');
        this.setHelpUrl('');
        UIBlockConfig.blockDefInitHelper.call(this, 'view_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;

    defName = 'scrollview_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
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
            .appendField("style");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setColour(285);
        this.setTooltip('');
        this.setHelpUrl('');
        UIBlockConfig.blockDefInitHelper.call(this, 'scrollview_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;

    defName = 'textinput_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
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
            .appendField("style");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip('');
        this.setHelpUrl('');
        UIBlockConfig.blockDefInitHelper.call(this, 'textinput_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;

    defName = 'touchable_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
    viewBlockDef.init = function () {
        this.appendDummyInput()
            .appendField("touchable container UI");
        this.appendStatementInput("child elements")
            .setCheck(null);
        this.appendValueInput("style")
            .setCheck("STYLE")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("style");
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
        UIBlockConfig.blockDefInitHelper.call(this, 'touchable_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;
    /////////////////////////////////////////////////
    //
    // insert more ui block definitions here
    //
    // FRIENDLY : HERE BE block definitions
    // FRIENDLY : group
    defName = 'friendly_group_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
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
        UIBlockConfig.blockDefInitHelper.call(this, 'friendly_group_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;
    // FRIENDLY : scroller
    defName = 'friendly_scroller_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
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
        UIBlockConfig.blockDefInitHelper.call(this, 'friendly_scroller_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;
    // FRIENDLY : button
    defName = 'friendly_button_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
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
                ["small (accented)", "small_accent"],
                ["medium (accented)", "medium_accent"],
                ["large (accented)", "large_accent"],
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
        UIBlockConfig.blockDefInitHelper.call(this, 'friendly_button_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;
    // FRIENDLY : text
    defName = 'friendly_text_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
    viewBlockDef.init = function () {
        this.appendValueInput("text value")
            .setCheck(null)
            .appendField("Text")
            .appendField(new Blockly.FieldImage("/media/action/ic_open_with_white_48dp.png", 16, 16, "*"))
            // .appendField("flex?")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "isFlex")
            .appendField("class")
            .appendField(new Blockly.FieldDropdown([
                ["label", "label"],
                ["button", "button"],
                ["accented button", "button_accent"],
                ["menu", "menu"],
                ["caption", "caption"],
                ["body", "body"],
                ["subtitle", "subtitle"],
                ["title", "title"],
                ["headline", "headline"],
                ["(none)", "none"],
            ]), "visual purpose");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setColour(230);
        this.setTooltip('create an element that can be clicked or touched to execute code');
        this.setHelpUrl('');
        UIBlockConfig.blockDefInitHelper.call(this, 'friendly_text_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;
    // FRIENDLY : image
    defName = 'friendly_image_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
    viewBlockDef.init = function () {
        this.appendValueInput("URL")
            .setCheck("String")
            .appendField("Image")
            .appendField(new Blockly.FieldImage("/media/action/ic_open_with_white_48dp.png", 16, 16, "*"))
            .appendField(new Blockly.FieldCheckbox("FALSE"), "isFlex")
            .appendField("width")
            .appendField(new Blockly.FieldNumber(80), "width")
            .appendField("height")
            .appendField(new Blockly.FieldNumber(60), "height")
            .appendField("URL");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip('');
        this.setHelpUrl(''); 
        UIBlockConfig.blockDefInitHelper.call(this, 'friendly_image_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;
    // FRIENDLY : textinput
    defName = 'friendly_textinput_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
    viewBlockDef.init = function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(""), "NAME")
            .appendField("Text Input")
            .appendField(new Blockly.FieldImage("/media/action/ic_open_with_white_48dp.png", 16, 16, "*"))
            .appendField(new Blockly.FieldCheckbox("FALSE"), "isFlex")
            // this.appendDummyInput("storage")
            // .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("class")
            .appendField(new Blockly.FieldDropdown([
                ["inline", "inline"],
                ["form", "form"],
                ["headline", "headline"],
                ["(none)", "none"],
            ]), "visual purpose")
            .appendField("stored in variable")
            .appendField(new Blockly.FieldDropdown(getStorageVarsProc), "storage");
        // this.appendValueInput("style")
        //     .setCheck("STYLE")
        //     .setAlign(Blockly.ALIGN_RIGHT)
        //     .appendField("style");
        // this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip('');
        this.setHelpUrl('');
        UIBlockConfig.blockDefInitHelper.call(this, 'friendly_textinput_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;
    // divider
    defName = 'friendly_divider_element';
    viewBlockDef = UIBlockConfig.createUIBlockDef(UIBlockConfig.uiBlockDescriptors[defName]);
    viewBlockDef.init = function () {
        this.appendDummyInput()
            .appendField("Divider")
            .appendField("class")
            .appendField(new Blockly.FieldDropdown([
                ["horizontal top", "horizontaltop"],
                ["horizontal bottom", "horizontalbottom"],
                ["vertical left", "verticalleft"],
                ["vertical right", "verticalright"],
                ["(none)", "none"],
            ]), "visual purpose");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip('');
        this.setHelpUrl('');
        UIBlockConfig.blockDefInitHelper.call(this, 'friendly_divider_element');
    };
    Blockly.Blocks[defName] = viewBlockDef;
    //
    /////////////////////////////////////////////////////////////////////////////////////////

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

export function initUIBlockCodegen() {
    Blockly.JavaScript['view_element'] = function (block: Blockly.Block) {
        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');

        // let value_pointerEvents = block.getFieldValue(UIBlockConfig.getOptPropInputName('pointerEvents'));
        // let statements_onLayout = Blockly.JavaScript.statementToCode(block, UIBlockConfig.getOptPropInputName('onLayout'));
        // properties
        let code = '{\nCgRt.beginProps();\n';

        code += UIBlockConfig.generateRefPropCode(block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['pointerEvents'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onLayout'], block);
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
        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
        // properties
        let code = '{\nCgRt.beginProps();\n';

        code += UIBlockConfig.generateRefPropCode(block);

        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['pointerEvents'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onLayout'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['contentContainerStyle'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['horizontal'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['keyboardDismissMode'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['keyboardShouldPersistTaps'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['scrollEnabled'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['showsHorizontalScrollIndicator'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['showsVerticalScrollIndicator'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['pagingEnabled'], block);

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
        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        let dropdown_storage = Blockly.JavaScript.variableDB_.getName(
            block.getFieldValue('storage'),
            Blockly.Variables.NAME_TYPE);

        // properties
        let code = '{\nCgRt.beginProps();\n';
        let statements_onChangeText = Blockly.JavaScript.statementToCode(block, UIBlockConfig.getOptPropInputName('onChangeText'));

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

        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['autoCapitalize'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['autoCorrect'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['autoFocus'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['blurOnSubmit'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['caretHidden'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['defaultValue'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['editable'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['keyboardType'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['maxLength'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['multiline'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onBlur'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onEndEditing'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onFocus'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onSelectionChange'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onSubmitEditing'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['placeholder'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['returnKeyType'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['secureTextEntry'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['selectTextOnFocus'], block);

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
        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        var statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
        var statements_onpress = Blockly.JavaScript.statementToCode(block, 'onPress');
        // TODO: Assemble JavaScript into code variable.
        let code = '{\nCgRt.beginProps();\n';

        code += BlocklyConfig.conditionalPropertySetting('onPress', `function(){${statements_onpress}\nCgRt.updateUI();}`);

        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['disabled'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['activeOpacity'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['underlayColor'], block);
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

        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        // let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');

        // let value_pointerEvents = block.getFieldValue(UIBlockConfig.getOptPropInputName('pointerEvents'));
        // let statements_onLayout = Blockly.JavaScript.statementToCode(block, UIBlockConfig.getOptPropInputName('onLayout'));
        // properties
        let code = '{\nCgRt.beginProps();\n';

        code += UIBlockConfig.generateRefPropCode(block);
        if (checkbox_isflex)
            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
        code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('childDirection', dropdown_child_direction);
        code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['theme'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onLayout'], block);
        // code += BlocklyConfig.conditionalStringPropertySetting('pointerEvents', `'${value_pointerEvents}'`);
        // code += BlocklyConfig.conditionalFuncPropertySetting('onLayout', statements_onLayout, false);

        //styles
        let value_style = Blockly.JavaScript.valueToCode(block, UIBlockConfig.getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
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

        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        // let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');

        // let value_pointerEvents = block.getFieldValue(UIBlockConfig.getOptPropInputName('pointerEvents'));
        // let statements_onLayout = Blockly.JavaScript.statementToCode(block, UIBlockConfig.getOptPropInputName('onLayout'));
        // properties
        let code = '{\nCgRt.beginProps();\n';

        code += UIBlockConfig.generateRefPropCode(block);
        if (checkbox_isflex)
            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
        code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['theme'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['pointerEvents'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onLayout'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['contentContainerStyle'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['horizontal'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['keyboardDismissMode'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['keyboardShouldPersistTaps'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['scrollEnabled'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['showsHorizontalScrollIndicator'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['showsVerticalScrollIndicator'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['pagingEnabled'], block);

        //styles
        let value_style = Blockly.JavaScript.valueToCode(block, UIBlockConfig.getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
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
        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        var checkbox_isflex = block.getFieldValue('isFlex') == 'TRUE';
        var dropdown_visual_purpose = block.getFieldValue('visual purpose');
        var statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');
        var statements_onpress = Blockly.JavaScript.statementToCode(block, 'onPress');

        let code = '{\nCgRt.beginProps();\n';

        code += UIBlockConfig.generateRefPropCode(block);
        code += BlocklyConfig.conditionalPropertySetting('onPress', `function(){${statements_onpress}\nCgRt.updateUI();}`);

        if (checkbox_isflex)
            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
        code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['theme'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['disabled'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['activeOpacity'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['underlayColor'], block);
        // code += BlocklyConfig.conditionalStringPropertySetting('pointerEvents', `'${value_pointerEvents}'`);
        // code += BlocklyConfig.conditionalFuncPropertySetting('onLayout', statements_onLayout, false);

        //styles
        var value_style = Blockly.JavaScript.valueToCode(block, UIBlockConfig.getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
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
        let checkbox_isflex = block.getFieldValue('isFlex') == 'TRUE';
        let dropdown_visual_purpose = block.getFieldValue('visual purpose');
        let value_text_value = Blockly.JavaScript.valueToCode(block, 'text value', Blockly.JavaScript.ORDER_ATOMIC);
        // properties
        let code = '{\nCgRt.beginProps();\n';

        code += UIBlockConfig.generateRefPropCode(block);

        if (checkbox_isflex)
            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
        code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);

        //styles
        let value_style = Blockly.JavaScript.valueToCode(block, UIBlockConfig.getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
        if (value_style && value_style !== '') {
            code += '\nCgRt.addProp("style",' + value_style + ');';
        }
        //endprops
        let propsVarName = BlocklyConfig.getVarName('p');
        code += `\nvar ${propsVarName}=CgRt.getProps();`;

        code += `\nCgRt.pushElem(CgRt.createElement(CgRt.TextBlockf,${propsVarName},[`;
        code += value_text_value && value_text_value !== '' ? value_text_value : "''";
        code += ']));\n}\n';
        return code;
    };
    // FRIENDLY : image
    Blockly.JavaScript['friendly_image_element'] = function (block: Blockly.Block) {
        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        let checkbox_isflex = block.getFieldValue('isFlex') == 'TRUE';
        let number_width = block.getFieldValue('width');
        let number_height = block.getFieldValue('height');
        let value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);

        //properties
        let code = '\n{\nCgRt.beginProps();\n';

        code += '\nCgRt.addProp("source",{uri:';
        code += value_url && value_url !== '' ? value_url : "''";
        code += '});'

        if (checkbox_isflex)
            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
        code += BlocklyConfig.conditionalPropertySetting('width', number_width);
        code += BlocklyConfig.conditionalPropertySetting('height', number_height);

        //styles
        let value_style = Blockly.JavaScript.valueToCode(block, UIBlockConfig.getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
        if (value_style && value_style !== '') {
            code += '\nCgRt.addProp("style",' + value_style + ');';
        }

        //endprops
        code += '\nvar p=CgRt.getProps();';

        code += '\nCgRt.pushElem(CgRt.createElement(CgRt.ImageBlockf,p));\n}';
        return code;
    };
    // FRIENDLY : textinput
    Blockly.JavaScript['friendly_textinput_element'] = function (block: Blockly.Block) {
        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        let dropdown_storage = Blockly.JavaScript.variableDB_.getName(
            block.getFieldValue('storage'),
            Blockly.Variables.NAME_TYPE);
        let checkbox_isflex = block.getFieldValue('isFlex') == 'TRUE';
        let dropdown_visual_purpose = block.getFieldValue('visual purpose');

        // properties
        let code = '{\nCgRt.beginProps();\n';
        let statements_onChangeText = Blockly.JavaScript.statementToCode(block, UIBlockConfig.getOptPropInputName('onChangeText'));

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

        code += UIBlockConfig.generateRefPropCode(block);
        if (checkbox_isflex)
            code += BlocklyConfig.conditionalBoolPropertySetting('isFlex', checkbox_isflex);
        code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);

        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['autoCapitalize'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['autoCorrect'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['autoFocus'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['blurOnSubmit'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['caretHidden'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['defaultValue'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['editable'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['keyboardType'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['maxLength'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['multiline'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onBlur'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onEndEditing'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onFocus'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onSelectionChange'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['onSubmitEditing'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['placeholder'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['returnKeyType'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['secureTextEntry'], block);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['selectTextOnFocus'], block);

        //styles
        let value_style = Blockly.JavaScript.valueToCode(block, UIBlockConfig.getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
        if (value_style && value_style !== '') {
            code += '\nCgRt.addProp("style",' + value_style + ');';
        }
        //endprops
        let propsVarName = BlocklyConfig.getVarName('p');
        code += `\nvar ${propsVarName}=CgRt.getProps();`;

        code += `\nCgRt.pushElem(CgRt.createElement(CgRt.TextInputBlockf,${propsVarName},[]));\n}\n`;
        return code;
    };
    // FRIENDLY : rectangle    
    Blockly.JavaScript['friendly_divider_element'] = function (block: Blockly.Block) {
        let dropdown_visual_purpose = block.getFieldValue('visual purpose');

        let blockdesc = UIBlockConfig.uiBlockDescriptors[block.type];
        // let statements_child_elements = Blockly.JavaScript.statementToCode(block, 'child elements');

        // let value_pointerEvents = block.getFieldValue(UIBlockConfig.getOptPropInputName('pointerEvents'));
        // let statements_onLayout = Blockly.JavaScript.statementToCode(block, UIBlockConfig.getOptPropInputName('onLayout'));
        // properties
        let code = '{\nCgRt.beginProps();\n';

        code += UIBlockConfig.generateRefPropCode(block);
        code += BlocklyConfig.conditionalAddQuotesToFieldValuePropertySetting('visualPurpose', dropdown_visual_purpose);
        code += UIBlockConfig.generateOptPropCode(blockdesc.optionalProps['theme'], block);
        // code += BlocklyConfig.conditionalStringPropertySetting('pointerEvents', `'${value_pointerEvents}'`);
        // code += BlocklyConfig.conditionalFuncPropertySetting('onLayout', statements_onLayout, false);

        //styles
        let value_style = Blockly.JavaScript.valueToCode(block, UIBlockConfig.getOptPropInputName('style'), Blockly.JavaScript.ORDER_ATOMIC);
        if (value_style && value_style !== '') {
            code += '\nCgRt.addProp("style",' + value_style + ');';
        }
        //endprops
        let propsVarName = BlocklyConfig.getVarName('p');
        code += `\nvar ${propsVarName}=CgRt.getProps();`;

        // children
        code += `\nCgRt.pushElem(CgRt.createElement(CgRt.DividerBlockf, ${propsVarName}));\n}\n`;
        return code;
    };
}
