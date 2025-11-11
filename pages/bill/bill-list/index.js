var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = require("../../../03F505464CF6B1BF65936D4171E96AC2.js"),
  i = require("../../../F9E424F04CF6B1BF9F824CF736786AC2.js"),
  o = {
    0: "有租约有待支付账单",
    1: "当前暂无待支付账单",
    2: "暂无账单信息"
  };
Page({
  data: {
    list: [],
    winHeight: 0,
    currentTab: 0,
    disabledArr: [],
    billInfo: "有租约有待支付账单"
  },
  payKey: "",
  onLoad: function(e) {
    this.setData({
      currentTab: e.type || 0
    }), this.queryUserLeaseBill()
  },
  onShow: function() {
    this.getInitData()
  },
  onHide: function() {},
  onPullDownRefresh: function() {},
  queryUserLeaseBill: function() {
    var e = this,
      t = wx.getStorageSync(i.LOGINMOBILE);
    a.post({
      url: "/mp-order/bill/query-user-lease-bill",
      data: {
        mobile: t
      },
      showLoading: !0
    }).then((function(t) {
      e.setData({
        currentTab: 1,
        billInfo: o[t.status]
      })
    }))
  },
  getInitData: function() {
    var e = this;
    a.post({
      url: "/mp-order/bill/query-bill-list",
      data: {
        queryStatus: 0
      },
      showLoading: !0
    }).then((function(t) {
      try {
        var a = parseFloat(t.totalSize) || 0;
        (0, n.zhugeTrack)("服务-进入账单页面", {
          "待支付账单数": a
        })
      } catch (e) {
        console.log("err", e)
      }
      console.log(t), e.initData(t, 0)
    }))
  },
  initData: function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = [
        [],
        [],
        []
      ],
      n = wx.getSystemInfoSync(),
      a = e.list,
      i = void 0 === a ? [] : a;
    i.forEach((function(e, n) {
      e.id = n, t[0].push(e), e.status < 3 && t[e.status].push(e)
    }));
    var o = "/public/imgs/",
      s = ["", "".concat(o, "icon_bill_header.png"), "".concat(o, "icon_shuidian_header.png"), "".concat(o, "icon_other_header.png"), "".concat(o, "icon_bill_header.png"), "".concat(o, "icon_other_header.png"), "".concat(o, "icon_other_header.png")];
    this.SegmentedControl = this.selectComponent("#segmented-control"), this.SegmentedControl.setBageNumber(e.totalSize, 1);
    var r = [t[0].splice(0, 10), t[1].splice(0, 10), t[2].splice(0, 10)];
    this.data.list = t, this.data.unpayNum = e.totalSize, this.setData({
      curList: r,
      winHeight: n.windowHeight,
      billTypeIcons: s
    })
  },
  segmentedChange: function(e) {
    try {
      (0, n.zhugeTrack)("服务-账单-点击顶部分类", {
        "分类名称": ["全部", "待支付", "已支付"][e.detail]
      })
    } catch (e) {
      console.log("err", e)
    }
    this.tabChange(e.detail)
  },
  swiperChange: function(e) {
    var t = e.detail,
      n = t.current;
    "touch" === t.source && this.tabChange(n)
  },
  tabChange: function(e) {
    this.setData({
      currentTab: e
    }), this.getInitData()
  },
  loadMoreData: function(e) {
    var t = e.currentTarget.dataset.index,
      n = this.data,
      a = n.curList,
      i = n.list;
    a[t].length !== i[t].length && (a[t] = a[t].concat(i[t].splice(0, 10)), this.setData({
      curList: a
    }))
  },
  goToDetail: function(e) {
    var t = e.currentTarget.dataset,
      a = t.billtype,
      i = (t.businesstype, t.businessid, t.billids),
      o = e.currentTarget.dataset.item,
      s = e.currentTarget.dataset.isview ? "服务-账单-点击查看" : "服务-账单-点击账单";
    try {
      (0, n.zhugeTrack)(s, {
        "账单名称": o.billTypeName + " " + o.periodsTime,
        "公寓名称": o.businessInfo.apartmentName,
        "房间号": o.businessInfo.buildingName + " " + o.businessInfo.roomNo + "室",
        "租期": o.businessInfo.businessOrderStartTime + "-" + o.businessInfo.businessOrderEndTime,
        "总额": parseFloat(o.billTotalAmount) || 0
      })
    } catch (e) {
      console.log("err", e)
    }
    var r = "";
    r = 1 == a || 4 == a ? "bill-detail/bill-detail" : "other-detail/other-detail", wx.navigateTo({
      url: "/pages/bill/".concat(r, "?billType=").concat(a, "&billIds=").concat(i, "&businessType=").concat(o.businessType)
    })
  },
  payToggle: function(e) {
    var n = t(this.data.disabledArr);
    n[e] = !n[e], this.setData({
      disabledArr: n
    })
  },
  queryBalance: function(e) {
    var t = this,
      n = e.businessno,
      i = e.roominfo;
    a.post({
      url: "/mp-living/utility/query-utility-balance",
      showLoading: !0,
      data: {
        businessNo: n
      }
    }).then((function(e) {
      t.gotoCharge(e, {
        businessno: n,
        roominfo: i
      })
    })).catch((function(e) {
      wx.showToast({
        title: e.message,
        icon: "none"
      })
    }))
  },
  gotoCharge: function(e, t) {
    var n = e.balance,
      a = void 0 === n ? 0 : n,
      i = e.minChargeAmount,
      o = {
        balance: a,
        canRecharge: !0,
        minRechargeAmount: void 0 === i ? 100 : i,
        orderNo: t.businessno,
        text: t.roominfo
      };
    wx.showModal({
      content: "当前账单充值后自动支付，\r\n是否去充值？",
      cancelText: "取消",
      confirmText: "确定",
      confirmColor: "#e0ae01",
      success: function(e) {
        var t = e.confirm;
        void 0 !== t && t && wx.navigateTo({
          url: "/pages/hydropower-charge/hydropower-charge?apartment=" + encodeURIComponent(JSON.stringify(o))
        })
      }
    })
  },
  handlePay: function(e) {
    var t = e.currentTarget.dataset,
      a = t.billids,
      i = t.billtype,
      o = t.roominfo,
      s = t.businessno,
      r = (t.totalamount, t.index),
      l = t.item;
    try {
      (0, n.zhugeTrack)("服务-账单-点击去支付", {
        "账单名称": l.billTypeName + " " + l.periodsTime,
        "公寓名称": l.businessInfo.apartmentName,
        "房间号": l.businessInfo.buildingName + "-" + l.businessInfo.roomNo + "室",
        "租期": l.businessInfo.businessOrderStartTime + "-" + l.businessInfo.businessOrderEndTime,
        "总额": parseFloat(l.billTotalAmount) || 0
      })
    } catch (e) {
      console.log("err", e)
    }
    console.log("e", e), this.payKey = a.join(","), 6 !== i ? this.data.disabledArr[r] || wx.navigateTo({
      url: "/pages/charge-amount/charge-amount?billIds=".concat(a, "&roomInfo=").concat(o)
    }) : this.queryBalance({
      businessno: s,
      roominfo: o
    })
  },
  handleCancel: function(t) {
    var n = this,
      a = t.currentTarget.dataset,
      i = a.billids,
      o = a.billtype,
      s = "",
      r = {
        title: "温馨提示",
        cancelText: "点错了",
        confirmText: "确定取消"
      };
    3 === o ? (s = "/mp-order/bill/cancel-deposit-bill", r = e(e({}, r), {}, {
      content: "确定取消预定？"
    })) : (s = "/mp-order/bill/cancel-utility-bill", r = e(e({}, r), {}, {
      content: "取消水电充值？"
    })), wx.showModal(e(e({}, r), {}, {
      success: function(e) {
        e.confirm && n.doCancel(s, i.join(","))
      }
    }))
  },
  doCancel: function(e, t) {
    var n = this;
    a.post({
      url: e,
      data: {
        billId: t
      },
      showLoading: !0,
      wholeResponse: !0
    }).then((function(e) {
      wx.showToast({
        title: "已取消",
        icon: "none"
      }), n.getInitData()
    })).catch((function(e) {
      wx.showToast({
        title: e && e.data && e.data.data.message || e.message,
        icon: "none"
      })
    }))
  },
  onCountDownCompleted: function(e) {
    this.getInitData()
  }
});