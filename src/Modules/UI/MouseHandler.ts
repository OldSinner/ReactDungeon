import { Color, Vector } from 'p5';
import WorldContext from '../Context/WorldContext';
import Tile from '../MapElements/Tile';

export default class MouseHandler {
    x: number = 0;
    y: number = 0;
    mouseActionType: MouseActionType = MouseActionType.DevDestroy;
    pickedTile: Tile;
    constructor() {
        window.mouseClicked = () => this.pressedMouse();
    }
    update() {
        this.x = mouseX;
        this.y = mouseY;
        const mapContext = context.mapContext;
        this.pickedTile = mapContext.getTileBaseOnPosition(new Vector(this.x, this.y));
        context.uiSystem.dataBox.setData(this.pickedTile);
        this.actionColorPicker();
    }
    pressedMouse() {
        switch (this.mouseActionType) {
            case MouseActionType.None:
                break;
            case MouseActionType.DevDestroy:
                this.pickedTile.destroyFrontTile();
                break;
            default:
                break;
        }
    }
    actionColorPicker() {
        switch (this.mouseActionType) {
            case MouseActionType.None:
                this.pickedTile.highlight(color(255, 255, 255, 40));
                break;
            case MouseActionType.DevDestroy:
                this.pickedTile.highlight(color(255, 0, 0, 40));
                break;
            default:
                this.pickedTile.highlight(color(255, 255, 255, 40));
                break;
        }
    }
}

export enum MouseActionType {
    None,
    Build,
    DevDestroy,
}
