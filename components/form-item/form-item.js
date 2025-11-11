require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js");
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
    placeholderStyle: {
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
    maxlength: {
      type: Number,
      value: 140
    },
    focus: {
      type: Boolean,
      value: !1
    },
    inputType: {
      type: String,
      value: "Phone"
    },
    cardNo: {
      type: Number,
      value: 0,
      observer: function(e, t, a) {
        this.setData({
          oldVal: e
        })
      }
    }
  },
  data: {
    inputValue: "",
    focused: !1,
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
    bindinput: function(e) {
      var t = e.detail.value,
        a = e.detail.cursor,
        l = !(null == t || 0 === t.length);
      this.setData({
        showClear: l
      }), this.triggerEvent("input", {
        value: t,
        cursor: a
      })
    },
    bindfocus: function(e) {
      var t = e.detail.value,
        a = !(null == t || 0 === t.length);
      this.setData({
        showClear: a
      })
    },
    bindblur: function() {
      this.setData({
        showClear: !1
      })
    },
    bindconfirm: function() {},
    onClear: function() {
      this.setData({
        showClear: !1,
        inputValue: "",
        focused: !0
      })
    }
  }
});