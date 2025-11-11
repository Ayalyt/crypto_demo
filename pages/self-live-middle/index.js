var o = require("../../F9E424F04CF6B1BF9F824CF736786AC2.js");
Page({
  data: {
    isLogin: !1
  },
  onLoad: function(o) {},
  onReady: function() {},
  onShow: function() {
    try {
      wx.getStorageSync(o.ISLOGIN) ? this.goToSelfLive() : this.onLogin()
    } catch (o) {
      console.log("e", o)
    }
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onLogin: function() {
    this.jumpPage({
      url: "../login/login?isSeleLive=" + !0
    })
  },
  goToSelfLive: function() {
    var o = encodeURIComponent("lease-detail");
    wx.redirectTo({
      url: "/pages/h5-container/index?webPath=".concat(o)
    })
  },
  jumpPage: function(o) {
    wx.getStorageSync("token") ? wx.redirectTo(o) : wx.redirectTo({
      url: "../login/login?isSeleLive=" + !0
    })
  }
});