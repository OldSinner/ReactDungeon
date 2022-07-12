import P5 from "p5";
import GameContext from "./Modules/Context/GameContext";
const context = new GameContext();
window.onload = () => {
  const sketch = (p5: P5) => {
    p5.setup = () => {
      context.setup(p5);
      p5.createCanvas(window.innerWidth - 100, window.innerHeight - 50);
    };
    p5.draw = () => {
      p5.background(0);
      context.draw();
    };
  };

  new P5(sketch);
};
