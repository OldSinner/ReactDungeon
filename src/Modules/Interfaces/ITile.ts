import BackTile from '../MapElements/BackTile';
import FrontTile from '../MapElements/FrontTile';

export interface ITile {
    x: number;
    y: number;
    width: number;
    height: number;
    isDisovered: boolean;
    backTile: IBackTile;
    frontTile?: IFrontTile;
}
export interface IBackTile {
    nameTile: string;
    sprite: string;
}
export interface IFrontTile {
    nameTile: string;
    sprite: string;
    isVisibleThrough: boolean;
}
