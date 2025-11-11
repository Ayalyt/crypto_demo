Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    type: {
      type: String,
      value: "day"
    },
    data: {
      type: Object,
      value: {},
      observer: function(t, e, a) {
        if (t) {
          var n = t.endTime,
            i = t.currentTime;
          this.countDown(n, i)
        }
      }
    }
  },
  lifetimes: {
    attached: function() {},
    detached: function() {
      clearInterval(this.data._timer)
    }
  },
  data: {
    day: "0",
    hour: "00",
    minute: "00",
    second: "00",
    _timer: null
  },
  methods: {
    paddingTime: function(t) {
      return 2 === t.length ? t : "0".concat(t)
    },
    countDown: function(t, e) {
      var a = this.data._timer;
      a && clearInterval(a);
      var n = this,
        i = e,
        r = setInterval((function() {
          var e = (t - i) / 1e3,
            a = e <= 0 ? 0 : Math.floor(e / 60 / 60 / 24),
            r = e <= 0 ? 0 : Math.floor(e / 60 / 60 % 24),
            o = e <= 0 ? 0 : Math.floor(e / 60 % 60),
            d = e <= 0 ? 0 : Math.floor(e % 60);
          i += 1e3, n.setData({
            day: a,
            hour: n.paddingTime(String(r)),
            minute: n.paddingTime(String(o)),
            second: n.paddingTime(String(d))
          }), e <= 0 && (clearInterval(n.data._timer), n.triggerEvent("end"))
        }), 1e3);
      this.setData({
        _timer: r
      })
    }
  }
});