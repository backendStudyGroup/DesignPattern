import BasicState from "./basic-state";

// Mario本體
class Mario {
  private state: BasicState;
  private score: number = 0;

  constructor(state: BasicState) {
    this.transTo(state);
  }

  transTo(state: BasicState): void {
    console.log(`Mario: Trans to ${(<any>state).constructor.name}.`);
    // 狀態切換
    this.state = state;
    // 將切換後狀態的內容override蓋過
    this.state.setMario(this);
  }

  public getRevive(): void {
    console.log("===復活===");
    this.state.getRevive();
    console.log(`當前狀態: ${this.getStateName()}`);
    console.log(`當前分數: ${this.getScore()}`);
  }

  public getMushroom(): void {
    console.log("===吃蘑菇===");
    this.state.getMushroom();
    console.log(`當前狀態: ${this.getStateName()}`);
    console.log(`當前分數: ${this.getScore()}`);
  }

  public getFlower(): void {
    console.log("===吃花===");
    this.state.getFlower();
    console.log(`當前狀態: ${this.getStateName()}`);
    console.log(`當前分數: ${this.getScore()}`);
  }

  public getHurt(): void {
    console.log("===受重傷===");
    this.state.getHurt();
    console.log(`當前狀態: ${this.getStateName()}`);
    console.log(`當前分數: ${this.getScore()}`);
  }

  public getStateName(): string {
    return this.state.getStateName();
  }

  public getScore(): number {
    return this.score;
  }

  public setScore(score: number): void {
    this.score = score;
  }
}

export default Mario;
