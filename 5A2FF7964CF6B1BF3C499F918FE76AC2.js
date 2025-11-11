Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("./@babel/runtime/helpers/typeof.js"),
  a = require("./@babel/runtime/helpers/objectSpread2.js"),
  t = d(require("5D679AC74CF6B1BF3B01F2C0A7876AC2.js")),
  i = d(require("D0D16E174CF6B1BFB6B7061065376AC2.js")),
  r = d(require("6E3D3A124CF6B1BF085B52151BF66AC2.js"));

function d(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var o = function d(o) {
  var s = require("768EF4C44CF6B1BF10E89CC303286AC2.js"),
    n = a(a({}, {
      loading: !1,
      quite: !1,
      isReport: !1
    }), t.default.object.clone(o));
  return n.data && n.data.hasOwnProperty("storeId") && !n.data.storeId && (n.data.storeId = i.default.base.currentStore.id), n.data ? n.data._t = (new Date).getTime() : n.data = {
    _t: (new Date).getTime()
  }, new r.default((function(a, t) {
    var r = i.default.base.sessionId,
      u = "sessionId=".concat(r);
    if (r && (n.header = Object.assign(n.header || {}, {
        cookie: u
      })), n.loading) {
      var l = "object" === e(n.loading) ? n.loading : {
        title: "正在请求..."
      };
      l.mask = !0, wx.showLoading(l)
    }
    n.success = function(e) {
      if (n.isReport) a();
      else {
        var r = e.data;
        if (n.loading && wx.hideLoading(), r.success) a(e.data);
        else if (401 == r.errorCode) {
          if (n.header.cookie !== "sessionId=".concat(i.default.base.sessionId)) return d(n);
          i.default.base.logining = !1, s.reLogin(n, a, t)
        } else n.fail(e)
      }
    }, n.fail = function(e) {
      if (n.isReport) a();
      else {
        n.loading && wx.hideLoading();
        e.data && e.data.errorCode && e.data.errorCode;
        n.quite, 0, t(e)
      }
    }, i.default.base.sessionId || o.isLoginRequest ? wx.request(n) : s.addCacheRequest(n, a, t)
  }))
};
exports.default = o;