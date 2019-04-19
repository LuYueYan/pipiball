class startScene extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Rect;
	public lifeGroup: eui.Group;
	public liftText: eui.BitmapLabel;
	public goldGroup: eui.Group;
	public goldText: eui.BitmapLabel;
	public openLife: tweenButton;
	public openShare: tweenButton;
	public openBullet: tweenButton;
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

		that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.judgeFun, that);
		userDataMaster.myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.dataChange, this);

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
			that.moreComponent.y = 147;
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
			let x = e.stageX - (t.x - t.anchorOffsetX);
			let y = e.stageY - (t.y - t.anchorOffsetY);
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
		that.red_dot.parent&&that.red_dot.parent.removeChild(that.red_dot);
		sceneMaster.openModal(new giftModal());
	}
}