class movieMaster {
	public static mcFactory: egret.MovieClipDataFactory;
	public constructor() {
	}
	public static init() {
		let data = RES.getRes("boom_gif_json");
		let txtr = RES.getRes("boom_gif_png");
		movieMaster.mcFactory = new egret.MovieClipDataFactory(data, txtr)
	}
	public static getGif(name) {
		let mc: egret.MovieClip = new egret.MovieClip(movieMaster.mcFactory.generateMovieClipData(name));
		return mc;
	}
}
window['movieMaster'] = movieMaster