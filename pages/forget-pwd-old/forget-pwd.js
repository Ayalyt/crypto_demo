var e = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  t = require("../../51EB7A564CF6B1BF378D12510E6A6AC2.js"),
  o = t.Rules,
  a = ["mobile", "otp"],
  n = {
    mobile: [{
      rule: o.isNotEmpty,
      message: "请输入手机号码"
    }, {
      rule: o.isMobile,
      message: "手机号码格式错误"
    }],
    otp: [{
      rule: o.isNotEmpty,
      message: "短信验证码错误"
    }, {
      rule: o.isNumber,
      len: 6,
      message: "短信验证码错误"
    }],
    password: [{
      rule: o.isNotEmpty,
      message: "请输入密码"
    }, {
      rule: o.isPassword,
      len: 6,
      message: "请输入有效密码"
    }]
  };
Page({
  data: {
    mobile: "",
    otp: "",
    disabled: !0
  },
  onLoad: function(e) {
    var t = e.mobile;
    t && this.setData({
      mobile: t
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  getModel: function() {
    var e = this,
      t = {};
    return a.forEach((function(o) {
      t[o] = e.data[o]
    })), t
  },
  onLogin: function() {
    wx.navigateBack()
  },
  onInput: function(e) {
    var o = e.detail.value.trim(),
      i = e.target.dataset.field,
      s = Object.assign({}, this.data);
    s[i] = o, s.disabled = t.validate(n, a, s).length > 0, this.setData(s)
  },
  onNext: function() {
    var o = this.getModel(),
      i = t.validate(n, a, o);
    if (i.length) return wx.showToast({
      title: i[0].message,
      icon: "none"
    }), !1;
    e.post({
      url: "/ac/authentication/forget-password",
      data: o,
      wholeResponse: !0
    }).then((function(e) {
      var t = (e && e.header || {})["X-Fun-Issue"];
      wx.setStorage({
        key: "token",
        data: t,
        success: function() {
          wx.navigateTo({
            url: "/packageA/pages/set-pwd/set-pwd"
          })
        }
      })
    }))
  },
  onShowProtocol: function() {
    wx.navigateTo({
      url: "/packageA/pages/register-protocol/register-protocol"
    })
  }
});