import { Vector } from "p5";
import "p5";
import GameContext from "../Context/GameContext";
export default class Camera {
  x: number;
  y: number;
  cameraspeed: number;
  cameraLock: { leftUp: Vector; rightDown: Vector };
  gameContext: GameContext;
  constructor(
    gameContext: GameContext,
    x: number,
    y: number,
    cameraspeed: number = 10
  ) {
    this.gameContext = gameContext;
    this.x = x;
    this.y = y;
    this.cameraspeed = cameraspeed;
    window.mouseWheel = (e: WheelEvent) => this.zoomCamera(e);
    return this;
  }
  zoomCamera(e: WheelEvent) {
    const mapContext = this.gameContext.mapContext;
    mapContext.setTileSize(e.deltaY * -0.01);
    this.setcameraLock(new Vector(0, 0), mapContext.getSizeInPixels());
  }
  getOffset(): Vector {
    return createVector(this.x, this.y);
  }
  setcameraLock(leftUp: Vector, rightDown: Vector) {
    this.cameraLock = { leftUp, rightDown };
    this.cameraLock.rightDown.sub(width, height);
  }

  inputCamera(): Camera {
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
    return this;
  }
}
