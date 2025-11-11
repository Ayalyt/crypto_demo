var t = require("../../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  e = require("../../../03F505464CF6B1BF65936D4171E96AC2.js"),
  a = require("../../../D2980F274CF6B1BFB4FE672005896AC2.js");
require("../../../3516A0D44CF6B1BF5370C8D373796AC2.js"), require("../../../DD994C124CF6B1BFBBFF2415B85A6AC2.js");
Page({
  data: {
    details: {},
    showFeeDetails: !1,
    toPayAmount: 0,
    selected: [],
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
    isShowOverdueFee: !1,
    sureEnabled: !0,
    showFaqBtn: !0
  },
  npsBillIds: "",
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
    t.billIds = t.billIds.split(","), this.options = t
  },
  onShow: function() {
    this.getInitData()
  },
  getInitData: function() {
    var t = this;
    e.post({
      url: "/mp-order/bill/get-bill-detail",
      data: this.options,
      showLoading: !0
    }).then((function(e) {
      console.log(e), t.initViewWithData(e)
    }))
  },
  initViewWithData: function(e) {
    var i = this,
      o = (e.billStatus, e.billDetailInfo),
      n = e.businessInfo,
      s = void 0 === n ? {} : n,
      r = s.pledgeNum,
      l = s.payNum,
      u = s.businessOrderEndTime,
      c = s.businessOrderStartTime,
      d = s.signName,
      m = s.businessNo,
      h = s.createTime,
      b = s.certificateNumber,
      f = e.billTypeName,
      g = e.periodsTime,
      p = e.roomInfo,
      D = e.billUnPaidAmount,
      v = a.formatDateForWeekString(new Date(e.businessInfo.businessOrderStartTime));
    try {
      (0, t.zhugeTrack)("服务-账单-进入账单详情页面", {
        "账单名称": f + " " + g,
        "公寓名称": p.apartmentName,
        "房间号": p.buildingName + "-" + p.roomNo + "室",
        "租期": c + "-" + u,
        "总额": parseFloat(D) || 0,
        "入住时间": c + v,
        "签约人": d,
        "证件号码": b,
        "租约单号": m,
        "下单时间": h
      })
    } catch (t) {
      console.log("err", t)
    }
    var w = [],
      N = 0,
      T = 0,
      I = 0;
    o.forEach((function(t, e) {
      1 === t.status ? (w.push(!0), T += 100 * (t.deductionAmount || 0), N += 100 * t.amount - 100 * t.receiptAmount - 100 * (t.deductionAmount || 0), 4 === t.type && (I = t.amount, i.overdueFeeIndex = e)) : w.push(!1)
    }));
    var y = "押".concat(r, "付").concat(l);
    N /= 100, T /= 100, this.setData({
      details: e,
      selected: w,
      toPayAmount: N,
      totalDeductionAmount: T,
      overdueFee: I,
      checkInWeek: v,
      payType: y
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
    var e = this.data.details.roomInfo.managerPhoneNo,
      i = this.data.details,
      o = i.businessInfo,
      n = void 0 === o ? {} : o,
      s = n.businessOrderEndTime,
      r = n.businessOrderStartTime,
      l = n.signName,
      u = n.businessNo,
      c = n.createTime,
      d = n.certificateNumber,
      m = i.billTypeName,
      h = i.periodsTime,
      b = i.roomInfo,
      f = i.billTotalAmount,
      g = a.formatDateForWeekString(new Date(r));
    try {
      (0, t.zhugeTrack)("服务-账单-账单详情页面-拨打电话", {
        "账单名称": m + " " + h,
        "公寓名称": b.apartmentName,
        "房间号": b.buildingName + "-" + b.roomNo + "室",
        "租期": r + "-" + s,
        "总额": parseFloat(f) || 0,
        "入住时间": r + g,
        "签约人": l,
        "证件号码": d,
        "租约单号": u,
        "下单时间": c
      })
    } catch (t) {
      console.log("err", t)
    }
    wx.makePhoneCall({
      phoneNumber: e
    })
  },
  showDetails: function() {
    this.setData({
      showFeeDetails: !this.data.showFeeDetails
    })
  },
  paySelected: function(t) {
    var e = this,
      a = this.data,
      i = a.selected,
      o = a.overdueFee,
      n = a.details.billDetailInfo,
      s = t.currentTarget.dataset,
      r = s.item,
      l = s.index;
    if (2 !== r.status && 1 !== r.type) {
      i[l] = !i[l], o && (i[this.overdueFeeIndex] = !0, i.forEach((function(t, a) {
        t || 1 !== n[a].status || (i[e.overdueFeeIndex] = !1)
      })));
      var u = this.getAmount(i),
        c = u.toPayAmount,
        d = u.totalDeductionAmount;
      this.setData({
        selected: i,
        toPayAmount: c,
        totalDeductionAmount: d
      })
    }
  },
  getAmount: function(t) {
    var e = this.data.details.billDetailInfo,
      a = 0,
      i = 0;
    return t.forEach((function(t, o) {
      var n = e[o];
      t && 1 === n.status && (a += 100 * n.amount - 100 * n.receiptAmount - 100 * (n.deductionAmount || 0), i += 100 * (n.deductionAmount || 0))
    })), console.log(i), {
      toPayAmount: a / 100,
      totalDeductionAmount: i / 100
    }
  },
  showOverdueFeeRule: function() {
    this.setData({
      isShowOverdueFee: !0
    })
  },
  copyOrderNo: function() {
    var e = this.data.details.businessInfo.businessNo;
    wx.setClipboardData({
      data: e,
      success: function(t) {
        wx.getClipboardData({
          success: function(t) {
            wx.showToast({
              title: "复制成功"
            })
          }
        })
      },
      fail: function(t) {
        console.log("err", t)
      }
    });
    var i = this.data.details,
      o = i.businessInfo,
      n = void 0 === o ? {} : o,
      s = n.businessOrderEndTime,
      r = n.businessOrderStartTime,
      l = n.signName,
      u = n.createTime,
      c = n.certificateNumber,
      d = i.billTypeName,
      m = i.periodsTime,
      h = i.roomInfo,
      b = i.billTotalAmount,
      f = a.formatDateForWeekString(new Date(r));
    try {
      (0, t.zhugeTrack)("服务-账单-账单详情页面-复制租约单号", {
        "账单名称": d + " " + m,
        "公寓名称": h.apartmentName,
        "房间号": h.buildingName + "-" + h.roomNo + "室",
        "租期": r + "-" + s,
        "总额": parseFloat(b) || 0,
        "入住时间": r + f,
        "签约人": l,
        "证件号码": c,
        "租约单号": e,
        "下单时间": u
      })
    } catch (t) {
      console.log("err", t)
    }
  },
  sureToggle: function() {
    this.setData({
      sureEnabled: !this.data.sureEnabled
    })
  },
  doPay: function() {
    var t = this.data,
      e = t.selected,
      a = t.details,
      i = a.billDetailInfo,
      o = (a.businessInfo, a.billType),
      n = a.roomInfo;
    t.toPayAmount;
    if (6 !== o) {
      var s = [];
      if (e.forEach((function(t, e) {
          t && s.push(i[e].id)
        })), s.length <= 0) wx.showToast({
        title: "请选择至少一条需要支付的账单",
        icon: "none"
      });
      else {
        this.npsBillIds = s.join(",");
        var r = "".concat(n.buildingName, "-").concat(n.roomNo, " ").concat(n.apartmentName);
        wx.navigateTo({
          url: "/pages/charge-amount/charge-amount?billIds=".concat(s, "&roomInfo=").concat(r)
        })
      }
    } else this.queryBalance()
  }
});