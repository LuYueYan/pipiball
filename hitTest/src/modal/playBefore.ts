class playBefore extends eui.Component implements eui.UIComponent {
	public titleText: eui.Label;
	public glass: eui.Group;
	public glassLight: eui.Image;
	public glassNum: eui.BitmapLabel;
	public glassAdd: eui.Image;
	public glassChoose: eui.Image;
	public bullet: eui.Group;
	public bulletLight: eui.Image;
	public bulletNum: eui.BitmapLabel;
	public bulletAdd: eui.Image;
	public bulletChoose: eui.Image;
	public startBtn: tweenButton;
	public closeBtn: eui.Image;
	public videoBtn: eui.Image;


	public level;
	public choose = {
		glass: false,
		bullet: false
	};//当前选择状态
	public constructor(level) {
		super();
		this.level = level;
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.startBtn) {
			this.init()
		} else {
			this.addEventListener(egret.Event.COMPLETE, this.init, this)
		}
	}
	public init() {
		let that = this;
		if (userDataMaster.tool.glass.num <= 0) {
			that.glassNum.visible = false;
			that.glassAdd.visible = true;
		}
		if (userDataMaster.tool.bullet.num <= 0) {
			that.bulletNum.visible = false;
			that.bulletAdd.visible = true;
		}
		if (userDataMaster.dayFreeLife.num >= 3) {
			that.videoBtn.texture = RES.getRes('btn_before_02_png');
		}
		that.titleText.text = '第' + this.level + '关';
		that.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.startFun, this);
		that.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.videoFun, this);
		that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, this);
		that.glass.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseFun('glass') }, this);
		that.bullet.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseFun('bullet') }, this);
	}
	public chooseFun(type) {
		let that = this;
		if (!that.choose[type] && userDataMaster.tool[type].num <= 0) {
			//是否有道具，没有的话视频购买
			AdMaster.useVideo(() => {
				suc();
			}, () => {
				CallbackMaster.openShare(() => {
					suc();
				})
			});
			return;
		} else {
			that.choose[type] = !that.choose[type];
			that[type + 'Choose'].visible = that.choose[type];
			that[type + 'Light'].visible = that.choose[type];
			that[type + 'Num'].visible = !that.choose[type];
		}
		function suc() {
			//道具+1
			let tool = userDataMaster.tool;
			tool[type].num++;
			userDataMaster.myTool = tool;
			that[type + 'Add'].visible = false;
			that[type + 'Num'].visible = true;
			that[type + 'Num'].text = 'X' + tool[type].num;
		}

	}

	public startFun(life = true) {
		if (life) {
			//使用体力开始
			if (userDataMaster.life <= 0) {
				console.log('体力不足')
				return;
			}
			userDataMaster.myLife = userDataMaster.life - 1;
		}
		for (let item in this.choose) {
			if (this.choose[item]) {
				userDataMaster.tool[item].num--;
			}
		}
		sceneMaster.changeScene(new runningScene(this.level, {}, this.choose));
	}
	public videoFun() {
		let that = this;
		if (!userDataMaster.dayFreeLife) {
			//今天视频次数用完
			platform.showModal({
				title: '温馨提醒',
				content: '今日免体力次数已用完，请明日再来'
			});
		}
		if (userDataMaster.dayFreeLife.num < 3) {
			CallbackMaster.openShare(() => {
				that.startFun(false);
			})
		} else {
			AdMaster.useVideo(() => {
				that.startFun(false);
			}, () => {
				CallbackMaster.openShare(() => {
					that.startFun(false);
				})
			});
		}
	}
	public closeFun() {
		if (sceneMaster.littleModal) {
          sceneMaster.closeLittleModal()
		} else {
			sceneMaster.closeModal()
		}

	}
}