var e = require("962C10504CF6B1BFF04A7857F7996AC2.js");

function t(e, t) {
  if (!t) return t;
  "string" == typeof t ? t = new Date(Date.parse(t)) : "number" == typeof t && (t = new Date(t)), e || (e = "yyyy-MM-dd hh:mm:ss");
  var r = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "q+": Math.floor((t.getMonth() + 3) / 3),
    S: t.getMilliseconds()
  };
  for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? r[n] : ("00" + r[n]).substr(("" + r[n]).length)));
  return e
}
module.exports = {
  Mobile: e,
  dateFormatter: t,
  replaceString: function(e, t, r, n) {
    if (r + n > e.length) return "";
    for (var a = e.substr(0, r), o = e.substr(r + n), g = "", s = 0; s < n; s++) g += t;
    return a + g + o
  },
  formatDateForWeekString: function(e) {
    return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][e.getDay()]
  },
  formatDateForColloquialString: function(e) {
    for (var r = "", n = t("yyyy-MM-dd", e), a = ["今天", "明天", "后天"], o = new Date, g = 0; g < a.length; g++) {
      var s = 24 * g * 60 * 60 * 1e3;
      if (t("yyyy-MM-dd", new Date(o.getTime() + s)) == n) {
        r = a[g];
        break
      }
    }
    return r
  }
};