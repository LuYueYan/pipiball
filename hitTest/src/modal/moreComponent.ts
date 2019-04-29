class moreComponent extends eui.Component implements eui.UIComponent {
	public container: eui.Group;
	public changeArea: eui.Image;
	public tipImg: eui.Image;
	public content: eui.Group;


	//数据集
	public sourceArr: eui.ArrayCollection;
	//数据容器
	public dataGroup: eui.DataGroup;
	public static shared: moreComponent;
	public static getInstance() {
		if (!moreComponent.shared) {
			moreComponent.shared = new moreComponent()
		}
		return moreComponent.shared;
	}
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
	private init() {
		let list = userDataMaster.recommand['1'].games;
		for(let i=0;i<list.length;i++){
			list[i].color=0x603005;
		}
		this.sourceArr = new eui.ArrayCollection(list);
		// this.loadData()
		this.dataGroup = new eui.DataGroup();
		this.dataGroup.dataProvider = this.sourceArr;
		this.dataGroup.percentWidth = 400;
		this.dataGroup.percentHeight = this.sourceArr.length * 170;
		this.content.height = this.sourceArr.length * 170;
		this.dataGroup.useVirtualLayout = true;

		let layout: eui.TileLayout = new eui.TileLayout();
		layout.horizontalGap =0;
		layout.verticalGap = 15;
		this.dataGroup.layout = layout;
		this.content.addChild(this.dataGroup);
		this.dataGroup.itemRenderer = moreItem;
		this.changeArea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePosition, this);
		this.tipImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePosition, this)
	}
	public changePosition() {
		let that=this;
		if (this.tipImg.visible == true) {
			this.tipImg.visible = false;
		}
		if (this.container.x == -465) {
			egret.Tween.get(this.container).to({ x: 0 }, 500).call(()=>{
             that.changeArea.texture=RES.getRes('btn_more_game_turn_png');
			})
		} else {
			egret.Tween.get(this.container).to({ x: -465 }, 500).call(()=>{
             that.changeArea.texture=RES.getRes('btn_more_game_png');
			})
		}
	}
	// 加载更多数据
	// public loadData() {
	// 	let that = this;
	// 	//加载数据
	// 	ServiceMaster.post(
	// 		ServiceMaster.getGameList,
	// 		{},
	// 		function (suc) {
	// 			if (parseInt(suc.code) === 1 && suc.data) {
	// 				let arr = [];
	// 				for (let i = 0; i < suc.data.length; i++) {
	// 					that.sourceArr.addItem(suc.data[i]);
	// 					arr.push(suc.data[i])
	// 				}
	// 				setTimeout(function () {
	// 					if (CallbackMaster.jumpArr.length == 0) {

	// 						CallbackMaster.jumpArr = arr;
	// 					}
	// 				}, 1000);
	// 				that.dataGroup.percentHeight = that.sourceArr.length * 170;
	// 				that.content.height = that.sourceArr.length * 170;
	// 			}
	// 		}
	// 	);
	// }

}
window['moreComponent'] = moreComponent