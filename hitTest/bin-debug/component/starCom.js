var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var starCom = (function () {
    function starCom() {
        this.type = 4; //星星
        this.isRemoved = false; //是否已经被移除
        this.squareType = 2; //星星类型
        this.init();
    }
    starCom.prototype.init = function () {
        this.img = this.createBitmapByName('img_lightning_01');
    };
    starCom.prototype.createBody = function (x, y, that) {
        var boxShape = new p2.Box({ width: 1.92, height: 1.92 });
        boxShape.collisionGroup = 2;
        boxShape.collisionMask = 5;
        boxShape.sensor = true; //作为传感器，被穿透
        this.boxBody = new p2.Body({ mass: 100, position: [x, y], type: p2.Body.KINEMATIC });
        this.boxBody.addShape(boxShape);
        this.boxBody.displays = [this.img];
        that.addChild(this.img);
        return this.boxBody;
    };
    starCom.prototype.updateText = function (that, callback) {
        if (callback === void 0) { callback = null; }
        //碰撞后做出反应
        var self = this;
        self.isRemoved = true;
        if (!this.gif) {
            var gif_1 = movieMaster.getGif('lightning');
            gif_1.x = this.img.x - 180 / 2;
            gif_1.y = this.img.y - 180 / 2;
            this.gif = gif_1;
            gif_1.addEventListener(egret.Event.COMPLETE, function (e) {
                gif_1.parent && gif_1.parent.removeChild(gif_1);
            }, this);
        }
        that.addChild(this.gif);
        this.gif.gotoAndPlay(1, 1);
        callback && callback();
    };
    starCom.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name + '_png');
        result.texture = texture;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        return result;
    };
    return starCom;
}());
__reflect(starCom.prototype, "starCom");
window['starCom'] = starCom;
