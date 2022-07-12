import "p5/global";
import AssetsManager from "./src/Modules/Context/AssetsManager";
import WorldContext from "./src/Modules/Context/WorldContext";
import ObjectManager from "./src/Modules/Context/ObjectManager";

declare global {
  interface Window {
    preload: () => void;
    draw: () => void;
    setup: () => void;
  }
  var context: WorldContext;
  var assets: AssetsManager;
  var objsManager: ObjectManager;
}
