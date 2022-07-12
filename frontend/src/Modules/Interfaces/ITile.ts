import BackTile from "../MapElements/BackTile";
import FrontTile from "../MapElements/FrontTile";

export interface ITile {
  x: number;
  y: number;
  width: number;
  height: number;
  backTile: IBackTile;
  frontTile?: IFrontTile;
}
export interface IBackTile {
  sprite: string;
}
export interface IFrontTile {
  sprite: string;
}
