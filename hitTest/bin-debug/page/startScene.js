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
        this.liftText.text = userDataMaster.life + '/5';
        this.goldText.text = userDataMaster.gold + '';
        this.createRecommand();
        var scroll = new levelCom();
        this.addChildAt(scroll, 1);
        scroll.scroller.height = this.stage.stageHeight;
        var cloud_top = new cloudCom('cloud_top');
        this.addChildAt(cloud_top, 2);
        var cloud_bottom = new cloudCom('cloud_bottom');
        this.addChildAt(cloud_bottom, 3);
        cloud_bottom.y = this.stage.stageHeight - cloud_bottom.height;
        setTimeout(function () {
            if (!(userDataMaster.myInfo.gender && userDataMaster.myInfo.gender > 0)) {
                that.addChild(new chooseSex());
            }
        }, 1000);
        that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.judgeFun, that);
        userDataMaster.myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.dataChange, this);
        that.createscrollText();
    };
    startScene.prototype.createscrollText = function () {
        var arr = [
            '当你打不过了，去找新的植物炮弹帮助你吧',
            '你知道吗？包菜君可以说是最厉害的弹药了',
            '某些道具要到特定关卡才会开启哦',
            '开局道具记得选，整局游戏都能用，很强',
            '游戏中不要吝啬使用左下角的道具',
            '偷偷告诉你，旧关卡不消耗体力，还能赚宝石',
            '没有体力，点击“获取体力”，它会帮助你',
            '“免费礼物”有好东西，多去看看'
        ];
        var that = this;
        var index_1 = 0;
        var index_2 = 1;
        var dx = that.tip_1.x - (-that.tip_1.width);
        var dt = that.tip_1.x + that.tip_1.width - 750;
        animation_1();
        function animation_1() {
            var dt = that.tip_1.x + that.tip_1.width - 750 + 50;
            setTimeout(function () {
                animation_2();
            }, dt * 10);
            var dx_1 = that.tip_1.x + that.tip_1.width;
            egret.Tween.get(that.tip_1).to({ x: -that.tip_1.width }, dx_1 * 10).call(function () {
                index_1 = index_2 + 1 < arr.length - 1 ? index_2 + 1 : 0;
                that.tip_1.text = arr[index_1];
                that.tip_1.x = 750;
            });
        }
        function animation_2() {
            var dt = that.tip_2.x + that.tip_2.width - 750 + 50;
            setTimeout(function () {
                animation_1();
            }, dt * 10);
            var dx_2 = that.tip_2.x + that.tip_2.width;
            egret.Tween.get(that.tip_2).to({ x: -that.tip_2.width }, dx_2 * 10).call(function () {
                index_2 = index_1 + 1 < arr.length - 1 ? index_1 + 1 : 0;
                that.tip_2.text = arr[index_2];
                that.tip_2.x = 750;
            });
        }
    };
    startScene.prototype.createRecommand = function (n) {
        if (n === void 0) { n = 0; }
        var that = this;
        if (userDataMaster.recommand && userDataMaster.recommand['1'] && userDataMaster.recommand['1'].games) {
            var dataGroup = new eui.DataGroup();
            var list = userDataMaster.recommand['1'].games.slice(0, 3);
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
        AdMaster.useVideo(function () {
            suc();
        }, function () {
            CallbackMaster.openShare(function () {
                suc();
            });
        });
        var that = this;
        function suc() {
            userDataMaster.myGold = userDataMaster.gold + 10;
            sceneMaster.openModal(new getSuccess('img_diamond_big_png', 'X' + 10));
        }
    };
    startScene.prototype.openLifeFun = function () {
        var that = this;
        that.life_dot.visible = false;
        sceneMaster.openModal(new getLifeModal());
    };
    startScene.prototype.openShareFun = function () {
        var that = this;
        CallbackMaster.openShare(null, false);
    };
    startScene.prototype.openBulletFun = function () {
        var that = this;
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
//# sourceMappingURL=startScene.js.map