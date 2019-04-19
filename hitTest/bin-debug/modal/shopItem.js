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
        this.img.texture = RES.getRes(this.data.img + '_png');
        if (this.data.id == 0) {
            //第一个
            this.bgImg.texture = RES.getRes('img_bg_bullet_01_png');
        }
        else {
            this.bgImg.texture = RES.getRes('img_bg_bullet_02_png');
        }
        if (this.data.state == 0 && userDataMaster.gold < this.data.price) {
            //未购买&&金币不足
            this.btn.texture = RES.getRes('btn_insufficient_png');
        }
        else {
            var s = this.data.state == 0 ? 'btn_buy' : 'btn_use';
            this.btn.texture = RES.getRes(s + '_png');
        }
        if (this.data.id == userDataMaster.bulletIndex) {
            //使用中
            this.btn.texture = RES.getRes('img_using_png');
        }
        this.title.text = this.data.title;
        this.price.text = 'x' + this.data.price;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getFun, this);
    };
    shopItem.prototype.getFun = function () {
        //状态值 0--未购买 1--已购买
        if (this.data.state == 0) {
            if (userDataMaster.gold >= this.data.price) {
                //金币足够购买
                userDataMaster.bulletArr[this.data.id].state = 1;
                userDataMaster.myGold = userDataMaster.gold - this.data.price;
                var item = userDataMaster.bulletArr[this.data.id];
                sceneMaster.openLittleModal(new getSuccess(item.img + '_png', item.title));
            }
            else {
                console.log('金币不足');
                var txt_1 = new eui.Label('金币不足');
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
        else if (this.data.state == 1) {
            //使用
            userDataMaster.myBulleIndex = this.data.id;
            console.log('使用这个');
        }
    };
    return shopItem;
}(eui.ItemRenderer));
__reflect(shopItem.prototype, "shopItem", ["eui.UIComponent", "egret.DisplayObject"]);
