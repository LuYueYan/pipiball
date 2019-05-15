class useToolModal extends eui.Component implements eui.UIComponent {
	public closeBtn: eui.Image;
	public title: eui.Image;
	public describ: eui.Label;
	public light: eui.Image;
	public img: eui.Image;
	public useBtn: eui.Image;


	public arr = {
		hammer: { title: 'img_name_01_png', price: 20, describ: '该道具可一锤击碎任意方块', img: 'img_gift_06_png' },
		hat: { title: 'img_name_02_png', price: 20, describ: '该道具可使所有弹药伤害翻倍', img: 'img_gift_07_png' },
		lamp: { title: 'img_name_03_png', price: 20, describ: '该道具可使方块暂停下落一次', img: 'img_gift_08_png' }
	}
	public type: string = 'hammer';
	public constructor(type) {
		super();
		this.type = type;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.closeBtn) {
			this.init()
		} else {
			this.once(egret.Event.COMPLETE, this.init, this)
		}
	}
	public init() {
		let that = this;
		if (AdMaster.cacheBannerAd) {
				AdMaster.openBannerAd({ width: 700, height: 300 });
			}
		that.title.texture = RES.getRes(that.arr[that.type].title);
		that.describ.text = that.arr[that.type].describ;
		that.img.texture = RES.getRes(that.arr[that.type].img);
		egret.Tween.get(that.light, { loop: true }).to({ rotation: 360 }, 5000);
		if (userDataMaster.tool[that.type].num <= 0) {
			that.useBtn.texture = RES.getRes('btn_cc_08_png');
		}
		that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, that);
		// that.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.useFun, that);
	}
	public closeFun() {
		AdMaster.closeBannerAd()
		egret.Tween.removeTweens(this.light);
		sceneMaster.closeModal();
	}
	// public useFun() {
	// 	let that = this;
	// 	if (userDataMaster.tool[that.type].num > 0) {
	// 		userDataMaster.tool[that.type].num--;
	// 		userDataMaster.myTool = userDataMaster.tool;
	// 		suc();
	// 	} else if (userDataMaster.gold >= that.arr[that.type].price) {
	// 		userDataMaster.myGold = userDataMaster.gold - that.arr[that.type].price;
	// 		suc();
	// 	} else {

	// 	}
	// 	function suc() {

	// 	}
	// }

}