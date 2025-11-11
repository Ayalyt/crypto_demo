Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var a, t = (a = require("FFE7E0434CF6B1BF9981884406C76AC2.js")) && a.__esModule ? a : {
  default: a
};
getApp();
var e = {
  navigateBack: function() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = getCurrentPages(),
      e = t[t.length - 1],
      r = t[t.length - 2];
    r && (r.onBack && r.onBack.call(r, a, e.route), wx.navigateBack())
  },
  navigateTo: function(a) {
    a.url.startsWith("/") || (a.url = "/" + a.url);
    var e = getApp().globalData.wxExtTabbars;
    if (e) {
      var r = e.find((function(t) {
        var e = t.pagePath;
        return e && -1 !== a.url.indexOf(e.replace("tabbar-", ""))
      }));
      if (r) getApp().globalData.tabbars.list.some((function(a) {
        return -1 !== a.pagePath.indexOf(r.pagePath)
      })) && (a.url = "/" + r.pagePath)
    }
    if (console.log(getApp().judgePageInTabbars(a.url)), getApp().judgePageInTabbars(a.url)) wx.switchTab({
      url: a.url,
      success: function() {
        a.success && a.success()
      },
      fail: function(t) {
        a.fail && a.fail(t)
      }
    });
    else {
      if (!1 === a.data) return !1;
      var l = a.data ? "?" + t.default.toUrlParams(a.data) : "";
      console.log("%c".concat(a.url).concat(l), "color: green"), wx.navigateTo({
        url: "".concat(a.url).concat(l),
        success: function() {
          a.success && a.success()
        },
        fail: function(t) {
          a.fail && a.fail(t)
        }
      })
    }
  },
  redirectTo: function(a) {
    a.url.startsWith("/") || (a.url = "/" + a.url);
    var e = a.data ? "?" + t.default.toUrlParams(a.data) : "";
    wx.redirectTo({
      url: "".concat(a.url).concat(e)
    })
  },
  switchTab: function(a) {
    a.url.startsWith("/") || (a.url = "/" + a.url);
    var e = a.data ? "?" + t.default.toUrlParams(a.data) : "";
    wx.switchTab({
      url: "".concat(a.url).concat(e)
    })
  }
};
exports.default = e;