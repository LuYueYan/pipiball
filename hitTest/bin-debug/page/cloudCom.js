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
var cloudCom = (function (_super) {
    __extends(cloudCom, _super);
    function cloudCom(title) {
        var _this = _super.call(this) || this;
        _this.title = title;
        return _this;
    }
    cloudCom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    cloudCom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    cloudCom.prototype.init = function () {
        this.img_1.texture = RES.getRes(this.title + '_left_png');
        this.img_2.texture = RES.getRes(this.title + '_right_png');
        egret.Tween.get(this.img_1, { loop: true }).to({ x: -750 }, 10000).to({ x: 750 }, 0).to({ x: 0 }, 10000);
        egret.Tween.get(this.img_2, { loop: true }).to({ x: 0 }, 10000).to({ x: -750 }, 10000).to({ x: 750 }, 0);
    };
    return cloudCom;
}(eui.Component));
__reflect(cloudCom.prototype, "cloudCom", ["eui.UIComponent", "egret.DisplayObject"]);
