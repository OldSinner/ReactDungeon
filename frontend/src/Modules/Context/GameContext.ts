import P5, { Vector } from "p5";
import Camera from "../UI/Camera";
import MapContext from "./MapContext";

export default class GameContext {
  mapContext: MapContext;
  camera: Camera;

  setup() {
    this.camera = new Camera(0, 0);
    this.mapContext = new MapContext(50, 50, 30);
    this.mapContext.generateTiles();
    this.camera.setcameraLock(
      new Vector(0, 0),
      this.mapContext.getSizeInPixels()
    );
  }
  draw = () => {
    this.mapContext.drawMap();
  };
}
