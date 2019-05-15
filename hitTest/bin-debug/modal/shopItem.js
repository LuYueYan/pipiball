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
var shopItem = (function (_super) {
    __extends(shopItem, _super);
    function shopItem() {
        return _super.call(this) || this;
    }
    shopItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    shopItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    shopItem.prototype.dataChanged = function () {
        var _this = this;
        var that = this;
        that.img.texture = RES.getRes(that.data.img + '_png');
        that.power.texture = RES.getRes('img_power_0' + that.data.powerImg + '_png');
        that.txt.text = that.data.txt;
        if (that.data.id == 0) {
            //第一个
            that.bgImg.texture = RES.getRes('img_bg_bullet_01_png');
        }
        else {
            that.bgImg.texture = RES.getRes('img_bg_bullet_02_png');
        }
        switch (that.data.id) {
            case 0:
            case 3:
            case 4:
                that.unlockBtn.visible = false;
                that.tryBtn.visible = false;
                that.unlockText.visible = false;
                that.normalbtn.visible = true;
                that.price.visible = true;
                that.icon.visible = true;
                if (userDataMaster.bulletSateArr[that.data.id] == 0 && userDataMaster.gold < that.data.price) {
                    //未购买&&金币不足
                    that.normalbtn.texture = RES.getRes('btn_insufficient_png');
                }
                else {
                    var s = userDataMaster.bulletSateArr[that.data.id] == 0 ? 'btn_buy' : 'btn_use';
                    that.normalbtn.texture = RES.getRes(s + '_png');
                }
                if (that.data.id == userDataMaster.bulletIndex) {
                    //使用中
                    that.normalbtn.texture = RES.getRes('img_using_png');
                }
                that.price.text = 'x' + that.data.price;
                that.normalbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.getFun, that);
                break;
            case 1:
            case 2:
                that.unlockBtn.visible = true;
                that.tryBtn.visible = true;
                that.unlockText.visible = true;
                that.normalbtn.visible = false;
                that.price.visible = false;
                that.icon.visible = false;
                if (userDataMaster.bulletSateArr[that.data.id] == 0) {
                    //未获得
                    that.unlockBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        if (that.data.id == 1) {
                            CallbackMaster.openShare(function () {
                                shareSuc();
                            }, 1);
                        }
                        else {
                            AdMaster.useVideo(function () {
                                shareSuc();
                            });
                        }
                    }, that);
                    that.tryBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        CallbackMaster.openShare(function () {
                            userDataMaster.tryingIndex = _this.data.id;
                            sceneMaster.closeModal();
                            sceneMaster.openModal(new playBefore(userDataMaster.level + 1));
                        }, 1);
                    }, that);
                }
                else {
                    //已获得
                    userDataMaster.bulletStateNum['bullet_' + that.data.id] = userDataMaster.bulletArr[that.data.id].getNum;
                    that.unlockBtn.visible = false;
                    that.unlockText.visible = false;
                    that.tryBtn.visible = false;
                    that.normalbtn.visible = true;
                    that.normalbtn.texture = RES.getRes('btn_use_png');
                    that.normalbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.getFun, that);
                }
                if (that.data.id == 1) {
                    that.unlockText.text = '已邀' + userDataMaster.bulletStateNum['bullet_' + that.data.id] + '/' + userDataMaster.bulletArr[that.data.id].getNum + '位好友';
                }
                else {
                    that.unlockText.text = '已看' + userDataMaster.bulletStateNum['bullet_' + that.data.id] + '/' + userDataMaster.bulletArr[that.data.id].getNum + '次视频';
                }
                if (that.data.id == userDataMaster.bulletIndex) {
                    //使用中
                    that.unlockBtn.visible = false;
                    that.tryBtn.visible = false;
                    that.normalbtn.visible = true;
                    that.normalbtn.texture = RES.getRes('img_using_png');
                }
                break;
            default:
        }
        function shareSuc() {
            userDataMaster.bulletStateNum['bullet_' + that.data.id]++;
            if (userDataMaster.bulletStateNum['bullet_' + that.data.id] >= userDataMaster.bulletArr[that.data.id].getNum) {
                userDataMaster.bulletSateArr[that.data.id] = 1;
                that.unlockBtn.visible = false;
                that.tryBtn.visible = false;
                that.normalbtn.visible = true;
                that.normalbtn.texture = RES.getRes('btn_use_png');
                var item = userDataMaster.bulletArr[this.data.id];
                sceneMaster.openLittleModal(new getSuccess(item.img + '_png', item.title));
                that.normalbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, that.getFun, that);
            }
            else {
                if (that.data.id == 1) {
                    that.unlockText.text = '已邀' + userDataMaster.bulletStateNum['bullet_' + that.data.id] + '/' + userDataMaster.bulletArr[that.data.id].getNum + '位好友';
                }
                else {
                    that.unlockText.text = '已看' + userDataMaster.bulletStateNum['bullet_' + that.data.id] + '/' + userDataMaster.bulletArr[that.data.id].getNum + '次视频';
                }
            }
        }
        that.title.text = that.data.title;
    };
    shopItem.prototype.getFun = function () {
        //状态值 0--未购买 1--已购买
        if (userDataMaster.bulletSateArr[this.data.id] == 0) {
            if (userDataMaster.gold >= this.data.price) {
                //金币足够购买
                userDataMaster.bulletSateArr[this.data.id] = 1;
                userDataMaster.myGold = userDataMaster.gold - this.data.price;
                var item = userDataMaster.bulletArr[this.data.id];
                sceneMaster.openLittleModal(new getSuccess(item.img + '_png', item.title));
            }
            else {
                // console.log('钻石不足');
                var txt_1 = new eui.Label('钻石不足');
                txt_1.size = 30;
                txt_1.textColor = 0xffffff;
                txt_1.x = (750 - txt_1.width) / 2;
                txt_1.y = 500;
                this.parent.addChild(txt_1);
                egret.Tween.get(txt_1).to({ y: 100 }, 1000).to({ alpha: 0 }, 500).call(function () {
                    txt_1.parent && txt_1.parent.removeChild(txt_1);
                });
            }
        }
        else if (userDataMaster.bulletSateArr[this.data.id] == 1) {
            //使用
            userDataMaster.myBulletIndex = this.data.id;
            console.log('使用这个');
        }
    };
    return shopItem;
}(eui.ItemRenderer));
__reflect(shopItem.prototype, "shopItem", ["eui.UIComponent", "egret.DisplayObject"]);
