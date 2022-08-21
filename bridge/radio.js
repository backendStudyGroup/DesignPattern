"use strict";
exports.__esModule = true;
var Radio = /** @class */ (function () {
    function Radio() {
        this.on = false;
        this.volume = 30;
        this.channel = 1;
    }
    Radio.prototype.isEnabled = function () {
        return this.on;
    };
    Radio.prototype.enable = function () {
        this.on = true;
    };
    Radio.prototype.disable = function () {
        this.on = false;
    };
    Radio.prototype.getVolume = function () {
        return this.volume;
    };
    Radio.prototype.setVolume = function (volume) {
        if (volume > 100) {
            this.volume = 100;
        }
        else if (volume < 0) {
            this.volume = 0;
        }
        else {
            this.volume = volume;
        }
    };
    Radio.prototype.getChannel = function () {
        return this.channel;
    };
    Radio.prototype.setChannel = function (channel) {
        this.channel = channel;
    };
    Radio.prototype.printStatus = function () {
        console.log("------------------------------------");
        console.log("| I'm radio.");
        console.log("| I'm " + (this.on ? "enabled" : "disabled"));
        console.log("| Current volume is " + this.volume + "%");
        console.log("| Current channel is " + this.channel);
        console.log("------------------------------------\n");
    };
    return Radio;
}());
exports["default"] = Radio;
