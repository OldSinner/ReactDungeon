import { Image } from 'p5';

export default class AssetsManager {
    sprites: { [key: string]: Image } = {};
    loadAssets() {
        console.log('loading assets');
        // Env
        this.sprites['grass_01'] = loadImage('/Assets/Sprites/Env/Grass_01.jpg');
        this.sprites['tree_01_01'] = loadImage('/Assets/Sprites/Env/Tree_01_01.png');
        this.sprites['tree_01_02'] = loadImage('/Assets/Sprites/Env/Tree_01_02.png');
        this.sprites['floor_w_01'] = loadImage('/Assets/Sprites/Env/Floor_w_01.png');
        this.sprites['char_01'] = loadImage('/Assets/Sprites/Entity/Player/char_01.png');

        console.log('assets loaded');
    }
    loadControls() {
        console.log('loading controls');
    }
}
