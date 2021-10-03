import envFireballPrefab from "~/prefabs/envFireballPrefab";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class enemyWallTrapPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "wall-trap", frame ?? 0);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.shootEvent = this.scene.time.addEvent({
			delay: this.timeBetweenShots,
			callback: () => {
				if(!this.active)
					return;
				this.spawnBullet();
			},
			loop: true
		});
		/* END-USER-CTR-CODE */
	}

	public ammoType: "arrow"|"fireball" = "arrow";
	public timeBetweenShots: number = 2000;

	/* START-USER-CODE */
	shootEvent: Phaser.Time.TimerEvent;
	spawnBullet(){
		switch (this.ammoType) {
			case "arrow":
			case "fireball":
				this.setFrame(1);
				setTimeout(() => { this.setFrame(0) }, 100);
				let fireball = new envFireballPrefab(this.scene, this.getBottomCenter().x, this.getBottomCenter().y + 4);

				this.scene.add.existing(fireball);
				if(this.angle === 90)
					(fireball.body as Phaser.Physics.Arcade.Body).setVelocityX(-300);
				else if(this.angle === -180)
					(fireball.body as Phaser.Physics.Arcade.Body).setVelocityY(-300);
				else if(this.angle === -90)
					(fireball.body as Phaser.Physics.Arcade.Body).setVelocityX(300);
				else
					(fireball.body as Phaser.Physics.Arcade.Body).setVelocityY(300);

				break;
		}
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
