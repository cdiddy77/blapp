/// <reference path="../localtypings/blockly.d.ts" />

export function init3dBlocks() {
    Blockly.Blocks['on_start'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("On Start");
            this.appendStatementInput("statements")
                .setCheck(null);
            this.setColour(230);
            this.setTooltip("Set up your scene here");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['on_start'] = function (block: Blockly.Block) {
        let statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
        let code = `\nCgRt.setOnStartProc(function(){\n`;
        code += statements_statements;
        code += '\n});';
        return code;
    };

    Blockly.Blocks['on_frame'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("On Frame");
            this.appendStatementInput("statements")
                .setCheck(null);
            this.setColour(45);
            this.setTooltip("Update your scene here before each rendering");
            this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['on_frame'] = function (block: Blockly.Block) {
        let statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
        let code = `\nCgRt.setOnFrameProc(function(){\n`;
        code += statements_statements;
        code += '\n});';
        return code;
    };
    Blockly.Blocks['on_mouse_event'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("On Mouse Event")
              .appendField(new Blockly.FieldDropdown([["down","DOWN"], ["move","MOVE"], ["up","UP"]]), "EVENTTYPE");
          this.appendStatementInput("statements")
              .setCheck(null);
          this.setColour(230);
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };
      Blockly.JavaScript['on_mouse_event'] = function(block:Blockly.Block) {
        var dropdown_eventtype = block.getFieldValue('EVENTTYPE');
        var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
        let code = `\nCgRt.setOnFrameProc(function(){\n`;
        code += statements_statements;
        code += '\n});';
        return code;
      };
    Blockly.Blocks['create_plane_geometry'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create plane");
            this.appendValueInput("width")
                .setCheck("Number")
                .appendField("width");
            this.appendValueInput("height")
                .setCheck("Number")
                .appendField("height");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['create_plane_geometry'] = function (block: Blockly.Block) {
        let value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_COMMA);
        let value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_COMMA);
        let code = `CgRt.createPlaneGeometry(${value_width},${value_height})`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };
    Blockly.Blocks['create_cube_geometry'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create cube");
            this.appendValueInput("width")
                .setCheck("Number")
                .appendField("width");
            this.appendValueInput("height")
                .setCheck("Number")
                .appendField("height");
            this.appendValueInput("depth")
                .setCheck("Number")
                .appendField("depth");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['create_cube_geometry'] = function (block: Blockly.Block) {
        var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_COMMA);
        var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_COMMA);
        var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_COMMA);
        let code = `CgRt.createCubeGeometry(${value_width},${value_height},${value_depth})`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.Blocks['create_sphere_geometry'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create sphere");
            this.appendValueInput("radius")
                .setCheck("Number")
                .appendField("radius");
            this.appendValueInput("width")
                .setCheck("Number")
                .appendField("width");
            this.appendValueInput("height")
                .setCheck("Number")
                .appendField("height");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['create_sphere_geometry'] = function (block: Blockly.Block) {
        var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_COMMA);
        var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_COMMA);
        var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_COMMA);
        let code = `CgRt.createSphereGeometry(${value_radius},${value_width},${value_height})`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };
    Blockly.Blocks['create_mesh_basic_material'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create mesh basic material")
                .appendField("color")
                .appendField(new Blockly.FieldColour("#ff0000"), "color")
                .appendField("wireframe")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "wireframe");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['create_mesh_basic_material'] = function (block: Blockly.Block) {
        let colour_color = block.getFieldValue('color');
        let checkbox_wireframe = block.getFieldValue('wireframe') == 'TRUE';
        let code = `CgRt.createMeshBasicMaterial("${colour_color}",${checkbox_wireframe})`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.Blocks['create_mesh'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create mesh");
            this.appendValueInput("geometry")
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("geometry");
            this.appendValueInput("material")
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("material");
            this.setInputsInline(false);
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['create_mesh'] = function (block: Blockly.Block) {
        let value_geometry = Blockly.JavaScript.valueToCode(block, 'geometry', Blockly.JavaScript.ORDER_ATOMIC);
        let value_material = Blockly.JavaScript.valueToCode(block, 'material', Blockly.JavaScript.ORDER_ATOMIC);
        if (!value_geometry || value_geometry == '') value_geometry = 'null';
        if (!value_material || value_material == '') value_material = 'null';
        let code = `CgRt.createMesh(${value_geometry},${value_material})`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.Blocks['create_spotlight'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create spotlight")
                .appendField("")
                .appendField(new Blockly.FieldColour("#ffffff"), "color");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['create_spotlight'] = function (block: Blockly.Block) {
        var colour_color = block.getFieldValue('color');
        let code = `CgRt.createSpotlight("${colour_color}")`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.Blocks['create_ambientlight'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create ambient light")
                .appendField("")
                .appendField(new Blockly.FieldColour("#ffffff"), "color");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['create_ambientlight'] = function (block: Blockly.Block) {
        var colour_color = block.getFieldValue('color');
        let code = `CgRt.createAmbientlight("${colour_color}")`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.Blocks['scene_add'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("add to scene");
            this.appendValueInput("object")
                .setCheck(null);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['scene_add'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.sceneAdd(${value_object});\n`;
        return code;
    };

    Blockly.Blocks['set_rotation'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("set rotation");
            this.appendValueInput("x")
                .setCheck("Number")
                .appendField("x");
            this.appendValueInput("y")
                .setCheck("Number")
                .appendField("y");
            this.appendValueInput("z")
                .setCheck("Number")
                .appendField("z");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['set_rotation'] = function (block: Blockly.Block) {
        var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_COMMA);
        var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_COMMA);
        var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.setRotation(${value_object},${value_x},${value_y},${value_z});\n`;
        return code;
    };

    Blockly.Blocks['set_position'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("set position");
            this.appendValueInput("x")
                .setCheck("Number")
                .appendField("x");
            this.appendValueInput("y")
                .setCheck("Number")
                .appendField("y");
            this.appendValueInput("z")
                .setCheck("Number")
                .appendField("z");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['set_position'] = function (block: Blockly.Block) {
        var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_COMMA);
        var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_COMMA);
        var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.setPosition(${value_object},${value_x},${value_y},${value_z});\n`;
        return code;
    };
    Blockly.Blocks['set_rotation_x'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("set rotation X");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['set_rotation_x'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.setRotationX(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['set_rotation_y'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("set rotation Y");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['set_rotation_y'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.setRotationY(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['set_rotation_z'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("set rotation Z");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['set_rotation_z'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.setRotationZ(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['set_position_x'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("set position X");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['set_position_x'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.setPositionX(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['set_position_y'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("set position Y");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['set_position_y'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.setPositionY(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['set_position_z'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("set position Z");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['set_position_z'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.setPositionZ(${value_object},${value_value});\n`;
        return code;
    };

    ///////////////////////////////////////////
    Blockly.Blocks['change_rotation_x'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("change rotation X");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['change_rotation_x'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.changeRotationX(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['change_rotation_y'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("change rotation Y");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['change_rotation_y'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.changeRotationY(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['change_rotation_z'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("change rotation Z");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['change_rotation_z'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.changeRotationZ(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['change_position_x'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("change position X");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['change_position_x'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.changePositionX(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['change_position_y'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("change position Y");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['change_position_y'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.changePositionY(${value_object},${value_value});\n`;
        return code;
    };
    Blockly.Blocks['change_position_z'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("change position Z");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['change_position_z'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        if (!block.parentBlock_ || !value_object || value_object == '')
            return '';
        let code = `CgRt.changePositionZ(${value_object},${value_value});\n`;
        return code;
    };

    ///////////////////////////////////////////
    Blockly.Blocks['object_position'] = {
        init: function () {
            this.appendValueInput("object")
                .setCheck(null)
                .appendField("object");
            this.appendDummyInput()
                .appendField("position");
            this.setInputsInline(true);
            this.setOutput(true, "Position");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['object_position'] = function (block: Blockly.Block) {
        let value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_COMMA);
        let code = `CgRt.getPosition(${value_object})`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.Blocks['scene_position'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("scene position");
            this.setInputsInline(true);
            this.setOutput(true, "Position");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['scene_position'] = function (block: Blockly.Block) {
        let code = `CgRt.getScenePosition()`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.Blocks['camera_position'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("camera position");
            this.setInputsInline(true);
            this.setOutput(true, "Position");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['camera_position'] = function (block: Blockly.Block) {
        let code = `CgRt.getCameraPosition()`;
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    Blockly.Blocks['camera_set_position_x'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("set camera X");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['camera_set_position_x'] = function (block: Blockly.Block) {
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `CgRt.setCameraPositionX(${value_value});\n`;
        return code;
    };
    Blockly.Blocks['camera_set_position_y'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("set camera Y");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['camera_set_position_y'] = function (block: Blockly.Block) {
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `CgRt.setCameraPositionY(${value_value});\n`;
        return code;
    };
    Blockly.Blocks['camera_set_position_z'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("set camera Z");
            this.appendValueInput("value")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['camera_set_position_z'] = function (block: Blockly.Block) {
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
        let code = `CgRt.setCameraPositionZ(${value_value});\n`;
        return code;
    };

    Blockly.Blocks['camera_lookat'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("point camera towards");
            this.appendValueInput("value")
                .setCheck(null);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['camera_lookat'] = function (block: Blockly.Block) {
        let value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
        if (!block.parentBlock_)
            return '';
        let code = `CgRt.cameraLookAtPosition(${value_value});\n`;
        return code;
    };
}