var e = i(require("../../03F505464CF6B1BF65936D4171E96AC2.js")),
  t = i(require("../../F9E424F04CF6B1BF9F824CF736786AC2.js")),
  o = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js");

function i(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var r = ["/pages/brand/brand", "/pages/store/index", "/pages/found/found", "/pages/discover/discover", "/pages/service/service"];
Component({
  properties: {
    refresh: {
      type: Boolean,
      value: !1,
      observer: function(e, t) {
        e !== t && this.judeGetAdType()
      }
    }
  },
  data: {
    imageUrl: "",
    linkUrl: "",
    show: !1,
    isLogin: !1
  },
  methods: {
    getAd: function(t, i) {
      var r = this;
      e.default.post({
        url: i,
        handleError: "ALL",
        data: {
          openid: t
        }
      }).then((function(e) {
        if (1 !== e.flag && e.imageUrl) {
          try {
            (0, o.zhugeTrack)("开屏弹窗弹出")
          } catch (e) {
            console.log(e)
          }
          r.setData({
            imageUrl: e.imageUrl,
            linkUrl: e.linkUrl,
            show: !0
          })
        }
      })).catch((function(e) {
        r.setData({
          show: !1
        })
      }))
    },
    jump: function() {
      try {
        (0, o.zhugeTrack)("开屏弹窗点击")
      } catch (e) {
        console.log(e)
      }
      this.closePopup();
      var e = this.data.linkUrl,
        t = String(e),
        i = 0 === t.indexOf("/") ? t : "/" + t; - 1 === r.indexOf(i) ? wx.navigateTo({
        url: i
      }) : wx.switchTab({
        url: i
      })
    },
    closePopup: function() {
      this.setData({
        show: !1
      }), this.triggerEvent("close", this.data.linkUrl)
    },
    judeGetAdType: function() {
      var e = wx.getStorageSync(t.default.ISLOGIN),
        o = wx.getStorageSync(t.default.OPENID),
        i = e ? "homepage/config/open/popup/info" : "fun/homepage/open/popup/info";
      o && this.getAd(o, i)
    }
  }
});