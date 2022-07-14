export default class UISystem {
  draw() {
    push();
    noStroke();
    fill(0, 0, 0, 100);
    rect(width - 300, 0, 300, 100);
    pop();
  }
}
