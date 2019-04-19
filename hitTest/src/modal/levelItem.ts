class levelItem extends eui.ItemRenderer implements eui.UIComponent {
	public map: eui.Image;
	public bodyGroup: eui.Group;
	public bgImg: eui.Image;
	public star_1: eui.Image;
	public star_2: eui.Image;
	public star_3: eui.Image;
	public levelText: eui.BitmapLabel;

	public point = [200, 142, 230, 452, 452, 185, 130, 260, 390];
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
		this.bodyGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpFun, this);
	}
	public jumpFun() {
		egret.Tween.removeAllTweens();
		sceneMaster.openModal(new playBefore(this.data.level));
	}
	protected dataChanged(): void {
		let n = (this.data.level + 1) % this.point.length + 1;
		this.map.texture = RES.getRes('img_map_0' + n + '_png');
		this.bodyGroup.x = this.point[n - 1];
		this.levelText.text = this.data.level + '';
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
			this.removeChild(this.star_1);
			this.removeChild(this.star_2);
			this.removeChild(this.star_3);
			this.bodyGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpFun, this)
		}
		this.cacheAsBitmap = true;
	}
}
window['levelItem'] = levelItem