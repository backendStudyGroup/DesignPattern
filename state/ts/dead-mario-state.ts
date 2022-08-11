import BasicState from "./basic-state";
import NormalMarioState from "./normal-mario-state";

class DeadMarioState extends BasicState {
  override getRevive(): void {
    this.mario.transTo(new NormalMarioState());
  }

  override getMushroom(): void {
    console.log("不能");
  }

  override getFlower(): void {
    console.log("不能");
  }

  override getHurt(): void {
    console.log("不能死了又死");
  }

  override getStateName(): string {
    return "死掉的Mario";
  }
}

export default DeadMarioState;
