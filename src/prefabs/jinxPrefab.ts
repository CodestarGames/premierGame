import MainScene from "../scenes/MainScene";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import CompPhysics from "../components/CompPhysics";
import CompPlayerInput from "../components/CompPlayerInput";


export default class jinxPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "premierShip", frame ?? 0);

		this.setOrigin(0.5, 1);

		// this (components)
		const thisCompPhysics = new CompPhysics(this);
		thisCompPhysics.bodyWidth = 90;
		thisCompPhysics.bodyHeight = 60;
		const thisCompPlayerInput = new CompPlayerInput(this);
		thisCompPlayerInput.speed = 300;
		thisCompPlayerInput.animPrefix = "anim-peter";

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.setInteractive();
		this.invulnerable = false;
		this.isHurting = false;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	invulnerable: boolean;
	isHurting: boolean;


	// Write your code here.
	update(dt){
		//movement
		let compPlayerInput = CompPlayerInput.getComponent(this);
		// if(compKeyMove.eightDirection.enable === false){
		// 	return;
		// }

		if(this.invulnerable || this.isHurting === true){
			return;
		}

		compPlayerInput.updateMovement();
	}

	kill(){
		(this.body as Phaser.Physics.Arcade.Body).setVelocity(0,0);
		let poofSprite = new Phaser.GameObjects.Sprite(this.scene, this.x, this.y, '');
		poofSprite.setScale(3,3);
		(this.scene as MainScene).add.existing(poofSprite);
		poofSprite.play('anim-poof-idle');
		this.scene.sound.play('sfxPlayerExplode')
		poofSprite.on('animationcomplete', () => { poofSprite.destroy() })
		this.destroy();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
