var t, a = (t = require("../../03F505464CF6B1BF65936D4171E96AC2.js")) && t.__esModule ? t : {
    default: t
  },
  e = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js");
Page({
  data: {
    topBannerList: [],
    externalJumpList: [],
    waistBannerList: []
  },
  onLoad: function(t) {},
  onReady: function() {},
  onShow: function() {
    try {
      (0, e.zhugeTrack)("进入发现页面")
    } catch (t) {
      console.log(t)
    }
    this.getPageInfo(), "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
      selected: 2
    })
  },
  getPageInfo: function() {
    var t = this;
    a.default.post({
      url: "/fun/homepage/found/page/info",
      data: {}
    }).then((function(a) {
      var e = a.topBannerList,
        n = void 0 === e ? [] : e,
        o = a.externalJumpList,
        i = void 0 === o ? [] : o,
        r = a.waistBannerList,
        s = void 0 === r ? [] : r;
      t.setData({
        topBannerList: n,
        externalJumpList: i,
        waistBannerList: s
      })
    })).catch((function(t) {
      var a = t.data && t.data.data && t.data.data.message || t.message;
      wx.showToast({
        title: a,
        icon: "none"
      })
    }))
  },
  goBrand: function(t) {
    var a = t.detail,
      n = a.url,
      o = a.foundname;
    try {
      (0, e.zhugeTrack)("发现-点击合作品牌小程序", {
        "品牌名称": o
      })
    } catch (t) {
      console.log("error", t)
    }
    if (-1 !== n.indexOf("#"));
    else {
      var i = (0, e.getQuery)(n),
        r = i.appid,
        s = i.appId,
        u = i.path;
      wx.navigateToMiniProgram({
        appId: r || s,
        path: u,
        envVersion: "release"
      })
    }
  },
  goTwoBrand: function(t) {
    console.log("url", t.currentTarget.dataset.url)
  },
  onShareAppMessage: function() {}
});