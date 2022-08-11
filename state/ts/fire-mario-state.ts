import BasicState from "./basic-state";
import DeadMarioState from "./dead-mario-state";
import SuperMarioState from "./super-mario-state";

class FireMarioState extends BasicState {
  override getRevive(): void {
    console.log("還沒死，不能復活");
  }

  override getMushroom(): void {
    this.mario.setScore(this.mario.getScore() + 100);
    this.mario.transTo(new SuperMarioState());
  }

  override getFlower(): void {
    this.mario.setScore(this.mario.getScore() + 200);
  }

  override getHurt(): void {
    this.mario.setScore(0);
    console.log("死了!");
    this.mario.transTo(new DeadMarioState());
  }

  override getStateName(): string {
    return "火焰Mario";
  }
}

export default FireMarioState;
