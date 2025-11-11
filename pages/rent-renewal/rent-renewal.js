var t = require("../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  o = require("../../D2980F274CF6B1BFB4FE672005896AC2.js");
Page({
  data: {
    isNoDataShow: !1,
    isBtnShow: !0,
    text: "什么都没有，请先订房哦~~",
    applyList: [],
    orderNo: "",
    roomDetail: {},
    winHeight: 0,
    currentAparement: void 0,
    selectedOrderNo: "",
    showFaqBtn: !0,
    statusList: [6, 8, 9],
    refreshTriggered: !0
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
    getApp().globalData.pagesContainer[this.route] = this;
    var e = wx.getSystemInfoSync();
    this.setData({
      winHeight: e.windowHeight,
      selectedOrderNo: t.orderNo ? t.orderNo : ""
    })
  },
  onReady: function() {},
  onShow: function() {
    try {
      (0, e.zhugeTrack)("服务-进入退续租页面")
    } catch (t) {
      console.log("err", t)
    }
    this.refreshData()
  },
  handleRefresh: function() {
    this.refreshData(), this.setData({
      refreshTriggered: !1
    })
  },
  goToDetails: function(t) {
    var e = t.detail.item,
      a = parseInt(t.detail.type);
    "RELET" == e.type ? this.rerentApply(a, e) : this.onRentWithdraw(a, e)
  },
  goToWithdrawDetail: function(t) {
    var e = encodeURIComponent("withdraw/detail?evictionId=".concat(t.applyId));
    wx.navigateTo({
      url: "/pages/h5-container/index?webPath=".concat(e)
    })
  },
  rerentApplyAction: function() {
    try {
      (0, e.zhugeTrack)("服务-退续租-点击续租办理")
    } catch (t) {
      console.log("err", t)
    }
    if ("mp-" === wx.getStorageSync("sourcePath")) {
      if (!this.checkRoomStatus(0, !0)) return;
      var t = this.data,
        a = t.currentAparement,
        n = t.roomDetail,
        i = encodeURIComponent(o.dateFormatter("yyyy.MM.dd", new Date(n.checkOutDate)) + "到期"),
        r = encodeURIComponent(o.dateFormatter("yyyy-MM-dd hh:mm:ss", new Date(n.checkOutDate)));
      wx.navigateTo({
        url: "/packageA/pages/relet/new-relet-apply/index?reletId=&orderNo=".concat(a.orderNo, "&apartmentInfo=").concat(encodeURIComponent(a.text), "&checkOutDate=").concat(i, "&roomId=").concat(a.roomId, "&dateZhuge=").concat(r)
      })
    } else this.rerentApply(0, {
      applyId: ""
    })
  },
  rerentApply: function(t, e) {
    if (this.checkRoomStatus(t, !0)) {
      var a = encodeURIComponent(JSON.stringify(this.data.currentAparement)),
        o = encodeURIComponent(JSON.stringify(this.data.roomDetail)),
        n = encodeURIComponent(JSON.stringify(e));
      wx.navigateTo({
        url: "/packageA/pages/rerent-apply/rerent-apply?type=" + t + "&apartmentDetails=" + a + "&roomDetail=" + o + "&reletId=" + e.applyId + "&rerentDetails=" + n
      })
    }
  },
  onRentWithdrawAction: function(a) {
    try {
      (0, e.zhugeTrack)("服务-退续租-点击退租申请")
    } catch (t) {
      console.log("err", t)
    }
    var o = a.detail.item || {},
      n = parseInt(a.detail.type),
      i = t({
        applyId: ""
      }, o),
      r = encodeURIComponent(JSON.stringify(this.data.currentAparement)),
      s = encodeURIComponent(JSON.stringify(this.data.roomDetail)),
      c = encodeURIComponent(JSON.stringify(i));
    "mp-" === wx.getStorageSync("sourcePath") ? wx.navigateTo({
      url: "/packageA/pages/checkout/apply/index?type=" + n + "&apartmentDetails=" + r + "&roomDetail=" + s + "&evictionId=" + i.applyId + "&retireDetails=" + c
    }) : wx.navigateTo({
      url: "/packageA/pages/checkout-apply/checkout-apply".concat("?type=") + n + "&apartmentDetails=" + r + "&roomDetail=" + s + "&evictionId=" + i.applyId + "&retireDetails=" + c
    })
  },
  onRentWithdraw: function(t, e) {
    this.checkRoomStatus(t) && this.goToWithdrawDetail(e)
  },
  checkRoomStatus: function(t, e) {
    var a = this.data.roomDetail.status;
    return 0 != t || "XZDB" != a && "TZZ" != a || ("TZZ" == a ? (wx.showToast({
      title: "请先取消退租",
      icon: "none"
    }), !1) : !(!e && "XZDB" == a) || (wx.showToast({
      title: "请先取消续租",
      icon: "none"
    }), !1))
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onMonitorData: function(t) {
    t.detail ? (this.setData({
      orderNo: t.detail.orderNo,
      roomId: t.detail.roomId,
      currentAparement: t.detail
    }), this.getLivingRoomData(), this.getApplyListData()) : this.setData({
      isNoDataShow: !0,
      text: "什么都没有，请先订房哦~~"
    })
  },
  getLivingRoomData: function() {
    var t = this;
    a.post({
      url: "living/room/get-living-room",
      data: {
        orderNo: this.data.currentAparement && this.data.currentAparement.orderNo || ""
      },
      showLoading: !0
    }).then((function(e) {
      t.setData({
        roomDetail: e,
        isBtnShow: 1 == e.reletFlag || 1 == e.evictionFlag
      })
    }))
  },
  initApplyData: function(t) {
    for (var e = t, a = wx.getStorageSync("sourcePath"), n = 0; n < t.length; n++) {
      var i = e[n],
        r = i.createTime,
        s = i.evictionTime;
      e[n].createTimeText = r ? o.dateFormatter("yyyy年MM月dd日", new Date(r)) : "", e[n].evictionTimeText = s ? o.dateFormatter("yyyy年MM月dd日", new Date(s)) : "", a || (e[n].payType = "")
    }
    this.setData({
      applyList: e,
      isNoDataShow: 0 == e.length,
      text: "退不是终点,期待再续前缘~"
    })
  },
  getApplyListData: function(t) {
    var e = this;
    a.post({
      url: "living/eviction/query-apply-list",
      data: {
        orderNo: this.data.currentAparement && this.data.currentAparement.orderNo || ""
      },
      showLoading: !0
    }).then((function(t) {
      console.log("res", t), "{}" === JSON.stringify(t) && (t = []), e.initApplyData(t)
    }))
  },
  refreshData: function(t) {
    this.getApplyListData(), this.getLivingRoomData()
  }
});