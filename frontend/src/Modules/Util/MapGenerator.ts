import MapContext from "../Context/MapContext";
import Tile from "../MapElements/Tile";
import { GroundEnums } from "../Types/Ground/GroundEnums";

export default class MapGenerator {
  constructor(public context: MapContext) {}
  BaseGeneration() {
    const tiles = this.context.tiles;
    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[0].length; j++) {
        tiles[i][j].setType(GroundEnums.STONE);
      }
    }
  }
  GenerateCaves() {
    var caveSize = random(2, 20);
    for (let i = 0; i < caveSize; i++) {
      var x = Math.floor(
        random(this.context.startAreaSize, this.context.tiles.length)
      );
      var y = Math.floor(
        random(this.context.startAreaSize, this.context.tiles[0].length)
      );
      var tile = this.context.tiles[x][y];
      var tilesSur = this.context.getSurroundingTiles(tile);
      //First loop--------------------------------------
      tilesSur.forEach((tile, index) => {
        tile.setType(GroundEnums.INSIDESTONE);

        if (index % Math.floor(random(4)) == 0) {
          tilesSur = this.context.getSurroundingTiles(tile);
          //Second loop--------------------------------------
          tilesSur.forEach((tile2) => {
            tile2.setType(GroundEnums.INSIDESTONE);
            if (random(100) > 80) {
              tilesSur = this.context.getSurroundingTiles(tile2);
              //Third loop--------------------------------------
              tilesSur.forEach((tile3) => {
                tile3.setType(GroundEnums.INSIDESTONE);
              });
            }
          });
        }
      });
    }
  }
  GenerateGold() {
    var caveSize = random(2, 8);
    for (let i = 0; i < caveSize; i++) {
      var x = Math.floor(
        random(this.context.startAreaSize * 2, this.context.tiles.length)
      );
      var y = Math.floor(
        random(this.context.startAreaSize * 2, this.context.tiles[0].length)
      );
      var tile = this.context.tiles[x][y];
      var tilesSur = this.context.getSurroundingTiles(tile);
      //First loop--------------------------------------
      tilesSur.forEach((tile, index) => {
        tile.setType(GroundEnums.GOLD_O);

        if (index % Math.floor(random(4)) == 0) {
          tilesSur = this.context.getSurroundingTiles(tile);
          //Second loop--------------------------------------
          tilesSur.forEach((tile2) => {
            tile2.setType(GroundEnums.GOLD_O);
            if (random(100) > 95) {
              tilesSur = this.context.getSurroundingTiles(tile2);
              //Third loop--------------------------------------
              tilesSur.forEach((tile3) => {
                tile3.setType(GroundEnums.GOLD_O);
              });
            }
          });
        }
      });
    }
  }
  GenerateIron() {
    var caveSize = random(2, 40);
    for (let i = 0; i < caveSize; i++) {
      var x = Math.floor(
        random(this.context.startAreaSize, this.context.tiles.length)
      );
      var y = Math.floor(
        random(this.context.startAreaSize, this.context.tiles[0].length)
      );
      var tile = this.context.tiles[x][y];
      var tilesSur = this.context.getSurroundingTiles(tile);
      //First loop--------------------------------------
      tilesSur.forEach((tile, index) => {
        tile.setType(GroundEnums.IRON_O);

        if (index % Math.floor(random(4)) == 0) {
          tilesSur = this.context.getSurroundingTiles(tile);
          //Second loop--------------------------------------
          tilesSur.forEach((tile2) => {
            tile2.setType(GroundEnums.IRON_O);
            if (random(100) > 95) {
              tilesSur = this.context.getSurroundingTiles(tile2);
              //Third loop--------------------------------------
              tilesSur.forEach((tile3) => {
                tile3.setType(GroundEnums.IRON_O);
              });
            }
          });
        }
      });
    }
  }
  generateStartArea() {
    var startAreaSize = this.context.startAreaSize;
    for (let i = 0; i < startAreaSize; i++) {
      for (let j = 0; j < startAreaSize; j++) {
        this.context.tiles[i][j].setType(GroundEnums.GRASS);
        if (random(100) > 80) {
          var tiles = this.context.getSurroundingTiles(
            this.context.tiles[i][j]
          );
          tiles.forEach((tile) => {
            tile.setType(GroundEnums.GRASS);
          });
        }
      }
    }
  }
}
