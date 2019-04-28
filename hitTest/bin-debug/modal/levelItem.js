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
var levelItem = (function (_super) {
    __extends(levelItem, _super);
    function levelItem() {
        return _super.call(this) || this;
    }
    levelItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    levelItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    levelItem.prototype.init = function () {
        this.bodyGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpFun, this);
    };
    levelItem.prototype.jumpFun = function () {
        egret.Tween.removeAllTweens();
        sceneMaster.openModal(new playBefore(this.data.level));
    };
    levelItem.prototype.dataChanged = function () {
        var n = (this.data.level + 1) % levelItem.point.length + 1;
        this.map.texture = RES.getRes('img_map_0' + n + '_png');
        this.bodyGroup.x = levelItem.point[n - 1].x;
        this.bodyGroup.y = levelItem.point[n - 1].y;
        this.levelText.text = this.data.level + '';
        if (this.data.level <= userDataMaster.levelStar.length) {
            //已过关的
            this.bgImg.texture = RES.getRes('img_wood_01_png');
            for (var i = 1; i <= userDataMaster.levelStar[this.data.level - 1]; i++) {
                this['star_' + i].texture = RES.getRes('img_star_b1_png');
            }
        }
        else if (this.data.level == userDataMaster.levelStar.length + 1) {
            //下一关
            this.bgImg.texture = RES.getRes('img_wood_01_png');
        }
        else {
            //未达到
            this.removeChild(this.star_1);
            this.removeChild(this.star_2);
            this.removeChild(this.star_3);
            this.bodyGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpFun, this);
        }
        this.cacheAsBitmap = true;
    };
    levelItem.point = [
        { x: 230, y: -30 },
        { x: 142, y: 0 },
        { x: 262, y: -6 },
        { x: 422, y: -40 },
        { x: 480, y: 0 },
        { x: 255, y: -30 },
        { x: 120, y: -30 },
        { x: 260, y: 0 },
        { x: 390, y: -26 },
    ];
    return levelItem;
}(eui.ItemRenderer));
__reflect(levelItem.prototype, "levelItem", ["eui.UIComponent", "egret.DisplayObject"]);
window['levelItem'] = levelItem;
//# sourceMappingURL=levelItem.js.map