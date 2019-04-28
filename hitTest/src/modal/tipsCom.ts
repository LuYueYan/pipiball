class tipsCom extends eui.Component implements eui.UIComponent {
	public reckMask_1: eui.Rect;
	public reckMask_2: eui.Rect;
	public tip_1: eui.Label;
	public tip_2: eui.Label;


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
		let index_1 = 0;
		let index_2 = 1;
		that.tip_1.text = arr[index_1];
		that.tip_2.text = arr[index_2];
		that.tip_1.mask = that.reckMask_1;
		that.tip_2.mask = that.reckMask_2;
		egret.Tween.get(that.tip_1, { loop: true }).wait(5000).to({ y: 6 }, 42 * 10)
			.to({ y: 90 }, 0).call(() => {
				index_1 = index_2 + 1 < arr.length - 1 ? index_2 + 1 : 0;
				that.tip_1.text = arr[index_1];
			}).wait(5000).to({ y: 48 }, 42 * 10);

		egret.Tween.get(that.tip_2, { loop: true }).wait(5000).to({ y: 48 }, 42 * 10).wait(5000)
			.to({ y: 6 }, 42 * 10).to({ y: 90 }, 0).call(() => {
				index_2 = index_1 + 1 < arr.length - 1 ? index_1 + 1 : 0;
				that.tip_2.text = arr[index_2];
			});
	}

}
window['tipsCom'] = tipsCom