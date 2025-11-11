var t, a = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  i = require("../../D2980F274CF6B1BFB4FE672005896AC2.js"),
  e = require("../../DD994C124CF6B1BFBBFF2415B85A6AC2.js"),
  n = require("../../3516A0D44CF6B1BF5370C8D373796AC2.js");
Page({
  data: {
    currentTab: 0,
    swiperHeight: 0,
    winHeight: 0,
    statusArray: ["2", "0", "1"],
    allList: [],
    unpayList: [],
    payList: [],
    isShowAllListBlank: !1,
    isShowUnpayListBlank: !1,
    isShowPayListBlank: !1,
    unPaidBillCount: 0,
    showLoading: !1
  },
  onLoad: function(t) {
    getApp().globalData.pagesContainer[this.route] = this;
    var a = wx.getSystemInfoSync();
    this.setData({
      winHeight: a.windowHeight,
      currentTab: t.type ? parseInt(t.type) : 0
    }), this.ifNeedLoadListData()
  },
  onReady: function() {},
  onShow: function() {},
  segmentedChange: function(t) {
    this.setData({
      currentTab: t.detail
    }), this.ifNeedLoadListData()
  },
  swiperChange: function(t) {
    this.setData({
      currentTab: t.detail.current
    }), this.ifNeedLoadListData()
  },
  ifNeedLoadListData: function() {
    var t = this.data.currentTab;
    0 == t && 0 == this.data.allList.length ? this.loadListData(0) : 1 == t && 0 == this.data.unpayList.length ? this.loadListData(1) : 2 == t && 0 == this.data.payList.length ? this.loadListData(2) : this.initCountDown()
  },
  loadListData: function(t) {
    var i = this,
      e = {
        queryStatus: this.data.statusArray[t]
      };
    a.post({
      url: "/order/bill/query-bill-list",
      data: e,
      showLoading: !0
    }).then((function(a) {
      i.initDataView(a, t)
    })).catch((function(a) {
      i.initDataView({
        billInfos: [],
        unPaidBillCount: 0
      }, t)
    }))
  },
  initDataView: function(t, a) {
    var e = t.billInfos;
    this.data.unPaidBillCount = t.unPaidBillCount, this.SegmentedControl = this.selectComponent("#SegmentedControl"), this.SegmentedControl.setBageNumber(this.data.unPaidBillCount, 1);
    for (var n = 0; n < e.length; n++) {
      var s = e[n],
        o = s.billType;
      4 == o ? (s.billTypeImage = "icon_bill_header.png", s.billTypeDesc = s.billTypeDesc + " " + s.billPeriod) : s.billTypeImage = 3 == o ? "icon_bill_header.png" : 2 == o ? "icon_shuidian_header.png" : "icon_other_header.png";
      var l = new Date(s.checkInDate);
      s.checkInDateString = i.dateFormatter("yyyy.MM.dd", l);
      var r = new Date(s.checkOutDate);
      s.checkOutDateString = i.dateFormatter("yyyy.MM.dd", r);
      var h = [];
      if (s.orderCanCancel) {
        var d = {
          type: "cancel",
          title: 1 == o ? "取消预定" : 2 == o ? "取消充值" : "取消订单"
        };
        h.push(d)
      } else if (1 == s.status) {
        d = {
          type: "preview",
          title: "查看"
        };
        h.push(d)
      }
      if (0 == s.status) {
        h.push({
          type: "pay",
          title: "去支付"
        })
      }
      s.footerNodeArray = h
    }
    var c = 0 == e.length;
    0 == a ? this.setData({
      allList: e,
      isShowAllListBlank: c
    }) : 1 == a && this.setData({
      unpayList: e,
      isShowUnpayListBlank: c
    }), 2 == a && this.setData({
      payList: e,
      isShowPayListBlank: c
    }), this.initCountDown()
  },
  initCountDown: function() {
    var a, i = this;
    0 == this.data.currentTab ? a = this.data.allList : 1 == this.data.currentTab ? a = this.data.unpayList : 2 == this.data.currentTab && (a = this.data.payList);
    for (var e = 0, s = 0; s < a.length; s++) {
      var o = a[s];
      o.overdueDays > 0 && 0 == o.status ? o.countDownString = "逾期" + o.overdueDays + "天" : n.ifNeedCountDown(o) && e++
    }
    e > 0 ? (0 == this.data.currentTab ? this.setData({
      allList: a
    }) : 1 == this.data.currentTab ? this.setData({
      unpayList: a
    }) : 2 == this.data.currentTab && this.setData({
      payList: a
    }), t || (t = setInterval((function() {
      i.initCountDown()
    }), 1e3), n.isTimeOut((function() {
      i.refreshData()
    })))) : t && (clearInterval(t), t = void 0)
  },
  footerButtonClick: function(t) {
    var a, i = t.currentTarget.id.split("-");
    0 == this.data.currentTab ? a = this.data.allList[i[0]] : 1 == this.data.currentTab ? a = this.data.unpayList[i[0]] : 2 == this.data.currentTab && (a = this.data.payList[i[0]]);
    var e = a.footerNodeArray[i[1]];
    "pay" == e.type ? this.payOrder(a) : "cancel" == e.type ? this.cancelOrder(a) : "preview" == e.type && this.preview(a)
  },
  goToBillDetails: function(t) {
    var a, i = parseInt(t.currentTarget.id);
    0 == this.data.currentTab ? a = this.data.allList[i] : 1 == this.data.currentTab ? a = this.data.unpayList[i] : 2 == this.data.currentTab && (a = this.data.payList[i]), this.preview(a)
  },
  preview: function(t) {
    var a = this,
      i = t.roomInfo.apartmentName;
    i = i || "";
    var e = "orderNo=" + t.orderNo + "&apartmentName=" + i + "&statusDesc=" + t.statusDesc + "&billId=" + t.billIds + "&billTypeDesc=" + t.billTypeDesc + "&billType=" + t.billType;
    wx.navigateTo({
      url: "/pages/bill-details/rent-bill-details/rent-bill-details?" + e,
      events: {
        refreshData: function(t) {
          a.refreshData()
        }
      }
    })
  },
  cancelOrder: function(t) {
    var a, i;
    1 == t.billType ? (a = "确定取消预定？", i = ["点错了", "确认取消"]) : 2 == t.billType ? (a = "取消水电充值？", i = ["点错了", "确定"]) : 3 == t.billType && (a = "定金不退哦~确定取消？", i = ["点错了", "确定取消"]);
    var e = this;
    wx.showModal({
      title: "温馨提示",
      content: a,
      confirmText: i[1],
      cancelText: i[0],
      success: function(a) {
        a.confirm ? (console.log("用户点击确定"), (1 == t.billType || 3 == t.billType || 2 == t.billType) && e.cancelOrderWithOrderNo(t)) : a.cancel && console.log("用户点击取消")
      }
    })
  },
  cancelOrderWithOrderNo: function(t) {
    var i = this;
    t = {
      orderNo: t.orderNo
    };
    a.post({
      url: "/booking/order/cancel-order",
      data: t,
      showLoading: !0
    }).then((function(a) {
      1 == t.billType ? wx.showToast({
        title: "预定已取消",
        icon: "none"
      }) : wx.showToast({
        title: "订单已取消",
        icon: "none"
      }), i.loadListData()
    }))
  },
  cancelBillWithBillId: function(t) {
    var i = this;
    t = {
      billId: t.billIds
    };
    a.post({
      url: "/order/bill/cancel-utility-bill",
      data: t,
      showLoading: !0,
      wholeResponse: !0
    }).then((function(t) {
      wx.showToast({
        title: "取消成功",
        icon: "none"
      }), i.loadListData()
    })).catch((function(t) {
      wx.showToast({
        title: t && t.data && t.data.data.message || t.message,
        icon: "none"
      })
    }))
  },
  payOrder: function(t) {
    var i = this;
    this.setData({
      showLoading: !0
    });
    t = {
      billId: t.billIds,
      orderNo: t.orderNo,
      couponId: ""
    };
    a.post({
      url: "/order/payment/create-payment",
      data: t,
      handleError: 42301064
    }).then((function(t) {
      var a = t.paymentNo;
      a && a.length > 0 && e.miniPay(a, (function(t) {
        1 === t && i.setData({
          showLoading: !1
        })
      })).then((function(t) {
        var a = parseInt(t.paymentResult);
        a > 0 && (i.refreshData(), wx.navigateTo({
          url: "/pages/pay-result/pay-result?payResult=" + a
        }))
      }), (function(t) {
        console.log(t)
      }))
    })).catch((function(t) {
      42301064 === t.code && i.refreshData(), i.setData({
        showLoading: !1
      })
    }))
  },
  onHide: function() {},
  onUnload: function() {
    t && (clearInterval(t), t = void 0)
  },
  onPullDownRefresh: function() {},
  paySuccess: function() {
    this.refreshData()
  },
  refreshData: function() {
    0 != this.data.allList.length && this.loadListData(0), 0 != this.data.unpayList.length && this.loadListData(1), 0 != this.data.payList.length && this.loadListData(2)
  },
  onReachBottom: function() {}
});