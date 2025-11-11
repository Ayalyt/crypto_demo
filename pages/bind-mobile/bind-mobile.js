var e = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  t = require("../../51EB7A564CF6B1BF378D12510E6A6AC2.js"),
  o = require("../../962C10504CF6B1BFF04A7857F7996AC2.js"),
  n = t.Rules,
  i = ["mobile", "otp"],
  a = {
    mobile: [{
      rule: n.isNotEmpty,
      message: "请输入手机号码"
    }, {
      rule: n.isMobile,
      message: "手机号码格式错误"
    }],
    otp: [{
      rule: n.isNotEmpty,
      message: "短信验证码错误"
    }, {
      rule: n.isNumber,
      len: 6,
      message: "短信验证码错误"
    }]
  };
Page({
  data: {
    mobile: "",
    otp: "",
    maskedMobile: "",
    disabled: !0,
    resetOtp: !1,
    success: !1
  },
  onLoad: function(e) {
    this.getUserInfo()
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  getUserInfo: function() {
    var t = this;
    e.post({
      url: "/member/user/query/v2"
    }).then((function(e) {
      var n = e.mobile,
        i = o.mask(n);
      t.oldMobile = n, t.userId = e.userId, t.setData({
        maskedMobile: i
      })
    }))
  },
  onGoFeedback: function() {
    wx.navigateTo({
      url: "/pages/feedback/detail/detail"
    })
  },
  getModel: function() {
    var e = this,
      t = {};
    return i.forEach((function(o) {
      t[o] = e.data[o]
    })), t
  },
  validate: function() {
    var e = this.getModel(),
      o = t.validate(a, i, e);
    return !o.length || (wx.showToast({
      title: o[0].message,
      icon: "none"
    }), !1)
  },
  onInput: function(e) {
    var o = e.detail.value.trim(),
      n = e.target.dataset.field,
      s = Object.assign({}, this.data);
    s[n] = o, s.disabled = t.validate(a, i, s).length > 0, this.setData(s)
  },
  onOtpSent: function() {
    wx.showToast({
      title: "验证码已发送",
      icon: "none"
    })
  },
  onChangeMobile: function() {
    var t = this;
    if (this.validate()) {
      var o = this.getModel();
      o.mobile !== this.oldMobile ? (o.userId = this.userId, e.post({
        url: "/ac/user/change-mobile",
        data: o,
        handleError: 20008
      }).then((function(e) {
        t.setData({
          success: !0
        })
      })).catch((function(e) {
        20008 === e.code && wx.showModal({
          content: "手机号已存在，若是您的手机号可直接去登录",
          confirmText: "去登录",
          cancelText: "好的",
          success: function(e) {
            e.confirm && wx.navigateTo({
              url: "/pages/login/login"
            })
          }
        })
      }))) : wx.showToast({
        title: "您输入的新旧手机号相同，请重新输入新手机号",
        icon: "none"
      })
    }
  },
  onBack: function() {
    wx.navigateBack()
  }
});