require("../../@babel/runtime/helpers/Arrayincludes");
var e, t = (e = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js")) && e.__esModule ? e : {
  default: e
};
var n, o = ["pages/brand/brand", "pages/store/index", "pages/found/found", "pages/discover/discover", "pages/service/service"],
  i = new Set,
  a = new Set;
wx.onNeedPrivacyAuthorization && wx.onNeedPrivacyAuthorization((function(e) {
  console.log("触发 onNeedPrivacyAuthorization", e), "function" == typeof n && n(e)
}));
var r = function(e) {
  a.forEach((function(t) {
    e !== t && t()
  }))
};
Component({
  data: {
    privacyContractName: "",
    agreed: !1,
    paddingBottom: 48,
    innerShow: !1
  },
  lifetimes: {
    attached: function() {
      var e = this,
        t = function() {
          e.disPopUp()
        };
      n = function(n) {
        i.add(n), e.popUp(), r(t)
      }, this.closePopUp = t, a.add(this.closePopUp)
    },
    detached: function() {
      a.delete(this.closePopUp)
    }
  },
  pageLifetimes: {
    show: function() {
      var e = this;
      this.getPrivacySettings(), this.getPaddingBottom(), this.closePopUp && (n = function(t) {
        i.add(t), e.popUp(), r(e.closePopUp)
      })
    }
  },
  methods: {
    getPrivacySettings: function() {
      var e, n = this;
      e = wx.getAppBaseInfo ? wx.getAppBaseInfo().SDKVersion : wx.getSystemInfoSync().SDKVersion, t.default.compareVersion(e, "2.32.3") >= 0 && wx.getPrivacySetting({
        success: function(e) {
          console.log("getPrivacySetting", e), "getPrivacySetting:ok" == e.errMsg && n.setData({
            innerShow: e.needAuthorization
          })
        }
      })
    },
    getPaddingBottom: function() {
      var e = getCurrentPages(),
        t = e[e.length - 1];
      o.includes(t.route) && this.setData({
        paddingBottom: 158
      })
    },
    openPrivacyContract: function() {
      wx.openPrivacyContract({
        fail: function() {
          wx.showToast({
            title: "遇到错误",
            icon: "error"
          })
        }
      })
    },
    handleAgree: function(e) {
      this.disPopUp(), i.forEach((function(e) {
        e({
          event: "agree",
          buttonId: "agree-btn"
        })
      })), i.clear()
    },
    rejectAgreement: function(e) {
      this.disPopUp(), i.forEach((function(e) {
        e({
          event: "disagree"
        })
      })), i.clear()
    },
    popUp: function() {
      !1 === this.data.innerShow && this.setData({
        innerShow: !0
      })
    },
    disPopUp: function() {
      !0 === this.data.innerShow && this.setData({
        innerShow: !1
      })
    },
    hanldeAgreeAgreement: function() {
      this.setData({
        agreed: !this.data.agreed
      })
    },
    hanldeNoAgreeThenAgree: function() {
      wx.showToast({
        title: "请勾选隐私协议",
        icon: "none"
      })
    }
  }
});