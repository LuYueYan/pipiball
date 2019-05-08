class levelItem extends eui.ItemRenderer implements eui.UIComponent {
	public map: eui.Image;
	public bodyGroup: eui.Group;
	public bgImg: eui.Image;
	public star_1: eui.Image;
	public star_2: eui.Image;
	public star_3: eui.Image;
	public levelText: eui.BitmapLabel;

	public static point = [
		{ x: 230, y: -30 },
		{ x: 142, y: 0 },
		{ x: 262, y: -6 },
		{ x: 422, y: -40 },
		{ x: 480, y: 0 },
		{ x: 255, y: -30 },
		{ x: 120, y: -30 },
		{ x: 260, y: 0 },
		{ x: 390, y: -26 },
	];
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.init()
	}
	public init() {
		// this.bodyGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpFun, this);
	}
	public jumpFun() {
		sceneMaster.openModal(new playBefore(this.data.level));
	}
	protected dataChanged(): void {
		let n = (this.data.level + 2) % levelItem.point.length + 1;
		this.map.texture = RES.getRes('img_map_0' + n + '_png');
		this.bodyGroup.x = levelItem.point[n - 1].x;
		this.bodyGroup.y = levelItem.point[n - 1].y;
		this.levelText.text = this.data.level + '';
		this.star_1.visible = true;
		this.star_2.visible = true;
		this.star_3.visible = true;
		if (!this.bodyGroup.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
			this.bodyGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpFun, this);
		}
		if (this.data.level <= userDataMaster.levelStar.length) {
			//已过关的
			this.bgImg.texture = RES.getRes('img_wood_01_png');
			for (let i = 1; i <= userDataMaster.levelStar[this.data.level - 1]; i++) {
				this['star_' + i].texture = RES.getRes('img_star_b1_png');
			}
		} else if (this.data.level == userDataMaster.levelStar.length + 1) {
			//下一关
			this.bgImg.texture = RES.getRes('img_wood_01_png');
		} else {
			//未达到
			this.star_1.visible = false;
			this.star_2.visible = false;
			this.star_3.visible = false;
			this.bodyGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpFun, this);
		}
		if (this.data.level > userDataMaster.levelArr.length) {
			//敬请期待
			this.levelText.text = '';
			let img = new eui.Image(RES.getRes('img_expect_png'));
			img.horizontalCenter = 0;
			img.y = 20;
			this.bodyGroup.addChild(img)
			this.bodyGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpFun, this)
		}
		this.cacheAsBitmap = true;
	}
}
window['levelItem'] = levelItem