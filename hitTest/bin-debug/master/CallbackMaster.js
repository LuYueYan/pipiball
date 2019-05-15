var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CallbackMaster = (function () {
    function CallbackMaster() {
    }
    CallbackMaster.init = function () {
        //右上角分享
        var ran = Math.floor(Math.random() * CallbackMaster.share_title.length);
        var obj = {
            query: 'type=newUser&uid=' + userDataMaster.getMyInfo.uid,
            title: CallbackMaster.share_title[ran],
            imageUrl: CallbackMaster.share_img[ran],
        };
        platform.onShareAppMessage(obj);
        platform.onShow(function (option) {
            CallbackMaster.playCallback && CallbackMaster.playCallback();
            var saveShareCount = CallbackMaster.shareCount + 1;
            if (CallbackMaster.shareCount == 0) {
                //这个分享按钮的第一次分享
                CallbackMaster.saveShareSuc = CallbackMaster.shareSuc;
                var obj_1 = {
                    title: '温馨提示',
                    content: CallbackMaster.shareFailText,
                    confirmText: '好的',
                    showCancel: false,
                    success: function (res) {
                        if (res.confirm) {
                            CallbackMaster.openShare(CallbackMaster.saveShareSuc, saveShareCount);
                        }
                    }
                };
                platform.showModal(obj_1);
            }
            else if (new Date().getTime() - CallbackMaster.shareTime > 3000) {
                //超过三秒，算分享成功
                CallbackMaster.shareSuc && CallbackMaster.shareSuc();
                CallbackMaster.saveShareSuc = null;
            }
            else {
                CallbackMaster.saveShareSuc = CallbackMaster.shareSuc;
                //分享失败弹窗
                var obj_2 = {
                    title: '温馨提示',
                    content: '分享成功可以获得丰厚奖励',
                    confirmText: '分享',
                    success: function (res) {
                        if (res.confirm) {
                            CallbackMaster.openShare(CallbackMaster.saveShareSuc, saveShareCount);
                        }
                    }
                };
                platform.showModal(obj_2);
            }
            CallbackMaster.shareSuc = null;
            CallbackMaster.shareCount = -1;
        });
        platform.onHide(function () {
            soundMaster.soundChannel && soundMaster.soundChannel.stop();
            //存储数据
            CallbackMaster.onHideFun && CallbackMaster.onHideFun();
            //存储游戏数据
            var info = {
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
                bulletStateNum: userDataMaster.bulletStateNum,
                dayFreeLife: userDataMaster.dayFreeLife
            };
            var params = {
                uid: userDataMaster.getMyInfo.uid,
                info: JSON.stringify(info)
            };
            ServiceMaster.post(ServiceMaster.setGameData, params, function (res) {
                if (res.code == 1 && res.data) {
                }
            });
        });
    };
    CallbackMaster.openShare = function (Callback, judge, query, shareType) {
        if (Callback === void 0) { Callback = null; }
        if (judge === void 0) { judge = 0; }
        if (query === void 0) { query = ''; }
        if (shareType === void 0) { shareType = 0; }
        //参数1---回调函数 参数2---是否判断分享成功（不判断为-1，>=0为判断次数） 参数3----附加的参数  4--分享类型
        // 好友助力
        if (CallbackMaster.hasChecked) {
            //如果审核通过了	
            // if (shareType == 0) {
            //默认随机分享
            // } else {
            // }
            var ran = Math.floor(Math.random() * CallbackMaster.share_title.length);
            var obj = {
                title: CallbackMaster.share_title[ran],
                imageUrl: CallbackMaster.share_img[ran],
                query: 'uid=' + userDataMaster.getMyInfo.uid + query
            };
            platform.shareAppMessage(obj);
            CallbackMaster.shareTime = judge >= 0 ? new Date().getTime() : 0;
            CallbackMaster.shareCount = judge;
            CallbackMaster.shareSuc = Callback;
        }
    };
    CallbackMaster.openHide = function (Callback) {
        if (Callback === void 0) { Callback = null; }
        CallbackMaster.onHideFun = Callback;
    };
    CallbackMaster.recommandClick = function (type, item) {
        if (type === void 0) { type = 1; }
        //推荐位点击统计
        var uid = userDataMaster.getMyInfo.uid;
        var params = {
            id: item.id,
            uid: uid,
            appid: item.appid,
            type: type,
            module_id: item.module_id,
            module_ext_id: item.module_ext_id
        };
        ServiceMaster.post(ServiceMaster.gameClick, params, function (suc) {
            if (suc.code == 1 && suc.data) {
            }
        });
    };
    CallbackMaster.shareSuc = null; //分享成功回调
    CallbackMaster.shareTime = 0; //分享的时间
    CallbackMaster.shareCount = -1; //分享次数（同一按钮的）
    CallbackMaster.onHideFun = null; //页面进入后台回调
    //审核是否通过
    CallbackMaster.hasChecked = false;
    CallbackMaster.saveShareSuc = null; //保存上次分享的回调
    CallbackMaster.shareFailText = '好友信号连接失败，再试试吧'; //分享失败的弹窗文案
    CallbackMaster.share_title = []; //分享标题
    CallbackMaster.share_img = []; //分享图
    CallbackMaster.playCallback = null; //游戏中onshow后的回调
    return CallbackMaster;
}());
__reflect(CallbackMaster.prototype, "CallbackMaster");
