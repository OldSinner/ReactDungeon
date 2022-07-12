import "p5";
import GameContext from "./Modules/Context/GameContext";
const context = new GameContext();

window.setup = () => {
  createCanvas(window.innerWidth - 100, window.innerHeight - 50);
  context.setup();
};
window.draw = () => {
  push();
  context.camera.moveCamera();
  translate(context.camera.getOffset());
  background(0);
  context.draw();

  pop();
};
