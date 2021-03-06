class rankItem extends eui.ItemRenderer implements eui.UIComponent {
	public index: eui.Label;
	public bestHat: eui.Image;
	public headimgMask: eui.Rect;
	public headimg: eui.Image;
	public nickName: eui.Label;
	public level: eui.Label;
	public score: eui.Label;
	public star_1: eui.Image;
	public star_2: eui.Image;
	public star_3: eui.Image;

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
	init() {

	}
	protected dataChanged(): void {
		if (this.data.rank.length > 4) {
			this.data.rank = this.data.rank.slice(0, 4) + "…";
		}
		this.index.text = this.data.rank + '';
		this.headimg.source = this.data.avatarUrl;
		this.level.text = '关卡'+this.data.level ;
		this.score.text = this.data.score;
		if (this.data.nickName.length > 5) {
			this.data.nickName = this.data.nickName.slice(0, 5) + "…";
		}
		this.nickName.text = this.data.nickName;
		this.headimg.mask = this.headimgMask;
		if (this.data.rank < 4) {
			this.bestHat.visible = true;
			this.bestHat.texture = RES.getRes('icn_medal_0' + this.data.rank + '_png')
		} else {
			this.bestHat.visible = false;
		}
		for (let i = 1; i <=this.data.star; i++) {
			this['star_' + i].texture = RES.getRes('img_star_b1_png')
		}
	}
}