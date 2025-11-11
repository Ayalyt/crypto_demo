Component({
  properties: {
    btnShow: {
      type: Boolean,
      value: !1
    },
    isCancel: {
      type: Boolean,
      value: !1
    },
    isSure: {
      type: Boolean,
      value: !0
    },
    cancelText: {
      type: String,
      value: !1
    },
    sureText: {
      type: String,
      value: !1
    },
    cancelEnabled: {
      type: Boolean,
      value: !0
    },
    sureEnabled: {
      type: Boolean,
      value: !0
    },
    fixed: {
      type: Boolean,
      value: !0
    }
  },
  data: {},
  methods: {
    cancelBtn: function() {
      this.data.cancelEnabled && this.triggerEvent("cancel")
    },
    sureBtn: function() {
      this.data.sureEnabled && this.triggerEvent("sure")
    }
  }
});