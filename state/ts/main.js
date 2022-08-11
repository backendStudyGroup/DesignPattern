"use strict";
exports.__esModule = true;
var mario_1 = require("./mario");
var normal_mario_state_1 = require("./normal-mario-state");
// client Code
// tsc *.ts
// node main.js
var mario = new mario_1["default"](new normal_mario_state_1["default"]());
mario.getMushroom();
mario.getFlower();
mario.getRevive();
mario.getFlower();
mario.getHurt();
mario.getHurt();
mario.getRevive();
