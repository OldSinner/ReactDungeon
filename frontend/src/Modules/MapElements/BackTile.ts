import { IBackTile } from "../Interfaces/ITile";

export default class BackTile {
  sprite: string;
  constructor(sprite: string) {
    this.sprite = sprite;
  }
  draw(x: number, y: number, width: number, height: number): void {
    image(assets.sprites[this.sprite], x * width, y * height, width, height);
  }
  parseData(data: IBackTile): void {
    this.sprite = data.sprite;
  }
}
