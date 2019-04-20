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
        if (userDataMaster.tool.glass.num <= 0) {
            that.glassNum.visible = false;
            that.glassAdd.visible = true;
        }
        if (userDataMaster.tool.bullet.num <= 0) {
            that.bulletNum.visible = false;
            that.bulletAdd.visible = true;
        }
        that.titleText.text = '第' + this.level + '关';
        that.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.startFun, this);
        that.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.videoFun, this);
        that.glass.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseFun('glass'); }, this);
        that.bullet.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseFun('bullet'); }, this);
    };
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
        sceneMaster.changeScene(new runningScene(this.level, {}, this.choose));
    };
    playBefore.prototype.videoFun = function () {
        var that = this;
        AdMaster.useVideo(function () {
            that.startFun(false);
        }, function () {
            CallbackMaster.openShare(function () {
                that.startFun(false);
            });
        });
    };
    return playBefore;
}(eui.Component));
__reflect(playBefore.prototype, "playBefore", ["eui.UIComponent", "egret.DisplayObject"]);
