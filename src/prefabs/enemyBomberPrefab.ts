
import MainScene from "../scenes/MainScene";
import envFireballPrefab from "./envFireballPrefab";
import coinPrefab from "./coinPrefab";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";


export default class enemyBomberPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "nathan", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.shootEvent = this.scene.time.addEvent({
			delay: this.timeBetweenShots,
			callback: () => {
				if(!this.active)
					return;
				if(this.isKilled===false)
					this.spawnBullet();
			},
			loop: true
		});

		/* END-USER-CTR-CODE */
	}

	public timeBetweenShots: number = 2000;

	/* START-USER-CODE */
	private shootEvent: any;
	private isKilled: boolean;

	// Write your code here.
	start(){
		(this.scene as MainScene).enemyCollisionGroup.add(this);
		let body = (this.body as Phaser.Physics.Arcade.Body);
		body.setBounce(0, 0);
		body.setVelocity(-150,0);
	}

	private spawnBullet() {
		if(!this.active)
			return;
		let fireball = new envFireballPrefab(this.scene, this.getBottomCenter().x, this.getBottomCenter().y + 4);
		fireball.setTexture('premier-cage');
		fireball.setScale(0.5, 0.5)
		this.scene.add.existing(fireball);
		(fireball.body as Phaser.Physics.Arcade.Body).setVelocityY(300);
	}

	kill(){
		this.isKilled = true;
		this.shootEvent.remove();
		(this.body as Phaser.Physics.Arcade.Body).setVelocity(0,0);
		let poofSprite = new Phaser.GameObjects.Sprite(this.scene, this.x, this.y, '');
		poofSprite.setScale(3,3);
		(this.scene as MainScene).add.existing(poofSprite);
		poofSprite.play('anim-poof-idle');
		this.scene.sound.play('sfxExplode')
		poofSprite.on('animationcomplete', () => { poofSprite.destroy() })
		const coinPrefab1 = new coinPrefab(this.scene, this.x, this.y);
		(this.scene as MainScene).add.existing(coinPrefab1);
		this.destroy();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
