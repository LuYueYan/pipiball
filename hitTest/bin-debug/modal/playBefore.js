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
        if (this.level == 5 && userDataMaster.level == 4) {
            //道具bullet首次出现 第五关
            that.guide.visible = true;
            that.guide.x = 240;
            that.txt_1.text = '点击试试新的道具';
            that.txt_1.text = '超级弹药筒';
            that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.guideFun, this);
        }
        else if (this.level == 1 && userDataMaster.level == 0) {
            //道具glass首次出现 第一关
            that.guide.visible = true;
            that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.guideFun, this);
        }
        else {
            that.removeChild(that.guide);
            if (this.level <= userDataMaster.level) {
                //已通过的老关卡
                that.startBtn.parent.removeChild(that.startBtn);
                that.videoBtn.texture = RES.getRes('btn_start_04_png');
            }
            else {
                that.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.startFun, this);
                if (userDataMaster.dayFreeLife.num >= 3) {
                    that.videoBtn.texture = RES.getRes('btn_before_02_png');
                }
            }
            if (this.level >= 5) {
                //出现炸弹
                if (userDataMaster.tool.bullet.num <= 0) {
                    that.bulletNum.visible = false;
                    that.bulletAdd.visible = true;
                }
                that.bullet.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseFun('bullet'); }, this);
            }
            else {
                that.bullet.parent.removeChild(that.bullet);
            }
            that.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.videoFun, this);
            that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, this);
            that.glass.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseFun('glass'); }, this);
        }
        if (userDataMaster.tool.glass.num <= 0) {
            that.glassNum.visible = false;
            that.glassAdd.visible = true;
        }
        that.titleText.text = '第' + this.level + '关';
    };
    playBefore.prototype.guideFun = function () {
        var that = this;
        that.removeEventListener(egret.TouchEvent.TOUCH_TAP, that.guideFun, this);
        that.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.videoFun, this);
        that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, this);
        that.glass.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseFun('glass'); }, this);
        if (that.startBtn && that.startBtn.parent) {
            that.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.startFun, this);
        }
        if (that.bullet.parent) {
            that.txt_1.text = '里面多藏了5颗弹药';
            that.txt_2.text = '助力开局';
            that.bullet.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseFun('bullet'); }, this);
        }
        else {
            that.txt_1.text = '你将可以看清';
            that.txt_2.text = '发射后的拐弯路线';
        }
    };
    playBefore.prototype.chooseFun = function (type) {
        var that = this;
        console.log(type);
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
            that.choose[type] = !that.choose[type];
            that[type + 'Choose'].visible = that.choose[type];
            that[type + 'Light'].visible = that.choose[type];
            that[type + 'Num'].visible = !that.choose[type];
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
    playBefore.prototype.startFun = function (life) {
        if (life === void 0) { life = true; }
        if (life) {
            //使用体力开始
            if (userDataMaster.life <= 0) {
                console.log('体力不足');
                return;
            }
            userDataMaster.myLife = userDataMaster.life - 1;
        }
        for (var item in this.choose) {
            if (this.choose[item]) {
                userDataMaster.tool[item].num--;
            }
        }
        egret.Tween.removeAllTweens();
        sceneMaster.changeScene(new runningScene(this.level, {}, this.choose));
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
                    content: '暂时没有视频可以观看哦~'
                });
            });
        }
    };
    playBefore.prototype.closeFun = function () {
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