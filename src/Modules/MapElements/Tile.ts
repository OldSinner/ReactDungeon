import { Color } from 'p5';
import MapContext from '../Context/MapContext';
import BackTile from './BackTile';
import FrontTile from './FrontTile';

export default class Tile {
    x: number;
    y: number;
    width: number;
    height: number;
    backTile: BackTile;
    frontTile: FrontTile[];
    private isHighlighted: boolean = false;
    private highlightColor: Color = color(255, 255, 255, 40);
    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frontTile = [];
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
                this.frontTile.forEach((tile) => {
                    tile.draw(this.x, this.y, this.width, this.height);
                });
                if (this.isHighlighted) {
                    fill(this.highlightColor);
                    rect(this.x * this.width, this.y * this.height, this.width, this.height);
                }
                fill('black');
                this.isHighlighted = false;
            }
        }
    }
    changeSize(size: number) {
        this.width += size;
        this.height += size;
    }
    highlight(color: Color) {
        this.highlightColor = color;
        this.isHighlighted = true;
    }

    setBack(backTile: BackTile) {
        this.backTile = backTile;
    }
    addFront(frontTile: FrontTile) {
        this.frontTile.push(frontTile);
    }
}
