/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Variable blocks for Blockly.

 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

// goog.provide('Blockly.Blocks.variables');  // Deprecated.  
// goog.provide('Blockly.Constants.Variables');

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldVariable');



var asFloor = function(obj, floorLevel, yPosition, errorHandler) {
    var floor = riot.observable(obj);

    floor.level = floorLevel;
    floor.yPosition = yPosition;
    floor.buttonStates = {up: "", down: ""};

    // TODO: Ideally the floor should have a facade where tryTrigger is done
    var tryTrigger = function(event, arg1, arg2, arg3, arg4) {
        try {
            floor.trigger(event, arg1, arg2, arg3, arg4);
        } catch(e) { errorHandler(e); }
    };

    floor.pressUpButton = function() {
        var prev = floor.buttonStates.up;
        floor.buttonStates.up = "activated";
        if(prev !== floor.buttonStates.up) {
            tryTrigger("buttonstate_change", floor.buttonStates);
            tryTrigger("up_button_pressed", floor);
        }
    };

    floor.pressDownButton = function() {
        var prev = floor.buttonStates.down;
        floor.buttonStates.down = "activated";
        if(prev !== floor.buttonStates.down) {
            tryTrigger("buttonstate_change", floor.buttonStates);
            tryTrigger("down_button_pressed", floor);
        }
    };

    floor.elevatorAvailable = function(elevator) {
        if(elevator.goingUpIndicator && floor.buttonStates.up) {
            floor.buttonStates.up = "";
            tryTrigger("buttonstate_change", floor.buttonStates);
        }
        if(elevator.goingDownIndicator && floor.buttonStates.down) {
            floor.buttonStates.down = "";
            tryTrigger("buttonstate_change", floor.buttonStates);
        }
    };

    floor.getSpawnPosY = function() {
        return floor.yPosition + 30;
    };

    floor.floorNum = function() {
        return floor.level;
    };

    return floor;
};



Blockly.Blocks['floor number'] = {
  init: function() {
    floor.jsonInit(floor.floorNum);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = floor;
    floor.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};