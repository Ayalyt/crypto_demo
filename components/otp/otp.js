var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  e = require("../../ABE2B3374CF6B1BFCD84DB308E9A6AC2.js");
Component({
  properties: {
    text: {
      type: String,
      value: "获取验证码"
    },
    countdown: {
      type: Number,
      value: 60
    },
    mobile: {
      type: String,
      value: ""
    },
    type: {
      type: String,
      value: "LOGIN"
    },
    url: {
      type: String,
      value: "ac/authentication/generate-otp/v2"
    },
    reset: {
      type: Boolean,
      value: !1,
      observer: function(t, e, n) {
        t !== e && this.reset()
      }
    }
  },
  countdown: 60,
  data: {
    status: "init"
  },
  lifetimes: {
    attached: function() {
      this.countdown = this.data.countdown
    },
    detached: function() {
      clearTimeout(this.timeInterval)
    }
  },
  methods: {
    onClick: function() {
      var n = this,
        i = this.countdown,
        a = this.data,
        o = a.status,
        s = a.mobile,
        u = a.type,
        r = a.url;
      "init" === o && (s.trim() ? e.isMobile(s) ? (this.setData({
        status: "sending",
        text: "发送中..."
      }), t.post({
        url: r,
        data: {
          mobile: s,
          otpType: u
        }
      }).then((function() {
        n.setData({
          status: "sent",
          text: i + "s"
        }), n.doCountdown(), n.triggerEvent("sent")
      })).catch((function() {
        n.setData({
          status: "init",
          text: "获取验证码"
        })
      }))) : wx.showToast({
        title: "手机号码格式错误",
        icon: "none"
      }) : wx.showToast({
        title: "请输入手机号码",
        icon: "none"
      }))
    },
    doCountdown: function() {
      var t = this;
      this.timeInterval || (this.timeInterval = setInterval((function() {
        t.countdown--;
        var e = t.countdown;
        e < 1 ? t.reset() : t.setData({
          text: "".concat(e, "s")
        })
      }), 1e3))
    },
    reset: function() {
      clearInterval(this.timeInterval), this.timeInterval = null, this.countdown = this.data.countdown, this.setData({
        status: "init",
        text: "获取验证码"
      })
    }
  }
});