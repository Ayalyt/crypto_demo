var n = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js");
getApp();
Page({
  data: {},
  onLoad: function(n) {
    console.log(n, "我是invite")
  },
  onReady: function() {},
  onShow: function() {
    wx.showLoading({
      title: "加载中..."
    })
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  handleAuthReady: function(n) {
    n.detail.userInfo.id && (this.data.cdpLoginInfo = n.detail, this.autoAuthLogin(n.detail.userInfo.id, n.detail.sessionId, n.detail.userInfo.phone))
  },
  autoAuthLogin: function(o, t, i) {
    n.autoAuthLogin(o, t).then((function(t) {
      if (t) {
        n.saveMobileUserId(i, o), wx.hideLoading();
        var e = encodeURIComponent("activity/invite?phone=".concat(i, "&startDate=2021-11-11 00:00&endDate=2021-12-12 24:00&precision=minutes"));
        wx.redirectTo({
          url: "/pages/h5-container/index?webPath=".concat(e)
        })
      }
    }))
  }
});