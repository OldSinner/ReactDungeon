import Tile from '../MapElements/Tile';

export default class TileObject {
    objectName: string;
    sprite: string[] = [];
    tiles: Tile[];
    height: number;
    width: number;
    order: number;

    constructor(objectName: string, sprite: string[], height: number, width: number, order: number) {
        this.objectName = objectName;
        this.sprite = sprite;
        this.height = height;
        this.width = width;
        this.order = order;
    }
    draw() {}
}
