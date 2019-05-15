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
        _this.shareCount = 0;
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
        that.bgImg.height = that.stage.stageHeight;
        egret.Tween.get(that.getBtn, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).to({ scaleX: 1, scaleY: 1 }, 1000);
        if (userDataMaster.dayGift.num > 0) {
            that.getBtn.texture = RES.getRes('btn_lottery_0' + 2 + '_png');
        }
        else {
            // that.getBtn.texture = RES.getRes('btn_lottery_03_png');
        }
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
                if (that.canTap) {
                    return;
                }
                clearInterval(that.terval);
                var item = that.dataArr[that.current];
                switch (item.type) {
                    case 'glass':
                    case 'bullet':
                        var tool = userDataMaster.tool;
                        tool[item.type].num += item.num;
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
                userDataMaster.dayGift.num == 0 ? userDataMaster.dayGift.num++ : '';
                that.getBtn.texture = RES.getRes('btn_lottery_0' + 2 + '_png');
                sceneMaster.openLittleModal(new getSuccess(item.name, 'X' + item.num));
                that.canTap = true;
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
        if (!userDataMaster.todayGift) {
            platform.showModal({
                title: '温馨提示',
                content: '今日抽奖次数已用完，请明日再来'
            });
            return;
        }
        egret.Tween.removeTweens(that.getBtn);
        egret.Tween.get(that.getBtn).to({ scaleX: 0.8, scaleY: 0.8 }, 60).to({ scaleX: 1, scaleY: 1 }, 60);
        if (userDataMaster.dayGift.num == 0) {
            suc();
        }
        else if (userDataMaster.dayGift.num < 3) {
            // 分享
            CallbackMaster.openShare(function () {
                suc();
            }, that.shareCount);
            that.shareCount++;
        }
        else {
            AdMaster.useVideo(function () {
                suc();
            }, function () {
                CallbackMaster.openShare(function () {
                    suc();
                }, that.shareCount);
                that.shareCount++;
            });
        }
        function suc() {
            that.canTap = false;
            that.speed = 50;
            userDataMaster.dayGift.num++;
            clearInterval(that.terval);
            that.terval = setInterval(function () { that.timer(that); }, that.speed);
            setTimeout(function () {
                that.choosing = true;
            }, 3000);
        }
    };
    giftModal.prototype.closeFun = function () {
        egret.Tween.removeTweens(this.getBtn);
        sceneMaster.closeModal();
    };
    return giftModal;
}(eui.Component));
__reflect(giftModal.prototype, "giftModal", ["eui.UIComponent", "egret.DisplayObject"]);
