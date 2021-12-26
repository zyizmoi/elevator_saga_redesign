/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.elevator');  // Deprecated
goog.provide('Blockly.Constants.elevator');

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldImage');
goog.require('Blockly.FieldMultilineInput');
goog.require('Blockly.FieldTextInput');
goog.require('Blockly.FieldVariable');
goog.require('Blockly.Mutator');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['TEXTS_HUE']. (2018 April 5)
 */
Blockly.Constants.elevator.HUE = 160;

Blockly.defineBlocksWithJsonArray([{
  "type": "elevator_controls",
  "message0": "goToFloor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "floorNum"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray([{
  "type": "distance",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "distance"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}]);

//Blockly.defineBlocksWithJsonArray([{
//  "type": "findIdle",
//  "message0": "%1",
//  "args0": [
//    {
//      "type": "field_variable",
//      "name": "NAME",
//      "variable": "findIdle"
//    }
//  ],
//  "output": null,
//  "colour": 330,
//  "tooltip": "",
//  "helpUrl": ""
//}]);

Blockly.defineBlocksWithJsonArray([{
  "type": "demand",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "demand"
    }
  ],
  "output": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray([{
  "type": "fun_floor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "function (floor)"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray([{
  "type": "findidlelift",
  "message0": "%1",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "find idle elevator"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray([{
  "type": "fun_passengercall",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "When passenger calls for lift"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
}]);





