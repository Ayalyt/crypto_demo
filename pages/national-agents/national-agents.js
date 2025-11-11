var e, s, t, a, n = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  o = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js");
Page({
  data: {
    radios: [{
      valueKey: "123",
      textKey: "123",
      name: "1234",
      text: "1234"
    }],
    isLogin: !1,
    phoneNumber: "",
    isAuth: !1,
    name: "",
    gender: "",
    birthdate: "",
    cdpLoginInfo: {},
    professions: [],
    profession: null,
    professionsId: "",
    professionsName: "",
    stewardUserId: "",
    openId: "",
    brokerUserId: "",
    lastBirthDate: (e = new Date, s = e.getFullYear(), t = e.getMonth(), a = e.getDate(), e = s + "-" + t + "-" + a)
  },
  onLoad: function(e) {
    if (e.q) {
      var s = {},
        t = decodeURIComponent(e.q);
      if ((t = t.split("?")).length) {
        t = t[1].split("&");
        for (var a = 0; a < t.length; a++) {
          var n = t[a].split("=");
          s[n[0]] = n[1]
        }
      }
      s.id && this.setData({
        stewardUserId: s.id
      })
    }
  },
  onAuthReady: function(e) {
    var s = e.detail,
      t = s.userInfo,
      a = s.sessionId;
    this.setData({
      isAuth: !1
    }), t.id ? (this.data.cdpLoginInfo = e.detail, this.setData({
      openId: t.wxOpenId,
      brokerUserId: t.id
    }), this.autoAuthLogin(t.id, a, t.phone, t.wxOpenId)) : this.setData({
      isLogin: !1
    })
  },
  autoAuthLogin: function(e, s, t, a) {
    var n = this;
    o.autoAuthLogin(e, s).then((function(e) {
      e && (n.setData({
        isLogin: !0,
        phoneNumber: t
      }), n.checkIsFinishProfile(a), n.getProfessions(a))
    }))
  },
  checkIsFinishProfile: function(e) {
    var s = this;
    n.post({
      url: "/mp-extend/code/broker/check",
      data: {
        openId: e,
        brokerType: 1
      }
    }).then((function(t) {
      t.checkRes ? wx.reLaunch({
        url: "/drainage/pages/marketing-home/home"
      }) : s.getProfessions(e)
    })).catch((function(e) {
      var s = e.data && e.data.data && e.data.data.message || e.message;
      wx.showToast({
        title: s,
        icon: "none"
      })
    }))
  },
  getProfessions: function() {
    var e = this;
    n.post({
      url: "/mp-extend/code/profession/enum",
      data: {}
    }).then((function(s) {
      e.setData({
        professions: s
      })
    })).catch((function(e) {
      var s = e.data && e.data.data && e.data.data.message || e.message;
      wx.showToast({
        title: s,
        icon: "none"
      })
    }))
  },
  onProfessionsChange: function(e) {
    var s = this.data.professions,
      t = s[+e.detail.value].professionsId,
      a = s[+e.detail.value].professionsName;
    this.data.professionsId = t, this.data.professionsName = a, this.setData({
      profession: e.detail.value
    })
  },
  getCustomerNameValue: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  onChangeRadio: function(e) {
    this.setData({
      gender: e.detail.value
    })
  },
  onDateChange: function(e) {
    this.setData({
      birthdate: e.detail.value
    })
  },
  checkRequired: function() {
    var e = this.data,
      s = e.name,
      t = e.gender,
      a = e.birthdate,
      n = e.professionsId;
    return "" === s ? {
      message: "请输入姓名",
      isPass: !1
    } : "" === t ? {
      message: "请选择性别",
      isPass: !1
    } : "" === a ? {
      message: "请选择出生日期",
      isPass: !1
    } : "" === n ? {
      message: "请选择职业",
      isPass: !1
    } : {
      message: "",
      isPass: !0
    }
  },
  onSure: function() {
    var e = this.checkRequired(),
      s = e.message;
    if (e.isPass) {
      var t = this.data,
        a = t.name,
        o = t.gender,
        i = t.birthdate,
        r = t.professionsId,
        d = t.professionsName,
        h = t.openId,
        u = t.stewardUserId,
        c = t.brokerUserId,
        f = t.phoneNumber;
      n.post({
        url: "/mp-extend/code/steward/binding",
        data: {
          name: a,
          gender: +o,
          birthdate: i,
          professionsId: r,
          professionsName: d,
          openId: h,
          stewardUserId: u,
          brokerUserId: c,
          mobile: f,
          brokerType: 1
        }
      }).then((function() {
        wx.reLaunch({
          url: "/drainage/pages/marketing-home/home"
        })
      })).catch((function(e) {
        var s = e.data && e.data.data && e.data.data.message || e.message;
        wx.showToast({
          title: s,
          icon: "none"
        })
      }))
    } else wx.showToast({
      title: s,
      icon: "none"
    })
  },
  onCancel: function() {
    wx.switchTab({
      url: "/pages/service/service"
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});