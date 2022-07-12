import "p5/global";
import MapContext from "./src/Modules/Context/MapContext";

declare global {
  interface Window {
    preload: () => void;
    draw: () => void;
    setup: () => void;
  }
}
