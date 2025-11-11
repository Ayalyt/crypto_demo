Component({
  properties: {
    time: {
      type: Number,
      value: 6e4
    },
    prefixDesc: {
      type: String,
      value: "倒计时"
    },
    completedText: {
      type: String,
      value: ""
    }
  },
  data: {},
  lifetimes: {
    ready: function() {
      this.update()
    }
  },
  methods: {
    update: function() {
      var t = this,
        e = this.properties.time,
        n = setInterval((function() {
          if (e <= 0) return clearInterval(n), t.triggerEvent("onCompleted", t), void t.setData({
            displayTimes: null
          });
          t.setData({
            displayTimes: t.transformTime(e)
          }), e -= 1e3
        }), 1e3)
    },
    transformTime: function(t) {
      if (!t) return null;
      t = parseInt(t / 1e3);
      var e = parseInt(t / 86400),
        n = parseInt(t / 3600 % 24),
        r = parseInt(t / 60 % 60),
        a = parseInt(t % 60),
        i = [];
      return e && i.push({
        val: e,
        unit: "天"
      }), n && i.push({
        val: n,
        unit: "时"
      }), 0 === e && (n || r) && i.push({
        val: r,
        unit: "分"
      }), 0 === e && 0 === n && (r || a) && i.push({
        val: a,
        unit: "秒"
      }), i
    },
    format: function(t, e) {
      return t < 10 ? "0".concat(t) : t
    }
  }
});