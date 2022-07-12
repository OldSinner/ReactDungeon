import MapContext from "../Context/MapContext";
import Tile from "../MapElements/Tile";

export default class MapGenerator {
  startAreaSize: number;
  constructor(startAreaSize: number) {
    this.startAreaSize = startAreaSize;
  }
  BaseGeneration() {
    const contextMap = context.mapContext;
    const tiles = contextMap.tiles;
    console.log(objsManager.BackTiles);

    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[0].length; j++) {
        tiles[i][j].setBack(objsManager.BackTiles["InnerStone"]);
        tiles[i][j].setFront(objsManager.FrontTiles["Stone"]);
      }
    }
  }
  GenerateCaves() {
    const contextMap = context.mapContext;
    var caveSize = random(10, 20);
    for (let i = 0; i < caveSize; i++) {
      var x = Math.floor(random(this.startAreaSize, contextMap.tiles.length));
      var y = Math.floor(
        random(this.startAreaSize, contextMap.tiles[0].length)
      );
      var tile = contextMap.tiles[x][y];
      var tilesSur = contextMap.getSurroundingTiles(tile);
      tilesSur.forEach((tile) => {
        tile.setFront(null);
        let surTile = contextMap.getSurroundingTiles(tile);
        surTile.forEach((tile) => {
          if (30 < random(0, 100)) {
            tile.setFront(null);
          }
        });
      });
    }
  }
  GenerateGold() {
    const contextMap = context.mapContext;
    const goldTile = objsManager.FrontTiles["GoldOre"];
    var caveSize = random(2, 8);
    for (let i = 0; i < caveSize; i++) {
      var x = Math.floor(
        random(this.startAreaSize * 2, contextMap.tiles.length)
      );
      var y = Math.floor(
        random(this.startAreaSize * 2, contextMap.tiles[0].length)
      );
      var tile = contextMap.tiles[x][y];
      var tilesSur = contextMap.getSurroundingTiles(tile);
      //First loop--------------------------------------
      tilesSur.forEach((tile, index) => {
        tile.setFront(goldTile);

        if (index % Math.floor(random(4)) == 0) {
          tilesSur = contextMap.getSurroundingTiles(tile);
          //Second loop--------------------------------------
          tilesSur.forEach((tile2) => {
            tile2.setFront(goldTile);
            if (random(100) > 95) {
              tilesSur = contextMap.getSurroundingTiles(tile2);
              //Third loop--------------------------------------
              tilesSur.forEach((tile3) => {
                tile3.setFront(goldTile);
              });
            }
          });
        }
      });
    }
  }
  GenerateIron() {
    const contextMap = context.mapContext;
    const ironTile = objsManager.FrontTiles["IronOre"];
    var caveSize = random(2, 40);

    for (let i = 0; i < caveSize; i++) {
      var x = Math.floor(random(this.startAreaSize, contextMap.tiles.length));
      var y = Math.floor(
        random(this.startAreaSize, contextMap.tiles[0].length)
      );
      var tile = contextMap.tiles[x][y];
      var tilesSur = contextMap.getSurroundingTiles(tile);
      //First loop--------------------------------------
      tilesSur.forEach((tile, index) => {
        tile.setFront(ironTile);

        if (index % Math.floor(random(4)) == 0) {
          tilesSur = contextMap.getSurroundingTiles(tile);
          //Second loop--------------------------------------
          tilesSur.forEach((tile2) => {
            tile2.setFront(ironTile);
            if (random(100) > 95) {
              tilesSur = contextMap.getSurroundingTiles(tile2);
              //Third loop--------------------------------------
              tilesSur.forEach((tile3) => {
                tile3.setFront(ironTile);
              });
            }
          });
        }
      });
    }
  }
  generateStartArea() {
    const contextMap = context.mapContext;
    const grass = objsManager.BackTiles["Grass"];
    for (let i = 0; i < this.startAreaSize; i++) {
      for (let j = 0; j < this.startAreaSize; j++) {
        contextMap.tiles[i][j].setBack(grass);
        contextMap.tiles[i][j].setFront(null);
        if (random(100) > 80) {
          var tiles = contextMap.getSurroundingTiles(contextMap.tiles[i][j]);
          tiles.forEach((tile) => {
            tile.setBack(grass);
            tile.setFront(null);
          });
        }
      }
    }
  }
  generateLife() {
    const contextMap = context.mapContext;
    const un_tree = objsManager.FrontTiles["un_tree"];
    const InnerStone = objsManager.BackTiles["InnerStone"];
    const tiles = contextMap.tiles;
    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[0].length; j++) {
        if (
          tiles[i][j].frontTile == null &&
          tiles[i][j].backTile == InnerStone
        ) {
          if (random(100) > 80) {
            tiles[i][j].setFront(un_tree);
          }
        }
      }
    }
  }
}
