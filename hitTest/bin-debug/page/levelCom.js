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
var levelCom = (function (_super) {
    __extends(levelCom, _super);
    function levelCom() {
        return _super.call(this) || this;
    }
    levelCom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    levelCom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.checkSuccess(0);
    };
    levelCom.prototype.checkSuccess = function (t) {
        var that = this;
        if (userDataMaster.getDataSuccess) {
            that.init();
        }
        else if (t < 5) {
            t++;
            setTimeout(function () {
                that.checkSuccess(t);
            }, 3000);
        }
    };
    levelCom.prototype.init = function () {
        var that = this;
        var arr = userDataMaster.levelArr;
        that.sourceArr = new eui.ArrayCollection(arr.concat([{ level: userDataMaster.levelArr.length + 1, text: '敬请期待' }]));
        that.dataGroup = new eui.DataGroup();
        that.dataGroup.dataProvider = that.sourceArr;
        var layout = new eui.VerticalLayout();
        layout.gap = 0;
        that.dataGroup.layout = layout;
        that.dataGroup.y = 554;
        that.dataGroup.percentWidth = 750;
        that.dataGroup.percentHeight = 130;
        that.content.height = that.dataGroup.y + 130 * userDataMaster.levelArr.length + 130;
        that.content.addChildAt(that.dataGroup, 4);
        that.dataGroup.itemRenderer = levelItem;
        that.dataGroup.useVirtualLayout = true;
        if (userDataMaster.levelStar.length > 1) {
            this.scroller.viewport.scrollV = 130 * (userDataMaster.levelStar.length - 1);
        }
        setTimeout(function () {
            var n = (userDataMaster.level + 1 + 2) % levelItem.point.length + 1;
            that.head.x = levelItem.point[n - 1].x;
            that.head.y = that.dataGroup.y - that.head.height + levelItem.point[n - 1].y + 130 * userDataMaster.level;
            that.headimg.source = userDataMaster.myInfo.avatarUrl;
            that.headimg.mask = that.headmask;
            egret.Tween.get(that.light, { loop: true }).to({ rotation: 360 }, 3000);
            that.head.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                sceneMaster.openModal(new playBefore(userDataMaster.level + 1));
            }, this);
        }, 300);
        var userInfo = new eui.ArrayCollection([userDataMaster.myInfo]);
        userInfo.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.dataChange, this);
    };
    levelCom.prototype.dataChange = function (e) {
        var that = this;
        that.headimg.source = userDataMaster.myInfo.avatarUrl;
        that.headimg.mask = that.headmask;
    };
    return levelCom;
}(eui.Component));
__reflect(levelCom.prototype, "levelCom", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=levelCom.js.map