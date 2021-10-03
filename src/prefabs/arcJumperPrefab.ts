import MainScene from "../scenes/MainScene";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import CompPhysics from "../components/CompPhysics";
import coinPrefab from "./coinPrefab";
import envFireballPrefab from "./envFireballPrefab";

export default class arcJumperPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "premier-chonk", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;

		// this (components)
		const thisCompPhysics = new CompPhysics(this);
		thisCompPhysics.bodyWidth = 112;
		thisCompPhysics.bodyHeight = 112;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.fallEvent = this.scene.time.addEvent({
			delay: 2000,
			callback: () => {
				if(!this.active)
					return;
				let body = (this.body as Phaser.Physics.Arcade.Body);
				body.setVelocityY(350);
			},
			loop: true
		});

		this.shootEvent = this.scene.time.addEvent({
			delay: 2000,
			callback: () => {
				if(!this.active)
					return;
				let fireball = new envFireballPrefab(this.scene, this.getCenter().x, this.getCenter().y);
				this.scene.add.existing(fireball);
				let fireball2 = new envFireballPrefab(this.scene, this.getCenter().x, this.getCenter().y);
				this.scene.add.existing(fireball2);
				let fireball3 = new envFireballPrefab(this.scene, this.getCenter().x, this.getCenter().y);
				this.scene.add.existing(fireball3);
				let fireball4 = new envFireballPrefab(this.scene, this.getCenter().x, this.getCenter().y);
				this.scene.add.existing(fireball4);

				let fireball5 = new envFireballPrefab(this.scene, this.getCenter().x, this.getCenter().y);
				this.scene.add.existing(fireball5);
				let fireball6 = new envFireballPrefab(this.scene, this.getCenter().x, this.getCenter().y);
				this.scene.add.existing(fireball6);
				let fireball7 = new envFireballPrefab(this.scene, this.getCenter().x, this.getCenter().y);
				this.scene.add.existing(fireball7);
				let fireball8 = new envFireballPrefab(this.scene, this.getCenter().x, this.getCenter().y);
				this.scene.add.existing(fireball8);

					const vec45 = this.scene.physics.velocityFromAngle(45, 300);
					const vec135 = this.scene.physics.velocityFromAngle(135, 300);
					const vec225 = this.scene.physics.velocityFromAngle(225, 300);
					const vec320 = this.scene.physics.velocityFromAngle(320, 300);

					(fireball.body as Phaser.Physics.Arcade.Body).setVelocityX(-300);
					(fireball2.body as Phaser.Physics.Arcade.Body).setVelocityY(-300);
					(fireball3.body as Phaser.Physics.Arcade.Body).setVelocityX(300);
					(fireball4.body as Phaser.Physics.Arcade.Body).setVelocityY(300);

				(fireball5.body as Phaser.Physics.Arcade.Body).setVelocity(vec45.x,vec45.y);
				(fireball6.body as Phaser.Physics.Arcade.Body).setVelocity(vec135.x,vec135.y);
				(fireball7.body as Phaser.Physics.Arcade.Body).setVelocity(vec225.x,vec225.y);
				(fireball8.body as Phaser.Physics.Arcade.Body).setVelocity(vec320.x,vec320.y);

			},
			loop: true
		});
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	private fallEvent: any;
	private shootEvent:any;
	start(){
		(this.scene as MainScene).enemyCollisionGroup.add(this);
		let body = (this.body as Phaser.Physics.Arcade.Body);
		body.setVelocity(0, 350)
		this.scene.tweens.add({
			targets: body.velocity,
			x: -200,
			ease: 'Linear',
			duration: 2000,
			onComplete: () => {
				this.scene.tweens.add({
					targets: body.velocity,
					x: 0,
					ease: 'Linear',
					duration: 2000,
				});
			},
			repeat: -1
		});


	}
	kill(){
		this.fallEvent.remove();
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
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
