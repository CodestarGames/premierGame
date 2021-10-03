import Phaser from "phaser";
import MainScene from "./scenes/MainScene";
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin';
import TitleScreenScene from "./scenes/TitleScreenScene";

window.addEventListener('load', function () {

    var game = new Phaser.Game({
        width: 960,
        height: 960,
        type: Phaser.WEBGL,
        backgroundColor: "#000000",
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 960,
            height: 960,
        },
        pixelArt: true,
        input: {
          gamepad: true
        },
        physics: {
            default: 'arcade',
            arcade: {
                x: -20,
                width: 1000,
                height: 980,
                //debug: true,
                gravity: {y: 0}
            }
        },
        scene: Boot
    });

    game.scene.add("TitleScreenScene", TitleScreenScene, false);
    game.scene.add("MainScene", MainScene, false);

});

class Boot extends Phaser.Scene {

    preload() {
        this.load.pack("asset-pack", "assets/asset-pack.json");
        // this.load.pack("fruit-stand-asset-pack", "assets/fruitStand/fruit-stand-asset-pack.json");
    }

    create() {
        const logoSprite = this.add.sprite(480, 480, "PremierTendo");
        logoSprite.scaleX = 3;
        logoSprite.scaleY = 3;
        logoSprite.setOrigin(0.5, 0.5);
        this.sound.play('sfxPtendo');
        setTimeout(() => {

            logoSprite.setVisible(false);
            setTimeout(() => {

                const logo2Sprite = this.add.sprite(480, 480, "codestarLogo");
                logo2Sprite.scaleX = 1;
                logo2Sprite.scaleY = 1;
                logo2Sprite.setOrigin(0.5, 0.5);

                setTimeout(() => {

                    logo2Sprite.setVisible(false);
                    setTimeout(() => {
                        this.scene.start("TitleScreenScene");
                    }, 1500)

                }, 1500)

            }, 1500)
        }, 1500)



    }

}


