class startScene extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Rect;
	public lifeGroup: eui.Group;
	public liftText: eui.BitmapLabel;
	public goldGroup: eui.Group;
	public goldText: eui.BitmapLabel;
	public openLife: tweenButton;
	public life_dot: eui.Image;
	public openShare: tweenButton;
	public navGroup: eui.Group;
	public openBullet: tweenButton;
	public bullet_new_icon: eui.Image;
	public openShop: tweenButton;
	public openRank: tweenButton;
	public openGift: eui.Group;
	public red_dot: eui.Image;
	public moreGroup: eui.Group;

	public targetArr = [
		'lifeGroup',
		'goldGroup',
		'openLife',
		'openShare',
		'openBullet',
		'openShop',
		'openRank',
		'openGift'
	];
	public moreComponent: moreComponent;
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
		that.bgImg.height = that.stage.stageHeight;
		that.navGroup.y += that.stage.stageHeight - 1334;
		that.liftText.text = userDataMaster.life + '/5';
		that.goldText.text = userDataMaster.gold + '';
		that.createRecommand();

		let scroll = new levelCom();
		that.addChildAt(scroll, 1);
		scroll.scroller.height = that.stage.stageHeight;

		let cloud_top = new cloudCom('cloud_top');
		that.addChildAt(cloud_top, 2);

		let cloud_bottom = new cloudCom('cloud_bottom');
		that.addChildAt(cloud_bottom, 3);
		cloud_bottom.y = that.stage.stageHeight - cloud_bottom.height;
		egret.Tween.get(that.bullet_new_icon, { loop: true }).to({ y: -20 }, 1000).to({ y: -8 }, 1000);
		setTimeout(function () {
			that.chooseSex(0);
		}, 1000);

		that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.judgeFun, that);
		userDataMaster.myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.dataChange, this);

	}
	public chooseSex(num) {
		let that = this;
		if (userDataMaster.myInfo.uid) {
			//静默登录成功
			if (!(userDataMaster.myInfo.gender && userDataMaster.myInfo.gender > 0)) {
				sceneMaster.openModal(new chooseSex());
			}
		} else if (num++ < 5) {
			setTimeout(function () {
				that.chooseSex(num)
			}, 1000);
		}
	}

	public createRecommand(n = 0) {
		let that = this;
		if (userDataMaster.recommand && userDataMaster.recommand['1'] && userDataMaster.recommand['1'].games) {
			let dataGroup = new eui.DataGroup();
			let list = userDataMaster.recommand['1'].games.slice(0, 3);
			for (let i = 0; i < list.length; i++) {
				list[i].color_1 = 0x164E33;
			}
			let source = new eui.ArrayCollection(list);
			dataGroup.dataProvider = source;
			let layout = new eui.VerticalLayout();
			layout.gap = 20;
			dataGroup.layout = layout;
			dataGroup.itemRenderer = moreItem;
			that.moreGroup.addChild(dataGroup);

			that.moreComponent = moreComponent.getInstance();
			that.moreComponent.y = 350;
			that.addChild(that.moreComponent)
			that.moreComponent.changeArea.texture = RES.getRes('btn_more_game_png');
		} else {
			n++;
			setTimeout(function () {
				that.createRecommand(n);
			}, 300);
		}
	}
	public dataChange(e: eui.CollectionEvent) {
		this.liftText.text = userDataMaster.life + '/5';
		this.goldText.text = userDataMaster.gold + '';
	}
	public judgeFun(e: egret.TouchEvent) {
		let that = this;
		if (sceneMaster.modal) {
			return;
		}
		for (let item of that.targetArr) {
			let t = that[item];
			let x = e.stageX - (t.x - t.anchorOffsetX + t.parent.x);
			let y = e.stageY - (t.y - t.anchorOffsetY + t.parent.y);

			if (x > 0 && x < t.width && y > 0 && y < t.height) {
				that[item + 'Fun'] && that[item + 'Fun']();
				return;
			}
		}
	}
	public lifeGroupFun() {
		let that = this;
		that.openLifeFun();
	}
	public goldGroupFun() {
		if (!userDataMaster.todayShareGold) {
			platform.showModal({
				title: '温馨提示',
				content: '今日获取次数已达上限，请明日再来'
			});
			return;
		}
		AdMaster.useVideo(() => {
			suc();
		}, () => {
			CallbackMaster.openShare(() => {
				suc();
			})
		});
		let that = this;
		function suc() {
			userDataMaster.dayShareGold.num++;
			userDataMaster.myGold = userDataMaster.gold + 20;
			sceneMaster.openModal(new getSuccess('img_diamond_big_png', 'X' + 20));
		}
	}
	public openLifeFun() {
		let that = this;
		that.life_dot.visible = false;
		sceneMaster.openModal(new getLifeModal())
	}
	public openShareFun() {
		let that = this;
		CallbackMaster.openShare(null, false);
	}
	public openBulletFun() {
		let that = this;
		egret.Tween.removeTweens(that.bullet_new_icon);
		that.bullet_new_icon.parent && that.bullet_new_icon.parent.removeChild(that.bullet_new_icon);
		sceneMaster.openModal(new myShop());
	}
	public openShopFun() {
		let that = this;
		sceneMaster.openModal(new teachModal());
	}
	public openRankFun() {
		let that = this;
		sceneMaster.openModal(new rankModal())
	}
	public openGiftFun() {
		let that = this;
		that.red_dot.parent && that.red_dot.parent.removeChild(that.red_dot);
		sceneMaster.openModal(new giftModal());
	}
}