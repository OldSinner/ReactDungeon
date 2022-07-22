import Tile from '../MapElements/Tile';

export default class TileObject {
    objectName: string;
    sprite: string[] = [];
    tile: Tile;
    height: number;
    width: number;
    order: number;
    blockPlaces: boolean;

    constructor(
        objectName: string,
        sprite: string[],
        height: number,
        width: number,
        order: number,
        blockPlaces: boolean
    ) {
        this.objectName = objectName;
        this.sprite = sprite;
        this.height = height;
        this.width = width;
        this.order = order;
        this.blockPlaces = blockPlaces;
    }
    draw() {
        if (!this.tile) return;
        let index = 0;
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                image(
                    assets.sprites[this.sprite[index]],
                    (this.tile.x + j) * this.tile.width,
                    (this.tile.y - i) * this.tile.height,
                    this.tile.width,
                    this.tile.height
                );
                context.mapContext.tiles[this.tile.x + j][this.tile.y + i].setTileObject(this);
                index++;
            }
        }
    }
    setTile(tile: Tile) {
        this.tile = tile;
        tile.isOccupied = this.blockPlaces;
    }
    build(tile: Tile) {
        console.log(context.mapContext.tileObject);
        if (tile.isOccupied) return;
        const obj = new TileObject(this.objectName, this.sprite, this.height, this.width, this.order, this.blockPlaces);
        obj.setTile(tile);
        const man = context.mapContext;
        man.addTileObject(obj);
    }
}
