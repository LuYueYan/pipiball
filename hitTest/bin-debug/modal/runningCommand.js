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
var runningCommand = (function (_super) {
    __extends(runningCommand, _super);
    function runningCommand() {
        var _this = _super.call(this) || this;
        _this.index_1 = 0;
        _this.index_2 = 1;
        _this.terval = null;
        return _this;
    }
    runningCommand.getInstance = function () {
        if (!runningCommand.shared) {
            runningCommand.shared = new runningCommand();
        }
        return runningCommand.shared;
    };
    runningCommand.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    runningCommand.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    runningCommand.prototype.init = function () {
        var that = this;
        if (userDataMaster.recommand && userDataMaster.recommand['1'] && userDataMaster.recommand['1'].games) {
            var dataGroup = new eui.DataGroup();
            that.list = userDataMaster.recommand['1'].games;
            var list_1 = that.list;
            that.img_1.source = list_1[that.index_1].image;
            that.img_2.source = list_1[that.index_2].image;
            that.terval = setInterval(function () {
                that.index_1 = that.index_2 + 1 < list_1.length ? that.index_2 + 1 : 0;
                that.index_2 = that.index_1 + 1 < list_1.length ? that.index_1 + 1 : 0;
                that.img_1.source = list_1[that.index_1].image;
                that.img_2.source = list_1[that.index_2].image;
            }, 5000);
            that.img_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.judgeFun(1); }, that);
            that.img_2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.judgeFun(2); }, that);
        }
    };
    runningCommand.prototype.judgeFun = function (i) {
        var that = this;
        var item = that.list[that['index_'] + i];
        CallbackMaster.recommandClick(1, item);
        var type = 2;
        platform.navigateToMiniProgram({
            appId: item.appid,
            path: item.path,
            extraData: {},
            success: function (suc) {
            }, fail: function (err) {
                type = 3;
            },
            complete: function () {
                CallbackMaster.recommandClick(type, item);
            }
        });
    };
    return runningCommand;
}(eui.Component));
__reflect(runningCommand.prototype, "runningCommand", ["eui.UIComponent", "egret.DisplayObject"]);
window['runningCommand'] = runningCommand;
