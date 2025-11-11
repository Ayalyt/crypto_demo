Component({
  options: {
    multipleSlots: !0
  },
  properties: {
    maskClosable: {
      type: Boolean,
      value: !0
    },
    title: String
  },
  data: {
    visible: !1
  },
  methods: {
    handleClickMask: function() {
      this.properties.maskClosable && this.onHide()
    },
    onHide: function() {
      this.setData({
        visible: !1
      })
    },
    onShow: function() {
      this.setData({
        visible: !0
      })
    }
  },
  catchtouchstart: function() {
    return !1
  }
});