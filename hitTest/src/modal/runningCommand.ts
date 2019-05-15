class runningCommand extends eui.Component implements eui.UIComponent {
	public group_1: eui.Group;
	public img_1: eui.Image;
	public title_1: eui.Label;
	public group_2: eui.Group;
	public img_2: eui.Image;
	public title_2: eui.Label;


	public list;
	public index_1 = 0;
	public index_2 = 1;
	public terval = null;

	public static shared: runningCommand;
	public static getInstance() {
		if (!runningCommand.shared) {
			runningCommand.shared = new runningCommand();
		}
		return runningCommand.shared;
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
	public init() {
		let that = this;
		if (userDataMaster.recommand && userDataMaster.recommand['1'] && userDataMaster.recommand['1'].games) {
			let dataGroup = new eui.DataGroup();
			that.list = userDataMaster.recommand['1'].games;
			let list = that.list;
			that.img_1.source = list[that.index_1].image;
			that.img_2.source = list[that.index_2].image;
			that.title_1.text = list[that.index_1].name.slice(0, 5);;
			that.title_2.text = list[that.index_2].name.slice(0, 5);;
			that.terval = setInterval(() => {
				that.index_1 = that.index_2 + 1 < list.length ? that.index_2 + 1 : 0;
				that.index_2 = that.index_1 + 1 < list.length ? that.index_1 + 1 : 0;
				that.img_1.source = list[that.index_1].image;
				that.img_2.source = list[that.index_2].image;
				that.title_1.text = list[that.index_1].name.slice(0, 5);
				that.title_2.text = list[that.index_2].name.slice(0, 5);;
			}, 5000);
			that.group_1.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.judgeFun(1) }, that);
			that.group_2.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.judgeFun(2) }, that);
			// egret.Tween.get(that.group_1, { loop: true }).to({ rotation: -15 }, 300).to({ rotation: 15 }, 600).to({ rotation: 0 }, 300);
			// egret.Tween.get(that.group_2, { loop: true }).to({ rotation: -15 }, 300).to({ rotation: 15 }, 600).to({ rotation: 0 }, 300);
		}
	}
	public judgeFun(i) {
		let that = this;
		let item = that.list[that['index_' + i]];
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

}
window['runningCommand'] = runningCommand