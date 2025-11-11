var t = require("../../@babel/runtime/helpers/slicedToArray"),
  e = /^(\d{4})([-/])(\d{2})\2(\d{2})$/,
  a = /^\d{12,13}$/;
Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    name: {
      type: String,
      value: ""
    },
    label: {
      type: String,
      value: ""
    },
    placeholder: {
      type: String,
      value: ""
    },
    required: {
      type: Boolean,
      value: !1
    },
    title: {
      type: String,
      value: ""
    },
    timestamp: {
      type: Boolean,
      value: !1
    },
    constellation: {
      type: Boolean,
      value: !1
    },
    start: {
      type: String,
      value: "1900-1-1"
    },
    end: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: "",
      observer: function(t, e, a) {
        t !== e && this.init()
      }
    }
  },
  data: {
    text: "",
    selectedIndex: [0, 0, 0],
    years: [],
    months: [],
    dates: [],
    startDate: null,
    endDate: null
  },
  lifetimes: {
    attached: function() {
      this.init()
    }
  },
  methods: {
    init: function() {
      var t, n = this.data,
        s = n.start,
        i = n.end,
        r = n.value,
        h = s,
        o = i;
      if (e.test(s) || (h = "1900-1-1"), !e.test(i)) {
        var l = new Date;
        o = "".concat(l.getFullYear(), "-").concat(l.getMonth() + 1, "-").concat(l.getDate())
      }
      if (a.test(r)) {
        var g = new Date(r);
        t = [g.getFullYear(), g.getMonth() + 1, g.getDate()]
      } else if (e.test(r)) t = r.split("-");
      else {
        var d = new Date;
        t = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
      }
      for (var u = h.split("-"), c = o.split("-"), D = parseInt(u[0]), v = parseInt(u[1]), p = parseInt(u[2]), m = parseInt(c[0]), y = parseInt(c[1]), f = parseInt(c[2]), x = parseInt(t[0]), M = parseInt(t[1]), I = parseInt(t[2]), w = [], S = D; S <= m; S++) w.push(S);
      var b = r ? this.getText(x, M, I) : "";
      this.setData({
        text: b,
        years: w,
        startDate: {
          year: D,
          month: v,
          date: p
        },
        endDate: {
          year: m,
          month: y,
          date: f
        },
        valueDate: {
          year: x,
          month: M,
          date: I
        }
      })
    },
    getText: function(t, e, a) {
      var n, s = this.data.constellation ? " " + ("魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * (n = e) - 2 * (a < "102223444433".charAt(n - 1) - -19), 2) + "座") : "";
      return "".concat(t, ".").concat(e, ".").concat(a).concat(s)
    },
    getMonthDates: function(t, e) {
      var a = new Date(t, e - 1, 1),
        n = new Date(t, e, 1);
      return Math.ceil((n.getTime() - a.getTime()) / 864e5)
    },
    getDates: function(t, e, a) {
      var n = this.getMonthDates(t, e),
        s = a >= 0 ? n - a : -a;
      Math.abs(a);
      return new Array(s).fill(void 0, 0).map((function(t, e) {
        return a > 0 ? e + 1 + a : e + 1
      }))
    },
    getMonths: function(t) {
      return new Array(t >= 0 ? 12 - t : -t).fill(void 0, 0).map((function(e, a) {
        return t > 0 ? a + 1 + t : a + 1
      }))
    },
    onShow: function() {
      var t, e, a, n = this.data,
        s = n.valueDate,
        i = n.startDate,
        r = n.endDate,
        h = n.years,
        o = i.year,
        l = i.month,
        g = i.date,
        d = r.year,
        u = r.month,
        c = r.date,
        D = s.year,
        v = s.month,
        p = s.date,
        m = [],
        y = [];
      D === o ? (m = this.getMonths(l - 1), y = v === l ? this.getDates(D, v, g - 1) : this.getDates(D, v, 0)) : D === d ? (m = this.getMonths(-u), y = v === u ? this.getDates(D, v, -c) : this.getDates(D, v, 0)) : (m = this.getMonths(0), y = this.getDates(D, v, 0)), t = h.indexOf(D), e = m.indexOf(v), a = y.indexOf(p), this.setData({
        show: !0,
        months: m,
        dates: y
      }), this.setData({
        selectedIndex: [t, e, a]
      }), this.triggerEvent("show")
    },
    onColumnChange: function(e) {
      var a, n = t(e.detail.value, 3),
        s = n[0],
        i = n[1],
        r = n[2],
        h = this.data,
        o = h.years,
        l = h.startDate,
        g = h.endDate,
        d = l.year,
        u = l.month,
        c = l.date,
        D = g.year,
        v = g.month,
        p = g.date,
        m = o[s],
        y = [],
        f = [];
      m === d ? f = (a = (y = this.getMonths(u - 1))[i = i > y.length - 1 ? y.length - 1 : i]) === u ? this.getDates(m, a, c - 1) : this.getDates(m, a, 0) : m === D ? f = (a = (y = this.getMonths(-v))[i = i > y.length - 1 ? y.length - 1 : i]) === v ? this.getDates(m, a, -p) : this.getDates(m, a, 0) : (a = (y = this.getMonths(0))[i = i > y.length - 1 ? y.length - 1 : i], f = this.getDates(m, a, 0)), r = r > f.length - 1 ? f.length - 1 : r, this.setData({
        months: y,
        dates: f,
        selectedIndex: [s, i, r]
      })
    },
    onClose: function() {
      this.setData({
        show: !1
      }), this.triggerEvent("hide")
    },
    onConfirm: function() {
      var e = this.data,
        a = e.name,
        n = e.selectedIndex,
        s = e.years,
        i = e.months,
        r = e.dates,
        h = t(n, 3),
        o = h[0],
        l = h[1],
        g = h[2],
        d = s[o],
        u = i[l],
        c = r[g],
        D = this.getText(d, u, c),
        v = "".concat(d, "-").concat(u, "-").concat(c);
      this.setData({
        show: !1,
        text: D,
        valueDate: {
          year: d,
          month: u,
          date: c
        }
      }), this.triggerEvent("change", {
        name: a,
        value: v,
        text: D,
        data: {
          value: v,
          text: D
        }
      })
    }
  }
});