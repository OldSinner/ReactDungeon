import { Color } from 'p5';
import MapContext from '../Context/MapContext';
import BackTile from './BackTile';

export default class Tile {
    x: number;
    y: number;
    width: number;
    height: number;
    backTile: BackTile;
    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        noStroke();
        const renderWidth = this.x * this.width + context.camera.getOffset().x;
        const renderHeight = this.y * this.height + context.camera.getOffset().y;

        if (renderWidth < width + 10 && renderHeight < height + 10) {
            {
                if (this.backTile) {
                    this.backTile.draw(this.x, this.y, this.width, this.height);
                } else {
                    fill('purple');
                    rect(this.x * this.width, this.y * this.height, this.width, this.height);
                    fill('black');
                }

                fill('black');
            }
        }
    }
    changeSize(size: number) {
        this.width += size;
        this.height += size;
    }

    setBack(backTile: BackTile) {
        this.backTile = backTile;
    }
}
