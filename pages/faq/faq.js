var t = require("../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = require("../../03F505464CF6B1BF65936D4171E96AC2.js");
Page({
  data: {
    current: 0,
    selectedItem: void 0,
    selectedId: 0,
    pageNo: 1,
    typeList: [],
    list: [],
    showLoading: !1,
    isShowNoData: !1,
    scrollHeight: 533,
    winHeight: 533,
    canScroll: !0
  },
  typename: "",
  onLoad: function(t) {
    var e = t.type,
      a = void 0 === e ? 0 : e;
    this.setData({
      current: +a
    }), this.init()
  },
  init: function() {
    this.getTypeList()
  },
  setScrollView: function() {
    var e = wx.getSystemInfoSync(),
      a = 750 / e.windowWidth,
      i = e.windowHeight * a,
      n = wx.createSelectorQuery(),
      o = this;
    n.select("#type-list").boundingClientRect(), n.exec((function(e) {
      var a = t(e, 1)[0];
      o.setData({
        winHeight: i - 41 - a.height,
        scrollHeight: i - 41 - a.height
      })
    }))
  },
  onReady: function() {},
  onShow: function() {
    try {
      (0, e.zhugeTrack)("服务-进入常见问题页面")
    } catch (t) {
      console.log("err", t)
    }
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  getTypeList: function() {
    var t = this,
      e = this;
    a.post({
      url: "/mp-living/room/faq/type",
      handleError: "ALL",
      showLoading: !0
    }).then((function(a) {
      a.unshift({
        id: 0,
        name: "全部"
      }), t.setData({
        typeList: a
      }), setTimeout((function() {
        e.setScrollView()
      }), 200)
    })).catch((function(t) {
      console.log(t), setTimeout((function() {
        e.setScrollView()
      }), 200)
    }))
  },
  getList: function(t) {
    var e = t.apartmentId,
      i = void 0 === e ? null : e,
      n = t.type,
      o = void 0 === n ? null : n,
      s = t.pageNo,
      r = void 0 === s ? 1 : s,
      c = this.data.showLoading,
      l = this;
    if (!(void 0 !== c && c)) {
      this.setData({
        showLoading: !0
      });
      var d = this.data.list,
        h = void 0 === d ? [] : d,
        u = wx.getStorageSync("sourcePath");
      a.post({
        url: "mp-" === u ? "/mp-living/room/faq/list" : "/living/room/faq/list",
        data: {
          type: o,
          pageNo: r,
          apartmentId: i,
          pageSize: 30
        },
        handleError: "ALL",
        showLoading: !0
      }).then((function(t) {
        l.setData({
          list: h.concat(t.list || []),
          pageNo: t.currentPage || 1,
          isShowNoData: 0 === t.list.length,
          canScroll: 30 === t.list.length
        }), l.setData({
          showLoading: !1
        })
      })).catch((function(t) {
        l.setData({
          showLoading: !1
        }), console.log(t)
      }))
    }
  },
  apartmentChange: function(t) {
    var a = this.data.selectedItem,
      i = (void 0 === a ? {} : a).apartmentId,
      n = void 0 === i ? null : i;
    if (t.detail && t.detail.apartmentId !== n) {
      try {
        (0, e.zhugeTrack)("服务-常见问题-点击切换公寓")
      } catch (t) {
        console.log("err", t)
      }
      var o = this.data.current;
      this.setData({
        selectedItem: t.detail,
        list: []
      });
      var s = 0 === o ? {
        apartmentId: t.detail.apartmentId
      } : {
        type: o,
        apartmentId: t.detail.apartmentId
      };
      this.getList(s)
    }
  },
  onSwitch: function(t) {
    var a = t.target.id || 0,
      i = this.data.selectedItem;
    this.typename = t.target.dataset.typename;
    try {
      (0, e.zhugeTrack)("服务-常见问题-点击分类", {
        "当前公寓名称": i.apartmentName,
        "当前房间号": i.text,
        "分类名称": t.target.dataset.typename
      })
    } catch (t) {
      console.log("err", t)
    }
    this.setData({
      current: +a,
      list: [],
      selectedId: 0
    }), i.apartmentId && this.getList({
      apartmentId: i.apartmentId,
      type: a
    })
  },
  onClickQuestion: function(t) {
    var a = t.target.id || 0,
      i = this.data,
      n = i.selectedId,
      o = void 0 === n ? 0 : n,
      s = i.list,
      r = i.selectedItem,
      c = s.find((function(t) {
        return String(t.questionId) === a
      }));
    try {
      (0, e.zhugeTrack)("服务-常见问题-点击问题", {
        "当前公寓名称": r.apartmentName,
        "当前房间号": r.text,
        "分类名称": this.typename,
        "问题标题": c && c.title || ""
      })
    } catch (t) {
      console.log("err", t)
    }
    this.setData({
      selectedId: a == o ? 0 : a
    })
  },
  loadMoreData: function(t) {
    var e = this.data,
      a = e.selectedItem,
      i = e.current,
      n = e.pageNo;
    e.canScroll && this.getList({
      apartmentId: a.apartmentId,
      type: i,
      pageNo: n + 1
    })
  }
});