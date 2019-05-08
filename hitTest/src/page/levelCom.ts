class levelCom extends eui.Component implements eui.UIComponent {
	public scroller: eui.Scroller;
	public content: eui.Group;
	public head: eui.Group;
	public light: eui.Image;
	public headmask: eui.Rect;
	public headimg: eui.Image;



	public dataGroup: eui.DataGroup;
	public sourceArr: eui.ArrayCollection;
	public constructor() {
		super();
	}
	public static shared: levelCom;
	public static getInstance() {
		if (!levelCom.shared) {
			levelCom.shared = new levelCom();
		}
		return levelCom.shared;
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.checkSuccess(0);

	}
	public checkSuccess(t) {
		let that = this;
		if (userDataMaster.getDataSuccess) {
			that.init()
		} else if (t < 5) {
			t++;
			setTimeout(function () {
				that.checkSuccess(t);
			}, 3000);
		}
	}
	public init() {
		let that = this;
		let arr = userDataMaster.levelArr;
		that.sourceArr = new eui.ArrayCollection(arr.concat([{ level: userDataMaster.levelArr.length + 1, text: '敬请期待' }]));
		that.dataGroup = new eui.DataGroup();
		that.dataGroup.dataProvider = that.sourceArr;
		let layout = new eui.VerticalLayout();
		layout.gap = 0;
		that.dataGroup.layout = layout;

		that.dataGroup.y = 554;
		that.dataGroup.percentWidth = 750;
		that.dataGroup.percentHeight = 130;
		that.content.height = that.dataGroup.y + 130 * userDataMaster.levelArr.length + 130;
		that.content.addChildAt(that.dataGroup, 4);
		that.dataGroup.itemRenderer = levelItem;
		that.dataGroup.useVirtualLayout = true;
		if (userDataMaster.levelStar.length > 1) {
			this.scroller.viewport.scrollV = 130 * (userDataMaster.levelStar.length - 1);
		}
		setTimeout(function () {
			let n = (userDataMaster.level + 1 + 2) % levelItem.point.length + 1;
			that.head.x = levelItem.point[n - 1].x;
			that.head.y = that.dataGroup.y - that.head.height + levelItem.point[n - 1].y + 130 * userDataMaster.level;
			that.headimg.source = userDataMaster.myInfo.avatarUrl;
			that.headimg.mask = that.headmask;
			// egret.Tween.get(that.light, { loop: true }).to({ rotation: 360 }, 3000);
			that.head.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				sceneMaster.openModal(new playBefore(userDataMaster.level + 1));
			}, this)
		}, 300);

		userDataMaster.myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.dataChange, this);
	}
	public dataChange(e: eui.CollectionEvent) {
		let that = this;
		let n = (userDataMaster.level + 1 + 2) % levelItem.point.length + 1;
		that.head.x = levelItem.point[n - 1].x;
		that.head.y = that.dataGroup.y - that.head.height + levelItem.point[n - 1].y + 130 * userDataMaster.level;
		that.headimg.source = userDataMaster.myInfo.avatarUrl;
		that.headimg.mask = that.headmask;
		that.sourceArr.refresh()
	}

}