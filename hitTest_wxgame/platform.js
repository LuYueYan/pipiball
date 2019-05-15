/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */

class WxgamePlatform {

  name = 'wxgame'
  //登录
  login() {
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          resolve(res)
        }
      })
    })
  }
  //获取用户信息
  getUserInfo() {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        withCredentials: true,
        success: function(res) {
          resolve(res);
        }
      })
    })
  }
  //微信小游戏转发功能
  onShareAppMessage(object) {
    return new Promise((resolve, reject) => {
      wx.showShareMenu({
        withShareTicket: true
      });
      wx.onShareAppMessage(function() {
        return {
          title: object.title || "瞄准！射击！看谁能够消灭所有方块~",
          imageUrl: object.imageUrl || 'https://lixi.h5.app81.com/minigame/game_lixi/shooting/share_1.png',
          query: object.query || '',
          success: function(res) {
            if (object.success) object.success(res)
          },
          fail: function(err) {
            if (object.fail) object.fail(err)
          }
        }
      })
    })
  }
  //微信小游戏分享功能
  shareAppMessage(object) {
    return new Promise((resolve, reject) => {
      wx.shareAppMessage({
        title: object.title || '我能让射击视线自个儿拐弯，你行吗？',
        imageUrl: object.imageUrl || 'https://lixi.h5.app81.com/minigame/game_lixi/shooting/share_2.png',
        query: object.query || '',
        success: function(res) {
          if (object.success) object.success(res)
        },
        fail: function(err) {
          if (object.fail) object.fail(err)
        }
      })
    })
  }
  //创建用户信息按钮
  createUserInfoButton(object) {
    return new Promise((resolve, reject) => {
      resolve(wx.createUserInfoButton(object))
    })
  }
  //获取系统信息
  getSystemInfoSync() {
    return wx.getSystemInfoSync()
  }
  //本地存储
  setStorage(object) {
    return wx.setStorage(object)
  }
  //获取本地存储
  getStorage(object) {
    return wx.getStorage(object)
  }
  //移除指定缓存
  removeStorage(object) {
    return wx.removeStorage(object)
  }
  exitMiniProgram(object) {
    return wx.exitMiniProgram(object)
  }
  //打开小程序
  navigateToMiniProgram(object) {
    return new Promise((resolve, reject) => {
      wx.navigateToMiniProgram(object)
    })
  }
  //添加Banner广告
  createBannerAd(adUnitId, style) {
    return wx.createBannerAd({
      adUnitId: adUnitId || '',
      style: {
        left: style.left || 0,
        top: style.top || 0,
        width: style.width || 750,
        height: style.height || 300
      }
    })
  }
  //添加激励视频广告
  createRewardedVideoAd(adUnitId) {
    // return new Promise((resolve, reject) => {
    //     resolve(wx.createRewardedVideoAd({
    //         adUnitId: adUnitId
    //     }))
    // })
    console.log('创建视频广告')
    return wx.createRewardedVideoAd({
      adUnitId: adUnitId
    })

  }
  //对用户托管数据进行写数据操作，允许同时写多组 KV 数据
  setUserCloudStorage(object) {
    return new Promise((resolve, reject) => {
      wx.setUserCloudStorage(object)
    })
  }

  //监听小游戏回到前台的事件
  onShow(callback) {
    wx.onShow(callback)
  }
  offShow(callback) {
    wx.offShow(callback)
  }
  //监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件
  onHide(callback) {
    wx.onHide(callback)
  }
  //取消监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件
  offHide(callback) {
    wx.offHide(callback)
  }
  showModal(obj) {
    return wx.showModal(obj);
  }
  showToast(obj){
    return wx.showToast(obj)
  }
  setClipboardData(obj) {
    return wx.setClipboardData(obj)
  }
  getLaunchOptionsSync() {
    return wx.getLaunchOptionsSync()
  }
  // 预览图片
  previewImage(url, callback) {
    return new Promise((resolve, reject) => {
      wx.previewImage({
        urls: [url],
        success(suc) {
          callback(suc)
        },
        fail(err) {

        }
      })
    })

  }
  //手机短时间震动
  vibrateShort(obj) {
    return wx.vibrateShort(obj)
  }
  //辣鸡回收
  triggerGC() {
    wx.triggerGC()
  }

  openDataContext = new WxgameOpenDataContext();
}

class WxgameOpenDataContext {

  createDisplayObject(type, width, height) {
    const bitmapdata = new egret.BitmapData(sharedCanvas);
    bitmapdata.$deleteSource = false;
    const texture = new egret.Texture();
    texture._setBitmapData(bitmapdata);
    const bitmap = new egret.Bitmap(texture);
    bitmap.width = width;
    bitmap.height = height;

    if (egret.Capabilities.renderMode == "webgl") {
      const renderContext = egret.wxgame.WebGLRenderContext.getInstance();
      const context = renderContext.context;
      ////需要用到最新的微信版本
      ////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
      ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
      if (!context.wxBindCanvasTexture) {
        egret.startTick((timeStarmp) => {
          egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
          bitmapdata.webGLTexture = null;
          return false;
        }, this);
      }
    }
    return bitmap;
  }


  postMessage(data) {
    const openDataContext = wx.getOpenDataContext();
    openDataContext.postMessage(data);
  }

}


window.platform = new WxgamePlatform();