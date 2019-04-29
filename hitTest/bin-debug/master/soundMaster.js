var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var soundMaster = (function () {
    function soundMaster() {
    }
    soundMaster.init = function () {
        RES.getResByUrl('https://lixi.h5.app81.com/minigame/game_lixi/shooting/bg.mp3', function (res) {
            soundMaster.bg_sound = res;
            soundMaster.playBgMusic();
        });
        RES.getResByUrl('https://lixi.h5.app81.com/minigame/game_lixi/shooting/boom.mp3', function (res) {
            soundMaster.boom_sound = res;
        });
        RES.getResByUrl('https://lixi.h5.app81.com/minigame/game_lixi/shooting/hit.mp3', function (res) {
            soundMaster.hit_sound = res;
        });
    };
    soundMaster.playBgMusic = function () {
        if (soundMaster.isMusic) {
            setInterval(function () {
                soundMaster.bg_sound.play(0, 1);
            }, 5000);
        }
    };
    soundMaster.playSingleMusic = function (type) {
        if (soundMaster[type] && soundMaster.isMusic) {
            soundMaster[type].play(0, 1);
        }
    };
    Object.defineProperty(soundMaster, "isMusic", {
        get: function () {
            return soundMaster.music;
        },
        set: function (val) {
            if (val) {
                //   播放
                soundMaster.music = true;
                // soundMaster.playBgMusic();
            }
            else {
                soundMaster.music = false;
                // soundMaster.stopBgMusic();
            }
        },
        enumerable: true,
        configurable: true
    });
    soundMaster.music = true;
    soundMaster.musicStart = 0; //音乐开始播放的时间
    soundMaster.pauseTime = 0; //上次暂停时间点
    return soundMaster;
}());
__reflect(soundMaster.prototype, "soundMaster");
//# sourceMappingURL=soundMaster.js.map