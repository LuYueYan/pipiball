//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI(stageHeight) {
        if (stageHeight === void 0) { stageHeight = 1334; }
        var _this = _super.call(this) || this;
        _this.stageHeight = 1334;
        _this.stageHeight = stageHeight;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        var dy = this.stageHeight - 1334;
        var bgImg = this.createBitmapByName('img_bg_loading_jpg');
        bgImg.height = this.stageHeight;
        this.addChild(bgImg);
        var tip = this.createBitmapByName('img_text_08_png');
        tip.x = (750 - tip.width) / 2;
        tip.y = 140;
        this.addChild(tip);
        var proBg = this.createBitmapByName('img_bg_01_png');
        proBg.x = 66;
        proBg.y = 1180 + dy;
        this.addChild(proBg);
        this.pro = this.createBitmapByName('img_bg_02_png');
        this.pro.width = 0;
        this.pro.x = 75;
        this.pro.y = 1189 + dy;
        this.addChild(this.pro);
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 1150 + dy;
        this.textField.x = 84 - 30;
        this.textField.width = 100;
        this.textField.height = 200;
        this.textField.size = 30;
        this.textField.textColor = 0xffffff;
        this.textField.bold = true;
        var text = new egret.TextField();
        this.addChild(text);
        text.y = 1240 + dy;
        text.text = '抵制不良游戏  拒绝盗版游戏  注意自我保护  谨防受骗上当';
        text.width = 750;
        text.size = 22;
        text.textColor = 0x2f842f;
        text.textAlign = 'center';
        var text1 = new egret.TextField();
        this.addChild(text1);
        text1.y = 1280 + dy;
        text1.text = '适度游戏益脑  沉迷游戏伤身  合理安排时间  享受健康生活';
        text1.width = 750;
        text1.size = 22;
        text1.textColor = 0x2f842f;
        text1.textAlign = 'center';
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var percent = Math.floor(current / total * 100);
        this.pro.width = 600 * percent / 100;
        this.textField.text = percent + '%';
        this.textField.x = 84 - 30 + this.pro.width;
    };
    LoadingUI.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
