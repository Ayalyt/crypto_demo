var e = require("../../BD3981924CF6B1BFDB5FE99540F96AC2.js").intercept,
  t = require("../../F9E424F04CF6B1BF9F824CF736786AC2.js"),
  a = require("../../7F7F03844CF6B1BF19196B8389686AC2.js"),
  n = a.H5FUNLIVE,
  o = a.H5CRMHOST,
  r = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  i = r.openAdLink,
  c = r.getQueryFromUrl;
Page({
  data: {
    url: "",
    webPath: "",
    htmlString: ""
  },
  queryData: null,
  notReportedInOnhie: !0,
  onLoad: function(e) {
    var a = this;
    console.log(e), this.notReportedInOnhie = !0;
    var n = this.getOpenerEventChannel();
    if (n && n.on && n.on("acceptDataFromOpenerPage", (function(e) {
        if (e.htmlString) {
          var t = decodeURIComponent(e.htmlString);
          a.setData({
            htmlString: t
          })
        }
      })), e.token && this.setToken(e.token), e.webPath) {
      var o = this.handleChannelIdInPath(e.webPath);
      wx.setStorage({
        data: wx.getStorageSync(t.TOKEN),
        key: o
      }), this.setData({
        webPath: o,
        url: this.composeH5Url(e.domain, o)
      })
    } else e.url && this.setData({
      url: decodeURIComponent(e.url)
    })
  },
  handleChannelIdInPath: function(e) {
    if (-1 === e.indexOf("apartment")) return e;
    var t = function(e, t, a, n) {
        var o = -1 === e.indexOf("?") ? "?" : "&";
        return encodeURIComponent("".concat(e).concat(o, "channelId=").concat(t, "&channelRemark=").concat(a, "&originrype=").concat(n))
      },
      a = "",
      n = decodeURIComponent(e),
      o = c(n);
    if (o.channelId && o.channelRemark) {
      var r = wx.getStorageSync("channelData").origintype,
        i = o.origintype || r;
      wx.setStorageSync("channelData", {
        channelId: o.channelId,
        channelRemark: o.channelRemark,
        origintype: i
      }), a = o.origintype ? e : t(n, o.channelId, o.channelRemark, r)
    } else {
      var h = wx.getStorageSync("channelData"),
        s = h.channelId,
        d = h.channelRemark,
        l = h.origintype;
      a = s && d ? t(n, s, d, l) : e
    }
    return a
  },
  setToken: function(e) {
    try {
      wx.setStorageSync(t.TOKEN, e), wx.setStorageSync(t.ISLOGIN, !0)
    } catch (e) {
      console.log("e", e)
    }
  },
  composeH5Url: function(t, a) {
    if (!a) return "";
    if (a.startsWith("gh_")) return console.log(a), i(a, !0, !0).then((function(e) {
      "otherMiniProgram" === e.type && wx.navigateBack({
        delta: 1
      })
    })).catch((function(e) {
      console.log(e)
    })), "";
    var r = e({}),
      c = "";
    if (a.startsWith("http")) {
      var h = "?"; - 1 !== (c = decodeURIComponent(a)).indexOf("?") && (h = "&"), c += "".concat(h, "headers=").concat(encodeURIComponent(JSON.stringify(r)))
    } else {
      var s = decodeURIComponent(a);
      "/" === s[0] && (s = s.substring(1)), c = "".concat("H5CRMHOST" === t ? o : n, "page/").concat(s);
      var d = "headers=".concat(encodeURIComponent(JSON.stringify(r))),
        l = wx.getStorageSync("user_id");
      l && (d += "&userId=".concat(l)), c = this.handleContractPath(c, d)
    }
    return console.log("h5", c), c
  },
  onReady: function() {},
  onShow: function() {
    var e = this;
    console.log("onshow");
    var a = this;
    if (this.queryData)
      if (this.queryData.gotomini) wx.showModal({
        title: "欢迎回来",
        showCancel: !1,
        complete: function() {
          a.queryData.gotomini = !1
        }
      });
      else {
        var n = "queryData=".concat(this.queryData),
          o = this.handleContractPath(this.data.url, n);
        this.setData({
          url: ""
        }), setTimeout((function() {
          e.setData({
            url: o
          })
        }), 500)
      } if (this.data.webPath) {
      if (this.data.webPath.indexOf("create-reserve-order") >= 0) {
        var r = this.data.url;
        this.setData({
          url: ""
        }), setTimeout((function() {
          e.setData({
            url: r
          })
        }), 50)
      } else if (this.data.webPath.indexOf("my-reservations") >= 0 || this.data.webPath.indexOf("my-reservation-detail") >= 0) wx.getStorageSync("billIds") && (wx.setStorage({
        key: "billIds",
        data: !1
      }), wx.redirectTo({
        url: "/pages/h5-container/index?webPath=" + this.data.webPath
      }));
      else if (this.data.webPath.indexOf("room-choose") >= 0) wx.getStorageSync("h5CreateOrder") && (wx.setStorage({
        key: "h5CreateOrder",
        data: !1
      }), wx.redirectTo({
        url: "/pages/h5-container/index?webPath=" + this.data.webPath
      }));
      else if (decodeURIComponent(this.data.webPath).indexOf("withdraw/detail") >= 0) {
        var i = this.data.url;
        this.setData({
          url: ""
        }), setTimeout((function() {
          e.setData({
            url: i
          })
        }), 50)
      }!wx.getStorageSync(this.data.webPath) && wx.getStorageSync(t.TOKEN) && wx.redirectTo({
        url: "/pages/h5-container/index?webPath=" + this.data.webPath
      })
    }
  },
  onHide: function() {
    this.notReportedInOnhie = !1
  },
  onUnload: function() {},
  handleMessage: function(e) {
    var t = getCurrentPages(),
      a = t[t.length - 2];
    e.detail.data[0].gotomini ? wx.navigateToMiniProgram({
      appId: "wx2706c9da86e3262c",
      path: "pages/mine-coupon/index",
      envVersion: "release",
      complete: function() {
        a.handleWebView && a.handleWebView(e.detail.data[0])
      }
    }) : a.handleWebView && a.handleWebView(e.detail.data[0])
  },
  handleWebView: function(e) {
    this.queryData = e || null
  },
  handleContractPath: function(e, t) {
    var a = e;
    return -1 === e.indexOf("?") ? a += "?" + t : a += "&" + t, a
  },
  handleError: function(e) {
    console.log(e)
  },
  handleLoad: function(e) {
    console.log(e)
  },
  onShareAppMessage: function() {
    var e = this.data.webPath;
    return {
      path: "/pages/h5-container/index?webPath=".concat(e)
    }
  },
  reloadPage: function(e) {
    this.setData({
      url: e
    })
  }
});