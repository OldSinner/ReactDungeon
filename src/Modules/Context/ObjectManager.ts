import BackTile from '../MapElements/BackTile';
import backTilesData from '../Data/Env/BackTiles.json';
import EnvTilesData from '../Data/Env/EnvTiles.json';

import TileObject from '../Objects/TileObject';
export default class ObjectManager {
    BackTiles: { [key: string]: BackTile } = {};
    EnvTiles: { [key: string]: TileObject } = {};

    loadData() {
        backTilesData.forEach((data) => {
            this.BackTiles[data.name] = new BackTile(data.sprite, data.name);
        });
        EnvTilesData.forEach((data) => {
            this.EnvTiles[data.name] = new TileObject(data.name, data.sprites, data.height, data.width, data.order);
        });
    }
}
