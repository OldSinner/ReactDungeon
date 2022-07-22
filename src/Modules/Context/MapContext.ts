import P5, { Vector } from 'p5';
import FrontTile from '../MapElements/FrontTile';
import Tile from '../MapElements/Tile';

export default class MapContext {
    tiles: Tile[][] = [];
    mapSizeX: number;
    mapSizeY: number;
    tileSize: number;
    constructor(mapSizeX: number, mapSizeY: number, tileSize: number) {
        this.mapSizeX = mapSizeX;
        this.mapSizeY = mapSizeY;
        this.tileSize = tileSize;
        this.GenerateEmpty();
    }
    generateTiles() {}
    private GenerateEmpty() {
        for (let i = 0; i < this.mapSizeX; i++) {
            this.tiles[i] = [];
            for (let j = 0; j < this.mapSizeY; j++) {
                this.tiles[i][j] = new Tile(j, i, this.tileSize, this.tileSize);
                this.tiles[i][j].addFront(new FrontTile('grass_01', 'grass_01', true));
            }
        }
    }
    drawMap() {
        this.tiles.forEach((row) => {
            row.forEach((tile) => {
                tile.draw();
            });
        });
    }
    getSizeInPixels(): Vector {
        return new Vector(this.mapSizeX * this.tileSize, this.mapSizeY * this.tileSize);
    }
    setTileSize(tileSize: number) {
        if (this.tileSize + tileSize < 50 || this.tileSize + tileSize > 100) {
            return;
        }
        this.tileSize += tileSize;
        this.tiles.forEach((tiles) => {
            tiles.forEach((tile) => {
                tile.changeSize(tileSize);
            });
        });
    }
    getTileBaseOnPosition(position: Vector): Tile {
        const camera = context.camera;
        let x = Math.floor((position.x + -camera.x) / this.tileSize);
        let y = Math.floor((position.y + -camera.y) / this.tileSize);
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x >= this.mapSizeX) x = this.mapSizeX - 1;
        if (y >= this.mapSizeY) y = this.mapSizeY - 1;
        return this.tiles[y][x];
    }
    getSurroundingTiles(tile: Tile): Tile[] {
        const surroundingTiles: Tile[] = [];
        const x = tile.x;
        const y = tile.y;
        if (x - 1 >= 0) {
            surroundingTiles.push(this.tiles[y][x - 1]);
        }
        if (x + 1 < this.mapSizeX) {
            surroundingTiles.push(this.tiles[y][x + 1]);
        }
        if (y - 1 >= 0) {
            surroundingTiles.push(this.tiles[y - 1][x]);
        }
        if (y + 1 < this.mapSizeY) {
            surroundingTiles.push(this.tiles[y + 1][x]);
        }
        return surroundingTiles;
    }
}
