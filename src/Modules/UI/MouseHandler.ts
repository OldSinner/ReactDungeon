import { Color, Vector } from 'p5';
import WorldContext from '../Context/WorldContext';
import Tile from '../MapElements/Tile';
import Player from '../Objects/Entity/Player';

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
        if (keyIsDown(CONTROL)) {
            objsManager.EnvTiles['floor_w_01'].build(tile);
        } else if (keyIsDown(SHIFT)) {
            objsManager.EnvTiles['tree_01'].build(tile);
        } else if (keyIsDown(ALT)) {
            new Player(new Vector(mouseX, mouseY), 'char_01');
        }
    }
}

export enum MouseActionType {
    None,
    Build,
    DevDestroy,
}
