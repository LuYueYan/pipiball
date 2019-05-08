class getSuccess extends eui.Component implements eui.UIComponent {
	public light: eui.Image;
	public img: eui.Image;
	public txt: eui.BitmapLabel;
	public ifShare: eui.Group;
	public shareImg: eui.Image;
	public knowBtn: tweenButton;


	public imgName: string = 'img_diamond_big_png';//图片名字
	public title: any;//文字
	public shareType = 1;//是否分享 默认分享
	public constructor(imgName, title) {
		super();
		this.imgName = imgName;
		this.title = title;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.knowBtn) {
			this.init()
		} else {
			this.addEventListener(egret.Event.COMPLETE, this.init, this)
		}
	}
	public init() {
		if (AdMaster.cacheBannerAd) {
				AdMaster.openBannerAd({ width: 700, height: 300 });
			}
		this.img.texture = RES.getRes(this.imgName);
		this.txt.text = '' + this.title;
		egret.Tween.get(this.light, { loop: true }).to({ rotation: 360 }, 3000);
		this.knowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.knowFun, this);
		this.ifShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ifShareFun, this);

	}
	public knowFun() {
		AdMaster.closeBannerAd();
		egret.Tween.removeTweens(this.light);
		if (this.shareType == 1) {
			CallbackMaster.openShare(null, -1);
		}
		if (sceneMaster.littleModal) {
			sceneMaster.closeLittleModal();
		} else {
			sceneMaster.closeModal();
		}

	}
	public ifShareFun() {
		this.shareType = this.shareType == 1 ? 2 : 1;
		this.shareImg.texture = RES.getRes('img_check_0' + this.shareType + '_png');
	}

}