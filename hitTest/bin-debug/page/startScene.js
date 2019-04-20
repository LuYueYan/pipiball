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
        that.addEventListener(egret.TouchEvent.TOUCH_TAP, that.judgeFun, that);
        userDataMaster.myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.dataChange, this);
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
            that.moreComponent.y = 147;
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
            var x = e.stageX - (t.x - t.anchorOffsetX);
            var y = e.stageY - (t.y - t.anchorOffsetY);
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
