import GameContext from "../Context/GameContext";

export default class Tile {
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  context!: GameContext;
  constructor(
    context: GameContext,
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
    this.context.p5.fill(this.color);
    this.context.p5.rect(this.x, this.y, this.width, this.height);
  }
}
