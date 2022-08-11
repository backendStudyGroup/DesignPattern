import BasicState from "./basic-state";
import DeadMarioState from "./dead-mario-state";
import SuperMarioState from "./super-mario-state";

class FireMarioState extends BasicState {
  public getRevive(): void {
    console.log("還沒死，不能復活");
  }

  public getMushroom(): void {
    this.mario.setScore(this.mario.getScore() + 100);
    this.mario.transTo(new SuperMarioState());
  }

  public getFlower(): void {
    this.mario.setScore(this.mario.getScore() + 200);
  }

  public getHurt(): void {
    this.mario.setScore(0);
    console.log("死了!");
    this.mario.transTo(new DeadMarioState());
  }

  public getStateName(): string {
    return "火焰Mario";
  }
}

export default FireMarioState;
