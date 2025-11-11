Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    value: {
      type: String,
      value: "",
      observer: function(t, e, a) {
        t !== e && this.setData({
          inputValue: t
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
    placeholder: {
      type: String,
      value: ""
    },
    placeholderStyle: {
      type: String,
      value: "color: #AFB5BB"
    },
    disabled: {
      type: Boolean,
      value: !1
    },
    maxlength: {
      type: Number,
      value: 140
    },
    focus: {
      type: Boolean,
      value: !1
    },
    pattern: {
      type: String,
      value: ""
    }
  },
  data: {
    inputValue: "",
    focused: !1,
    showClear: !1,
    isPassword: !1,
    showPwd: !1
  },
  lifetimes: {
    attached: function() {
      var t = this.data,
        e = t.value,
        a = t.password,
        s = {};
      a && (s.isPassword = !0), e && (s.inputValue = e), a && (s.showPwd = !1), this.setData(s)
    }
  },
  methods: {
    bindinput: function(t) {
      var e = t.detail.value,
        a = !(null == e || 0 === e.length),
        s = this.data.pattern;
      if (s && !new RegExp(s).test(e)) return {
        value: this.data.inputValue
      };
      this.setData({
        showClear: a,
        inputValue: e
      }), this.triggerEvent("input", {
        value: e
      })
    },
    bindfocus: function(t) {
      var e = t.detail.value,
        a = !(null == e || 0 === e.length);
      this.setData({
        showClear: a
      })
    },
    bindblur: function(t) {
      this.setData({
        showClear: !1
      }), this.triggerEvent("blur", t.detail)
    },
    bindconfirm: function() {},
    onClear: function() {
      this.setData({
        showClear: !1,
        inputValue: "",
        focused: !0
      }), this.triggerEvent("input", {
        value: ""
      })
    },
    onShowPwd: function() {
      this.setData({
        password: !1,
        showPwd: !0
      })
    },
    onHidePwd: function() {
      this.setData({
        password: !0,
        showPwd: !1
      })
    }
  }
});