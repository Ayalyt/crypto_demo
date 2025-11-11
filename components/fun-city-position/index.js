var t = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  e = require("../../73345E714CF6B1BF15523676CA1A6AC2.js"),
  a = getApp();
Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    sourceName: {
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: ""
    },
    cityList: {
      type: Array,
      value: [],
      observer: function(t, a) {
        var i = this;
        if (0 !== t.length) try {
          var n = JSON.parse(wx.getStorageSync("currentCity") || null);
          n ? this.changeCity(n) : e.getRegeo().then((function(a) {
            var n = e.getCityId(a),
              o = i.getCurrentCityName(t, n);
            i.changeCity(o)
          })).catch((function(t) {
            n = {
              id: 3101,
              name: "上海市"
            }, i.setData({
              currentCity: n
            }), i.changeCity(n)
          }))
        } catch (t) {
          console.log("e", t)
        }
      }
    },
    currentCity: {
      type: Object,
      value: {}
    }
  },
  data: {
    show: !1,
    offset: a ? a.globalData.navigationHeight : 0,
    scrollHeight: a ? a.globalData.windowHeight - a.globalData.navigationHeight : 0
  },
  observers: {},
  lifetimes: {
    attached: function() {}
  },
  methods: {
    getCurrentCityName: function(t, e) {
      var a = t.find((function(t) {
          return t.cityId === e
        })) || {},
        i = a.cityId,
        n = void 0 === i ? 3101 : i,
        o = a.cityName;
      return {
        id: n,
        name: void 0 === o ? "上海市" : o
      }
    },
    changeCity: function(t) {
      this.triggerEvent("change", {
        currentCity: t
      })
    },
    onOpen: function() {
      try {
        (0, t.zhugeTrack)("".concat(this.data.sourceName, "-点击城市"), {
          "当前城市": this.data.currentCity.name
        })
      } catch (t) {
        console.log("err", t)
      }
      this.setData({
        show: !0
      })
    },
    onSelect: function(e) {
      var a = (e.target.dataset || {}).option,
        i = void 0 === a ? {} : a,
        n = {
          id: i.cityId,
          name: i.cityName
        };
      try {
        (0, t.zhugeTrack)("".concat(this.data.sourceName, "-城市切换列表-点击城市"), {
          "选择城市": n.name
        })
      } catch (t) {
        console.log("err", t)
      }
      try {
        wx.setStorageSync("currentCity", JSON.stringify(n))
      } catch (e) {
        console.log("e", e)
      }
      this.changeCity(n), this.onClose()
    },
    onClose: function() {
      this.setData({
        show: !1
      })
    }
  }
});