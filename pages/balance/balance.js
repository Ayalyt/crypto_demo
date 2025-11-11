var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  a = require("../../D2980F274CF6B1BFB4FE672005896AC2.js");
Page({
  data: {
    currentTab: 0,
    winHeight: 0,
    swiperHeight: 0,
    statusArray: ["", "add", "subtract"],
    allList: [],
    chargeList: [],
    expendList: [],
    pageIndexArray: [1, 1, 1],
    availableBalance: 0,
    isShowAllListBlank: !1,
    isShowChargeBlank: !1,
    isShowExpendBlank: !1,
    mainViewTop: 0,
    swiperHeightArray: [0, 0, 0, 0],
    scrollCls: ""
  },
  onLoad: function(t) {
    var a = wx.getSystemInfoSync(),
      e = 750 / a.windowWidth,
      i = a.windowHeight * e,
      s = (308 * a.windowWidth / 718 * e + 64) / e;
    this.setData({
      swiperHeight: i - 44 * e,
      mainViewTop: s
    }), this.ifNeedLoadListData()
  },
  onReady: function() {},
  onShow: function() {},
  segmentedChange: function(t) {
    this.setData({
      currentTab: t.detail
    })
  },
  swiperChange: function(t) {
    this.setData({
      currentTab: t.detail.current
    }), this.ifNeedLoadListData()
  },
  ifNeedLoadListData: function() {
    var t = this.data.currentTab;
    if (0 == t && 0 == this.data.allList.length) this.loadListData();
    else if (1 == t && 0 == this.data.chargeList.length) this.loadListData();
    else if (2 == t && 0 == this.data.expendList.length) this.loadListData();
    else {
      var a = this.data.swiperHeightArray[this.data.currentTab];
      0 == a ? this.initSwiperHeight() : this.setData({
        swiperHeight: a
      })
    }
  },
  loadListData: function() {
    var a = this,
      e = {
        changeDirection: this.data.statusArray[this.data.currentTab],
        pageSize: 10,
        pageNumber: this.data.pageIndexArray[this.data.currentTab]
      };
    t.post({
      url: "/cashier/balance/queryBalanceAndVoucherDetail",
      data: e,
      showLoading: !0,
      handleError: "ALL"
    }).then((function(t) {
      wx.stopPullDownRefresh(), a.initDataView(t)
    })).catch((function(t) {
      a.initDataView([])
    }))
  },
  initDataView: function(t) {
    var e = t.list,
      i = this.data.currentTab;
    if (this.setData({
        availableBalance: t.availableBalance
      }), e && e.length > 0) {
      for (var s = 0; s < e.length; s++) {
        var n = e[s],
          r = n.changeDirection;
        "add" == r ? (n.symbol = "+", n.changeDirectionTitle = "充值", n.walletColor = "#F15D61") : "subtract" == r && (n.symbol = "-", n.changeDirectionTitle = "消费", n.walletColor = "#333333");
        var h = n.voucherType;
        "2" == h ? n.voucherTypeTitle = "转账充值" : "3" == h ? n.voucherTypeTitle = "消费支付" : "5" == h ? n.voucherTypeTitle = "在线充值" : "MANUAL" == h ? n.voucherTypeTitle = "人工调整" : ("10" == h || "12" == h) && (n.voucherTypeTitle = "消费支付");
        var l = new Date(n.createTime);
        n.createTimeString = a.dateFormatter("yyyy-MM-dd hh:mm", l)
      }
      var d = this.data.pageIndexArray[this.data.currentTab];
      0 == i ? (1 == d && (this.data.allList = []), this.data.allList = this.data.allList.concat(e)) : 1 == i && (1 == d && (this.data.chargeList = []), this.data.chargeList = this.data.chargeList.concat(e)), 2 == i && (1 == d && (this.data.expendList = []), this.data.expendList = this.data.expendList.concat(e)), this.data.pageIndexArray[this.data.currentTab] = t.pageNumber + 1
    }
    0 == i ? this.setData({
      allList: this.data.allList,
      isShowAllListBlank: 0 == this.data.allList.length
    }) : 1 == i && this.setData({
      chargeList: this.data.chargeList,
      isShowChargeBlank: 0 == this.data.chargeList.length
    }), 2 == i && this.setData({
      expendList: this.data.expendList,
      isShowExpendBlank: 0 == this.data.expendList.length
    }), this.initSwiperHeight()
  },
  goToBalanceDetails: function(t) {
    var a, e = parseInt(t.currentTarget.id);
    0 == this.data.currentTab ? a = this.data.allList[e] : 1 == this.data.currentTab ? a = this.data.chargeList[e] : 2 == this.data.currentTab && (a = this.data.expendList[e]), wx.navigateTo({
      url: "/packageA/pages/balance-details/balance-details?id=" + a.id
    })
  },
  refreshData: function() {
    this.data.pageIndexArray[this.data.currentTab] = 1, this.loadListData()
  },
  loadMoreData: function() {
    this.loadListData()
  },
  onPageScroll: function(t) {
    t.scrollTop > this.data.mainViewTop ? this.setData({
      scrollCls: "fixedCls"
    }) : this.setData({
      scrollCls: ""
    })
  },
  initSwiperHeight: function() {
    var t = this,
      a = wx.createSelectorQuery();
    a.select("#swiper-item-" + this.data.currentTab).boundingClientRect(), a.selectViewport().scrollOffset(), a.exec((function(a) {
      t.setData({
        swiperHeight: a[0].height
      }), t.data.swiperHeightArray[t.data.currentTab] = a[0].height
    }))
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {
    this.refreshData()
  },
  onReachBottom: function() {
    this.loadMoreData()
  }
});