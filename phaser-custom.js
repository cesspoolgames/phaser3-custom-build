require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

var Phaser = {
  Cameras: {
    Scene2D: require('cameras/2d'),
  },
  Events: require('events/index'),
  Game: require('core/Game'),
  GameObjects: {
    DisplayList: require('gameobjects/DisplayList'),
    UpdateList: require('gameobjects/UpdateList'),

    Container: require('gameobjects/container/Container'),
    Image: require('gameobjects/image/Image'),
    Sprite: require('gameobjects/sprite/Sprite'),
    Graphics: require('gameobjects/graphics/Graphics.js'),

    Factories: {
      Container: require('gameobjects/container/ContainerFactory'),
      Image: require('gameobjects/image/ImageFactory'),
      Sprite: require('gameobjects/sprite/SpriteFactory'),
      Text: require('gameobjects/text/TextFactory'),
      Graphics: require('gameobjects/graphics/GraphicsFactory'),
    },

    Creators: {
      Container: require('gameobjects/container/ContainerCreator'),
      Image: require('gameobjects/image/ImageCreator'),
      Sprite: require('gameobjects/sprite/SpriteCreator'),
      Graphics: require('gameobjects/graphics/GraphicsCreator'),
    },
  },
  Input: {
    // CreatePixelPerfectHandler: require('input/CreatePixelPerfectHandler'),
    // CreateInteractiveObject: require('input/CreateInteractiveObject'),
    Events: require('input/events'),
    // Gamepad: require('input/gamepad'),
    InputManager: require('input/InputManager'),
    InputPlugin: require('input/InputPlugin'),
    // InputPluginCache: require('input/InputPluginCache'),
    // Keyboard: require('input/keyboard'),
    // Mouse: require('input/mouse'),
    Pointer: require('input/Pointer'),
    // Touch: require('input/touch'),
  },
  Loader: {
    FileTypes: {
      ImageFile: require('loader/filetypes/ImageFile'),
    },
    LoaderPlugin: require('loader/LoaderPlugin'),
  },
  Math: {
    Between: require('math/Between'),
  },
  Scale: require('scale'),
  ScaleModes: require('renderer/ScaleModes'),
  Scene: require('scene/Scene'),
  Scenes: require('scene'),
  Text: require('gameobjects/text/Text'),
};

//  Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
