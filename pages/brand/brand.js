var t, e = (t = require("../../03F505464CF6B1BF65936D4171E96AC2.js")) && t.__esModule ? t : {
    default: t
  },
  a = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js");
Page({
  data: {
    scrollViewHeight: 726,
    tabBarHeight: 72,
    windowWidth: 0,
    brandList: [{
      imageUrl: ""
    }],
    currentBrandImageList: [],
    coverCurrent: 0,
    welcomePopupFlag: !1
  },
  onLoad: function() {
    var t = wx.getSystemInfoSync(),
      e = t.safeArea,
      i = t.screenHeight,
      r = t.statusBarHeight,
      n = t.windowWidth,
      s = i - e.bottom,
      o = i - s - r;
    this.setData({
      scrollViewHeight: o,
      tabBarHeight: s,
      windowWidth: n
    });
    try {
      (0, a.zhugeTrack)("进入品牌介绍页")
    } catch (t) {
      console.log(t)
    }
  },
  onShow: function() {
    this.getList(), this.setRefresh(), "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
      selected: 0
    }), this.duration = Date.now()
  },
  onHide: function() {
    if (this.duration) {
      try {
        (0, a.zhugeTrack)("品牌介绍页停留时长", {
          "停留时长": (Date.now() - this.duration) / 1e3
        })
      } catch (t) {
        console.log("err", t)
      }
      this.duration = 0
    }
  },
  onUnload: function() {
    if (this.duration) {
      try {
        (0, a.zhugeTrack)("品牌介绍页停留时长", {
          "停留时长": (Date.now() - this.duration) / 1e3
        })
      } catch (t) {
        console.log("err", t)
      }
      this.duration = 0
    }
  },
  getList: function(t) {
    var a = this;
    e.default.post({
      url: "/fun/homepage/brand/issue/list",
      data: {}
    }).then((function(t) {
      var e = [];
      t && t.length ? (e = t.sort((function(t, e) {
        return e.imageSort - t.imageSort
      })), a.setData({
        brandList: e,
        currentBrandImageList: t[0].imageList
      })) : a.setData({
        brandList: e,
        currentBrandImageList: {}
      })
    }))
  },
  swiperChange: function(t) {
    if ("touch" === t.detail.source) {
      var e = this.data.brandList.find((function(e) {
        return e.id === Number(t.detail.currentItemId)
      }));
      this.setData({
        currentBrandImageList: e.imageList || [],
        coverCurrent: t.detail.current
      })
    } else this.setData({
      coverCurrent: t.detail.current
    })
  },
  childSwiperChange: function(t) {
    "touch" === t.detail.source && this.setData({
      coverCurrent: this.data.coverCurrent
    })
  },
  onShareAppMessage: function() {},
  triggerCdpReady: function() {
    this.setRefresh()
  },
  setRefresh: function() {
    wx.getStorageSync("cdpReady") && this.setData({
      welcomePopupFlag: !this.data.welcomePopupFlag
    })
  }
});