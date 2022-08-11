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
var dead_mario_state_1 = require("./dead-mario-state");
var fire_mario_state_1 = require("./fire-mario-state");
var super_mario_state_1 = require("./super-mario-state");
var NormalMarioState = /** @class */ (function (_super) {
    __extends(NormalMarioState, _super);
    function NormalMarioState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalMarioState.prototype.getRevive = function () {
        console.log("還沒死，不能復活");
    };
    NormalMarioState.prototype.getMushroom = function () {
        this.mario.setScore(this.mario.getScore() + 100);
        this.mario.transTo(new super_mario_state_1["default"]());
    };
    NormalMarioState.prototype.getFlower = function () {
        this.mario.setScore(this.mario.getScore() + 200);
        this.mario.transTo(new fire_mario_state_1["default"]());
    };
    NormalMarioState.prototype.getHurt = function () {
        this.mario.setScore(0);
        console.log("死了!");
        this.mario.transTo(new dead_mario_state_1["default"]());
    };
    NormalMarioState.prototype.getStateName = function () {
        return "一般Mario";
    };
    return NormalMarioState;
}(basic_state_1["default"]));
exports["default"] = NormalMarioState;
