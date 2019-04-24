class gridCom {
	public img: egret.Bitmap;//图片
	public txt: egret.BitmapText;//文字
	public itemW: number = 96;//格子大小
	public initNum: number = 1;//保存初始的血量数值
	public num: number = 1;//需要击打的数量
	public boxBody: p2.Body;
	public type: number = 1;//类型 1--方形 2--三角型 5--炸弹 6--冰块
	public hitText: egret.Bitmap;//被击中时显示的数字
	public destroyGif;//被销毁时的动画
	public isRemoved = false;//是否已经被移除
	public font: egret.BitmapFont;
	public constructor(num = 1, type = 1) {
		this.num = num;
		this.initNum = num;
		this.type = type;
		this.init();
	}

	public init() {
		if (this.type == 1) {
			let x = 'img_diamonds_a1';
			if (Math.random() > 0.7) {
				x = 'img_diamonds_c1';
			}
			this.img = this.createBitmapByName(x);
		} else if (this.type == 2) {
			this.img = this.createBitmapByName('img_diamonds_b1');
		} else if (this.type == 5) {
			this.img = this.createBitmapByName('img_diamonds_e1');
		} else {
			this.img = this.createBitmapByName('img_diamonds_d1');
		}
		this.img.anchorOffsetX = this.img.width / 2;
		this.img.anchorOffsetY = this.img.height / 2;
		this.txt = new egret.BitmapText();
		this.font = RES.getRes('stripe_text_fnt');
		this.txt.font = this.font;
		this.txt.text = this.num + '';
		this.txt.width = this.itemW;
		this.txt.textAlign = 'center';
		this.txt.anchorOffsetX = this.img.width / 2;
		this.txt.anchorOffsetY = this.img.height / 1.9;
		this.txt.scaleX = 0.8, this.txt.scaleY = 0.8;
	}
	public createBody(x, y, that) {
		var boxShape: p2.Shape;
		if (this.type == 2) {
			var vertices = [[0.95, -0.95], [0.95, 0.95], [-0.95, 0.95]];//必须是逆时针方向的数组
			boxShape = new p2.Convex({ vertices: vertices });
		} else {
			var vertices = [[0.95, -0.95], [0.95, 0.95], [-0.95, 0.95], [-0.95, -0.95]];
			boxShape = new p2.Convex({ vertices: vertices });
		}
		boxShape.collisionGroup = 6;
		boxShape.collisionMask = 7;

		this.boxBody = new p2.Body({ mass: 100, position: [x, y], type: p2.Body.KINEMATIC });
		this.boxBody.addShape(boxShape);
		if (this.type == 6) {
			this.boxBody.type = p2.Body.DYNAMIC;
			this.boxBody.gravityScale = 0;
			let self = this;
			setTimeout(function () {
				self.boxBody.velocity = [0.5, 0];
			}, 100);
		}
		this.boxBody.fixedRotation = false;
		this.boxBody.displays = [this.img, this.txt];
		that.addChild(this.img);
		that.addChild(this.txt);
		return this.boxBody;
	}
	public updateText(that, n = 1, callback: Function = null) {
		//n--击打次数
		let hitText = new egret.BitmapText();
		hitText.font = this.font;
		hitText.text = n > this.num ? this.num + '' : n + '';
		let ran = 90 * Math.random() - 45;
		hitText.x = this.img.x + ran;
		hitText.y = this.img.y - 80;
		that.addChild(hitText);
		egret.Tween.removeTweens(this.img);
		egret.Tween.get(this.img).to({ y: this.img.y - 10 }, 20).to({ y: this.img.y }, 20);
		egret.Tween.get(hitText).to({ scaleX: 1.2, scaleY: 1.2, y: hitText.y - 80 }, 500).to({ alpha: 0.5 }, 200).call(() => {
			hitText.parent && hitText.parent.removeChild(hitText);
		});
		if (this.num > n) {
			this.num -= n;
			this.txt.text = this.num + '';
		} else {
			this.isRemoved = true;
			that.world.removeBody(this.boxBody);
			//销毁
			this.img.parent && this.img.parent.removeChild(this.img);
			this.txt.parent && this.txt.parent.removeChild(this.txt);
			//播放销毁的动画
			let g = this.type == 2 ? 1 : this.type;
			let gif = movieMaster.getGif('boom_' + g);
			let w = this.type == 5 ? 250 : 200;
			gif.x = this.img.x - w / 2;
			gif.y = this.img.y - w / 2;

			that.addChild(gif);
			gif.gotoAndPlay(1, 1);
			gif.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
				gif.parent && gif.parent.removeChild(gif);
			}, this);

			that.conTimes.num++;
			if (that.conTimes.num > 2) {
				let con = new egret.BitmapText();
				con.font = this.font;
				con.text = 'X' + that.conTimes.num;
				con.x = this.img.x + 50;
				con.y = this.img.y - 50;
				con.anchorOffsetX = con.width / 2;
				con.anchorOffsetY = con.height / 2;
				con.scaleX = 0;
				con.scaleY = 0;
				that.addChild(con);
				egret.Tween.get(con).to({ scaleX: 1.5, scaleY: 1.5 }, 500).wait(1000).to({ alpha: 0 }, 200).call(() => {
					con.parent && con.parent.removeChild(con);
				});
			}
			let res = {};//被销毁的对象，分数之类的信息
			if (this.type == 5) {
				//是炸弹 判断被炸毁的区域
				let d = that.adaptParams.itemWidth / that.factor;
				for (let i = 0, len = that.gridArr.length; i < len; i++) {
					let item = that.gridArr[i];
					let dx = Math.floor(Math.abs(item.boxBody.position[0] - this.boxBody.position[0]) * 100) / 100;
					let dy = Math.floor(Math.abs(item.boxBody.position[1] - this.boxBody.position[1]) * 100) / 100;
					if (item.boxBody.id != this.boxBody.id && (dx <= d && dy <= d)) {
						console.log('boom', item.type)
						if (item.type == 3) {
							//精灵
							if (!item.isRemoved) {
								that.shootPoint.beeNum++;
								let nx = item.boxBody.position[0];
								item.updateText(that, () => {
									let b = new beeCom();
									b.createBody(that, nx);
									that.beeArr.push(b);
								});
							}

						} else if (item.type == 4) {
							//星星
						} else if (!item.isRemoved) {
							console.log(55555)
							item.updateText(that, item.num, callback);
						}

					}
				}
			}
			callback && callback();
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
window['gridCom'] = gridCom