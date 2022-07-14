export default class Box {
  drawBox(
    draw: () => void,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    push();
    noStroke();
    fill(0, 0, 0, 100);
    rect(x, y, width, height);
    draw();
    pop();
  }
}
