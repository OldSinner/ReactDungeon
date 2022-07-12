import "p5";
import AssetsManager from "./Modules/Context/AssetsManager";
import WorldContext from "./Modules/Context/WorldContext";
import ObjectManager from "./Modules/Context/ObjectManager";
import Storage from "./Modules/Util/Storage";
window.setup = () => {
  createCanvas(window.innerWidth - 100, window.innerHeight - 50);
  background(0);
  text("loading...", window.innerWidth - 100 / 2, window.innerHeight - 50 / 2);

  context = new WorldContext();
  // Initialize context of the world
  assets = new AssetsManager();
  objsManager = new ObjectManager();
  //Data load
  assets.loadAssets();
  objsManager.loadData();
  //Setup
  frameRate(30);
  context.setup();
};
window.draw = () => {
  push();
  translate(context.camera.getOffset());
  background(0);
  context.draw();
  pop();
  text(Math.floor(frameRate()), 10, 10);

  // save data in local storage
  if (keyIsDown(CONTROL) && keyIsDown(SHIFT)) {
    Storage.SaveData();
  }
};
