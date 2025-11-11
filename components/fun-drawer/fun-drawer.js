Component({
  options: {
    addGlobalClass: !0
  },
  externalClasses: ["extra-content-class"],
  properties: {
    direction: {
      type: String,
      value: "bottom"
    },
    offset: {
      type: Number,
      value: 0
    },
    destroyOnClose: {
      type: Boolean,
      value: !1
    },
    mask: {
      type: Boolean,
      value: !0
    },
    maskClosable: {
      type: Boolean,
      value: !0
    },
    zIndex: {
      type: Number,
      value: 100
    },
    show: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    status: "init"
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
      e ? s = "show" : "show" === s ? (s = "hiding", this.handleClosing()) : this.triggerEvent("open"), this.setData({
        status: s
      })
    },
    onClose: function() {
      this.handleClosing(), this.setData({
        status: "hiding"
      }), this.triggerEvent("close")
    },
    handleClosing: function() {
      var t = this;
      this.timeoutHandler = setTimeout((function() {
        t.setData({
          status: "hidden"
        })
      }), 300)
    }
  }
});