var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  a = function(t, e) {
    return n.post({
      url: t,
      data: e
    })
  },
  i = getApp();
Page({
  data: {
    address: {},
    publishImages: [],
    loading: !1,
    title: "",
    content: "",
    currentTopic: {},
    publishResult: "发布成功，审核中",
    showMask: !1
  },
  onLoad: function(t) {},
  onShow: function() {
    this.checkCanPublish();
    var t = wx.getStorageSync("selectSearch");
    this.setData({
      address: t
    })
  },
  onUnload: function() {
    this.setData({
      publishImages: []
    }), wx.setStorageSync("selectSearch", {})
  },
  checkCanPublish: function() {
    a("/need-login-community/activity/publish/residue/degree").then((function(t) {
      1 === t.status && (wx.showToast({
        title: "您已超过每日发布次数，请于明日再来",
        icon: "none",
        mask: !0,
        duration: 3500
      }), setTimeout((function() {
        wx.navigateBack()
      }), 3e3))
    }))
  },
  goSelectTopic: function() {
    var t = this.data.currentTopic,
      e = JSON.stringify(t);
    wx.navigateTo({
      url: "/packageA/pages/community-topics/community-topics?currentTopic=".concat(e)
    })
  },
  selectAddress: function() {
    wx.navigateTo({
      url: "/packageA/pages/search-location/index"
    })
  },
  onChange: function(t) {
    this.setData({
      publishImages: t.detail.value
    })
  },
  handleInputTitle: function(t) {
    this.setData({
      title: t.detail.value
    })
  },
  handleInputContent: function(t) {
    this.setData({
      content: t.detail.value
    })
  },
  goCommunityHistories: function() {
    wx.navigateTo({
      url: "/packageA/pages/community-history/community-history"
    })
  },
  formSubmit: function(n) {
    var s = this;
    return e(t().mark((function e() {
      var o, r, u, c, l, h, p, d, g, b, m, f;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, i.loginVerification();
          case 2:
            if (t.sent) {
              t.next = 5;
              break
            }
            return t.abrupt("return");
          case 5:
            if (o = s.data.currentTopic, r = n.detail.value, u = r.publishContent, c = r.publishTheme, l = s.data, h = l.address, p = h.name, d = h.location, g = l.publishImages, c) {
              t.next = 13;
              break
            }
            return wx.showToast({
              title: "标题不可为空",
              icon: "none"
            }), t.abrupt("return");
          case 13:
            if (u) {
              t.next = 18;
              break
            }
            return wx.showToast({
              title: "\b内容不可为空",
              icon: "none"
            }), t.abrupt("return");
          case 18:
            if (g.length) {
              t.next = 23;
              break
            }
            return wx.showToast({
              title: "请至少上传一张图片",
              icon: "none"
            }), t.abrupt("return");
          case 23:
            if (o.id) {
              t.next = 26;
              break
            }
            return wx.showToast({
              title: "请选择一个话题",
              icon: "none"
            }), t.abrupt("return");
          case 26:
            return b = null == d ? void 0 : d.split(","), s.setData({
              loading: !0
            }), t.prev = 28, t.next = 31, a("/need-login-community/activity/publish/add", {
              publishContent: u,
              publishImages: g,
              publishLocation: p,
              publishLocationLongitude: null == b ? void 0 : b[0],
              publishLocationDimensionality: null == b ? void 0 : b[1],
              topicId: o.id,
              publishTheme: c
            });
          case 31:
            m = t.sent, f = m.success, s.setData({
              publishResult: "发布".concat(f ? "成功, 待审核" : "失败"),
              showMask: !0
            }), f && setTimeout((function() {
              wx.navigateBack()
            }), 2500), t.next = 41;
            break;
          case 37:
            t.prev = 37, t.t0 = t.catch(28), s.setData({
              loading: !1,
              showMask: !1
            }), wx.showToast({
              title: t.t0.data && t.t0.data.data && t.t0.data.data.message,
              icon: "none"
            });
          case 41:
          case "end":
            return t.stop()
        }
      }), e, null, [
        [28, 37]
      ])
    })))()
  },
  onShareAppMessage: function() {}
});