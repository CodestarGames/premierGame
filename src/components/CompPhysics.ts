
// You can write more code here

/* START OF COMPILED CODE */

export default class CompPhysics {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__CompPhysics"] = this;

		/* START-USER-CTR-CODE */

		this.gameObject.scene.events.once(Phaser.Scenes.Events.ADDED_TO_SCENE, this.start, this)

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): CompPhysics {
		return (gameObject as any)["__CompPhysics"];
	}

	private gameObject: any;
	public isStatic: boolean = false;
	public bodyWidth: number = 0;
	public bodyHeight: number = 0;
	public bodyOffsetX: number = 0;
	public bodyOffsetY: number = 0;

	/* START-USER-CODE */

	// Write your code here.
	start() {
		this.gameObject.scene.physics.add.existing(this.gameObject, this.isStatic);
		(this.gameObject.body as Phaser.Physics.Arcade.Body)
			.setSize(this.bodyWidth, this.bodyHeight)
			.setOffset(this.bodyOffsetX, this.bodyOffsetY);


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
