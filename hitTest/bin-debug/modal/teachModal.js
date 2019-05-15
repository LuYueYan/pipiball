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
        var _this = _super.call(this) || this;
        _this.shareCount = 0;
        return _this;
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
        var that = this;
        var dy = that.stage.stageHeight - 1334;
        that.bgImg.height += dy;
        that.contentGroup.y += dy * 0.5;
        that.goldText.text = userDataMaster.gold + '';
        var tool = userDataMaster.tool;
        var _loop_1 = function (type) {
            that[type + '_num'].text = tool[type].num + '';
            that[type + '_get'].addEventListener(egret.TouchEvent.TOUCH_TAP, function () { that.getFun(type); }, that);
        };
        for (var type in tool) {
            _loop_1(type);
        }
        that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, that);
        that.goldGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, that.goldGroupFun, that);
    };
    teachModal.prototype.closeFun = function () {
        sceneMaster.closeModal();
    };
    teachModal.prototype.getFun = function (type) {
        var that = this;
        if (type == 'glass' || type == 'bullet') {
            AdMaster.useVideo(function () {
                userDataMaster.tool[type].num++;
                userDataMaster.myTool = userDataMaster.tool;
                that[type + '_num'].text = userDataMaster.tool[type].num + '';
            });
        }
        else {
            if (userDataMaster.gold >= 20) {
                userDataMaster.gold -= 20;
                that.goldText.text = userDataMaster.gold + '';
                userDataMaster.tool[type].num++;
                userDataMaster.myTool = userDataMaster.tool;
                that[type + '_num'].text = userDataMaster.tool[type].num + '';
            }
            else {
                platform.showToast({
                    title: '钻石不足',
                    icon: 'none'
                });
            }
        }
    };
    teachModal.prototype.goldGroupFun = function () {
        var that = this;
        if (!userDataMaster.todayShareGold) {
            platform.showModal({
                title: '温馨提示',
                content: '今日获取次数已达上限，请明日再来'
            });
            return;
        }
        CallbackMaster.openShare(function () {
            suc();
        }, that.shareCount);
        that.shareCount++;
        function suc() {
            userDataMaster.dayShareGold.num++;
            userDataMaster.myGold = userDataMaster.gold + 20;
            that.goldText.text = userDataMaster.gold + '';
            sceneMaster.openModal(new getSuccess('img_diamond_big_png', 'X' + 20));
        }
    };
    return teachModal;
}(eui.Component));
__reflect(teachModal.prototype, "teachModal", ["eui.UIComponent", "egret.DisplayObject"]);
