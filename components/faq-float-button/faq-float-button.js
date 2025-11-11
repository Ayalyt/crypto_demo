Component({
  properties: {
    type: {
      type: Number,
      value: 0
    },
    show: {
      type: Boolean,
      value: !0
    }
  },
  data: {},
  methods: {
    hanleJump: function() {
      wx.navigateTo({
        url: "/pages/faq/faq?type=" + this.data.type
      })
    }
  }
});