import "p5";
import GameContext from "./Modules/Context/GameContext";
const context = new GameContext();

window.setup = () => {
  createCanvas(window.innerWidth - 100, window.innerHeight - 50);
  context.setup();
  frameRate(30);
};
window.draw = () => {
  push();
  translate(context.camera.getOffset());
  background(0);
  context.draw();

  pop();
  text(Math.floor(frameRate()), 10, 10);
};
