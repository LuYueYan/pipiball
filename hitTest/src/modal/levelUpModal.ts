class levelUpModal extends eui.Component implements eui.UIComponent {
	public light: eui.Image;
	public star_1: eui.Image;
	public star_2: eui.Image;
	public star_3: eui.Image;
	public levelText: eui.Label;
	public scoreText: eui.Label;
	public goldText: eui.BitmapLabel;
	public videoBtn: eui.Button;
	public getBtn: eui.Label;

	public level;
	public info: any;
	public gif;
	public constructor(level, info: any) {
		super();
		this.level = level;
		this.info = info;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.videoBtn) {
			this.init()
		} else {
			this.addEventListener(egret.Event.COMPLETE, this.init, this)
		}
	}
	public init() {
		if (AdMaster.cacheBannerAd) {
				AdMaster.openBannerAd({ width: 700, height: 300 });
			}
		this.scoreText.text = this.info.score + '';
		this.levelText.text = '第' + this.level + '关';
		this.goldText.text = 'X' + this.info.gold;
		if (this.level > userDataMaster.levelStar.length) {
			//升关成功
			userDataMaster.levelStar.push(this.info.star);
			userDataMaster.myLevel = this.level;
		} else if (this.info.star > userDataMaster.levelStar[this.level - 1]) {
			//升星成功
			userDataMaster.levelStar[this.level - 1] = this.info.star;
		}

		let that = this;

		that.gif = movieMaster.getGif('through');
		that.gif.y = -300;
		that.addChildAt(that.gif,0);
		that.gif.gotoAndPlay(1, -1);

		for (let i = 1; i <= this.info.star; i++) {
			setTimeout(function () {
				that['star_' + i].texture = RES.getRes('img_star_a1_png');
			}, i * 300);
		}
		let params = {
			uid: userDataMaster.myInfo.uid,
			level: that.level,
			score: that.info.score,
			star: that.info.star
		}
		ServiceMaster.post(ServiceMaster.getScore, params, function (res) {
			if (parseInt(res.code) === 1 && res.data) {

			}
		});
		platform.openDataContext.postMessage({
			type: "updateScore",
			score: that.info.score,
			level: that.level,
			star:that.info.star
		});
		this.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.videoFun, this);
		this.getBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getFun, this);
	}
	public videoFun() {
		AdMaster.useVideo(() => {
			suc();
		}, () => {
			CallbackMaster.openShare(() => {
				suc();
			})
		});
		let that = this;
		function suc() {
			AdMaster.closeBannerAd()
			userDataMaster.myGold = userDataMaster.gold + that.info.gold * 2;
			that.gif.stop();
			egret.Tween.removeAllTweens();
			sceneMaster.changeScene(new startScene());
			sceneMaster.openModal(new getSuccess('img_diamond_big_png', 'X' + that.info.gold * 2));
		}
	}
	public getFun() {
		AdMaster.closeBannerAd()
		userDataMaster.myGold = userDataMaster.gold + this.info.gold;
		this.gif.stop();
		egret.Tween.removeAllTweens();
		sceneMaster.changeScene(new startScene());
		sceneMaster.openModal(new getSuccess('img_diamond_big_png', 'X' + this.info.gold));
	}
}