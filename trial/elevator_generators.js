// generators for full basic solution

// working
// basic spine for basic soln, shown by default
Blockly.JavaScript['elevator_frame_basic'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = '{\ninit: function(elevators, floors) {\n  console.clear();\n  const weight = 0.3;\n  const maxFloor = floors.length-1;\n  var elevator = elevators[0];\n\n'
  + '  let distance = function( elevator, floorNum) {\n    return Math.abs( elevator.currentFloor() - floorNum);\n}\n' 
  + '  let findIdle = function( floorNum) {\n    return elevators.filter( (elevator) => (elevator.destinationQueue.length == 0))'
  +'\n      .sort( (a,b) => (distance(a, floorNum) - distance(b, floorNum)) );\n  };\n'
  + statements_todo + '  }, \n update: function(dt, elevators, floors) {\n}\n}'    
  return code;
};

// working
Blockly.JavaScript['scan_floors'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'floors.forEach(function (floor) {\n' + statements_todo + '});\n';
  return code;
};

// working
Blockly.JavaScript['updown_button_pressed'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'floor.on("up_button_pressed down_button_pressed", function() {\n' + statements_todo + '});\n';
  return code;
};

// working
Blockly.JavaScript['find_idle_elevator'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'let choice = findIdle( floor.floorNum());\nif (choice.length) {\n  choice[0].goToFloor( floor.floorNum());\n}\n';
  return code;
};

// working
Blockly.JavaScript['find_idle_elevator_improved'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'let choice = findIdle( floor.floorNum());\nif (choice.length) {\n  choice[0].goToFloor( floor.floorNum());\n}\n';
  return code;
};

// working
Blockly.JavaScript['for_each_elevator'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevators.forEach(function (elevator, index) {\n  elevator.id = index;\n' + statements_todo + '});\n';
  return code;
};

// working
Blockly.JavaScript['do_when_idle'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.on("idle", function() {\n' + statements_action + '});\n';
  return code;
};

// working
Blockly.JavaScript['get_pressed_floors'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = 'let demand = floors.filter((floor) => (floor.buttonStates.up || floor.buttonStates.down));\n';
  return code;
};

//working
Blockly.JavaScript['choose_first_button'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if (demand.length) {\n  target = demand[0].floorNum();\n} else {\n  target = 0;\n}\n';
  return code;
};

// working
Blockly.JavaScript['go_to_floor_target'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.goToFloor(target);\n';
  return code;
};

// working
Blockly.JavaScript['go_to_floor_queue'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.goToFloor(floorNum, true);\n';
  return code;
};

// working
Blockly.JavaScript['when_passenger_presses'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.on("floor_button_pressed", function (floorNum) {\n  let target = floorNum;\n' + statements_action + '});\n';
  return code;
};

// working
Blockly.JavaScript['when_passing_floor'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.on("passing_floor", function (floorNum, direction) {\n  let floor = floors[floorNum];\n'
  + '  let pressed = elevator.getPressedFloors();\n  let stop = floor.buttonStates[direction] && elevator.loadFactor() < weight;\n' 
  + statements_action + '});\n';
  return code;
};

// working
Blockly.JavaScript['if_elevator_stops'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if (stop || (pressed.indexOf( floorNum) >= 0)) {\n' + statements_todo + '}\n';
  return code;
};

// working
Blockly.JavaScript['remove_floor_from_queue'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.destinationQueue = elevator.destinationQueue.filter( (d) => (d !== floorNum));\n';
  return code;
};

// working
Blockly.JavaScript['when_stopped'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.on("stopped_at_floor", function (floorNum) {\n' + statements_action + '});\n';
  return code;
};

// working
Blockly.JavaScript['options'] = function(block) {
  var conditions = {
    'min': '  case 0:\n   up = true;\n   down = false;\n   break;\n',
    'max': '  case maxFloor:\n   up = false;\n   down = true;\n   break;\n',
    'default': '  default:\n   up = true;\n   down = true;\n   break;\n'
  };
  var allConditions = '  case 0:\n   up = true;\n   down = false;\n   break;\n' + '  case maxFloor:\n   up = false;\n   down = true;\n   break;\n' + '  default:\n   up = true;\n   down = true;\n   break;\n'
  var options = block.getFieldValue('options');
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = allConditions;
  return code;
};

// working
Blockly.JavaScript['switch'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'switch (floorNum) {\n' + statements_todo + '}\n';
  return code;
};

// working
Blockly.JavaScript['toggle_indicator'] = function(block) {
  var statements_todo = Blockly.JavaScript.statementToCode(block, 'todo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.goingUpIndicator(up);\nelevator.goingDownIndicator(down);\n';
  return code;
};

// generators for rudimentary solution

// working
Blockly.JavaScript['go_to_floor_specific'] = function(block) {
  var value_floor_num = Blockly.JavaScript.valueToCode(block, 'floor_num', Blockly.JavaScript.ORDER_ATOMIC);
  var value_go_directly = Blockly.JavaScript.valueToCode(block, 'go_directly', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.goToFloor(' + value_floor_num + ',' + value_go_directly + ');\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// working
Blockly.JavaScript['go_to_floor_specific_basic'] = function(block) {
  var value_floor_num = Blockly.JavaScript.valueToCode(block, 'floor_num', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.goToFloor(' + value_floor_num + ');\n';
  return code;
};

Blockly.JavaScript['go_to_floor_specific_target'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'elevator.goToFloor(target);\n';
  return code;
};

