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
        return this;
    }

    getOffset(): Vector {
        return createVector(this.x, this.y);
    }
    setcameraLock(leftUp: Vector, rightDown: Vector) {
        this.cameraLock = { leftUp, rightDown };
        this.cameraLock.rightDown.sub(width, height);
    }

    inputCamera(): Camera {
        const player = context.getPlayer();
        if (player) {
            this.x = -player.position.x + width / 2;
            this.y = -player.position.y + height / 2;
        }

        if (this.x > this.cameraLock.leftUp.x) this.x = this.cameraLock.leftUp.x;
        if (this.y > this.cameraLock.leftUp.y) this.y = this.cameraLock.leftUp.y;
        if (this.x < -this.cameraLock.rightDown.x) this.x = -this.cameraLock.rightDown.x;
        if (this.y < -this.cameraLock.rightDown.y) this.y = -this.cameraLock.rightDown.y;
        return this;
    }
}
