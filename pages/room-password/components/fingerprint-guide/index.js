Component({
  options: {
    addGlobalClass: !0,
    multipleSlots: !0
  },
  properties: {
    show: {
      type: Boolean,
      value: !1
    },
    title: {
      type: String,
      value: ""
    },
    content: {
      type: String,
      value: ""
    },
    footer: {
      type: String,
      value: ""
    },
    tips: {
      type: String,
      value: ""
    }
  },
  data: {
    showClose: !1
  },
  methods: {
    onClose: function() {
      this.setData({
        showClose: !1
      }), this.triggerEvent("close")
    },
    onConfirm: function() {
      this.triggerEvent("confirm")
    },
    onCountDownCompleted: function() {
      this.setData({
        showClose: !0
      })
    }
  }
});