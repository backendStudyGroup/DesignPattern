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
var basic_state_1 = require("./basic-state");
var normal_mario_state_1 = require("./normal-mario-state");
var DeadMarioState = /** @class */ (function (_super) {
    __extends(DeadMarioState, _super);
    function DeadMarioState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeadMarioState.prototype.getRevive = function () {
        this.mario.transTo(new normal_mario_state_1["default"]());
    };
    DeadMarioState.prototype.getMushroom = function () {
        console.log("不能");
    };
    DeadMarioState.prototype.getFlower = function () {
        console.log("不能");
    };
    DeadMarioState.prototype.getHurt = function () {
        console.log("不能死了又死");
    };
    DeadMarioState.prototype.getStateName = function () {
        return "死掉的Mario";
    };
    return DeadMarioState;
}(basic_state_1["default"]));
exports["default"] = DeadMarioState;
