class teachModal extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Image;
	public closeBtn: eui.Image;
	public contentGroup: eui.Group;


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
		let dy=this.stage.stageHeight - 1334;
		this.bgImg.height += dy;
		this.contentGroup.y += dy*0.5;
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
	}
	public closeFun() {
		sceneMaster.closeModal();
	}

}