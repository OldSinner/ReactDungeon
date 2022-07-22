import { IFrontTile } from '../Interfaces/ITile';

export default class FrontTile {
    nameTile: string;
    sprite: string;
    isVisibleThrough: boolean;
    constructor(sprite: string, nameTile: string, isVisibleThrough: boolean) {
        this.sprite = sprite;
        this.isVisibleThrough = isVisibleThrough;
        this.nameTile = nameTile;
    }
    draw(x: number, y: number, width: number, height: number): void {
        image(assets.sprites[this.sprite], x * width, y * height, width, height);
    }
    parseData(data: IFrontTile): void {
        this.sprite = data.sprite;
        this.isVisibleThrough = data.isVisibleThrough;
        this.nameTile = data.nameTile;
    }
}
