import { IBackTile } from '../Interfaces/ITile';

export default class BackTile {
    nameTile: string;
    sprite: string;
    constructor(sprite: string, nameTile: string) {
        this.sprite = sprite;
        this.nameTile = nameTile;
    }
    draw(x: number, y: number, width: number, height: number): void {
        image(assets.sprites[this.sprite], x * width, y * height, width, height);
    }
    parseData(data: IBackTile): void {
        this.sprite = data.sprite;
        this.nameTile = data.nameTile;
    }
}
