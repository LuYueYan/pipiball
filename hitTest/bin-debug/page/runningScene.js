var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var runningScene = (function (_super) {
    __extends(runningScene, _super);
    //发射起点/目标点坐标/ 每次发射后是否有球落地/目前屁屁球数量（还没掉落到地的也算）//在地面上上时的速度
    function runningScene(level, myData, tool) {
        if (myData === void 0) { myData = {}; }
        if (tool === void 0) { tool = { glass: false, bullet: false }; }
        var _this = _super.call(this) || this;
        _this.arcPro = new egret.Shape(); //弧形进度条
        _this.factor = 50;
        _this.currentTimer = egret.getTimer();
        _this.ceilArr = [];
        _this.adaptParams = {
            gridAreaTop: 186 + 9,
            gridAreaLeft: 30 + 9,
            itemWidth: 96 //格子尺寸
        };
        _this.worldSpeed = 1000; //世界运行速度
        _this.ballSpeed = 800; //物体的匀速
        _this.gridArr = []; //障碍物存放数组
        _this.beeArr = []; //球球shuzu
        _this.shooting = false; //是否在射击进行中
        _this.myData = {
            beeNum: 5,
            amount: 0,
            score: 0,
            reborn: 0,
            gold: 0,
            star: 0 //星星数量
        };
        _this.chooseTool = { glass: false, bullet: false }; //开局道具
        _this.shootPoint = { bx: 375, by: 1034, ex: 0, ey: 0, floor: false, beeNum: 0, speedy: 3 };
        _this.levelInfo = userDataMaster.levelArr[level - 1];
        if (myData && myData.beeNum) {
            _this.myData = myData;
        }
        _this.chooseTool = tool;
        return _this;
    }
    runningScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    runningScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.bgImg) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    runningScene.prototype.init = function () {
        var that = this;
        this.levelText.text = this.levelInfo.level + '';
        this.bulletImg.texture = RES.getRes(userDataMaster.bulletArr[userDataMaster.bulletIndex].img + '_png');
        this.bulletNum.text = 'X' + this.myData.beeNum;
        this.amountText.text = this.myData.amount + '/' + this.levelInfo.amount;
        this.bgImg.height = this.stage.stageHeight;
        //创建world
        this.world = new p2.World();
        this.world.sleepMode = p2.World.BODY_SLEEPING; //睡眠策略，提高性能
        this.world.gravity = [0, -10];
        this.world.defaultContactMaterial.restitution = 1; //全局弹性系数
        for (var i = 0, len = that.myData.beeNum; i < len; i++) {
            var bee = new beeCom();
            bee.createBody(that);
            that.beeArr.push(bee);
            that.shootPoint.beeNum++;
        }
        that.updateBee();
        that.createCeil();
        for (var i = 1; i <= 3; i++) {
            that.createGrids(i);
        }
        for (var i = 1; i <= that.myData.star; i++) {
            that['star_' + i].texture = RES.getRes('img_star_b1_png');
        }
        that.scoreProccess.addChildAt(that.arcPro, 2);
        that.scoreText.text = that.myData.score + '';
        that.changeGraphics();
        that.toolState();
        that.world.on("beginContact", this.onBeginContact, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, this);
        that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, this);
        that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, this);
        platform.onShow(function () {
            that.currentTimer = egret.getTimer();
        });
    };
    runningScene.prototype.toolState = function () {
        var that = this;
        var tool = ['hammer', 'hat', 'lamp'];
        var _loop_1 = function (i) {
            var item = userDataMaster.tool[tool[i]];
            if (item.level >= userDataMaster.level) {
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
                that[tool[i]].addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.judgeTool(tool[i]); }, this_1);
            }
            else {
                //未达到解锁关卡
                that[tool[i] + '_img'].texture = RES.getRes('icn_lock_png');
                that[tool[i] + '_text'].visible = true;
                that[tool[i] + '_add'].visible = false;
            }
        };
        var this_1 = this;
        for (var i = 0; i < tool.length; i++) {
            _loop_1(i);
        }
    };
    runningScene.prototype.judgeTool = function (type) {
        //选择使用道具
    };
    runningScene.prototype.createCeil = function () {
        var arr = [
            { x: 676.5, y: 489, width: 0.18, height: 20 },
            { x: -4.5, y: 489, width: 0.18, height: 20 },
            { x: 345, y: -4.5, width: 13.8, height: 0.18 },
            { x: 345, y: 945, width: 13.8, height: 0.4 } //下面   地面位置 935-955
        ];
        for (var i = 0, len = arr.length; i < len; i++) {
            var item = arr[i];
            var planeBody = new p2.Body({ mass: 1, position: [this.getPosition(item.x, 2), this.getPosition(item.y)], type: p2.Body.KINEMATIC }); //创建墙壁
            var shape = new p2.Box({ width: item.width, height: item.height });
            shape.collisionGroup = 6;
            shape.collisionMask = 5;
            planeBody.addShape(shape); //给这个刚体添加形状
            planeBody.displays = []; //与每个形状对应的显示对象
            this.world.addBody(planeBody);
            this.ceilArr.push(planeBody);
        }
    };
    runningScene.prototype.getPosition = function (k, type) {
        if (type === void 0) { type = 1; }
        //px坐标转化为world坐标  
        // type=1时 k为相对格子区域的y坐标
        //type=2时 k为相对格子区域的x坐标
        var adaptParams = this.adaptParams;
        var p = 0;
        if (type == 1) {
            p = (this.stage.stageHeight - (adaptParams.gridAreaTop + k)) / this.factor;
        }
        else {
            p = (adaptParams.gridAreaLeft + k) / this.factor;
        }
        return p;
    };
    runningScene.prototype.updateProccess = function (num) {
        if (num === void 0) { num = 0; }
        //更新关卡进度
        var that = this;
        if (num == 0) {
            //击掉方块
            that.myData.amount++;
            that.amountText.text = that.myData.amount + '/' + that.levelInfo.amount;
            that.amountPro.width = that.myData.amount / that.levelInfo.amount * 100;
            if (that.myData.amount >= that.levelInfo.amount) {
                //通关成功
                console.log('level up');
            }
        }
        else {
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
    };
    runningScene.prototype.createGrids = function (row) {
        if (row === void 0) { row = 1; }
        //每次生成一行 row--生成的位置为第几行（从上往下0行开始） 默认第一行
        var that = this;
        if (that.myData.amount >= that.levelInfo.amount) {
            //通关~~~~
            that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
            that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
            that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
            that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
            sceneMaster.openModal(new levelUpModal(that.levelInfo.level, that.myData));
        }
        if (that.levelInfo.existAmount >= that.levelInfo.amount) {
            //本关卡数量已足够
            return;
        }
        for (var col = 0; col < 7; col++) {
            var g = void 0;
            var ran = Math.random();
            if (ran > 0.4) {
                continue;
            }
            if (ran < 0.2 && (that.levelInfo.existAmount < that.levelInfo.amount)) {
                var num = Math.floor(1 + Math.random() * that.levelInfo.existAmount);
                g = new gridCom(num);
                that.levelInfo.existAmount++;
            }
            else if (ran < 0.3) {
                g = new ballCom();
            }
            else if (ran < 0.4) {
                g = new starCom();
            }
            var x = col * that.adaptParams.itemWidth + that.adaptParams.itemWidth / 2;
            var y = row * that.adaptParams.itemWidth + that.adaptParams.itemWidth / 2;
            that.world.addBody(g.createBody(that.getPosition(x, 2), that.getPosition(y), that));
            that.gridArr.push(g);
        }
    };
    runningScene.prototype.touchBeginFun = function (e) {
        if (this.shooting) {
            return;
        }
        if (0) {
            //发射状态
            this.touchMoveFun(e);
        }
        else {
            //使用道具
            var adaptParams = this.adaptParams;
            var x = (e.stageX - adaptParams.gridAreaLeft) / adaptParams.itemWidth;
            var y = (e.stageY - adaptParams.gridAreaTop) / adaptParams.itemWidth;
            if (x > 0 && x < 7 && y > 0 && y < 8) {
                var target = void 0;
                for (var i = 0, len = this.gridArr.length; i < len; i++) {
                    var img = this.gridArr[i].img;
                    if (Math.abs(e.stageX - img.x) <= img.width / 2 && Math.abs(e.stageY - img.y) <= img.height / 2) {
                        console.log('target', i);
                        target = this.gridArr[i];
                        break;
                    }
                }
                this.useTool(target);
            }
        }
    };
    runningScene.prototype.useTool = function (target) {
    };
    runningScene.prototype.touchMoveFun = function (e) {
        if (this.shooting) {
            return;
        }
        this.shootPoint.ex = e.stageX;
        this.shootPoint.ey = e.stageY;
        this.shootPoint.speedy = 1;
        this.testRay();
    };
    runningScene.prototype.touchEndFun = function (e) {
        var that = this;
        if (this.shooting) {
            return;
        }
        this.shootPoint.speedy = 3;
        this.shootPoint.ex = e.stageX;
        this.shootPoint.ey = e.stageY;
        var dx = that.shootPoint.ex - that.shootPoint.bx;
        var dy = that.shootPoint.ey - that.shootPoint.by;
        var startX = that.shootPoint.bx / that.factor;
        var startY = (that.stage.stageHeight - that.shootPoint.by) / that.factor;
        this.rayGroup.removeChildren();
        this.hero.rotation = 0;
        setTimeout(function () {
            that.shooting = true;
            console.log('shoot', that.shooting);
        }, 100);
        var _loop_2 = function (i) {
            var bee = that.beeArr[i].boxBody;
            setTimeout(function () {
                egret.Tween.removeTweens(bee.displays[0]);
                bee.position[0] = startX;
                bee.position[1] = startY;
                bee.velocity = [dx / that.factor, -dy / that.factor];
                bee.gravityScale = 0;
                that.updateSpeed(bee);
            }, 150 * i);
        };
        for (var i = 0; i < that.beeArr.length; i++) {
            _loop_2(i);
        }
    };
    runningScene.prototype.testRay = function () {
        var that = this;
        var bx = that.shootPoint.bx / that.factor;
        var by = (that.stage.stageHeight - that.shootPoint.by) / that.factor;
        var ex = that.shootPoint.ex / that.factor;
        var ey = (that.stage.stageHeight - that.shootPoint.ey) / that.factor;
        var dx = ex - bx;
        var dy = ey - by; //ey<by的
        var ray = new p2.Ray({
            from: [bx, by],
            to: [ex + (25 / dy * dx), ey + 25],
            mode: p2.Ray.CLOSEST,
            checkCollisionResponse: true,
            collisionGroup: 1,
            collisionMask: 4
        });
        that.hero.rotation = 350;
        var result = new p2.RaycastResult();
        that.world.raycast(result, ray);
        if (result && result.body) {
            that.createLine(result, ray);
        }
    };
    runningScene.prototype.createLine = function (result, ray) {
        var that = this;
        this.rayGroup.removeChildren();
        var bx = that.shootPoint.bx / that.factor;
        var by = (that.stage.stageHeight - that.shootPoint.by) / that.factor;
        var distance = result.getHitDistance(ray);
        var dx = ray.to[0] - ray.from[0];
        var dy = ray.to[1] - ray.from[1];
        for (var i = 0; i < distance - 1; i++) {
            var point_1 = that.createBitmapByName('point');
            point_1.width = 10;
            point_1.height = 10;
            point_1.anchorOffsetX = point_1.width / 2;
            point_1.anchorOffsetY = point_1.height / 2;
            point_1.x = (ray.from[0] + dx / ray.length * i) * that.factor - that.rayGroup.x;
            point_1.y = that.stage.stageHeight - (ray.from[1] + dy / ray.length * i) * that.factor - that.rayGroup.y;
            this.rayGroup.addChild(point_1);
        }
        var point = that.createBitmapByName('arrow');
        point.width = 10;
        point.height = 10;
        point.anchorOffsetX = point.width / 2;
        point.anchorOffsetY = point.height / 2;
        point.x = (ray.from[0] + dx / ray.length * (distance - 0.5)) * that.factor - that.rayGroup.x;
        point.y = that.stage.stageHeight - (ray.from[1] + dy / ray.length * (distance - 0.5)) * that.factor - that.rayGroup.y;
        this.rayGroup.addChild(point);
    };
    runningScene.prototype.onBeginContact = function (event) {
        var that = this;
        var bodyA = event.bodyA;
        var bodyB = event.bodyB;
        var judge1 = bodyA.shapes[0].collisionMask == 7 && bodyB.type == p2.Body.KINEMATIC;
        var judge2 = bodyB.shapes[0].collisionMask == 7 && bodyA.type == p2.Body.KINEMATIC;
        var judge3 = bodyA.shapes[0].collisionMask == 7 && bodyB.shapes[0].collisionMask == 7;
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
        for (var i = 0; i < that.beeArr.length; i++) {
            var bee = that.beeArr[i].boxBody;
            if (bodyA.id == bee.id || bodyB.id == bee.id) {
                // console.log("on target sensor BeginContact bodyA.id:" + bodyA.id + ",bodyB.id:" + bodyB.id);
                var hittedBody; //与playerBodyId碰撞的刚体
                if (bodyA.id == bee.id) {
                    hittedBody = bodyB;
                }
                else if (bodyB.id == bee.id) {
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
                    bee.fixedRotation = true; //防止旋转
                    bee.gravityScale = 1;
                    bee.velocity = [0, -that.shootPoint.speedy];
                    return;
                }
                var _loop_3 = function (k) {
                    if (that.gridArr[k].boxBody.id == hittedBody.id) {
                        if (that.gridArr[k].type == 3) {
                            //是球
                            if (!that.gridArr[k].isRemoved) {
                                that.shootPoint.beeNum++;
                                var nx_1 = that.gridArr[k].boxBody.position[0];
                                that.gridArr[k].updateText(that, function () {
                                    var b = new beeCom();
                                    b.createBody(that, nx_1);
                                    that.beeArr.push(b);
                                    that.myData.beeNum++;
                                    that.bulletNum.text = 'X' + that.myData.beeNum;
                                    // console.log('hit')
                                });
                            }
                        }
                        else {
                            if (that.gridArr[k].type == 4) {
                                //是星星
                                that.beeArr[i].powerUp(2);
                                that.gridArr[k].updateText(that);
                            }
                            else if (!that.gridArr[k].isRemoved) {
                                //是方块
                                var num = that.beeArr[i].power > that.gridArr[k].num ? that.gridArr[k].num : that.beeArr[i].power;
                                that.updateProccess(num);
                                that.gridArr[k].updateText(that, that.beeArr[i].power, function (res) {
                                    //已被击碎  如果是炸弹，分数怎么算？？？ res的形式未定
                                    that.updateProccess();
                                });
                            }
                        }
                        return "break";
                    }
                };
                for (var k = 0; k < that.gridArr.length; k++) {
                    var state_1 = _loop_3(k);
                    if (state_1 === "break")
                        break;
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
    };
    // 获得player碰撞位置
    runningScene.prototype.getPlayerContactPos = function () {
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
    };
    runningScene.prototype.onEndContact = function (event) {
        var bodyA = event.bodyA;
        var bodyB = event.bodyB;
        if (bodyA.id == 5 || bodyB.id == 5) {
            // console.log("on target sensor EndContact bodyA.id:" + bodyA.id + ",bodyB.id:" + bodyB.id);
        }
    };
    runningScene.prototype.onEnterFrame = function () {
        var that = this;
        var dt = egret.getTimer() - this.currentTimer;
        if (dt < 10) {
            return;
        }
        if (dt > 1000) {
            return;
        }
        this.world.step(dt / this.worldSpeed); //使物理系统向前经过一定时间，也就是使世界运行
        this.currentTimer = egret.getTimer();
        var stageHeight = egret.MainContext.instance.stage.stageHeight; //获取舞台高度？？？？
        var l = this.world.bodies.length; //所有body的长度
        for (var i = 0; i < l; i++) {
            var boxBody = this.world.bodies[i];
            var len = boxBody.displays.length;
            for (var j = 0; j < len; j++) {
                var box = boxBody.displays[j];
                if (box) {
                    if (j == 0) {
                        box.anchorOffsetX = boxBody.displays[0].width / 2;
                    }
                    box.x = boxBody.position[0] * this.factor;
                    box.y = stageHeight - boxBody.position[1] * this.factor; //坐标系不一样，所以要转换
                    // box.rotation = 360 - (boxBody.angle + boxBody.shapes[j].angle) * 180 / Math.PI;//旋转
                    box.rotation = boxBody.angle * 180 / Math.PI; //旋转
                }
            }
        }
        var num = 0;
        for (var i_1 = 0, len_1 = this.beeArr.length; i_1 < len_1; i_1++) {
            var bee = this.beeArr[i_1].boxBody;
            if (bee.position[1] <= that.getPosition(856)) {
                num++;
                if (bee.gravityScale == 0) {
                    bee.velocity[0] = 0;
                    bee.angle = 0;
                    bee.displays[0].rotation = 0;
                    bee.gravityScale = 1;
                    this.beeArr[i_1].powerUp();
                    if (!that.shootPoint.floor) {
                        //第一个球落地时更新下次发射点
                        that.shootPoint.floor = true;
                        that.shootPoint.bx = bee.position[0] * that.factor;
                        var nx = that.shootPoint.bx + that.hero.anchorOffsetX - that.hero.width / 2;
                        var dt_1 = Math.abs(that.hero.x - nx);
                        egret.Tween.get(that.hero).to({ x: nx }, dt_1);
                    }
                }
                //全部落地了
                if ((i_1 == len_1 - 1) && num == len_1 && that.shooting && that.shootPoint.beeNum == len_1) {
                    console.log('enter', that.shooting);
                    that.shooting = false;
                    that.shootPoint.floor = false;
                    setTimeout(function () {
                        that.updateGrids();
                        that.updateBee();
                    }, 100);
                }
            }
            else {
                if (bee.gravityScale == 0) {
                    this.updateSpeed(bee);
                }
                else {
                    bee.velocity[1] = -that.shootPoint.speedy;
                    this.beeArr[i_1].powerUp();
                }
            }
        }
        for (var len_2 = that.gridArr.length, i_2 = len_2 - 1; i_2 >= 0; i_2--) {
            if (that.gridArr[i_2].type == 6) {
                var k = that.gridArr[i_2].boxBody.velocity[0] > 0 ? 0.5 : -0.5;
                that.gridArr[i_2].boxBody.velocity[0] = k;
            }
        }
    };
    runningScene.prototype.updateBee = function () {
        //更新球的水平坐标
        var that = this;
        var bx = that.shootPoint.bx / that.factor;
        var direction = 0.8;
        var dx = that.hero.width / 2 / that.factor;
        if (bx > 7.5) {
            direction = -direction;
            dx = -dx;
        }
        var n = 0;
        for (var i = 0, len = that.beeArr.length; i < len; i++) {
            that.beeArr[i].boxBody.position[0] = i * direction + bx + dx;
            if ((that.beeArr[i].boxBody.position[0] > 13) || (that.beeArr[i].boxBody.position[0] < 2)) {
                that.beeArr[i].boxBody.position[0] = (i % n) * direction + bx + dx / 2;
                console.log(111, that.beeArr[i].boxBody.position[0]);
            }
            else {
                n = i;
            }
        }
    };
    runningScene.prototype.updateGrids = function () {
        //更新方块的位置以及产生新方块
        var that = this;
        for (var len = that.gridArr.length, i = len - 1; i >= 0; i--) {
            if (that.gridArr[i].isRemoved) {
                if (that.gridArr[i].img.parent && that.gridArr[i].type == 4) {
                    that.world.removeBody(that.gridArr[i].boxBody);
                    that.gridArr[i].img.parent.removeChild(that.gridArr[i].img);
                }
                that.gridArr.splice(i, 1);
                continue;
            }
            var y = that.gridArr[i].boxBody.position[1];
            if (y <= that.getPosition(that.adaptParams.itemWidth * 6.5)) {
                //危险警告
                console.log('danger');
            }
            if (y <= that.getPosition(that.adaptParams.itemWidth * 7.5)) {
                //游戏结束
                console.log('gameOver');
                that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
                that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
                that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
                that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
                if (that.myData.reborn >= 1) {
                    //已复活
                    sceneMaster.openModal(new gameOver(that.levelInfo.level, that.myData));
                }
                else {
                    var reborn = new rebornModal(that.levelInfo.level, that.myData);
                    sceneMaster.openModal(reborn);
                    reborn.rebornBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.rebornFun, this);
                }
                return;
            }
            that.gridArr[i].boxBody.position[1] = y - that.adaptParams.itemWidth / that.factor;
        }
        that.createGrids();
    };
    runningScene.prototype.rebornFun = function () {
        //复活
        var that = this;
        AdMaster.useVideo(function () {
            suc();
        }, function () {
            CallbackMaster.openShare(function () {
                suc();
            });
        });
        function suc() {
            that.myData.reborn++;
            sceneMaster.changeScene(new runningScene(that.levelInfo.level, that.myData, that.chooseTool));
        }
    };
    runningScene.prototype.updateSpeed = function (bee) {
        //更新速度，保持匀速运动
        var velocity = bee.velocity;
        if (Math.abs(velocity[1]) < 0.5) {
            console.log('垂直速度为', velocity[1]);
            velocity[1] = -0.5;
        }
        var k = Math.sqrt(this.ballSpeed / (velocity[0] * velocity[0] + velocity[1] * velocity[1]));
        bee.velocity = [k * velocity[0], k * velocity[1]];
        var a = Math.atan(velocity[1] / velocity[0]);
        var b;
        if (a < 0) {
            a = Math.PI * 2 + a;
        }
        a = -(a - Math.PI / 2);
        if (velocity[0] < 0) {
            a = a - Math.PI;
        }
        bee.angle = a;
    };
    runningScene.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name + '_png');
        result.texture = texture;
        return result;
    };
    runningScene.prototype.changeGraphics = function () {
        //percent 进度百分比
        var percent = this.myData.score / this.levelInfo.score;
        if (percent > 1 && this.myData.reborn > 0) {
            return;
        }
        percent = percent > 1 ? 1 : percent;
        var angle = percent * 2 * Math.PI * 3 / 4 + Math.PI * 0.55;
        this.arcPro.graphics.clear();
        this.arcPro.graphics.lineStyle(14, 0xffdf5e, 1);
        this.arcPro.graphics.drawArc(60, 60, 50, Math.PI * 0.55, angle, false);
        this.arcPro.graphics.endFill();
    };
    return runningScene;
}(eui.Component));
__reflect(runningScene.prototype, "runningScene", ["eui.UIComponent", "egret.DisplayObject"]);
