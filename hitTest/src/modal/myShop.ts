class myShop extends eui.Component implements eui.UIComponent {
	public closeBtn: eui.Button;
	public goldGroup: eui.Group;
	public goldNum: eui.Label;
	public scroller: eui.Scroller;
	public contentGroup: eui.Group;


	public dataGroup: eui.DataGroup;
	public sourceArr: eui.ArrayCollection;

	public shareCount=0;
	public constructor() {
		super();
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.goldGroup) {
			this.init()
		} else {
			this.addEventListener(egret.Event.COMPLETE, this.init, this)
		}
	}
	public init() {
		let that = this;
		that.goldNum.text = userDataMaster.gold + '';
		that.scroller.height = that.stage.stageHeight - 150;
		that.sourceArr = new eui.ArrayCollection(userDataMaster.bulletArr);
		that.dataGroup = new eui.DataGroup();
		that.dataGroup.dataProvider = that.sourceArr;
		that.dataGroup.useVirtualLayout = true;
		let layout = new eui.VerticalLayout();
		layout.gap = -20;
		that.dataGroup.layout = layout;
		that.dataGroup.itemRenderer = shopItem;
		that.contentGroup.height = userDataMaster.bulletArr.length * 293;
		that.contentGroup.addChild(that.dataGroup);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
		this.goldGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goldGroupFun, this);
		userDataMaster.myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.collectionChangeHandler, this);//监听数据变化
	}
	public collectionChangeHandler(e: eui.CollectionEvent) {
		let that = this;
		let u = userDataMaster.bulletArr[userDataMaster.bulletIndex];
		that.goldNum.text = userDataMaster.gold + '';
		that.sourceArr.refresh();
	}
	public closeFun() {
		userDataMaster.myCollection.removeEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.collectionChangeHandler, this);
		sceneMaster.closeModal();
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
		AdMaster.useVideo(()=>{
			suc();
		})
		// CallbackMaster.openShare(() => {
		// 	suc();
		// }, that.shareCount);
		// that.shareCount++;
		function suc() {
			userDataMaster.dayShareGold.num++;
			userDataMaster.myGold = userDataMaster.gold + 20;
			sceneMaster.openLittleModal(new getSuccess('img_diamond_big_png', 'X' + 20));
		}
	}

}