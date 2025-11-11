var e = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  t = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  o = require("../../51EB7A564CF6B1BF378D12510E6A6AC2.js"),
  a = require("../../F9E424F04CF6B1BF9F824CF736786AC2.js"),
  n = o.Rules,
  i = o.Validations,
  s = ["mobile", "otp"],
  c = {
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
      len: 4,
      message: "短信验证码错误"
    }]
  },
  l = getApp();
Page({
  data: {
    mobile: "",
    otp: "",
    disabled: !0,
    closeCurrent: !1,
    jumpUrl: "",
    jumpMethod: "reLaunch",
    isSeleLive: !1
  },
  onLoad: function(t) {
    this.checkMobile(t.mobile), t.closeCurrent && this.setData({
      closeCurrent: t.closeCurrent
    }), t.isSeleLive && this.setData({
      isSeleLive: t.isSeleLive
    }), t.jumpUrl && this.setData({
      jumpUrl: t.jumpUrl
    }), t.jumpMethod && this.setData({
      jumpMethod: t.jumpMethod
    });
    try {
      (0, e.zhugeTrack)("进入登录页面")
    } catch (e) {
      console.log(e)
    }
  },
  onReady: function() {},
  onShow: function() {
    var e = l.globalData.mobile;
    e ? this.setData({
      mobile: e
    }) : this.restoreCache()
  },
  onHide: function() {
    this.setData({
      otp: "",
      disabled: !0
    })
  },
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  checkMobile: function(e) {
    e && this.setData({
      mobile: e
    })
  },
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
  onPwdLogin: function() {
    wx.navigateTo({
      url: "/pages/pwd-login/pwd-login?closeCurrent=" + this.data.closeCurrent
    })
  },
  cantReceiveCode: function() {
    try {
      (0, e.zhugeTrack)("登录页面-点击无法接收验证码")
    } catch (e) {
      console.log(e)
    }
    var t = this.data.mobile,
      o = "/packageA/pages/forget-pwd/forget-pwd";
    t && /^1\d{10}$/.test(t) && (o += "?mobile=" + t), wx.navigateTo({
      url: o
    })
  },
  getModel: function() {
    var e = this,
      t = {};
    return s.forEach((function(o) {
      t[o] = e.data[o]
    })), t
  },
  onInput: function(e) {
    var t = e.detail.value.trim(),
      a = e.target.dataset.field;
    "mobile" === a && (l.globalData.mobile = t);
    var n = Object.assign({}, this.data);
    n[a] = t, n.disabled = o.validate(c, s, n).length > 0, this.setData(n)
  },
  onBlur: function(e) {
    var t = e.detail.value.trim();
    ("" === t || i.isMobile(t)) && wx.setStorage({
      key: "login_mobile",
      data: t
    })
  },
  onLogin: function() {
    var n = this;
    try {
      (0, e.zhugeTrack)("登录页面-点击登录")
    } catch (e) {
      console.log(e)
    }
    var i = this.getModel(),
      r = o.validate(c, s, i);
    if (r.length) return wx.showToast({
      title: r[0].message,
      icon: "none"
    }), !1;
    t.post({
      url: "/mp-ac/authentication/verify-mobile-otp/v2",
      data: i,
      wholeResponse: !0
    }).then((function(t) {
      var o = t.data.data,
        s = void 0 === o ? {} : o,
        c = s.cdpMemberId,
        r = s.cdpUserId;
      (0, e.zhugeTrack)("登录成功");
      var u = (t && t.header || {})["X-Fun-Issue"],
        d = n.data,
        h = d.closeCurrent,
        g = d.jumpUrl,
        m = d.jumpMethod,
        p = d.isSeleLive;
      if (u) {
        try {
          wx.setStorageSync(a.ISLOGIN, !0), wx.setStorageSync(a.LOGINMOBILE, i.mobile), (0, e.zhugeIdentify)(c || r), wx.getStorageSync(a.OPENID) || l.doCdpInit()
        } catch (e) {
          console.log("e", e)
        }
        wx.setStorage({
          key: "token",
          data: u,
          success: function() {
            if (wx.showToast({
                title: "登录成功",
                icon: "none",
                duration: 1500
              }), p) {
              var e = encodeURIComponent("lease-detail");
              wx.redirectTo({
                url: "/pages/h5-container/index?webPath=".concat(e)
              })
            } else g ? "reLaunch" === m ? setTimeout((function() {
              console.log("jumll", decodeURIComponent(g)), wx.reLaunch({
                url: decodeURIComponent(g)
              })
            }), 1500) : "navigateTo" === m && setTimeout((function() {
              wx.navigateTo({
                url: decodeURIComponent(g)
              })
            }), 1500) : h ? wx.navigateBack({
              delta: 1
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
    })).catch((function(t) {
      try {
        t.data && t.data.data && 180003 === t.data.data.code ? (0, e.zhugeTrack)("登录失败", {
          "失败原因": "验证码错误"
        }) : (0, e.zhugeTrack)("登录失败", {
          "失败原因": "不被允许的用户"
        })
      } catch (e) {
        console.log(e)
      }
    }))
  },
  handleLogin: function(o) {
    t.post({
      url: "/ac/authentication/login-otp",
      data: o,
      wholeResponse: !0
    }).then((function(t) {
      (0, e.zhugeTrack)("登录成功");
      var o = (t && t.header || {})["X-Fun-Issue"];
      o ? wx.setStorage({
        key: "token",
        data: o,
        success: function() {
          wx.showToast({
            title: "登录成功",
            icon: "none",
            duration: 1500
          }), setTimeout((function() {
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
      }) : wx.showToast({
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