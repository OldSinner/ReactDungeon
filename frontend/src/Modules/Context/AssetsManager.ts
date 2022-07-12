import { Image } from "p5";

export default class AssetsManager {
  sprites: { [key: string]: Image } = {};
  loadAssets() {
    console.log("loading assets");
    this.sprites["stone_01"] = loadImage("/Assets/Sprites/Env/Stone_01.jpg");
    this.sprites["grass_01"] = loadImage("/Assets/Sprites/Env/Grass_01.jpg");
    this.sprites["sand_01"] = loadImage("/Assets/Sprites/Env/Sand_01.jpg");
    this.sprites["stone_02"] = loadImage("/Assets/Sprites/Env/Stone_02.jpg");
  }
}
