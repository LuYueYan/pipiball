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
var continueGift = (function (_super) {
    __extends(continueGift, _super);
    function continueGift() {
        var _this = _super.call(this) || this;
        _this.arr = [
            { name: 'gold', img: 'img_gift_02_png' },
            { name: 'hammer', img: 'img_gift_06_png' },
            { name: 'hat', img: 'img_gift_07_png' },
            { name: 'lamp', img: 'img_gift_08_png' }
        ];
        _this.shareCount = 0;
        _this.getSuc = false;
        return _this;
    }
    continueGift.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    continueGift.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.img) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    continueGift.prototype.init = function () {
        var that = this;
        egret.Tween.get(that.light, { loop: true }).to({ rotation: 360 }, 5000);
        that.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.getFun, that);
        that.ignoreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.ignoreFun, that);
        setTimeout(function () {
            that.ignoreBtn.visible = true;
        }, 5000);
    };
    continueGift.prototype.getFun = function () {
        var that = this;
        if (that.getSuc) {
            that.ignoreFun();
        }
        else {
            CallbackMaster.openShare(function () {
                suc();
            }, that.shareCount);
            that.shareCount++;
        }
        function suc() {
            that.getSuc = true;
            var reward = that.arr[Math.floor(Math.random() * that.arr.length)];
            var txt = 'X1';
            if (reward.name == 'gold') {
                userDataMaster.myGold = userDataMaster.gold + 10;
                txt = 'X10';
            }
            else {
                var tool = userDataMaster.tool;
                tool[reward.name].num++;
                userDataMaster.myTool = tool;
            }
            that.txt.visible = true;
            that.txt.text = txt;
            that.img.texture = RES.getRes(reward.img);
            that.useBtn.texture = RES.getRes('btn_cc_06_png');
            that.ignoreBtn.visible = false;
        }
    };
    continueGift.prototype.ignoreFun = function () {
        egret.Tween.removeTweens(this.light);
        sceneMaster.closeModal();
    };
    return continueGift;
}(eui.Component));
__reflect(continueGift.prototype, "continueGift", ["eui.UIComponent", "egret.DisplayObject"]);
