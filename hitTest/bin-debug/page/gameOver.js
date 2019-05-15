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
var gameOver = (function (_super) {
    __extends(gameOver, _super);
    function gameOver(level, myData) {
        var _this = _super.call(this) || this;
        _this.level = level;
        _this.myData = myData;
        return _this;
    }
    gameOver.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    gameOver.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.homeBtn) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    gameOver.prototype.init = function () {
        var that = this;
        if (AdMaster.cacheBannerAd) {
            AdMaster.openBannerAd({ width: 700, height: 300 });
        }
        var dataGroup = new eui.DataGroup();
        var list = [];
        if (userDataMaster.recommand['2'] && userDataMaster.recommand['2'].games) {
            list = userDataMaster.recommand['2'].games.slice(0, 4);
        }
        else {
            list = userDataMaster.recommand['1'].games.slice(0, 4);
        }
        var source = new eui.ArrayCollection(list);
        dataGroup.dataProvider = source;
        var layout = new eui.HorizontalLayout();
        layout.gap = -5;
        dataGroup.layout = layout;
        dataGroup.itemRenderer = moreItem;
        that.moreGroup.addChild(dataGroup);
        var params = {
            uid: userDataMaster.myInfo.uid,
            level: this.level,
            score: that.myData.score,
            star: that.myData.star
        };
        ServiceMaster.post(ServiceMaster.getScore, params, function (res) {
            if (parseInt(res.code) === 1 && res.data) {
            }
        });
        this.levelText.text = '第' + this.level + '关';
        this.levelProccess.text = this.myData.amount + '/' + userDataMaster.levelArr[this.level - 1].amount;
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareFun, this);
        this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.homeFun, this);
        this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playFun, this);
    };
    gameOver.prototype.shareFun = function () {
        CallbackMaster.openShare(null, -1);
    };
    gameOver.prototype.homeFun = function () {
        AdMaster.closeBannerAd();
        egret.Tween.removeAllTweens();
        sceneMaster.changeScene(new startScene());
    };
    gameOver.prototype.playFun = function () {
        AdMaster.closeBannerAd();
        var level = this.level;
        sceneMaster.openLittleModal(new playBefore(level));
    };
    return gameOver;
}(eui.Component));
__reflect(gameOver.prototype, "gameOver", ["eui.UIComponent", "egret.DisplayObject"]);
