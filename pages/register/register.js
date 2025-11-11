Page({
  data: {},
  onLoad: function(o) {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onGoLogin: function() {
    wx.navigateTo({
      url: "../login/login"
    })
  },
  onShowProtocol: function() {
    wx.navigateTo({
      url: "/packageA/pages/register-protocol/register-protocol"
    })
  }
});