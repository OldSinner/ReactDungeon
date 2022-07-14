import P5, { Vector } from "p5";
import Camera from "../UI/Camera";
import Mouse from "../UI/Mouse";
import UISystem from "../UI/UISystem";
import Storage from "../Util/Storage";
import MapContext from "./MapContext";

export default class WorldContext {
  mapContext: MapContext;
  camera: Camera;
  mouse: Mouse;
  uiSystem: UISystem;

  setup() {
    // Init Utils
    this.camera = new Camera(0, 0, 10);
    this.mouse = new Mouse();
    this.uiSystem = new UISystem();
    // Init World
    if (Storage.isSave()) {
      this.mapContext = new MapContext(50, 50, 90);
      Storage.LoadData();
    } else {
      this.mapContext = new MapContext(50, 50, 90);
      this.mapContext.generateTiles();
    }
    //After World Init
    this.setCameraLock();
  }
  draw = () => {
    this.camera.inputCamera();
    this.mouse.update();
    this.mapContext.drawMap();
  };
  postDraw = () => {
    this.uiSystem.draw();
  };
  private setCameraLock() {
    this.camera.setcameraLock(
      new Vector(0, 0),
      this.mapContext.getSizeInPixels()
    );
  }
}
