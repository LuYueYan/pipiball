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
var teachModal = (function (_super) {
    __extends(teachModal, _super);
    function teachModal() {
        return _super.call(this) || this;
    }
    teachModal.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    teachModal.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.bgImg) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    teachModal.prototype.init = function () {
        this.bgImg.height = this.stage.stageHeight;
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
    };
    teachModal.prototype.closeFun = function () {
        sceneMaster.closeModal();
    };
    return teachModal;
}(eui.Component));
__reflect(teachModal.prototype, "teachModal", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=teachModal.js.map