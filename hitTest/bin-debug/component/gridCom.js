var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var gridCom = (function () {
    function gridCom(num, type) {
        if (num === void 0) { num = 1; }
        if (type === void 0) { type = 1; }
        this.itemW = 96; //格子大小
        this.initNum = 1; //保存初始的血量数值
        this.num = 1; //需要击打的数量
        this.type = 1; //类型 1--方形 2--三角型 5--炸弹 6--冰块
        this.isRemoved = false; //是否已经被移除
        this.num = num;
        this.initNum = num;
        this.type = type;
        this.init();
    }
    gridCom.prototype.init = function () {
        if (this.type == 1) {
            var x = 'img_diamonds_a1';
            if (Math.random() > 0.7) {
                x = 'img_diamonds_c1';
            }
            this.img = this.createBitmapByName(x);
        }
        else if (this.type == 2) {
            this.img = this.createBitmapByName('img_diamonds_b1');
        }
        else if (this.type == 5) {
            this.img = this.createBitmapByName('img_diamonds_e1');
        }
        else {
            this.img = this.createBitmapByName('img_diamonds_d1');
        }
        this.img.anchorOffsetX = this.img.width / 2;
        this.img.anchorOffsetY = this.img.height / 2;
        this.txt = new egret.BitmapText();
        this.font = RES.getRes('stripe_text_fnt');
        this.txt.font = this.font;
        this.txt.text = this.num + '';
        this.txt.width = this.itemW;
        this.txt.textAlign = 'center';
        this.txt.anchorOffsetX = this.img.width / 2;
        this.txt.anchorOffsetY = this.img.height / 1.5;
        this.txt.scaleX = 0.8, this.txt.scaleY = 0.8;
    };
    gridCom.prototype.createBody = function (x, y, that) {
        var boxShape;
        if (this.type == 2) {
            var vertices = [[0.95, -0.95], [0.95, 0.95], [-0.95, 0.95]]; //必须是逆时针方向的数组
            boxShape = new p2.Convex({ vertices: vertices });
        }
        else {
            var vertices = [[0.95, -0.95], [0.95, 0.95], [-0.95, 0.95], [-0.95, -0.95]];
            boxShape = new p2.Convex({ vertices: vertices });
        }
        boxShape.collisionGroup = 6;
        boxShape.collisionMask = 7;
        this.boxBody = new p2.Body({ mass: 100, position: [x, y], type: p2.Body.KINEMATIC });
        this.boxBody.addShape(boxShape);
        if (this.type == 6) {
            this.boxBody.type = p2.Body.DYNAMIC;
            this.boxBody.gravityScale = 0;
            var self_1 = this;
            setTimeout(function () {
                self_1.boxBody.velocity = [0.5, 0];
            }, 500);
        }
        this.boxBody.fixedRotation = false;
        this.boxBody.displays = [this.img, this.txt];
        that.addChild(this.img);
        that.addChild(this.txt);
        return this.boxBody;
    };
    gridCom.prototype.updateText = function (that, n, callback) {
        if (n === void 0) { n = 1; }
        if (callback === void 0) { callback = null; }
        //n--击打次数
        var hitText = new egret.BitmapText();
        hitText.font = this.font;
        hitText.text = n > this.num ? this.num + '' : n + '';
        var ran = 90 * Math.random() - 45;
        hitText.x = this.img.x + ran;
        hitText.y = this.img.y - 80;
        that.addChild(hitText);
        egret.Tween.removeTweens(this.img);
        egret.Tween.get(this.img).to({ y: this.img.y - 10 }, 20).to({ y: this.img.y }, 20);
        egret.Tween.get(hitText).to({ scaleX: 1.2, scaleY: 1.2, y: hitText.y - 80 }, 500).to({ alpha: 0.5 }, 200).call(function () {
            hitText.parent && hitText.parent.removeChild(hitText);
        });
        if (this.num > n) {
            this.num -= n;
            this.txt.text = this.num + '';
        }
        else {
            this.isRemoved = true;
            that.world.removeBody(this.boxBody);
            //销毁
            this.img.parent && this.img.parent.removeChild(this.img);
            this.txt.parent && this.txt.parent.removeChild(this.txt);
            //播放销毁的动画
            var g = this.type == 2 ? 1 : this.type;
            var gif_1 = movieMaster.getGif('boom_' + g);
            var w = this.type == 5 ? 250 : 200;
            gif_1.x = this.img.x - w / 2;
            gif_1.y = this.img.y - w / 2;
            that.addChild(gif_1);
            gif_1.gotoAndPlay(1, 1);
            gif_1.addEventListener(egret.Event.COMPLETE, function (e) {
                gif_1.parent && gif_1.parent.removeChild(gif_1);
            }, this);
            that.conTimes.num++;
            if (that.conTimes.num > 2) {
                var con_1 = new egret.BitmapText();
                con_1.font = RES.getRes('blue_text_fnt');
                con_1.text = 'X' + that.conTimes.num;
                con_1.x = this.img.x + 50;
                con_1.y = this.img.y - 50;
                con_1.anchorOffsetX = con_1.width / 2;
                con_1.anchorOffsetY = con_1.height / 2;
                con_1.scaleX = 0;
                con_1.scaleY = 0;
                that.addChild(con_1);
                egret.Tween.get(con_1).to({ scaleX: 1.5, scaleY: 1.5 }, 300).wait(800).to({ alpha: 0 }, 200).call(function () {
                    con_1.parent && con_1.parent.removeChild(con_1);
                });
            }
            var res = {}; //被销毁的对象，分数之类的信息
            if (this.type == 5) {
                //是炸弹 判断被炸毁的区域
                var d = that.adaptParams.itemWidth / that.factor;
                var _loop_1 = function (i, len) {
                    var item = that.gridArr[i];
                    var dx = Math.floor(Math.abs(item.boxBody.position[0] - this_1.boxBody.position[0]) * 100) / 100;
                    var dy = Math.floor(Math.abs(item.boxBody.position[1] - this_1.boxBody.position[1]) * 100) / 100;
                    if (item.boxBody.id != this_1.boxBody.id && (dx <= d && dy <= d)) {
                        // console.log('boom', item.type)
                        if (item.type == 3) {
                            //精灵
                            if (!item.isRemoved) {
                                that.shootPoint.beeNum++;
                                var nx_1 = item.boxBody.position[0];
                                item.updateText(that, function () {
                                    var b = new beeCom();
                                    b.createBody(that, nx_1);
                                    that.beeArr.push(b);
                                });
                            }
                        }
                        else if (item.type == 4) {
                            //星星
                        }
                        else if (!item.isRemoved) {
                            console.log(55555);
                            item.updateText(that, item.num, callback);
                        }
                    }
                };
                var this_1 = this;
                for (var i = 0, len = that.gridArr.length; i < len; i++) {
                    _loop_1(i, len);
                }
            }
            callback && callback();
        }
    };
    gridCom.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name + '_png');
        result.texture = texture;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        return result;
    };
    return gridCom;
}());
__reflect(gridCom.prototype, "gridCom");
window['gridCom'] = gridCom;
//# sourceMappingURL=gridCom.js.map