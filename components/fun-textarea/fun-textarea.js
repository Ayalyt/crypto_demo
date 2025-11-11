Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: "",
      observer: function(t, e, n) {
        t !== e && this.setValue(t)
      }
    },
    maxlength: {
      type: Number,
      value: 200
    },
    autoHeight: {
      type: Boolean,
      value: !1
    },
    showCount: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    inputing: !1,
    inputValue: "",
    platform: ""
  },
  lifetimes: {
    attached: function() {
      var t = this;
      wx.getSystemInfo({
        success: function(e) {
          t.setData({
            platform: e.platform
          })
        }
      })
    }
  },
  methods: {
    setValue: function(t) {
      this.setData({
        inputValue: t,
        inputValueArr: t.split("\n")
      })
    },
    onSwitch: function() {
      this.setData({
        inputing: !0
      })
    },
    onInput: function(t) {
      this.setValue(t.detail.value), this.triggerEvent("input", t.detail)
    },
    onBlur: function(t) {
      this.setData({
        inputing: !1
      }), this.triggerEvent("blur", t)
    }
  }
});