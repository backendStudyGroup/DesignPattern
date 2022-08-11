import BasicState from "./basic-state";
import NormalMarioState from "./normal-mario-state";

class DeadMarioState extends BasicState {
  public getRevive(): void {
    this.mario.transTo(new NormalMarioState());
  }

  public getMushroom(): void {
    console.log("不能");
  }

  public getFlower(): void {
    console.log("不能");
  }

  public getHurt(): void {
    console.log("不能死了又死");
  }

  public getStateName(): string {
    return "死掉的Mario";
  }
}

export default DeadMarioState;
