Blockly.Blocks['user_interface'] = {
  init: function() {
    this.appendStatementInput("elements")
        .setCheck(null)
        .appendField("user interface");
    this.setColour(285);
    this.setTooltip('insert the elements of the UI');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['container_element'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("container UI");
    this.appendStatementInput("child elements")
        .setCheck(null);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['text_element'] = {
  init: function() {
    this.appendValueInput("text value")
        .setCheck("String")
        .appendField("text UI");
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['image_element'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("image UI");
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};