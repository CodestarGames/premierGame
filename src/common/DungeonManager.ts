import Phaser from 'phaser';
import MainScene from "~/scenes/MainScene";
import HeroSave from "~/common/HeroSave";

export default class DungeonManager {
    private game: Phaser.Game;
    private heroSave: HeroSave;
    private healthIndicatorsGroup: Phaser.GameObjects.Container;
    private coinValueText: Phaser.GameObjects.Text;
    private healthValueText: Phaser.GameObjects.Text;
    private backpanel: Phaser.GameObjects.Graphics;

    get scene() : MainScene {
        return (this.game.scene.getScene('MainScene') as MainScene)
    }

    constructor(game: Phaser.Game) {
        this.game = game;
        this.heroSave = new HeroSave();
    }

    initLevel() {

        //add lives indicators
        this.healthIndicatorsGroup = this.scene.add.container(0, 0);

        this.coinValueText = this.scene.add.text(56 + 16, 8, `Kupo Coins: ${this.heroSave.coins}`, { fontFamily: 'Impact' });
        this.coinValueText.setFontSize(20);
        this.coinValueText.scrollFactorX = 0;
        this.coinValueText.scrollFactorY = 0;
        this.coinValueText.setScale(1,1)
        this.healthIndicatorsGroup.add(this.coinValueText);

        this.healthValueText = this.scene.add.text(56+ 16, 36, `Lives: ${this.heroSave.lives}`, { fontFamily: 'Impact' });
        this.healthValueText.setFontSize(20);
        this.healthValueText.setScale(1,1)
        this.healthValueText.scrollFactorX = 0;
        this.healthValueText.scrollFactorY = 0;
        this.healthIndicatorsGroup.add(this.healthValueText);

        this.healthIndicatorsGroup.setScale(1)
    }

    addCoin(value: number) {
        this.heroSave.coins += value;
        this.coinValueText.setText(`Kupo Coins: ${this.heroSave.coins}`);
    }

    subtractHealth(val: number) {
        this.heroSave.lives -= val;
    }

}
