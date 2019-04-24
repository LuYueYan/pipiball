class squareGuide extends eui.Component implements eui.UIComponent {
	public txtGroup: eui.Group;
	public txt_1: eui.Label;
	public txt_2: eui.Label;
	public img: eui.Image;
	public knowBtn: eui.Label;

	public type = 1;//类型 1炸弹 2冰块
	public constructor(type = 1) {
		super();
		this.type = type;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init()
	}
	public init() {
		let that = this;
		if (this.type == 2) {
			this.txt_1.text = "难度升级"
			this.txt_2.text = "出现会移动的方块";
			this.img.texture = RES.getRes('img_diamonds_big_02');
		}
		egret.Tween.get(this.txtGroup, { loop: true }).to({ y: -100 }, 500).to({ y: 0 }, 500);
		this.knowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.knowFun, this)
	}
	public knowFun() {
		egret.Tween.removeTweens(this.txtGroup);
		sceneMaster.closeModal();
	}

}