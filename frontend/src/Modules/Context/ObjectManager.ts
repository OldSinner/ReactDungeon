import BackTile from "../MapElements/BackTile";
import backTilesData from "../Data/Env/BackTiles.json";
import frontTilesData from "../Data/Env/FrontTiles.json";

import FrontTile from "../MapElements/FrontTile";
export default class ObjectManager {
  BackTiles: { [key: string]: BackTile } = {};
  FrontTiles: { [key: string]: FrontTile } = {};

  loadData() {
    backTilesData.forEach((data) => {
      this.BackTiles[data.name] = new BackTile(data.sprite);
    });
    frontTilesData.forEach((element) => {
      this.FrontTiles[element.name] = new FrontTile(
        element.sprite,
        element.isVisibleThrough
      );
    });
  }
}
