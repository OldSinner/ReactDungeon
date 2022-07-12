import "p5/global";
import MapContext from "./src/Modules/Context/MapContext";

declare global {
  interface Window {
    draw: () => void;
    setup: () => void;
  }
}
