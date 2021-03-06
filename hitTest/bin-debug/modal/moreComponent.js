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
var moreComponent = (function (_super) {
    __extends(moreComponent, _super);
    function moreComponent() {
        return _super.call(this) || this;
    }
    moreComponent.getInstance = function () {
        if (!moreComponent.shared) {
            moreComponent.shared = new moreComponent();
        }
        return moreComponent.shared;
    };
    moreComponent.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    moreComponent.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    moreComponent.prototype.init = function () {
        var list = userDataMaster.recommand['1'].games;
        for (var i = 0; i < list.length; i++) {
            list[i].color = 0x603005;
        }
        this.sourceArr = new eui.ArrayCollection(list);
        // this.loadData()
        this.dataGroup = new eui.DataGroup();
        this.dataGroup.dataProvider = this.sourceArr;
        this.dataGroup.percentWidth = 400;
        this.dataGroup.percentHeight = this.sourceArr.length * 170;
        this.content.height = this.sourceArr.length * 170;
        this.dataGroup.useVirtualLayout = true;
        var layout = new eui.TileLayout();
        layout.horizontalGap = 0;
        layout.verticalGap = 15;
        this.dataGroup.layout = layout;
        this.content.addChild(this.dataGroup);
        this.dataGroup.itemRenderer = moreItem;
        this.changeArea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePosition, this);
        this.tipImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePosition, this);
    };
    moreComponent.prototype.changePosition = function () {
        var that = this;
        if (this.tipImg.visible == true) {
            this.tipImg.visible = false;
        }
        if (this.container.x == -465) {
            egret.Tween.get(this.container).to({ x: 0 }, 500).call(function () {
                that.changeArea.texture = RES.getRes('btn_more_game_turn_png');
            });
        }
        else {
            egret.Tween.get(this.container).to({ x: -465 }, 500).call(function () {
                that.changeArea.texture = RES.getRes('btn_more_game_png');
            });
        }
    };
    return moreComponent;
}(eui.Component));
__reflect(moreComponent.prototype, "moreComponent", ["eui.UIComponent", "egret.DisplayObject"]);
window['moreComponent'] = moreComponent;
