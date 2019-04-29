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
var playBefore = (function (_super) {
    __extends(playBefore, _super);
    function playBefore(level) {
        var _this = _super.call(this) || this;
        _this.choose = {
            glass: false,
            bullet: false
        }; //当前选择状态
        _this.level = level;
        return _this;
    }
    playBefore.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    playBefore.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.startBtn) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    playBefore.prototype.init = function () {
        var that = this;
        var guideIndex = 0;
        if (this.level == 5 && userDataMaster.level == 4) {
            //道具bullet首次出现 第五关
            guideIndex = 6;
            that.guide.visible = true;
            that.guide.x = 400;
            that.txt_1.text = '点击试试新的道具';
            that.txt_1.text = '超级弹药筒';
            // that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.guideFun, this);
        }
        else if (this.level == 1 && userDataMaster.level == 0) {
            //道具glass首次出现 第一关
            guideIndex = 5;
            that.guide.visible = true;
            // that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.guideFun, this);
        }
        else {
            that.removeChild(that.guide);
            if (this.level <= userDataMaster.level) {
                //已通过的老关卡
                that.startBtn.parent.removeChild(that.startBtn);
                that.videoBtn.texture = RES.getRes('btn_start_04_png');
            }
            else {
                if (userDataMaster.dayFreeLife.num >= 3) {
                    that.videoBtn.texture = RES.getRes('btn_before_02_png');
                }
            }
        }
        egret.Tween.get(that.glassImg, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).to({ scaleX: 1, scaleY: 1 }, 1000);
        if (this.level >= 5) {
            //出现炸弹
            if (userDataMaster.tool.bullet.num <= 0) {
                that.bulletNum.visible = false;
                that.bulletAdd.visible = true;
            }
            egret.Tween.get(that.bulletImg, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).to({ scaleX: 1, scaleY: 1 }, 1000);
            that.bullet.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseFun('bullet'); }, this);
        }
        else {
            that.glass.x = (that.width - that.glass.width) / 2;
            that.bullet.parent.removeChild(that.bullet);
        }
        if (that.startBtn.parent) {
            that.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.startFun, this);
        }
        that.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.videoFun, this);
        that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, this);
        that.glass.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseFun('glass'); }, this);
        if (that.guide.parent) {
            var guide = false;
            if (guideIndex == 5 && !userDataMaster.tool.glass.unlock) {
                //弹跳视野
                userDataMaster.tool.glass.unlock = true;
                guide = true;
            }
            else if (guideIndex == 6 && !userDataMaster.tool.bullet.unlock) {
                //bullet
                userDataMaster.tool.bullet.unlock = true;
                guide = true;
            }
            if (guide) {
                that.guideBg = new eui.Rect(that.width + 100, that.height, 0x0c0300);
                that.guideBg.horitionalCenter = 0;
                that.guideBg.alpha = 0.5;
                that.addChildAt(that.guideBg, guideIndex);
                egret.Tween.get(that.guide).wait(1000).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut);
            }
        }
        if (userDataMaster.tool.glass.num <= 0) {
            that.glassNum.visible = false;
            that.glassAdd.visible = true;
        }
        that.titleText.text = '第' + this.level + '关';
    };
    // public guideFun() {
    // 	let that = this;
    // 	that.removeEventListener(egret.TouchEvent.TOUCH_TAP, that.guideFun, this);
    // 	that.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.videoFun, this);
    // 	that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, this);
    // 	that.glass.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseFun('glass') }, this);
    // 	if (that.startBtn && that.startBtn.parent) {
    // 		that.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.startFun, this);
    // 	}
    // 	if (that.bullet.parent) {
    // 		that.txt_1.text = '里面多藏了5颗弹药';
    // 		that.txt_2.text = '助力开局';
    // 		that.bullet.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { that.chooseFun('bullet') }, this);
    // 	} else {
    // 		that.txt_1.text = '你将可以看清';
    // 		that.txt_2.text = '发射后的拐弯路线';
    // 	}
    // }
    playBefore.prototype.chooseFun = function (type) {
        var that = this;
        if (!that.choose[type] && userDataMaster.tool[type].num <= 0) {
            //是否有道具，没有的话视频购买
            AdMaster.useVideo(function () {
                suc();
            }, function () {
                CallbackMaster.openShare(function () {
                    suc();
                });
            });
            return;
        }
        else {
            if (that.guideBg && that.guideBg.parent && that.choose[type]) {
                return;
            }
            that.choose[type] = !that.choose[type];
            that[type + 'Choose'].visible = that.choose[type];
            that[type + 'Light'].visible = that.choose[type];
            if (that.choose[type]) {
                egret.Tween.get(that[type + 'Light'], { loop: true }).to({ rotation: 360 }, 3000);
            }
            else {
                egret.Tween.removeTweens(that[type + 'Light']);
            }
            that[type + 'Num'].visible = !that.choose[type];
            if (that.guideBg && that.guideBg.parent) {
                if (that.bullet.parent) {
                    that.txt_1.text = '里面多藏了5颗弹药';
                    that.txt_2.text = '助力开局';
                    that.bullet.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseFun('bullet'); }, this);
                }
                else {
                    that.txt_1.text = '你将可以看清';
                    that.txt_2.text = '发射后的拐弯路线';
                }
                setTimeout(function () {
                    that.guideBg.parent && that.guideBg.parent.removeChild(that.guideBg);
                }, 2000);
            }
        }
        function suc() {
            //道具+1
            var tool = userDataMaster.tool;
            tool[type].num++;
            userDataMaster.myTool = tool;
            that[type + 'Add'].visible = false;
            that[type + 'Num'].visible = true;
            that[type + 'Num'].text = 'X' + tool[type].num;
        }
    };
    Object.defineProperty(playBefore.prototype, "factor", {
        get: function () {
            return 0;
        },
        set: function (value) {
            this.img.x = (1 - value) * (1 - value) * (-150) + 2 * value * (1 - value) * 100 + value * value * 150;
            this.img.y = (1 - value) * (1 - value) * (-200) + 2 * value * (1 - value) * 200 + value * value * 550;
            this.img.scaleX = 1 - value;
            this.img.scaleY = 1 - value;
        },
        enumerable: true,
        configurable: true
    });
    playBefore.prototype.startFun = function (life) {
        if (life === void 0) { life = true; }
        var that = this;
        var t = 0;
        if (life) {
            //使用体力开始
            if (userDataMaster.life <= 0) {
                console.log('体力不足');
                platform.showModal({
                    title: '温馨提示',
                    content: '您的体力不足',
                    success: function (res) {
                        if (res.confirm) {
                            sceneMaster.changeScene(new startScene());
                            sceneMaster.openModal(new getLifeModal());
                        }
                    }
                });
                return;
            }
            t = 500;
            var img = new eui.Image(RES.getRes('img_strength_01_png'));
            img.anchorOffsetX = img.width / 2;
            img.anchorOffsetY = img.height / 2;
            img.y = -200;
            img.x = -100;
            that.addChild(img);
            that.img = img;
            egret.Tween.get(that).to({ factor: 1 }, t);
            userDataMaster.myLife = userDataMaster.life - 1;
        }
        setTimeout(function () {
            for (var item in that.choose) {
                if (that.choose[item]) {
                    userDataMaster.tool[item].num--;
                }
            }
            egret.Tween.removeAllTweens();
            sceneMaster.changeScene(new runningScene(that.level, {}, that.choose));
        }, t);
    };
    playBefore.prototype.videoFun = function () {
        var that = this;
        if (this.level <= userDataMaster.level) {
            // 旧关卡免体力开始
            that.startFun(false);
            return;
        }
        if (!userDataMaster.dayFreeLife) {
            //今天视频次数用完
            platform.showModal({
                title: '温馨提醒',
                content: '今日免体力次数已用完，请明日再来'
            });
        }
        if (userDataMaster.dayFreeLife.num < 3) {
            CallbackMaster.openShare(function () {
                that.startFun(false);
            });
        }
        else {
            AdMaster.useVideo(function () {
                that.startFun(false);
            }, function () {
                platform.showModal({
                    title: '温馨提示',
                    content: '暂未开通视频奖励'
                });
            });
        }
    };
    playBefore.prototype.closeFun = function () {
        egret.Tween.removeTweens(this.glassImg);
        if (this.bulletImg && this.bulletImg.parent) {
            egret.Tween.removeTweens(this.bulletImg);
        }
        if (sceneMaster.littleModal) {
            sceneMaster.closeLittleModal();
        }
        else {
            sceneMaster.closeModal();
        }
    };
    return playBefore;
}(eui.Component));
__reflect(playBefore.prototype, "playBefore", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=playBefore.js.map