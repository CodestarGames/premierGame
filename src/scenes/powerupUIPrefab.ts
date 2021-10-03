
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";

export default class powerupUIPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? -2);

		// powerup_ui_00
		const powerup_ui_00 = scene.add.image(0, 4.285714285714286, "powerup-ui-0", 1);
		this.add(powerup_ui_00);

		// powerup_ui_10
		const powerup_ui_10 = scene.add.image(32, 4.285714285714286, "powerup-ui-1", 1);
		this.add(powerup_ui_10);

		// powerup_ui_20
		const powerup_ui_20 = scene.add.image(64, 4.285714285714286, "powerup-ui-2", 1);
		this.add(powerup_ui_20);

		// powerup_ui_30
		const powerup_ui_30 = scene.add.image(96, 4.285714285714286, "powerup-ui-3", 1);
		this.add(powerup_ui_30);

		// powerup_ui_40
		const powerup_ui_40 = scene.add.image(128, 4.285714285714286, "powerup-ui-4", 1);
		this.add(powerup_ui_40);

		// powerup_ui_50
		const powerup_ui_50 = scene.add.image(160, 4.285714285714286, "powerup-ui-5", 1);
		this.add(powerup_ui_50);

		// powerup_ui_60
		const powerup_ui_60 = scene.add.image(192, 4.285714285714286, "powerup-ui-6", 1);
		this.add(powerup_ui_60);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
