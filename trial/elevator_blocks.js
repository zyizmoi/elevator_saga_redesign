Blockly.Blocks['elevator_frame_basic'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("Name your program!"), "NAME");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['for_each_elevator'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Check each elevator");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['find_idle_elevator'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Find idle elevator");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['find_idle_elevator_improved'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Find idle elevator");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scan_floors'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Scan all floors");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_pressed_floors'] = {
  init: function() {
    this.appendStatementInput("action")
        .appendField("Check if any floors have buttons pressed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['choose_first_button'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Choose first button found");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_to_floor_target'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Go to floor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_to_floor_queue'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Go to next floor in queue");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_elevator_stops'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("If elevator stops on floor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remove_floor_from_queue'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Remove floor from queue");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['toggle_indicator'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Change up/down indicator");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['options'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Elevator movement options")
        .appendField(new Blockly.FieldDropdown([["Lowest floor","min"], ["Highest floor","max"], ["Default","default"]]), "options");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['switch'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("Switch between options");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['do_when_idle'] = {
  init: function() {
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("When elevator is not moving");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['when_passenger_presses'] = {
  init: function() {
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("When passenger presses floor number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['when_passing_floor'] = {
  init: function() {
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("When elevator is passing a floor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['when_stopped'] = {
  init: function() {
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("When elevator is stopped on floor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['updown_button_pressed'] = {
  init: function() {
    this.appendStatementInput("todo")
        .setCheck(null)
        .appendField("When passenger calls for elevator");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_to_floor_specific'] = {
  init: function() {
    this.appendValueInput("floor_num")
        .setCheck("Number")
        .appendField("Go to specified floor");
    this.appendValueInput("go_directly")
        .setCheck("Boolean");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_to_floor_specific_basic'] = {
  init: function() {
    this.appendValueInput("floor_num")
        .setCheck("Number")
        .appendField("Go to specified floor");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go_to_floor_specific_target'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go to pressed floor");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


