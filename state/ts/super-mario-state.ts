import BasicState from "./basic-state";
import DeadMarioState from "./dead-mario-state";
import FireMarioState from "./fire-mario-state";

class SuperMarioState extends BasicState {
  override getRevive(): void {
    console.log("還沒死，不能復活");
  }

  override getMushroom(): void {
    this.mario.setScore(this.mario.getScore() + 100);
  }

  override getFlower(): void {
    this.mario.setScore(this.mario.getScore() + 200);
    this.mario.transTo(new FireMarioState());
  }

  override getHurt(): void {
    this.mario.setScore(0);
    console.log("死了!");
    this.mario.transTo(new DeadMarioState());
  }

  override getStateName(): string {
    return "超級Mario";
  }
}

export default SuperMarioState;
