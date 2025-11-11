var t = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  e = require("../../03F505464CF6B1BF65936D4171E96AC2.js");
require("../../D2980F274CF6B1BFB4FE672005896AC2.js");
Page({
  data: {
    winHeight: 0,
    selectedItem: void 0,
    balance: 0,
    tipText: "什么都没有,请先订房哦~",
    list: [],
    scrollHeight: 0,
    isShowNoData: !1,
    selectedOrderNo: "",
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
    getApp().globalData.pagesContainer[this.route] = this;
    var e = wx.getSystemInfoSync(),
      a = 750 / e.windowWidth,
      i = e.windowHeight * a;
    this.setData({
      winHeight: i,
      scrollHeight: i,
      selectedOrderNo: t.orderNo ? t.orderNo : ""
    })
  },
  onReady: function() {},
  onShow: function() {
    try {
      (0, t.zhugeTrack)("服务-进入水电余额页面")
    } catch (t) {
      console.log("err", t)
    }
    this.refreshData()
  },
  loadData: function() {
    var t = this;
    if (this.data.selectedItem) {
      var a = {
        orderNo: this.data.selectedItem.orderNo
      };
      e.post({
        url: "/living/utility/V2/query-utility-list",
        data: a
      }).then((function(e) {
        "{}" === JSON.stringify(e) && (e = []), t.initDataView(e)
      })).catch((function(t) {}))
    }
  },
  loadBalance: function() {
    var t = this;
    if (this.data.selectedItem) {
      var a = {
        leaseOrderNo: this.data.selectedItem.orderNo
      };
      e.post({
        url: "mp-order/bill/water-electric-balance",
        data: a
      }).then((function(e) {
        t.setData({
          balance: e && e.showAmt || 0
        })
      })).catch((function(t) {}))
    }
  },
  initDataView: function(t) {
    this.setData({
      list: t,
      isShowNoData: 0 == t.length
    })
  },
  paySuccess: function() {
    this.apartmentList = this.selectComponent("#apartment-list"), this.apartmentList.refreshData()
  },
  refreshData: function() {
    this.loadData(), this.loadBalance()
  },
  loadMoreData: function() {},
  apartmentChange: function(e) {
    try {
      (0, t.zhugeTrack)("服务-水电余额-点击切换公寓")
    } catch (t) {
      console.log("err", t)
    }
    if (e.detail) {
      this.setData({
        selectedItem: e.detail
      });
      var a = this.data.selectedItem.canRecharge ? "充得多, 用得久" : "硬件限制，不能在线充值，抱歉哦",
        i = this.data.selectedItem.canRecharge ? this.data.winHeight - 74 - 100 - 88 : this.data.winHeight - 74 - 88;
      this.setData({
        tipText: a,
        scrollHeight: i
      }), this.refreshData()
    } else this.setData({
      isShowNoData: !0,
      showLoading: !1
    })
  },
  onHide: function() {},
  goToCharge: function() {
    var e = encodeURIComponent(JSON.stringify(this.data.selectedItem)),
      a = this.data.selectedItem,
      i = a.roomNo,
      o = a.buildingName,
      n = a.apartmentName;
    try {
      (0, t.zhugeTrack)("服务-水电余额页面-点击水电充值", {
        "公寓名称": n,
        "房间号": o + "-" + i + "室"
      })
    } catch (t) {
      console.log("err", t)
    }
    wx.navigateTo({
      url: "/pages/hydropower-charge/hydropower-charge?apartment=" + e
    })
  },
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {}
});