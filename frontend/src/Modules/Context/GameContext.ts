import P5, { Vector } from "p5";
import Camera from "../UI/Camera";
import Mouse from "../UI/Mouse";
import AssetsManager from "./AssetsManager";
import MapContext from "./MapContext";

export default class GameContext {
  mapContext: MapContext;
  camera: Camera;
  mouse: Mouse;
  assetManager: AssetsManager;

  setup() {
    this.assetManager = new AssetsManager();
    this.assetManager.loadAssets();
    this.camera = new Camera(this, 0, 0, 10);
    this.mapContext = new MapContext(this, 50, 50, 90);
    this.mouse = new Mouse(this);
    this.mapContext.generateTiles();
    this.setCameraLock();
  }
  draw = () => {
    this.camera.inputCamera();
    this.mouse.update();
    this.mapContext.drawMap();
  };
  setCameraLock() {
    this.camera.setcameraLock(
      new Vector(0, 0),
      this.mapContext.getSizeInPixels()
    );
  }
}
