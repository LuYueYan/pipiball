class soundMaster {
    public static boom_sound: egret.Sound;//
    public static hit_sound: egret.Sound;//

    //  音轨
    public static soundChannel: egret.SoundChannel;
    public static music: boolean = true;
    public static musicStart = 0;//音乐开始播放的时间
    public static pauseTime = 0;//上次暂停时间点
    public constructor() {

    }
    public static init() {
        RES.getResByUrl('https://lixi.h5.app81.com/minigame/game_lixi/shooting/boom.mp3', (res) => {
            soundMaster.boom_sound = res;
        });
        RES.getResByUrl('https://lixi.h5.app81.com/minigame/game_lixi/shooting/hit.mp3', (res) => {
            soundMaster.hit_sound = res;
        });
    }
    public static playSingleMusic(type) {
        if (soundMaster[type] && soundMaster.isMusic) {
            soundMaster[type].play(0, 1);
        }
    }
    public static set isMusic(val) {
        if (val) {
            //   播放
            soundMaster.music = true;
            // soundMaster.playBgMusic();
        } else {
            soundMaster.music = false;
            // soundMaster.stopBgMusic();
        }
    }
    public static get isMusic() {
        return soundMaster.music;
    }
}