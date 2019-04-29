class giftModal extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Image;
	public closeBtn: eui.Image;
	public bg_0: eui.Image;
	public bg_1: eui.Image;
	public bg_2: eui.Image;
	public bg_3: eui.Image;
	public bg_4: eui.Image;
	public bg_5: eui.Image;
	public bg_6: eui.Image;
	public bg_7: eui.Image;
	public getBtn: eui.Image;


	public terval = null;
	public current = 0;
	public speed = 1000;
	public choosing = false;
	public canTap = true;
	public dataArr = [
		{ id: 0, name: 'img_gift_05_png', num: 1, type: 'bullet' },
		{ id: 1, name: 'img_gift_02_png', num: 30, type: 'gold' },
		{ id: 2, name: 'img_gift_05_png', num: 1, type: 'bullet' },
		{ id: 3, name: 'img_gift_04_png', num: 1, type: 'glass' },
		{ id: 4, name: 'img_gift_01_png', num: 2, type: 'life' },
		{ id: 5, name: 'img_gift_02_png', num: 20, type: 'gold' },
		{ id: 6, name: 'img_gift_01_png', num: 1, type: 'life' },
		{ id: 7, name: 'img_gift_03_png', num: 10, type: 'gold' }
	]
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}
	public init() {
		let that = this;
		that.bgImg.height=that.stage.stageHeight;
		egret.Tween.get(that.getBtn,{loop:true}).to({scaleX:1.2,scaleY:1.2},1000).to({scaleX:1,scaleY:1},1000);
		if (userDataMaster.dayGift.num>0) {
			that.getBtn.texture = RES.getRes('btn_lottery_0' + 2 + '_png');
		} else {
			// that.getBtn.texture = RES.getRes('btn_lottery_03_png');
		}
		that.getBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.getFun, this);
		that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, this);
		that.terval = setInterval(() => { that.timer(that) }, 1000);
	}
	public timer(that) {
		that['bg_' + that.current].texture = RES.getRes('img_bg_lottery_01_png');
		that.current = that.current < 7 ? that.current + 1 : 0;
		that['bg_' + that.current].texture = RES.getRes('img_bg_lottery_02_png');
		if (!that.canTap && that.speed >= 1000) {
			that.choosing = false;
			let ran = Math.floor(Math.random() * 8 * 1000) + 5;
			setTimeout(function () {
				if (that.canTap) {
					return;
				}
				clearInterval(that.terval);
				let item = that.dataArr[that.current];
				switch (item.type) {
					case 'glass':
					case 'bullet':
						let tool = userDataMaster.tool;
						tool[item.type].num += item.num;
						userDataMaster.myTool = tool;
						break;
					case 'gold':
						let gold = userDataMaster.gold;
						gold += item.num;
						userDataMaster.myGold = gold;
						break;
					case 'life':
						let life = userDataMaster.life;
						life += item.num;
						userDataMaster.myLife = life;
						break;
					default:
				}
				userDataMaster.dayGift.num == 0 ? userDataMaster.dayGift.num++ : '';
				that.getBtn.texture = RES.getRes('btn_lottery_0' + 2 + '_png');
				sceneMaster.openLittleModal(new getSuccess(item.name, 'X' + item.num));
				that.canTap = true;
			}, ran);
		}
		if (that.choosing) {
			that.speed += 100;
			clearInterval(that.terval);
			that.terval = setInterval(() => { that.timer(that) }, that.speed)
		}

	}
	public getFun() {
		let that = this;

		if (!that.canTap) {
			return;
		}
		if(!userDataMaster.todayGift){
			platform.showModal({
				title:'温馨提示',
				content:'暂未开通视频奖励'
			})
			return;
		}
		egret.Tween.removeTweens(that.getBtn);
		egret.Tween.get(that.getBtn).to({ scaleX: 0.8, scaleY: 0.8 }, 60).to({ scaleX: 1, scaleY: 1 }, 60);
		if (userDataMaster.dayGift.num == 0) {
			suc();
		} else if (userDataMaster.dayGift.num >0) {
			AdMaster.useVideo(() => {
				suc();
			}, () => {
				CallbackMaster.openShare(() => {
					suc();
				})
			});
		}
		function suc() {
			that.canTap = false;
			that.speed = 50;
			userDataMaster.dayGift.num++;
			clearInterval(that.terval);
			that.terval = setInterval(() => { that.timer(that) }, that.speed)
			setTimeout(function () {
				that.choosing = true;
			}, 3000);
		}
	}
	public closeFun() {
		egret.Tween.removeTweens(this.getBtn);
		sceneMaster.closeModal();
	}

}