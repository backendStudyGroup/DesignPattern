"use strict";
exports.__esModule = true;
// 狀態抽象化
var BasicState = /** @class */ (function () {
    function BasicState() {
    }
    BasicState.prototype.setMario = function (mario) {
        this.mario = mario;
    };
    return BasicState;
}());
exports["default"] = BasicState;
