import DungeonManager from "~/common/DungeonManager";
import CompPlayerInput from "../components/CompPlayerInput";
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import jinxPrefab from "../prefabs/jinxPrefab";
import coinPrefab from "../prefabs/coinPrefab";
import tetherPrefab from "../prefabs/tetherPrefab";
import backwardShooterEnemyPrefab from "../prefabs/backwardShooterEnemyPrefab";
import enemyBomberPrefab from "../prefabs/enemyBomberPrefab";
import arcJumperPrefab from "../prefabs/arcJumperPrefab";
import CompPhysics from "../components/CompPhysics";

export default class MainScene extends Phaser.Scene {

	constructor() {
		super("MainScene");

		/* START-USER-CTR-CODE */

        /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// backgrounds
		const backgrounds = this.add.layer();

		// background_1
		const background_1 = this.add.tileSprite(0, 384, 320, 192, "premierBG");
		background_1.scaleX = 3;
		background_1.scaleY = 3;
		background_1.setOrigin(0, 0);
		background_1.tilePositionY = 64;
		backgrounds.add(background_1);

		// background_2
		const background_2 = this.add.tileSprite(0, 192, 320, 64, "premierBG");
		background_2.scaleX = 3;
		background_2.scaleY = 3;
		background_2.setOrigin(0, 0);
		backgrounds.add(background_2);

		// background_3
		const background_3 = this.add.tileSprite(0, 0, 320, 64, "premierBG");
		background_3.scaleX = 3;
		background_3.scaleY = 3;
		background_3.setOrigin(0, 0);
		backgrounds.add(background_3);

		// entitiesLayer
		const entitiesLayer = this.add.layer();

		// player
		const player = new jinxPrefab(this, -232, 576);
		entitiesLayer.add(player);

		// coinPrefab1
		const coinPrefab1 = new coinPrefab(this, 320, 152);
		entitiesLayer.add(coinPrefab1);

		// hiddenObjs
		const hiddenObjs = this.add.layer();
		hiddenObjs.visible = false;

		// tetherPrefab_1
		const tetherPrefab_1 = new tetherPrefab(this, 928, 1784);
		hiddenObjs.add(tetherPrefab_1);

		// backwardShooterEnemyPrefab1
		const backwardShooterEnemyPrefab1 = new backwardShooterEnemyPrefab(this, 848, 128);
		this.add.existing(backwardShooterEnemyPrefab1);

		// backwardShooterEnemyPrefab1_1
		const backwardShooterEnemyPrefab1_1 = new backwardShooterEnemyPrefab(this, 1128, 200);
		this.add.existing(backwardShooterEnemyPrefab1_1);

		// backwardShooterEnemyPrefab1_2
		const backwardShooterEnemyPrefab1_2 = new backwardShooterEnemyPrefab(this, 1064, 272);
		this.add.existing(backwardShooterEnemyPrefab1_2);

		// backwardShooterEnemyPrefab1_3
		const backwardShooterEnemyPrefab1_3 = new backwardShooterEnemyPrefab(this, 984, 344);
		this.add.existing(backwardShooterEnemyPrefab1_3);

		// backwardShooterEnemyPrefab1_4
		const backwardShooterEnemyPrefab1_4 = new backwardShooterEnemyPrefab(this, 896, 416);
		this.add.existing(backwardShooterEnemyPrefab1_4);

		// backwardShooterEnemyPrefab1_5
		const backwardShooterEnemyPrefab1_5 = new backwardShooterEnemyPrefab(this, 848, 488);
		this.add.existing(backwardShooterEnemyPrefab1_5);

		// enemyBomberPrefab1
		const enemyBomberPrefab1 = new enemyBomberPrefab(this, 328, 80);
		this.add.existing(enemyBomberPrefab1);

		// arcJumperPrefab1
		const arcJumperPrefab1 = new arcJumperPrefab(this, 867, 684);
		this.add.existing(arcJumperPrefab1);

		// deathRectBottom
		const deathRectBottom = this.add.rectangle(0, 960, 960, 32);
		deathRectBottom.setOrigin(0, 0);
		deathRectBottom.isFilled = true;

		// bulletDeathRectRight
		const bulletDeathRectRight = this.add.rectangle(960, 0, 32, 960);
		bulletDeathRectRight.setOrigin(0, 0);
		bulletDeathRectRight.isFilled = true;

		// shootTextSpr
		const shootTextSpr = this.add.sprite(480, 480, "shootText", 0);
		shootTextSpr.scaleX = 3;
		shootTextSpr.scaleY = 3;

		// bulletDeathRectLeft
		const bulletDeathRectLeft = this.add.rectangle(-80, 0, 32, 960);
		bulletDeathRectLeft.setOrigin(0, 0);
		bulletDeathRectLeft.isFilled = true;

		// deathRectTop
		const deathRectTop = this.add.rectangle(0, -32, 960, 32);
		deathRectTop.setOrigin(0, 0);
		deathRectTop.isFilled = true;

		// rpg_pete
		const rpg_pete = this.add.image(8, 8, "premier-pete");
		rpg_pete.scaleX = 0.5;
		rpg_pete.scaleY = 0.5;
		rpg_pete.setOrigin(0, 0);

		// lists
		const hiddenObjsList = [tetherPrefab_1]

		// deathRectBottom (components)
		const deathRectBottomCompPhysics = new CompPhysics(deathRectBottom);
		deathRectBottomCompPhysics.isStatic = true;
		deathRectBottomCompPhysics.bodyWidth = 960;
		deathRectBottomCompPhysics.bodyHeight = 32;

		// bulletDeathRectRight (components)
		const bulletDeathRectRightCompPhysics = new CompPhysics(bulletDeathRectRight);
		bulletDeathRectRightCompPhysics.isStatic = true;
		bulletDeathRectRightCompPhysics.bodyWidth = 32;
		bulletDeathRectRightCompPhysics.bodyHeight = 960;

		// bulletDeathRectLeft (components)
		const bulletDeathRectLeftCompPhysics = new CompPhysics(bulletDeathRectLeft);
		bulletDeathRectLeftCompPhysics.isStatic = true;
		bulletDeathRectLeftCompPhysics.bodyWidth = 32;
		bulletDeathRectLeftCompPhysics.bodyHeight = 960;

		// deathRectTop (components)
		const deathRectTopCompPhysics = new CompPhysics(deathRectTop);
		deathRectTopCompPhysics.isStatic = true;
		deathRectTopCompPhysics.bodyWidth = 960;
		deathRectTopCompPhysics.bodyHeight = 32;

		this.background_1 = background_1;
		this.background_2 = background_2;
		this.background_3 = background_3;
		this.entitiesLayer = entitiesLayer;
		this.player = player;
		this.deathRectBottom = deathRectBottom;
		this.bulletDeathRectRight = bulletDeathRectRight;
		this.shootTextSpr = shootTextSpr;
		this.bulletDeathRectLeft = bulletDeathRectLeft;
		this.deathRectTop = deathRectTop;
		this.hiddenObjsList = hiddenObjsList;

		this.events.emit("scene-awake");
	}

