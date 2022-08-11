import Mario from "./mario";

// 狀態抽象化
abstract class BasicState {
  protected mario: Mario;

  public setMario(mario: Mario) {
    this.mario = mario;
  }

  public abstract getRevive(): void;
  public abstract getMushroom(): void;
  public abstract getFlower(): void;
  public abstract getHurt(): void;
  public abstract getStateName(): string;
}

export default BasicState;
