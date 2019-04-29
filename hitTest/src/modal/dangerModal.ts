class dangerModal extends eui.Component implements eui.UIComponent {
	public light: eui.Image;
	public useBtn: eui.Image;
	public ignoreBtn: eui.Label;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}
	public init() {
		let that = this;
		egret.Tween.get(that.light, { loop: true }).to({ rotation: 360 }, 3000);
		that.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.useFun, this);
		that.ignoreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.ignoreFun, this);
		setTimeout(function () {
			that.ignoreBtn.visible = true;
		}, 3000);
	}
	public useFun() {
		egret.Tween.removeTweens(this.light);
	}
	public ignoreFun() {
		egret.Tween.removeTweens(this.light);
		sceneMaster.closeModal();
	}


}