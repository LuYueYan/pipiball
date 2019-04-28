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
var tweenButton = (function (_super) {
    __extends(tweenButton, _super);
    function tweenButton() {
        var _this = _super.call(this) || this;
        _this.osx = _this.scaleX;
        _this.osy = _this.scaleY;
        return _this;
    }
    tweenButton.prototype.onTouchCancle = function (event) {
        _super.prototype.onTouchCancle.call(this, event);
        var tween = egret.Tween.get(this);
        tween.to({ scaleX: this.osx, scaleY: this.osy }, 60);
    };
    tweenButton.prototype.onTouchBegin = function (event) {
        _super.prototype.onTouchBegin.call(this, event);
        var tween = egret.Tween.get(this);
        tween.to({ scaleX: 0.8 * this.osx, scaleY: 0.8 * this.osy }, 60);
    };
    tweenButton.prototype.buttonReleased = function () {
        _super.prototype.buttonReleased.call(this);
        var tween = egret.Tween.get(this);
        tween.to({ scaleX: this.osx, scaleY: this.osy }, 60);
    };
    return tweenButton;
}(eui.Button));
__reflect(tweenButton.prototype, "tweenButton");
window['tweenButton'] = tweenButton;
//# sourceMappingURL=tweenButton.js.map