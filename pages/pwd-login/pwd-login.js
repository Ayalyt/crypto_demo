var e = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  t = require("../../51EB7A564CF6B1BF378D12510E6A6AC2.js"),
  o = require("../../F9E424F04CF6B1BF9F824CF736786AC2.js"),
  a = t.Rules,
  i = t.Validations,
  n = ["mobile", "password"],
  s = {
    mobile: [{
      rule: a.isNotEmpty,
      message: "请输入手机号码"
    }, {
      rule: a.isMobile,
      message: "手机号码格式错误"
    }],
    password: [{
      rule: a.isNotEmpty,
      message: "手机号码或者密码错误"
    }, {
      rule: a.isLength,
      min: 8,
      max: 20,
      message: "手机号码或者密码错误"
    }]
  },
  r = getApp();
Page({
  data: {
    mobile: "",
    password: "",
    disabled: !0,
    closeCurrent: !1
  },
  onLoad: function(e) {
    e.closeCurrent && this.setData({
      closeCurrent: e.closeCurrent
    })
  },
  onReady: function() {},
  onShow: function() {
    var e = r.globalData.mobile;
    e ? this.setData({
      mobile: e
    }) : this.restoreCache()
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  restoreCache: function() {
    var e = this;
    wx.getStorage({
      key: "login_mobile",
      success: function(t) {
        var o = t.data;
        i.isMobile(o) && e.setData({
          mobile: o
        })
      }
    })
  },
  onOtpLogin: function() {
    wx.navigateBack()
  },
  onRegister: function() {
    wx.navigateTo({
      url: "/pages/register/register"
    })
  },
  getModel: function() {
    var e = this,
      t = {};
    return n.forEach((function(o) {
      t[o] = e.data[o]
    })), t
  },
  onInput: function(e) {
    var o = e.detail.value.trim(),
      a = e.target.dataset.field;
    "mobile" === a && (r.globalData.mobile = o);
    var i = Object.assign({}, this.data);
    i[a] = o, i.disabled = t.validate(s, n, i).length > 0, this.setData(i)
  },
  onBlur: function(e) {
    var t = e.detail.value.trim();
    ("" === t || i.isMobile(t)) && wx.setStorage({
      key: "login_mobile",
      data: t
    })
  },
  onForgetPwd: function() {
    var e = this.data.mobile,
      t = "/packageA/pages/forget-pwd/forget-pwd";
    e && /^1\d{10}$/.test(e) && (t += "?mobile=" + e), wx.navigateTo({
      url: t
    })
  },
  onLogin: function() {
    var a = this,
      i = this.getModel(),
      r = t.validate(s, n, i);
    if (r.length) return wx.showToast({
      title: r[0].message,
      icon: "none"
    }), !1;
    i.registerSource = "WECHAT", e.post({
      url: "/ac/authentication/login",
      data: i,
      wholeResponse: !0
    }).then((function(e) {
      var t = (e && e.header || {})["X-Fun-Issue"];
      try {
        wx.setStorageSync(o.ISLOGIN, !0)
      } catch (e) {
        console.log("e", e)
      }
      if (t) {
        var i = a.data.closeCurrent;
        wx.setStorage({
          key: "token",
          data: t,
          success: function() {
            wx.showToast({
              title: "登录成功",
              icon: "none",
              duration: 1500
            }), i ? wx.navigateBack({
              delta: 2
            }) : setTimeout((function() {
              wx.reLaunch({
                url: "/pages/service/service"
              })
            }), 1500)
          },
          fail: function() {
            wx.showToast({
              icon: "none",
              title: "登录失败，请重试～"
            })
          }
        })
      } else wx.showToast({
        icon: "none",
        title: "登录失败，请重试～"
      })
    }))
  },
  onShowProtocol: function() {
    wx.navigateTo({
      url: "/packageA/pages/register-protocol/register-protocol"
    })
  }
});