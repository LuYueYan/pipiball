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
var getLifeModal = (function (_super) {
    __extends(getLifeModal, _super);
    function getLifeModal() {
        var _this = _super.call(this) || this;
        _this.shareCount = 0;
        return _this;
    }
    getLifeModal.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    getLifeModal.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.videoBtn) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    getLifeModal.prototype.init = function () {
        var that = this;
        if (AdMaster.cacheBannerAd) {
            AdMaster.openBannerAd({ width: 700, height: 300 });
        }
        var terval = setInterval(function () {
            if (userDataMaster.life >= 5) {
                clearInterval(terval);
                userDataMaster.seconds = 0;
            }
            that.getFormat(userDataMaster.seconds);
            // that.timeText.text = '还差' + that.getFormat(userDataMaster.seconds) + '恢复1点体力';
        }, 1000);
        that.shareTimes.text = "(" + userDataMaster.dayShareLife.num + "/5)";
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
        this.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.videoFun, this);
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareFun, this);
    };
    getLifeModal.prototype.getFormat = function (t) {
        var f = Math.floor(t / 60);
        var n = f < 10 ? '0' + f : f;
        var s = t % 60;
        var c = s < 10 ? '0' + s : s + '';
        var res = n + ':' + c;
        for (var i = 0, len = res.length; i < len; i++) {
            this['timeText_' + i].text = res[i];
        }
        // return res;
    };
    getLifeModal.prototype.closeFun = function () {
        AdMaster.closeBannerAd();
        sceneMaster.closeModal();
    };
    getLifeModal.prototype.videoFun = function () {
        AdMaster.useVideo(function () {
            suc();
        }, function () {
            platform.showModal({
                title: '温馨提示',
                content: '视频奖励次数已达上限'
            });
        });
        function suc() {
            userDataMaster.myLife = userDataMaster.life + 1;
            sceneMaster.openLittleModal(new getSuccess('img_gift_01_png', ''));
        }
    };
    getLifeModal.prototype.shareFun = function () {
        var that = this;
        if (userDataMaster.todayShareLife) {
            CallbackMaster.openShare(function () {
                //    体力加1
                userDataMaster.dayShareLife.num++;
                userDataMaster.myLife = userDataMaster.life + 1;
                that.shareTimes.text = "(" + userDataMaster.dayShareLife.num + "/5)";
                sceneMaster.openLittleModal(new getSuccess('img_gift_01_png', ''));
            }, that.shareCount);
            that.shareCount++;
        }
        else {
            //今日获取次数已用完，请明日再来
            platform.showModal({
                title: '温馨提示',
                content: '今日获取次数已用完，请明日再来'
            });
        }
    };
    return getLifeModal;
}(eui.Component));
__reflect(getLifeModal.prototype, "getLifeModal", ["eui.UIComponent", "egret.DisplayObject"]);
