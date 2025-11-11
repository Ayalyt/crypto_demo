var e = require("../../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  t = require("../../../03F505464CF6B1BF65936D4171E96AC2.js"),
  n = require("../../../D2980F274CF6B1BFB4FE672005896AC2.js");
require("../../../3516A0D44CF6B1BF5370C8D373796AC2.js"), require("../../../DD994C124CF6B1BFBBFF2415B85A6AC2.js"), getApp();
Page({
  data: {
    details: {},
    tagsArray: [{
      title: "预定",
      tab: "reservation"
    }, {
      title: "入住",
      tab: "checkin"
    }, {
      title: "续租",
      tab: "rerent"
    }, {
      title: "退租",
      tab: "cancel"
    }, {
      title: "换房",
      tab: "switch"
    }, {
      title: "门锁管理",
      tab: "lock"
    }, {
      title: "收费项",
      tab: "bills"
    }, {
      title: "入住公约",
      tab: "conventions"
    }],
    cancelText: "",
    weekDay: "",
    payType: "",
    isLoadComplete: !1,
    showLoading: !1,
    sureEnabled: !0,
    showFaqBtn: !0
  },
  duration: 0,
  npsBillIds: "",
  onPageScroll: function(e) {
    var t = this;
    this.data.showFaqBtn && (this.setData({
      showFaqBtn: !1
    }), setTimeout((function() {
      t.setData({
        showFaqBtn: !0
      })
    }), 700))
  },
  onLoad: function(e) {
    e.h5CreateOrder && wx.setStorage({
      key: "h5CreateOrder",
      data: e.h5CreateOrder
    }), this.billIds = e.billIds.split(","), this.model = {
      billIds: this.billIds,
      billType: e.billType,
      businessType: Number(e.businessType) || 0
    }
  },
  onShow: function() {
    this.duration = (new Date).getTime(), this.getBillDetails()
  },
  onHide: function() {
    if (this.duration) {
      try {
        (0, e.zhugeTrack)("".concat(billName, "停留时长"), {
          "停留时长": ((new Date).getTime() - this.duration) / 1e3
        })
      } catch (e) {
        console.log("err", e)
      }
      this.duration = 0
    }
  },
  onUnload: function() {
    if (this.duration) {
      try {
        (0, e.zhugeTrack)("".concat(billName, "停留时长"), {
          "停留时长": ((new Date).getTime() - this.duration) / 1e3
        })
      } catch (e) {
        console.log("err", e)
      }
      this.duration = 0
    }
  },
  getBillDetails: function() {
    var e = this;
    t.post({
      url: "/mp-order/bill/get-bill-detail",
      data: this.model,
      showLoading: !0
    }).then((function(t) {
      e.initViewWithData(t)
    }))
  },
  initViewWithData: function(t) {
    t.remainTime, t.billStatus;
    var a = t.billType,
      o = t.businessInfo,
      s = o.pledgeNum,
      i = o.payNum,
      c = o.businessOrderStartTime,
      r = "",
      l = "账单金额",
      u = "";
    2 === a ? (r = "取消充值", l = "充值金额") : 3 === a && (r = "取消预定", l = "定金金额", u = n.formatDateForWeekString(new Date(c)));
    var d = "押".concat(s, "付").concat(i),
      b = 2 === a ? "充值账单页面" : 3 === a ? "预定账单页面" : "账单页面";
    try {
      (0, e.zhugeTrack)("进入".concat(b), {
        "公寓名称": t.roomInfo.apartmentName,
        "房间号": "".concat(t.roomInfo.buildingName, "-").concat(t.roomInfo.roomNo, "室"),
        "租金": parseFloat(t.businessInfo.businesSunitPrice) || 0,
        "押付方式": "押".concat(t.businessInfo.pledgeNum, "付").concat(t.businessInfo.payNum),
        "租期": "".concat(t.businessInfo.businessOrderStartTime, "-").concat(t.businessInfo.businessOrderEndTime),
        "定金金额": parseFloat(t.billTotalAmount) || 0,
        "入住日期": "".concat(t.businessInfo.businessOrderStartTime, " ").concat(u),
        "下单时间": t.businessInfo.createTime
      })
    } catch (e) {
      console.log("err", e)
    }
    this.setData({
      billName: b,
      details: t,
      cancelText: r,
      feeText: l,
      weekDay: u,
      payType: d,
      isLoadComplete: !0
    })
  },
  onCountDownCompleted: function() {
    this.goBack()
  },
  goBack: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  makePhoneCall: function() {
    var t = this.data,
      n = t.billName,
      a = t.weekDay,
      o = t.details;
    try {
      (0, e.zhugeTrack)("".concat(n, "-点击公寓电话"), {
        "公寓名称": o.roomInfo.apartmentName,
        "房间号": "".concat(o.roomInfo.buildingName, "-").concat(o.roomInfo.roomNo, "室"),
        "租金": parseFloat(o.businessInfo.businesSunitPrice) || 0,
        "押付方式": "押".concat(o.businessInfo.pledgeNum, "付").concat(o.businessInfo.payNum),
        "租期": "".concat(o.businessInfo.businessOrderStartTime, "-").concat(o.businessInfo.businessOrderEndTime),
        "定金金额": parseFloat(o.billTotalAmount) || 0,
        "入住日期": "".concat(o.businessInfo.businessOrderStartTime, " ").concat(a),
        "下单时间": o.businessInfo.createTime,
        "预定单号": o.businessInfo.businessNo
      })
    } catch (e) {
      console.log("err", e)
    }
    var s = this.data.details.roomInfo.managerPhoneNo;
    wx.makePhoneCall({
      phoneNumber: s
    })
  },
  copyOrderNo: function() {
    var e = this.data.details.businessInfo.businessNo;
    wx.setClipboardData({
      data: e,
      success: function(e) {
        wx.getClipboardData({
          success: function(e) {
            wx.showToast({
              title: "复制成功"
            })
          }
        })
      }
    })
  },
  queryBalance: function() {
    var e = this,
      n = this.data.details.businessInfo,
      a = void 0 === n ? {} : n;
    t.post({
      url: "/mp-living/utility/query-utility-balance",
      showLoading: !0,
      data: {
        businessNo: a.businessNo
      }
    }).then((function(t) {
      e.gotoCharge(t)
    })).catch((function(e) {
      wx.showToast({
        title: e.message,
        icon: "none"
      })
    }))
  },
  gotoCharge: function(e) {
    var t = e.balance,
      n = void 0 === t ? 0 : t,
      a = e.minChargeAmount,
      o = void 0 === a ? 100 : a,
      s = this.data.details,
      i = s.businessInfo,
      c = void 0 === i ? {} : i,
      r = s.roomInfo,
      l = void 0 === r ? {} : r,
      u = {
        balance: n,
        canRecharge: !0,
        minRechargeAmount: o,
        orderNo: c.businessNo,
        text: "".concat(l.buildingName, "-").concat(l.roomNo, " ").concat(l.apartmentName)
      };
    wx.showModal({
      content: "当前账单充值后自动支付，\r\n是否去充值？",
      cancelText: "取消",
      confirmText: "确定",
      confirmColor: "#e0ae01",
      success: function(e) {
        var t = e.confirm;
        void 0 !== t && t && wx.navigateTo({
          url: "/pages/hydropower-charge/hydropower-charge?apartment=" + encodeURIComponent(JSON.stringify(u))
        })
      }
    })
  },
  payOrder: function() {
    var t = this.data.details,
      n = t.billType,
      a = t.roomInfo;
    if (6 !== n) {
      this.npsBillIds = this.billIds;
      var o = this.data,
        s = o.billName,
        i = o.weekDay,
        c = o.details;
      try {
        (0, e.zhugeTrack)("".concat(s, "-点击去支付"), {
          "公寓名称": c.roomInfo.apartmentName,
          "房间号": "".concat(c.roomInfo.buildingName, "-").concat(c.roomInfo.roomNo, "室"),
          "租金": parseFloat(c.businessInfo.businesSunitPrice) || 0,
          "押付方式": "押".concat(c.businessInfo.pledgeNum, "付").concat(c.businessInfo.payNum),
          "租期": "".concat(c.businessInfo.businessOrderStartTime, "-").concat(c.businessInfo.businessOrderEndTime),
          "定金金额": parseFloat(c.billTotalAmount) || 0,
          "入住日期": "".concat(c.businessInfo.businessOrderStartTime, " ").concat(i),
          "下单时间": c.businessInfo.createTime,
          "预定单号": c.businessInfo.businessNo
        })
      } catch (e) {
        console.log("err", e)
      }
      var r = "".concat(a.buildingName, "-").concat(a.roomNo, " ").concat(a.apartmentName);
      wx.navigateTo({
        url: "/pages/charge-amount/charge-amount?billIds=".concat(this.billIds, "&roomInfo=").concat(r)
      })
    } else this.queryBalance()
  },
  sureToggle: function() {
    this.setData({
      sureEnabled: !this.data.sureEnabled
    })
  },
  cancelCharge: function() {
    var t = this,
      n = this.data.details.billType,
      a = 2 === n ? "取消水电充值？" : "确定取消预定？",
      o = 2 === n ? "/mp-order/bill/cancel-utility-bill" : "/mp-order/bill/cancel-deposit-bill";
    wx.showModal({
      title: "温馨提示",
      content: a,
      confirmText: "确定取消",
      cancelText: "点错了",
      success: function(n) {
        if (!n.cancel) {
          var a = t.data,
            s = a.billName,
            i = a.weekDay,
            c = a.details;
          try {
            (0, e.zhugeTrack)("".concat(s, "-点击取消"), {
              "公寓名称": c.roomInfo.apartmentName,
              "房间号": "".concat(c.roomInfo.buildingName, "-").concat(c.roomInfo.roomNo, "室"),
              "租金": parseFloat(c.businessInfo.businesSunitPrice) || 0,
              "押付方式": "押".concat(c.businessInfo.pledgeNum, "付").concat(c.businessInfo.payNum),
              "租期": "".concat(c.businessInfo.businessOrderStartTime, "-").concat(c.businessInfo.businessOrderEndTime),
              "定金金额": parseFloat(c.billTotalAmount) || 0,
              "入住日期": "".concat(c.businessInfo.businessOrderStartTime, " ").concat(i),
              "下单时间": c.businessInfo.createTime,
              "预定单号": c.businessInfo.businessNo
            })
          } catch (e) {
            console.log("err", e)
          }
          t.cancelRequest(o)
        }
      }
    })
  },
  cancelRequest: function(e) {
    t.post({
      url: e,
      data: {
        billId: this.billIds.join(",")
      },
      showLoading: !0,
      wholeResponse: !0
    }).then((function() {
      wx.showToast({
        title: "取消成功",
        icon: "none"
      }), setTimeout((function() {
        wx.navigateBack({
          delta: 1
        })
      }), 1e3)
    })).catch((function(e) {
      wx.showToast({
        title: e && e.data && e.data.data.message || e.message,
        icon: "none"
      })
    }))
  }
});