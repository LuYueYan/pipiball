class cloudCom extends eui.Component implements eui.UIComponent {
	public img_1: eui.Image;
	public img_2: eui.Image;


	public title;
	public constructor(title) {
		super();
		this.title = title;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}
	public init() {
		this.img_1.texture = RES.getRes(this.title + '_left_png');
		this.img_2.texture = RES.getRes(this.title + '_right_png');
		egret.Tween.get(this.img_1, { loop: true }).to({ x: -750 }, 10000).to({ x: 750 }, 0).to({ x: 0 }, 10000);
		egret.Tween.get(this.img_2, { loop: true }).to({ x: 0 },10000).to({ x: -750 }, 10000).to({ x: 750 }, 0);
	}

}