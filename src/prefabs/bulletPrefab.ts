
import MainScene from "../scenes/MainScene";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import CompPhysics from "../components/CompPhysics";

export default class bulletPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "ok", frame);

		this.scaleX = 0.25;
		this.scaleY = 0.25;

		// this (components)
		const thisCompPhysics = new CompPhysics(this);
		thisCompPhysics.bodyWidth = 96;
		thisCompPhysics.bodyHeight = 96;
		thisCompPhysics.bodyOffsetX = 16;
		thisCompPhysics.bodyOffsetY = 16;

		/* START-USER-CTR-CODE */
		// Write your code here.
		//this.play('anim-bullet', true)
		function choose(choices) {
			var index = Math.floor(Math.random() * choices.length);
			return choices[index];
		}
		let choice = choose(['wait', 'ok'])
		this.setTexture(choice);

		scene.physics.add.collider((scene as MainScene).enemyCollisionGroup, this, (bullet, obj: any) => {
			obj.kill();
			this.destroy()
		}, () => {
			return true;
		}, this);

		scene.physics.add.collider((this.scene as MainScene).deathRects, this, (player:any, obj: any) => {
			//TODO: have player prefab handle this
			this.destroy()
		}, () => {
			return true;
		}, this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
