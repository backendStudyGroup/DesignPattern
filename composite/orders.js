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
var Component = /** @class */ (function () {
    function Component() {
    }
    /**
     * 可定義母節點相關方法於 interface
     */
    Component.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Component.prototype.getParent = function () {
        return this.parent;
    };
    /**
     * 在 component 定義 child-management
     * Pros: 即使在建構樹狀結構的時候也不用暴露 component 給 client
     * Cons: Leaves 的 child-management 相關方法會留空
     */
    Component.prototype.add = function (component) { };
    Component.prototype.remove = function (component) { };
    Component.prototype.isBoxes = function () {
        return false;
    };
    return Component;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(price) {
        var _this = _super.call(this) || this;
        _this.price = price;
        return _this;
    }
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.calculatePrice = function (amount) {
        if (amount === void 0) { amount = 0; }
        amount += this.price;
        return amount;
    };
    return Product;
}(Component));
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    Box.prototype.add = function (component) {
        this.children.push(component);
        component.setParent(this);
    };
    Box.prototype.remove = function (component) {
        var componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    };
    Box.prototype.isComposite = function () {
        return true;
    };
    /**
     * 	遞迴的遍歷所有節點
     */
    Box.prototype.calculatePrice = function (amount) {
        if (amount === void 0) { amount = 0; }
        var result = 0;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            result += child.calculatePrice(amount);
        }
        return result;
    };
    return Box;
}(Component));
function showTotalPriceInBox(component) {
    var amount = 0;
    console.log("Total price in the box: ".concat(component.calculatePrice(amount)));
}
function main() {
    var package = new Box();
    var bundle1 = new Box();
    bundle1.add(new Product(10));
    bundle1.add(new Product(15));
    var bundle2 = new Box();
    bundle2.add(new Product(20));
    bundle2.add(new Product(30));
    package.add(bundle1);
    package.add(bundle2);
    console.log("##########");
    showTotalPriceInBox(package);
    console.log("##########");
}
main();
//# sourceMappingURL=orders.js.map