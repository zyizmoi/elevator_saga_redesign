'use strict';

goog.provide('Blockly.JavaScript.elevatorControls');
goog.require('Blockly.JavaScript');

Blockly.JavaScript['elevator_goToFloor'] = function (block) {
  var floor = Blockly.JavaScript.valueToCode(block, 'floorNum', Blockly.JavaScript.ORDER_ATOMIC);
  return 'elevator.goToFloor(' + floor + '); \n';
}

Blockly.JavaScript['distance'] = function (block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'distance');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
}

//Blockly.JavaScript['findIdle'] = function (block) {
//  var findIdle = Blockly.JavaScript.valueToCode(block, 'findIdle', Blockly.JavaScript.ORDER_ATOMIC);
//  // TODO: Change ORDER_NONE to the correct strength.
//  return [code, Blockly.JavaScript.ORDER_NONE];
//}
//
Blockly.JavaScript['demand'] = function (block) {
  var demand = Blockly.JavaScript.valueToCode(block, 'demand', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['fun_floor'] = function (block) {
  var floor2 = Blockly.JavaScript.valueToCode(block, 'fun_floor', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['findidlelift'] = function (block) {
  var findidlelift = Blockly.JavaScript.valueToCode(block, 'findidlelift', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['fun_passengercall'] = function (block) {
  var fun_passengercall = Blockly.JavaScript.valueToCode(block, 'fun_passengercall', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
}