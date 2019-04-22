//资源列表
const assetsUrl = {
  icon_1: "openDataContext/assets/icn_medal_01.png",
  icon_2: "openDataContext/assets/icn_medal_02.png",
  icon_3: "openDataContext/assets/icn_medal_03.png",
  bg_mine: "openDataContext/assets/bg_me.png",
  bg_friend: "openDataContext/assets/bg_friend.png",
  bg_pass: 'openDataContext/assets/pass_friend.png',
  star_1: 'openDataContext/assets/img_star_b1.png',
  star_2: 'openDataContext/assets/img_star_b2.png',
};
const assets = []
let date = new Date()
//是否加载过资源的标记量
let hasLoadRes;
//资源加载
function preloadAssets() {
  let preloaded = 0;
  let count = 0;
  for (let asset in assetsUrl) {
    count++;
    const img = wx.createImage();
    img.onload = () => {
      preloaded++;
      if (preloaded == count) {
        hasLoadRes = true;
      }
    }
    img.src = assetsUrl[asset];
    assets[asset] = img;
  }
}
//获取当前时间是本年的第几周
function getWeekOfYear() {
  var today = new Date();
  var firstDay = new Date(today.getFullYear(), 0, 1);
  var dayOfWeek = firstDay.getDay();
  var spendDay = 1;
  if (dayOfWeek != 0) {
    spendDay = 7 - dayOfWeek + 1;
  }
  firstDay = new Date(today.getFullYear(), 0, 1 + spendDay);
  var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000);
  var result = Math.ceil(d / 7);
  return result + 1;
}

/**
 * 好友排行
 */
class Rank {
  //共享图布
  sharedCanvas;
  //画布
  context;

  //系统信息
  _system = {};
  //屏幕宽度
  screenWidth = 750;
  //屏幕高度
  screenHeight = 1334;
  //场景宽度
  stageWidth = 750;
  //场景高度
  stageHeight = 1334;
  //宽度 场景/屏幕
  scaleWidth = 1;
  //高度 场景/屏幕
  scaleHeight = 1;
  //本周是第几周
  currentWeek = 0;
  //页码
  page = 1;
  //每页显示行数
  pageSize = 6;
  //最高分
  maxScore = 0;
  maxLevel = 0; //最高阶级
  star = 0; //星星数
  myRank=1;//我的排名
  currentScore = 0; //当前分数
  currentLevel = 0; //当前阶级
  passIndex = 0; //即将超越的好友index
  //好友排行数组
  friendList = [];
  //用户的openid
  openid = '';
  interval = null;

  //单例
  static instance;
  static getInstance() {
    if (!Rank.instance) new Rank()
    return Rank.instance
  }
  //构造函数
  constructor() {
    Rank.instance = this;
    this.currentWeek = getWeekOfYear();
    //初始化画布
    this.init()
    //获取历史最高分数
    this.getBestScore();
    this.getFriend();
  }
  //初始化当前用户信息
  initUser(openid) {
    this.openid = openid
  }

  //初始化画布
  init() {
    this.screenWidth = 750
    this.screenHeight = 1334
    this.scaleWidth = 1
    this.scaleHeight = 1
    //获取主域和开放数据域共享的 sharedCanvas
    this.sharedCanvas = wx.getSharedCanvas()
    this.context = this.sharedCanvas.getContext('2d')
    this.context.globalCompositeOperation = "source-over"
    this.context.width = this.screenWidth
    this.context.height = this.screenHeight

  }


