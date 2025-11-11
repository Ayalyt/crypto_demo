Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    isShow: {
      type: Boolean,
      value: !1,
      observer: function(t, e, i) {
        var s = this;
        this.timer = setTimeout((function() {
          s.setData({
            isShow: !1
          })
        }), 1e3 * this.data.time), this.timer = null
      }
    },
    type: {
      type: String,
      value: ""
    },
    infoText: {
      type: String,
      value: ""
    }
  },
  data: {
    time: 10,
    isShow: !1
  },
  methods: {
    show: function(t) {
      this.setData({
        isShow: !0
      })
    },
    close: function(t) {
      this.setData({
        isShow: !1
      })
    }
  }
});