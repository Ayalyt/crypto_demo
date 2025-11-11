var t = require("../../D2980F274CF6B1BFB4FE672005896AC2.js"),
  e = require("../../03F505464CF6B1BF65936D4171E96AC2.js");
Component({
  properties: {
    listData: {
      type: Array,
      value: [],
      observer: function(t, e, i) {
        this.initData()
      }
    },
    isEdit: {
      type: Boolean,
      value: !0
    }
  },
  data: {},
  lifetimes: {
    attached: function() {}
  },
  methods: {
    initData: function() {
      for (var e = 0; e < this.data.listData.length; e++) {
        var i = this.data.listData[e];
        i.rentContent = i.tenancy + "个月 至" + t.dateFormatter("yyyy年MM月dd日", new Date(i.reletEndDate)), i.footerNodesArray = this.initFooterButton(i)
      }
      this.setData({
        listData: this.data.listData
      })
    },
    initFooterButton: function(t) {
      var e = [];
      return "RELET" == t.type ? "XZDB" == t.status || "" == t.status ? e.push({
        type: -1,
        title: "取消"
      }) : "XZZ" == t.status ? wx.getStorageSync("sourcePath") ? e.push({
        type: 1,
        title: "查看"
      }) : e.push({
        type: -1,
        title: "取消"
      }) : e.push({
        type: 1,
        title: "查看"
      }) : "EVICTION" == t.type && ("TZZ" == t.evictionStatus ? (e.push({
        type: -1,
        title: "取消"
      }), e.push({
        type: 2,
        title: "编辑"
      })) : "TZIN" == t.evictionStatus && 1 === t.canClickPay ? (e.push({
        type: 3,
        title: "去支付"
      }), e.push({
        type: 1,
        title: "查看"
      })) : "YTZ" == t.evictionStatus && 1 === t.evaluationStatus ? (e.push({
        type: 4,
        title: "查看评价"
      }), e.push({
        type: 1,
        title: "查看详单"
      })) : "YTZ" == t.evictionStatus && 2 === t.evaluationStatus ? (e.push({
        type: 5,
        title: "去评价"
      }), e.push({
        type: 1,
        title: "查看详单"
      })) : "TZWJS" == t.evictionStatus ? e.push({
        type: 1,
        title: "去确认"
      }) : e.push({
        type: 1,
        title: "查看"
      })), e
    },
    goToEditRenewal: function(t) {
      var e = parseInt(t.currentTarget.dataset.list),
        i = parseInt(t.currentTarget.dataset.type); - 1 == i ? this.cancel(e) : -2 == i ? this.delete(e) : 1 == i ? this.preview(e) : 2 == i ? this.edit(e) : 3 == i ? this.pay() : 4 == i ? this.lookEvaluation(e) : 5 == i && this.goEvaluation(e)
    },
    cancel: function(t) {
      var e = this,
        i = this.data.listData[t];
      wx.showModal({
        title: "",
        content: "RELET" == i.type ? "确定取消续租申请？" : "确定取消退租申请？",
        confirmText: "确定",
        showCancel: !0,
        cancelText: "点错了",
        success: function(t) {
          t.confirm ? (console.log("用户点击确定"), e.cancelRequest(i)) : t.cancel && console.log("用户点击取消")
        }
      })
    },
    cancelRequest: function(t) {
      var i = this;
      wx.showLoading({
        title: "",
        mask: !0
      });
      var a = {
          reletId: t.applyId
        },
        n = "/living/relet/cancel-relet";
      "EVICTION" == t.type && (n = "/living/eviction/cancel-eviction", a = {
        evictionId: t.applyId
      }), e.post({
        url: n,
        data: a
      }).then((function(e) {
        wx.hideLoading(), "EVICTION" == t.type ? wx.showToast({
          title: "退租已取消",
          icon: "none"
        }) : wx.showToast({
          title: "续租已取消",
          icon: "none"
        }), i.triggerEvent("refresh", {})
      })).catch((function(t) {
        wx.hideLoading(), wx.showToast({
          title: t.data.data.message,
          icon: "none"
        })
      }))
    },
    edit: function(t) {
      var e = this.data.listData[t];
      this.triggerEvent("rentWithdrawAction", {
        item: e,
        type: 2
      })
    },
    delete: function(t) {
      var e = this,
        i = this.data.listData[t];
      wx.showModal({
        title: "",
        content: "RELET" == i.type ? "确定删除续租申请？" : "确定删除退租申请？",
        confirmText: "删除",
        showCancel: !0,
        cancelText: "点错了",
        success: function(t) {
          t.confirm ? (console.log("用户点击确定"), e.deleteRequest(i)) : t.cancel && console.log("用户点击取消")
        }
      })
    },
    deleteRequest: function(t) {
      var i = this;
      wx.showLoading({
        title: "",
        mask: !0
      });
      var a = {
          reletId: t.applyId
        },
        n = "/living/relet/delete-relet";
      "EVICTION" == t.type && (n = "/living/eviction/delete-eviction", a = {
        evictionId: t.applyId
      }), e.post({
        url: n,
        data: a
      }).then((function(e) {
        wx.hideLoading(), "EVICTION" == t.type ? wx.showToast({
          title: "退租已删除",
          icon: "none"
        }) : wx.showToast({
          title: "续租已删除",
          icon: "none"
        }), i.triggerEvent("refresh", {})
      }))
    },
    preview: function(t) {
      var e = this.data.listData[t];
      this.triggerEvent("details", {
        item: e,
        type: "1"
      })
    },
    pay: function() {
      var t = wx.getStorageSync("sourcePath");
      wx.navigateTo({
        url: t ? "../bill/bill-list/index?type=1" : "../BillList/BillList?type=1"
      })
    },
    lookEvaluation: function(t) {
      var e = this.data.listData[t],
        i = e.leaseOrderId,
        a = e.evictionId,
        n = e.evaluationId,
        o = encodeURIComponent("withdraw-evalute-detail?leaseOrderId=".concat(i, "&evictionId=").concat(a, "&evaluationId=").concat(n));
      this.jumpPage({
        url: "/pages/h5-container/index?webPath=".concat(o)
      })
    },
    goEvaluation: function(t) {
      var e = this.data.listData[t],
        i = e.leaseOrderId,
        a = e.evictionId,
        n = encodeURIComponent("withdraw-evalute?leaseOrderId=".concat(i, "&evictionId=").concat(a));
      this.jumpPage({
        url: "/pages/h5-container/index?webPath=".concat(n)
      })
    },
    goToDetails: function(t) {
      var e = t.currentTarget.dataset.item,
        i = t.currentTarget.dataset.type;
      this.triggerEvent("details", {
        item: e,
        type: i
      })
    },
    jumpPage: function(t) {
      wx.getStorageSync("token") ? wx.navigateTo(t) : wx.navigateTo({
        url: "/pages/login/login"
      })
    }
  }
});