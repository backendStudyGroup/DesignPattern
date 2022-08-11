import Mario from "./mario";
import NormalMarioState from "./normal-mario-state";

// client Code
// tsc *.ts
// node main.js

const mario = new Mario(new NormalMarioState());
mario.getMushroom();
mario.getFlower();
mario.getRevive();
mario.getFlower();
mario.getHurt();
mario.getHurt();
mario.getRevive();
