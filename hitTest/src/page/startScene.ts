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
	public openShop: tweenButton;
	public openRank: tweenButton;
	public openGift: eui.Group;
	public red_dot: eui.Image;
	public moreGroup: eui.Group;
	public tip_1: eui.Label;
	public tip_2: eui.Label;





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
		this.liftText.text = userDataMaster.life + '/5';
		this.goldText.text = userDataMaster.gold + '';
		this.createRecommand();

		let scroll = new levelCom();
		this.addChildAt(scroll, 1);
		scroll.scroller.height = this.stage.stageHeight;

		let cloud_top = new cloudCom('cloud_top');
		this.addChildAt(cloud_top, 2);

		let cloud_bottom = new cloudCom('cloud_bottom');
		this.addChildAt(cloud_bottom, 3);
		cloud_bottom.y = this.stage.stageHeight - cloud_bottom.height;
		setTimeout(function () {
			if (!(userDataMaster.myInfo.gender && userDataMaster.myInfo.gender > 0)) {
				that.addChild(new chooseSex());
			}
		}, 1000);
		that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.judgeFun, that);
		userDataMaster.myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.dataChange, this);
		that.createscrollText();
	}
	public createscrollText() {
		let arr = [
			'当你打不过了，去找新的植物炮弹帮助你吧',
			'你知道吗？包菜君可以说是最厉害的弹药了',
			'某些道具要到特定关卡才会开启哦',
			'开局道具记得选，整局游戏都能用，很强',
			'游戏中不要吝啬使用左下角的道具',
			'偷偷告诉你，旧关卡不消耗体力，还能赚宝石',
			'没有体力，点击“获取体力”，它会帮助你',
			'“免费礼物”有好东西，多去看看'
		];
		let that = this;
		let index_1 = 0;
		let index_2 = 1;
		let dx = that.tip_1.x - (-that.tip_1.width);
		let dt = that.tip_1.x + that.tip_1.width - 750;
		animation_1();
		function animation_1() {
			let dt = that.tip_1.x + that.tip_1.width - 750 + 50;
			setTimeout(function () {
				animation_2();
			}, dt * 10);
			let dx_1 = that.tip_1.x + that.tip_1.width;
			egret.Tween.get(that.tip_1).to({ x: -that.tip_1.width }, dx_1 * 10).call(() => {
				index_1 = index_2 + 1 < arr.length - 1 ? index_2 + 1 : 0;
				that.tip_1.text = arr[index_1];
				that.tip_1.x = 750;
			});
		}
		function animation_2() {
			let dt = that.tip_2.x + that.tip_2.width - 750 + 50;
			setTimeout(function () {
				animation_1();
			}, dt * 10);
			let dx_2 = that.tip_2.x + that.tip_2.width;
			egret.Tween.get(that.tip_2).to({ x: -that.tip_2.width }, dx_2 * 10).call(() => {
				index_2 = index_1 + 1 < arr.length - 1 ? index_1 + 1 : 0;
				that.tip_2.text = arr[index_2];
				that.tip_2.x = 750;
			});
		}
	}
	public createRecommand(n = 0) {
		let that = this;
		if (userDataMaster.recommand && userDataMaster.recommand['1'] && userDataMaster.recommand['1'].games) {
			let dataGroup = new eui.DataGroup();
			let list = userDataMaster.recommand['1'].games.slice(0, 3);
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
		AdMaster.useVideo(() => {
			suc();
		}, () => {
			CallbackMaster.openShare(() => {
				suc();
			})
		});
		let that = this;
		function suc() {
			userDataMaster.myGold = userDataMaster.gold + 10;
			sceneMaster.openModal(new getSuccess('img_diamond_big_png', 'X' + 10));
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