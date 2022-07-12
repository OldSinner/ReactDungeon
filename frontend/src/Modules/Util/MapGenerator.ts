import Tile from "../MapElements/Tile";
import { GroundEnums } from "../Types/Ground/GroundEnums";

export default class MapGenerator {
  static BaseGeneration(tiles: Tile[][]) {
    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[i].length; j++) {
        tiles[i][j].setType(GroundEnums.STONE);
      }
    }
  }
  static GenerateCaves(tiles: Tile[][]) {
    var x = Math.floor(random(0, tiles.length));
    var y = Math.floor(random(0, tiles[0].length));
    console.log(x, y);
    var caveSize = random(10, 20);
    //TODO: INDEX CHECK !!!!!
    for (let i = 0; i < caveSize; i++) {
      let xtile = Math.floor(random(0, 2)) + x;
      let ytile = Math.floor(random(0, 2)) + y;
      console.log(x, y);
      console.log(xtile, ytile);
      tiles[xtile][ytile].setType(GroundEnums.INSIDESTONE);
    }
  }
}
