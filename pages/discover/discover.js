var t, e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  r = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  o = require("../../D2980F274CF6B1BFB4FE672005896AC2.js"),
  s = "/not-login-community/activity/publish/list",
  c = "/pages/community-publish/community-publish",
  u = function(t, e) {
    return r.post({
      url: t,
      data: e
    })
  },
  l = getApp(),
  h = [],
  g = [],
  d = 0,
  p = 0,
  f = 0,
  v = 0;
Page({
  data: {
    loading: !1,
    defaultImage: "../../public/imgs/icon_default.png",
    discover: [],
    list: [],
    leftList: [],
    rightList: [],
    hasPermission: !1,
    noMore: !1,
    statusMap: [{
      statusText: "",
      btnText: "我要报名"
    }, {
      statusText: "进行中",
      btnText: "查看活动"
    }, {
      statusText: "往期活动",
      btnText: ["查看活动", "查看回顾"]
    }]
  },
  allList: [],
  getDiscover: function() {
    return u("/not-login-community/activity/list/applet")
  },
  doWithDiscoverData: function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    this.setData({
      discover: t.map((function(t) {
        return i(i({}, t), {}, {
          activityStartTime: o.dateFormatter("yyyy-MM-dd hh:mm", t.activityStartTime),
          city: t.cityList.length ? "限".concat(Array.from(new Set(t.cityList.map((function(t) {
            return t.cityName
          })))).join("、"), "地区参与") : null
        })
      }))
    })
  },
  doWithList: function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.fillData(e, t.map((function(t, e) {
      return i(i({}, t), {}, {
        width: 200,
        height: e % 2 == 0 ? 200 : 160
      })
    })))
  },
  onLoad: function(t) {},
  onReady: function() {
    wx.getSystemInfo({
      success: function(t) {
        var e = 20 / (750 / t.windowWidth);
        f = (t.windowWidth - e) / 2, v = f / .8
      }
    })
  },
  onShow: (t = a(e().mark((function t() {
    var a, i;
    return e().wrap((function(t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          try {
            (0, n.zhugeTrack)("进入活动模块首页")
          } catch (t) {
            console.log(t)
          }
          return "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
            selected: 3
          }), t.next = 4, this.getDiscover();
        case 4:
          return a = t.sent, this.doWithDiscoverData(a), this.pageNo = 1, this.getListData({}, !0), t.next = 10, l.loginVerification(!1);
        case 10:
          i = t.sent, this.setData({
            hasPermission: i
          });
        case 12:
        case "end":
          return t.stop()
      }
    }), t, this)
  }))), function() {
    return t.apply(this, arguments)
  }),
  getListData: function() {
    var t = arguments,
      n = this;
    return a(e().mark((function a() {
      var o, c, u, l, h, g, d;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return o = t.length > 0 && void 0 !== t[0] ? t[0] : {}, (c = t.length > 1 && void 0 !== t[1] && t[1]) && n.setData({
              loading: !0
            }), e.prev = 3, e.next = 6, r.post({
              url: s,
              data: i({
                pageNo: n.pageNo,
                pageSize: 30
              }, o)
            });
          case 6:
            if (u = e.sent, l = u.list, h = void 0 === l ? [] : l, g = u.total, 1 !== n.pageNo) {
              e.next = 15;
              break
            }
            return n.allList = h, n.doWithList(h, !0), h.length < g ? n.setData({
              noMore: !1
            }) : n.setData({
              noMore: !0
            }), e.abrupt("return");
          case 15:
            d = n.allList.concat(h), n.allList = d, n.doWithList(d), null != d && d.length && d.length < g ? n.setData({
              noMore: !1
            }) : n.setData({
              noMore: !0
            }), e.next = 24;
            break;
          case 21:
            throw e.prev = 21, e.t0 = e.catch(3), e.t0;
          case 24:
            if (e.prev = 24, c) {
              e.next = 28;
              break
            }
            return 1 === o.pageNo && setTimeout((function() {
              wx.hideNavigationBarLoading(), wx.stopPullDownRefresh()
            }), 300), e.abrupt("return", !1);
          case 28:
            return n.setData({
              loading: !1
            }), e.finish(24);
          case 30:
          case "end":
            return e.stop()
        }
      }), a, null, [
        [3, 21, 24, 30]
      ])
    })))()
  },
  onHide: function() {},
  onUnload: function() {},
  onReachBottom: function() {
    this.data.noMore || (this.pageNo += 1, this.getListData())
  },
  onShareAppMessage: function() {},
  onPullDownRefresh: function() {
    var t = this;
    return a(e().mark((function a() {
      var i;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return wx.showNavigationBarLoading(), e.next = 3, t.getDiscover();
          case 3:
            i = e.sent, t.doWithDiscoverData(i), t.pageNo = 1, t.getListData(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
          case 9:
          case "end":
            return e.stop()
        }
      }), a)
    })))()
  },
  lookMore: function() {
    try {
      (0, n.zhugeTrack)("活动模块-点击为你推荐")
    } catch (t) {
      console.log(t)
    }
    wx.navigateTo({
      url: "/pages/acitivity-list/activity-list"
    })
  },
  navigateToDetail: function(t) {
    var e = t.currentTarget.dataset,
      a = e.id,
      i = e.status;
    try {
      (0, n.zhugeTrack)("活动模块-点击头部活动banner", {
        "活动id": a
      })
    } catch (t) {
      console.log(t)
    }
    wx.navigateTo({
      url: "".concat("/pages/activity-detail/activity-detail", "?activityId=").concat(a, "&status=").concat(i)
    })
  },
  handleItemClick: function(t) {
    var e = t.currentTarget.dataset,
      a = e.id,
      i = e.item;
    try {
      (0, n.zhugeTrack)("活动模块-点击帖子", {
        "内容标题": i.publishTheme,
        "内容id": i.id,
        "标签名称": i.topicContent,
        "发帖人名称": i.memberNickname,
        "发帖人id": i.memberId
      })
    } catch (t) {
      console.log(t)
    }
    wx.navigateTo({
      url: "".concat("/pages/discover-detail/discover-detail", "?publishId=").concat(a)
    })
  },
  fillData: function(t, e) {
    h.length = 0, g.length = 0, d = 0, p = 0;
    for (var a = 0, i = e.length; a < i; a++) {
      var n = e[a];
      n.width = parseInt(n.width), n.height = parseInt(n.height), n.itemWidth = f;
      var r = n.width / n.itemWidth;
      n.itemHeight = n.height / r, n.itemHeight > v && (n.itemHeight = v), d == p || d < p ? (h.push(n), d += n.itemHeight) : (g.push(n), p += n.itemHeight)
    }
    this.setData({
      leftList: h,
      rightList: g
    })
  },
  handlePublish: function() {
    var t = this;
    return a(e().mark((function a() {
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, l.loginVerification();
          case 2:
            if (e.sent) {
              e.next = 5;
              break
            }
            return e.abrupt("return");
          case 5:
            if (!l.globalData.userProfile.avatarUrl) {
              e.next = 8;
              break
            }
            return wx.navigateTo({
              url: c
            }), e.abrupt("return");
          case 8:
            wx.getUserProfile({
              desc: "用于完善会员资料",
              complete: function(e) {
                if (e.userInfo) {
                  var a = e.userInfo,
                    i = a.avatarUrl,
                    n = a.nickName;
                  t.updateUser(i, n), t.updateAppGloablUserProfile(e)
                }
                wx.navigateTo({
                  url: c
                })
              }
            });
          case 9:
          case "end":
            return e.stop()
        }
      }), a)
    })))()
  },
  updateUser: function(t, e) {
    try {
      u("/member/user/modify/v2", {
        avatarImgUrl: t,
        nickname: e
      })
    } catch (t) {
      throw t
    }
  },
  updateAppGloablUserProfile: function(t) {
    l.globalData.userProfile = t.userInfo
  }
});