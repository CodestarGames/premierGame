import MoveTo from 'phaser3-rex-plugins/plugins/moveto.js';
import MainScene from "~/scenes/MainScene";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import tetherPrefab from "../prefabs/tetherPrefab";

export default class CompMoveToPlayerInRange {

	constructor(gameObject: Phaser.GameObjects.Sprite) {
		this.gameObject = gameObject;
		(gameObject as any)["__CompMoveToPlayerInRange"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.moveEvent = this.gameObject.scene.time.addEvent({
			delay: 500,
			callback: () => {
				this.updateMoveto();
			},
			loop: true
		});
		this.moveTo = new MoveTo(this.gameObject, {
			speed: 100
		});
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Sprite): CompMoveToPlayerInRange {
		return (gameObject as any)["__CompMoveToPlayerInRange"];
	}

	private gameObject: Phaser.GameObjects.Sprite;
	public range: number = 10;
	public maxDistFromTether: number = 10;
	public tetherInst: tetherPrefab;

	/* START-USER-CODE */

	// Write your code here.
	private moveEvent: Phaser.Time.TimerEvent;
	private moveTo: MoveTo;

	updateMoveto(){

		if(!this.gameObject || !this.gameObject.active || (this.gameObject as any).isKilled === true){
			this.moveEvent.remove();
			return;
		}
		let player = (this.gameObject.scene as MainScene).player;
		let playerBody = (player.body as Phaser.Physics.Arcade.Body);

		let tetherObj: any = this.tetherInst;
		let distanceToPlayer = Phaser.Math.Distance.BetweenPoints(this.gameObject.getCenter(), playerBody.center);
		let distanceToTether;
		if(tetherObj)
			distanceToTether = Phaser.Math.Distance.BetweenPoints(this.gameObject.getCenter(), tetherObj.getCenter());

		if(distanceToPlayer <= this.range){
				this.moveTo.moveTo(playerBody.center);
		}
		else {

			if(tetherObj && distanceToTether >= this.maxDistFromTether){
				this.moveTo.moveTo(tetherObj.getCenter());

			}
		}



	}
	destroy() {
		this.moveTo.stop();
		this.moveTo.stopTicking();
		this.moveTo.setEnable(false);
		this.moveTo.destroy();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
