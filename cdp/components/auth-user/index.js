var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = r(require("../../../DF957B574CF6B1BFB9F31350AEB66AC2.js")),
  n = r(require("../../../D0D16E174CF6B1BFB6B7061065376AC2.js")),
  a = r(require("../../../0A66BE554CF6B1BF6C00D652EAF76AC2.js")),
  o = r(require("../../../D61A94F34CF6B1BFB07CFCF42A086AC2.js")),
  s = r(require("../../../7EFBD0924CF6B1BF189DB89595076AC2.js"));
r(require("../../../03F505464CF6B1BF65936D4171E96AC2.js"));

function r(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
o.default.Component({
  options: {
    multipleSlots: !0
  },
  properties: {
    getUserInfoText: {
      type: String,
      value: "同意授权"
    },
    getPhoneNumberText: {
      type: String,
      value: "同意授权"
    },
    isUserOnly: {
      type: Boolean,
      value: !1
    },
    isPhoneOnly: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    userInfo: null,
    phoneEncryptedInfo: null,
    userEncryptedInfo: null,
    showAuthPhone: !1,
    showAuthUserInfo: !1,
    isAuthorited: !1
  },
  on: {
    stateChange: function(e) {
      e && "logged" == e.key && 1 == e.val && this.init()
    }
  },
  methods: {
    onGetPhoneNumber: function(e) {
      var t = this,
        a = e.detail,
        o = void 0 === a ? {} : a,
        r = o.iv,
        u = o.encryptedData,
        i = o.errMsg;
      r && u ? (this.setData({
        phoneEncryptedInfo: {
          iv: r,
          encryptData: u
        }
      }), this.apiRegister(this.data.phoneEncryptedInfo).then((function(e) {
        if (t.updateLocalUserInfo(e.data), !n.default.base.registered) {
          var a = n.default.base.activityInfo.id ? JSON.parse(JSON.stringify(n.default.base.activityInfo)) : null;
          s.default.registerSuccess(e.data.id, a)
        }
        n.default.base.activityInfo = {}, n.default.base.registered = !0;
        var o = e.data || {},
          r = o.wxUnionId,
          u = o.wxOpenId,
          i = o.phone;
        u ? s.default.user({
          unionId: r || "",
          openId: u || "",
          phone: i || ""
        }, n.default.base.userInfo || {}) : s.default.user(n.default.base.loginInfo, n.default.base.userInfo), s.default.reportAuthOperation(!0, 1), t.triggerEvent("onAuthorited", {
          userInfo: n.default.base.userInfo,
          loginInfo: n.default.base.loginInfo,
          sessionId: n.default.base.sessionId,
          storeVO: n.default.base.storeVO
        }), t.data.isPhoneOnly ? t.isAuthorited() : (t.setData({
          showAuthPhone: !1,
          showAuthUserInfo: !0
        }), console.log(t.data))
      })).catch((function(e) {
        console.log(e)
      }))) : console.error("用户拒绝授权手机号", i)
    },
    onGetUserInfo: function() {
      var t = this;
      wx.getUserProfile({
        desc: "用于完善会员资料",
        success: function(a) {
          var o = a.iv,
            r = a.encryptedData,
            u = a.userInfo,
            i = {};
          u && (i.nickname = u.nickName, i.wxNickname = u.nickName, i.avatarImgUrl = u.avatarUrl), o && r ? (t.setData({
            userEncryptedInfo: {
              infoIv: o,
              infoEncryptData: r
            },
            userInfo: i
          }), console.log(t.data), t.apiRegister(e(e({}, t.data.userEncryptedInfo), t.data.userInfo)).then((function(e) {
            var a = e.data || {},
              o = a.wxUnionId,
              r = a.wxOpenId,
              u = a.phone;
            r ? s.default.user({
              unionId: o || "",
              openId: r || "",
              phone: u || ""
            }, n.default.base.userInfo || {}) : s.default.user(n.default.base.loginInfo, n.default.base.userInfo), t.updateLocalUserInfo(e.data), s.default.reportAuthOperation(!0, 1), t.isAuthorited()
          })).catch((function(e) {
            console.log(e)
          }))) : console.error("用户拒绝授权用户信息")
        }
      })
    },
    updateLocalUserInfo: function(t) {
      n.default.base.userInfo = e(e({}, n.default.base.userInfo), t), n.default.base.loginInfo = e(e({}, n.default.base.loginInfo), t), n.default.base.wxUserInfo = e(e({}, n.default.base.wxUserInfo), t)
    },
    onRejectAuth: function() {
      a.default.$navigateBack()
    },
    onRejectInfoAuth: function() {
      a.default.$navigateBack()
    },
    apiRegister: function(e) {
      return a.default.request({
        url: t.default.login.register,
        method: "POST",
        data: e
      })
    },
    isAuthorited: function() {
      this.setData({
        showAuthPhone: !1,
        showAuthUserInfo: !1,
        isAuthorited: !0
      }), this.triggerEvent("ready", {
        userInfo: n.default.base.userInfo,
        loginInfo: n.default.base.loginInfo,
        sessionId: n.default.base.sessionId,
        storeVO: n.default.base.storeVO
      })
    },
    init: function() {
      this.data.isUserOnly ? this.setData({
        showAuthPhone: !1,
        showAuthUserInfo: !0
      }) : n.default.base.registered ? this.isAuthorited() : this.setData({
        showAuthPhone: !0,
        showAuthUserInfo: !1
      })
    }
  },
  attached: function() {
    n.default.base.logged && this.init()
  }
});