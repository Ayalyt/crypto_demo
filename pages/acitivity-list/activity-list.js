var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  r = require("../../D2980F274CF6B1BFB4FE672005896AC2.js"),
  i = "/not-login-community/activity/list";
Page({
  data: {
    loading: !1,
    list: [],
    noMore: !1,
    defaultImage: "../../public/imgs/icon_default.png",
    statusMap: [{
      text: "未开始",
      name: "notstarted"
    }, {
      text: "进行中",
      name: "progress"
    }, {
      text: ["已结束", "回顾中"],
      name: ["over", "review"]
    }]
  },
  formatList: function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = t.map((function(t) {
        return a(a({}, t), {}, {
          activityStartTime: r.dateFormatter("yyyy-MM-dd hh:mm", t.activityStartTime)
        })
      }));
    return e
  },
  getData: function() {
    var r = arguments,
      o = this;
    return e(t().mark((function e() {
      var s, u, c, l, g;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return s = r.length > 0 && void 0 !== r[0] ? r[0] : {}, (u = r.length > 1 && void 0 !== r[1] && r[1]) && o.setData({
              loading: !0
            }), t.prev = 3, t.next = 6, n.post({
              url: i,
              data: a({
                pageNo: o.pageNo,
                pageSize: 30
              }, s)
            });
          case 6:
            if (c = t.sent, l = c.list, g = c.total, !o.data.noMore) {
              t.next = 13;
              break
            }
            return o.pageNo = 1, o.setData({
              list: o.formatList(l)
            }), t.abrupt("return");
          case 13:
            null == l || !l.length || l.length <= g ? o.setData({
              noMore: !0,
              list: o.data.list.concat(o.formatList(l))
            }) : o.setData({
              noMore: !1
            }), t.next = 19;
            break;
          case 16:
            throw t.prev = 16, t.t0 = t.catch(3), t.t0;
          case 19:
            if (t.prev = 19, u) {
              t.next = 23;
              break
            }
            return 1 === s.pageNo && (wx.hideNavigationBarLoading(), wx.stopPullDownRefresh()), t.abrupt("return", !1);
          case 23:
            return o.setData({
              loading: !1
            }), t.finish(19);
          case 25:
          case "end":
            return t.stop()
        }
      }), e, null, [
        [3, 16, 19, 25]
      ])
    })))()
  },
  onLoad: function(t) {},
  onReady: function() {
    this.pageNo = 1, this.getData({}, !0)
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onShareAppMessage: function() {},
  navigateToDetail: function(a) {
    return e(t().mark((function e() {
      var n, r, i;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            n = a.currentTarget.dataset, r = n.id, i = n.status, wx.navigateTo({
              url: "".concat("/pages/activity-detail/activity-detail", "?activityId=").concat(r, "&status=").concat(i)
            });
          case 2:
          case "end":
            return t.stop()
        }
      }), e)
    })))()
  },
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading(), this.pageNo = 1, this.getData()
  },
  onReachBottom: function() {
    this.data.noMore || (this.pageNo++, this.getData())
  }
});