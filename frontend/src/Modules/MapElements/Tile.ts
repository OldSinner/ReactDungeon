import GameContext from "../Context/GameContext";
import MapContext from "../Context/MapContext";
import { GroundEnums } from "../Types/Ground/GroundEnums";

export default class Tile {
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  context!: MapContext;
  text: string;
  tileType: GroundEnums;
  isHighlited: boolean = false;
  constructor(
    context: MapContext,
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    text: string,
    tileType: GroundEnums
  ) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.text = text;
    this.tileType = tileType;
  }
  draw() {
    if (this.isHighlited) {
      fill("red");
    } else {
      fill(this.color);
    }
    this.Render();

    fill("black");
    text(this.text, this.x * this.width, this.y * this.height + 40);
    this.isHighlited = false;
  }
  changeSize(size: number) {
    this.width += size;
    this.height += size;
  }
  highlight() {
    this.isHighlited = true;
  }
  setType(type: GroundEnums) {
    this.tileType = type;
  }
  private Render() {
    switch (this.tileType) {
      case GroundEnums.SAND:
        image(
          this.context.gameContext.assetManager.sprites["sand_01"],
          this.x * this.width,
          this.y * this.height,
          this.width,
          this.height
        );
        break;
      case GroundEnums.GRASS:
        image(
          this.context.gameContext.assetManager.sprites["grass_01"],
          this.x * this.width,
          this.y * this.height,
          this.width,
          this.height
        );
        break;
      case GroundEnums.STONE:
        image(
          this.context.gameContext.assetManager.sprites["stone_01"],
          this.x * this.width,
          this.y * this.height,
          this.width,
          this.height
        );
        break;
      case GroundEnums.INSIDESTONE:
        image(
          this.context.gameContext.assetManager.sprites["stone_02"],
          this.x * this.width,
          this.y * this.height,
          this.width,
          this.height
        );
        break;

      case GroundEnums.GOLD_O:
        image(
          this.context.gameContext.assetManager.sprites["gold_o_01"],
          this.x * this.width,
          this.y * this.height,
          this.width,
          this.height
        );
        break;

      case GroundEnums.IRON_O:
        image(
          this.context.gameContext.assetManager.sprites["iron_o_01"],
          this.x * this.width,
          this.y * this.height,
          this.width,
          this.height
        );
        break;

      default:
        rect(
          this.x * this.width,
          this.y * this.height,
          this.width,
          this.height
        );
        break;
    }
  }
}
