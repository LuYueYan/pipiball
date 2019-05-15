class continueGift extends eui.Component implements eui.UIComponent {
	public light: eui.Image;
	public useBtn: eui.Image;
	public img: eui.Image;
	public ignoreBtn: eui.Label;
	public txt: eui.BitmapLabel;


	public arr = [
		{ name: 'gold', img: 'img_gift_02_png' },
		{ name: 'hammer', img: 'img_gift_06_png' },
		{ name: 'hat', img: 'img_gift_07_png' },
		{ name: 'lamp', img: 'img_gift_08_png' }
	];
	public shareCount = 0;
	public getSuc = false;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.img) {
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
		egret.Tween.get(that.light, { loop: true }).to({ rotation: 360 }, 5000);
		that.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.getFun, that);
		that.ignoreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.ignoreFun, that)
		setTimeout(function () {
			that.ignoreBtn.visible = true;
		}, 3000);
	}
	public getFun() {
		let that = this;

		if (that.getSuc) {
			that.ignoreFun();
		} else {
			CallbackMaster.openShare(() => {
				suc();
			}, that.shareCount);
			that.shareCount++;
		}

		function suc() {
			that.getSuc = true;
			let reward = that.arr[Math.floor(Math.random() * that.arr.length)];
			let txt = 'X1';
			if (reward.name == 'gold') {
				userDataMaster.myGold = userDataMaster.gold + 10;
				txt = 'X10';
			} else {
				let tool = userDataMaster.tool;
				tool[reward.name].num++;
				userDataMaster.myTool = tool;
			}
			that.txt.visible = true;
			that.txt.text = txt;
			that.img.texture = RES.getRes(reward.img);
			that.useBtn.texture = RES.getRes('btn_cc_06_png');
			that.ignoreBtn.visible = false;
		}

	}
	public ignoreFun() {
		AdMaster.closeBannerAd()
		egret.Tween.removeTweens(this.light);
		sceneMaster.closeModal();
	}

}