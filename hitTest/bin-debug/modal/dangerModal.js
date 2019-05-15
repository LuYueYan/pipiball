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
var dangerModal = (function (_super) {
    __extends(dangerModal, _super);
    function dangerModal() {
        return _super.call(this) || this;
    }
    dangerModal.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    dangerModal.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    dangerModal.prototype.init = function () {
        var that = this;
        if (AdMaster.cacheBannerAd) {
            AdMaster.openBannerAd({ width: 700, height: 300 });
        }
        egret.Tween.get(that.light, { loop: true }).to({ rotation: 360 }, 3000);
        that.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.useFun, this);
        that.ignoreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.ignoreFun, this);
        setTimeout(function () {
            that.ignoreBtn.visible = true;
        }, 3000);
    };
    dangerModal.prototype.useFun = function () {
        egret.Tween.removeTweens(this.light);
    };
    dangerModal.prototype.ignoreFun = function () {
        AdMaster.closeBannerAd();
        egret.Tween.removeTweens(this.light);
        sceneMaster.closeModal();
    };
    return dangerModal;
}(eui.Component));
__reflect(dangerModal.prototype, "dangerModal", ["eui.UIComponent", "egret.DisplayObject"]);
