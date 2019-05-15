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
var levelUpModal = (function (_super) {
    __extends(levelUpModal, _super);
    function levelUpModal(level, info) {
        var _this = _super.call(this) || this;
        _this.shareCount = 0;
        _this.level = level;
        _this.info = info;
        return _this;
    }
    levelUpModal.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    levelUpModal.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.videoBtn) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    levelUpModal.prototype.init = function () {
        if (AdMaster.cacheBannerAd) {
            AdMaster.openBannerAd({ width: 700, height: 300 });
        }
        this.scoreText.text = this.info.score + '';
        this.levelText.text = '第' + this.level + '关';
        this.goldText.text = 'X' + this.info.gold;
        if (this.level > userDataMaster.levelStar.length) {
            //升关成功
            userDataMaster.levelStar.push(this.info.star);
            userDataMaster.myLevel = this.level;
        }
        else if (this.info.star > userDataMaster.levelStar[this.level - 1]) {
            //升星成功
            userDataMaster.levelStar[this.level - 1] = this.info.star;
        }
        var that = this;
        that.gif = movieMaster.getGif('through');
        that.gif.y = -300;
        that.addChildAt(that.gif, 0);
        that.gif.gotoAndPlay(1, -1);
        var _loop_1 = function (i) {
            setTimeout(function () {
                that['star_' + i].texture = RES.getRes('img_star_a1_png');
            }, i * 300);
        };
        for (var i = 1; i <= this.info.star; i++) {
            _loop_1(i);
        }
        var params = {
            uid: userDataMaster.myInfo.uid,
            level: that.level,
            score: that.info.score,
            star: that.info.star
        };
        ServiceMaster.post(ServiceMaster.getScore, params, function (res) {
            if (parseInt(res.code) === 1 && res.data) {
            }
        });
        platform.openDataContext.postMessage({
            type: "updateScore",
            score: that.info.score,
            level: that.level,
            star: that.info.star
        });
        this.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.videoFun, this);
        this.getBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.getFun(that.info.gold); }, this);
    };
    levelUpModal.prototype.videoFun = function () {
        var that = this;
        AdMaster.useVideo(function () {
            that.getFun(that.info.gold * 2);
        }, function () {
            CallbackMaster.openShare(function () {
                that.getFun(that.info.gold * 2);
            }, that.shareCount);
            that.shareCount++;
        });
        // let that = this;
        // function suc() {
        // 	AdMaster.closeBannerAd()
        // 	userDataMaster.myGold = userDataMaster.gold + that.info.gold * 2;
        // 	that.gif.stop();
        // 	egret.Tween.removeAllTweens();
        // 	sceneMaster.changeScene(new startScene());
        // 	sceneMaster.openModal(new getSuccess('img_diamond_big_png', 'X' + that.info.gold * 2));
        // }
    };
    levelUpModal.prototype.getFun = function (gold) {
        var that = this;
        AdMaster.closeBannerAd();
        userDataMaster.myGold = userDataMaster.gold + gold;
        that.gif.stop();
        egret.Tween.removeAllTweens();
        sceneMaster.changeScene(new startScene());
        setTimeout(function () {
            sceneMaster.openModal(new getSuccess('img_diamond_big_png', 'X' + gold));
        }, 50);
    };
    return levelUpModal;
}(eui.Component));
__reflect(levelUpModal.prototype, "levelUpModal", ["eui.UIComponent", "egret.DisplayObject"]);
