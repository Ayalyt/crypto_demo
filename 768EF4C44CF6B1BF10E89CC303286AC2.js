var e = require("./@babel/runtime/helpers/objectSpread2.js"),
  t = s(require("5A2FF7964CF6B1BF3C499F918FE76AC2.js")),
  a = s(require("0A66BE554CF6B1BF6C00D652EAF76AC2.js")),
  r = s(require("DF957B574CF6B1BFB9F31350AEB66AC2.js")),
  n = (s(require("7EFBD0924CF6B1BF189DB89595076AC2.js")), require("D74188364CF6B1BFB127E03167186AC2.js")),
  o = s(require("D0D16E174CF6B1BFB6B7061065376AC2.js")),
  u = s(require("6E3D3A124CF6B1BF085B52151BF66AC2.js")),
  i = s(require("2AD3E8F14CF6B1BF4CB580F672676AC2.js")),
  l = s(require("DA3DBFB64CF6B1BFBC5BD7B18A176AC2.js"));

function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function d(u, l, s) {
  o.default.base.logining = !0;
  var d = function(e) {
      o.default.base.logining = !1, b = [], f.forEach((function(e) {
        o.default.base.loginInfo ? e.resolve(o.default.base.loginInfo) : e.reject()
      })), f.length = 0, o.default.base.logining = !1, e ? (o.default.base.loginInfo = null, l(e)) : u({
        userInfo: o.default.base.userInfo,
        loginInfo: o.default.base.loginInfo,
        sessionId: o.default.base.sessionId,
        vip: o.default.base.vip,
        storeVO: o.default.base.storeVO
      })
    },
    g = o.default.base.extConfig;
  return a.default.login().then((function(u) {
    var l = e({
      code: u.code,
      epId: g.epId,
      sellerId: g.sellerId,
      appId: g.appId,
      wxAppId: g.maAppId,
      sellerTemplateId: g.sellerTemplateId
    }, c);
    (function(a) {
      var n = (getApp().globalData.initOptions || {}).storeId;
      return n && (a.storeId = n), (0, t.default)({
        quite: !0,
        loading: !0,
        isLoginRequest: !0,
        url: r.default.login.loginV2,
        data: e({}, a)
      })
    })(l).then((function(e) {
      try {
        (0, n.templateHandler)(l, e.data), b.forEach((function(e) {
          (0, t.default)(e.originRequestConfig).then(e.resolve).catch(e.reject)
        })), d(), e.data.vip ? o.default.base.promotion && o.default.base.shareId && o.default.base.targetType && o.default.base.taskReferId && 2 == o.default.base.taskType && wx.navigateTo({
          url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(o.default.base.taskReferId)
        }) : o.default.base.promotion && o.default.base.shareId && o.default.base.targetType && o.default.base.taskReferId && 2 == o.default.base.taskType && i.default.checkAuth()
      } catch (e) {
        d(e)
      }
    })).catch((function(e) {
      var t = "";
      e.data && (e.data.errorMessage ? t = e.data.errorMessage : e.statusCode && (t = "statusCode:" + e.statusCode), 1004 == e.data.errorCode && a.default.$redirectTo({
        url: "wxat-common/pages/error/index?msg=用户已冻结，请联系客服！"
      })), t || (t = e), d(t), b.forEach((function(e) {
        e.reject(error)
      }))
    }))
  })).catch((function(e) {
    d(e)
  }))
}
var f = [],
  c = {};

function g(e) {
  return o.default.base.logining ? new u.default((function(e, t) {
    f.push({
      resolve: e,
      reject: t
    })
  })) : new u.default((function(e, t) {
    d(e, t)
  }))
}
var p = !1,
  b = [];
module.exports = {
  login: g,
  reLogin: function(e, a, r) {
    console.log("relogin"), b.push({
      originRequestConfig: e,
      resolve: a,
      reject: r
    }), console.log(o.default.base.logining), p || (p = !0, o.default.base.loginInfo = null, g().then((function() {
      b.forEach((function(e) {
        (0, t.default)(e.originRequestConfig).then(e.resolve).catch(e.reject)
      })), p = !1, b = []
    }), (function() {
      b.forEach((function(e) {
        e.reject(error)
      })), p = !1, b = []
    })))
  },
  addCacheRequest: function(e, t, a) {
    b.push({
      originRequestConfig: e,
      resolve: t,
      reject: a
    })
  },
  setBuryInfo: function(t) {
    c = e({}, t), l.default.updateRunTimeBzParam({
      bury: c
    })
  },
  getBuryInfo: function() {
    return c
  }
};