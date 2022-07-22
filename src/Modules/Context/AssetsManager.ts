import { Image } from 'p5';

export default class AssetsManager {
    sprites: { [key: string]: Image } = {};
    loadAssets() {
        console.log('loading assets');
        // Env
        this.sprites['grass_01'] = loadImage('/Assets/Sprites/Env/Grass_01.jpg');
        console.log('assets loaded');
    }
    loadControls() {
        console.log('loading controls');
    }
}
