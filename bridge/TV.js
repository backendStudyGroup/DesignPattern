"use strict";
exports.__esModule = true;
var Tv = /** @class */ (function () {
    function Tv() {
        this.on = false;
        this.volume = 30;
        this.channel = 1;
    }
    Tv.prototype.isEnabled = function () {
        return this.on;
    };
    Tv.prototype.enable = function () {
        this.on = true;
    };
    Tv.prototype.disable = function () {
        this.on = false;
    };
    Tv.prototype.getVolume = function () {
        return this.volume;
    };
    Tv.prototype.setVolume = function (volume) {
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
    Tv.prototype.getChannel = function () {
        return this.channel;
    };
    Tv.prototype.setChannel = function (channel) {
        this.channel = channel;
    };
    Tv.prototype.printStatus = function () {
        console.log("------------------------------------");
        console.log("| I'm TV set.");
        console.log("| I'm " + (this.on ? "enabled" : "disabled"));
        console.log("| Current volume is " + this.volume + "%");
        console.log("| Current channel is " + this.channel);
        console.log("------------------------------------\n");
    };
    return Tv;
}());
exports["default"] = Tv;
