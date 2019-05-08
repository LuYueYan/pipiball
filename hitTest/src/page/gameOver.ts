class gameOver extends eui.Component implements eui.UIComponent {
	public levelText: eui.Label;
	public levelProccess: eui.BitmapLabel;
	public playBtn: tweenButton;
	public shareBtn: tweenButton;
	public homeBtn: tweenButton;
	public moreGroup: eui.Group;

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
		if (this.homeBtn) {
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
		let dataGroup = new eui.DataGroup();
		let list = []
		if (userDataMaster.recommand['2'] && userDataMaster.recommand['2'].games) {
			list = userDataMaster.recommand['2'].games.slice(0, 4);
		} else {
			list = userDataMaster.recommand['1'].games.slice(0, 4);
		}

		let source = new eui.ArrayCollection(list);
		dataGroup.dataProvider = source;
		let layout = new eui.HorizontalLayout();
		layout.gap = -5;
		dataGroup.layout = layout;
		dataGroup.itemRenderer = moreItem;
		that.moreGroup.addChild(dataGroup);

		let params = {
			uid: userDataMaster.myInfo.uid,
			level: this.level,
			score: that.myData.score,
			star: that.myData.star
		}
		ServiceMaster.post(ServiceMaster.getScore, params, function (res) {
			if (parseInt(res.code) === 1 && res.data) {

			}
		});
		this.levelText.text = '第' + this.level + '关';
		this.levelProccess.text = this.myData.amount + '/' + userDataMaster.levelArr[this.level - 1].amount;
		this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareFun, this);
		this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.homeFun, this);
		this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playFun, this);
	}
	public shareFun() {
		CallbackMaster.openShare(null, -1);
	}
	public homeFun() {
		AdMaster.closeBannerAd();
		egret.Tween.removeAllTweens()
		sceneMaster.changeScene(new startScene());
	}
	public playFun() {
		AdMaster.closeBannerAd();
		let level = this.level;
		sceneMaster.openLittleModal(new playBefore(level));
	}
}