	public background_1: Phaser.GameObjects.TileSprite | undefined;
	public background_2: Phaser.GameObjects.TileSprite | undefined;
	public background_3: Phaser.GameObjects.TileSprite | undefined;
	public entitiesLayer: Phaser.GameObjects.Layer | undefined;
	public player: jinxPrefab | undefined;
	public deathRectBottom: Phaser.GameObjects.Rectangle | undefined;
	public bulletDeathRectRight: Phaser.GameObjects.Rectangle | undefined;
	private shootTextSpr: Phaser.GameObjects.Sprite | undefined;
	public bulletDeathRectLeft: Phaser.GameObjects.Rectangle | undefined;
	public deathRectTop: Phaser.GameObjects.Rectangle | undefined;
	public hiddenObjsList: tetherPrefab[] | undefined;

	/* START-USER-CODE */
    // Write your code here.
    static key = 'MainScene';
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    dungeonManager: DungeonManager;
	public dynamicPhysicsItemsGroup: Phaser.Physics.Arcade.Group;
    public enemyCollisionGroup: Phaser.Physics.Arcade.Group;
    private bgMoveEvent: any;
    public player1: any;
	public deathRects: any[];
    preload() {
        this.load.animation("peter-anims", "assets/sprites/jinx/peter-anims.json");
    }

