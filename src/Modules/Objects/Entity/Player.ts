import { Vector } from 'p5';
import { KeyBind } from '../../Util/KeyBind';
import Actor from './Actor';

export default class Player extends Actor {
    constructor(position: Vector, sprite: string) {
        super(position, sprite);
        this.id = 0;
    }
    move(): void {
        if (keyIsDown(KeyBind.MOVE_UP)) {
            this.position.add(0, -this.speed);
        }
        if (keyIsDown(KeyBind.MOVE_DOWN)) {
            this.position.add(0, this.speed);
        }
        if (keyIsDown(KeyBind.MOVE_LEFT)) {
            this.position.add(-this.speed, 0);
        }
        if (keyIsDown(KeyBind.MOVE_RIGHT)) {
            this.position.add(this.speed, 0);
        }
    }
}
