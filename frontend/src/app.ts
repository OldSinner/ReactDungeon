import "p5";
import AssetsManager from "./Modules/Context/AssetsManager";
import GameContext from "./Modules/Context/GameContext";
const context = new GameContext();
const assetManaget = new AssetsManager();

window.setup = () => {
  createCanvas(window.innerWidth - 100, window.innerHeight - 50);
  background(0);
  text("loading...", window.innerWidth - 100 / 2, window.innerHeight - 50 / 2);
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
