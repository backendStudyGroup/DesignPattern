"use strict";
exports.__esModule = true;
var BasicRemote = /** @class */ (function () {
    function BasicRemote(device) {
        this.device = device;
    }
    BasicRemote.prototype.power = function () {
        console.log("Remote: power toggle");
        if (this.device.isEnabled()) {
            this.device.disable();
        }
        else {
            this.device.enable();
        }
    };
    BasicRemote.prototype.volumeDown = function () {
        console.log("Remote: volume down");
        this.device.setVolume(this.device.getVolume() - 10);
    };
    BasicRemote.prototype.volumeUp = function () {
        console.log("Remote: volume up");
        this.device.setVolume(this.device.getVolume() + 10);
    };
    BasicRemote.prototype.channelDown = function () {
        console.log("Remote: channel down");
        this.device.setChannel(this.device.getChannel() - 1);
    };
    BasicRemote.prototype.channelUp = function () {
        console.log("Remote: channel up");
        this.device.setChannel(this.device.getChannel() + 1);
    };
    return BasicRemote;
}());
exports["default"] = BasicRemote;
