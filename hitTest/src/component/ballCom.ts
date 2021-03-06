class ballCom {
	public img: egret.Bitmap;//图片
	public boxBody: p2.Body;
	public type = 3;//精灵
	public squareType = 3;//精灵类型
	public isRemoved = false;//是否已经被移除
	public bulletIndex = userDataMaster.bulletIndex;
	public constructor(bulletIndex) {
		this.bulletIndex = bulletIndex;
		this.init()
		
	}
	public init() {
		this.img = this.createBitmapByName(userDataMaster.bulletArr[this.bulletIndex].img);
		this.img.width = 82,
			this.img.height = 86;
		this.img.anchorOffsetX = this.img.width / 2;
		this.img.anchorOffsetY = this.img.height / 2;
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
		egret.Tween.get(this.img, { loop: true }).to({ scaleX: 0.9, scaleY: 1.1 }, 200).to({ scaleX: 1, scaleY: 1 }, 100);
		return this.boxBody;
	}
	public updateText(that, callback: Function = null) {
		//销毁
		let self = this;
		let gif = movieMaster.getGif('bullet');
		gif.x = this.img.x - 200 / 2;
		gif.y = this.img.y - 200 / 2;
		that.addChild(gif);
		gif.gotoAndPlay(1, 1);
		gif.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
			gif.parent && gif.parent.removeChild(gif);
		}, this);

		self.boxBody.shapes[0].collisionMask = 0;
		self.isRemoved = true;
		setTimeout(() => {
			self.boxBody.type = p2.Body.DYNAMIC;
			self.boxBody.gravityScale = 0;
			self.boxBody.velocity = [0, -10];
			self.boxBody.angularVelocity = 2;

			//计算掉落到地面销毁时间
			let t = (self.boxBody.position[1] - that.getPosition(935)) / 10;
			setTimeout(function () {
				//销毁
				that.world.removeBody(self.boxBody);
				self.img.parent && self.img.parent.removeChild(self.img);
				callback && callback();
			}, t * 1000);


		}, 1000);

		//播放销毁的动画
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
window['ballCom'] = ballCom