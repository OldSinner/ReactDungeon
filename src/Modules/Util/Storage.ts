import { Vector } from 'p5';
import { ITile } from '../Interfaces/ITile';

export default class Storage {
    static SaveData(): boolean {
        try {
            const Tiles = context.mapContext.tiles;
            const TilesString = JSON.stringify(Tiles);

            localStorage.setItem('TilesSave', TilesString);

            return true;
        } catch (e) {
            return false;
        }
    }
    static LoadData(): boolean {
        try {
            const TilesString = localStorage.getItem('TilesSave');
            const Tiles = JSON.parse(TilesString) as ITile[][];

            context.mapContext.tiles.forEach((element) => {
                element.forEach((element) => {
                    element.parseData(Tiles[element.x][element.y]);
                });
            });

            return true;
        } catch (e) {
            return false;
        }
    }
    static GetSavedDataLenght(): Vector {
        const TilesString = localStorage.getItem('TilesSave');
        const Tiles = JSON.parse(TilesString) as ITile[][];
        return new Vector(Tiles.length, Tiles[0].length);
    }
    static isSave(): boolean {
        if (!localStorage.getItem('TilesSave')) {
            return false;
        }
        return true;
    }
}
