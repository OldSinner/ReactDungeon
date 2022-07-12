import { Vector } from "p5";
import GameContext from "../Context/GameContext";

export default class Mouse {
  x: number = 0;
  y: number = 0;
  gameContext: GameContext;
  constructor(gameContext: GameContext) {
    this.gameContext = gameContext;
    window.mouseClicked = () => this.pressedMouse();
  }
  update() {
    this.x = mouseX;
    this.y = mouseY;
    const mapContext = this.gameContext.mapContext;
    const tile = mapContext.getTileBaseOnPosition(new Vector(this.x, this.y));
    tile.highlight();
  }
  pressedMouse() {
    const mapContext = this.gameContext.mapContext;
    const tile = mapContext.getTileBaseOnPosition(new Vector(this.x, this.y));
  }
}
