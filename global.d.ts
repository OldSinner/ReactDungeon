import 'p5/global';
import AssetsManager from './src/Modules/Context/AssetsManager';
import WorldContext from './src/Modules/Context/WorldContext';
import ObjectManager from './src/Modules/Context/ObjectManager';
import UtilContext from './src/Modules/Context/UtilContext';

declare global {
    interface Window {
        preload: () => void;
        draw: () => void;
        setup: () => void;
    }
    var utils: UtilContext;
    var context: WorldContext;
    var assets: AssetsManager;
    var objsManager: ObjectManager;
}
