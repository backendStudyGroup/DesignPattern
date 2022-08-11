import BasicState from "./basic-state";
import DeadMarioState from "./dead-mario-state";
import FireMarioState from "./fire-mario-state";

class SuperMarioState extends BasicState {
  public getRevive(): void {
    console.log("還沒死，不能復活");
  }

  public getMushroom(): void {
    this.mario.setScore(this.mario.getScore() + 100);
  }

  public getFlower(): void {
    this.mario.setScore(this.mario.getScore() + 200);
    this.mario.transTo(new FireMarioState());
  }

  public getHurt(): void {
    this.mario.setScore(0);
    console.log("死了!");
    this.mario.transTo(new DeadMarioState());
  }

  public getStateName(): string {
    return "超級Mario";
  }
}

export default SuperMarioState;
