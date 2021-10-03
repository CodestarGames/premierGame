import MainScene from "~/scenes/MainScene";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import CompPhysics from "../components/CompPhysics";

export default class envFireballPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "fireball", frame ?? 0);

		this.scaleX = 3;
		this.scaleY = 3;

		// this (components)
		const thisCompPhysics = new CompPhysics(this);
		thisCompPhysics.bodyWidth = 8;
		thisCompPhysics.bodyHeight = 8;
		thisCompPhysics.bodyOffsetX = 4;
		thisCompPhysics.bodyOffsetY = 4;

		/* START-USER-CTR-CODE */
		// Write your code here.
		//(scene as MainScene).enemyCollisionGroup.add(this);
		//this.play('anim-fireball-idle');

		scene.physics.add.collider((scene as MainScene).player, this, (player:any, obj: any) => {
			player.kill();
			//TODO: have player prefab handle this
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
