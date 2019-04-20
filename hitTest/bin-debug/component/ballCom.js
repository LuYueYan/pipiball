var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ballCom = (function () {
    function ballCom() {
        this.type = 3; //精灵
        this.isRemoved = false; //是否已经被移除
        this.init();
    }
    ballCom.prototype.init = function () {
        this.img = this.createBitmapByName(userDataMaster.bulletArr[userDataMaster.bulletIndex].img);
        this.img.width = 82,
            this.img.height = 86;
        this.img.anchorOffsetX = this.img.width / 2;
        this.img.anchorOffsetY = this.img.height / 2;
    };
    ballCom.prototype.createBody = function (x, y, that) {
        var boxShape = new p2.Box({ width: 1.8, height: 1.8 });
        boxShape.collisionGroup = 2;
        boxShape.collisionMask = 5;
        boxShape.sensor = true; //作为传感器，被穿透
        this.boxBody = new p2.Body({ mass: 100, position: [x, y], type: p2.Body.KINEMATIC });
        this.boxBody.addShape(boxShape);
        this.boxBody.displays = [this.img];
        that.addChild(this.img);
        egret.Tween.get(this.img, { loop: true }).to({ scaleX: 0.9, scaleY: 1.1 }, 200).to({ scaleX: 1, scaleY: 1 }, 100);
        return this.boxBody;
    };
    ballCom.prototype.updateText = function (that, callback) {
        if (callback === void 0) { callback = null; }
        //销毁
        var self = this;
        egret.Tween.removeTweens(this.img);
        egret.Tween.get(this.img).to({ scaleX: 1.3, scaleY: 1.3 }, 200).to({ scaleX: 1, scaleY: 1 }, 100);
        self.boxBody.shapes[0].collisionMask = 0;
        self.isRemoved = true;
        setTimeout(function () {
            self.boxBody.type = p2.Body.DYNAMIC;
            self.boxBody.gravityScale = 0;
            self.boxBody.velocity = [0, -10];
            self.boxBody.angularVelocity = 2;
            //计算掉落到地面销毁时间
            var t = (self.boxBody.position[1] - that.getPosition(935)) / 10;
            setTimeout(function () {
                //销毁
                that.world.removeBody(self.boxBody);
                self.img.parent && self.img.parent.removeChild(self.img);
                callback && callback();
            }, t * 1000);
        }, 1000);
        //播放销毁的动画
    };
    ballCom.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name + '_png');
        result.texture = texture;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        return result;
    };
    return ballCom;
}());
__reflect(ballCom.prototype, "ballCom");
window['ballCom'] = ballCom;
