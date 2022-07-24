import { Vector } from 'p5';
import Tile from '../../MapElements/Tile';

export default class Actor {
    id: number;
    position: Vector;
    sprite: string;
    width: number;
    height: number;
    scale: number = 2;
    tile: Tile;
    speed: number = 4;
    constructor(position: Vector, sprite: string) {
        this.position = position;
        this.sprite = sprite;
        // console.log(utils);
        // this.id = utils.GetNewId();
        var spriteImg = assets.sprites[this.sprite];
        this.width = spriteImg.width;
        this.height = spriteImg.height;
        this.tile = context.mapContext.getTileBaseOnPosition(position);
        context.addActor(this);
    }
    draw() {
        var sprite = assets.sprites[this.sprite];
        image(
            sprite,
            this.position.x - (sprite.width * this.scale) / 2,
            this.position.y - (sprite.height * this.scale) / 2,
            this.width * this.scale,
            this.height * this.scale
        );
    }
    move() {}
    update() {
        this.move();
        var tile = context.mapContext.getTileBaseOnPosition(this.position);
        this.tile = tile;
    }
}
