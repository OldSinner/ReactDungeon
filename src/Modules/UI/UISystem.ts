import TileDataBox from './UIElements/TileDataBox';

export default class UISystem {
    dataBox: TileDataBox;
    constructor() {
        this.dataBox = new TileDataBox();
    }
    draw() {
        this.dataBox.draw();
    }
}
