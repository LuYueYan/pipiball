class getLifeModal extends eui.Component implements eui.UIComponent {
	public closeBtn: eui.Button;
	public videoBtn: tweenButton;
	public shareBtn: tweenButton;
	public shareTimes: eui.Label;
	public timeText: eui.Label;
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
		let terval = setInterval(() => {
			if (userDataMaster.life >= 5 && userDataMaster.seconds <= 0) {
				clearInterval(terval);
				userDataMaster.seconds = 0;
			}
			that.timeText.text = '还差' + that.getFormat(userDataMaster.seconds) + '恢复1点体力';
		}, 1000);
		that.shareTimes.text = "(" + userDataMaster.dayShareLife.num + "/5)";
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
		this.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.videoFun, this);
		this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareFun, this);
	}
	public getFormat(t) {
		let n = Math.floor(t / 60);
		let s = t % 60;
		let c = s < 10 ? '0' + s : s + '';
		return '0' + n + ':' + c;
	}
	public closeFun() {
		sceneMaster.closeModal();
	}
	public videoFun() {
		AdMaster.useVideo(() => {
			suc();
		}, () => {
			// CallbackMaster.openShare(() => {
			// 	suc();
			// })
			platform.showModal({
				title: '温馨提示',
				content: '暂未开通视频奖励'
			});
		});
		function suc() {
			userDataMaster.myLife++;
		}
	}
	public shareFun() {
		let that=this;
		if (userDataMaster.todayShareLife) {
			CallbackMaster.openShare(() => {
				//    体力加1
				userDataMaster.dayShareLife.num++;
				userDataMaster.myLife = userDataMaster.life + 1;
				that.shareTimes.text = "(" + userDataMaster.dayShareLife.num + "/5)";
			})
		} else {
			//今日获取次数已用完，请明日再来
			platform.showModal({
				title: '温馨提示',
				content: '今日获取次数已用完，请明日再来'
			})
		}

	}
}