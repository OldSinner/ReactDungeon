import P5, { Vector } from "p5";
import Tile from "../MapElements/Tile";

export default class MapContext {
  tiles: Tile[][] = [];
  mapSizeX: number;
  mapSizeY: number;
  tileSize: number;
  canvasSize: Vector;
  constructor(mapSizeX: number, mapSizeY: number, tileSize: number) {
    this.mapSizeX = mapSizeX;
    this.mapSizeY = mapSizeY;
    this.tileSize = tileSize;
    console.log(this.canvasSize);
  }
  generateTiles() {
    for (let i = 0; i < this.mapSizeX; i++) {
      this.tiles[i] = [];
      for (let j = 0; j < this.mapSizeY; j++) {
        this.tiles[i][j] = new Tile(
          this,
          i,
          j,
          this.tileSize,
          this.tileSize,
          j % 2 === 0 ? "yellow" : "green"
        );
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
    return new Vector(
      this.mapSizeX * this.tileSize,
      this.mapSizeY * this.tileSize
    );
  }
}
