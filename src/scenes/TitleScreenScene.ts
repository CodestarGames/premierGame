
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class TitleScreenScene extends Phaser.Scene {

	constructor() {
		super("TitleScreenScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 320, 120, "premierBG");
		tilesprite.scaleX = 3;
		tilesprite.scaleY = 3;
		tilesprite.setOrigin(0, 0);
		tilesprite.tilePositionY = 256;

		// tilesprite_1
		const tilesprite_1 = this.add.tileSprite(0, 352, 320, 120, "premierBG");
		tilesprite_1.scaleX = 3;
		tilesprite_1.scaleY = 3;
		tilesprite_1.setOrigin(0, 0);
		tilesprite_1.tilePositionY = 256;

		// tilesprite_2
		const tilesprite_2 = this.add.tileSprite(0, 608, 320, 120, "premierBG");
		tilesprite_2.scaleX = 3;
		tilesprite_2.scaleY = 3;
		tilesprite_2.setOrigin(0, 0);
		tilesprite_2.tilePositionY = 256;

		// title
		this.add.image(480, 416, "title");

		// peteTitleAnim
		const peteTitleAnim = this.add.sprite(688, 314, "petemetalslug", 0);
		peteTitleAnim.scaleX = 3;
		peteTitleAnim.scaleY = 3;

		// pressStartImg
		const pressStartImg = this.add.image(480, 724, "pressStart");

		this.peteTitleAnim = peteTitleAnim;
		this.pressStartImg = pressStartImg;

		this.events.emit("scene-awake");
	}

	private peteTitleAnim: Phaser.GameObjects.Sprite | undefined;
	private pressStartImg: Phaser.GameObjects.Image | undefined;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.peteTitleAnim.play('anims-peter-idle-title');

		let pauseEvent = this.time.addEvent({
			delay: 1000,
			callback: () => {
				this.pressStartImg.setVisible(!this.pressStartImg.visible);
			},
			loop: true
		});

		let titleMusic = this.sound.play('musicTitle', {loop:true, volume:0.75})
		if (this.input.gamepad.total === 0)
		{
			this.input.gamepad.once('connected', pad => {

				pad.once('down', (index, value, button) => {

					if (index === 9)
					{
						this.sound.stopByKey('musicTitle')
						this.sound.play('sfxGameStart')
						setTimeout(() => { this.scene.start('MainScene'); }, 2000)
					}

				});
			});
		}
		else {
			let pad = this.input.gamepad.pad1;
			pad.once('down', (index, value, button) => {

				if (index === 9)
				{
					this.sound.stopByKey('musicTitle')
					this.sound.play('sfxGameStart')
					setTimeout(() => { this.scene.start('MainScene'); }, 2000)

				}

			});
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
