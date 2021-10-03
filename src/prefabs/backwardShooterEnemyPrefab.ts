import MainScene from "~/scenes/MainScene";
import coinPrefab from "./coinPrefab";

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import CompPhysics from "../components/CompPhysics";
import envFireballPrefab from "./envFireballPrefab";

export default class backwardShooterEnemyPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "premier-muppet", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;

		// this (components)
		const thisCompPhysics = new CompPhysics(this);
		thisCompPhysics.bodyWidth = 112;
		thisCompPhysics.bodyHeight = 112;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.isKilled = false;
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.shootEvent = this.scene.time.addEvent({
			delay: 2000,
			callback: () => {
				if(!this.active)
					return;
				function choose(choices) {
					var index = Math.floor(Math.random() * choices.length);
					return choices[index];
				}
				let fire = choose([0, 1])
				if(fire) {

					let fireball = new envFireballPrefab(this.scene, this.getCenter().x, this.getCenter().y);
					this.scene.add.existing(fireball);
					const dx = (this.scene as MainScene).player.x - this.x;
					const dy = (this.scene as MainScene).player.y - this.y;

					const dir = new Phaser.Math.Vector2(dx, dy).normalize().scale(300);
					(fireball.body as Phaser.Physics.Arcade.Body).setVelocity(dir.x, dir.y)
				}
			},
			loop: true
		});
		/* END-USER-CTR-CODE */
	}

	public coinValue: number = 4;

	/* START-USER-CODE */
	isKilled: boolean;
	shootEvent: any;

	// Write your code here.
	start(){
		//this.play('anim-horseshoe-idle');
		(this.scene as MainScene).enemyCollisionGroup.add(this);
		let body = (this.body as Phaser.Physics.Arcade.Body);
		body.setVelocity(-150,0);
		body.setBounce(0, 0);

		this.scene.tweens.timeline({
			targets: [this],
			ease: 'Sine.easeInOut',
			duration: 2000,
			tweens: [
				{
					y: "+=112"
				},
				{
					y: "-=112"
				},
			],
			yoyo:true,
			repeat: -1,
		});



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
