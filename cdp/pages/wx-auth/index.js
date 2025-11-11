var e = t(require("../../../D61A94F34CF6B1BFB07CFCF42A086AC2.js")),
  r = t(require("../../../0A66BE554CF6B1BF6C00D652EAF76AC2.js"));

function t(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
e.default.Page({
  data: {
    isUserOnly: !1,
    isReady: !1,
    inviteCode: ""
  },
  onLoad: function(e) {
    this.setData({
      inviteCode: e.inviteCode,
      isUserOnly: "true" === e.isUserOnly,
      isReady: !0,
      redirectUrl: e.redirectUrl ? decodeURIComponent(e.redirectUrl) : null,
      goTabbar: "true" === e.goTabbar
    })
  },
  onAuthReady: function() {
    var e = this.data,
      t = e.redirectUrl,
      a = e.goTabbar;
    t ? a ? r.default.$switchTab({
      url: this.data.redirectUrl
    }) : r.default.$redirectTo({
      url: this.data.redirectUrl
    }) : r.default.$navigateBack()
  }
});