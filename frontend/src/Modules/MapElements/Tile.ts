import GameContext from "../Context/GameContext";
import MapContext from "../Context/MapContext";

export default class Tile {
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  context!: MapContext;
  text: string;
  sHighlited: boolean = false;
  constructor(
    context: MapContext,
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    text: string
  ) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.text = text;
  }
  draw() {
    if (this.sHighlited) {
      fill("red");
    } else {
      fill(this.color);
    }
    rect(this.x * this.width, this.y * this.height, this.width, this.height);
    fill("black");

    text(this.text, this.x * this.width, this.y * this.height + 40);
    this.sHighlited = false;
  }
  changeSize(size: number) {
    this.width += size;
    this.height += size;
  }
  highlight() {
    this.sHighlited = true;
  }
}
