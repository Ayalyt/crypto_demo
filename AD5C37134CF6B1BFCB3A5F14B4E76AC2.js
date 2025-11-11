var e = require("./@babel/runtime/helpers/objectSpread2.js"),
  t = n(require("DF957B574CF6B1BFB9F31350AEB66AC2.js")),
  a = n(require("D0D16E174CF6B1BFB6B7061065376AC2.js")),
  r = n(require("0A66BE554CF6B1BF6C00D652EAF76AC2.js")),
  u = n(require("7EFBD0924CF6B1BF189DB89595076AC2.js"));

function n(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function i(n) {
  return new Promise((function(i, s) {
    r.default.request({
      url: t.default.login.register,
      method: "POST",
      data: n
    }).then((function(t) {
      if (a.default.base.userInfo = e(e({}, a.default.base.userInfo), n), a.default.base.loginInfo = e(e({}, a.default.base.loginInfo), n), a.default.base.wxUserInfo = e(e({}, a.default.base.wxUserInfo), n), !a.default.base.registered) {
        var r = a.default.base.activityInfo.id ? JSON.parse(JSON.stringify(a.default.base.activityInfo)) : null;
        u.default.registerSuccess(t.data.id, r)
      }
      a.default.base.activityInfo = {}, a.default.base.registered = !0;
      var s = t.data || {},
        d = s.wxUnionId,
        f = s.wxOpenId,
        o = s.phone;
      f ? u.default.user({
        unionId: d || "",
        openId: f || "",
        phone: o || ""
      }, a.default.base.userInfo || {}) : u.default.user(a.default.base.loginInfo, a.default.base.userInfo), u.default.reportAuthOperation(!0, 1), i(t)
    })).catch((function(e) {
      s(e)
    }))
  }))
}
module.exports = {
  register: i,
  updateUserInfo: i
};