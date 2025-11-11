var e = require("../../31D170254CF6B1BF57B71822C3C96AC2.js"),
  o = require("../../F9E424F04CF6B1BF9F824CF736786AC2.js"),
  a = require("../../962C10504CF6B1BFF04A7857F7996AC2.js");
Page({
  data: {
    mobile: "",
    gender: "1",
    hasPassword: !1,
    userInfo: {}
  },
  onLoad: function(e) {},
  onReady: function() {},
  onShow: function() {
    this.getUserInfo()
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  getUserInfo: function() {
    var o = this;
    e.post({
      url: "/member/user/query/v2"
    }).then((function(e) {
      var n = e.mobile,
        t = void 0 === n ? "" : n,
        i = e.hasPassword,
        s = void 0 !== i && i,
        r = e.gender;
      t = a.mask(t), o.setData({
        userInfo: e,
        mobile: t,
        gender: r,
        hasPassword: s
      })
    }))
  },
  onShowInfo: function() {
    wx.navigateTo({
      url: "/packageA/pages/user-info/user-info"
    })
  },
  onHandlePwd: function() {
    this.data.hasPassword ? wx.navigateTo({
      url: "/packageA/pages/change-pwd/change-pwd"
    }) : wx.navigateTo({
      url: "/packageA/pages/set-pwd/set-pwd"
    })
  },
  onChangeMobile: function() {
    var o = this.data.userInfo.mobile;
    e.post({
      url: "/mp-living/appeal/query-appeal-status",
      data: {
        appealMobile: o
      },
      showLoading: !0
    }).then((function(e) {
      e && e.status && "2" != e.status && "4" != e.status ? wx.navigateTo({
        url: "/packageA/pages/forget-pwd-appeal-detail/forget-pwd-appeal-detail?mobile=" + o
      }) : wx.navigateTo({
        url: "/packageA/pages/forget-pwd-explain/forget-pwd-explain?mobile=" + o
      })
    }))
  },
  goInvoice: function() {
    wx.navigateTo({
      url: "/packageA/pages/invoice/detail/detail"
    })
  },
  onLogout: function() {
    var e = this;
    wx.showModal({
      content: "您确定要退出登录吗？",
      cancelText: "关闭",
      confirmColor: "#E0AE01",
      cancelColor: "#949AA7",
      success: function(o) {
        o.confirm && e.logout()
      }
    })
  },
  logout: function() {
    wx.removeStorage({
      key: "token",
      success: function(e) {
        for (var a in wx.switchTab({
            url: "/pages/service/service"
          }), o) o.hasOwnProperty(a) && wx.removeStorage({
          key: o[a]
        })
      }
    })
  }
});