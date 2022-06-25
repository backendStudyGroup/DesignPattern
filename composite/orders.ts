abstract class Component {
  // Private methods/members are accessible only from inside the class.
  // Protected methods/members are accessible from inside the class and extending class as well.
  protected parent: Component;
  /**
   * 可定義母節點相關方法於 interface
   */
  public setParent(parent: Component) {
    this.parent = parent;
  }
  public getParent(): Component {
    return this.parent;
  }
  /**
   * 在 component 定義 child-management
   * Pros: 即使在建構樹狀結構的時候也不用暴露 component 給 client
   * Cons: Leaves 的 child-management 相關方法會留空
   */
  public add(component: Component): void {}
  public remove(component: Component): void {}

  public isBoxes(): boolean {
    return false;
  }
  /**
   * Leave the implementation to concrete classes
   * Or implement some default behavior here
   */
  public abstract calculatePrice(amount: number): number;
}

class Product extends Component {
  price: number;
  constructor(price: number) {
    super();
    this.price = price;
  }
  public setPrice(price: number) {
    this.price = price;
  }
  public getPrice(): number {
    return this.price;
  }
  public calculatePrice(amount: number = 0): number {
    amount += this.price;
    return amount;
  }
}

class Box extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }
  /**
   * 	遞迴的遍歷所有節點
   */
  public calculatePrice(amount: number = 0): number {
    let result: number = 0;
    for (const child of this.children) {
      result += child.calculatePrice(amount);
    }
    return result;
  }
}

function showTotalPriceInBox(component: Component) {
  let amount = 0;
  console.log(`Total price in the box: ${component.calculatePrice(amount)}`);
}

function main() {
  const package = new Box();

  const bundle1 = new Box();
  bundle1.add(new Product(10));
  bundle1.add(new Product(15));

  const bundle2 = new Box();
  bundle2.add(new Product(20));
  bundle2.add(new Product(30));

  package.add(bundle1);
  package.add(bundle2);
  console.log("##########");
  showTotalPriceInBox(package);
  console.log("##########");
}

main();
