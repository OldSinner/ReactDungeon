import P5, { Vector } from "p5";
import Camera from "../UI/Camera";
import Mouse from "../UI/Mouse";
import Storage from "../Util/Storage";
import MapContext from "./MapContext";

export default class WorldContext {
  mapContext: MapContext;
  camera: Camera;
  mouse: Mouse;

  setup() {
    // Init Utils
    this.camera = new Camera(0, 0, 10);
    this.mouse = new Mouse();
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
  private setCameraLock() {
    this.camera.setcameraLock(
      new Vector(0, 0),
      this.mapContext.getSizeInPixels()
    );
  }
}
