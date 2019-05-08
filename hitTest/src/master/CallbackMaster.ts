class CallbackMaster {
	public static shareSuc: Function = null;//分享成功回调
	public static shareTime = 0;//分享的时间
	public static shareCount = -1;//分享次数（同一按钮的）
	public static onHideFun: Function = null;//页面进入后台回调
	//审核是否通过
	public static hasChecked: boolean = false;

	public static saveShareSuc = null;//保存上次分享的回调
	public static shareFailText = '好友信号连接失败，再试试吧';//分享失败的弹窗文案
	public static share_title = [];//分享标题
	public static share_img = [];//分享图
	public constructor() {
	}
	public static init() {
		//右上角分享
		let ran = Math.floor(Math.random() * CallbackMaster.share_title.length);
		let obj = {
			query: 'type=newUser&uid=' + userDataMaster.getMyInfo.uid,
			title: CallbackMaster.share_title[ran],
			imageUrl: CallbackMaster.share_img[ran],
		};
		platform.onShareAppMessage(obj);
		platform.onShow((option) => {
			let saveShareCount = CallbackMaster.shareCount + 1;
			if (CallbackMaster.shareCount == 0) {
				//这个分享按钮的第一次分享
				CallbackMaster.saveShareSuc = CallbackMaster.shareSuc;
				let obj = {
					title: '温馨提示',
					content: CallbackMaster.shareFailText,
					confirmText: '好的',
					showCancel: false,
					success(res) {
						if (res.confirm) {
							CallbackMaster.openShare(CallbackMaster.saveShareSuc, saveShareCount)
						}
					}
				}
				platform.showModal(obj);

			} else if (new Date().getTime() - CallbackMaster.shareTime > 3000) {
				//超过三秒，算分享成功
				CallbackMaster.shareSuc && CallbackMaster.shareSuc();
				CallbackMaster.saveShareSuc = null;
			} else {
				CallbackMaster.saveShareSuc = CallbackMaster.shareSuc;
				//分享失败弹窗
				let obj = {
					title: '温馨提示',
					content: '分享成功可以获得丰厚奖励',
					confirmText: '分享',
					success(res) {
						if (res.confirm) {
							CallbackMaster.openShare(CallbackMaster.saveShareSuc, saveShareCount)
						}
					}
				}
				platform.showModal(obj);
			}
			CallbackMaster.shareSuc = null;
			CallbackMaster.shareCount = -1;
		})
		platform.onHide(() => {
			soundMaster.soundChannel && soundMaster.soundChannel.stop();
			//存储数据
			CallbackMaster.onHideFun && CallbackMaster.onHideFun();
			//存储游戏数据
			let info = {
				gold: userDataMaster.gold,
				level: userDataMaster.level,
				life: userDataMaster.life,
				closeDate: new Date().getTime() - (600 * 1000 - userDataMaster.seconds * 1000),
				levelStar: userDataMaster.levelStar,
				dayShareLife: userDataMaster.dayShareLife,
				dayShareGold: userDataMaster.dayShareGold,
				tool: userDataMaster.tool,
				dayGift: userDataMaster.dayGift,
				bulletIndex: userDataMaster.bulletIndex,
				bulletSateArr: userDataMaster.bulletSateArr,
				dayFreeLife: userDataMaster.dayFreeLife
			};
			let params = {
				uid: userDataMaster.getMyInfo.uid,
				info: JSON.stringify(info)
			}
			ServiceMaster.post(ServiceMaster.setGameData, params, (res) => {
				if (res.code == 1 && res.data) {

				}
			})

		})
	}
	public static openShare(Callback: Function = null, judge = 0, query = '', shareType = 0) {
		//参数1---回调函数 参数2---是否判断分享成功（不判断为-1，>=0为判断次数） 参数3----附加的参数  4--分享类型
		// 好友助力
		if (CallbackMaster.hasChecked) {
			//如果审核通过了	
			// if (shareType == 0) {
			//默认随机分享
			// } else {
			// }
			let ran = Math.floor(Math.random() * CallbackMaster.share_title.length);
		
			let obj = {
				title: CallbackMaster.share_title[ran],
				imageUrl: CallbackMaster.share_img[ran],
				query: 'uid=' + userDataMaster.getMyInfo.uid + query
			};
			platform.shareAppMessage(obj);
			CallbackMaster.shareTime = judge >= 0 ? new Date().getTime() : 0;
			CallbackMaster.shareCount = judge;
			CallbackMaster.shareSuc = Callback;
		}
	}
	public static openHide(Callback: Function = null) {
		CallbackMaster.onHideFun = Callback;
	}
	public static recommandClick(type = 1, item) {
		//推荐位点击统计
		let uid = userDataMaster.getMyInfo.uid;
		let params = {
			id: item.id,
			uid,
			appid: item.appid,
			type,
			module_id: item.module_id,
			module_ext_id: item.module_ext_id
		};
		ServiceMaster.post(
			ServiceMaster.gameClick,
			params,
			function (suc) {
				if (suc.code == 1 && suc.data) {

				}
			})
	}
}