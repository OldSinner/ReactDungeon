import P5 from "p5";
import MapContext from "./MapContext";

export default class GameContext {
  p5?: P5;
  mapContext: MapContext;
  setup(p5: P5) {
    this.p5 = p5;
    this.mapContext = new MapContext(p5);
  }
  draw = () => {};
}
