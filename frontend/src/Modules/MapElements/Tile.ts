import GameContext from "../Context/GameContext";
import MapContext from "../Context/MapContext";

export default class Tile {
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  context!: MapContext;
  constructor(
    context: MapContext,
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    fill(this.color);
    rect(this.x * this.width, this.y * this.height, this.width, this.height);
  }
}
