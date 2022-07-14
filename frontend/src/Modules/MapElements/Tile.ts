import { Color } from 'p5';
import MapContext from '../Context/MapContext';
import { IBackTile, ITile } from '../Interfaces/ITile';
import BackTile from './BackTile';
import FrontTile from './FrontTile';

export default class Tile {
    x: number;
    y: number;
    width: number;
    height: number;
    isDiscovered: boolean = false;
    backTile: BackTile;
    frontTile?: FrontTile;
    private isHighlighted: boolean = false;
    private highlightColor: Color = color(255, 255, 255, 40);
    constructor(x: number, y: number, width: number, height: number, isDisovered: boolean = false) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isDiscovered = isDisovered;
    }
    draw() {
        noStroke();
        if (!this.isDiscovered) {
            noStroke();
            fill(0, 0, 0, 100);
            return;
        }
        if (this.backTile) {
            this.backTile.draw(this.x, this.y, this.width, this.height);
        } else {
            fill('purple');
            rect(this.x * this.width, this.y * this.height, this.width, this.height);
            fill('black');
        }
        if (this.frontTile) {
            this.frontTile.draw(this.x, this.y, this.width, this.height);
        }
        if (this.isHighlighted) {
            fill(this.highlightColor);
            rect(this.x * this.width, this.y * this.height, this.width, this.height);
        }
        fill('black');
        this.isHighlighted = false;
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
    setFront(frontTile: FrontTile) {
        this.frontTile = frontTile;
    }
    parseData(data: ITile) {
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
        this.height = data.height;
        this.isDiscovered = data.isDisovered;
        if (this.backTile) {
            this.backTile.parseData(data.backTile);
        } else {
            this.backTile = new BackTile(data.backTile.sprite, data.backTile.nameTile);
        }
        if (data.frontTile) {
            if (this.frontTile) this.frontTile.parseData(data.frontTile);
            else
                this.frontTile = new FrontTile(
                    data.frontTile.sprite,
                    data.frontTile.nameTile,
                    data.frontTile.isVisibleThrough
                );
        }
    }
    discoverTiles(tile: Tile = this) {
        tile.isDiscovered = true;
        const surroundingTiles = context.mapContext.getSurroundingTiles(tile);
        surroundingTiles.forEach((surroundingTile) => {
            if (surroundingTile.isDiscovered) return;
            surroundingTile.isDiscovered = true;
            if (!surroundingTile.frontTile || surroundingTile.frontTile?.isVisibleThrough) {
                this.discoverTiles(surroundingTile);
            }
        });
    }
    destroyFrontTile() {
        if (!this.frontTile) return;
        this.frontTile = null;
        this.discoverTiles();
    }
}
