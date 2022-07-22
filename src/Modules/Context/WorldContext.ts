import P5, { Vector } from 'p5';
import Camera from '../UI/Camera';
import KeyboardHandler from '../UI/KeyboardHandler';
import MouseHandler from '../UI/MouseHandler';
import MapContext from './MapContext';

export default class WorldContext {
    mapContext: MapContext;
    camera: Camera;
    mouse: MouseHandler;
    keyboard: KeyboardHandler;

    setup() {
        // Init Utils
        this.camera = new Camera(0, 0, 10);
        this.mouse = new MouseHandler();
        this.keyboard = new KeyboardHandler();
        // Init World
        // if (Storage.isSave()) {
        //     this.mapContext = new MapContext(50, 50, 90);
        //     Storage.LoadData();
        // } else {
        this.mapContext = new MapContext(50, 50, 90);
        this.mapContext.generateTiles();
        // }
        //After World Init
        this.setCameraLock();
    }
    draw = () => {
        this.camera.inputCamera();
        this.mouse.update();
        this.keyboard.update();
        this.mapContext.drawMap();
    };
    postDraw = () => {};
    private setCameraLock() {
        this.camera.setcameraLock(new Vector(0, 0), this.mapContext.getSizeInPixels());
    }
}
