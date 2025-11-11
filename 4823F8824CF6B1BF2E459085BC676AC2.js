Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = {
  format: function(e) {
    var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd",
      a = {
        "M+": e.getMonth() + 1,
        "d+": e.getDate(),
        "h+": e.getHours(),
        "m+": e.getMinutes(),
        "s+": e.getSeconds(),
        "q+": Math.floor((e.getMonth() + 3) / 3),
        S: e.getMilliseconds(),
        w: "日一二三四五六".charAt(e.getDay())
      };
    for (t in n = n.replace(/y{4}/, e.getFullYear()).replace(/y{2}/, e.getFullYear().toString().substring(2)), a) r = new RegExp(t), n = n.replace(r, o);

    function o(e) {
      return 1 === e.length ? a[t] : ("00" + a[t]).substr(("" + a[t]).length)
    }
    return n
  },
  addDays: function(e, t) {
    return new Date(e.getTime() + 864e5 * t)
  },
  appendZero: function(e) {
    return e < 10 ? "0" + e : e
  },
  getDay: function(e) {
    var r = new Date,
      n = r.getTime() + 864e5 * e;
    r.setTime(n);
    var a = r.getFullYear(),
      o = r.getMonth(),
      g = r.getDate();
    return a + "-" + (o = t(o + 1)) + "-" + (g = t(g))
  },
  getCurYearDate: function() {
    var e = new Date,
      t = e.getFullYear(),
      r = e.getMonth() + 1,
      n = new Date(t, r, 0).getDate();
    return r < 10 && (r = "0" + r), {
      year: t,
      month: r,
      monthDay: n
    }
  }
};

function t(e) {
  var t = e;
  return 1 === e.toString().length && (t = "0" + e), t
}
exports.default = e;