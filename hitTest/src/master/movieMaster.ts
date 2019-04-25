class movieMaster {
	public static mcFactory: egret.MovieClipDataFactory;
	public static mcFactory2: egret.MovieClipDataFactory;
	public static mcFactory3: egret.MovieClipDataFactory;
	public static factory2 = ['cartridge'];//mcFactory2里包含的动画
	public static factory3 = ['gif_streamer'];//mcFactory3里包含的动画
	public constructor() {
	}
	public static init() {
		let data = RES.getRes("boom_gif_json");
		let txtr = RES.getRes("boom_gif_png");
		movieMaster.mcFactory = new egret.MovieClipDataFactory(data, txtr);

		let data2 = RES.getRes("boom_gif_2_json");
		let txtr2 = RES.getRes("boom_gif_2_png");
		movieMaster.mcFactory2 = new egret.MovieClipDataFactory(data2, txtr2);

		let data3 = RES.getRes("boom_gif_3_json");
		let txtr3 = RES.getRes("boom_gif_3_png");
		movieMaster.mcFactory3 = new egret.MovieClipDataFactory(data3, txtr3);
	}
	public static getGif(name) {
		let mc: egret.MovieClip;
		if (movieMaster.factory2.indexOf(name) != -1) {
			// 如果是factory2中的
			mc = new egret.MovieClip(movieMaster.mcFactory2.generateMovieClipData(name));
		} else if(movieMaster.factory3.indexOf(name) != -1){
			// 如果是factory3中的
			mc = new egret.MovieClip(movieMaster.mcFactory.generateMovieClipData(name));
		}else{
			mc = new egret.MovieClip(movieMaster.mcFactory.generateMovieClipData(name));
		}

		return mc;
	}
}
window['movieMaster'] = movieMaster