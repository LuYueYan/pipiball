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
var useToolModal = (function (_super) {
    __extends(useToolModal, _super);
    function useToolModal(type) {
        var _this = _super.call(this) || this;
        _this.arr = {
            hammer: { title: 'img_name_01_png', price: 20, describ: '该道具可一锤击碎任意方块', img: 'img_gift_06_png' },
            hat: { title: 'img_name_02_png', price: 20, describ: '该道具可使所有弹药伤害翻倍', img: 'img_gift_07_png' },
            lamp: { title: 'img_name_03_png', price: 20, describ: '该道具可使方块暂停下落一次', img: 'img_gift_08_png' }
        };
        _this.type = 'hammer';
        _this.type = type;
        return _this;
    }
    useToolModal.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    useToolModal.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.closeBtn) {
            this.init();
        }
        else {
            this.once(egret.Event.COMPLETE, this.init, this);
        }
    };
    useToolModal.prototype.init = function () {
        var that = this;
        that.title.texture = RES.getRes(that.arr[that.type].title);
        that.describ.text = that.arr[that.type].describ;
        that.img.texture = RES.getRes(that.arr[that.type].img);
        egret.Tween.get(that.light, { loop: true }).to({ rotation: 360 }, 5000);
        if (userDataMaster.tool[that.type].num <= 0) {
            that.useBtn.texture = RES.getRes('btn_cc_08_png');
        }
        that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, that);
        // that.useBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.useFun, that);
    };
    useToolModal.prototype.closeFun = function () {
        egret.Tween.removeTweens(this.light);
        sceneMaster.closeModal();
    };
    return useToolModal;
}(eui.Component));
__reflect(useToolModal.prototype, "useToolModal", ["eui.UIComponent", "egret.DisplayObject"]);
