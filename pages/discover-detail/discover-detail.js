var e, t = require("../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  s = require("../../D2980F274CF6B1BFB4FE672005896AC2.js"),
  u = function(e, t) {
    return a.post({
      url: e,
      data: t
    })
  },
  o = getApp();
Page({
  data: {
    detail: {},
    hearts: [],
    defaultImage: "../../public/imgs/icon_default.png",
    isLike: !1,
    loading: !1,
    showAnimateImage: !1
  },
  onLoad: (e = n(i().mark((function e(t) {
    var n, r;
    return i().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return n = t.publishId, this.publishId = n, this.init(n), this.browse(n), e.next = 6, o.loginVerification(!1);
        case 6:
          if (e.sent) {
            e.next = 9;
            break
          }
          return e.abrupt("return");
        case 9:
          return e.next = 11, this.likeQuery(n);
        case 11:
          r = e.sent, this.doWithIsLike(0 === r.status);
        case 13:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function(t) {
    return e.apply(this, arguments)
  }),
  init: function(e) {
    var t = this;
    return n(i().mark((function n() {
      var r;
      return i().wrap((function(i) {
        for (;;) switch (i.prev = i.next) {
          case 0:
            return t.setData({
              loading: !0
            }), i.prev = 1, i.next = 4, t.getData(e);
          case 4:
            r = i.sent, t.doWithDetail(r), i.next = 11;
            break;
          case 8:
            throw i.prev = 8, i.t0 = i.catch(1), i.t0;
          case 11:
            return i.prev = 11, t.setData({
              loading: !1
            }), i.finish(11);
          case 14:
          case "end":
            return i.stop()
        }
      }), n, null, [
        [1, 8, 11, 14]
      ])
    })))()
  },
  doWithIsLike: function(e) {
    this.setData({
      isLike: e
    })
  },
  doWithDetail: function(e) {
    try {
      (0, r.zhugeTrack)("活动模块-进入帖子详情页", {
        "内容标题": e.publishTheme,
        "内容id": e.id,
        "标签名称": e.topicContent,
        "发帖人名称": e.memberNickname,
        "发帖人id": e.memberId
      })
    } catch (e) {
      console.log(e)
    }
    this.setData({
      detail: t(t({}, e), {}, {
        publishTime: s.dateFormatter("yyyy-MM-dd hh:mm", e.publishTime)
      })
    })
  },
  getData: function(e) {
    return n(i().mark((function t() {
      return i().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", u("/not-login-community/activity/publish/detail", {
              publishId: e
            }));
          case 1:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  browse: function(e) {
    return n(i().mark((function t() {
      return i().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", u("/not-login-community/activity/publish/browse", {
              publishId: e
            }));
          case 1:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  likeQuery: function(e) {
    return n(i().mark((function t() {
      return i().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", u("/need-login-community/activity/publish/like/query", {
              publishId: e
            }));
          case 1:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  onReady: function() {},
  onShow: function() {
    "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
      selected: 0
    }), this.duration = Date.now()
  },
  onHide: function() {
    var e = this.data.detail;
    if (this.duration) {
      try {
        (0, r.zhugeTrack)("活动模块-帖子详情页停留时长", {
          "停留时长": (Date.now() - this.duration) / 1e3,
          "内容标题": e.publishTheme,
          "内容id": e.id,
          "标签名称": e.topicContent,
          "发帖人名称": e.memberNickname,
          "发帖人id": e.memberId
        })
      } catch (e) {
        console.log("err", e)
      }
      this.duration = 0
    }
  },
  onUnload: function() {
    var e = this.data.detail;
    if (this.duration) {
      try {
        (0, r.zhugeTrack)("活动模块-帖子详情页停留时长", {
          "停留时长": (Date.now() - this.duration) / 1e3,
          "内容标题": e.publishTheme,
          "内容id": e.id,
          "标签名称": e.topicContent,
          "发帖人名称": e.memberNickname,
          "发帖人id": e.memberId
        })
      } catch (e) {
        console.log("err", e)
      }
      this.duration = 0
    }
  },
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {
    var e = this.data.detail;
    try {
      (0, r.zhugeTrack)("活动模块-帖子详情-分享成功", {
        "内容标题": e.publishTheme,
        "内容id": e.id,
        "标签名称": e.topicContent,
        "发帖人名称": e.memberNickname,
        "发帖人id": e.memberId
      })
    } catch (e) {
      console.log(e)
    }
  },
  handleLike: function() {
    var e = this;
    return n(i().mark((function t() {
      var n, a, s;
      return i().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            n = e.data, a = n.isLike, s = n.detail;
            try {
              (0, r.zhugeTrack)("活动模块-帖子详情点击点赞", {
                "内容标题": s.publishTheme,
                "内容id": s.id,
                "标签名称": s.topicContent,
                "发帖人名称": s.memberNickname,
                "发帖人id": s.memberId
              })
            } catch (e) {
              console.log(e)
            }
            return t.prev = 2, t.next = 5, o.loginVerification();
          case 5:
            if (t.sent) {
              t.next = 8;
              break
            }
            return t.abrupt("return");
          case 8:
            return t.next = 10, u(a ? "/need-login-community/activity/publish/cancel/like" : "/need-login-community/activity/publish/like", {
              publishId: e.publishId
            });
          case 10:
            a || (e.setData({
              showAnimateImage: !0
            }), setTimeout((function() {
              e.setData({
                showAnimateImage: !1
              })
            }), 500)), e.setData({
              isLike: !a
            }), t.next = 17;
            break;
          case 14:
            t.prev = 14, t.t0 = t.catch(2), wx.showToast({
              title: t.t0.data.data.message,
              icon: "none"
            });
          case 17:
          case "end":
            return t.stop()
        }
      }), t, null, [
        [2, 14]
      ])
    })))()
  },
  onPreviewImage: function(e) {
    var t = this.data.detail,
      i = e.currentTarget.dataset.image;
    wx.previewImage({
      urls: t.images.map((function(e) {
        return e.imageUrl
      })),
      current: i
    })
  }
});