  //获取用户目前最高分
  getBestScore() {
    let that = this;
    wx.getUserCloudStorage({
      keyList: ['maxScore', 'maxLevel', 'star', 'week'],
      success: function(res) {
        let maxScore = 0,
          maxLevel = 0,
          star = 0,
          cloudWeek = 0;
        for (let val of res.KVDataList) {
          switch (val.key) {
            case 'maxScore':
              maxScore = parseInt(val.value);
              break;
            case 'star':
              star = parseInt(val.value);
              break;
            case 'maxLevel':
              maxLevel = parseInt(val.value);
              break;
            case 'week':
              cloudWeek = parseInt(val.value);
              break;
          }
        }
        if (maxScore > 0 && cloudWeek == that.currentWeek) {
          that.maxScore = maxScore;
          that.maxLevel = maxLevel;
          that.star = star;
        }
      }
    })
  }
  //获取好友数据
  getFriend(callback = null) {
    let that = this;
    //用户排行榜数据
    wx.getFriendCloudStorage({
      keyList: ['maxScore', 'maxLevel', 'star', 'week'],
      success: function(res) {
        // console.log('+++++++用户排行榜数据++++++++')
          // console.log(res)
        if (res && res.data) {
          for (let i = 0; i < res.data.length; i++) {
            let scoreData = res.data[i].KVDataList;
            res.data[i].maxLevel = 0;
            for (let val of scoreData) {
              switch (val.key) {
                case 'maxScore':
                  res.data[i].maxScore = parseInt(val.value)
                  break;
                case 'maxLevel':
                  res.data[i].maxLevel = parseInt(val.value)
                  break;
                case 'star':
                  res.data[i].star = parseInt(val.value)
                  break;
                case 'week':
                  res.data[i].week = parseInt(val.value);
                  break;
              }
            }

          }
          //挑选本周数据
          for (let i = 0; i < res.data.length; i++) {
            if (!res.data[i].week || res.data[i].week != that.currentWeek) {
              res.data.splice(i, 1);
              i--;
            }
          }
          //排序
          function sortScore(a, b) {
            if (a.maxLevel !== b.maxLevel) {
              return b.maxLevel - a.maxLevel
            }
            return b.maxScore - a.maxScore
          }
          res.data.sort(sortScore);
          that.friendList = res.data;
          //当前要超越好友的index
          for (let i = that.friendList.length - 1; i > -1; i--) {
            if (that.friendList[i].openid == that.openid) {
              //我的排名
              that.myRank = i + 1;
            }
            if (that.friendList[i].maxLevel > that.currentLevel || that.friendList[i].maxScore > that.currentScore) {
              that.passIndex = i;
              break;
            }
          }
          callback && callback()
        }
      },
      fail: function() {}
    })
  }
  //更换微信用户头像加载的更改尺寸 size:0(代表640*640)、46、64、96、132
  updateAvatarSize(avatarUrl, size = 96) {
    var reg = /\/(0|64|96|132)$/g;
    var res = reg.exec(avatarUrl)
    if (res) {
      avatarUrl = avatarUrl.substring(0, res.index) + '/' + size;
    }
    return avatarUrl;
  }
  //清空画布
  clear() {
    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight)
  }


  //设置分数
  setScore(score, level, star) {
    let that = this;
    let list = [];
    if (level > that.maxLevel || (level == that.maxLevel && score > that.maxScore)) {
      list.push({
        key: "maxScore",
        value: score.toString()
      });
      list.push({
        key: "maxLevel",
        value: level.toString()
      });
      list.push({
        key: "star",
        value: star.toString()
      });
      list.push({
        key: "week",
        value: that.currentWeek.toString()
      });
      wx.setUserCloudStorage({
        KVDataList: list,
        success(res) {
          that.maxScore = score;
          that.maxLevel = level;
          that.star = star;
        }
      })
    }

  }
  updateScore(score, level, star, init = false) {
    //超越好友
    let that = this;
    that.currentScore = score;
    that.currentLevel = level;
    //上传分数
    that.setScore(score, level, star);
    if (init) {
      that.drawUpdate();
    } else {
      if (that.friendList.length > 0 && that.currentScore >= that.friendList[that.passIndex].maxScore) {
        that.drawUpdate();
      }
    }

  }
  drawUpdate() {
    //超越好友
    let that = this;
    let mine = 0;
    //清空画布
    this.clear();
    let list = that.friendList;
    if (list.length < 1) {
      return;
    }
    for (let i = that.friendList.length - 1; i > -1; i--) {
      if (that.friendList[i].maxScore > that.currentScore && that.friendList[i].openid != this.openid) {
        that.passIndex = i;
        break;
      }
      if (i == 0) {
        //没有可以超越的好友
        this.clear();
        return;
      }
    }
    let item = that.friendList[that.passIndex];
    this.context.beginPath();
    this.context.textBaseline = "middle";
    //用户昵称
    // this.context.font = "20px Microsoft YaHei"; //设置样式
    // this.context.fillStyle = '#64b6ff';
    // this.context.textAlign = 'left';
    // if (item.nickname.length > 4) {
    //   item.nickname = item.nickname.slice(0, 4) + '…';
    // }
    // this.context.fillText(item.nickname, 80, 30);
    //用户得分
    // this.context.font = "bold 24px Microsoft YaHei"; //设置样式
    // this.context.fillStyle = '#64b6ff';
    // this.context.textAlign = 'left';
    // this.context.fillText(item.maxScore, 80, 65);

    //用户头像
    const img = wx.createImage();
    img.src = item.avatarUrl;
    img.onload = () => {
      let x = 5,
        y = 5,
        r = 35;
      this.context.save();
      this.context.beginPath();
      this.context.arc(x + r, y + r, r, 0, 2 * Math.PI);
      this.context.strokeStyle = "#ffffff";
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath()
      this.context.clip()
      this.context.drawImage(img, x, y, 2 * r, 2 * r)
      this.context.restore();
    }
  }
  gameOver() {
    let that = this;
    this.clear();
    that.getFriend(() => {
      that.drawOver()
    });
  }
  drawOver() {
    let that = this;
    let mine = 0;
    //清空画布
    this.clear();
    let list = that.friendList;

    for (let i = 0; i < list.length; i++) {
      if (list[i].openid === that.openid) {
        //自己的排名
        mine = i;
        break;
      }
    }
    let new_list = [];
    let index = mine;
    if (list.length < 4) {
      new_list = list;
      index = 0;
    } else {
      if (mine == 0) {
        new_list = list.slice(0, 3);
        index = 0;

      } else if (mine == list.length - 1) {
        new_list = list.slice(mine - 2, mine + 1);
        index = mine - 2;
      } else {
        new_list = list.slice(mine - 1, mine + 2);
        index = mine - 1;
      }
    }
    let x = 0,
      y = 0,
      width = 190,
      height = 280,
      bgImg = assets.bg_friend,
      textColor = "#ffffff";
    this.context.beginPath();
    this.context.textBaseline = "middle";

    for (let i = 0; i < new_list.length; i++) {
      let item = new_list[i];

      //是否前三名
      if (index + i > 2) {
        this.context.font = "bold 38px Microsoft YaHei"; //设置样式
        this.context.fillStyle = textColor;
        this.context.textAlign = 'center';
        this.context.fillText(index + i + 1, i * width + width / 2, 30);
      } else {
        this.context.drawImage(assets['icon_' + (index + i + 1)], i * width + 58.5, -5, 73, 82)
      }
      //用户昵称
      this.context.font = "26px Microsoft YaHei"; //设置样式
      this.context.fillStyle = textColor;
      this.context.textAlign = 'center';
      if (item.nickname.length > 7) {
        item.nickname = item.nickname.slice(0, 4) + '…';
      }
      this.context.fillText(item.nickname, i * width + width / 2, 220);
      //用户得分
      this.context.font = "bold 24px Microsoft YaHei"; //设置样式
      this.context.fillStyle = textColor;
      this.context.textAlign = 'center';
      this.context.fillText(item.maxScore + ' 分', i * width + width / 2, 255);

      //用户头像
      const img = wx.createImage();
      img.src = item.avatarUrl;
      img.onload = () => {
        let x = i * width + width / 2 - 60,
          y = 70,
          r = 60;
        this.context.save();
        this.context.beginPath();
        this.context.strokeStyle = '#ffffff';
        this.context.lineWidth = 5;
        this.context.arc(x + r, y + r, r, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath()
        this.context.clip()
        this.context.drawImage(img, x, y, 2 * r, 2 * r)
        this.context.restore();
      }
    }


  }
  getPageRank(isOver = false) {
    let that = this;
    //清空画布
    this.clear();
    //获取排行数据
    that.getFriend(() => {
      that.drawContent(isOver)
    });

  }
  drawContent(isOver) {
    let that = this;
    //清空画布
    this.clear();

    //绘制画布[好友排行]
    let list = that.friendList.slice((that.page - 1) * that.pageSize, that.page * that.pageSize);
    this.context.font = "28px Microsoft YaHei"; //设置样式
    this.context.fillStyle = "#9d7236";
    this.context.textAlign = 'center';
    this.context.fillText('您当前为：第'+that.myRank+'名', 300, 35);
    let pageAll = Math.ceil(that.friendList.length / that.pageSize);
    this.context.fillText(that.page + ' / ' + pageAll, 300, 720);
    for (let i = 0; i < list.length; i++) {
      let x = 0,
        y = 60,
        width = 588,
        height = 98,
        gap = 15,
        bgImg = assets.bg_friend,
        textColor = "#874717",
        nameColor = "#9d7236";
      let item = list[i];
      this.context.lineWidth = 1;
      // if (item.openid === that.openid) {
      //   //自己的样式特出
      //   bgImg = assets.bg_mine;
      //   textColor = "#ffffff";
      //   nameColor = "#ffffff";
      // }

      this.context.beginPath();

      //背景图

      this.context.drawImage(bgImg, x, y + i * (height + gap), width, height);

      this.context.textBaseline = "middle";
      //是否前三名
      if (i + (that.page - 1) * that.pageSize > 2) {
        this.context.font = "bold 34px Microsoft YaHei"; //设置样式
        this.context.fillStyle = textColor;
        this.context.textAlign = 'center';
        this.context.fillText(i + 1 + (that.page - 1) * that.pageSize, x + 40, y + height / 2 + i * (height + gap));
      } else {
        this.context.drawImage(assets['icon_' + (i + 1 + (that.page - 1) * that.pageSize)], x + 10, y + (height - 59) / 2 + i * (height + gap), 59, 54);
      }
      //用户昵称
      this.context.font = "24px Microsoft YaHei"; //设置样式
      this.context.fillStyle = nameColor;
      this.context.textAlign = 'left';
      if (item.nickname.length > 5) {
        item.nickname = item.nickname.slice(0, 5) + '…';
      }
      this.context.fillText(item.nickname, x + 172, y + height / 2 + i * (height + gap));

      //星星
      for (let k = 1; k <= 3; k++) {
        let s = assets.star_2;
        if (item.star && k <= item.star) {
          s = assets.star_1;
        }
        this.context.drawImage(s, x + 320 + k * 35, y + i * (height + gap) + 20, 26, 26);
      }

      //用户阶级
      this.context.font = "bold 28px Microsoft YaHei"; //设置样式
      this.context.fillStyle = '#874717';
      this.context.textAlign = 'right';
      this.context.fillText('关卡' + item.maxLevel, x + 550, y + height / 3 + i * (height + gap));
      //用户得分
      this.context.font = "bold 24px Microsoft YaHei"; //设置样式
      this.context.fillStyle = "#9d7236";
      this.context.textAlign = 'right';
      this.context.fillText(item.maxScore, x + 550, y + height / 3 * 2 + i * (height + gap));
      //下划线
      // this.context.beginPath();
      // this.context.lineWidth = 0.5;
      // this.context.strokeStyle = '#888888';
      // this.context.moveTo(0, y + height - 2 + i * (height + gap));
      // this.context.lineTo(width, y + height - 2 + i * (height + gap));
      // this.context.stroke();


      //用户头像
      const img = wx.createImage();
      img.src = item.avatarUrl;
      img.onload = () => {
        let xh = 82,
          yh = 15 + i * (height + gap),
          r = 35;
        this.context.save();
        this.context.beginPath();
        this.context.lineWidth = 0;
        this.context.strokeStyle = '#ffffff';
        this.context.arc(xh + r, y + yh + r, r, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
        this.context.clip();
        this.context.drawImage(img, xh, y + yh, 2 * r, 2 * r);
        this.context.restore();
      }
    }
  }

}

preloadAssets()
var rank = Rank.getInstance()

//增加来自主域的监听函数
wx.onMessage((data) => {

  if (data.width) {
    rank.context.width = data.width
  }
  if (data.height) {
    rank.context.height = data.height
  }


  switch (data.type) {
    //设置当前用户的openid
    case 'openid':
      rank.initUser(data.openid);
      break;
      //好友排行榜
    case 'rank':
      switch (data.page) {
        case '+1':
          if (rank.page * rank.pageSize < rank.friendList.length) {
            rank.page++;
            rank.getPageRank()
          }
          break;
        case '-1':
          rank.page--;
          if (rank.page < 1) {
            rank.page = 1;
            break;
          } else {
            rank.getPageRank();
            break;
          }

        default:
          rank.page = 1;
          rank.getPageRank();
      }
      break;
    case 'passInit':
      rank.updateScore(data.score, 1, 0, true);
      break;
    case 'gameOver':
      rank.gameOver();
      break;
    case 'updateScore':
      rank.updateScore(data.score, data.level, data.star);
      break;
    case 'clear':
      rank.clear();
      break;
      //加载资源函数 **只需要加载一次**
    case 'load-res':
      //加载资源函数
      preloadAssets();
      break;
    default:
  }
});