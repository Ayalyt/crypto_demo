require("726488364CF6B1BF1402E03147696AC2.js");
var n, e = require("7F7F03844CF6B1BF19196B8389686AC2.js"),
  t = require("31D170254CF6B1BF57B71822C3C96AC2.js"),
  o = require("5D7B87204CF6B1BF3B1DEF27A1B66AC2.js"),
  i = require("BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = require("F9E424F04CF6B1BF9F824CF736786AC2.js");
n = Page, Page = function(e) {
  e = Object.assign({
    onShareAppMessage: function() {
      return {
        title: "欢迎来到FUNLIVE方隅",
        path: "/pages/service/service",
        imageUrl: "http://sce-dev-frstatic.oss-cn-shanghai.aliyuncs.com/miniprogram-activity/funlive/logo.png"
      }
    }
  }, e), n(e)
}, App({
  onLaunch: function(n) {
    try {
      zhuge.track("打开产品")
    } catch (n) {
      console.log("err", n)
    }
    var e = n.scene,
      t = n.referrerInfo;
    this.globalData.scene = e, this.globalData.currentOptions = n;
    var i = wx.getSystemInfoSync(),
      a = wx.getMenuButtonBoundingClientRect(),
      r = 750 / i.windowWidth,
      s = i.statusBarHeight,
      g = 2 * (a.top - i.statusBarHeight) + a.height,
      c = g + i.statusBarHeight,
      u = i.windowHeight * r,
      d = i.screenHeight * r,
      l = d - u;
    this.globalData.statusHeight = s, this.globalData.navigationHeight = c, this.globalData.windowWidth = i.windowWidth, this.globalData.windowHeight = u, this.globalData.screenHeight = d, this.globalData.tabBarHeight = l, this.globalData.navigationBarHeight = g, o.init({
      app: this,
      options: n,
      success: this.cdpReady
    }), this.globalSixData = {
      activityId: 44,
      isToRegister: !1
    }, t && t.token && wx.setStorage({
      key: "token",
      data: t.token
    }), this.refreshToken()
  },
  cdpReady: function(n) {
    var e = this,
      o = n.loginInfo,
      a = n.userInfo;
    this.triggerCdpOpenid(o.openId, o.unionId), this.handleUpdateUnionidByCDPuserId(o.openId, o.unionId), n.vip ? i.autoAuthLogin(a.id, n.sessionId, a.phone).then((function(o) {
      if (o) {
        i.saveMobileUserId(a.phone, a.id), e.setCdpReady(n);
        try {
          t.post({
            url: "/sync/data/sync/mini-program",
            data: {
              openId: n.loginInfo.openId,
              unionId: n.loginInfo.unionId,
              nickName: n.userInfo.nickname,
              mobile: n.userInfo.phone,
              avatar: n.userInfo.avatarImgUrl
            },
            showLoading: !0
          }).then((function(n) {
            console.log("/sync/data/sync/mini-program", n)
          }))
        } catch (n) {
          console.log("/sync/data/sync/mini-program", n)
        }
      }
    })) : this.setCdpReady(n)
  },
  setCdpReady: function(n) {
    wx.setStorageSync(a.CDPREADY, !0), wx.setStorageSync(a.OPENID, n.loginInfo.openId), wx.setStorageSync(a.UNIONID, n.loginInfo.unionId);
    var e = getCurrentPages(),
      t = e[e.length - 1];
    t && t.triggerCdpReady && t.triggerCdpReady(n)
  },
  triggerCdpOpenid: function(n, e) {
    var t = getCurrentPages(),
      o = t[t.length - 1];
    o && o.setOpenid && o.setOpenid(n, e)
  },
  refreshToken: function() {
    t.post({
      url: "/ac/token/refresh-token",
      handleError: "ALL",
      wholeResponse: !0
    }).then((function(n) {
      var e = (n && n.header || {})["X-Fun-Issue"];
      e && wx.setStorage({
        key: "token",
        data: e
      })
    })).catch((function(n) {
      console.log(n, "e2")
    }))
  },
  handleUpdateUnionidByCDPuserId: function(n, e) {
    var o = wx.getStorageSync("unionId"),
      i = wx.getStorageSync(a.USERID);
    i && e !== o && t.post({
      url: "/tiger/activity/updateUnionIdByUserId",
      data: {
        userId: i,
        openId: n,
        unionId: e
      }
    }).catch((function(n) {
      console.log("updateUnionIdByUserIderr", n)
    }))
  },
  getLocationInfo: function() {
    var n = this;
    return new Promise((function(e, t) {
      if (n.globalData.locationInfo) return e(n.globalData.locationInfo);
      n.wxGetLocation().then((function(n) {
        e(n)
      })).catch((function(n) {
        return t(n)
      }))
    }))
  },
  wxGetLocation: function() {
    return new Promise((function(n, e) {
      wx.getLocation({
        type: "wgs84",
        success: function(e) {
          n(e)
        },
        error: function(n) {
          e(n)
        }
      })
    }))
  },
  setLocation: function() {
    var n = this;
    n.wxGetLocation().then((function(e) {
      n.globalData.locationInfo = e
    }))
  },
  getPhoneNumber: function(n) {
    var e = this;
    return new Promise((function(t, o) {
      i.getOpenId({
        phoneNumber: wx.cloud.CloudID(n)
      }).then((function(n) {
        var i = (n.result.event.phoneNumber.data || {}).phoneNumber;
        if (i) {
          e.globalData.phoneNumber = i;
          try {
            wx.setStorageSync("phoneNumber", i), wx.setStorageSync("openId", n.result.openid), wx.setStorageSync("unionId", n.result.unionid)
          } catch (n) {
            console.log(n, "e3")
          }
          t({
            phoneNumber: i
          })
        } else o(n)
      })).catch((function(n) {
        o(n)
      }))
    }))
  },
  globalData: {
    scene: null,
    mobile: "",
    pagesContainer: {},
    statusHeight: 0,
    navigationHeight: 0,
    windowHeight: 0,
    tabBarHeight: 0,
    screenHeight: 0,
    locationInfo: null,
    userProfile: {},
    currentOptions: {}
  },
  doCdpInit: function() {
    var n = this;
    o.init({
      app: this,
      option: this.globalData.currentOptions,
      success: function(e) {
        var t = e.loginInfo;
        n.triggerCdpOpenid(t.openId, t.unionId), n.handleUpdateUnionidByCDPuserId(t.openId, t.unionId), n.setCdpReady(e)
      }
    })
  },
  loginVerification: function() {
    var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return new Promise((function(e) {
      wx.getStorageSync("isLogin") ? e(!0) : (e(!1), n && wx.navigateTo({
        url: "../login/login"
      }))
    }))
  }
});
try {
  App.zhuge.load(e.zhugeAppKey, {
    debug: e.zhugeDebug,
    serverUrl: e.zhugeUrl
  })
} catch (n) {
  console.log("error", n)
}