import { IFrontTile } from "../Interfaces/ITile";

export default class FrontTile {
  sprite: string;
  isVisibleThrough: boolean;
  constructor(sprite: string, isVisibleThrough: boolean) {
    this.sprite = sprite;
    this.isVisibleThrough = isVisibleThrough;
  }
  draw(x: number, y: number, width: number, height: number): void {
    image(assets.sprites[this.sprite], x * width, y * height, width, height);
  }
  parseData(data: IFrontTile): void {
    this.sprite = data.sprite;
    this.isVisibleThrough = data.isVisibleThrough;
  }
}
