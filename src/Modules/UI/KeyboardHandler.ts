import { MouseActionType } from './MouseHandler';

export default class KeyboardHandler {
    update() {
        this.getActionKeys();
    }
    private getActionKeys() {
        if (keyIsDown(66)) {
            context.mouse.mouseActionType = MouseActionType.Build;
        }
        if (keyIsDown(88)) {
            context.mouse.mouseActionType = MouseActionType.DevDestroy;
        }
        if (keyIsDown(ESCAPE) || keyIsDown(27)) {
            context.mouse.mouseActionType = MouseActionType.None;
        }
    }
}
