class teachModal extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Image;
	public closeBtn: eui.Image;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.bgImg) {
			this.init()
		} else {
			this.addEventListener(egret.Event.COMPLETE, this.init, this)
		}
	}
	public init() {
		this.bgImg.height = this.stage.stageHeight;
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
	}
	public closeFun() {
		sceneMaster.closeModal();
	}

}