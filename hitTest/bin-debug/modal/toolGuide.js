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
var toolGuide = (function (_super) {
    __extends(toolGuide, _super);
    function toolGuide(type) {
        if (type === void 0) { type = 0; }
        var _this = _super.call(this) || this;
        _this.type = 1; //类型 1 锤子 2 头盔 3红绿灯
        _this.arr = ['可击碎任意方块', '可使弹药威力加倍', '可控制砖块不下落'];
        _this.type = type;
        return _this;
    }
    toolGuide.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    toolGuide.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    toolGuide.prototype.init = function () {
        var that = this;
        that.txt_2.text = that.arr[that.type];
    };
    return toolGuide;
}(eui.Component));
__reflect(toolGuide.prototype, "toolGuide", ["eui.UIComponent", "egret.DisplayObject"]);
