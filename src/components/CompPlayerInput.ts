import MainScene from "~/scenes/MainScene";
import bulletPrefab from "../prefabs/bulletPrefab";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class CompPlayerInput {

	constructor(gameObject: Phaser.GameObjects.Sprite) {
		this.gameObject = gameObject;
		(gameObject as any)["__CompPlayerInput"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.pad = this.gameObject.scene.input.gamepad.pad1;

		this.pad.on('down', (index, value, button) => {

			if (index === 0)
			{
				if(!this.gameObject.active)
					return;

				if(!this.shootEvent){
					this.shootEvent = this.gameObject.scene.time.addEvent({
						delay: 200,
						startAt: 150,
						callback: () => {
							if(!this.gameObject.active){
								return;
							}
							this.spawnBullet();
						},
						loop: true
					});
				}
			}
		});
		this.pad.on('up', (index, value, button) => {

			if (index === 0) {
				if(this.shootEvent){
					this.shootEvent.remove();
					this.shootEvent = null;
				}
			}
		});
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Sprite): CompPlayerInput {
		return (gameObject as any)["__CompPlayerInput"];
	}

	private gameObject: Phaser.GameObjects.Sprite;
	public speed: number = 100;
	public animPrefix: string = "anim-";

	/* START-USER-CODE */
	shootEvent: Phaser.Time.TimerEvent;
	private pad: any;
	private inputEnabled: boolean;
	private _cursors: any;
	get cursors(): any {
		return (this.gameObject.scene as MainScene).cursors;
	}

	start() {

	}

	spawnBullet(){
		this.gameObject.scene.sound.play('sfxShoot')
		let bullet = new bulletPrefab(this.gameObject.scene, this.gameObject.getRightCenter().x, this.gameObject.getRightCenter().y + 4);
		this.gameObject.scene.add.existing(bullet);
		(bullet.body as Phaser.Physics.Arcade.Body).setVelocityX(900);
	}

	updateMovement() {

		let gObj = this.gameObject;
		let gObjBody = this.gameObject.body as Phaser.Physics.Arcade.Body;
		if(!gObj.input || !gObj.input.enabled || !this.inputEnabled){
			return;
		}

		if(!gObj.active){
			return;
		}

		if(this.pad) {
			if (this.pad.right && this.pad.down)
			{
				//gObj.flipX = false;
				gObjBody.setVelocity(this.speed, this.speed);
				gObj.play(`${this.animPrefix}-down`, true)
			}
			else if (this.pad.left && this.pad.down)
			{
				//gObj.flipX = false;
				gObjBody.setVelocity(-this.speed, this.speed);
				gObj.play(`${this.animPrefix}-down`, true)
			}
			else if (this.pad.right && this.pad.up)
			{
				//gObj.flipX = false;
				gObjBody.setVelocity(this.speed, -this.speed);
				gObj.play(`${this.animPrefix}-up`, true)
			}
			else if (this.pad.left && this.pad.up)
			{
				//gObj.flipX = false;
				gObjBody.setVelocity(-this.speed, -this.speed);
				gObj.play(`${this.animPrefix}-up`, true)
			}
			else if (this.pad.left)
			{
				//gObj.flipX = true;
				gObjBody.setVelocity(-this.speed, 0);
				gObj.play(`${this.animPrefix}-idle`, true)
			}
			else if (this.pad.right)
			{
				//gObj.flipX = false;
				gObjBody.setVelocity(this.speed, 0);
				gObj.play(`${this.animPrefix}-idle`, true)
			}

			else if (this.pad.up)
			{
				gObjBody.setVelocity(0, -this.speed);
				gObj.play(`${this.animPrefix}-up`, true)
			}
			else if (this.pad.down)
			{
				gObjBody.setVelocity(0, this.speed);
				gObj.play(`${this.animPrefix}-down`, true)
			}
			else
			{
				gObjBody.setVelocity(0, 0);
				gObj.play(`${this.animPrefix}-idle`, true)
			}
		}
		else {
			this._handleKeyboardInput(gObjBody, gObj)
		}

	}

	// Write your code here.
	private _handleKeyboardInput(gObjBody, gObj) {
		if (this.cursors.right.isDown && this.cursors.down.isDown)
		{
			//gObj.flipX = false;
			gObjBody.setVelocity(this.speed, this.speed);
			gObj.play(`${this.animPrefix}-down`, true)
		}
		else if (this.cursors.left.isDown && this.cursors.down.isDown)
		{
			//gObj.flipX = false;
			gObjBody.setVelocity(-this.speed, this.speed);
			gObj.play(`${this.animPrefix}-down`, true)
		}
		else if (this.cursors.right.isDown && this.cursors.up.isDown)
		{
			//gObj.flipX = false;
			gObjBody.setVelocity(this.speed, -this.speed);
			gObj.play(`${this.animPrefix}-up`, true)
		}
		else if (this.cursors.left.isDown && this.cursors.up.isDown)
		{
			//gObj.flipX = false;
			gObjBody.setVelocity(-this.speed, -this.speed);
			gObj.play(`${this.animPrefix}-up`, true)
		}
		else if (this.cursors.left.isDown)
		{
			//gObj.flipX = true;
			gObjBody.setVelocity(-this.speed, 0);
			gObj.play(`${this.animPrefix}-idle`, true)
		}
		else if (this.cursors.right.isDown)
		{
			//gObj.flipX = false;
			gObjBody.setVelocity(this.speed, 0);
			gObj.play(`${this.animPrefix}-idle`, true)
		}

		else if (this.cursors.up.isDown)
		{
			gObjBody.setVelocity(0, -this.speed);
			gObj.play(`${this.animPrefix}-up`, true)
		}
		else if (this.cursors.down.isDown)
		{
			gObjBody.setVelocity(0, this.speed);
			gObj.play(`${this.animPrefix}-down`, true)
		}
		else
		{
			gObjBody.setVelocity(0, 0);
			gObj.play(`${this.animPrefix}-idle`, true)
		}
	}
	disableInput() {
		this.inputEnabled = false;
	}

	enableInput() {
		this.inputEnabled = true;
	}

	/* END-USER-CODE */

}

/* END OF COMPILED CODE */

// You can write more code here
