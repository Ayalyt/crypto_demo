var e, n = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = (e = require("../../../D61A94F34CF6B1BFB07CFCF42A086AC2.js")) && e.__esModule ? e : {
    default: e
  },
  a = require("../../../AD5C37134CF6B1BFCB3A5F14B4E76AC2.js");
t.default.Page({
  on: {
    stateChange: function(e) {
      console.log(e)
    }
  },
  onAuthReady: function(e) {
    console.log(e)
  },
  onGetPhoneNumber: function(e) {
    var n = e.detail,
      t = n.iv,
      o = n.encryptedData;
    t && o && (0, a.register)({
      iv: t,
      encryptData: o
    }).then((function(e) {
      console.log(e)
    }))
  },
  onGetUserInfo: function(e) {
    var t = e.detail,
      o = void 0 === t ? {} : t,
      r = o.iv,
      i = o.encryptedData,
      c = (o.errMsg, o.userInfo),
      l = {};
    c && (l.nickname = c.nickName, l.wxNickname = c.nickName, l.avatarImgUrl = c.avatarUrl), r && i && (0, a.updateUserInfo)(n({
      infoIv: r,
      infoEncryptData: i
    }, l)).then((function(e) {
      console.log(e)
    }))
  }
});