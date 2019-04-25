class toolGuide extends eui.Component implements eui.UIComponent {
	public txtGroup: eui.Group;
	public txt_1: eui.Label;
	public txt_2: eui.Label;
	public txt_3: eui.Label;


	public type = 1;//类型 1 锤子 2 头盔 3红绿灯
	public arr = ['可击碎任意方块', '可使弹药威力加倍', '可控制砖块不下落'];
	public constructor(type = 0) {
		super();
		this.type = type;
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
		that.txt_2.text = that.arr[that.type];
		
	}

}