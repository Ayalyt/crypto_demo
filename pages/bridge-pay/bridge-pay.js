var a, t, e, n, o, s = require("../../@babel/runtime/helpers/objectSpread2"),
  c = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  i = "waiting",
  r = "success",
  u = "warn",
  p = "1",
  y = "2",
  d = "3",
  S = {
    1: "支付中",
    2: "支付成功",
    3: "支付失败"
  };
Page({
  data: {
    payStatusIcon: i,
    payStatus: p,
    payStatusDes: "正在发起支付..."
  },
  onLoad: function(a) {
    o = !1, wx.canIUse("hideHomeButton") && wx.hideHomeButton();
    var t = a.paymentNo,
      s = void 0 === t ? "" : t,
      c = a.payChannelCode;
    e = s, n = void 0 === c ? "" : c;
    var i = wx.getStorageSync("openId");
    i && this.setOpenid(i)
  },
  setOpenid: function(a) {
    o || (o = !0, this.onQueryWechatpayParam(a, e, n))
  },
  onQueryWechatpayParam: function(e, n, o) {
    var s = this;
    wx.showLoading({
      title: "正在支付..."
    });
    var i = {
      paymentNo: n,
      payChannelCode: o,
      userOpenId: e
    };
    c.post({
      url: "/cashier/unionpay/create-app-order",
      data: i
    }).then((function(e) {
      var n = e || {},
        o = n.dataPackage,
        c = void 0 === o ? {} : o,
        i = n.flowRecordId,
        r = JSON.parse(c) || {},
        u = r.timeStamp,
        p = r.nonceStr,
        y = r.paySign,
        d = r.signType;
      a = i, t = {
        timeStamp: u,
        nonceStr: p,
        package: r.package,
        paySign: y,
        signType: d
      }, wx.hideLoading(), s.onStartWechatPay()
    })).catch((function(a) {
      console.log("err", a), wx.hideLoading(), setTimeout((function() {
        wx.showToast({
          title: a.data.data.message || "请返回APP重新发起支付",
          icon: "none"
        }), s.setData({
          payStatusIcon: u,
          PayStatus: d,
          payStatusDes: S[d]
        })
      }), 1e3)
    }))
  },
  onStartWechatPay: function() {
    var a = this;
    wx.requestPayment(s(s({}, t), {}, {
      success: function(t) {
        console.log("onStartWechatPay success"), a.onQueryPayResult()
      },
      fail: function(t) {
        console.log("onStartWechatPay fail"), a.setData({
          payStatusIcon: u,
          PayStatus: d,
          payStatusDes: S[d]
        })
      }
    }))
  },
  onQueryPayResult: function() {
    var t = this;
    return c.post({
      url: "/cashier/unionpay/queryPayResult",
      data: {
        flowRecordId: a || "",
        paymentNo: e || ""
      }
    }).then((function(a) {
      var e = (a || {}).paymentResult,
        n = t.data,
        o = n.payStatusIcon,
        s = n.payStatus,
        c = n.payStatusDes;
      switch (e) {
        case p:
          o = i, c = S[p];
          break;
        case y:
          o = r, c = S[y];
          break;
        case d:
          o = u, c = S[d]
      }
      t.setData({
        payStatusIcon: o,
        payStatus: s,
        payStatusDes: c
      })
    }))
  },
  launchAppError: function(a) {
    console.log(a.detail.errMsg)
  }
});