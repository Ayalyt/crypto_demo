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
    message: {
      type: String,
      value: ""
    }
  },
  data: {},
  methods: {
    onClose: function() {
      this.triggerEvent("close")
    },
    onRetry: function() {
      this.triggerEvent("retry")
    }
  }
});