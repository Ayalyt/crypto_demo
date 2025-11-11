var o = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js");
Page({
  data: {},
  onLoad: function(o) {},
  onReady: function() {},
  onShow: function() {
    try {
      (0, o.zhugeTrack)("服务-进入合同文书页面")
    } catch (o) {
      console.log("err", o)
    }
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  goToContract: function() {
    try {
      (0, o.zhugeTrack)("服务-合同文书-点击租房合同")
    } catch (o) {
      console.log("err", o)
    }
    this.jumpPage({
      url: "/packageA/pages/contract/list/list"
    })
  },
  goToCheckin: function() {
    try {
      (0, o.zhugeTrack)("服务-合同文书-点击物品清单")
    } catch (o) {
      console.log("err", o)
    }
    this.jumpPage({
      url: "/packageA/pages/checkin/list/list"
    })
  },
  jumpPage: function(o) {
    wx.getStorageSync("token") ? wx.navigateTo(o) : wx.navigateTo({
      url: "/pages/login/login"
    })
  }
});