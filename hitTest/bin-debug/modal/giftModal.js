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
var giftModal = (function (_super) {
    __extends(giftModal, _super);
    function giftModal() {
        var _this = _super.call(this) || this;
        _this.terval = null;
        _this.current = 0;
        _this.speed = 1000;
        _this.choosing = false;
        _this.canTap = true;
        _this.dataArr = [
            { id: 0, name: 'img_gift_05_png', num: 1, type: 'bullet' },
            { id: 1, name: 'img_gift_02_png', num: 30, type: 'gold' },
            { id: 2, name: 'img_gift_05_png', num: 1, type: 'bullet' },
            { id: 3, name: 'img_gift_04_png', num: 1, type: 'glass' },
            { id: 4, name: 'img_gift_01_png', num: 2, type: 'life' },
            { id: 5, name: 'img_gift_02_png', num: 20, type: 'gold' },
            { id: 6, name: 'img_gift_01_png', num: 1, type: 'life' },
            { id: 7, name: 'img_gift_03_png', num: 10, type: 'gold' }
        ];
        return _this;
    }
    giftModal.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    giftModal.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    giftModal.prototype.init = function () {
        var that = this;
        that.getBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.getFun, this);
        that.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.closeFun, this);
        that.terval = setInterval(function () { that.timer(that); }, 1000);
    };
    giftModal.prototype.timer = function (that) {
        that['bg_' + that.current].texture = RES.getRes('img_bg_lottery_01_png');
        that.current = that.current < 7 ? that.current + 1 : 0;
        that['bg_' + that.current].texture = RES.getRes('img_bg_lottery_02_png');
        if (!that.canTap && that.speed >= 1000) {
            that.choosing = false;
            var ran = Math.floor(Math.random() * 8 * 1000) + 5;
            setTimeout(function () {
                clearInterval(that.terval);
                that.canTap = true;
                var item = that.dataArr[that.current];
                switch (item.type) {
                    case 'glass':
                    case 'bullet':
                        var tool = userDataMaster.tool;
                        tool[item.type] += item.num;
                        userDataMaster.myTool = tool;
                        break;
                    case 'gold':
                        var gold = userDataMaster.gold;
                        gold += item.num;
                        userDataMaster.myGold = gold;
                        break;
                    case 'life':
                        var life = userDataMaster.life;
                        life += item.num;
                        userDataMaster.myLife = life;
                        break;
                    default:
                }
                sceneMaster.openLittleModal(new getSuccess(item.name, 'X' + item.num));
            }, ran);
        }
        if (that.choosing) {
            that.speed += 100;
            clearInterval(that.terval);
            that.terval = setInterval(function () { that.timer(that); }, that.speed);
        }
    };
    giftModal.prototype.getFun = function () {
        var that = this;
        if (!that.canTap) {
            return;
        }
        if (1) {
            that.canTap = false;
            that.speed = 50;
            clearInterval(that.terval);
            that.terval = setInterval(function () { that.timer(that); }, that.speed);
            setTimeout(function () {
                that.choosing = true;
            }, 3000);
        }
    };
    giftModal.prototype.closeFun = function () {
        sceneMaster.closeModal();
    };
    return giftModal;
}(eui.Component));
__reflect(giftModal.prototype, "giftModal", ["eui.UIComponent", "egret.DisplayObject"]);
