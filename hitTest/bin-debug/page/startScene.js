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
var startScene = (function (_super) {
    __extends(startScene, _super);
    function startScene() {
        var _this = _super.call(this) || this;
        _this.targetArr = [
            'lifeGroup',
            'goldGroup',
            'openLife',
            'openShare',
            'openBullet',
            'openShop',
            'openRank',
            'openGift'
        ];
        _this.shareCount = 0;
        return _this;
    }
    startScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    startScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.bgImg) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    startScene.prototype.init = function () {
        var that = this;
        that.bgImg.height = that.stage.stageHeight;
        that.navGroup.y += that.stage.stageHeight - 1334;
        that.liftText.text = userDataMaster.life + '/5';
        that.goldText.text = userDataMaster.gold + '';
        that.createRecommand();
        var scroll = levelCom.getInstance();
        that.addChildAt(scroll, 1);
        egret.Tween.removeTweens(scroll.light);
        egret.Tween.get(scroll.light, { loop: true }).to({ rotation: 360 }, 3000);
        scroll.scroller.height = that.stage.stageHeight;
        var cloud_top = new cloudCom('cloud_top');
        that.addChildAt(cloud_top, 2);
        var cloud_bottom = new cloudCom('cloud_bottom');
        that.addChildAt(cloud_bottom, 3);
        cloud_bottom.y = that.stage.stageHeight - cloud_bottom.height;
        egret.Tween.get(that.bullet_new_icon, { loop: true }).to({ y: -20 }, 1000).to({ y: -8 }, 1000);
        setTimeout(function () {
            that.chooseSex(0);
        }, 1000);
        that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.judgeFun, that);
        userDataMaster.myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.dataChange, this);
    };
    startScene.prototype.chooseSex = function (num) {
        var that = this;
        if (userDataMaster.myInfo.uid) {
            //静默登录成功
            if (!(userDataMaster.myInfo.gender && userDataMaster.myInfo.gender > 0)) {
                sceneMaster.openModal(new chooseSex());
            }
        }
        else if (num++ < 5) {
            setTimeout(function () {
                that.chooseSex(num);
            }, 1000);
        }
    };
    startScene.prototype.createRecommand = function (n) {
        if (n === void 0) { n = 0; }
        var that = this;
        if (userDataMaster.recommand && userDataMaster.recommand['1'] && userDataMaster.recommand['1'].games) {
            var dataGroup = new eui.DataGroup();
            var list = userDataMaster.recommand['1'].games.slice(0, 3);
            for (var i = 0; i < list.length; i++) {
                list[i].color_1 = 0x164E33;
            }
            var source = new eui.ArrayCollection(list);
            dataGroup.dataProvider = source;
            var layout = new eui.VerticalLayout();
            layout.gap = 20;
            dataGroup.layout = layout;
            dataGroup.itemRenderer = moreItem;
            that.moreGroup.addChild(dataGroup);
            that.moreComponent = moreComponent.getInstance();
            that.moreComponent.y = 350;
            that.addChild(that.moreComponent);
            that.moreComponent.changeArea.texture = RES.getRes('btn_more_game_png');
        }
        else {
            n++;
            setTimeout(function () {
                that.createRecommand(n);
            }, 300);
        }
    };
    startScene.prototype.dataChange = function (e) {
        this.liftText.text = userDataMaster.life + '/5';
        this.goldText.text = userDataMaster.gold + '';
    };
    startScene.prototype.judgeFun = function (e) {
        var that = this;
        if (sceneMaster.modal) {
            return;
        }
        for (var _i = 0, _a = that.targetArr; _i < _a.length; _i++) {
            var item = _a[_i];
            var t = that[item];
            var x = e.stageX - (t.x - t.anchorOffsetX + t.parent.x);
            var y = e.stageY - (t.y - t.anchorOffsetY + t.parent.y);
            if (x > 0 && x < t.width && y > 0 && y < t.height) {
                that[item + 'Fun'] && that[item + 'Fun']();
                return;
            }
        }
    };
    startScene.prototype.lifeGroupFun = function () {
        var that = this;
        that.openLifeFun();
    };
    startScene.prototype.goldGroupFun = function () {
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
            sceneMaster.openModal(new getSuccess('img_diamond_big_png', 'X' + 20));
        }
    };
    startScene.prototype.openLifeFun = function () {
        var that = this;
        that.life_dot.visible = false;
        sceneMaster.openModal(new getLifeModal());
    };
    startScene.prototype.openShareFun = function () {
        var that = this;
        CallbackMaster.openShare(null, -1);
    };
    startScene.prototype.openBulletFun = function () {
        var that = this;
        egret.Tween.removeTweens(that.bullet_new_icon);
        that.bullet_new_icon.parent && that.bullet_new_icon.parent.removeChild(that.bullet_new_icon);
        sceneMaster.openModal(new myShop());
    };
    startScene.prototype.openShopFun = function () {
        var that = this;
        sceneMaster.openModal(new teachModal());
    };
    startScene.prototype.openRankFun = function () {
        var that = this;
        sceneMaster.openModal(new rankModal());
    };
    startScene.prototype.openGiftFun = function () {
        var that = this;
        that.red_dot.parent && that.red_dot.parent.removeChild(that.red_dot);
        sceneMaster.openModal(new giftModal());
    };
    return startScene;
}(eui.Component));
__reflect(startScene.prototype, "startScene", ["eui.UIComponent", "egret.DisplayObject"]);
