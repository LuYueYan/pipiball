class starCom {
	public img: egret.Bitmap;//图片
	public boxBody: p2.Body;
	public type = 4;//星星
	public isRemoved = false;//是否已经被移除
	public squareType = 2;//星星类型
	public gif;//动画
	public constructor() {
		this.init()
	}
	public init() {
		this.img = this.createBitmapByName('img_lightning_01');
	}
	public createBody(x, y, that) {
		var boxShape: p2.Shape = new p2.Box({ width: 1.92, height: 1.92 });
		boxShape.collisionGroup = 2;
		boxShape.collisionMask = 5;
		boxShape.sensor = true;//作为传感器，被穿透
		this.boxBody = new p2.Body({ mass: 100, position: [x, y], type: p2.Body.KINEMATIC });
		this.boxBody.addShape(boxShape);
		this.boxBody.displays = [this.img];
		that.addChild(this.img);
		return this.boxBody;
	}
	public updateText(that, callback: Function = null) {
		//碰撞后做出反应
		let self = this;
		self.isRemoved = true;
		if (!this.gif) {
			let gif = movieMaster.getGif('lightning');
			gif.x = this.img.x - 180 / 2;
			gif.y = this.img.y - 180 / 2;
			this.gif = gif;
			gif.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
				gif.parent && gif.parent.removeChild(gif);
			}, this);
		}
		that.addChild(this.gif);
		this.gif.gotoAndPlay(1, 1);
		callback && callback();
	}
	private createBitmapByName(name: string): egret.Bitmap {
		var result: egret.Bitmap = new egret.Bitmap();
		var texture: egret.Texture = RES.getRes(name + '_png');
		result.texture = texture;
		result.anchorOffsetX = result.width / 2;
		result.anchorOffsetY = result.height / 2;
		return result;
	}
}
window['starCom'] = starCom