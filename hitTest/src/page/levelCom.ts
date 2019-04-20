class levelCom extends eui.Component implements eui.UIComponent {
	public scroller: eui.Scroller;
	public content: eui.Group;
	public head: eui.Group;
	public headmask: eui.Rect;
	public headimg: eui.Image;


	public dataGroup: eui.DataGroup;
	public sourceArr: eui.ArrayCollection;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init()
	}
	public init() {
		let that = this;
		that.sourceArr = new eui.ArrayCollection(userDataMaster.levelArr);
		that.dataGroup = new eui.DataGroup();
		that.dataGroup.dataProvider = that.sourceArr;
		that.dataGroup.useVirtualLayout = true;
		let layout = new eui.VerticalLayout();
		layout.gap = 0;
		that.dataGroup.layout = layout;
		that.dataGroup.itemRenderer = levelItem;
		that.dataGroup.y = 424;
		that.content.height = that.dataGroup.y + 130 * userDataMaster.levelArr.length + 300;
		that.content.addChild(that.dataGroup);
		if (userDataMaster.levelStar.length > 1) {
			this.scroller.viewport.scrollV = 130 * (userDataMaster.levelStar.length - 1);
		}
		setTimeout(function () {
			let n = (userDataMaster.level + 1 + 1) % levelItem.point.length + 1;
			that.head.x = levelItem.point[n - 1].x;
			that.head.y = that.dataGroup.y - that.head.height + levelItem.point[n - 1].y + 130 * userDataMaster.level;
			that.headimg.source=userDataMaster.myInfo.avatarUrl;
			that.headimg.mask=that.headmask;
		}, 300);
	}

}