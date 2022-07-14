import { Vector } from 'p5';
import 'p5';
import WorldContext from '../Context/WorldContext';
export default class Camera {
    x: number;
    y: number;
    cameraspeed: number;
    cameraLock: { leftUp: Vector; rightDown: Vector };
    constructor(x: number, y: number, cameraspeed: number = 10) {
        this.x = x;
        this.y = y;
        this.cameraspeed = cameraspeed;
        window.mouseWheel = (e: WheelEvent) => this.zoomCamera(e);
        return this;
    }
    zoomCamera(e: WheelEvent) {
        const mapContext = context.mapContext;
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
        // if (context.mouse.x < 50) {
        //   this.x += this.cameraspeed;
        // }
        // if (context.mouse.x > width - 50) {
        //   this.x -= this.cameraspeed;
        // }
        // if (context.mouse.y < 50) {
        //   this.y += this.cameraspeed;
        // }
        // if (context.mouse.y > height - 50) {
        //   this.y -= this.cameraspeed;
        // }
        if (keyIsDown(LEFT_ARROW)) {
            this.x += this.cameraspeed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x -= this.cameraspeed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y += this.cameraspeed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y -= this.cameraspeed;
        }
        if (this.x > this.cameraLock.leftUp.x) this.x = this.cameraLock.leftUp.x;
        if (this.y > this.cameraLock.leftUp.y) this.y = this.cameraLock.leftUp.y;
        if (this.x < -this.cameraLock.rightDown.x) this.x = -this.cameraLock.rightDown.x;
        if (this.y < -this.cameraLock.rightDown.y) this.y = -this.cameraLock.rightDown.y;
        return this;
    }
}
