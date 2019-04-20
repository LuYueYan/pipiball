var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var userDataMaster = (function () {
    function userDataMaster() {
    }
    userDataMaster.getInstance = function () {
        if (!userDataMaster.shared) {
            userDataMaster.shared = new userDataMaster();
        }
        return userDataMaster.shared;
    };
    userDataMaster.init = function () {
        var that = this;
        var sourceArr = [
            userDataMaster.gold,
            userDataMaster.life,
            userDataMaster.level,
            userDataMaster.bulletIndex,
            userDataMaster.tool
        ];
        //用 ArrayCollection 包装
        userDataMaster.myCollection = new eui.ArrayCollection(sourceArr);
        userDataMaster.login();
        userDataMaster.getRecommand();
    };
    userDataMaster.getGameData = function (uid) {
        var that = this;
        if (uid != 0) {
            ServiceMaster.post(ServiceMaster.getGameData, { uid: uid }, function (res) {
                if (res.code == 1 && res.data) {
                    var data = res.data;
                    if (data.info.length > 0) {
                        var info = JSON.parse(data.info);
                        if (info.gold) {
                            userDataMaster.gold = info.gold;
                        }
                        if (info.life) {
                            userDataMaster.life = info.life;
                        }
                        if (info.level) {
                            userDataMaster.level = info.level;
                        }
                        if (info.closeDate) {
                            userDataMaster.closeDate = info.closeDate;
                            if (info.life < 5) {
                                //上次退出时体力没满
                                var closeDate = info.closeDate;
                                var n = (new Date().getTime() - closeDate) / 1000 / 5 / 60;
                                var c = userDataMaster.life + Math.floor(n);
                                if (c >= 5) {
                                    userDataMaster.myLife = c;
                                }
                                else {
                                    userDataMaster.life = c;
                                    userDataMaster.myCollection.replaceItemAt(c, 1);
                                    var t = n / 1000 - Math.floor(n) * 5 * 60;
                                    userDataMaster.updateTime(t);
                                }
                            }
                        }
                        if (info.levelStar) {
                            userDataMaster.levelStar = info.levelStar;
                        }
                        if (info.dayShareLife) {
                            userDataMaster.dayShareLife = info.dayShareLife;
                            userDataMaster.todayShareLife; //更新今日次数
                        }
                        if (info.dayGift) {
                            userDataMaster.dayGift = info.dayGift;
                        }
                        if (info.tool) {
                            userDataMaster.tool = info.tool;
                        }
                        if (info.bulletArr) {
                            userDataMaster.bulletArr = info.bulletArr;
                        }
                        if (info.bulletIndex) {
                            userDataMaster.bulletIndex = info.bulletIndex;
                        }
                    }
                }
            });
        }
        else {
            if (userDataMaster.requestTimes < 5) {
                setTimeout(function () {
                    userDataMaster.login();
                }, 2000);
            }
        }
    };
    userDataMaster.getRecommand = function () {
        //获取推荐位
        ServiceMaster.post(ServiceMaster.getGameList, {}, function (res) {
            if (res.code == 1 && res.data) {
                userDataMaster.recommand = res.data;
            }
        });
    };
    Object.defineProperty(userDataMaster, "myGold", {
        set: function (gold) {
            //更新金币数量
            userDataMaster.gold = gold;
            userDataMaster.myCollection.replaceItemAt(gold, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(userDataMaster, "myLife", {
        set: function (life) {
            //更新体力
            userDataMaster.life = life > 5 ? 5 : life;
            userDataMaster.myCollection.replaceItemAt(life, 1);
            if (life < 5 && !userDataMaster.terval) {
                userDataMaster.seconds = 300;
                userDataMaster.updateTime();
            }
            console.log('lifechange', life, userDataMaster.life);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(userDataMaster, "myLevel", {
        set: function (level) {
            //更新当前关卡
            userDataMaster.level = level;
            userDataMaster.myCollection.replaceItemAt(level, 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(userDataMaster, "myBulleIndex", {
        set: function (index) {
            //更新当前炮弹
            userDataMaster.bulletIndex = index;
            userDataMaster.myCollection.replaceItemAt(index, 3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(userDataMaster, "myTool", {
        set: function (tool) {
            //更新道具数量
            userDataMaster.tool = tool;
            userDataMaster.myCollection.replaceItemAt(tool, 4);
        },
        enumerable: true,
        configurable: true
    });
    userDataMaster.updateTime = function (t) {
        if (t === void 0) { t = 300; }
        console.log('t', t);
        clearInterval(userDataMaster.terval);
        userDataMaster.terval = setInterval(function () {
            t--;
            userDataMaster.seconds = t;
            if (t <= 0) {
                console.log('t=0', t);
                clearInterval(userDataMaster.terval);
                userDataMaster.terval = null;
                userDataMaster.myLife = userDataMaster.life + 1;
            }
        }, 1000);
    };
    Object.defineProperty(userDataMaster, "getMyInfo", {
        get: function () {
            return userDataMaster.myInfo;
        },
        set: function (data) {
            userDataMaster.myInfo = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(userDataMaster, "todayShareLife", {
        get: function () {
            //    获取今天分享获得体力状态
            if (userDataMaster.dayShareLife.day == userDataMaster.getToday()) {
                if (userDataMaster.dayShareLife.num >= 5) {
                    return false;
                }
            }
            else {
                userDataMaster.dayShareLife = { day: userDataMaster.getToday(), num: 0 };
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(userDataMaster, "todayGift", {
        get: function () {
            //获取今日抽奖次数
            if (userDataMaster.dayGift.day == userDataMaster.getToday()) {
                if (userDataMaster.dayGift.num >= 2) {
                    //每日抽奖两次 一次免费 一次视频
                    return false;
                }
            }
            else {
                userDataMaster.dayGift = { day: userDataMaster.getToday(), num: 0 };
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    userDataMaster.createLoginBtn = function (left, top, width, height) {
        return __awaiter(this, void 0, void 0, function () {
            var that, scale, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        that = this;
                        scale = DeviceMaster.screenWidth / 750;
                        left *= scale, top *= scale, width *= scale, height *= scale;
                        _a = userDataMaster;
                        return [4 /*yield*/, platform.createUserInfoButton({
                                type: 'image',
                                // type: 'text',
                                // text: '获取用户信息',
                                image: '../../resource/assets/imgData/img_yxbj.png',
                                style: {
                                    left: left,
                                    top: top,
                                    width: width,
                                    height: height,
                                    lineHeight: 40,
                                    backgroundColor: '#ff0000',
                                    color: '#ffffff',
                                    textAlign: 'center',
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            })];
                    case 1:
                        _a.userInfoBtn = _b.sent();
                        userDataMaster.userInfoBtn.onTap(function (res) {
                            userDataMaster.updateUser(res);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    userDataMaster.updateUser = function (res) {
        if (res === void 0) { res = null; }
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, params;
            return __generator(this, function (_a) {
                userInfo = res.userInfo;
                userDataMaster.myInfo.nickName = userInfo.nickName;
                userDataMaster.myInfo.avatarUrl = userInfo.avatarUrl;
                params = {
                    uid: userDataMaster.getMyInfo.uid,
                    nickName: userInfo.nickName,
                    gender: userInfo.gender,
                    avatarUrl: userInfo.avatarUrl
                };
                ServiceMaster.post(ServiceMaster.updateUser, params, function (suc) {
                    if (parseInt(suc.code) === 1 && suc.data) {
                        //修改用户信息成功
                        userDataMaster.userInfoBtn && userDataMaster.userInfoBtn.destroy();
                        userDataMaster.loginCallback && userDataMaster.loginCallback();
                        userDataMaster.loginCallback = null;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    userDataMaster.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var login, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.login()];
                    case 1:
                        login = _a.sent();
                        params = {
                            code: login.code
                        };
                        if (userDataMaster.shareUid > 0) {
                            params.pid = userDataMaster.shareUid;
                        }
                        userDataMaster.requestTimes++;
                        ServiceMaster.post(ServiceMaster.logins, params, function (suc) {
                            if (parseInt(suc.code) === 1 && suc.data) {
                                //登录成功
                                userDataMaster.getMyInfo = suc.data;
                                //测试测试………………
                                // userDataMaster.myInfo.is_new_user = true;
                                // userDataMaster.userInfoBtn && userDataMaster.userInfoBtn.destroy();
                                //初始化用户openid
                                platform.openDataContext.postMessage({
                                    type: "openid",
                                    openid: suc.data.openId
                                });
                                userDataMaster.getGameData(suc.data.uid);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    userDataMaster.getToday = function () {
        //获取格式化的当前日期
        var date = new Date();
        var month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) + '' : '0' + (date.getMonth() + 1);
        var day = date.getDate() > 9 ? (date.getDate()) + '' : '0' + date.getDate();
        return date.getFullYear() + '-' + month + '-' + day;
    };
    userDataMaster.myInfo = { uid: 0, openId: '', is_new_user: true, nickName: '', avatarUrl: '' }; //用户信息
    userDataMaster.gold = 500; //金币
    userDataMaster.life = 5; //体力
    userDataMaster.level = 1; //关卡
    userDataMaster.closeDate = 0; //上次关闭游戏的时间点
    userDataMaster.seconds = 0; //获取体力剩余秒数
    userDataMaster.terval = null; //计时器
    userDataMaster.levelStar = []; //过关星星情况 n颗星
    userDataMaster.bulletIndex = 0; //当前使用的炮弹
    userDataMaster.tool = {
        bullet: { level: 1, unlock: true, num: 0 },
        glass: { level: 1, unlock: true, num: 0 },
        hammer: { level: 2, unlock: false, num: 0 },
        hat: { level: 10, unlock: false, num: 0 },
        lamp: { level: 15, unlock: false, num: 0 }
    }; //道具数量
    userDataMaster.bulletArr = [
        { id: 0, img: 'img_bullet_a2', title: '仙人掌', price: 1000, state: 1 },
        { id: 1, img: 'img_bullet_b3', title: '仙人掌', price: 300, state: 0 },
        { id: 2, img: 'img_bullet_c3', title: '仙人掌', price: 500, state: 0 },
        { id: 3, img: 'img_bullet_d3', title: '仙人掌', price: 1000, state: 0 },
        { id: 4, img: 'img_bullet_e3', title: '仙人掌', price: 2000, state: 0 },
        { id: 5, img: 'img_bullet_f3', title: '仙人掌', price: 3000, state: 0 },
        { id: 6, img: 'img_bullet_g3', title: '仙人掌', price: 5000, state: 0 },
    ];
    userDataMaster.levelArr = [
        { level: 1, amount: 10, existAmount: 0, score: 20 },
        { level: 2, amount: 20, existAmount: 0, score: 40 },
        { level: 3, amount: 30, existAmount: 0, score: 60 },
        { level: 4, amount: 40, existAmount: 0, score: 100 },
        { level: 5, amount: 40, existAmount: 0, score: 200 },
        { level: 6, amount: 10, existAmount: 0, score: 20 },
        { level: 7, amount: 20, existAmount: 0, score: 40 },
        { level: 8, amount: 30, existAmount: 0, score: 60 },
        { level: 9, amount: 40, existAmount: 0, score: 100 },
        { level: 10, amount: 40, existAmount: 0, score: 200 },
        { level: 11, amount: 10, existAmount: 0, score: 20 },
        { level: 12, amount: 20, existAmount: 0, score: 40 },
        { level: 13, amount: 30, existAmount: 0, score: 60 },
        { level: 14, amount: 40, existAmount: 0, score: 100 },
        { level: 15, amount: 40, existAmount: 0, score: 200 },
        { level: 16, amount: 10, existAmount: 0, score: 20 },
        { level: 17, amount: 20, existAmount: 0, score: 40 },
        { level: 18, amount: 30, existAmount: 0, score: 60 },
        { level: 19, amount: 40, existAmount: 0, score: 100 },
        { level: 20, amount: 40, existAmount: 0, score: 200 },
        { level: 21, amount: 10, existAmount: 0, score: 20 },
        { level: 22, amount: 20, existAmount: 0, score: 40 },
        { level: 23, amount: 30, existAmount: 0, score: 60 },
        { level: 24, amount: 40, existAmount: 0, score: 100 },
        { level: 25, amount: 40, existAmount: 0, score: 200 },
        { level: 26, amount: 10, existAmount: 0, score: 20 },
        { level: 27, amount: 20, existAmount: 0, score: 40 },
        { level: 28, amount: 30, existAmount: 0, score: 60 },
        { level: 29, amount: 40, existAmount: 0, score: 100 },
        { level: 30, amount: 40, existAmount: 0, score: 200 },
        { level: 31, amount: 10, existAmount: 0, score: 20 },
        { level: 32, amount: 20, existAmount: 0, score: 40 },
        { level: 33, amount: 30, existAmount: 0, score: 60 },
        { level: 34, amount: 40, existAmount: 0, score: 100 },
        { level: 35, amount: 40, existAmount: 0, score: 200 },
        { level: 36, amount: 10, existAmount: 0, score: 20 },
        { level: 37, amount: 20, existAmount: 0, score: 40 },
        { level: 38, amount: 30, existAmount: 0, score: 60 },
        { level: 39, amount: 40, existAmount: 0, score: 100 },
        { level: 40, amount: 40, existAmount: 0, score: 200 }
    ];
    userDataMaster.shareUid = 0; //分享人id
    userDataMaster.requestTimes = 0; //请求游戏数据的次数
    userDataMaster.dayShareLife = { day: '', num: 0 }; //每日通过分享获得体力
    userDataMaster.dayGift = { day: '', num: 0 }; //每日抽奖次数
    userDataMaster.loginCallback = null; //弹窗登录成功的回调
    return userDataMaster;
}());
__reflect(userDataMaster.prototype, "userDataMaster");
window['userDataMaster'] = userDataMaster;
