Component({
  properties: {
    show: {
      type: Boolean,
      value: !1
    },
    closable: {
      type: Boolean,
      value: !0
    },
    animation: {
      type: Boolean,
      value: !0
    },
    animationTime: {
      type: Number,
      value: 300
    },
    zIndex: {
      type: Number,
      value: 100
    }
  },
  data: {
    status: "none"
  },
  observers: {
    show: function() {
      this.update()
    }
  },
  lifetimes: {
    detached: function() {
      clearTimeout(this.timeoutHandler)
    }
  },
  methods: {
    update: function() {
      var t = this.data,
        e = t.show,
        s = t.status;
      e ? s = "show" : "show" === s && (s = "hiding", this.handleClosing()), this.setData({
        status: s
      })
    },
    onClick: function() {
      this.data.closable && (this.handleClosing(), this.setData({
        status: "hiding"
      }), this.triggerEvent("close"))
    },
    handleClosing: function() {
      var t = this;
      this.timeoutHandler = setTimeout((function() {
        t.setData({
          status: "none"
        })
      }), 300)
    }
  }
});