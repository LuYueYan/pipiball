
class runningScene extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Image;
	public scoreText: eui.BitmapLabel;
	public scoreProccess: eui.Group;
	public levelText: eui.BitmapLabel;
	public star_1: eui.Image;
	public star_2: eui.Image;
	public star_3: eui.Image;
	public amountText: eui.BitmapLabel;
	public amountPro: eui.Image;
	public hero: eui.Image;
	public hammer: eui.Group;
	public hammer_img: eui.Image;
	public hammer_text: eui.Label;
	public hammer_add: eui.Image;
	public hammer_num: eui.BitmapLabel;
	public hat: eui.Group;
	public hat_img: eui.Image;
	public hat_text: eui.Label;
	public hat_add: eui.Image;
	public hat_num: eui.BitmapLabel;
	public lamp: eui.Group;
	public lamp_img: eui.Image;
	public lamp_text: eui.Label;
	public lamp_add: eui.Image;
	public lamp_num: eui.BitmapLabel;
	public bulletImg: eui.Image;
	public bulletNum: eui.BitmapLabel;
	public rayGroup: eui.Group;
	public gridGroup: eui.Group;




	public arcPro: egret.Shape = new egret.Shape();//弧形进度条
	public world: p2.World;
	public factor: number = 50;
	public bee: p2.Body;
	public currentTimer = egret.getTimer();
	public ceilArr = [];

	public adaptParams = {
		gridAreaTop: 195 + 9,//格子区域距离屏幕顶部距离
		gridAreaLeft: 30 + 9,//格子区域距离屏幕左侧距离
		itemWidth: 96//格子尺寸
	};
	public worldSpeed = 1000;//世界运行速度

	public ballSpeed = 800;//物体的匀速

	public gridArr: Array<any> = [];//障碍物存放数组
	public beeArr: Array<beeCom> = [];//球球shuzu
	public shooting = false;//是否在射击进行中
	public levelInfo;
	public myData = {
		beeNum: 5,//初始炮弹数量
		amount: 0,//消灭的方块数量
		score: 0,//分数
		reborn: 0,//复活次数
		gold: 0,//获得的金币数量
		star: 0,//星星数量
		line: 0
	};
	public tooling = null;//正在使用的道具名称
	public lampShow;//使用红绿灯道具时页面上方出现的红绿灯
	public hammerShow;//使用锥子道具时页面暗色背景
	public chooseTool = { glass: false, bullet: false };//开局道具
	public shootPoint = { bx: 375, by: 1034, ex: 0, ey: 0, floor: false, beeNum: 0, speedy: 3 };
	public prepare = false;//开局准备好么有
	//发射起点/目标点坐标/ 每次发射后是否有球落地/目前屁屁球数量（还没掉落到地的也算）//在地面上上时的速度
	public constructor(level, myData: any = {}, tool = { glass: false, bullet: false }) {
		super();
		console.log(level)
		this.levelInfo = userDataMaster.levelArr[level - 1];
		if (myData && myData.beeNum) {
			this.myData = myData;
		}
		this.chooseTool = tool;
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		if (this.bgImg) {
			this.init()
		} else {
			this.addEventListener(egret.Event.COMPLETE, this.init, this)
		}
	}
	public init() {
		let that = this;

		this.levelText.text = this.levelInfo.level + '';
		this.bulletImg.texture = RES.getRes(userDataMaster.bulletArr[userDataMaster.bulletIndex].img + '_png');
		this.bulletNum.text = 'X' + this.myData.beeNum;
		this.amountText.text = this.myData.amount + '/' + this.levelInfo.amount;
		this.bgImg.height = this.stage.stageHeight;
		//创建world
		this.world = new p2.World();
		this.world.sleepMode = p2.World.BODY_SLEEPING;//睡眠策略，提高性能
		this.world.gravity = [0, -10];
		this.world.defaultContactMaterial.restitution = 1;//全局弹性系数
		that.createCeil();
		for (let i = 3; i > 0; i--) {
			that.createGrids(i)
		}

		for (let i = 1; i <= that.myData.star; i++) {
			that['star_' + i].texture = RES.getRes('img_star_b1_png');
		}
		that.scoreProccess.addChildAt(that.arcPro, 2);
		that.scoreText.text = that.myData.score + '';
		that.changeGraphics();
		that.toolState();
		that.initBee();
		that.world.on("beginContact", this.onBeginContact, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		let t = 100;
		if (that.chooseTool.bullet) {
			//使用但腰痛道具
			setTimeout(function () {
				let gif = movieMaster.getGif('cartridge');
				gif.anchorOffsetX=410/2;
				gif.anchorOffsetY=370/2;
				gif.x = 375;
				gif.y = 400;
				that.addChild(gif);
				gif.gotoAndPlay(1, 1);
				gif.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
					console.log(662222)
					for (let i = 0, len = 5; i < len; i++) {
						setTimeout(function () {
							let bee = new beeCom();
							bee.createBody(that, 7.5, that.getPosition(600));
							bee.boxBody.velocity[1] = -20;
							that.beeArr.push(bee);
							that.shootPoint.beeNum++;
							that.myData.beeNum++;
							that.bulletNum.text = 'X' + that.myData.beeNum;
							console.log(6436)
							if (i == len - 1) {
								egret.Tween.get(gif).to({ scaleX: 0, scaleY: 0 }, 1000).call(() => {
									gif.parent && gif.parent.removeChild(gif);
								});
							}
						}, 100 * i);
					}

				}, this);
			}, t);
			t += 3000;
		}
		if (that.chooseTool.glass) {
			//使用弹跳视野道具

			setTimeout(function () {

			}, t);
			t += 2000;
		}
		setTimeout(function () {
			that.prepare = true;
			that.updateBee();
			console.log(78777)
			that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that)
			that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that)
			that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
		}, t);

		platform.onShow(() => {
			that.currentTimer = egret.getTimer();
		})
	}
	public initBee() {
		let that = this;
		for (let i = 0, len = that.myData.beeNum; i < len; i++) {
			let bee = new beeCom();
			bee.createBody(that);
			that.beeArr.push(bee);
			that.shootPoint.beeNum++;
		}
		that.updateBee()
	}
	public toolState() {
		//下方道具栏
		let that = this;
		let tool = ['hammer', 'hat', 'lamp'];
		for (let i = 0; i < tool.length; i++) {
			let item = userDataMaster.tool[tool[i]];
			if (userDataMaster.level + 1 >= item.level) {
				if (item.num > 0) {
					that[tool[i] + '_add'].visible = false;
					that[tool[i] + '_num'].visible = true;
					that[tool[i] + '_num'].text = 'X' + item.num;
				}
				if (!item.unlock) {
					//首次解锁
					userDataMaster.tool[tool[i]].unlock = true;
					//引导内容

					//
				}
				that[tool[i]].addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.judgeTool(tool[i]) }, this);
			} else {
				//未达到解锁关卡
				that[tool[i] + '_img'].texture = RES.getRes('icn_lock_png');
				that[tool[i] + '_text'].visible = true;
				that[tool[i] + '_add'].visible = false;
			}
		}

	}
	public judgeTool(type) {
		//选择使用道具
		console.log(type, userDataMaster.tool[type]);
		let that = this;
		if (userDataMaster.tool[type].num > 0) {
			//使用道具
			that.tooling = type;
			userDataMaster.tool[type].num--;
			that[type + '_add'].visible = true;
			that[type + '_num'].visible = false;

			if (type == 'hammer') {
				//锤子
				let rect = new eui.Rect(that.stage.stageWidth, that.stage.stageHeight, 0x000000);
				rect.alpha = 0.7;
				that.addChildAt(rect, 9);
				that.hammerShow = rect;

			} else if (type == 'hat') {
				//攻击加倍
			} else if (type == 'lamp') {
				// 暂停一次下落
				let lamp = that.createBitmapByName('img_prop_e1');
				lamp.x = (that.stage.stageWidth - lamp.width) / 2;
				lamp.y = 195;
				that.addChild(lamp);
				that.lampShow = lamp;
			}
		} else {
			///看视频获取
			AdMaster.useVideo(() => {
				suc();
			}, () => {
				CallbackMaster.openShare(() => {
					suc();
				})
			});
		}
		function suc() {
			userDataMaster.tool[type].num++;
			that[type + '_add'].visible = false;
			that[type + '_num'].visible = true;
			that[type + '_num'].text = 'X' + userDataMaster.tool[type].num;
		}
	}
	public createCeil() {
		let arr = [
			{ x: 682, y: 489, width: 0.4, height: 20 },//右边
			{ x: -10, y: 489, width: 0.4, height: 20 },//左边
			{ x: 345, y: -10, width: 13.8, height: 0.4 },//上面
			{ x: 345, y: 945, width: 13.8, height: 0.4 }//下面   地面位置 935-955
		];
		for (let i = 0, len = arr.length; i < len; i++) {
			let item = arr[i];
			var planeBody: p2.Body = new p2.Body({ mass: 1, position: [this.getPosition(item.x, 2), this.getPosition(item.y)], type: p2.Body.KINEMATIC });//创建墙壁
			var shape: p2.Shape = new p2.Box({ width: item.width, height: item.height });
			shape.collisionGroup = 6;
			shape.collisionMask = 5;
			planeBody.addShape(shape);//给这个刚体添加形状
			planeBody.displays = [];//与每个形状对应的显示对象
			this.world.addBody(planeBody);
			this.ceilArr.push(planeBody)
		}
	}
	public getPosition(k, type = 1) {
		//px坐标转化为world坐标  
		// type=1时 k为相对格子区域的y坐标
		//type=2时 k为相对格子区域的x坐标
		let adaptParams = this.adaptParams;
		let p = 0;
		if (type == 1) {
			p = (this.stage.stageHeight - (adaptParams.gridAreaTop + k)) / this.factor;
		} else {
			p = (adaptParams.gridAreaLeft + k) / this.factor;
		}
		return p;
	}
	public updateProccess(num = 0) {
		//更新关卡进度
		let that = this;
		if (num == 0) {
			//击掉方块
			that.myData.amount++;
			that.amountText.text = that.myData.amount + '/' + that.levelInfo.amount;
			that.amountPro.width = that.myData.amount / that.levelInfo.amount * 100;
			if (that.myData.amount >= that.levelInfo.amount) {
				//通关成功
				console.log('level up')
			}
		} else {
			//得分
			that.myData.score += num;
			if (that.myData.star < 1 && that.myData.score >= that.levelInfo.score * 0.34) {
				that.star_1.texture = RES.getRes('img_star_b1_png');
				that.myData.star = 1;
			}
			if (that.myData.star < 2 && that.myData.score >= that.levelInfo.score * 0.67) {
				that.star_2.texture = RES.getRes('img_star_b1_png');
				that.myData.star = 2;
			}
			if (that.myData.star < 3 && that.myData.score >= that.levelInfo.score) {
				that.star_3.texture = RES.getRes('img_star_b1_png');
				that.myData.star = 3;
			}
			that.scoreText.text = that.myData.score + '';
			that.changeGraphics();
		}
	}
	public createGrids(row = 1) {
		//每次生成一行 row--生成的位置为第几行（从上往下0行开始） 默认第一行
		let that = this;
		if (that.myData.amount >= that.levelInfo.amount) {
			//通关~~~~
			that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
			that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that)
			that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that)
			that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
			sceneMaster.openModal(new levelUpModal(that.levelInfo.level, that.myData))
		}
		if (that.levelInfo.existAmount >= that.levelInfo.amount) {
			//本关卡数量已足够
			return;
		}
		that.myData.line++;
		for (let col = 0; col < 7; col++) {
			let g;
			let ran = Math.random();
			if (ran > 0.7) {
				continue;
			}
			if (ran < 0.5 && (that.levelInfo.existAmount < that.levelInfo.amount)) {
				let num = Math.floor(1 + that.levelInfo.level + that.myData.line);
				g = new gridCom(num);
				that.levelInfo.existAmount++;
			} else if (ran < 0.6) {
				g = new ballCom();
			} else if (ran < 0.7) {
				g = new starCom();
			}
			let x = col * that.adaptParams.itemWidth + that.adaptParams.itemWidth / 2;
			let y = row * that.adaptParams.itemWidth + that.adaptParams.itemWidth / 2;
			that.world.addBody(g.createBody(that.getPosition(x, 2), that.getPosition(y), that));
			that.gridArr.push(g);
		}
	}
	public touchBeginFun(e: egret.TouchEvent) {
		if (this.shooting) {
			return;
		}
		let that = this;
		if (that.hammerShow && that.tooling == 'hammer') {
			//使用道具锥子中
			that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that)
			that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
			for (let i = 0, len = this.gridArr.length; i < len; i++) {
				let hit = that.gridArr[i].img.hitTestPoint(e.stageX, e.stageY);
				if (hit) {
					if (that.gridArr[i].type == 3 || that.gridArr[i] == 4) {
						//球或者精灵
						that.gridArr[i].updateText(that, () => {
							if (that.gridArr[i].img.parent && that.gridArr[i].type == 4) {
								that.world.removeBody(that.gridArr[i].boxBody);
								that.gridArr[i].img.parent.removeChild(that.gridArr[i].img);
							}
							that.gridArr.splice(i, 1);
							suc();
						})
					} else {
						that.gridArr[i].updateText(that, that.gridArr[i].num, () => {
							that.updateProccess();
							suc();
						})
					}

					break;
				}
			}
		} else {
			//正常发射
			this.touchMoveFun(e);
		}
		function suc() {
			that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that)
			that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
			that.tooling = null;
			that.hammerShow.parent && that.hammerShow.parent.removeChild(that.hammerShow);
		}
	}
	public useTool(target) {

	}
	public touchMoveFun(e: egret.TouchEvent) {
		if (this.shooting) {
			return;
		}
		this.shootPoint.ex = e.stageX;
		this.shootPoint.ey = e.stageY;
		this.shootPoint.speedy = 1;
		this.rayGroup.removeChildren();
		this.testRay()
	}

	public touchEndFun(e: egret.TouchEvent) {
		let that = this;
		if (this.shooting) {
			return;
		}
		this.shootPoint.speedy = 3;
		this.shootPoint.ex = e.stageX;
		this.shootPoint.ey = e.stageY;
		let dx = that.shootPoint.ex - that.shootPoint.bx;
		let dy = that.shootPoint.ey - that.shootPoint.by;
		// let s=-dy/Math.sqrt(dy*dy+dx*dx)*0.8;
        //  console.log(s)
		let startX = that.shootPoint.bx / that.factor;
		let startY = (that.stage.stageHeight - that.shootPoint.by) / that.factor;
		this.rayGroup.removeChildren();
		this.hero.rotation = 0;
		setTimeout(function () {
			that.shooting = true;
			console.log('shoot', that.shooting)
		}, 100);

		for (let i = 0; i < that.beeArr.length; i++) {
			let bee = that.beeArr[i].boxBody;
			setTimeout(function () {
				egret.Tween.removeTweens(bee.displays[0]);
				bee.position[0] = startX;
				bee.position[1] = startY;
				bee.velocity = [dx / that.factor, -dy / that.factor];
				bee.gravityScale = 0;
				that.updateSpeed(bee);
			}, 150 * i);
		}
	}
	public testRay() {
		let that = this;
		let bx = that.shootPoint.bx / that.factor;
		let by = (that.stage.stageHeight - that.shootPoint.by) / that.factor;
		let ex = that.shootPoint.ex / that.factor;
		let ey = (that.stage.stageHeight - that.shootPoint.ey) / that.factor;
		let dx = ex - bx;
		let dy = ey - by;//ey<by的
		var ray = new p2.Ray({
			from: [bx, by],
			to: [ex + (25 / dy * dx), ey + 25],
			mode: p2.Ray.CLOSEST,
			checkCollisionResponse: true,
			skipBackfaces: false,
			collisionGroup: 1,
			collisionMask: 4
		});
		that.hero.rotation = 350;
		var result = new p2.RaycastResult();
		// console.log(result)
		that.world.raycast(result, ray);
		if (result && result.body) {
			that.createLine(result, ray)
			that.testRay2(result, ray)

		}
	}
	public testRay2(res, r, ray_3 = false) {
		let that = this;
		let p: number[] = [0, 0];//碰撞点
		res.getHitPoint(p, r);
		let bx = p[0];
		let by = p[1];

		let ex = 0;
		let ey = 0;

		if (Math.abs(res.normal[0]) < 1e-15) {
			//垂直方向
			ex = bx * 2 - r.from[0];
			ey = r.from[1];

		} else if (Math.abs(res.normal[1]) < 1e-15) {
			//水平方向
			ex = r.from[0];
			ey = by * 2 - r.from[1];

		} else {
			let k = res.normal[1] / res.normal[0];
			let a = (r.from[0] - p[0] - k * k * r.from[0] + k * k * p[0] + 2 * k * r.from[1] - 2 * k * p[1]) / (k * k + 1);
			let b = k * r.from[0] - k * r.from[1] + a * k - p[0] + p[1];
			a += p[0];
			b += p[1];
			ex = a;
			ey = b;
		}

		let dx = ex - bx;
		let dy = ey - by;//ey<by的

		if ((ex > bx && dx * dy >= 0) || (ex < bx && dx * dy <= 0)) {
			//上
			bx = bx + (0.1 / dy * dx);
			by = by + 0.1;
			ex = ex + (25 / dy * dx);
			ey = ey + 25;
		} else {
			bx = bx - (0.1 / dy * dx);
			by = by - 0.1;
			ex = ex - (25 / dy * dx);
			ey = ey - 25;
		}
		var ray = new p2.Ray({
			from: [bx, by],
			to: [ex, ey],
			mode: p2.Ray.CLOSEST,
			checkCollisionResponse: true,
			skipBackfaces: false,
			collisionGroup: 1,
			collisionMask: 4
		});
		that.hero.rotation = 350;
		var result = new p2.RaycastResult();

		that.world.raycast(result, ray);
		if (result && result.body) {

			if (!ray_3 && ray.to[1] > 7) {
				that.testRay2(result, ray, true)
			}

			that.createLine(result, ray)
		}
	}
	public createLine(result, ray) {
		let that = this;
		// this.rayGroup.removeChildren();
		let bx = that.shootPoint.bx / that.factor;
		let by = (that.stage.stageHeight - that.shootPoint.by) / that.factor;
		let distance = result.getHitDistance(ray);
		let dx = ray.to[0] - ray.from[0];
		let dy = ray.to[1] - ray.from[1];
		for (let i = 0; i < distance - 1; i++) {
			let point = that.createBitmapByName('point');
			point.width = 10;
			point.height = 10;
			point.anchorOffsetX = point.width / 2;
			point.anchorOffsetY = point.height / 2;
			point.x = (ray.from[0] + dx / ray.length * i) * that.factor - that.rayGroup.x;
			point.y = that.stage.stageHeight - (ray.from[1] + dy / ray.length * i) * that.factor - that.rayGroup.y;
			this.rayGroup.addChild(point)
		}
		let point = that.createBitmapByName('arrow');
		point.width = 10;
		point.height = 10;
		point.anchorOffsetX = point.width / 2;
		point.anchorOffsetY = point.height / 2;
		point.x = (ray.from[0] + dx / ray.length * (distance - 0.5)) * that.factor - that.rayGroup.x;
		point.y = that.stage.stageHeight - (ray.from[1] + dy / ray.length * (distance - 0.5)) * that.factor - that.rayGroup.y;
		this.rayGroup.addChild(point);
	}
	public onBeginContact(event): void {
		let that = this;
		var bodyA: p2.Body = event.bodyA;
		var bodyB: p2.Body = event.bodyB;
		let judge1 = bodyA.shapes[0].collisionMask == 7 && bodyB.type == p2.Body.KINEMATIC;
		let judge2 = bodyB.shapes[0].collisionMask == 7 && bodyA.type == p2.Body.KINEMATIC;
		let judge3 = bodyA.shapes[0].collisionMask == 7 && bodyB.shapes[0].collisionMask == 7;
		if (judge1 || judge2 || judge3) {
			//冰块
			if (bodyA.velocity[0]) {
				bodyA.velocity[0] = -bodyA.velocity[0];

			}
			if (bodyB.velocity[0]) {
				bodyB.velocity[0] = -bodyB.velocity[0];
			}
			return;
		}
		for (let i = 0; i < that.beeArr.length; i++) {
			let bee = that.beeArr[i].boxBody;
			if (bodyA.id == bee.id || bodyB.id == bee.id) {
				// console.log("on target sensor BeginContact bodyA.id:" + bodyA.id + ",bodyB.id:" + bodyB.id);

				var hittedBody: p2.Body;//与playerBodyId碰撞的刚体
				if (bodyA.id == bee.id) {
					hittedBody = bodyB;
				} else if (bodyB.id == bee.id) {
					hittedBody = bodyA;
				}
				if (hittedBody.id == that.ceilArr[0].id || hittedBody.id == that.ceilArr[1].id || hittedBody.id == that.ceilArr[2].id) {
					//   是墙壁
					bee.angle = 0;
					return;
				}
				if (hittedBody.id == that.ceilArr[3].id) {
					//   是地面
					bee.angle = 0;
					bee.fixedRotation = true;//防止旋转
					bee.gravityScale = 1;
					bee.velocity = [0, -that.shootPoint.speedy];

					return;
				}
				for (let k = 0; k < that.gridArr.length; k++) {
					if (that.gridArr[k].boxBody.id == hittedBody.id) {
						if (that.gridArr[k].type == 3) {
							//是球
							if (!that.gridArr[k].isRemoved) {
								that.shootPoint.beeNum++;
								let nx = that.gridArr[k].boxBody.position[0];
								that.gridArr[k].updateText(that, () => {
									let b = new beeCom();
									b.createBody(that, nx);
									that.beeArr.push(b);
									that.myData.beeNum++;
									that.bulletNum.text = 'X' + that.myData.beeNum;
									// console.log('hit')
								});
							}
						} else {
							if (that.gridArr[k].type == 4) {
								//是星星
								that.beeArr[i].powerUp(2);
								that.gridArr[k].updateText(that);
							} else if (!that.gridArr[k].isRemoved) {
								//是方块
								let num = that.beeArr[i].power > that.gridArr[k].num ? that.gridArr[k].num : that.beeArr[i].power;
								that.updateProccess(num);
								let power = that.beeArr[i].power;
								if (that.tooling == 'hat') {
									power *= 2;
								}
								that.gridArr[k].updateText(that, power, (res) => {
									//已被击碎  如果是炸弹，分数怎么算？？？ res的形式未定
									that.updateProccess();
								});
							}
						}
						break;
					}
				}
				// if (hittedBody.shapes[0].sensor == true) {//碰到了传感器，这里不需要计算爆炸位置，只作为传感器就好 
				// 	//碰撞到了传感器，不是普通dynamic刚体
				// 	console.log("碰撞到了传感器，不是普通dynamic刚体,id:" + hittedBody.id);
				// } else {
				// 	this.getPlayerContactPos();  //这里是计算和其他Body.type=dynamic的刚体碰撞的位置
				// }
				break;
			}
		}
	}
	// 获得player碰撞位置
	private getPlayerContactPos(): void {
		// for(var i = 0;i < this.world.narrowphase.contactEquations.length;i++) {
		//     var c: p2.ContactEquation = this.world.narrowphase.contactEquations;
		//     if(c.bodyA.id == this.bee.id || c.bodyB.id == this.bee.id) {

		//         var ptA: Array<number> = c.contactPointA;//pointA delta向量，上次使用contactPointB貌似没用对，用contactPointA就对了
		//         var contactPos: Array<number> = [c.bodyA.position[0] + ptA[0],c.bodyA.position[1] + ptA[1]];//在BodyA位置加上delta向量，这个就是碰撞发生的p2位置
		//         // var dispX: number = jbP2.P2Space.convertP2ValueToEgret(contactPos[0]);//转换到egret世界的位置
		//         // var dispY: number = jbP2.P2Space.convertP2Y_To_EgretY(contactPos[1]);//转换到egret世界的位置

		//         // //drawing the point to the graphics
		//         // this.contactDrawing.graphics.lineStyle(1,0);
		//         // this.contactDrawing.graphics.drawCircle(dispX,dispY,15);
		//         // this.contactDrawing.graphics.endFill();
		//     }
		// }
	}
	private onEndContact(event): void {
		var bodyA: p2.Body = event.bodyA;
		var bodyB: p2.Body = event.bodyB;

		if (bodyA.id == 5 || bodyB.id == 5) {
			// console.log("on target sensor EndContact bodyA.id:" + bodyA.id + ",bodyB.id:" + bodyB.id);
		}
	}
	private onEnterFrame() {
		let that = this;
		let dt = egret.getTimer() - this.currentTimer;
		if (dt < 10) {
			return;
		}
		if (dt > 1000) {
			return;
		}
		this.world.step(dt / this.worldSpeed);//使物理系统向前经过一定时间，也就是使世界运行
		this.currentTimer = egret.getTimer();
		var stageHeight: number = egret.MainContext.instance.stage.stageHeight;//获取舞台高度？？？？
		var l = this.world.bodies.length;//所有body的长度
		for (var i: number = 0; i < l; i++) {
			var boxBody: p2.Body = this.world.bodies[i];
			var len = boxBody.displays.length;
			for (let j = 0; j < len; j++) {
				var box: egret.DisplayObject = boxBody.displays[j];
				if (box) {
					if (j == 0) {
						box.anchorOffsetX = boxBody.displays[0].width / 2;
					}
					box.x = boxBody.position[0] * this.factor;
					box.y = stageHeight - boxBody.position[1] * this.factor;//坐标系不一样，所以要转换
					// box.rotation = 360 - (boxBody.angle + boxBody.shapes[j].angle) * 180 / Math.PI;//旋转
					box.rotation = boxBody.angle * 180 / Math.PI;//旋转
				}
			}
		}
		let num = 0;
		for (let i = 0, len = this.beeArr.length; i < len; i++) {
			let bee = this.beeArr[i].boxBody;
			if (bee.position[1] <= that.getPosition(856)) {
				num++;
				if (bee.gravityScale == 0) {
					bee.velocity[0] = 0;
					bee.angle = 0;
					bee.displays[0].rotation = 0;
					bee.gravityScale = 1;
					this.beeArr[i].powerUp(1);
					if (!that.shootPoint.floor) {
						//第一个球落地时更新下次发射点
						that.shootPoint.floor = true;
						that.shootPoint.bx = bee.position[0] * that.factor;
						let nx = that.shootPoint.bx + that.hero.anchorOffsetX - that.hero.width / 2;
						let dt = Math.abs(that.hero.x - nx);
						egret.Tween.get(that.hero).to({ x: nx }, dt);
					}
				}
				//全部落地了
				if ((i == len - 1) && num == len && that.shooting && that.shootPoint.beeNum == len) {
					console.log('enter', that.shooting)
					that.shooting = false;
					that.shootPoint.floor = false;
					if (that.tooling != 'lamp') {
						that.tooling = null;
					}
					setTimeout(function () {
						that.updateGrids();
						that.updateBee()
					}, 100);
				}
			} else {
				if (bee.gravityScale == 0) {
					this.updateSpeed(bee);
				} else if (that.prepare) {
					bee.velocity[1] = -that.shootPoint.speedy;
					this.beeArr[i].powerUp(1);
				}
			}
		}

		for (let len = that.gridArr.length, i = len - 1; i >= 0; i--) {
			if (that.gridArr[i].type == 6 && Math.abs(that.gridArr[i].boxBody.velocity[0]) > 0) {
				let k = that.gridArr[i].boxBody.velocity[0] > 0 ? 0.5 : -0.5;
				that.gridArr[i].boxBody.velocity[0] = k;
			}
		}
	}
	public updateBee() {
		//更新球的水平坐标
		let that = this;
		let bx = that.shootPoint.bx / that.factor;
		let direction = 0.8;
		let dx = that.hero.width / 2 / that.factor;
		if (bx > 7.5) {
			direction = -direction;
			dx = -dx;
		}
		let n = 0;
		for (let i = 0, len = that.beeArr.length; i < len; i++) {
			that.beeArr[i].boxBody.position[0] = i * direction + bx + dx;
			if ((that.beeArr[i].boxBody.position[0] > 13) || (that.beeArr[i].boxBody.position[0] < 2)) {
				that.beeArr[i].boxBody.position[0] = (i % n) * direction + bx + dx / 2;

			} else {
				n = i;
			}
		}
	}
	public updateGrids() {
		//更新方块的位置以及产生新方块
		let that = this;
		console.log(7657, that.tooling, that.lampShow)
		if (that.tooling == 'lamp' && that.lampShow) {
			//使用红绿灯道具中
			that.tooling = null;
			setTimeout(function () {
				that.lampShow.parent && that.lampShow.parent.removeChild(that.lampShow);
				that.lampShow = null;
			}, 500);
			return;
		}
		for (let len = that.gridArr.length, i = len - 1; i >= 0; i--) {
			if (that.gridArr[i].isRemoved) {
				if (that.gridArr[i].img.parent && that.gridArr[i].type == 4) {
					that.world.removeBody(that.gridArr[i].boxBody);
					that.gridArr[i].img.parent.removeChild(that.gridArr[i].img);
				}
				that.gridArr.splice(i, 1);
				continue;
			}
			let y = that.gridArr[i].boxBody.position[1];
			if (y <= that.getPosition(that.adaptParams.itemWidth * 7.5)) {
				//游戏结束
				console.log('gameOver');
				that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
				that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that)
				that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that)
				that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
				if (that.myData.reborn >= 1) {
					//已复活
					sceneMaster.openModal(new gameOver(that.levelInfo.level, that.myData))
				} else {
					let reborn = new rebornModal(that.levelInfo.level, that.myData);
					sceneMaster.openModal(reborn);
					reborn.rebornBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.rebornFun, this);
				}
				return;
			} else if (y <= that.getPosition(that.adaptParams.itemWidth * 6.5)) {
				//危险警告
				console.log('danger');
			}
			that.gridArr[i].boxBody.position[1] = y - that.adaptParams.itemWidth / that.factor;
		}
		that.createGrids();

	}
	public rebornFun() {
		//复活
		let that = this;
		AdMaster.useVideo(() => {
			suc();
		}, () => {
			CallbackMaster.openShare(() => {
				suc();
			})
		});
		function suc() {
			that.myData.reborn++;
			sceneMaster.closeModal();
			that.currentTimer = egret.getTimer();
			that.addEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
			for (let len = that.gridArr.length, i = len - 1; i >= 0; i--) {
				if (that.gridArr[i].isRemoved) {
					if (that.gridArr[i].img.parent && that.gridArr[i].type == 4) {
						that.world.removeBody(that.gridArr[i].boxBody);
						that.gridArr[i].img.parent.removeChild(that.gridArr[i].img);
					}
					that.gridArr.splice(i, 1);
					continue;
				}
				let y = that.gridArr[i].boxBody.position[1];
				that.gridArr[i].boxBody.position[1] = y + that.adaptParams.itemWidth / that.factor * 3;
			}
			that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that)
			that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that)
			that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
			// sceneMaster.changeScene(new runningScene(that.levelInfo.level, that.myData, that.chooseTool));
		}
	}
	public updateSpeed(bee) {
		//更新速度，保持匀速运动
		let velocity = bee.velocity;
		if (Math.abs(velocity[1]) < 0.5) {
			console.log('垂直速度为', velocity[1])
			velocity[1] = -0.5;
		}
		let k = Math.sqrt(this.ballSpeed / (velocity[0] * velocity[0] + velocity[1] * velocity[1]));
		bee.velocity = [k * velocity[0], k * velocity[1]];

		let a = Math.atan(velocity[1] / velocity[0]);
		let b;
		if (a < 0) {
			a = Math.PI * 2 + a;
		}
		a = -(a - Math.PI / 2);
		if (velocity[0] < 0) {
			a = a - Math.PI;
		}
		bee.angle = a;
	}
	private createBitmapByName(name: string): egret.Bitmap {
		var result: egret.Bitmap = new egret.Bitmap();
		var texture: egret.Texture = RES.getRes(name + '_png');
		result.texture = texture;
		return result;

	}
	public changeGraphics() {
		//percent 进度百分比
		let percent = this.myData.score / this.levelInfo.score;
		percent = percent > 1 ? 1 : percent;
		let angle = percent * 2 * Math.PI * 3 / 4 + Math.PI * 0.55;
		this.arcPro.graphics.clear();
		this.arcPro.graphics.lineStyle(14, 0xffdf5e, 1);
		this.arcPro.graphics.drawArc(60, 60, 50, Math.PI * 0.55, angle, false);
		this.arcPro.graphics.endFill();
	}
}