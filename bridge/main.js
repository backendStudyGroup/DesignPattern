"use strict";
exports.__esModule = true;
var TV_1 = require("./TV");
var radio_1 = require("./radio");
var basic_remote_1 = require("./basic-remote");
var advanced_remote_1 = require("./advanced-remote");
function main() {
    testDevice(new TV_1["default"]());
    testDevice(new radio_1["default"]());
}
function testDevice(device) {
    console.log("Tests with basic remote.");
    var basicRemote = new basic_remote_1["default"](device);
    basicRemote.power();
    device.printStatus();
    console.log("Tests with advanced remote.");
    var advancedRemote = new advanced_remote_1["default"](device);
    advancedRemote.power();
    advancedRemote.mute();
    device.printStatus();
}
main();
