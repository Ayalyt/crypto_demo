var e = require("../../31D170254CF6B1BF57B71822C3C96AC2.js"),
  s = require("../../F9E424F04CF6B1BF9F824CF736786AC2.js");
Page({
  data: {
    showLoading: !0
  },
  onLoad: function(e) {
    wx.getStorageSync(s.TOKEN) ? this.queryUser() : (this.setData({
      showLoading: !1
    }), wx.switchTab({
      url: "/pages/store/index"
    }))
  },
  queryUser: function() {
    var s = this;
    e.post({
      url: "/living/room/query/live-user"
    }).then((function(e) {
      s.setData({
        showLoading: !1
      });
      var t = e.flag;
      wx.switchTab({
        url: t ? "/pages/service/service" : "/pages/store/index"
      })
    })).catch((function(e) {
      s.setData({
        showLoading: !1
      }), wx.switchTab({
        url: "/pages/service/service"
      })
    }))
  }
});