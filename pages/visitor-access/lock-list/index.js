var t = require("../../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../../03F505464CF6B1BF65936D4171E96AC2.js");
getApp();
Page({
  data: {
    countDown: {
      currentTime: 0,
      endTime: 0
    },
    accessControlInfoList: [],
    visitRecordId: 0,
    status: 6,
    timeList: [],
    isLessThan3Seconds: !1
  },
  apartmentId: 0,
  buildingId: 0,
  getLockList: function() {
    var e = this;
    i.post({
      url: "/mp-visitor/visit/visitorAccessControlListV2",
      handleError: !0,
      showLoading: !0,
      data: {
        buildingIdS: this.buildingId.replaceAll("-", ",")
      }
    }).then((function(i) {
      if (i && i.submitTime) {
        var s = i.submitTime,
          n = new Date(s.replace(/-/g, "/")).getTime(),
          a = Date.now(),
          o = Math.abs((a - n) / 1e3);
        e.setData({
          isLessThan3Seconds: o < 3
        })
      }
      var r = (i.accessControlInfoList || []).map((function(e) {
        return t(t({}, e), {}, {
          powerPng: 2 === i.status ? "https://sce-dev-frstatic.oss-cn-shanghai.aliyuncs.com/miniprogram-activity/visitor-access/power-key.png" : void 0
        })
      }));
      3 !== i.status && 4 !== i.status || wx.showModal({
        content: "授权已失效",
        okText: "确定",
        confirmColor: "#E0AE01",
        success: function(t) {
          wx.reLaunch({
            url: "/pages/visitor-access/register/index?apartmentId=".concat(e.apartmentId, "&buildingId=").concat(e.buildingId)
          })
        }
      }), e.setData({
        status: i.status,
        visitRecordId: i.visitRecordId,
        countDown: {
          currentTime: i.currentTime,
          endTime: i.endTime
        },
        accessControlInfoList: r
      })
    })).catch((function(t) {
      wx.showToast({
        title: t.data.data.message || t.message,
        icon: "none",
        duration: 5e3
      })
    }))
  },
  stopWaiting: function() {
    for (var t = 0; t < this.data.timeList.length; t++) clearTimeout(this.data.timeList[t])
  },
  endVisit: function() {
    var t = this;
    i.post({
      url: "/mp-visitor/visit/visit-end",
      handleError: !0,
      data: {
        visitRecordId: this.data.visitRecordId
      }
    }).then((function(i) {
      wx.showToast({
        title: "请求已结束",
        icon: "none"
      }), t.getLockList()
    })).catch((function(t) {
      wx.showToast({
        title: t.data.data.message || t.message,
        icon: "none",
        duration: 5e3
      })
    }))
  },
  openLock: function(t) {
    var e = this;
    wx.showLoading({
      title: "加载中...",
      mask: !0
    }), i.post({
      url: "/mp-visitor/visit/unlock",
      handleError: !0,
      data: {
        apartmentId: this.apartmentId,
        deviceId: t,
        visitRecordId: this.data.visitRecordId
      }
    }).then((function(t) {
      wx.hideLoading(), wx.showToast({
        title: "开门请求发送成功",
        icon: "none"
      }), e.getLockList()
    })).catch((function(t) {
      wx.hideLoading(), wx.showToast({
        title: t.data.data.message || t.message,
        icon: "none",
        duration: 5e3
      })
    }))
  },
  handleCountDownEnd: function() {
    this.getLockList()
  },
  handleRefresh: function() {
    this.getLockList()
  },
  handleEndAuth: function() {
    this.endVisit()
  },
  handleClickOpen: function(t) {
    var i = t.currentTarget.dataset.deviceId;
    2 === this.data.status && this.openLock(i)
  },
  onLoad: function(t) {
    wx.hideHomeButton(), t.apartmentId && (this.apartmentId = t.apartmentId), t.buildingId && (this.buildingId = t.buildingId)
  },
  onReady: function() {},
  onShow: function() {
    var t = this;
    this.getLockList(), this.refreshTimer && clearTimeout(this.refreshTimer), this.refreshTimer = setTimeout((function() {
      t.handleRefresh()
    }), 3e3)
  },
  onHide: function() {
    this.stopWaiting(), this.refreshTimer && (clearTimeout(this.refreshTimer), this.refreshTimer = null)
  },
  onUnload: function() {
    this.stopWaiting(), this.refreshTimer && (clearTimeout(this.refreshTimer), this.refreshTimer = null)
  }
});