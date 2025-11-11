var a = require("../../31D170254CF6B1BF57B71822C3C96AC2.js");
Page({
  data: {
    payResultImage: "icon_combined",
    payResultTip: "",
    payResult: 0,
    countDown: 3
  },
  delta: 1,
  onLoad: function(t) {
    var e, n;
    switch (console.log(t), this.delta = Number(t.delta) || 1, this.billIds = t.billIds, parseInt(t.payResult)) {
      case 2:
        n = "支付成功", e = "icon_combined";
        break;
      case 3:
        e = "icon_payfailure", n = "支付失败";
        break;
      case 1:
        e = "icon_payprocessing", n = "正在处理..."
    }
    if (t.billIds) {
      var i = t.billIds;
      i = i ? i.split(",").map((function(a) {
        return +a
      })) : [], a.post({
        url: "/admin/cs/check-satisfaction-push",
        data: {
          billId: i
        },
        showLoading: !0
      }).then((function(a) {
        if (a.success) {
          var e = encodeURIComponent("satisfaction-survey?billId=".concat(t.billIds));
          wx.navigateTo({
            url: "/pages/h5-container/index?webPath=" + e
          })
        } else wx.navigateBack({
          delta: that.delta
        })
      }))
    } else wx.navigateBack({
      delta: that.delta
    });
    this.setData({
      payResultImage: e,
      payResultTip: n
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {
    void 0
  },
  onPullDownRefresh: function() {},
  onReachBottom: function() {}
});