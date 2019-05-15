class moreComponent extends eui.Component implements eui.UIComponent {
	public moreGroup: eui.Group;
	public group_1: eui.Group;
	public image_1: eui.Image;
	public title_1: eui.Label;
	public group_2: eui.Group;
	public image_2: eui.Image;
	public title_2: eui.Label;
	public group_3: eui.Group;
	public image_3: eui.Image;
	public title_3: eui.Label;
	public container: eui.Group;
	public changeArea: eui.Image;
	public tipImg: eui.Image;
	public content: eui.Group;


	//数据集
	public sourceArr: eui.ArrayCollection;
	//数据容器
	public dataGroup: eui.DataGroup;
	public index_1 = 0;
	public index_2 = 1;
	public index_3 = 2;
	public list=[]
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
		let that = this;
		let list = userDataMaster.recommand['1'].games;


		let dataGroup = new eui.DataGroup();
		let list_more = userDataMaster.recommand['1'].games.slice(0, 3);
		for (let i = 1; i <= 3; i++) {
			that['image_' + i].source = list[that['index_' + i]].image;
			that['title_' + i].text = list[that['index_' + i]].name;
			that['group_'+i].addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{that.judgeFun(i)},that);
			// egret.Tween.get(that['group_'+i],{loop:true}).wait(700*i).to({ rotation: -15 }, 300).to({ rotation: 15 }, 600).to({ rotation: 0 }, 300)
		}
		setInterval(() => {
			that.index_1 = that.index_3 + 1 < list.length ? that.index_3 + 1 : 0;
			that.index_2 = that.index_1 + 1 < list.length ? that.index_1 + 1 : 0;
			that.index_3 = that.index_2 + 1 < list.length ? that.index_2 + 1 : 0;
			for (let i = 1; i <= 3; i++) {
				that['image_' + i].source = list[that['index_' + i]].image;
				that['title_' + i].text = list[that['index_' + i]].name;
			}
		}, 5000);



		for (let i = 0; i < list.length; i++) {
			list[i].color = 0x603005;
		}
		this.sourceArr = new eui.ArrayCollection(list);
		that.list=list;
		this.dataGroup = new eui.DataGroup();
		this.dataGroup.dataProvider = this.sourceArr;
		this.dataGroup.percentWidth = 400;
		this.dataGroup.percentHeight = this.sourceArr.length * 170;
		this.content.height = this.sourceArr.length * 170;
		this.dataGroup.useVirtualLayout = true;

		let layout: eui.TileLayout = new eui.TileLayout();
		layout.horizontalGap = 0;
		layout.verticalGap = 15;
		this.dataGroup.layout = layout;
		this.content.addChild(this.dataGroup);
		this.dataGroup.itemRenderer = moreItem;
		this.changeArea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePosition, this);
		this.tipImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePosition, this);



	}
	public judgeFun(i){
		let that=this;
		let item=that.list[that['index_'+i]];
		CallbackMaster.recommandClick(1, item);
			let type = 2;
			platform.navigateToMiniProgram({
				appId: item.appid,
				path: item.path,
				extraData: {},
				success(suc) {

				}, fail(err) {
					type = 3;
				},
				complete() {
					CallbackMaster.recommandClick(type, item)
				}
			})
	}
	public changePosition() {
		let that = this;
		if (this.tipImg.visible == true) {
			this.tipImg.visible = false;
		}
		if (this.container.x == -465) {
			egret.Tween.get(this.container).to({ x: 0 }, 500).call(() => {
				that.changeArea.texture = RES.getRes('btn_more_game_turn_png');
			})
		} else {
			egret.Tween.get(this.container).to({ x: -465 }, 500).call(() => {
				that.changeArea.texture = RES.getRes('btn_more_game_png');
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