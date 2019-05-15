var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var movieMaster = (function () {
    function movieMaster() {
    }
    movieMaster.init = function () {
        var data = RES.getRes("boom_gif_json");
        var txtr = RES.getRes("boom_gif_png");
        movieMaster.mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var data2 = RES.getRes("boom_gif_2_json");
        var txtr2 = RES.getRes("boom_gif_2_png");
        movieMaster.mcFactory2 = new egret.MovieClipDataFactory(data2, txtr2);
        var data3 = RES.getRes("boom_gif_3_json");
        var txtr3 = RES.getRes("boom_gif_3_png");
        movieMaster.mcFactory3 = new egret.MovieClipDataFactory(data3, txtr3);
        var data4 = RES.getRes("glass_gif_json");
        var txtr4 = RES.getRes("glass_gif_png");
        movieMaster.mcFactory4 = new egret.MovieClipDataFactory(data4, txtr4);
        var data5 = RES.getRes("level_up_json");
        var txtr5 = RES.getRes("level_up_png");
        movieMaster.mcFactory5 = new egret.MovieClipDataFactory(data5, txtr5);
    };
    movieMaster.getGif = function (name) {
        var mc;
        if (movieMaster.factory2.indexOf(name) != -1) {
            // 如果是factory2中的
            mc = new egret.MovieClip(movieMaster.mcFactory2.generateMovieClipData(name));
        }
        else if (movieMaster.factory3.indexOf(name) != -1) {
            // 如果是factory3中的
            mc = new egret.MovieClip(movieMaster.mcFactory3.generateMovieClipData(name));
        }
        else if (movieMaster.factory4.indexOf(name) != -1) {
            // 如果是factory4中的
            mc = new egret.MovieClip(movieMaster.mcFactory4.generateMovieClipData(name));
        }
        else if (movieMaster.factory5.indexOf(name) != -1) {
            // 如果是factory5中的
            mc = new egret.MovieClip(movieMaster.mcFactory5.generateMovieClipData(name));
        }
        else {
            mc = new egret.MovieClip(movieMaster.mcFactory.generateMovieClipData(name));
        }
        return mc;
    };
    movieMaster.factory2 = ['cartridge']; //mcFactory2里包含的动画
    movieMaster.factory3 = ['gif_streamer']; //mcFactory3里包含的动画
    movieMaster.factory4 = ['glass']; //mcFactory4里包含的动画
    movieMaster.factory5 = ['through']; //mcFactory4里包含的动画
    return movieMaster;
}());
__reflect(movieMaster.prototype, "movieMaster");
window['movieMaster'] = movieMaster;
