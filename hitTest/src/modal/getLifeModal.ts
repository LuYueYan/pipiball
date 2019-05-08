class getLifeModal extends eui.Component implements eui.UIComponent {
	public closeBtn: eui.Button;
	public videoBtn: tweenButton;
	public shareBtn: tweenButton;
	public shareTimes: eui.Label;
	public timeText_0: eui.Label;
	public timeText_1: eui.Label;
	public timeText_2: eui.Label;
	public timeText_3: eui.Label;
	public timeText_4: eui.Label;

	public shareCount = 0;
	public constructor() {
		super();
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
		let that = this;
		if (AdMaster.cacheBannerAd) {
			AdMaster.openBannerAd({ width: 700, height: 300 });
		}
		let terval = setInterval(() => {
			if (userDataMaster.life >= 5) {
				clearInterval(terval);
				userDataMaster.seconds = 0;
			}
			that.getFormat(userDataMaster.seconds);
			// that.timeText.text = '还差' + that.getFormat(userDataMaster.seconds) + '恢复1点体力';
		}, 1000);
		that.shareTimes.text = "(" + userDataMaster.dayShareLife.num + "/5)";
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
		this.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.videoFun, this);
		this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareFun, this);
	}
	public getFormat(t) {
		let f = Math.floor(t / 60);
		let n = f < 10 ? '0' + f : f;
		let s = t % 60;
		let c = s < 10 ? '0' + s : s + '';
		let res = n + ':' + c;
		for (let i = 0, len = res.length; i < len; i++) {
			this['timeText_' + i].text = res[i];
		}
		// return res;
	}
	public closeFun() {
		AdMaster.closeBannerAd();
		sceneMaster.closeModal();
	}
	public videoFun() {
		AdMaster.useVideo(() => {
			suc();
		}, () => {
			platform.showModal({
				title: '温馨提示',
				content: '视频奖励次数已达上限'
			});
		});
		function suc() {
			userDataMaster.myLife = userDataMaster.life + 1;
			sceneMaster.openLittleModal(new getSuccess('img_gift_01_png', ''))
		}
	}
	public shareFun() {
		let that = this;
		if (userDataMaster.todayShareLife) {
			CallbackMaster.openShare(() => {
				//    体力加1
				userDataMaster.dayShareLife.num++;
				userDataMaster.myLife = userDataMaster.life + 1;
				that.shareTimes.text = "(" + userDataMaster.dayShareLife.num + "/5)";
				sceneMaster.openLittleModal(new getSuccess('img_gift_01_png', ''))
			}, that.shareCount);
			that.shareCount++;
		} else {
			//今日获取次数已用完，请明日再来
			platform.showModal({
				title: '温馨提示',
				content: '今日获取次数已用完，请明日再来'
			})
		}

	}
}