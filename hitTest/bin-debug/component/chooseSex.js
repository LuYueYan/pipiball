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
var chooseSex = (function (_super) {
    __extends(chooseSex, _super);
    function chooseSex() {
        var _this = _super.call(this) || this;
        _this.choose = 0;
        return _this;
    }
    chooseSex.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    chooseSex.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    chooseSex.prototype.init = function () {
        var that = this;
        that.gender_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseGender(1); }, this);
        that.gender_2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.chooseGender(2); }, this);
        that.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.sureFun, this);
    };
    chooseSex.prototype.sureFun = function () {
        var that = this;
        if (that.choose > 0) {
        }
    };
    chooseSex.prototype.chooseGender = function (type) {
        var that = this;
        that.sureBtn.visible = true;
        if (that.choose == type) {
            return;
        }
        else {
            that.choose = type;
            userDataMaster.myInfo.gender = that.choose;
            that['bg_' + type].visible = true;
            that['img_' + type].scaleX = 1;
            that['img_' + type].scaleY = 1;
            var other = type == 1 ? 2 : 1;
            that['bg_' + other].visible = false;
            that['img_' + other].scaleX = 0.8;
            that['img_' + other].scaleY = 0.8;
        }
        userDataMaster.userInfoBtn && userDataMaster.userInfoBtn.destroy();
        var top = that.sureBtn.y + that.y - that.anchorOffsetY;
        userDataMaster.createLoginBtn(244, top, 262, 112, function () {
            sceneMaster.closeModal();
        });
    };
    return chooseSex;
}(eui.Component));
__reflect(chooseSex.prototype, "chooseSex", ["eui.UIComponent", "egret.DisplayObject"]);
