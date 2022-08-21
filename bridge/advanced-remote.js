"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var basic_remote_1 = require("./basic-remote");
var AdvancedRemote = /** @class */ (function (_super) {
    __extends(AdvancedRemote, _super);
    function AdvancedRemote(device) {
        return _super.call(this, device) || this;
    }
    AdvancedRemote.prototype.mute = function () {
        console.log("Remote: mute");
        this.device.setVolume(0);
    };
    return AdvancedRemote;
}(basic_remote_1["default"]));
exports["default"] = AdvancedRemote;
