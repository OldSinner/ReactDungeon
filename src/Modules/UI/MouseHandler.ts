import { Color, Vector } from 'p5';
import WorldContext from '../Context/WorldContext';
import Tile from '../MapElements/Tile';

export default class MouseHandler {
    x: number = 0;
    y: number = 0;
    mouseActionType: MouseActionType = MouseActionType.DevDestroy;
    constructor() {
        window.mouseClicked = () => this.pressedMouse();
    }
    update() {}
    pressedMouse() {
        this.x = mouseX;
        this.y = mouseY;
        const mapContext = context.mapContext;
        const tile = mapContext.getTileBaseOnPosition(new Vector(this.x, this.y));
        console.log(tile);
        console.log(width + ' ' + height);
    }
}

export enum MouseActionType {
    None,
    Build,
    DevDestroy,
}
