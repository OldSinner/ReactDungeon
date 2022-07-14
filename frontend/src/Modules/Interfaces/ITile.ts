import BackTile from "../MapElements/BackTile";
import FrontTile from "../MapElements/FrontTile";

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
  sprite: string;
}
export interface IFrontTile {
  sprite: string;
  isVisibleThrough: boolean;
}
