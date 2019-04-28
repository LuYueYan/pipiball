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
var getSuccess = (function (_super) {
    __extends(getSuccess, _super);
    function getSuccess(imgName, title) {
        var _this = _super.call(this) || this;
        _this.imgName = 'img_diamond_big_png'; //图片名字
        _this.shareType = 1; //是否分享 默认分享
        _this.imgName = imgName;
        _this.title = title;
        return _this;
    }
    getSuccess.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    getSuccess.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.knowBtn) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    getSuccess.prototype.init = function () {
        this.img.texture = RES.getRes(this.imgName);
        this.txt.text = '' + this.title;
        egret.Tween.get(this.light, { loop: true }).to({ rotation: 360 }, 5000);
        this.knowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.knowFun, this);
        this.ifShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ifShareFun, this);
    };
    getSuccess.prototype.knowFun = function () {
        egret.Tween.removeTweens(this.light);
        if (this.shareType == 1) {
            CallbackMaster.openShare(null, false);
        }
        if (sceneMaster.littleModal) {
            sceneMaster.closeLittleModal();
        }
        else {
            sceneMaster.closeModal();
        }
    };
    getSuccess.prototype.ifShareFun = function () {
        this.shareType = this.shareType == 1 ? 2 : 1;
        this.shareImg.texture = RES.getRes('img_check_0' + this.shareType + '_png');
    };
    return getSuccess;
}(eui.Component));
__reflect(getSuccess.prototype, "getSuccess", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=getSuccess.js.map