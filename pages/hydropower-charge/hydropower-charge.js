var t = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  e = (require("../../DD994C124CF6B1BFBBFF2415B85A6AC2.js"), require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js").moneyCommafy);
Page({
  data: {
    minChargeAmount: 1,
    chargeAmount: 0,
    apartment: void 0,
    showLoading: !1,
    unit: " ",
    amountStr: "100",
    chargeAmountArray: [{
      id: "1",
      text: "100元",
      amount: 100
    }, {
      id: "2",
      text: "200元",
      amount: 200
    }, {
      id: "3",
      text: "500元",
      amount: 500
    }, {
      id: "4",
      text: "1000元",
      amount: 1e3
    }, {
      id: "5",
      text: "2000元",
      amount: 2e3
    }, {
      id: "custom",
      text: "自定义金额",
      amount: -1
    }],
    lastInput: "",
    chargeAmountIndex: -1
  },
  onLoad: function(t) {
    if (t.apartment) {
      var a = JSON.parse(decodeURIComponent(t.apartment));
      this.setData({
        apartment: a,
        unit: this.getMoneyUnit(a.minRechargeAmount),
        amountStr: this.moneyCommafy(a.minRechargeAmount)
      })
    }
  },
  getMoneyUnit: function(t) {
    var a = Math.floor(t / 1e3);
    return a >= 1e4 ? " " : a < 1e4 && a >= 1e3 ? "百万" : a < 1e3 && a >= 100 ? "十万" : a < 100 && a >= 10 ? "万" : a < 10 && a >= 1 ? "千" : t < 1 ? " " : void 0
  },
  moneyCommafy: function(t) {
    return e(t)
  },
  amountInput: function(t) {
    var a = t.detail.value,
      e = t.detail.cursor;
    return !this.vaildPrice(a) || parseFloat(a) > 1e4 ? (parseFloat(a) > 1e4 && wx.showToast({
      title: "充值金额不可高于10000元",
      icon: "none"
    }), e -= a.length - this.data.lastInput.length, 0 === parseInt(a) && parseFloat(a) > 0 ? (a = parseFloat(parseFloat(a).toFixed(2)), this.data.lastInput = a) : a = parseFloat(this.data.lastInput || "")) : this.data.lastInput = a, this.setData({
      chargeAmount: a,
      unit: this.getMoneyUnit(parseFloat(a))
    }), {
      value: a,
      cursor: e
    }
  },
  vaildPrice: function(t) {
    return !(0 !== t.length && !new RegExp("^(([1-9][0-9]{0,5})|(([0]\\.\\d{0,2}|[0]|[1-9][0-9]{0,5}\\.\\d{0,2})))$").test(t))
  },
  chargeAmountSelected: function(t) {
    var a = t.currentTarget.dataset.index;
    if (this.setData({
        chargeAmountIndex: a
      }), a < this.data.chargeAmountArray.length - 1) {
      var e = this.data.chargeAmountArray[a];
      this.setData({
        chargeAmount: e.amount,
        unit: this.getMoneyUnit(e.amount)
      }), this.rechargeTip()
    } else this.setData({
      chargeAmount: this.data.lastInput
    })
  },
  onReady: function() {},
  onShow: function() {},
  rechargeTip: function() {
    var a = this,
      e = this.data.chargeAmount;
    try {
      (0, t.zhugeTrack)("服务-水电余额-水电充值页面-点击充值", {
        "充值金额": e
      })
    } catch (t) {
      console.log("err", t)
    }
    wx.showModal({
      content: "该次充值为储值充值，储值账户仅可用于缴纳水电煤能耗费用，无法支付房租等其他费用，请您留意！",
      cancelText: "取消",
      confirmText: "继续充值",
      confirmColor: "#E0AE01",
      cancelColor: "#949AA7",
      success: function(t) {
        t.confirm && a.goToPay()
      }
    })
  },
  goToPay: function() {
    var t = this.data,
      a = t.chargeAmount,
      e = t.chargeAmountIndex;
    t.minChargeAmount;
    !a > 0 || -1 === e || (this.data.apartment.canRecharge ? (this.setData({
      showLoading: !0
    }), this.createUtilityBill()) : wx.showToast({
      title: "此公寓不支持充值",
      icon: "none"
    }))
  },
  createUtilityBill: function() {
    var t = this,
      e = {
        orderNo: this.data.apartment.orderNo,
        amount: this.data.chargeAmount
      };
    a.post({
      url: "/order/bill/create-utility-bill",
      data: e
    }).then((function(a) {
      var e = a.billId;
      t.setData({
        showLoading: !1
      }), t.createFunLivePayment(e)
    })).catch((function(a) {
      t.setData({
        showLoading: !1
      }), wx.showToast({
        title: a.data.data.message,
        icon: "none"
      })
    }))
  },
  createFunLivePayment: function(t) {
    wx.navigateTo({
      url: "/pages/charge-amount/charge-amount?billIds=".concat(t, "&roomInfo=").concat(this.data.apartment.text)
    })
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {}
});