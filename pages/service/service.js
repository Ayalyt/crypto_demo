var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  e = require("../../962C10504CF6B1BFF04A7857F7996AC2.js"),
  o = require("../../F9E424F04CF6B1BF9F824CF736786AC2.js"),
  n = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = n.openAdLink,
  i = n.zhugeTrack,
  r = {
    1: "您已入住方隅",
    2: "来方隅，一起Fun开玩",
    3: "方隅曾与您共度"
  };
Page({
  data: {
    isLogin: !1,
    gender: "1",
    username: "登录/注册",
    messages: [{
      title: "暂无新消息 "
    }],
    current: 0,
    currentForTrack: 0,
    autoplay: !0,
    hasMessage: !1,
    unPaidBillAmount: 0,
    underRepairOrderAmount: 0,
    underUseContractAmount: 0,
    newReplyAmount: 0,
    hasSuggestions: !1,
    workOrderCount: 0,
    nvabarData: {
      showCapsule: 1,
      showBack: 1,
      showHome: 1,
      title: "首页"
    },
    bottomAdHeight: 0,
    selfLive: !1,
    activityInfo: null,
    showSurroundingLife: !1,
    floatingWindowData: null,
    vipPic: "",
    showDays: !1,
    liveDays: 0,
    vipText: r[2]
  },
  changeCurrentForTrackIndex: 0,
  onLoad: function(t) {
    console.log(t, "我是service"), "feedback" === t.fromOfficialAccounts && this.fromOfficialAccountsToFeedback(t.queryData)
  },
  onReady: function() {
    var t = 50 * (getApp().globalData.windowWidth - 30) / 345;
    this.setData({
      bottomAdHeight: t
    })
  },
  onShow: function() {
    try {
      i("进入服务页面")
    } catch (t) {
      console.log("err", t)
    }
    this.setData({
      autoplay: !0
    });
    try {
      wx.getStorageSync(o.ISLOGIN) ? (this.getUserSource(), this.getSelfLiveStatus(), this.getVipPic()) : (this.resetData(), this.getNoLoginPic())
    } catch (t) {
      console.log("e", t)
    }
    this.getActivityInfo(), this.getTopAdList(), "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
      selected: 4
    })
  },
  resetData: function() {
    this.setData({
      gender: "1",
      username: "登录/注册",
      messages: [{
        title: "暂无新消息 "
      }],
      current: 0,
      autoplay: !0,
      hasMessage: !1,
      unPaidBillAmount: 0,
      underUseContractAmount: 0,
      underRepairOrderAmount: 0,
      newReplyAmount: 0,
      hasSuggestions: !1,
      workOrderCount: 0,
      vipPic: "",
      showDays: !1,
      liveDays: 0,
      vipText: r[2]
    })
  },
  getNoLoginPic: function(e) {
    var o = this;
    t.post({
      url: "/fun/homepage/serve/page/info",
      data: {},
      handleError: "ALL"
    }).then((function(t) {
      o.setData({
        vipPic: t.imageUrl || ""
      })
    })).catch((function(t) {
      var e = t.data && t.data.data && t.data.data.message || t.message;
      wx.showToast({
        title: e,
        icon: "none"
      })
    }))
  },
  goToLogin: function() {
    this.jumpPage({
      url: "/pages/login/login",
      events: {
        loginSuccess: function(t) {
          console.log(t)
        }
      }
    })
  },
  onHide: function() {
    this.setData({
      current: 0,
      autoplay: !1
    })
  },
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  getUserSource: function() {
    var e = this;
    t.post({
      url: "/mp-ac/user/route",
      handleError: "ALL"
    }).then((function(t) {
      wx.setStorageSync("sourcePath", t.route ? "" : "mp-"), e.getInitData()
    })).catch((function(t) {
      wx.setStorageSync("sourcePath", "mp-"), e.getInitData()
    }))
  },
  getSelfLiveStatus: function() {
    var e = this;
    t.post({
      url: "/mp-living/room/auto-check-in/option",
      handleError: "ALL"
    }).then((function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      t.length > 0 ? e.setData({
        selfLive: !0
      }) : e.setData({
        selfLive: !1
      })
    })).catch((function(t) {
      console.log(t)
    }))
  },
  getInitData: function() {
    this.getUserInfo(), this.getLeaseOrderDays(), this.getMessages(), this.getBillCount(), this.getUseContractAmount(), this.getRepairCount(), this.getReplyCount(), this.getEvaluationCount(), this.getIfShowSurroundingLife(), this.getVipPic()
  },
  getLeaseOrderDays: function() {
    var e = this;
    t.post({
      url: "/mp-living/room/query/lease-order/days",
      handleError: "ALL"
    }).then((function(t) {
      e.setData({
        showDays: 2 !== t.leaseFlag,
        liveDays: t.days,
        vipText: r[t.leaseFlag]
      })
    }))
  },
  getVipPic: function() {
    var e = this;
    t.post({
      url: "/homepage/config/serve/page/info",
      data: {}
    }).then((function(t) {
      console.log("res", t), e.setData({
        vipPic: t.imageUrl || ""
      })
    }))
  },
  getUserInfo: function() {
    var o = this;
    t.post({
      url: "/member/user/query/v2",
      handleError: "ALL"
    }).then((function(t) {
      o.setData({
        isLogin: !0,
        gender: t.gender,
        username: t.name || e.mask(t.mobile)
      })
    }))
  },
  getMessages: function() {
    var e = this;
    t.post({
      url: "/living/room/V2/query-carousel-tips",
      handleError: "ALL",
      data: {}
    }).then((function(t) {
      var o = t || [],
        n = !1;
      o.length ? n = !0 : (n = !1, o.push({
        title: "暂无新消息 "
      })), e.setData({
        hasMessage: n,
        messages: o,
        current: 0
      })
    }))
  },
  getBillCount: function() {
    var e = this;
    t.post({
      url: "/living/room/get-unpaid-bill-amount",
      handleError: "ALL",
      data: {}
    }).then((function(t) {
      e.setData({
        unPaidBillAmount: t.unPaidBillAmount
      })
    }))
  },
  getUseContractAmount: function() {
    var e = this;
    t.post({
      url: "/mp-living/room/query/effective-lease-order/number",
      handleError: "ALL",
      data: {}
    }).then((function(t) {
      t && e.setData({
        underUseContractAmount: t.effectiveLeaseOrderNumber || 0
      })
    }))
  },
  getRepairCount: function() {
    var e = this;
    t.post({
      url: "/living/room/get-repairing-order-amount",
      handleError: "ALL",
      data: {}
    }).then((function(t) {
      e.setData({
        underRepairOrderAmount: t.underRepairOrderAmount
      })
    }))
  },
  getReplyCount: function() {
    var e = this;
    t.post({
      url: "/living/room/get-new-reply-amount",
      handleError: "ALL",
      data: {}
    }).then((function(t) {
      e.setData({
        newReplyAmount: t.newReplyAmount,
        hasSuggestions: t.hasSuggestions
      })
    }))
  },
  getEvaluationCount: function() {
    var e = this;
    t.post({
      url: "/mp-living/work-order/evaluation/count",
      handleError: "ALL",
      data: {}
    }).then((function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      e.setData({
        workOrderCount: t.totalCount
      })
    }))
  },
  getActivityInfo: function() {
    var e = this;
    t.post({
      url: "/mp-activity/without-login/list-with-type",
      data: {
        isAll: 0,
        type: "SERVICE_PAGE"
      }
    }).then((function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      e.setData({
        activityInfo: t.length > 0 ? t[0] : null
      })
    })).catch((function(t) {
      e.setData({
        activityInfo: null
      })
    }))
  },
  getIfShowSurroundingLife: function() {
    var e = this;
    t.post({
      url: "/mp-apartment/query/user-sign-apartment/query",
      data: {}
    }).then((function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      e.setData({
        showSurroundingLife: t.length > 0
      })
    })).catch((function() {
      e.setData({
        showSurroundingLife: !1
      })
    }))
  },
  onHandleMessage: function(t) {
    var e = t.target.dataset.message || {};
    wx.getStorageSync("sourcePath") && (e.type = {
      1: 1,
      2: 3,
      3: 4
    } [e.type]), 1 === e.type ? this.goToBillList(1) : 3 === e.type ? this.goToHydropower(e.orderNo) : 4 === e.type && this.goToRentRenewal(e.orderNo)
  },
  changeCurrentForTrack: function(t) {
    this.changeCurrentForTrackIndex = t.detail.current
  },
  onHandleNotice: function() {
    var t = this.data.messages;
    try {
      i("服务-点击公告", {
        "公告名称": t[this.changeCurrentForTrackIndex].title
      })
    } catch (t) {
      console.log("err", t)
    }
    this.jumpPage({
      url: "../notification-center/notification-center"
    })
  },
  goToBillList: function(t) {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "账单"
      })
    } catch (t) {
      console.log("err", t)
    }
    "number" != typeof t && (t = 0);
    var e = wx.getStorageSync("sourcePath");
    this.jumpPage({
      url: (e ? "../bill/bill-list/index?type=" : "../BillList/BillList?type=") + t
    })
  },
  goToHydropower: function(t) {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "水电余额"
      })
    } catch (t) {
      console.log("err", t)
    }
    var e = t;
    this.jumpPage({
      url: "../hydropower/hydropower?orderNo=" + e
    })
  },
  goToBalance: function() {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "荷包"
      })
    } catch (t) {
      console.log("err", t)
    }
    this.jumpPage({
      url: "../balance/balance"
    })
  },
  onLogin: function() {
    this.jumpPage({
      url: "../login/login"
    })
  },
  onShowProfile: function() {
    this.jumpPage({
      url: "../profile/profile"
    })
  },
  goToRoomPassword: function() {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "门锁密码"
      })
    } catch (t) {
      console.log("err", t)
    }
    this.jumpPage({
      url: "../room-password/room-password"
    })
  },
  goToRoomMates: function() {
    this.jumpPage({
      url: "../roommates/roommates"
    })
  },
  goToCheckInGuide: function() {
    this.jumpPage({
      url: "../check-in-guide/check-in-guide"
    })
  },
  goToFeedback: function() {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "意见反馈"
      })
    } catch (t) {
      console.log("err", t)
    }
    var t = encodeURIComponent("feedback-tab");
    this.jumpPage({
      url: "/pages/h5-container/index?webPath=".concat(t)
    })
  },
  fromOfficialAccountsToFeedback: function(t) {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "意见反馈"
      })
    } catch (t) {
      console.log("err", t)
    }
    var e = encodeURIComponent("feedback-list?queryData=".concat(t));
    this.jumpPage({
      url: "/pages/h5-container/index?webPath=".concat(e)
    })
  },
  goToVisitor: function() {
    var t = encodeURIComponent("visitor-list");
    wx.redirectTo({
      url: "/pages/h5-container/index?webPath=".concat(t)
    })
  },
  goToSelfLive: function() {
    var t = encodeURIComponent("lease-detail");
    wx.redirectTo({
      url: "/pages/h5-container/index?webPath=".concat(t)
    })
  },
  goToSelfEletrContract: function() {
    var t = encodeURIComponent("self-contract");
    wx.navigateTo({
      url: "/pages/h5-container/index?webPath=".concat(t)
    })
  },
  goToMyReservation: function() {
    var t = encodeURIComponent("my-reservations");
    wx.navigateTo({
      url: "/pages/h5-container/index?webPath=".concat(t)
    })
  },
  goToContractBook: function() {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "合同文书"
      })
    } catch (t) {
      console.log("err", t)
    }
    this.jumpPage({
      url: "../contract-book/contract-book"
    })
  },
  goToRentRenewal: function(t) {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "退续租"
      })
    } catch (t) {
      console.log("err", t)
    }
    var e = t;
    "string" != typeof e && (e = ""), this.jumpPage({
      url: "../rent-renewal/rent-renewal?orderNo=" + e
    })
  },
  goToRepair: function() {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "报修保洁"
      })
    } catch (t) {
      console.log("err", t)
    }
    var t = wx.getStorageSync("sourcePath") ? "../repair-clean/repair-clean" : "../repair/list/list";
    this.jumpPage({
      url: t
    })
  },
  goToFAQ: function() {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "常见问题"
      })
    } catch (t) {
      console.log("err", t)
    }
    this.jumpPage({
      url: "../faq/faq"
    })
  },
  gotoAppointment: function() {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "我的预约"
      })
    } catch (t) {
      console.log("err", t)
    }
    this.jumpPage({
      url: "../appointment/list/index"
    })
  },
  goToInvoice: function() {
    try {
      i("服务-点击常用功能各按钮", {
        "按钮名称": "自助开票"
      })
    } catch (t) {
      console.log("err", t)
    }
    if (wx.getStorageSync("token")) {
      var t = encodeURIComponent("/invoice-list");
      wx.navigateTo({
        url: "/pages/h5-container/index?webPath=".concat(t)
      })
    } else wx.navigateTo({
      url: "../login/login"
    })
  },
  goSurroundingLife: function() {
    var t = encodeURIComponent("surrounding-life");
    this.jumpPage({
      url: "/pages/h5-container/index?domain=H5FUNLIVE&webPath=".concat(t)
    })
  },
  goActivityDetail: function() {
    var t = this.data.activityInfo,
      e = t.url,
      o = void 0 === e ? "" : e,
      n = t.desc;
    try {
      i("服务-点击续租活动", {
        "活动名称": n
      })
    } catch (t) {
      console.log("err", t)
    }
    var a = encodeURIComponent(o);
    this.jumpPage({
      url: "/pages/h5-container/index?domain=H5CRMHOST&webPath=".concat(a)
    })
  },
  goToCoupon: function() {
    try {
      i("我的-点击优惠券")
    } catch (t) {
      console.log("err", t)
    }
    var t = encodeURIComponent("my-coupon-list");
    this.jumpPage({
      url: "/pages/h5-container/index?domain=H5CRMHOST&webPath=".concat(t)
    })
  },
  onVisitorManage: function() {
    var t = encodeURIComponent("visitor-list");
    this.jumpPage({
      url: "/pages/h5-container/index?domain=H5FUNLIVE&webPath=".concat(t)
    })
  },
  linkToSuperMini: function() {
    wx.navigateToMiniProgram({
      appId: "wx2706c9da86e3262c",
      path: "pages/index/index",
      envVersion: "release",
      success: function(t) {
        console.log(t)
      }
    })
  },
  jumpPage: function(t) {
    wx.getStorageSync("token") ? wx.navigateTo(t) : wx.navigateTo({
      url: "../login/login"
    })
  },
  getTopAdList: function() {
    var e = this;
    t.post({
      url: "/fun/homepage/advertising",
      handleError: "ALL",
      data: {
        location: "FUNLIVE_LIST",
        type: "1"
      }
    }).then((function(t) {
      var o = null,
        n = (t || []).find((function(t) {
          return 100 === t.weight
        }));
      n && (o = {
        name: n.name,
        link: n.link
      }), e.setData({
        floatingWindowData: o
      })
    }))
  },
  onClickFloatingWindow: function() {
    var t = this.data.floatingWindowData;
    try {
      i("点击侧边悬浮窗", {
        "名称": t.name
      })
    } catch (t) {
      console.log("err", t)
    }
    a(t.link)
  },
  onGoUserReport: function() {
    var t = encodeURIComponent("user-report");
    this.jumpPage({
      url: "/pages/h5-container/index?domain=H5FUNLIVE&webPath=".concat(t)
    })
  }
});