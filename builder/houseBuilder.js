var HouseType;
(function (HouseType) {
    HouseType["SMALL_HOUSE"] = "Small House";
    HouseType["BIG_HOUSE"] = "Big House";
})(HouseType || (HouseType = {}));
/**
 * The Concrete Builder classes follow the Builder interface and provide
 * specific implementations of the building steps. Your program may have several
 * variations of Builders, implemented differently.
 */
var HouseBuilder = /** @class */ (function () {
    /**
     * A fresh builder instance should contain a blank product object, which is
     * used in further assembly.
     */
    function HouseBuilder() {
        this.reset();
    }
    HouseBuilder.prototype.reset = function () {
        this.product = new House();
    };
    /**
     * All production steps work with the same product instance.
     */
    HouseBuilder.prototype.setHouseType = function (type) {
        this.product.type = type;
    };
    HouseBuilder.prototype.buildWalls = function () {
        this.product.parts.push("Walls");
    };
    HouseBuilder.prototype.buildDoors = function () {
        this.product.parts.push("Doors");
    };
    HouseBuilder.prototype.buildRoof = function () {
        this.product.parts.push("Roof");
    };
    HouseBuilder.prototype.buildGarage = function () {
        this.product.parts.push("Garage");
    };
    HouseBuilder.prototype.buildGarden = function () {
        this.product.parts.push("Garden");
    };
    /**
     * 可能回傳非常不同的產品類型 (不一定遵循相同的介面)
     * 故不在共同介面宣告 getProduct()
     * 另外也不在 Director 內宣告 getProduct()
     * 避免 Director 直接和 Product 耦合
     *
     * 此實作自動在取得結果後重置，以繼續 build 其他產品
     * 另一種做法，也可以在 Director 內呼叫 reset()
     */
    HouseBuilder.prototype.getProduct = function () {
        var result = this.product;
        this.reset(); // 自動在取得結果後重置，以繼續 build 其他產品
        return result;
    };
    return HouseBuilder;
}());
/**
 * It makes sense to use the Builder pattern only when your products are quite
 * complex and require extensive configuration.
 *
 * Unlike in other creational patterns, different concrete builders can produce
 * unrelated products. In other words, results of various builders may not
 * always follow the same interface.
 */
var House = /** @class */ (function () {
    function House() {
        this.parts = [];
    }
    House.prototype.listParts = function () {
        console.log("Product parts: ".concat(this.parts.join(", "), "\n"));
    };
    House.prototype.getType = function () {
        return this.type;
    };
    return House;
}());
/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 */
var HouseDirector = /** @class */ (function () {
    function HouseDirector() {
    }
    /**
     * The Director works with any builder instance that the client code passes
     * to it. This way, the client code may alter the final type of the newly
     * assembled product.
     */
    HouseDirector.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    /**
     * The Director can construct several product variations using the same
     * building steps.
     */
    HouseDirector.prototype.buildSmallHouse = function () {
        this.builder.setHouseType(HouseType.SMALL_HOUSE);
        this.builder.buildWalls();
        this.builder.buildDoors();
        this.builder.buildRoof();
    };
    HouseDirector.prototype.buildBigHouse = function () {
        this.builder.setHouseType(HouseType.BIG_HOUSE);
        this.builder.buildWalls();
        this.builder.buildDoors();
        this.builder.buildRoof();
        this.builder.buildGarage();
        this.builder.buildGarden();
    };
    return HouseDirector;
}());
/**
 * The client code creates a builder object, passes it to the director and then
 * initiates the construction process. The end result is retrieved from the
 * builder object.
 */
function clientCode(director) {
    var builder = new HouseBuilder();
    director.setBuilder(builder);
    console.log("Build Small House");
    director.buildSmallHouse();
    var smallHouse = builder.getProduct();
    console.log("Build Big House");
    director.buildBigHouse();
    var bigHouse = builder.getProduct();
    console.log("\nSmall House Parts");
    smallHouse.listParts();
    console.log("Big House Parts");
    bigHouse.listParts();
    // Remember, the Builder pattern can be used without a Director class.
    console.log("Custom product:");
    builder.buildWalls();
    builder.buildDoors();
    builder.buildRoof();
    builder.buildGarage();
    builder.getProduct().listParts();
}
var director = new HouseDirector();
clientCode(director);
//# sourceMappingURL=houseBuilder.js.map