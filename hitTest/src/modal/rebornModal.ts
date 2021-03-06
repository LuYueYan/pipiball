class rebornModal extends eui.Component implements eui.UIComponent {
	public ignoreBtn: eui.Label;
	public num: eui.Image;
	public rebornBtn: tweenButton;

	public level;
	public myData;
	public constructor(level, myData) {
		super();
		this.level = level;
		this.myData = myData;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.ignoreBtn) {
			this.init()
		} else {
			this.addEventListener(egret.Event.COMPLETE, this.init, this)
		}
	}
	public init() {
		let that = this;
		if (AdMaster.cacheBannerAd) {
				AdMaster.openBannerAd({ width: 700, height: 300 });
			}
		that.ignoreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ignoreFun, this);
		setTimeout(function () {
			that.ignoreBtn.visible = true;
		}, 5000);
		var t = 5;
		var terval = setInterval(() => {
			if (t > 0) {
				t--;
				that.num.texture = RES.getRes('img_countdown_0' + t + '_png');
			} else {
				that.ignoreBtn.visible = true;
				clearInterval(terval);
			}
		}, 1000);

	}
	public ignoreFun() {
		AdMaster.closeBannerAd()
		sceneMaster.openModal(new gameOver(this.level, this.myData));
	}

}