var e, n = require("./@babel/runtime/helpers/objectSpread2.js"),
  t = (e = require("BD7690F64CF6B1BFDB10F8F156596AC2.js")) && e.__esModule ? e : {
    default: e
  };
var r = require("03F505464CF6B1BF65936D4171E96AC2.js"),
  a = {
    "-2": "支付取消",
    "-1": "支付出错",
    0: "未支付",
    1: "支付中",
    2: "支付成功",
    3: "支付失败"
  };
module.exports = function(e, o) {
  var u, i, c, s, p, l;

  function f() {
    return u ? r.post({
      url: "/cashier/unionpay/queryUniPayAppletResult",
      data: {
        flowRecordId: u
      }
    }).then((function(e) {
      var n = e || {},
        t = (n.amount, n.paymentResult),
        r = n.businessChannelSource;
      return s = t, c = r, p = "payment:ok", e
    })) : Promise.reject("flowRecordId is empty.")
  }

  function d() {
    return {
      businessChannelSource: c,
      wxPrePaymentNo: void 0,
      flowRecordId: u,
      paymentResult: s,
      paymentMessage: p,
      paymentErrorMessage: l,
      payResultNames: a,
      payStatusQuery: f
    }
  }
  return t.default.getOpenId().then((function(n) {
    return console.log("progressStatus", n), "function" == typeof o && o(0), t = n, a = wx.getAccountInfoSync().miniProgram.version || "30.9", r.post({
      header: {
        "x-fun-openid-data": t,
        "X-FUN-APPVERSION": a
      },
      url: "/cashier/unionpay/create-applet-order",
      data: {
        paymentNo: e
      }
    }).then((function(e) {
      var n = e || {},
        t = n.miniPayRequest,
        r = void 0 === t ? {} : t,
        a = n.flowRecordId,
        o = n.payChannel,
        c = n.dataPackage,
        s = void 0 === c ? {} : c,
        p = "huifu_pay" === o || "icbc_pay" === o,
        l = p ? JSON.parse(s) || {} : r,
        f = l.timeStamp,
        d = l.nonceStr,
        y = l.paySign,
        m = l.signType;
      return u = a, i = {
        timeStamp: f,
        nonceStr: d,
        package: p ? l.package : l.packageField,
        signType: m,
        paySign: y
      }, e
    }));
    var t, a
  })).then((function(e) {
    return "function" == typeof o && o(1), new Promise((function(e, t) {
      wx.requestPayment(n(n({}, i), {}, {
        success: function(n) {
          e(n)
        },
        fail: function(e) {
          console.log("err", e);
          var n = (e || {}).errMsg;
          if (s = -1, (p = n + "").indexOf("fail cancel") >= 0) s = -2, p = "cancelled", t("cancelled");
          else {
            var r = p.match(/fail \((\S+)\)/);
            r && r.length > 1 && (p = r[1])
          }
          t(e)
        }
      }))
    }))
  })).then((function(e) {
    return "function" == typeof o && o(2), f()
  })).then((function(e) {
    return d()
  })).catch((function(e) {
    return s = s || -1, p = String(e), l = JSON.stringify(e), d()
  }))
};