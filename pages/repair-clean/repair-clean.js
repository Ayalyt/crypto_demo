var t = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = require("../../03F505464CF6B1BF65936D4171E96AC2.js");
Page({
  data: {
    repairCount: 0,
    cleanCount: 0
  },
  onLoad: function(t) {
    this.getEvaluationCount()
  },
  onShow: function() {
    try {
      (0, t.zhugeTrack)("服务-进入报修保洁页面")
    } catch (t) {
      console.log("err", t)
    }
    this.getEvaluationCount()
  },
  getEvaluationCount: function() {
    var t = this;
    a.post({
      url: "/mp-living/work-order/evaluation/count",
      handleError: "ALL",
      data: {}
    }).then((function() {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t.setData({
        repairCount: a.repairCount,
        cleanCount: a.cleanCount
      })
    }))
  },
  goToRepair: function() {
    try {
      (0, t.zhugeTrack)("服务-报修保洁-点击维修")
    } catch (t) {
      console.log("err", t)
    }
    wx.navigateTo({
      url: "/packageA/pages/repair/list/list"
    })
  },
  goToClean: function() {
    try {
      (0, t.zhugeTrack)("服务-报修保洁-点击保洁")
    } catch (t) {
      console.log("err", t)
    }
    wx.navigateTo({
      url: "/packageA/pages/repair-clean/clean/list/list"
    })
  }
});