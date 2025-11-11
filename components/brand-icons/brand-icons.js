getApp();
Component({
  properties: {
    data: {
      type: Array,
      value: [],
      observer: function(t, e, s) {
        t !== e && (t.length < 4 ? this.setData({
          list: t,
          listType: "lessThanFourView"
        }) : 4 === t.length ? this.setData({
          list: t,
          listType: "normalView"
        }) : t.length > 4 && t.length < 8 ? this.setData({
          list: t,
          listType: "scrollView"
        }) : this.setData({
          list: t,
          listType: "multiScrollView"
        }))
      }
    }
  },
  lifetimes: {
    attached: function() {
      var t = 670 * (wx.getSystemInfoSync().windowWidth / 750);
      this.setData(t)
    }
  },
  data: {
    list: [],
    listType: "lessThanFour",
    sliderLeft: 0,
    rpxTopxScale: 1
  },
  methods: {
    jump: function(t) {
      var e = t.currentTarget.dataset;
      this.triggerEvent("jump", e)
    },
    getColumn: function(t) {
      var e = Math.ceil(t.length / 2);
      return [t.slice(0, e), t.slice(e, t.length)]
    },
    onScroll: function(t) {
      var e = t.detail,
        s = e.scrollWidth,
        i = e.scrollLeft,
        l = this.data,
        a = l.list,
        n = l.rpxTopxScale,
        r = 50 * (i / (s - s / a.length * 4)) * n;
      this.setData({
        sliderLeft: r
      })
    }
  }
});