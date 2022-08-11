"use strict";
exports.__esModule = true;
// Mario本體
var Mario = /** @class */ (function () {
    function Mario(state) {
        this.score = 0;
        this.transTo(state);
    }
    Mario.prototype.transTo = function (state) {
        console.log("Mario: Trans to ".concat(state.constructor.name, "."));
        this.state = state;
        this.state.setMario(this);
    };
    Mario.prototype.getRevive = function () {
        console.log("===復活===");
        this.state.getRevive();
        console.log("\u7576\u524D\u72C0\u614B: ".concat(this.getStateName()));
        console.log("\u7576\u524D\u5206\u6578: ".concat(this.getScore()));
    };
    Mario.prototype.getMushroom = function () {
        console.log("===吃蘑菇===");
        this.state.getMushroom();
        console.log("\u7576\u524D\u72C0\u614B: ".concat(this.getStateName()));
        console.log("\u7576\u524D\u5206\u6578: ".concat(this.getScore()));
    };
    Mario.prototype.getFlower = function () {
        console.log("===吃花===");
        this.state.getFlower();
        console.log("\u7576\u524D\u72C0\u614B: ".concat(this.getStateName()));
        console.log("\u7576\u524D\u5206\u6578: ".concat(this.getScore()));
    };
    Mario.prototype.getHurt = function () {
        console.log("===受重傷===");
        this.state.getHurt();
        console.log("\u7576\u524D\u72C0\u614B: ".concat(this.getStateName()));
        console.log("\u7576\u524D\u5206\u6578: ".concat(this.getScore()));
    };
    Mario.prototype.getStateName = function () {
        return this.state.getStateName();
    };
    Mario.prototype.getScore = function () {
        return this.score;
    };
    Mario.prototype.setScore = function (score) {
        this.score = score;
    };
    return Mario;
}());
exports["default"] = Mario;
