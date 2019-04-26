class playBefore extends eui.Component implements eui.UIComponent {
	public titleText: eui.Label;
	public chooseGroup: eui.Group;
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
	public startBtn: eui.Image;
	public videoBtn: eui.Image;
	public closeBtn: eui.Image;
	public guide: eui.Group;
	public txt_1: eui.Label;
	public txt_2: eui.Label;


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
		if (this.level == 5 && userDataMaster.level == 4) {
			//道具bullet首次出现 第五关
			that.guide.visible = true;
			that.guide.x = 240;
			that.txt_1.text = '点击试试新的道具';
			that.txt_1.text = '超级弹药筒';
			that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.guideFun, this);
		} else if (this.level == 1 && userDataMaster.level == 0) {
			//道具glass首次出现 第一关
			that.guide.visible = true;
			that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.guideFun, this);
		} else {
			that.removeChild(that.guide);
			if (this.level <= userDataMaster.level) {
				//已通过的老关卡
				that.startBtn.parent.removeChild(that.startBtn);
				that.videoBtn.texture = RES.getRes('btn_start_04_png');
			} else {
				that.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.startFun, this);
				if (userDataMaster.dayFreeLife.num >= 3) {
					that.videoBtn.texture = RES.getRes('btn_before_02_png');
				}
			}
			if (this.level >= 5) {
				//出现炸弹
				if (userDataMaster.tool.bullet.num <= 0) {
					that.bulletNum.visible = false;
					that.bulletAdd.visible = true;
				}
				that.bullet.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseFun('bullet') }, this);
			} else {
				that.bullet.parent.removeChild(that.bullet);
			}
			that.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.videoFun, this);
			that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, this);
			that.glass.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseFun('glass') }, this);
		}

		if (userDataMaster.tool.glass.num <= 0) {
			that.glassNum.visible = false;
			that.glassAdd.visible = true;
		}
		that.titleText.text = '第' + this.level + '关';
	}
	public guideFun() {
		let that = this;
		that.removeEventListener(egret.TouchEvent.TOUCH_TAP, that.guideFun, this);
		that.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.videoFun, this);
		that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, this);
		that.glass.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseFun('glass') }, this);
		if (that.startBtn && that.startBtn.parent) {
			that.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.startFun, this);
		}
		if (that.bullet.parent) {
			that.txt_1.text = '里面多藏了5颗弹药';
			that.txt_2.text = '助力开局';
			that.bullet.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseFun('bullet') }, this);
		} else {
			that.txt_1.text = '你将可以看清';
			that.txt_2.text = '发射后的拐弯路线';
		}

	}
	public chooseFun(type) {
		let that = this;
		console.log(type)
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
		egret.Tween.removeAllTweens();
		sceneMaster.changeScene(new runningScene(this.level, {}, this.choose));
	}
	public videoFun() {
		let that = this;
		if (this.level <= userDataMaster.level) {
			// 旧关卡免体力开始
			that.startFun(false);
			return;
		}
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