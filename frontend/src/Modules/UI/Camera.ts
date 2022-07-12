import { Vector } from "p5";
import "p5";
export default class Camera {
  x: number;
  y: number;
  cameraLock: { leftUp: Vector; rightDown: Vector };
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getOffset(): Vector {
    return createVector(this.x, this.y);
  }
  setcameraLock(leftUp: Vector, rightDown: Vector) {
    this.cameraLock = { leftUp, rightDown };
    this.cameraLock.rightDown.sub(width, height);
    console.log(this.cameraLock);
  }
  moveCamera() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x += 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y += 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y -= 5;
    }
    if (this.x > this.cameraLock.leftUp.x) this.x = this.cameraLock.leftUp.x;
    if (this.y > this.cameraLock.leftUp.y) this.y = this.cameraLock.leftUp.y;
    if (this.x < -this.cameraLock.rightDown.x)
      this.x = -this.cameraLock.rightDown.x;
    if (this.y < -this.cameraLock.rightDown.y)
      this.y = -this.cameraLock.rightDown.y;
  }
}
