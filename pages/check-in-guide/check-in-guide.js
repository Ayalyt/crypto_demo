var t = require("../../31D170254CF6B1BF57B71822C3C96AC2.js");
Page({
  data: {
    infoData: [],
    isNoDataShow: !1,
    text: ""
  },
  onLoad: function(t) {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onMonitorData: function(t) {
    if (t.detail) {
      if (wx.getStorageSync("sourcePath")) return void this.setData({
        isNoDataShow: !0,
        text: "什么都没有，到别处看看吧~~"
      });
      this.getData(t.detail.orderNo)
    } else this.setData({
      isNoDataShow: !0,
      text: "什么都没有，请先订房哦~~"
    })
  },
  getData: function(o) {
    var a = this;
    t.post({
      url: "/living/room/query-check-in-guide-list",
      data: {
        orderNo: o
      }
    }).then((function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      t.length > 0 ? a.setData({
        infoData: t,
        isNoDataShow: !1
      }) : a.setData({
        infoData: t,
        isNoDataShow: !0
      })
    }))
  }
});