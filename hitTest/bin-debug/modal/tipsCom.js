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
var tipsCom = (function (_super) {
    __extends(tipsCom, _super);
    function tipsCom() {
        return _super.call(this) || this;
    }
    tipsCom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    tipsCom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    tipsCom.prototype.init = function () {
        var that = this;
        var arr = [
            '当你打不过了，去找新的植物炮弹帮助你吧',
            '你知道吗？包菜君可以说是最厉害的弹药了',
            '某些道具要到特定关卡才会开启哦',
            '开局道具记得选，整局游戏都能用，很强',
            '游戏中不要吝啬使用左下角的道具',
            '偷偷告诉你，旧关卡不消耗体力，还能赚宝石',
            '没有体力，点击“获取体力”，它会帮助你',
            '“免费礼物”有好东西，多去看看'
        ];
        var index_1 = 0;
        var index_2 = 1;
        that.tip_1.text = arr[index_1];
        that.tip_2.text = arr[index_2];
        that.tip_1.mask = that.reckMask_1;
        that.tip_2.mask = that.reckMask_2;
        egret.Tween.get(that.tip_1, { loop: true }).wait(5000).to({ y: -30 }, 60 * 10)
            .to({ y: 90 }, 0).call(function () {
            index_1 = index_2 + 1 < arr.length - 1 ? index_2 + 1 : 0;
            that.tip_1.text = arr[index_1];
        }).wait(5000).to({ y: 30 }, 60 * 10);
        egret.Tween.get(that.tip_2, { loop: true }).wait(5000).to({ y: 30 }, 60 * 10).wait(5000)
            .to({ y: -30 }, 60 * 10).to({ y: 90 }, 0).call(function () {
            index_2 = index_1 + 1 < arr.length - 1 ? index_1 + 1 : 0;
            that.tip_2.text = arr[index_2];
        });
    };
    return tipsCom;
}(eui.Component));
__reflect(tipsCom.prototype, "tipsCom", ["eui.UIComponent", "egret.DisplayObject"]);
window['tipsCom'] = tipsCom;
