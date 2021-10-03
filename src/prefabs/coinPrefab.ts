
import MainScene from "../scenes/MainScene";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import CompPhysics from "../components/CompPhysics";

export default class coinPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "KupoCoin-sm", frame);

		// this (components)
		const thisCompPhysics = new CompPhysics(this);
		thisCompPhysics.bodyWidth = 8;
		thisCompPhysics.bodyHeight = 8;
		thisCompPhysics.bodyOffsetX = 4;
		thisCompPhysics.bodyOffsetY = 4;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}

	public value: number = 1;

	/* START-USER-CODE */
	start(){
		(this.scene as MainScene).dynamicPhysicsItemsGroup.add(this);
		(this.body as Phaser.Physics.Arcade.Body).setVelocityX(-100);
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
