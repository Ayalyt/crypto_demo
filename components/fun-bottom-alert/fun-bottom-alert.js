Component({
  properties: {
    title: {
      type: String,
      value: ""
    },
    height: {
      type: Number,
      value: 200
    },
    isShowSure: {
      type: Boolean,
      value: !0
    },
    isShow: {
      type: Boolean,
      value: !1,
      observer: "isShowChanged"
    }
  },
  data: {
    isRemove: !0
  },
  lifetimes: {
    attached: function() {}
  },
  methods: {
    sure: function() {
      this.data.isShowSure && this.triggerEvent("sure")
    },
    close: function() {
      this.setData({
        isShow: !1
      }), this.triggerEvent("close")
    },
    isShowChanged: function(t, i, e) {
      t ? this.showAnimation() : this.closeAnimation()
    },
    showAnimation: function() {
      this.setData({
        isRemove: !1
      });
      var t = {
          duration: 300,
          timingFunction: "linear"
        },
        i = wx.createAnimation(t),
        e = wx.createAnimation(t);
      i.bottom(0).step(), e.opacity(1).step(), this.setData({
        lAnimate: i.export(),
        opacityAnimation: e.export()
      })
    },
    closeAnimation: function() {
      var t = this,
        i = {
          duration: 300,
          timingFunction: "linear"
        },
        e = wx.createAnimation(i),
        o = wx.createAnimation(i);
      e.bottom(-this.data.height).step(), o.opacity(0).step(), t.setData({
        lAnimate: e.export(),
        opacityAnimation: o.export()
      }), setTimeout((function() {
        t.setData({
          isRemove: !0
        })
      }), 300)
    }
  }
});