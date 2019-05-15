class beeCom {
	public img: egret.Bitmap;//图片
	public boxBody: p2.Body;
	public adaptation = 0;//适配长度
	public power: number = 1;//每次的伤害值
	public against: any;//针对威力不同
	public bulletIndex=userDataMaster.bulletIndex;
	public constructor(bulletIndex) {
		this.bulletIndex=bulletIndex;
		this.init()
	}
	public init() {
		this.img = this.createBitmapByName(userDataMaster.bulletArr[this.bulletIndex].img);
		this.img.width = 58;
		this.img.height = 63;
		this.img.anchorOffsetX = this.img.width / 2;
		this.img.anchorOffsetY = this.img.height/4 ;
		this.against = userDataMaster.bulletArr[this.bulletIndex].target;
	}
	public createBody(that, x = 7.5, y = 0) {
		// var vertices = [[0.25, -0.63], [0.25, 0.63], [-0.25, 0.63], [-0.25, -0.63]];
		// 	var vertices = [[0.25, -0.63], [0, 0.63], [-0.25, -0.63]];
		// var boxShape = new p2.Convex({ vertices: vertices });
		var boxShape: p2.Shape = new p2.Circle({radius:0.25 });
		//不碰撞同类
		boxShape.collisionGroup = 1;
		boxShape.collisionMask = 2;
		if (y == 0) {
			y = that.getPosition(880);
		}
		this.boxBody = new p2.Body({ mass: 100, position: [x, y] });
		this.boxBody.gravityScale = 1;
		this.boxBody.addShape(boxShape);
		that.world.addBody(this.boxBody);
		this.boxBody.displays = [this.img];
		that.addChild(this.img);
		return this.boxBody;
	}
	public powerUp(num = 1) {
		//伤害值改变
		this.power = num;
		if (num == 2) {
			this.img.texture = RES.getRes('img_lightning_02_png');
		} else if (num == 1) {
			this.img.texture = RES.getRes(userDataMaster.bulletArr[this.bulletIndex].img + '_png');
		}
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
window['beeCom'] = beeCom