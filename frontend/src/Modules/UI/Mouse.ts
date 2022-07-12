import { Vector } from "p5";
import WorldContext from "../Context/WorldContext";

export default class Mouse {
  x: number = 0;
  y: number = 0;
  constructor() {
    window.mouseClicked = () => this.pressedMouse();
  }
  update() {
    this.x = mouseX;
    this.y = mouseY;
    const mapContext = context.mapContext;
    const tile = mapContext.getTileBaseOnPosition(new Vector(this.x, this.y));
  }
  pressedMouse() {
    const mapContext = context.mapContext;
    const tile = mapContext.getTileBaseOnPosition(new Vector(this.x, this.y));
    console.log(tile);
  }
}
