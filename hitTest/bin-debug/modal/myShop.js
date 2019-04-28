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
var myShop = (function (_super) {
    __extends(myShop, _super);
    function myShop() {
        return _super.call(this) || this;
    }
    myShop.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    myShop.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.goldGroup) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.COMPLETE, this.init, this);
        }
    };
    myShop.prototype.init = function () {
        var that = this;
        that.goldNum.text = userDataMaster.gold + '';
        that.scroller.height = that.stage.stageHeight - 150;
        that.sourceArr = new eui.ArrayCollection(userDataMaster.bulletArr);
        that.dataGroup = new eui.DataGroup();
        that.dataGroup.dataProvider = that.sourceArr;
        that.dataGroup.useVirtualLayout = true;
        var layout = new eui.VerticalLayout();
        layout.gap = -20;
        that.dataGroup.layout = layout;
        that.dataGroup.itemRenderer = shopItem;
        that.contentGroup.height = userDataMaster.bulletArr.length * 293;
        that.contentGroup.addChild(that.dataGroup);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
        this.goldGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goldGroupFun, this);
        userDataMaster.myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.collectionChangeHandler, this); //监听数据变化
    };
    myShop.prototype.collectionChangeHandler = function (e) {
        var that = this;
        var u = userDataMaster.bulletArr[userDataMaster.bulletIndex];
        that.goldNum.text = userDataMaster.gold + '';
        that.sourceArr.refresh();
    };
    myShop.prototype.closeFun = function () {
        sceneMaster.closeModal();
    };
    myShop.prototype.goldGroupFun = function () {
    };
    return myShop;
}(eui.Component));
__reflect(myShop.prototype, "myShop", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=myShop.js.map