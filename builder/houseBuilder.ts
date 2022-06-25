/**
 * The Builder interface specifies methods for creating the different parts of
 * the Product objects.
 */
interface Builder {
  setHouseType(type: HouseType): void;
  buildWalls(): void;
  buildDoors(): void;
  buildRoof(): void;
  buildGarage(): void;
  buildGarden(): void;
}

enum HouseType {
  SMALL_HOUSE = "Small House",
  BIG_HOUSE = "Big House",
}

/**
 * The Concrete Builder classes follow the Builder interface and provide
 * specific implementations of the building steps. Your program may have several
 * variations of Builders, implemented differently.
 */
class HouseBuilder implements Builder {
  private product: House;

  /**
   * A fresh builder instance should contain a blank product object, which is
   * used in further assembly.
   */
  constructor() {
    this.reset();
  }
  public reset(): void {
    this.product = new House();
  }

  /**
   * All production steps work with the same product instance.
   */
  public setHouseType(type: HouseType): void {
    this.product.type = type;
  }
  public buildWalls(): void {
    this.product.parts.push("Walls");
  }
  public buildDoors(): void {
    this.product.parts.push("Doors");
  }
  public buildRoof(): void {
    this.product.parts.push("Roof");
  }
  public buildGarage(): void {
    this.product.parts.push("Garage");
  }
  public buildGarden(): void {
    this.product.parts.push("Garden");
  }

  /**
   * 可能回傳非常不同的產品類型 (不一定遵循相同的介面)
   * 故不在共同介面宣告 getProduct()
   * 另外也不在 Director 內宣告 getProduct()
   * 避免 Director 直接和 Product 耦合
   *
   * 此實作自動在取得結果後重置，以繼續 build 其他產品
   * 另一種做法，也可以在 Director 內呼叫 reset()
   */
  public getProduct(): House {
    const result = this.product;
    this.reset(); // 自動在取得結果後重置，以繼續 build 其他產品
    return result;
  }
}

/**
 * It makes sense to use the Builder pattern only when your products are quite
 * complex and require extensive configuration.
 *
 * Unlike in other creational patterns, different concrete builders can produce
 * unrelated products. In other words, results of various builders may not
 * always follow the same interface.
 */
class House {
  public parts: string[] = [];
  public type: HouseType;

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
  public getType(): HouseType {
    return this.type;
  }
}

/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 */
class HouseDirector {
  private builder: Builder;

  /**
   * The Director works with any builder instance that the client code passes
   * to it. This way, the client code may alter the final type of the newly
   * assembled product.
   */
  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  /**
   * The Director can construct several product variations using the same
   * building steps.
   */
  public buildSmallHouse(): void {
    this.builder.setHouseType(HouseType.SMALL_HOUSE);
    this.builder.buildWalls();
    this.builder.buildDoors();
    this.builder.buildRoof();
  }

  public buildBigHouse(): void {
    this.builder.setHouseType(HouseType.BIG_HOUSE);
    this.builder.buildWalls();
    this.builder.buildDoors();
    this.builder.buildRoof();
    this.builder.buildGarage();
    this.builder.buildGarden();
  }
}

/**
 * The client code creates a builder object, passes it to the director and then
 * initiates the construction process. The end result is retrieved from the
 * builder object.
 */
function clientCode(director: HouseDirector) {
  const builder = new HouseBuilder();
  director.setBuilder(builder);

  console.log("Build Small House");
  director.buildSmallHouse();
  const smallHouse = builder.getProduct();

  console.log("Build Big House");
  director.buildBigHouse();
  const bigHouse = builder.getProduct();

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

const director = new HouseDirector();
clientCode(director);
