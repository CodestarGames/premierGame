import MainScene from "~/scenes/MainScene";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import CompPhysics from "../components/CompPhysics";
import CompMoveToPlayerInRange from "../components/CompMoveToPlayerInRange";

export default class enemyCloverPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "clover-idle", frame ?? 0);

		this.setOrigin(0.5, 1);

		// this (components)
		const thisCompPhysics = new CompPhysics(this);
		thisCompPhysics.bodyWidth = 12;
		thisCompPhysics.bodyHeight = 12;
		thisCompPhysics.bodyOffsetX = 2;
		thisCompPhysics.bodyOffsetY = 4;
		const thisCompMoveToPlayerInRange = new CompMoveToPlayerInRange(this);
		thisCompMoveToPlayerInRange.range = 64;
		thisCompMoveToPlayerInRange.maxDistFromTether = 16;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.isKilled = false;
		/* END-USER-CTR-CODE */
	}

	public coinValue: number = 4;

	/* START-USER-CODE */
	isKilled: boolean;

	// Write your code here.
	kill(){
		this.isKilled = true;
		CompMoveToPlayerInRange.getComponent(this).destroy();
		(this.scene as MainScene).dungeonManager.addCoin(this.coinValue);
		this.play('anim-poof-idle');
		this.on('animationcomplete', () => {
			this.destroy();
		}, this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