    create() {
        this.editorCreate();
        //this.cameras.main.startFollow(this.player, true);
		this.shootTextSpr.play('anim-shootText')
		this.deathRects = [
		this.bulletDeathRectLeft,
			this.deathRectBottom,
			this.deathRectTop,
			this.bulletDeathRectRight
			]
		// @ts-ignore
		this.player.body.setVelocityX(300);
		let compInput = CompPlayerInput.getComponent(this.player);
		compInput.disableInput();
		setTimeout(() => {
			compInput.enableInput();
			this.shootTextSpr.destroy();
		}, 2000)

        this.dungeonManager = new DungeonManager(this.game);
        this.dungeonManager.initLevel();
        this.cursors = this.input.keyboard.createCursorKeys();

        this.bgMoveEvent = this.time.addEvent({
            delay: 60,
            callback: () => {
                this.background_1.setTilePosition(this.background_1.tilePositionX + 1, 64);
                this.background_2.setTilePosition(this.background_2.tilePositionX + 1.5, 0);
                this.background_3.setTilePosition(this.background_3.tilePositionX + 2, 0);
            },
            loop: true
        });

        this.initCollision();

		this.sound.play('musicGamingWizard', {loop:true, volume: 0.5 });
    }

    initCollision() {
        this.dynamicPhysicsItemsGroup = this.physics.add.group();
        this.enemyCollisionGroup = this.physics.add.group();

        //TODO: stick this all in the player prefab
        this.physics.add.collider(this.enemyCollisionGroup, this.player, (player, obj) => {

            if (this.player.invulnerable)
                return;

            let body = (this.player.body as Phaser.Physics.Arcade.Body);
            const enemy = obj as Phaser.GameObjects.Sprite;
			this.player.kill();

        }, undefined, this);

		this.physics.add.collider(this.enemyCollisionGroup, this.deathRectBottom, (deathBottom: any, obj: any) => {


			let body = (obj.body as Phaser.Physics.Arcade.Body);
			const dx = this.player.x - deathBottom.x;
			const dy = this.player.y - deathBottom.y;

			const dir = new Phaser.Math.Vector2(dx, dy).normalize().scale(300);
			body.setVelocity(body.velocity.x, dir.y)

		}, undefined, this);

        this.physics.add.collider(this.dynamicPhysicsItemsGroup, this.player, (player, item) => {

            if (item instanceof coinPrefab) {
                this.dungeonManager.addCoin(item.value);
				this.sound.play('sfxCoin')
                item.destroy();
            }

        });

		this.physics.add.overlap(this.enemyCollisionGroup, this.enemyCollisionGroup);
		this.physics.add.collider(this.bulletDeathRectLeft, [this.enemyCollisionGroup, this.dynamicPhysicsItemsGroup], (rect:any, enemy: any) => {
			//TODO: have player prefab handle this
			enemy.destroy()
		}, () => {
			return true;
		}, this);

        // this.physics.world.on('worldbounds', (body, up, down, left, right) => {
        //
        //     if(left){
        //         if(this.enemyCollisionGroup.contains(body.gameObject)) {
        //             debugger
        //             body.gameObject.destroy();
        //         }
        //     }
        //
        //     if(up){
        //         if(this.enemyCollisionGroup.contains(body.gameObject)) {
        //             body.gameObject.destroy();
        //         }
        //     }
        //
        //     if(down){
        //         if(this.enemyCollisionGroup.contains(body.gameObject)) {
        //             body.gameObject.destroy();
        //         }
        //     }
        //
        // })

    }

    update(dt) {
        this.player.update(dt);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
