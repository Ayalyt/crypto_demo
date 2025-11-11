var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  a = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js");
Page({
  data: {
    messageData: [],
    pageNo: 0,
    total: 0,
    winHeight: 0,
    curId: "",
    isNoDataShow: !1,
    initLoading: !0
  },
  onLoad: function(t) {
    var a = 297 * (wx.getSystemInfoSync().windowWidth - 30) / 685;
    this.setData({
      imageHeight: a
    })
  },
  onReady: function() {
    this.setData({
      initLoading: !0
    }), this.loadListData()
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onReachBottom: function() {},
  loadListData: function() {
    var a = this,
      e = this.data.messageData.length > 0 ? this.data.messageData[0].messageSendId : "",
      i = {
        pageSize: 10,
        pageNo: this.data.pageNo + 1,
        messageSendId: e || ""
      };
    t.post({
      url: "/mp-living/room/V2/query-consumer-message-list",
      data: i,
      showLoading: !0,
      handleError: "ALL"
    }).then((function(t) {
      a.setData({
        initLoading: !1
      }), a.initDataView(t, e), a.modifyStatusRead(t.list || [])
    })).catch((function(t) {
      if (400 === t.code) return wx.redirectTo({
        url: "/pages/login/login"
      }), t;
      a.initDataView()
    }))
  },
  modifyStatusRead: function() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    a.length < 1 || t.post({
      url: "/mp-living/room/modify-status-read",
      data: {},
      handleError: "ALL"
    })
  },
  initDataView: function() {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      i = arguments.length > 1 ? arguments[1] : void 0,
      n = this.data.pageNo,
      o = this.data.messageData.concat([]);
    e && e.list && (e.list.map((function(e) {
      var i = e;
      i.cardTime = a.formatTime(new Date(e.createTime), {
        splitter: "-"
      }), i.createTime = t.formatNoticeDate(e.createTime), i.url = e.url && e.url.appletUrl ? e.url.appletUrl : "", o.unshift(i)
    })), n = e.currentPage);
    var r = wx.getSystemInfoSync();
    this.setData({
      messageData: o,
      pageNo: n,
      total: e.total || 0,
      isNoDataShow: 0 == o.length,
      winHeight: r.windowHeight
    }), this.setData({
      curId: 1 === n && o.length > 0 ? o[o.length - 1].messageSendId : i
    })
  },
  formatNoticeDate: function(t) {
    var e = new Date(t);
    if ("Invalid Date" == e) return "未获取到时间";
    var i = new Date(t).toDateString(),
      n = new Date(i).getTime(),
      o = (new Date).toDateString(),
      r = new Date(o).getTime(),
      s = parseInt((r - n) / 864e5),
      l = new Date(t).getMinutes(),
      d = new Date(t).getHours(),
      g = this.formatNumber(d) + ":" + this.formatNumber(l);
    return s >= 0 && s < 1 ? "今天 ".concat(g) : 1 == s ? "昨天 ".concat(g) : s > 1 && s <= 30 ? "".concat(s, "天以前 ").concat(g) : a.formatTime(e, {
      splitter: "-"
    })
  },
  formatNumber: function(t) {
    return (t = t.toString())[1] ? t : "0" + t
  },
  onClickCard: function(t) {
    var a = t.currentTarget.dataset.url;
    if (a)
      if (a.startsWith("http")) {
        var e = encodeURIComponent(a);
        wx.navigateTo({
          url: "/pages/h5-container/index?webPath=".concat(e)
        })
      } else {
        var i = a;
        a.startsWith("pages") && (i = i.replace("pages", "..")), -1 !== i.indexOf("bill-list") && (i = "../bill/bill-list/index"), wx.navigateTo({
          url: i
        })
      }
  },
  handleLoadMore: function() {
    var t = this.data,
      a = t.messageData,
      e = void 0 === a ? [] : a,
      i = t.total,
      n = t.showLoading;
    e.length === i || n || this.loadListData()
  }
});