var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var beeCom = (function () {
    function beeCom() {
        this.adaptation = 0; //适配长度
        this.power = 1; //每次的伤害值
        this.init();
    }
    beeCom.prototype.init = function () {
        this.img = this.createBitmapByName(userDataMaster.bulletArr[userDataMaster.bulletIndex].img);
        this.img.width = 58;
        this.img.height = 63;
        this.img.anchorOffsetX = this.img.width / 2;
        this.img.anchorOffsetY = this.img.height / 2;
        this.against = userDataMaster.bulletArr[userDataMaster.bulletIndex].target;
    };
    beeCom.prototype.createBody = function (that, x, y) {
        if (x === void 0) { x = 7.5; }
        if (y === void 0) { y = 0; }
        var vertices = [[0.25, -0.63], [0.25, 0.63], [-0.25, 0.63], [-0.25, -0.63]];
        var boxShape = new p2.Convex({ vertices: vertices });
        // var boxShape: p2.Shape = new p2.Box({ width: 0.5, height: 1.26 });
        //不碰撞同类
        boxShape.collisionGroup = 1;
        boxShape.collisionMask = 2;
        if (y == 0) {
            y = that.getPosition(900);
        }
        this.boxBody = new p2.Body({ mass: 100, position: [x, y] });
        this.boxBody.gravityScale = 1;
        this.boxBody.addShape(boxShape);
        that.world.addBody(this.boxBody);
        this.boxBody.displays = [this.img];
        that.addChild(this.img);
        return this.boxBody;
    };
    beeCom.prototype.powerUp = function (num) {
        if (num === void 0) { num = 1; }
        //伤害值改变
        this.power = num;
        if (num == 2) {
            this.img.texture = RES.getRes('img_lightning_02_png');
        }
        else if (num == 1) {
            this.img.texture = RES.getRes(userDataMaster.bulletArr[userDataMaster.bulletIndex].img + '_png');
        }
    };
    beeCom.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name + '_png');
        result.texture = texture;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        return result;
    };
    return beeCom;
}());
__reflect(beeCom.prototype, "beeCom");
window['beeCom'] = beeCom;
//# sourceMappingURL=beeCom.js.map