import P5, { Vector } from "p5";
import Tile from "../MapElements/Tile";
import GameContext from "./GameContext";

export default class MapContext {
  tiles: Tile[][] = [];
  mapSizeX: number;
  mapSizeY: number;
  tileSize: number;
  canvasSize: Vector;
  gameContext: GameContext;
  constructor(
    gameContext: GameContext,
    mapSizeX: number,
    mapSizeY: number,
    tileSize: number
  ) {
    this.gameContext = gameContext;
    this.mapSizeX = mapSizeX;
    this.mapSizeY = mapSizeY;
    this.tileSize = tileSize;
  }
  generateTiles() {
    for (let i = 0; i < this.mapSizeX; i++) {
      this.tiles[i] = [];
      for (let j = 0; j < this.mapSizeY; j++) {
        this.tiles[i][j] = new Tile(
          this,
          j,
          i,
          this.tileSize,
          this.tileSize,
          j % 2 === 0 ? "yellow" : "green",
          `${i} ${j}`
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
    const camera = this.gameContext.camera;
    let x = Math.floor((position.x + -camera.x) / this.tileSize);
    let y = Math.floor((position.y + -camera.y) / this.tileSize);
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x >= this.mapSizeX) x = this.mapSizeX - 1;
    if (y >= this.mapSizeY) y = this.mapSizeY - 1;
    return this.tiles[y][x];
  }
}
