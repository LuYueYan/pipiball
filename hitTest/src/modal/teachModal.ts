class teachModal extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Image;
	public closeBtn: eui.Image;
	public contentGroup: eui.Group;
	public glass_get: eui.Image;
	public glass_num: eui.Label;
	public bullet_get: eui.Image;
	public bullet_num: eui.Label;
	public hammer_get: eui.Image;
	public hammer_num: eui.Label;
	public hat_get: eui.Image;
	public hat_num: eui.Label;
	public lamp_get: eui.Image;
	public lamp_num: eui.Label;
	public goldGroup: eui.Group;
	public goldText: eui.BitmapLabel;



	public shareCount = 0;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.bgImg) {
			this.init()
		} else {
			this.addEventListener(egret.Event.COMPLETE, this.init, this)
		}
	}
	public init() {
		let that = this;
		let dy = that.stage.stageHeight - 1334;
		that.bgImg.height += dy;
		that.contentGroup.y += dy * 0.5;
		that.goldText.text = userDataMaster.gold + '';
		let tool = userDataMaster.tool;
		for (let type in tool) {
			that[type + '_num'].text = tool[type].num + '';
			that[type + '_get'].addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.getFun(type) }, that);
		}
		that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, that);
		that.goldGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, that.goldGroupFun, that);
	}
	public closeFun() {
		sceneMaster.closeModal();
	}
	public getFun(type) {
		let that = this;
		let arr = {
			glass: 'img_gift_04_png',
			bullet: 'img_gift_05_png',
			hammer: 'img_gift_06_png',
			hat: 'img_gift_07_png',
			lamp: 'img_gift_08_png'
		}
		if (type == 'glass' || type == 'bullet') {
			AdMaster.useVideo(() => {
				userDataMaster.tool[type].num++;
				userDataMaster.myTool = userDataMaster.tool;
				that[type + '_num'].text = userDataMaster.tool[type].num + '';
				sceneMaster.openLittleModal(new getSuccess(arr[type], 'X1'));
			});
		} else {
			if (userDataMaster.gold >= 20) {
				userDataMaster.gold -= 20;
				that.goldText.text = userDataMaster.gold + '';
				userDataMaster.tool[type].num++;
				userDataMaster.myTool = userDataMaster.tool;
				that[type + '_num'].text = userDataMaster.tool[type].num + '';
				sceneMaster.openLittleModal(new getSuccess(arr[type], 'X1'));

			} else {
				platform.showToast({
					title: '钻石不足',
					icon: 'none'
				})
			}
		}
	}
	public goldGroupFun() {
		let that = this;
		if (!userDataMaster.todayShareGold) {
			platform.showModal({
				title: '温馨提示',
				content: '今日获取次数已达上限，请明日再来'
			});
			return;
		}
		// CallbackMaster.openShare(() => {
		// 	suc();
		// }, that.shareCount);
		// that.shareCount++;
		AdMaster.useVideo(()=>{
			suc();
		})
		function suc() {
			userDataMaster.dayShareGold.num++;
			userDataMaster.myGold = userDataMaster.gold + 20;
			that.goldText.text = userDataMaster.gold + '';
			sceneMaster.openLittleModal(new getSuccess('img_diamond_big_png', 'X' + 20));
		}
	}

}