class chooseSex extends eui.Component implements eui.UIComponent {
	public gender_1: eui.Group;
	public bg_1: eui.Image;
	public img_1: eui.Image;
	public gender_2: eui.Group;
	public bg_2: eui.Image;
	public img_2: eui.Image;
	public sureBtn: eui.Image;



	public choose = 0;
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
		let that = this;
		that.gender_1.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseGender(1) }, this);
		that.gender_2.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseGender(2) }, this);
		that.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.sureFun, this);
	}
	public sureFun() {
		let that = this;
		if (that.choose > 0) {

		}
	}
	public chooseGender(type) {
		let that = this;
		that.sureBtn.visible = true;
		if (that.choose == type) {
			return;
		} else {
			that.choose = type;
			userDataMaster.myInfo.gender = that.choose;
			that['bg_' + type].visible = true;
			that['img_' + type].scaleX = 1;
			that['img_' + type].scaleY = 1;
			let other = type == 1 ? 2 : 1;
			that['bg_' + other].visible = false;
			that['img_' + other].scaleX = 0.8;
			that['img_' + other].scaleY = 0.8;
		}
		userDataMaster.userInfoBtn && userDataMaster.userInfoBtn.destroy();
		let top = that.sureBtn.y + that.y - that.anchorOffsetY;
		userDataMaster.createLoginBtn(244, top, 262, 112, () => {
			sceneMaster.closeModal();
		})
	}

}