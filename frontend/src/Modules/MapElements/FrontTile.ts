import { IFrontTile } from "../Interfaces/ITile";

export default class FrontTile {
  sprite: string;
  constructor(sprite: string) {
    this.sprite = sprite;
  }
  draw(x: number, y: number, width: number, height: number): void {
    image(assets.sprites[this.sprite], x * width, y * height, width, height);
  }
  parseData(data: IFrontTile): void {
    this.sprite = data.sprite;
  }
}
