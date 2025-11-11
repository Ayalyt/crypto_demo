Component({
  properties: {
    label: {
      type: String,
      value: ""
    },
    placeholder: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: "",
      observer: function(e, t, a) {
        e !== t && this.setData({
          inputValue: e
        })
      }
    },
    type: {
      type: String,
      value: "text"
    },
    password: {
      type: Boolean,
      value: !1
    },
    disabled: {
      type: Boolean,
      value: !1,
      observer: function(e, t, a) {}
    },
    notRequired: {
      type: Boolean,
      value: !1
    },
    maxlength: {
      type: Number,
      value: 140
    }
  },
  data: {
    inputValue: "",
    focus: !1,
    showClear: !1,
    currentLength: 0
  },
  lifetimes: {
    attached: function() {
      var e = this.data.value,
        t = {};
      e && (t.inputValue = e), this.setData(t)
    }
  },
  methods: {
    handleInput: function(e) {
      var t = e.detail.value,
        a = !(null == t || 0 === t.length);
      this.setData({
        showClear: a
      }), this.triggerEvent("input", {
        value: t
      })
    },
    handleFocus: function(e) {
      var t = e.detail.value,
        a = !(null == t || 0 === t.length);
      this.setData({
        showClear: a
      })
    },
    handleBlur: function() {
      this.setData({
        showClear: !1
      })
    },
    handleConfirm: function() {},
    handleClear: function() {
      this.setData({
        showClear: !1,
        inputValue: "",
        focus: !0
      })
    }
  }
});