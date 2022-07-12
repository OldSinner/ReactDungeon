import P5, { Vector } from "p5";
import Tile from "../MapElements/Tile";
import { GroundEnums } from "../Types/Ground/GroundEnums";
import MapGenerator from "../Util/MapGenerator";
import GameContext from "./GameContext";

export default class MapContext {
  tiles: Tile[][] = [];
  mapSizeX: number;
  mapSizeY: number;
  tileSize: number;
  canvasSize: Vector;
  gameContext: GameContext;
  mapGenerator: MapGenerator;
  startAreaSize: number;
  constructor(
    gameContext: GameContext,
    mapSizeX: number,
    mapSizeY: number,
    tileSize: number,
    startAreaSize: number = 5
  ) {
    this.gameContext = gameContext;
    this.mapSizeX = mapSizeX;
    this.mapSizeY = mapSizeY;
    this.tileSize = tileSize;
    this.mapGenerator = new MapGenerator(this);
    this.startAreaSize = startAreaSize;
  }
  generateTiles() {
    this.GenerateEmpty();
    this.mapGenerator.BaseGeneration();
    this.mapGenerator.GenerateCaves();
    this.mapGenerator.GenerateGold();
    this.mapGenerator.GenerateIron();
    this.mapGenerator.generateStartArea();
  }
  private GenerateEmpty() {
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
          `${i} ${j}`,
          GroundEnums.NONE
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
