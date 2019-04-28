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
        return _super.call(this) || this;
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
        var terval = setInterval(function () {
            if (userDataMaster.life >= 5 && userDataMaster.seconds <= 0) {
                clearInterval(terval);
                userDataMaster.seconds = 0;
            }
            that.timeText.text = '还差' + that.getFormat(userDataMaster.seconds) + '恢复1点体力';
        }, 1000);
        that.shareTimes.text = "(" + userDataMaster.dayShareLife.num + "/5)";
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
        this.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.videoFun, this);
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareFun, this);
    };
    getLifeModal.prototype.getFormat = function (t) {
        var n = Math.floor(t / 60);
        var s = t % 60;
        var c = s < 10 ? '0' + s : s + '';
        return '0' + n + ':' + c;
    };
    getLifeModal.prototype.closeFun = function () {
        sceneMaster.closeModal();
    };
    getLifeModal.prototype.videoFun = function () {
        AdMaster.useVideo(function () {
            suc();
        }, function () {
            // CallbackMaster.openShare(() => {
            // 	suc();
            // })
            platform.showModal({
                title: '温馨提示',
                content: '暂时没有视频可以观看哦~'
            });
        });
        function suc() {
            userDataMaster.myLife++;
        }
    };
    getLifeModal.prototype.shareFun = function () {
        if (userDataMaster.todayShareLife) {
            CallbackMaster.openShare(function () {
                //    体力加1
                userDataMaster.dayShareLife.num++;
                userDataMaster.myLife = userDataMaster.life + 1;
                ;
            });
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
//# sourceMappingURL=getLifeModal.js.map