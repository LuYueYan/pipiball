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
var squareGuide = (function (_super) {
    __extends(squareGuide, _super);
    function squareGuide(type) {
        if (type === void 0) { type = 1; }
        var _this = _super.call(this) || this;
        _this.type = 1; //类型 1炸弹 2冰块
        _this.type = type;
        return _this;
    }
    squareGuide.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    squareGuide.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    squareGuide.prototype.init = function () {
        var that = this;
        if (this.type == 2) {
            this.txt_1.text = "难度升级";
            this.txt_2.text = "出现会移动的方块";
            this.img.texture = RES.getRes('img_diamonds_big_02_png');
        }
        egret.Tween.get(this.txtGroup, { loop: true }).to({ y: 50 }, 500).to({ y: 100 }, 500);
        this.knowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.knowFun, this);
    };
    squareGuide.prototype.knowFun = function () {
        egret.Tween.removeTweens(this.txtGroup);
        sceneMaster.closeModal();
    };
    return squareGuide;
}(eui.Component));
__reflect(squareGuide.prototype, "squareGuide", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=squareGuide.js.map