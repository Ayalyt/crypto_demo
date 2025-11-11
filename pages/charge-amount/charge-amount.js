var t = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  o = require("../../31D170254CF6B1BF57B71822C3C96AC2.js"),
  n = require("../../DD994C124CF6B1BFBBFF2415B85A6AC2.js");
Page({
  data: {
    couponAmount: "",
    amount: "",
    zhugeAmount: "",
    payableAmount: "",
    roomInfo: "",
    couponCount: 0,
    showLoading: !0
  },
  billIds: "",
  billList: [],
  realPayableAmount: 0,
  getPayChannel: function(t) {
    var n = this;
    o.post({
      url: "/mp-order/payment/get-pay-channel",
      data: {
        billIdList: t.split(",")
      },
      showLoading: !0
    }).then((function(t) {
      n.initAmount(t)
    }))
  },
  initAmount: function(t) {
    var o = t.payableAmount;
    this.setData({
      amount: "¥ ".concat(o),
      payableAmount: "¥ ".concat(o),
      zhugeAmount: o
    }), this.realPayableAmount = o
  },
  getUseCoupon: function(t) {
    var n = this;
    o.post({
      url: "/coupon/manager/client/instance",
      data: {
        billIdList: t.split(",")
      },
      showLoading: !0
    }).then((function(t) {
      n.initCoupon(t)
    }))
  },
  initCoupon: function(t) {
    var o = t.usableTotal,
      n = o > 99 ? "99+" : o;
    this.setData({
      couponCount: n
    })
  },
  getCanUseCoupon: function(t) {
    var n = this;
    o.post({
      url: "/coupon/manager/client/auto-trial",
      data: {
        billIdList: t.split(",")
      },
      showLoading: !0
    }).then((function(t) {
      n.initCanUseCoupon({
        allCouponInstanceDto: t.allCouponInstanceDto || {},
        calculateBillCouponResult: t.calculateBillCouponResult || {}
      })
    }))
  },
  initCanUseCoupon: function(t) {
    var o = t.allCouponInstanceDto,
      n = (void 0 === o ? {} : o).usableTotal,
      a = void 0 === n ? 0 : n,
      i = t.calculateBillCouponResult,
      e = void 0 === i ? {} : i,
      l = e.disCountAmount,
      s = void 0 === l ? "" : l,
      u = e.billList,
      c = void 0 === u ? [] : u,
      r = a > 99 ? "99+" : a || 0;
    this.setData({
      couponCount: r,
      couponAmount: s ? "-¥ ".concat(s) : s || "",
      payableAmount: "¥ ".concat((this.realPayableAmount - s).toFixed(2))
    }), this.billList = c || []
  },
  trial: function(t) {
    var n = this;
    o.post({
      url: "/coupon/manager/client/trial",
      data: t,
      showLoading: !0
    }).then((function(t) {
      var o = t.disCountAmount,
        a = t.billList,
        i = void 0 === a ? [] : a;
      n.setData({
        couponAmount: "-¥ ".concat(o),
        payableAmount: "¥ ".concat((n.realPayableAmount - o).toFixed(2))
      }), n.billList = i
    }))
  },
  handleWebView: function(t) {
    this.trial(t)
  },
  handleToPay: function() {
    var a = this;
    try {
      (0, t.zhugeTrack)("支付页面-点击去支付", {
        "房间信息": this.data.roomInfo,
        "金额": this.data.zhugeAmount
      })
    } catch (t) {
      console.log("err", t)
    }
    var i = this.billList.length > 0 ? this.billList : this.billIds.split(",").map((function(t) {
      return {
        billId: t,
        couponCodeList: []
      }
    }));
    wx.showLoading({
      title: "请稍侯...",
      mask: !0
    }), o.post({
      url: "/mp-order/payment/create-bill-payment",
      data: {
        billDetailList: i
      },
      showLoading: !1,
      handleError: "ALL"
    }).then((function(o) {
      var i = o.paymentNo;
      i && i.length > 0 ? n.miniPay(i, (function(t) {
        1 === t && a.setData({
          showLoading: !1
        })
      })).then((function(o) {
        var n = parseInt(o.paymentResult);
        if (n > 0) {
          try {
            (0, t.zhugeTrack)("支付页面-支付成功", {
              "房间信息": a.data.roomInfo,
              "金额": a.data.zhugeAmount
            })
          } catch (t) {
            console.log("err", t)
          }
          wx.redirectTo({
            url: "/pages/pay-result/pay-result?delta=1&payResult=".concat(n, "&billIds=").concat(a.billIds)
          })
        }
        wx.hideLoading()
      }), (function(o) {
        wx.hideLoading();
        try {
          (0, t.zhugeTrack)("支付页面-支付失败", {
            "房间信息": a.data.roomInfo,
            "金额": a.data.zhugeAmount
          })
        } catch (o) {
          console.log("err", o)
        }
      })) : wx.hideLoading()
    })).catch((function(o) {
      wx.hideLoading();
      try {
        (0, t.zhugeTrack)("支付页面-支付失败", {
          "房间信息": a.data.roomInfo,
          "支付金额": a.data.zhugeAmount,
          "失败原因": o.data.data.message || o.message
        })
      } catch (t) {
        console.log("err", t)
      }
      wx.showToast({
        title: o.data.data.message || o.message,
        icon: "none",
        duration: 3e3
      })
    }))
  },
  onSelectCoupon: function() {
    try {
      (0, t.zhugeTrack)("支付页面-点击更多优惠券", {
        "房间信息": this.data.roomInfo,
        "金额": this.data.zhugeAmount
      })
    } catch (t) {
      console.log("err", t)
    }
    var o = this.billList.length > 0 ? this.billList.map((function(t) {
        return t.couponCodeList || []
      })).flat() : [],
      n = encodeURIComponent("pay-select-coupon?billId=".concat(this.billIds, "&couponList=").concat(o));
    wx.navigateTo({
      url: "/pages/h5-container/index?domain=H5CRMHOST&webPath=".concat(n)
    })
  },
  onLoad: function(t) {
    t.billIds && wx.setStorage({
      key: "billIds",
      data: t.billIds
    }), this.billIds = t.billIds, this.setData({
      roomInfo: t.roomInfo
    }), this.getPayChannel(this.billIds), this.getCanUseCoupon(this.billIds)
  },
  onShow: function() {}
});