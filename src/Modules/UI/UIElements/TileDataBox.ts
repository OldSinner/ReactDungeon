import Tile from "../../MapElements/Tile";
import Box from "./Box";

export default class TileDataBox {
  tileToDisplay: Tile = null;
  box: Box;
  constructor() {
    this.box = new Box();
  }
  setData(tile: Tile) {
    this.tileToDisplay = tile;
  }
  draw() {
    this.box.drawBox(
      () => {
        fill("white");
        if (this.tileToDisplay.isDiscovered) {
          text(
            this.tileToDisplay?.frontTile
              ? this.tileToDisplay?.frontTile?.nameTile
              : "Empty",
            10,
            height - 180
          );
          text(
            "Ground: " + this.tileToDisplay?.backTile.nameTile,
            10,
            height - 150
          );
        } else {
          text("Darkness", 10, height - 180);
          text("Darkness", 10, height - 150);
        }
      },
      0,
      height - 200,
      400,
      200
    );
  }
}
