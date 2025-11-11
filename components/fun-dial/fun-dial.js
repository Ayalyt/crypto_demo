Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    open: {
      type: Boolean,
      value: !1
    },
    salesInfo: {
      type: Array,
      value: []
    }
  },
  data: {},
  observers: {},
  lifetimes: {},
  methods: {
    onDial: function(e) {
      var o = (e.currentTarget.dataset || {}).item;
      wx.makePhoneCall({
        phoneNumber: o.salePhone + ""
      })
    },
    onClose: function() {
      this.triggerEvent("close")
    }
  }
});