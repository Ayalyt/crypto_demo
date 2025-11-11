var r = require("FAEF0B244CF6B1BF9C8963239EC96AC2.js"),
  e = require("F9E424F04CF6B1BF9F824CF736786AC2.js"),
  t = require("5D4447224CF6B1BF3B222F2519B96AC2.js"),
  n = require("A6E3DAA64CF6B1BFC085B2A108496AC2.js");

function i(i, o, s) {
  var u = s.handleError,
    a = (s.wholeResponse, new r(i, o)),
    f = o.data,
    g = (void 0 === f ? {} : f).message,
    c = void 0 === g ? "系统维护中～" : g;
  if (65401001 === i && "function" == typeof t[i]) return n.getExceptionsFlag() || (n.setExceptionsFlag(!0), t[i](c)), a;
  if (u) {
    if (!0 === u || /^ALL$/i.test(u)) return a;
    if (Array.isArray(u) || (u = [u]), u.indexOf(i) > -1 || u.indexOf(i + "") > -1) return a
  }
  if (400 === i) return wx.setStorageSync(e.TOKEN, ""), wx.redirectTo({
    url: "/pages/login/login"
  }), a;
  if (401 === i) return wx.setStorageSync(e.TOKEN, ""), wx.redirectTo({
    url: "/pages/login/login"
  }), a;
  var l = t[i];
  if ("string" == typeof l) wx.showToast({
    title: l || "网络开小差，等会儿再试吧！",
    icon: "none"
  });
  else if ("function" == typeof l) return l(), a;
  return a
}
module.exports = {
  handleHttpError: function(r, e, t) {
    return i(r, e, t)
  },
  handleBusinessError: function(r, e, t) {
    return i(r, e, t)
  }
};