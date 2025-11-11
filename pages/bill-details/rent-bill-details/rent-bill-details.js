var t, e = require("../../../03F505464CF6B1BF65936D4171E96AC2.js"),
  a = require("../../../D2980F274CF6B1BFB4FE672005896AC2.js"),
  i = require("../../../3516A0D44CF6B1BF5370C8D373796AC2.js"),
  l = require("../../../DD994C124CF6B1BFBBFF2415B85A6AC2.js");
Page({
  data: {
    orderNo: "",
    apartmentName: "",
    statusDesc: "",
    billId: "",
    billIds: "",
    billTypeDesc: "",
    billType: -1,
    billDetails: void 0,
    showFeeDetails: !1,
    tagsArray: [],
    isLoadComplete: !1,
    isShowOverdueFee: !1,
    prepayAmount: 0,
    showLoading: !1,
    showFaqBtn: !0
  },
  onPageScroll: function(t) {
    var e = this;
    this.data.showFaqBtn && (this.setData({
      showFaqBtn: !1
    }), setTimeout((function() {
      e.setData({
        showFaqBtn: !0
      })
    }), 700))
  },
  onLoad: function(t) {
    this.setData({
      billId: t.billId
    }), t.orderNo && (this.setData({
      orderNo: t.orderNo,
      apartmentName: t.apartmentName,
      statusDesc: t.statusDesc,
      billTypeDesc: t.billTypeDesc,
      billType: t.billType
    }), 2 == t.billType ? wx.setNavigationBarTitle({
      title: "水电账单详情"
    }) : wx.setNavigationBarTitle({
      title: "账单详情"
    })), this.getBillDetails()
  },
  onReady: function() {},
  onShow: function() {},
  getBillDetails: function() {
    var t = this,
      a = {
        billId: this.data.billId
      };
    e.post({
      url: "/order/bill/get-bill-detail",
      data: a,
      showLoading: !0
    }).then((function(e) {
      t.initViewWithData(e)
    }))
  },
  initViewWithData: function(t) {
    this.data.billTypeDesc = t.billTypeDesc, t.checkInDateString = a.dateFormatter("yyyy.MM.dd", new Date(t.checkInDate)), t.checkOutDateString = a.dateFormatter("yyyy.MM.dd", new Date(t.checkOutDate));
    var e = [];
    if (1 == t.status && t.paymentInfo) {
      var i = a.dateFormatter("yyyy.MM.dd hh:mm", new Date(t.paymentInfo.paymentTime));
      e = [{
        title: "交易单号",
        content: t.paymentInfo.transactionId
      }, {
        title: "付款时间",
        content: i
      }, {
        title: "付款方式",
        content: t.paymentInfo.paymentChannel
      }]
    }
    if (0 == t.status && 4 == t.billType) {
      var l = "提&emsp;&emsp;示\n1." + a.dateFormatter("MM月dd日", new Date(t.rentPayDeadline)) + "为本账单的最晚交租日\n2.若逾期，每天产生本期房租金额*0.5%的滞纳金\n3.若超过本人支付限额，请到前台支付\n";
      t.remarkString = l, this.data.billTypeDesc = t.billTypeDesc + " " + t.billPeriod
    }
    if (1 == t.billType || 3 == t.billType) {
      var n = [],
        s = new Date(t.tenancyInfo.checkInDate),
        o = a.dateFormatter("yyyy.MM.dd", s),
        r = o + "-" + a.dateFormatter("yyyy.MM.dd", new Date(t.tenancyInfo.checkOutDate)) + "  " + t.tenancyInfo.payType;
      n.push({
        title: "租期信息",
        content: r
      });
      var c = a.formatDateForColloquialString(s);
      c.length > 0 && (c = "(" + c + ")");
      var d = a.formatDateForWeekString(s);
      d = o + "  " + d + c, n.push({
        title: "入住日期",
        content: d
      });
      var h = t.tenantInfo.bookerName + "   " + t.tenantInfo.bookerPhone;
      n.push({
        title: "预定人",
        content: h
      });
      var u = t.tenantInfo.idcardNo,
        b = t.tenantInfo.idcardType;
      1 == b || 5 == b ? u.length >= 15 && (u = a.replaceString(u, "*", 6, 8)) : u = u = a.replaceString(u, "*", 3, 3), n.push({
        title: "证件号码 ",
        content: u
      }), t.rentInfoArray = n, e = [{
        title: "下单时间",
        content: a.dateFormatter("yyyy.MM.dd hh:mm", new Date(t.createTime))
      }].concat(e);
      this.setData({
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
        }]
      })
    }
    1 == this.data.billType ? this.data.billTypeDesc = "定金" : 2 != this.data.billType && 0 != this.data.billType && (this.data.billTypeDesc = t.billTypeDesc + " " + t.billPeriod), t.paymentInfoArray = e, this.data.billDetails = t, this.initBillIds(), this.setData({
      billDetails: this.data.billDetails,
      statusDesc: this.data.billDetails.statusDesc,
      billTypeDesc: this.data.billTypeDesc,
      isLoadComplete: !0
    }), this.initCountDown()
  },
  initBillIds: function() {
    var t = 0,
      e = !0;
    if (this.data.billDetails.billInfos.length > 0) {
      for (var a = [], i = 0; i < this.data.billDetails.billInfos.length; i++) {
        var l = this.data.billDetails.billInfos[i];
        if (null == l.select && (l.select = 0 == l.status), l.select) a.push(l.billId), t += parseFloat(l.unpayAmount);
        else e = !1
      }
      this.data.billIds = a.join(","), t = e ? this.data.billDetails.unpayAmount : t.toFixed(2)
    } else t = this.data.billDetails.unpayAmount, this.data.billIds = this.data.billDetails.billIds;
    this.setData({
      billIds: this.data.billIds,
      prepayAmount: t
    }), console.log("BillIds:" + this.data.billIds)
  },
  initCountDown: function() {
    var e = this,
      a = this.data.billDetails,
      l = 0;
    a.overdueDays > 0 && 0 == a.status ? a.countDownString = "逾期" + a.overdueDays + "天" : i.ifNeedCountDown(a) && l++, l > 0 ? (t || (t = setInterval((function() {
      e.initCountDown()
    }), 1e3), i.isTimeOut((function() {
      e.getBillDetails(), e.refreshData(), setTimeout((function() {
        wx.navigateBack({
          delta: 1
        })
      }), 1e3)
    }))), this.setData({
      billDetails: a
    })) : t && (clearInterval(t), t = void 0)
  },
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.billDetails.roomInfo.managerPhoneNo
    })
  },
  showDetails: function() {
    this.setData({
      showFeeDetails: !this.data.showFeeDetails
    })
  },
  paySelected: function(t) {
    var e = parseInt(t.currentTarget.id),
      a = this.data.billDetails.billInfos[e];
    a.orderCanChoose && (a.select = !a.select, this.setData({
      billDetails: this.data.billDetails
    }), this.initBillIds())
  },
  cancelCharge: function() {
    var t, e, a = this.data.billDetails;
    1 == a.billType ? (t = "确定取消预定？", e = ["点错了", "确认取消"]) : 2 == a.billType ? (t = "取消水电充值？", e = ["点错了", "确定"]) : 3 == a.billType && (t = "定金不退哦~确定取消？", e = ["点错了", "确定取消"]);
    var i = this;
    wx.showModal({
      title: "温馨提示",
      content: t,
      confirmText: e[1],
      cancelText: e[0],
      success: function(t) {
        t.confirm ? (console.log("用户点击确定"), 1 == a.billType || 3 == a.billType ? i.cancelOrderWithOrderNo(a) : 2 == a.billType && i.cancelBillWithBillId(a)) : t.cancel && console.log("用户点击取消")
      }
    })
  },
  cancelOrderWithOrderNo: function(t) {
    var a = this;
    t = {
      orderNo: t.orderNo
    };
    e.post({
      url: "/booking/order/cancel-order",
      data: t,
      showLoading: !0
    }).then((function(e) {
      1 == t.billType ? wx.showToast({
        title: "预定已取消",
        icon: "none"
      }) : wx.showToast({
        title: "订单已取消",
        icon: "none"
      }), a.refreshData(), setTimeout((function() {
        wx.navigateBack({
          delta: 1
        })
      }), 1e3)
    }))
  },
  cancelBillWithBillId: function(t) {
    var a = this;
    t = {
      billId: t.billIds
    };
    e.post({
      url: "/order/bill/cancel-utility-bill",
      data: t,
      showLoading: !0,
      wholeResponse: !0
    }).then((function(t) {
      wx.showToast({
        title: "取消成功",
        icon: "none"
      }), a.data.billDetails.status = -1, a.setData({
        statusDesc: "已取消",
        billDetails: a.data.billDetails
      }), a.refreshData(), setTimeout((function() {
        wx.navigateBack({
          delta: 1
        })
      }), 1e3)
    })).catch((function(t) {
      wx.showToast({
        title: t && t.data && t.data.data.message || t.message,
        icon: "none"
      })
    }))
  },
  payOrder: function() {
    var t = this;
    this.setData({
      showLoading: !0
    }), console.log(this.data.showLoading);
    var a = {
      billId: this.data.billIds,
      orderNo: this.data.billDetails.orderNo,
      couponId: ""
    };
    e.post({
      url: "/order/payment/create-payment",
      data: a,
      handleError: 42301064
    }).then((function(e) {
      var a = e.paymentNo;
      a && a.length > 0 && l.miniPay(a, (function(e) {
        1 === e && t.setData({
          showLoading: !1
        })
      })).then((function(e) {
        console.log(e), t.getBillDetails();
        var a = parseInt(e.paymentResult);
        if (a > 0) {
          var i = getApp().globalData.pagesContainer["pages/BillList/BillList"];
          i && i.paySuccess(), wx.navigateTo({
            url: "/pages/pay-result/pay-result?payResult=" + a
          })
        }
      }), (function(t) {
        console.log(t)
      }))
    })).catch((function(e) {
      42301064 === e.code && (wx.showToast({
        title: e.data.data.message,
        icon: "none"
      }), t.setData({
        showLoading: !1
      }), t.getBillDetails())
    }))
  },
  copyOrderNo: function() {
    wx.setClipboardData({
      data: this.data.billDetails.orderNo,
      success: function(t) {
        wx.getClipboardData({
          success: function(t) {
            wx.showToast({
              title: "复制成功"
            })
          }
        })
      }
    })
  },
  goToProblemDetails: function(t) {
    var e = parseInt(t.currentTarget.id),
      a = this.data.tagsArray[e];
    wx.navigateTo({
      url: "/pages/faq/faq?tab=" + a.tab
    })
  },
  showOverdueFeeRule: function() {
    this.setData({
      isShowOverdueFee: !0
    })
  },
  refreshData: function() {
    var t = getApp().globalData.pagesContainer["pages/BillList/BillList"];
    t && t.refreshData()
  },
  onHide: function() {},
  onUnload: function() {
    t && (clearInterval(t), t = void 0)
  },
  onPullDownRefresh: function() {},
  onReachBottom: function() {}
});