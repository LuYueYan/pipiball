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
    function runningScene(level, myData, tool) {
        if (myData === void 0) { myData = {}; }
        if (tool === void 0) { tool = { glass: false, bullet: false }; }
        var _this = _super.call(this) || this;
        _this.arcPro = new egret.Shape(); //弧形进度条
        _this.factor = 50;
        _this.currentTimer = egret.getTimer();
        _this.ceilArr = [];
        _this.adaptParams = {
            gridAreaTop: 195 + 9,
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
            existAmount: 0,
            score: 0,
            reborn: 0,
            gold: 0,
            star: 0,
            line: 0,
            danger: 0,
            reborning: 0 //复活状态，用来控制消除多行后方块不下落 0--未使用 1--使用中 2--使用过
        };
        _this.tooling = null; //正在使用的道具名称
        _this.hatPower = false; //头盔使用中
        _this.chooseTool = { glass: false, bullet: false }; //开局道具
        _this.shootPoint = { bx: 375, by: 1034, ex: 0, ey: 0, floor: false, beeNum: 0, speedy: 3 };
        _this.conTimes = { num: 0, score: 0 }; //连击次数
        _this.prepare = false; //开局准备好么有
        // console.log(level)
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
        if (userDataMaster.myInfo.gender) {
            that.heroImg.texture = RES.getRes('img_role_' + userDataMaster.myInfo.gender + '_png');
        }
        that.myData.beeNum = that.levelInfo.bullet;
        that.levelText.text = that.levelInfo.level + '';
        that.bulletImg.texture = RES.getRes(userDataMaster.bulletArr[userDataMaster.bulletIndex].img + '_png');
        that.bulletNum.text = 'X' + that.myData.beeNum;
        that.amountText.text = that.myData.amount + '/' + that.levelInfo.amount;
        that.myData.gold = that.levelInfo.gold;
        that.bgImg.height = that.stage.stageHeight;
        //创建world
        that.world = new p2.World();
        that.world.sleepMode = p2.World.BODY_SLEEPING; //睡眠策略，提高性能
        that.world.gravity = [0, -10];
        that.world.defaultContactMaterial.restitution = 1; //全局弹性系数
        that.createCeil();
        for (var i = 3; i > 0; i--) {
            // console.log('创建砖块')
            that.createGrids(i, true);
        }
        for (var i = 1; i <= that.myData.star; i++) {
            that['star_' + i].texture = RES.getRes('img_star_b1_png');
        }
        that.scoreProccess.addChildAt(that.arcPro, 2);
        that.scoreText.text = that.myData.score + '';
        that.changeGraphics();
        that.initBee();
        that.world.on("beginContact", that.onBeginContact, this);
        that.addEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, this);
        var t = 100;
        if (that.chooseTool.bullet) {
            //使用但腰痛道具
            setTimeout(function () {
                var gif = movieMaster.getGif('cartridge');
                gif.anchorOffsetX = 410 / 2;
                gif.anchorOffsetY = 370 / 2;
                gif.x = 375;
                gif.y = 600;
                that.addChild(gif);
                gif.gotoAndPlay(1, 1);
                gif.addEventListener(egret.Event.COMPLETE, function (e) {
                    var _loop_1 = function (i, len) {
                        setTimeout(function () {
                            var bee = new beeCom();
                            bee.createBody(that, 7.5, that.getPosition(600));
                            bee.boxBody.velocity[1] = -20;
                            that.beeArr.push(bee);
                            that.shootPoint.beeNum++;
                            that.myData.beeNum++;
                            that.bulletNum.text = 'X' + that.myData.beeNum;
                            // console.log(6436)
                            if (i == len - 1) {
                                egret.Tween.get(gif).to({ scaleX: 0, scaleY: 0 }, 1000).call(function () {
                                    gif.parent && gif.parent.removeChild(gif);
                                });
                            }
                        }, 100 * i);
                    };
                    for (var i = 0, len = 5; i < len; i++) {
                        _loop_1(i, len);
                    }
                }, this);
            }, t);
            t += 3000;
        }
        if (that.chooseTool.glass) {
            //使用弹跳视野道具
            setTimeout(function () {
                var gif = movieMaster.getGif('glass');
                gif.x = 375 - 300 / 2;
                gif.y = 600;
                that.addChild(gif);
                that.swapChildren(gif, that.hero);
                gif.gotoAndPlay(1, 1);
                gif.addEventListener(egret.Event.COMPLETE, function (e) {
                    // console.log(878762)
                    egret.Tween.get(gif).to({ y: 900 }, 1000).to({ alpha: 0 }, 500).call(function () {
                        that.swapChildren(gif, that.hero);
                        gif.parent && gif.parent.removeChild(gif);
                        that.hero.rotation = -30;
                        var glass = that.createBitmapByName('img_glass');
                        glass.x = 27;
                        glass.y = 68;
                        that.hero.addChild(glass);
                        setTimeout(function () {
                            that.hero.rotation = 0;
                        }, 500);
                    });
                }, this);
            }, t);
            t += 4000;
        }
        setTimeout(function () {
            that.prepare = true;
            that.updateBee();
            if (userDataMaster.levelStar.length == 0 && that.levelInfo.level == 1) {
                //新手第一关
                that.userTip = that.createBitmapByName('new_user_text');
                that.userTip.x = (that.stage.stageWidth - that.userTip.width) / 2;
                that.userTip.y = 800;
                that.addChild(that.userTip);
                egret.Tween.get(that.userTip, { loop: true }).to({ alpha: 0 }, 1000).to({ alpha: 1 }, 1000);
            }
            if (userDataMaster.levelStar.length == 2 && that.levelInfo.level == 3) {
                //炸弹引导
                sceneMaster.openModal(new squareGuide());
            }
            if (userDataMaster.levelStar.length == 5 && that.levelInfo.level == 6) {
                //冰块引导引导
                sceneMaster.openModal(new squareGuide(2));
            }
            that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
            that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
            that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
        }, t);
        that.toolState(t);
        that.homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.homeFun, this);
        // console.log('达成关卡数', userDataMaster.levelStar.length, '  当前关卡', that.levelInfo.level)
        platform.onShow(function () {
            that.currentTimer = egret.getTimer();
        });
    };
    runningScene.prototype.homeFun = function () {
        var that = this;
        platform.showModal({
            title: '温馨提示',
            content: '返回首页将会损失一点体力，是否继续？',
            success: function (res) {
                if (res.confirm) {
                    that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
                    sceneMaster.changeScene(new startScene());
                }
            }
        });
    };
    runningScene.prototype.initBee = function () {
        var that = this;
        for (var i = 0, len = that.myData.beeNum; i < len; i++) {
            var bee = new beeCom();
            bee.createBody(that);
            that.beeArr.push(bee);
            that.shootPoint.beeNum++;
        }
        that.updateBee();
    };
    runningScene.prototype.toolState = function (t) {
        //下方道具栏
        var that = this;
        var tool = ['hammer', 'hat', 'lamp'];
        var _loop_2 = function (i) {
            var item = userDataMaster.tool[tool[i]];
            if (userDataMaster.level + 1 >= item.level) {
                //已解锁
                that[tool[i] + '_lock'].parent && that[tool[i] + '_lock'].parent.removeChild(that[tool[i] + '_lock']);
                var y = that[tool[i] + '_img'].y;
                setTimeout(function () {
                    egret.Tween.get(that[tool[i] + '_img'], { loop: true }).wait(5000).to({ scaleX: 1, scaleY: 1 }, 500).to({ scaleX: 0.8, scaleY: 0.8 }, 500);
                }, i * 1500);
                if (!item.unlock) {
                    //首次解锁
                    userDataMaster.tool[tool[i]].unlock = true;
                    //引导内容
                    setTimeout(function () {
                        that.addChild(sceneMaster.modalBg);
                        that.tg = new toolGuide(i);
                        that.addChild(that.tg);
                        that.tg.addChild(that[tool[i]]);
                        that.tg.x = i * 121 + 30;
                        that.tg.y = 990;
                        that[tool[i]].x = 0;
                        that[tool[i]].y = 200;
                        that.once(egret.TouchEvent.TOUCH_TAP, function () {
                            that.tg.txt_1.visible = false;
                            that.tg.txt_2.visible = false;
                            that.tg.txt_3.visible = true;
                        }, this);
                    }, t);
                    //
                }
                that[tool[i]].addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.judgeTool(tool[i], i); }, this_1);
            }
            else {
                //未达到解锁关卡
                that[tool[i] + '_img'].parent && that[tool[i]].removeChild(that[tool[i] + '_img']);
                that[tool[i] + '_lock'].visible = true;
                that[tool[i] + '_text'].visible = true;
            }
        };
        var this_1 = this;
        for (var i = 0; i < tool.length; i++) {
            _loop_2(i);
        }
    };
    runningScene.prototype.judgeTool = function (type, i) {
        //选择使用道具
        var that = this;
        if ((that.tg && that.tg.txt_1.visible) || that.shooting) {
            return;
        }
        sceneMaster.modalBg.parent && sceneMaster.scene.removeChild(sceneMaster.modalBg);
        that.tg && that.removeChild(that.tg);
        that[type].x = i * 121;
        that[type].y = 0;
        that.toolBottom.addChild(that[type]);
        that.conTimes = { num: 0, score: 0 };
        if (userDataMaster.tool[type].num > 0) {
            //使用道具
            that.tooling = type;
            userDataMaster.tool[type].num--;
            if (type == 'hammer') {
                //锤子
                var group = new eui.Group();
                that.addChildAt(group, 9);
                var rect = new eui.Rect(that.stage.stageWidth, that.stage.stageHeight, 0x0c0300);
                rect.alpha = 0.85;
                group.addChild(rect);
                var text = that.createBitmapByName('img_text_05');
                text.x = 375 - text.width / 2;
                text.y = 1190;
                group.addChild(text);
                var img = that.createBitmapByName('img_prop_game_01');
                img.anchorOffsetX = img.width;
                img.anchorOffsetY = img.height;
                img.x = 375 - img.width / 4;
                img.y = 1320;
                group.addChild(img);
                egret.Tween.get(img, { loop: true }).to({ rotation: 30 }, 200).to({ rotation: 0 }, 200);
                that.hammerShow = group;
            }
            else if (type == 'hat') {
                //攻击加倍
                that.hatPower = true;
                var hat_1 = that.createBitmapByName('img_helmet');
                hat_1.anchorOffsetX = hat_1.width / 2;
                hat_1.anchorOffsetX = hat_1.y / 2;
                hat_1.x = 375;
                hat_1.y = 600;
                that.addChild(hat_1);
                egret.Tween.get(hat_1).to({ y: 1100, scaleX: 0.6, scaleY: 0.6 }, 1000).call(function () {
                    hat_1.parent && hat_1.parent.removeChild(hat_1);
                    that.hero.rotation = -30;
                    var helmet = that.createBitmapByName('img_helmet');
                    helmet.x = 77;
                    helmet.y = 43;
                    helmet.anchorOffsetX = helmet.width / 2;
                    helmet.anchorOffsetY = helmet.height / 2;
                    helmet.scaleX = 0.6;
                    helmet.scaleY = 0.6;
                    that.hero.addChild(helmet);
                    setTimeout(function () {
                        that.hero.rotation = 0;
                        var txt = that.createBitmapByName('img_text_06');
                        txt.x = (750 - txt.width) / 2;
                        txt.y = 900;
                        that.addChild(txt);
                        egret.Tween.get(txt).to({ y: 600 }, 3000).wait(1000).call(function () {
                            txt.parent && txt.parent.removeChild(txt);
                        });
                    }, 500);
                });
            }
            else if (type == 'lamp') {
                // 暂停一次下落
                var group = new eui.Group();
                that.addChild(group);
                that.swapChildren(group, that.rayGroup);
                var lamp = that.createBitmapByName('img_traffic_light_02');
                lamp.x = (that.stage.stageWidth - lamp.width) / 2;
                lamp.y = 195;
                group.addChild(lamp);
                var left = that.createBitmapByName('img_traffic_02');
                left.x = 40;
                left.y = 1000;
                group.addChild(left);
                var right = that.createBitmapByName('img_traffic_01');
                right.x = 710 - right.width;
                right.y = 1000;
                group.addChild(right);
                that.lampShow = group;
            }
        }
        else {
            ///看视频获取
            AdMaster.useVideo(function () {
                suc();
            }, function () {
                CallbackMaster.openShare(function () {
                    suc();
                });
            });
        }
        function suc() {
            userDataMaster.tool[type].num++;
            that.judgeTool(type, i);
        }
    };
    runningScene.prototype.createCeil = function () {
        var arr = [
            { x: 697, y: 480, width: 1, height: 25 },
            { x: -25, y: 480, width: 1, height: 25 },
            { x: 336, y: -25, width: 15, height: 1 },
            { x: 336, y: 960, width: 15, height: 1 } //下面   地面位置 935-985
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
    runningScene.prototype.hitDown = function (hammer) {
        if (hammer === void 0) { hammer = false; }
        //击掉方块
        var that = this;
        that.myData.amount++;
        that.amountText.text = that.myData.amount + '/' + that.levelInfo.amount;
        that.amountPro.width = that.myData.amount / that.levelInfo.amount * 100;
        if (that.myData.amount >= that.levelInfo.amount && hammer && that.gridArr.length <= 1) {
            //通关成功
            setTimeout(function () {
                that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
                that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
                that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
                that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
                sceneMaster.openModal(new levelUpModal(that.levelInfo.level, that.myData));
            }, 500);
            // console.log('level up')
        }
    };
    runningScene.prototype.updateProccess = function (conTimes) {
        //更新关卡进度
        var that = this;
        //得分
        that.myData.score += conTimes.score;
        if (conTimes.num > 2) {
            var score = conTimes.num * 250;
            var name_1 = 'img_text_a1';
            if (conTimes.num < 5) {
                name_1 = 'img_text_a1';
            }
            else if (conTimes.num < 7) {
                name_1 = 'img_text_a2';
            }
            else {
                name_1 = 'img_text_a3';
            }
            that.myData.score += score;
            that.createGif(name_1, 2, 1000);
            var con_1 = new egret.BitmapText();
            con_1.font = RES.getRes('stripe_text_big_fnt');
            ;
            con_1.text = '+' + score;
            con_1.x = 375;
            con_1.y = 500;
            con_1.anchorOffsetX = con_1.width / 2;
            con_1.anchorOffsetY = con_1.height / 2;
            con_1.scaleX = 0;
            con_1.scaleY = 0;
            that.addChild(con_1);
            egret.Tween.get(con_1).to({ scaleX: 1, scaleY: 1 }, 500).wait(1000).to({ alpha: 0 }, 1000).call(function () {
                con_1.parent && con_1.parent.removeChild(con_1);
            });
        }
        if (that.myData.star < 1 && that.myData.score >= that.levelInfo.score) {
            that.star_1.texture = RES.getRes('img_star_b1_png');
            that.myData.star = 1;
        }
        if (that.myData.star < 2 && that.myData.score >= that.levelInfo.score * 2) {
            that.star_2.texture = RES.getRes('img_star_b1_png');
            that.myData.star = 2;
        }
        if (that.myData.star < 3 && that.myData.score >= that.levelInfo.score * 3) {
            that.star_3.texture = RES.getRes('img_star_b1_png');
            that.myData.star = 3;
        }
        that.scoreText.text = that.myData.score + '';
        that.changeGraphics();
    };
    runningScene.prototype.createGif = function (name, t, wait) {
        var that = this;
        var group = new eui.Group();
        group.width = 600;
        group.height = 450;
        group.anchorOffsetX = 600 / 2;
        group.anchorOffsetY = 450 / 2;
        group.x = 375;
        group.y = 600;
        var gif = movieMaster.getGif('gif_streamer');
        group.addChild(gif);
        var txt = that.createBitmapByName(name);
        txt.x = (group.width - txt.width) / 2;
        txt.y = 260;
        group.addChild(txt);
        that.addChild(group);
        gif.gotoAndPlay(1, t);
        egret.Tween.get(group).
            to({ scaleX: 1, scaleY: 1 }, 500)
            .wait(wait).
            to({ scaleX: 0, scaleY: 0 }, 1000)
            .call(function () {
            group.parent && group.parent.removeChild(group);
        });
    };
    runningScene.prototype.createGrids = function (row, first) {
        if (row === void 0) { row = 1; }
        if (first === void 0) { first = false; }
        //每次生成一行 row--生成的位置为第几行（从上往下0行开始） 默认第一行
        //first为是否出现新方块
        var that = this;
        if (that.myData.amount >= that.levelInfo.amount) {
            //通关~~~~
            that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
            that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
            that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
            that.createGif('img_text_a4', 5, 2000);
            setTimeout(function () {
                that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
                sceneMaster.openModal(new levelUpModal(that.levelInfo.level, that.myData));
            }, 2000);
        }
        if (that.myData.existAmount >= that.levelInfo.amount) {
            //本关卡数量已足够
            return;
        }
        that.myData.line++;
        for (var col = 0; col < 7; col++) {
            if (that.myData.existAmount >= that.levelInfo.amount) {
                break;
            }
            var g = void 0;
            var type = Math.random() < 0.7 ? 1 : 2;
            var ran = Math.random();
            if (that.levelInfo.level >= 3 && that.levelInfo.level < 6) {
                //可以出现爆炸
                var r = Math.random();
                if (r < 0.15) {
                    type = 5;
                }
                else if (r < 0.7) {
                    type = 1;
                }
                else {
                    type = 2;
                }
            }
            if (that.levelInfo.level >= 6) {
                //可以出现爆炸、冰块
                var r = Math.random();
                if (r < 0.1) {
                    type = 5;
                }
                else if (r < 0.3) {
                    type = 6;
                }
                else if (r < 0.8) {
                    type = 1;
                }
                else {
                    type = 2;
                }
            }
            if (userDataMaster.levelStar.length == 2 && that.levelInfo.level == 3 && row == 3 && first && col == 4) {
                //第3关首次出现爆炸方块
                ran = 0.2;
                type = 5;
            }
            if (userDataMaster.levelStar.length == 5 && that.levelInfo.level == 6 && row == 3 && first && col == 3) {
                //第六关首次出现移动方块
                ran = 0.2;
                type = 6;
            }
            if (ran < 0.5 && (that.myData.existAmount < that.levelInfo.amount)) {
                var num = Math.floor(that.levelInfo.small + that.myData.line);
                g = new gridCom(num, type);
                that.myData.existAmount++;
            }
            else if (ran < 0.55) {
                g = new ballCom();
            }
            else if (ran < 0.6) {
                g = new starCom();
            }
            else {
                continue;
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
        var that = this;
        if (that.hammerShow && that.tooling == 'hammer') {
            var _loop_3 = function (i, len) {
                var hit = that.gridArr[i].img.hitTestPoint(e.stageX, e.stageY);
                if (hit) {
                    if (that.gridArr[i].type == 3 || that.gridArr[i] == 4) {
                        // //球或者精灵
                        // that.gridArr[i].updateText(that, () => {
                        // 	if (that.gridArr[i].img.parent && that.gridArr[i].type == 4) {
                        // 		that.world.removeBody(that.gridArr[i].boxBody);
                        // 		that.gridArr[i].img.parent.removeChild(that.gridArr[i].img);
                        // 	}
                        // 	that.gridArr.splice(i, 1);
                        // 	suc();
                        // })
                    }
                    else {
                        var img_1 = that.createBitmapByName('img_prop_game_01');
                        img_1.anchorOffsetX = img_1.width;
                        img_1.anchorOffsetY = img_1.height;
                        img_1.x = that.gridArr[i].img.x + img_1.width / 2;
                        img_1.y = that.gridArr[i].img.y + img_1.height / 2;
                        that.addChild(img_1);
                        egret.Tween.get(img_1).to({ rotation: 20 }, 200)
                            .to({ rotation: 0 }, 200)
                            .to({ rotation: 30 }, 200)
                            .to({ rotation: 0 }, 200).call(function () {
                            img_1.parent && img_1.parent.removeChild(img_1);
                            that.conTimes.score += that.gridArr[i].initNum;
                            that.gridArr[i].updateText(that, that.gridArr[i].initNum, function () {
                                that.hitDown(true);
                                that.updateProccess(that.conTimes);
                                suc();
                            });
                        });
                    }
                    return "break";
                }
            };
            //使用道具锥子中
            // console.log(4444)
            // that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that)
            // that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
            for (var i = 0, len = this.gridArr.length; i < len; i++) {
                var state_1 = _loop_3(i, len);
                if (state_1 === "break")
                    break;
            }
        }
        else {
            //正常发射
            if (that.userTip && that.userTip.parent) {
                egret.Tween.removeTweens(that.userTip);
                that.userTip.parent.removeChild(that.userTip);
            }
            this.touchMoveFun(e);
        }
        function suc() {
            that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
            that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
            that.tooling = null;
            setTimeout(function () {
                that.hammerShow.parent && that.hammerShow.parent.removeChild(that.hammerShow);
            }, 500);
        }
    };
    runningScene.prototype.useTool = function (target) {
    };
    runningScene.prototype.touchMoveFun = function (e) {
        var that = this;
        if (that.shooting || (that.hammerShow && that.hammerShow.parent)) {
            return;
        }
        that.shootPoint.ex = e.stageX;
        that.shootPoint.ey = e.stageY;
        that.shootPoint.speedy = 1;
        that.rayGroup.removeChildren();
        if (e.stageY > that.adaptParams.itemWidth * 8 + that.adaptParams.gridAreaTop) {
            return;
        }
        that.testRay();
    };
    runningScene.prototype.touchEndFun = function (e) {
        var that = this;
        if (that.shooting || (that.hammerShow && that.hammerShow.parent)) {
            return;
        }
        if (e.stageY > that.adaptParams.itemWidth * 8 + that.adaptParams.gridAreaTop) {
            console.log('低于发射水平');
            return;
        }
        if (that.lampShow && that.lampShow.parent && (!that.tooling || that.tooling != 'lamp')) {
            that.lampShow.parent && that.lampShow.parent.removeChild(that.lampShow);
            that.lampShow = null;
        }
        that.shootPoint.speedy = 3;
        that.shootPoint.ex = e.stageX;
        that.shootPoint.ey = e.stageY;
        var dx = that.shootPoint.ex - that.shootPoint.bx;
        var dy = that.shootPoint.ey - that.shootPoint.by;
        // let s=-dy/Math.sqrt(dy*dy+dx*dx)*0.8;
        //  console.log(s)
        var startX = that.shootPoint.bx / that.factor;
        var startY = (that.stage.stageHeight - that.shootPoint.by) / that.factor;
        that.rayGroup.removeChildren();
        that.hero.rotation = 0;
        that.conTimes = { num: 0, score: 0 }; //初始化之前的连击次数
        setTimeout(function () {
            that.shooting = true;
            // console.log('shoot', that.shooting)
        }, 100);
        var _loop_4 = function (i) {
            var bee = that.beeArr[i].boxBody;
            setTimeout(function () {
                egret.Tween.removeTweens(bee.displays[0]);
                bee.position[0] = startX;
                bee.position[1] = startY;
                bee.velocity = [dx / that.factor, -dy / that.factor];
                bee.gravityScale = 0;
                that.updateSpeed(bee);
            }, 100 * i);
        };
        for (var i = 0; i < that.beeArr.length; i++) {
            _loop_4(i);
        }
    };
    runningScene.prototype.testRay = function () {
        var that = this;
        var bx = that.shootPoint.bx / that.factor;
        var by = (that.stage.stageHeight - that.shootPoint.by) / that.factor;
        var ex = that.shootPoint.ex / that.factor;
        var ey = (that.stage.stageHeight - that.shootPoint.ey) / that.factor;
        if (ey <= by) {
            //小于发射水平线
            console.log('小于发射水平线');
            return;
        }
        var dx = ex - bx;
        var dy = ey - by; //ey<by的
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
            that.createLine(result, ray);
            if (that.chooseTool.glass) {
                that.testRay2(result, ray);
            }
        }
    };
    runningScene.prototype.testRay2 = function (res, r, ray_3) {
        if (ray_3 === void 0) { ray_3 = false; }
        var that = this;
        var p = [0, 0]; //碰撞点
        res.getHitPoint(p, r);
        var bx = p[0];
        var by = p[1];
        var ex = 0;
        var ey = 0;
        if (Math.abs(res.normal[0]) < 1e-15) {
            //垂直方向
            ex = bx * 2 - r.from[0];
            ey = r.from[1];
        }
        else if (Math.abs(res.normal[1]) < 1e-15) {
            //水平方向
            ex = r.from[0];
            ey = by * 2 - r.from[1];
        }
        else {
            var k = res.normal[1] / res.normal[0];
            var a = (r.from[0] - p[0] - k * k * r.from[0] + k * k * p[0] + 2 * k * r.from[1] - 2 * k * p[1]) / (k * k + 1);
            var b = k * r.from[0] - k * r.from[1] + a * k - p[0] + p[1];
            a += p[0];
            b += p[1];
            ex = a;
            ey = b;
        }
        var dx = ex - bx;
        var dy = ey - by; //ey<by的
        if ((ex > bx && dx * dy >= 0) || (ex < bx && dx * dy <= 0)) {
            //上
            bx = bx + (0.1 / dy * dx);
            by = by + 0.1;
            ex = ex + (25 / dy * dx);
            ey = ey + 25;
        }
        else {
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
                that.testRay2(result, ray, true);
            }
            that.createLine(result, ray);
        }
    };
    runningScene.prototype.createLine = function (result, ray) {
        var that = this;
        // this.rayGroup.removeChildren();
        var bx = that.shootPoint.bx / that.factor;
        var by = (that.stage.stageHeight - that.shootPoint.by) / that.factor;
        var distance = result.getHitDistance(ray);
        var dx = ray.to[0] - ray.from[0];
        var dy = ray.to[1] - ray.from[1];
        var type = that.chooseTool.glass ? 2 : 1;
        for (var i = 0; i < distance - 1; i++) {
            var point_1 = that.createBitmapByName('img_aim_0' + type);
            // point.width = 10;
            // point.height = 10;
            point_1.anchorOffsetX = point_1.width / 2;
            point_1.anchorOffsetY = point_1.height / 2;
            point_1.x = (ray.from[0] + dx / ray.length * i) * that.factor - that.rayGroup.x;
            point_1.y = that.stage.stageHeight - (ray.from[1] + dy / ray.length * i) * that.factor - that.rayGroup.y;
            this.rayGroup.addChild(point_1);
        }
        var point = that.createBitmapByName('img_aim_0' + type);
        // point.width = 10;
        // point.height = 10;
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
                var _loop_5 = function (k) {
                    if (that.gridArr[k].boxBody.id == hittedBody.id && that.shooting) {
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
                                var power = that.beeArr[i].power;
                                if (that.hatPower) {
                                    power *= 2;
                                }
                                if (that.beeArr[i].against && that.beeArr[i].against['type_' + that.gridArr[k].type]) {
                                    power += that.beeArr[i].against['type_' + that.gridArr[k].type];
                                }
                                var score = power > that.gridArr[k].num ? that.gridArr[k].num : power;
                                that.conTimes.score += score;
                                soundMaster.playSingleMusic('hit_sound');
                                platform.vibrateShort({});
                                that.gridArr[k].updateText(that, power, function (res) {
                                    //已被击碎  如果是炸弹，分数怎么算？？？
                                    that.hitDown();
                                });
                            }
                        }
                        return "break";
                    }
                };
                for (var k = 0; k < that.gridArr.length; k++) {
                    var state_2 = _loop_5(k);
                    if (state_2 === "break")
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
        var _loop_6 = function (i_1, len_1) {
            var bee = this_2.beeArr[i_1].boxBody;
            if (bee.position[1] <= that.getPosition(856)) {
                num++;
                if (bee.gravityScale == 0) {
                    bee.velocity[0] = 0;
                    bee.angle = 0;
                    bee.displays[0].rotation = 0;
                    bee.gravityScale = 1;
                    this_2.beeArr[i_1].powerUp(1);
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
                    // console.log('enter', that.shooting)
                    if (that.myData.danger != 1 && that.myData.reborning != 1) {
                        //不是复活和危险
                        var conTimes_1 = that.conTimes;
                        setTimeout(function () {
                            that.updateProccess(conTimes_1);
                        }, 300);
                    }
                    that.conTimes = { num: 0, score: 0 }; //初始化之前的连击次数
                    that.shooting = false;
                    that.shootPoint.floor = false;
                    if (that.tooling != 'lamp') {
                        that.tooling = null;
                        if (that.hatPower) {
                            var num_1 = that.hero.numChildren;
                            that.hero.removeChildAt(num_1 - 1);
                            that.hatPower = false;
                        }
                    }
                    setTimeout(function () {
                        if (that.myData.danger == 1 || that.myData.reborning == 1) {
                            if (that.myData.danger == 1) {
                                that.myData.danger = 2;
                            }
                            else {
                                that.myData.reborning = 2;
                            }
                            if (that.myData.amount >= that.levelInfo.amount) {
                                //通关~~~~
                                // that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
                                that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
                                that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
                                that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
                                that.createGif('img_text_a4', 5, 2000);
                                setTimeout(function () {
                                    that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
                                    sceneMaster.openModal(new levelUpModal(that.levelInfo.level, that.myData));
                                }, 2000);
                            }
                        }
                        else {
                            that.updateGrids();
                        }
                        that.updateBee();
                    }, 100);
                }
            }
            else {
                if (bee.gravityScale == 0) {
                    this_2.updateSpeed(bee);
                }
                else if (that.prepare) {
                    bee.velocity[1] = -that.shootPoint.speedy;
                    this_2.beeArr[i_1].powerUp(1);
                }
            }
        };
        var this_2 = this;
        for (var i_1 = 0, len_1 = this.beeArr.length; i_1 < len_1; i_1++) {
            _loop_6(i_1, len_1);
        }
        for (var len_2 = that.gridArr.length, i_2 = len_2 - 1; i_2 >= 0; i_2--) {
            if (that.gridArr[i_2].type == 6 && Math.abs(that.gridArr[i_2].boxBody.velocity[0]) > 0) {
                var k = that.gridArr[i_2].boxBody.velocity[0] > 0 ? 0.8 : -0.8;
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
            if ((that.beeArr[i].boxBody.position[0] > 13.5) || (that.beeArr[i].boxBody.position[0] < 1.5)) {
                that.beeArr[i].boxBody.position[0] = (i % n) * direction + bx + dx / 2;
            }
            else {
                n = i;
            }
        }
    };
    runningScene.prototype.updateGrids = function () {
        var _this = this;
        //更新方块的位置以及产生新方块
        var that = this;
        if (that.tooling == 'lamp' && that.lampShow) {
            //使用红绿灯道具中
            that.tooling = null;
            that.lampShow.getChildAt(0).texture = RES.getRes('img_traffic_light_01_png');
            var text_1 = that.createBitmapByName('img_text_07');
            text_1.x = 375 - text_1.width / 2;
            text_1.y = 600;
            that.addChild(text_1);
            egret.Tween.get(text_1).to({ alpha: 0 }, 3000).call(function () {
                text_1.parent && text_1.parent.removeChild(text_1);
            });
            return;
        }
        var reborn = false;
        var danger = false;
        for (var len = that.gridArr.length, i = len - 1; i >= 0; i--) {
            if (that.gridArr[i].isRemoved) {
                if (that.gridArr[i].img.parent && that.gridArr[i].type == 4) {
                    that.world.removeBody(that.gridArr[i].boxBody);
                    that.gridArr[i].img.parent.removeChild(that.gridArr[i].img);
                }
                that.gridArr.splice(i, 1);
                continue;
            }
            that.gridArr[i].boxBody.position[1] -= that.adaptParams.itemWidth / that.factor;
            var y = that.gridArr[i].boxBody.position[1];
            if (y <= that.getPosition(that.adaptParams.itemWidth * 8)) {
                //游戏结束
                // console.log('gameOver');
                reborn = true;
            }
            else if (y <= that.getPosition(that.adaptParams.itemWidth * 7) && !sceneMaster.modal) {
                //危险警告
                // console.log('danger');
                danger = true;
                if (that.myData.danger == 0) {
                    that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
                    that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
                    that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
                }
            }
        }
        if (reborn) {
            that.removeEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
            that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
            that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
            that.rayGroup.removeEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
            setTimeout(function () {
                if (that.myData.reborn >= 1) {
                    //已复活
                    sceneMaster.openModal(new gameOver(that.levelInfo.level, that.myData));
                }
                else {
                    var reborn_1 = new rebornModal(that.levelInfo.level, that.myData);
                    sceneMaster.openModal(reborn_1);
                    that.shooting = false;
                    reborn_1.rebornBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.rebornFun, that);
                }
            }, 200);
        }
        else if (danger) {
            var img_line_danger_1 = that.createBitmapByName('img_line_danger');
            img_line_danger_1.x = (750 - img_line_danger_1.width) / 2;
            img_line_danger_1.y = that.adaptParams.gridAreaTop + that.adaptParams.itemWidth * 8 - 10;
            that.addChild(img_line_danger_1);
            egret.Tween.get(img_line_danger_1).to({ alpha: 0 }, 300).to({ alpha: 1 }, 300)
                .to({ alpha: 0 }, 300).to({ alpha: 1 }, 300).call(function () {
                img_line_danger_1.parent && img_line_danger_1.parent.removeChild(img_line_danger_1);
                if (that.myData.danger == 0) {
                    var danger_1 = new dangerModal();
                    sceneMaster.openModal(danger_1);
                    danger_1.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        CallbackMaster.openShare(function () {
                            sceneMaster.closeModal();
                            that.shooting = false;
                            that.clearRows(2);
                        });
                    }, _this);
                    danger_1.ignoreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
                        that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
                        that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
                    }, _this);
                }
            });
        }
        if (that.gridArr.length == 0) {
            for (var i = 3; i > 0; i--) {
                that.createGrids(i);
            }
        }
        else {
            that.createGrids();
        }
    };
    runningScene.prototype.clearRows = function (num) {
        var that = this;
        if (num == 2) {
            that.myData.danger = 1;
        }
        else {
            that.myData.reborning = 1;
        }
        var len = that.gridArr.length;
        var dy = that.adaptParams.itemWidth / that.factor;
        var end = 0;
        if (len > 0) {
            end = that.gridArr[0].boxBody.position[1] + dy * num;
        }
        setTimeout(function () {
            var _loop_7 = function (i) {
                if (that.gridArr[i].boxBody.position[1] <= end) {
                    if (that.gridArr[i].type == 4) {
                        //    星星
                        that.gridArr[i].updateText(that, function () {
                            that.gridArr[i].img.parent && that.gridArr[i].img.parent.removeChild(that.gridArr[i].img);
                        });
                    }
                    else if (that.gridArr[i].type == 3) {
                        //球
                        var nx_2 = that.gridArr[i].boxBody.position[0];
                        that.gridArr[i].updateText(that, function () {
                            var b = new beeCom();
                            b.createBody(that, nx_2);
                            that.beeArr.push(b);
                            that.myData.beeNum++;
                            that.bulletNum.text = 'X' + that.myData.beeNum;
                        });
                    }
                    else {
                        that.gridArr[i].updateText(that, that.gridArr[i].initNum, function () {
                            soundMaster.playSingleMusic('boom_sound');
                            that.hitDown();
                        });
                    }
                }
                else {
                    return "break";
                }
            };
            for (var i = 0; i < len; i++) {
                var state_3 = _loop_7(i);
                if (state_3 === "break")
                    break;
            }
            that.shooting = true;
            that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, that.touchBeginFun, that);
            that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, that.touchMoveFun, that);
            that.rayGroup.addEventListener(egret.TouchEvent.TOUCH_END, that.touchEndFun, that);
        }, 500);
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
            sceneMaster.closeModal();
            that.currentTimer = egret.getTimer();
            that.addEventListener(egret.Event.ENTER_FRAME, that.onEnterFrame, that);
            that.clearRows(3);
            // for (let len = that.gridArr.length, i = len - 1; i >= 0; i--) {
            // 	if (that.gridArr[i].isRemoved) {
            // 		if (that.gridArr[i].img.parent && that.gridArr[i].type == 4) {
            // 			that.world.removeBody(that.gridArr[i].boxBody);
            // 			that.gridArr[i].img.parent.removeChild(that.gridArr[i].img);
            // 		}
            // 		that.gridArr.splice(i, 1);
            // 		continue;
            // 	}
            // 	let y = that.gridArr[i].boxBody.position[1];
            // 	that.gridArr[i].boxBody.position[1] = y + that.adaptParams.itemWidth / that.factor * 3;
            // }
        }
    };
    runningScene.prototype.updateSpeed = function (bee) {
        //更新速度，保持匀速运动
        if (bee.position[0] < this.getPosition(-20, 2)) {
            // console.log('左边出墙了')
            bee.velocity[0] = -bee.velocity[0];
            bee.position[0] = this.getPosition(20, 2);
        }
        if (bee.position[0] > this.getPosition(692, 2)) {
            // console.log('右边出墙了')
            bee.velocity[0] = -bee.velocity[0];
            bee.position[0] = this.getPosition(652, 2);
        }
        if (bee.position[1] > this.getPosition(-10)) {
            // console.log('上边出墙了')
            bee.velocity[1] = -bee.velocity[1];
            bee.position[1] = this.getPosition(20);
        }
        if (bee.position[1] < this.getPosition(945)) {
            // console.log('下边出墙了')
            bee.position[1] = this.getPosition(910);
        }
        var velocity = bee.velocity;
        if (Math.abs(velocity[1]) < 0.5) {
            // console.log('垂直速度为', velocity[1])
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
        var percent = this.myData.score / (this.levelInfo.score * 3);
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
//# sourceMappingURL=runningScene.js.map