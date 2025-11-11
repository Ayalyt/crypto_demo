var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  i = require("../../A6E3DAA64CF6B1BFC085B2A108496AC2.js");
Page({
  data: {
    message: "",
    loading: !1
  },
  onLoad: function(t) {
    t.message && this.setData({
      message: t.message
    })
  },
  onShow: function() {
    this.getCityList()
  },
  onReload: function() {
    this.getCityList()
  },
  onUnload: function() {
    i.setExceptionsFlag(!1)
  },
  getCityList: function() {
    var i = this;
    this.setData({
      loading: !0
    }), t.post({
      url: "product/index/get-city-list",
      data: {
        showDistricts: !1
      }
    }).then((function(t) {
      i.setData({
        loading: !1
      }), t && wx.navigateBack()
    })).catch((function(t) {
      i.setData({
        loading: !1
      }), console.log("e", t)
    }))
  }
});