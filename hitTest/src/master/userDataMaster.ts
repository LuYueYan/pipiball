class userDataMaster {
	public static myInfo: any = { uid: 0, openId: '', is_new_user: true, nickName: '', avatarUrl: '', gender: 0 };//用户信息
	public static gold = 0;//金币
	public static life = 5;//体力
	public static level = 0;//已达成的关卡
	public static closeDate = 0;//上次关闭游戏的时间点
	public static seconds = 0;//获取体力剩余秒数
	public static terval = null;//计时器
	public static levelStar = [];//过关星星情况 n颗星
	public static bulletIndex = 0;//当前使用的炮弹
	public static tool = {
		bullet: { level: 5, unlock: false, num: 1 },//unlock---是否已经引导过
		glass: { level: 1, unlock: false, num: 1 },
		hammer: { level: 2, unlock: false, num: 1 },
		hat: { level: 10, unlock: false, num: 1 },
		lamp: { level: 15, unlock: false, num: 1 }
	};//道具数量
	public static bulletArr = [
		{ id: 0, img: 'img_bullet_a2', title: '刺刺炮', price: 100, powerImg: 1, txt: '', target: {} },
		{ id: 1, img: 'img_bullet_b3', title: '蘑菇炮', price: 500, powerImg: 3, txt: '对炸弹方块威力+2', target: { type_5: 2 } },
		{ id: 2, img: 'img_bullet_c3', title: '大头炮', price: 1000, powerImg: 3, txt: '对移动方块威力+2', target: { type_6: 2 } },
		{ id: 3, img: 'img_bullet_d3', title: '小南瓜', price: 2000, powerImg: 2, txt: '对普通方块威力+1', target: { type_1: 1, type_2: 1 } },
		{ id: 4, img: 'img_bullet_e3', title: '包菜君', price: 3000, powerImg: 2, txt: '对所有方块威力+1', target: { type_1: 1, type_2: 1, type_5: 1, type_6: 1 } }
	];
	public static bulletSateArr = [1, 0, 0, 0, 0];//炸弹状态
	public static levelArr = [];//关卡信息数组
	public static myCollection: eui.ArrayCollection;
	public static shareUid = 0;//分享人id
	public static userInfoBtn;
	public static recommand: any;//推荐位列表
	public static requestTimes = 0;//请求游戏数据的次数
	public static dayShareLife = { day: '', num: 0 };//每日通过分享获得体力
	public static dayShareGold = { day: '', num: 0 };//每日通过分享获得钻石
	public static dayGift = { day: '', num: 0 };//每日抽奖次数
	public static dayFreeLife = { day: '', num: 0 };//每日免体力开局次数
	public static loginCallback = null;//弹窗登录成功的回调
	public static getDataSuccess = false;//获取数据成功
	public constructor() {
	}
	public static shared: userDataMaster;
	public static getInstance() {
		if (!userDataMaster.shared) {
			userDataMaster.shared = new userDataMaster();
		}
		return userDataMaster.shared;
	}
	public static init() {
		let that = this;
		var sourceArr: any[] = [
			userDataMaster.gold,
			userDataMaster.life,
			userDataMaster.level,
			userDataMaster.bulletIndex,
			userDataMaster.tool,
			userDataMaster.myInfo
		];
		//用 ArrayCollection 包装
		userDataMaster.myCollection = new eui.ArrayCollection(sourceArr);


		// 测试----------------------0430
		userDataMaster.login();
		// userDataMaster.getGameData(userDataMaster.myInfo.uid)

		// ----------------

		userDataMaster.getRecommand();
	}

	public static getGameData(uid) {
		let that = this;
		if (uid != 0) {
			ServiceMaster.post(ServiceMaster.getGameData, { uid }, (res) => {
				if (res.code == 1 && res.data) {
					let data = res.data;
					if (data.info.length > 0) {
						let info = JSON.parse(data.info);
						if (info.gold) {
							userDataMaster.gold = info.gold;
						}
						if (info.life >= 0) {
							userDataMaster.life = info.life;
						}
						if (info.level) {
							userDataMaster.level = info.level;
						}
						if (info.closeDate) {
							userDataMaster.closeDate = info.closeDate;
							if (info.life < 5) {
								//上次退出时体力没满
								let closeDate = info.closeDate;
								let n = (new Date().getTime() - closeDate) / 1000 / 15 / 60;
								let c = info.life + Math.floor(n);
								if (c >= 5) {
									userDataMaster.myLife = info.life > 5 ? info.life : 5;
								} else {
									userDataMaster.life = c;
									userDataMaster.myCollection.replaceItemAt(c, 1);
									let t = Math.floor((n - Math.floor(n)) * 15 * 60);
									userDataMaster.updateTime(600 - t);
								}
							}
						}
						if (info.levelStar) {
							userDataMaster.levelStar = info.levelStar;
						}
						if (info.dayShareLife) {
							userDataMaster.dayShareLife = info.dayShareLife;
							1 && userDataMaster.todayShareLife;//更新今日次数
						}
						if (info.dayShareGold) {
							userDataMaster.dayShareGold = info.dayShareGold;
							1 && userDataMaster.todayShareGold;//更新今日次数
						}
						if (info.dayGift) {
							userDataMaster.dayGift = info.dayGift;
							1 && userDataMaster.todayGift;
						}
						if (info.tool) {
							userDataMaster.tool = info.tool;
						}
						if (info.bulletSateArr) {
							userDataMaster.bulletSateArr = info.bulletSateArr;
						}
						if (info.bulletIndex) {
							userDataMaster.bulletIndex = info.bulletIndex;
						}
						if (info.dayFreeLife) {
							userDataMaster.dayFreeLife = info.dayFreeLife;
						}
					}
					userDataMaster.getDataSuccess = true;
				}
			})
		}


	}
	public static getRecommand() {
		//获取推荐位
		ServiceMaster.post(ServiceMaster.getGameList, {}, (res) => {
			if (res.code == 1 && res.data) {
				userDataMaster.recommand = res.data;
			}
		})
	}
	public static set myGold(gold) {
		//更新金币数量
		userDataMaster.gold = gold;
		userDataMaster.myCollection.replaceItemAt(gold, 0);
	}
	public static set myLife(life) {
		//更新体力
		userDataMaster.life = life;
		userDataMaster.myCollection.replaceItemAt(life, 1);
		if (life < 5 && !userDataMaster.terval) {
			userDataMaster.seconds = 600;
			userDataMaster.updateTime();
		}
	}
	public static set myLevel(level) {
		//更新当前关卡
		userDataMaster.level = level;
		userDataMaster.myCollection.replaceItemAt(level, 2);
	}
	public static set myBulleIndex(index) {
		//更新当前炮弹
		userDataMaster.bulletIndex = index;
		userDataMaster.myCollection.replaceItemAt(index, 3);
	}
	public static set myTool(tool) {
		//更新道具数量
		userDataMaster.tool = tool;
		userDataMaster.myCollection.replaceItemAt(tool, 4);
	}

	public static updateTime(t = 600) {

		clearInterval(userDataMaster.terval);
		userDataMaster.seconds = 600;
		userDataMaster.terval = setInterval(() => {
			t--;
			userDataMaster.seconds = t;
			if (t <= 0) {
				clearInterval(userDataMaster.terval);
				userDataMaster.terval = null;
				if (userDataMaster.life < 5) {
					userDataMaster.myLife = userDataMaster.life + 1;
				}

			}
		}, 1000);
	}
	public static set getMyInfo(data) {
		userDataMaster.myInfo = data;
		userDataMaster.myCollection.replaceItemAt(data, 5);
	}
	public static get getMyInfo() {
		return userDataMaster.myInfo;
	}

	public static get todayShareLife() {
		//    获取今天分享获得体力状态
		if (userDataMaster.dayShareLife.day == userDataMaster.getToday()) {
			if (userDataMaster.dayShareLife.num >= 5) {
				return false;
			}
		} else {
			userDataMaster.dayShareLife = { day: userDataMaster.getToday(), num: 0 };
		}
		return true;
	}
	public static get todayShareGold() {
		//    获取今天分享获得砖石状态
		if (userDataMaster.dayShareGold.day == userDataMaster.getToday()) {
			if (userDataMaster.dayShareGold.num >= 2) {
				return false;
			}
		} else {
			userDataMaster.dayShareGold = { day: userDataMaster.getToday(), num: 0 };
		}
		return true;
	}
	public static get todayGift() {
		//获取今日抽奖次数
		if (userDataMaster.dayGift.day == userDataMaster.getToday()) {
			if (userDataMaster.dayGift.num >= 6) {
				//每日抽奖3次 一次免费 2次分享 3视频
				return false;
			}
		} else {
			userDataMaster.dayGift = { day: userDataMaster.getToday(), num: 0 };
		}
		return true;
	}
	public static get todayFreeLife() {
		//获取今日免体力开局次数
		if (userDataMaster.dayFreeLife.day == userDataMaster.getToday()) {
			// if (userDataMaster.dayFreeLife.num >= 8) {
			// 	//每日前三次分享，后面无限看视频
			// 	return false;
			// }
		} else {
			userDataMaster.dayFreeLife = { day: userDataMaster.getToday(), num: 0 };
		}
		return true;
	}

	public static async createLoginBtn(left, top, width, height, callback: Function = null) {
		let that = this;
		let scale = DeviceMaster.screenWidth / 750;
		left *= scale, top *= scale, width *= scale, height *= scale;
		userDataMaster.userInfoBtn = await platform.createUserInfoButton({
			type: 'image',
			// type: 'text',
			// text: '获取用户信息',
			image: '../../resource/assets/imgData/img_yxbj.png',
			style: {
				left,
				top,
				width,
				height,
				lineHeight: 40,
				backgroundColor: '#ff0000',
				color: '#ffffff',
				textAlign: 'center',
				fontSize: 16,
				borderRadius: 4
			}
		})

		userDataMaster.userInfoBtn.onTap((res) => {
			userDataMaster.updateUser(res, callback)
		})
	}
	public static async updateUser(res: any = null, callback: Function = null) {
		let userInfo = res.userInfo;
		userDataMaster.myInfo.nickName = userInfo.nickName;
		userDataMaster.myInfo.avatarUrl = userInfo.avatarUrl;
		userDataMaster.getMyInfo = userDataMaster.myInfo;
		let params: any = {
			uid: userDataMaster.getMyInfo.uid,
			nickName: userInfo.nickName,
			gender: userDataMaster.myInfo.gender,
			avatarUrl: userInfo.avatarUrl
		};

		ServiceMaster.post(
			ServiceMaster.updateUser,
			params,
			function (suc) {
				if (parseInt(suc.code) === 1 && suc.data) {
					//修改用户信息成功
					userDataMaster.userInfoBtn && userDataMaster.userInfoBtn.destroy();
					userDataMaster.loginCallback && userDataMaster.loginCallback();
					userDataMaster.loginCallback = null;
					callback && callback();
				}
			}
		);

	}
	public static async login() {
		let login = await platform.login();
		let params: any = {
			code: login.code
		};
		if (userDataMaster.shareUid > 0) {
			params.pid = userDataMaster.shareUid;
		}
		userDataMaster.requestTimes++;
		ServiceMaster.post(
			ServiceMaster.logins,
			params,
			function (suc) {
				if (parseInt(suc.code) === 1 && suc.data) {
					//登录成功
					userDataMaster.getMyInfo = suc.data;

					//测试测试………………
					// userDataMaster.myInfo.is_new_user = true;
					// userDataMaster.myInfo.avatarUrl=''
					// userDataMaster.myInfo.gender=0;
					// userDataMaster.userInfoBtn && userDataMaster.userInfoBtn.destroy();
					//初始化用户openid
					platform.openDataContext.postMessage({
						type: "openid",
						openid: suc.data.openId
					});
					userDataMaster.getGameData(suc.data.uid);
					userDataMaster.requestTimes = 5;
				}
			}
		);
		setTimeout(function () {
			if (userDataMaster.requestTimes < 5) {
				userDataMaster.login();
			}
		}, 5000);
	}
	public static getToday() {
		//获取格式化的当前日期
		let date = new Date();
		let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) + '' : '0' + (date.getMonth() + 1);
		let day = date.getDate() > 9 ? (date.getDate()) + '' : '0' + date.getDate();
		return date.getFullYear() + '-' + month + '-' + day;
	}

}
window['userDataMaster'] = userDataMaster