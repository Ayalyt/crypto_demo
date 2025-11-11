var t = require("../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  i = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js").openAdLink,
  n = require("../../73345E714CF6B1BF15523676CA1A6AC2.js"),
  r = getApp(),
  o = ["综合", "价格", "离我最近", "视频探房"];
Page({
  data: {
    scrollHeight: r.globalData.windowHeight,
    loading: !0,
    storeList: [],
    cityList: [],
    topAdList: [],
    topAdHeight: 0,
    currentCity: {
      id: 3101,
      name: "上海市"
    },
    sortCurrent: "1",
    sortCurrentName: "综合",
    sortPriceCurrent: null,
    sortField: "",
    amapLatitude: "",
    amapLongitude: "",
    searchText: "您想住哪儿",
    floatingWindowData: null
  },
  duration: 0,
  onLoad: function(t) {
    if (t.channelId && t.channelRemark) {
      var e = wx.getStorageSync("channelData").origintype,
        a = t.origintype || e;
      wx.setStorageSync("channelData", {
        channelId: t.channelId,
        channelRemark: t.channelRemark,
        origintype: a
      })
    }
  },
  onReady: function() {
    var t = 295 * getApp().globalData.windowWidth / 345;
    this.setData({
      topAdHeight: t
    })
  },
  onShow: function() {
    try {
      (0, e.zhugeTrack)("进入公寓列表页")
    } catch (t) {
      console.log("err", t)
    }
    this.duration = (new Date).getTime(), this.getCityList(), this.getTopAdList(), "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
      selected: 1
    })
  },
  onHide: function() {
    if (this.duration) {
      try {
        (0, e.zhugeTrack)("公寓列表页停留时长", {
          "停留时长": ((new Date).getTime() - this.duration) / 1e3
        })
      } catch (t) {
        console.log("err", t)
      }
      this.duration = 0
    }
  },
  onUnload: function() {
    if (this.duration) {
      try {
        (0, e.zhugeTrack)("公寓列表页停留时长", {
          "停留时长": ((new Date).getTime() - this.duration) / 1e3
        })
      } catch (t) {
        console.log("err", t)
      }
      this.duration = 0
    }
  },
  onShareAppMessage: function() {},
  onClickFloatingWindow: function() {
    var t = this.data.floatingWindowData;
    try {
      (0, e.zhugeTrack)("点击侧边悬浮窗", {
        "名称": t.name
      })
    } catch (t) {
      console.log("err", t)
    }
    i(t.link)
  },
  getCityList: function() {
    var t = this;
    try {
      return a.post({
        url: "product/index/get-city-list",
        data: {
          showDistricts: !1
        }
      }).then((function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          a = [{
            cityId: "",
            cityName: "全国"
          }].concat(e);
        t.setData({
          cityList: a
        })
      })).catch((function(e) {
        t.setData({
          loading: !1
        })
      }))
    } catch (t) {
      console.log(t)
    }
  },
  getTopAdList: function() {
    var t = this;
    a.post({
      url: "/fun/homepage/advertising",
      handleError: "ALL",
      data: {
        location: "FUNLIVE_LIST",
        type: "1"
      }
    }).then((function(e) {
      var a = null,
        i = (e || []).find((function(t) {
          return 100 === t.weight
        }));
      i && (a = {
        link: i.link,
        name: i.name
      }), t.setData({
        floatingWindowData: a,
        topAdList: e
      })
    }))
  },
  getList: function(e) {
    var i = this,
      n = e.sortField,
      r = void 0 === n ? "" : n,
      o = e.amapLatitude,
      s = void 0 === o ? "" : o,
      c = e.amapLongitude,
      d = void 0 === c ? "" : c;
    return a.post({
      url: "product/apartment/get-apartment-list",
      data: e
    }).then((function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        a = e.map((function(e) {
          return t(t({}, e), {}, {
            labels: e.labels.length > 3 ? e.labels.slice(0, 3) : e.labels,
            addr: i.getFullAddress(e),
            position: i.formatPosition(e.focusPoi)
          })
        }));
      i.setData({
        storeList: a,
        loading: !1,
        sortField: r,
        amapLatitude: s,
        amapLongitude: d
      })
    })).catch((function(t) {
      i.setData({
        loading: !1,
        sortField: r,
        amapLatitude: s,
        amapLongitude: d
      })
    }))
  },
  getFullAddress: function(t) {
    var e = t.district + "-" + t.cbdDesc + " " + t.addressLine;
    return t.district && t.cbdDesc || (e = e.replace("-", "")), e.trim()
  },
  formatDistance: function(t) {
    return (t = parseInt(t, 10)) >= 1e3 ? parseInt(t / 100, 10) / 10 + "km" : t + "m"
  },
  formatPosition: function(t) {
    var e = t || {},
      a = e.poiName,
      i = e.distance;
    return a && void 0 !== i ? "距".concat(a).concat(this.formatDistance(i)) : ""
  },
  onCityChange: function(t) {
    var e = t.detail,
      a = e.currentCity.id !== this.data.currentCity.id || 0 === this.data.storeList.length;
    this.setData({
      storeList: a ? [] : this.data.storeList,
      loading: a,
      currentCity: e.currentCity
    });
    var i = this.data,
      n = i.sortField,
      r = i.amapLatitude,
      o = i.amapLongitude,
      s = wx.getStorageSync("selectSearch");
    if (s) {
      var c = s.location,
        d = s.cityId,
        u = void 0 === d ? "" : d,
        l = s.name,
        h = "",
        g = "";
      if (c && c.split(",").length >= 2) {
        var p = c.split(",");
        h = p[1], g = p[0]
      }
      this.getList({
        amapLatitude: h,
        amapLongitude: g,
        orderBy: "1",
        sortField: n,
        cityId: u.length >= 4 ? u.substring(0, 4) : u
      }), this.setData({
        sortCurrent: "3",
        searchText: l || this.data.searchText
      }), wx.setStorageSync("selectSearch", "")
    } else this.getList({
      orderBy: "1",
      sortField: n,
      cityId: e.currentCity.id,
      amapLatitude: r,
      amapLongitude: o
    })
  },
  onJump: function(t) {
    var a = t.currentTarget,
      i = this.data.sortCurrentName,
      n = a.dataset,
      r = n.apartmentId,
      o = n.apartmentName,
      s = n.priceLow;
    try {
      (0, e.zhugeTrack)("公寓列表-点击公寓", {
        "公寓名称": o,
        "起租价": parseFloat(s) || 0,
        "排序方式": i
      })
    } catch (t) {
      console.log("err", t)
    }
    var c = encodeURIComponent("apartment?apartmentId=".concat(r, "&sourceType=2"));
    wx.navigateTo({
      url: "/pages/h5-container/index?webPath=".concat(c)
    })
  },
  goToAdDetail: function(t) {
    var a = t.currentTarget.dataset.index,
      n = this.data.topAdList[a];
    try {
      (0, e.zhugeTrack)("公寓-点击顶部banner", {
        "banner名称": n.name,
        "banner坑位": a + 1
      })
    } catch (t) {
      console.log("err", t)
    }
    i(n.link)
  },
  onClickSearchLocation: function() {
    (0, e.zhugeTrack)("首页-点击搜索框");
    var t = this.data.currentCity,
      a = t.id,
      i = t.name;
    wx.navigateTo({
      url: "/packageA/pages/search-location/index?cityId=".concat(a, "&cityName=").concat(i, "&isHome=true")
    })
  },
  onClickSort: function(t) {
    var a = this;
    this.setData({
      loading: !0
    });
    var i = t.currentTarget.dataset,
      r = o[i.index - 1];
    try {
      (0, e.zhugeTrack)("公寓列表-点击排序按钮", {
        "按钮名称": r
      }), (0, e.zhugeTrack)("首页-点击切换排序方式", {
        "排序方式": r
      })
    } catch (t) {
      console.log("err", t)
    }
    var s = null;
    "2" === i.index && (s = "1" === this.data.sortPriceCurrent ? "2" : "1"), "3" === i.index ? n.getRegeo().then((function(t) {
      var e = t[0],
        n = e.latitude,
        r = e.longitude;
      a.getList({
        amapLatitude: n,
        amapLongitude: r,
        orderBy: "1",
        sortField: i.index,
        cityId: a.data.currentCity.id
      })
    })).catch((function(t) {})) : this.getList({
      orderBy: s || "1",
      sortField: i.index,
      cityId: this.data.currentCity.id
    }), this.setData({
      sortCurrent: i.index,
      sortPriceCurrent: s,
      sortCurrentName: r
    })
  }
});