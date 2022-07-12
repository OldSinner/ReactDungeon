import MapContext from "../Context/MapContext";
import { IBackTile, ITile } from "../Interfaces/ITile";
import BackTile from "./BackTile";
import FrontTile from "./FrontTile";

export default class Tile {
  x: number;
  y: number;
  width: number;
  height: number;
  backTile: BackTile;
  frontTile?: FrontTile;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    if (this.backTile) {
      this.backTile.draw(this.x, this.y, this.width, this.height);
    } else {
      fill("purple");
      rect(this.x * this.width, this.y * this.height, this.width, this.height);
      fill("black");
    }
    if (this.frontTile) {
      this.frontTile.draw(this.x, this.y, this.width, this.height);
    }
  }
  changeSize(size: number) {
    this.width += size;
    this.height += size;
  }

  setBack(backTile: BackTile) {
    this.backTile = backTile;
  }
  setFront(frontTile: FrontTile) {
    this.frontTile = frontTile;
  }
  parseData(data: ITile) {
    this.x = data.x;
    this.y = data.y;
    this.width = data.width;
    this.height = data.height;
    if (this.backTile) {
      this.backTile.parseData(data.backTile);
    } else {
      this.backTile = new BackTile(data.backTile.sprite);
    }
    if (data.frontTile) {
      if (this.frontTile) this.frontTile.parseData(data.frontTile);
      else this.frontTile = new FrontTile(data.frontTile.sprite);
    }
  }
}
