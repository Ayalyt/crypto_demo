var t = require("../../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../../03F505464CF6B1BF65936D4171E96AC2.js"),
  i = require("../../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = require("../../../559B5D914CF6B1BF33FD35961C396AC2.js").certificates,
  n = [{
    value: 6,
    text: "访客",
    displayText: "访客"
  }, {
    value: 7,
    text: "同住人",
    displayText: "同住人"
  }];
getApp();
Page({
  data: {
    certificates: a,
    reasonList: n,
    isNewVisitor: !0,
    visitorInfo: {
      apartmentName: "",
      buildingName: "",
      certificateNumber: "",
      certificateType: "",
      certificateTypeId: 0,
      name: "",
      phone: "",
      reason: n[0].displayText,
      reasonNum: n[0].value,
      roomName: ""
    },
    accessControl: !1,
    show: !1
  },
  apartmentId: 0,
  buildingId: 0,
  apartmentIdS: "",
  buildingIdS: "",
  handleAuthReady: function(t) {
    t.detail.userInfo.id && (this.data.cdpLoginInfo = t.detail, this.autoAuthLogin(t.detail.userInfo.id, t.detail.sessionId, t.detail.userInfo.phone))
  },
  autoAuthLogin: function(e, a, n) {
    var o = this;
    i.autoAuthLogin(e, a).then((function(a) {
      if (a) {
        i.saveMobileUserId(n, e);
        var s = o.data.visitorInfo;
        o.setData({
          visitorInfo: t(t({}, s), {}, {
            phone: n
          })
        }), o.getVisitorDetail(), o.getBuildingName(), o.getApartmentName(), o.handleCheck(o.buildingIdS.replaceAll("-", ","))
      }
    }))
  },
  handleCheck: function(t) {
    var i = this;
    e.post({
      url: "/mp-visitor/visit/queryVisitorRealTimeStatusV2",
      data: {
        buildingIdS: t
      },
      showLoading: !0,
      handleError: !0
    }).then((function(t) {
      t && t.statusFlag && i.jumpNextPage(), i.setData({
        show: !0
      })
    })).catch((function(t) {
      i.setData({
        show: !0
      }), wx.showToast({
        title: t.data.data.message || t.message,
        icon: "none",
        duration: 5e3
      })
    }))
  },
  addVisitor: function() {
    var t = this,
      i = this.data.visitorInfo,
      a = i.buildingName,
      n = i.certificateNumber,
      o = i.certificateType,
      s = i.certificateTypeId,
      r = i.name,
      d = i.phone,
      c = i.reason,
      u = i.roomName,
      l = i.reasonNum,
      m = i.remarks;
    e.post({
      url: "/mp-visitor/visit/addVisitV2",
      data: {
        apartmentIdS: this.apartmentIdS.replaceAll("-", ","),
        buildingIdS: this.buildingIdS.replaceAll("-", ","),
        buildingName: a,
        certificateNumber: n,
        certificateType: o,
        certificateTypeId: s,
        name: r,
        phone: d,
        reason: c,
        roomName: u,
        reasonNum: l,
        remarks: m
      },
      showLoading: !0,
      handleError: !0
    }).then((function(e) {
      e.success && t.data.accessControl ? (wx.showToast({
        title: "登记成功",
        icon: "none"
      }), t.jumpNextPage()) : wx.showModal({
        title: "",
        content: "登记成功",
        showCancel: !1,
        confirmText: "确定",
        success: function(t) {
          wx.reLaunch({
            url: "/pages/service/service"
          })
        }
      })
    })).catch((function(t) {
      wx.showToast({
        title: t.data.data.message || t.message,
        icon: "none",
        duration: 5e3
      })
    }))
  },
  handleGetReason: function(e) {
    var i = e.target.id,
      a = void 0 === i ? 0 : i,
      n = e.currentTarget.dataset.typename,
      o = void 0 === n ? "" : n,
      s = this.data.visitorInfo;
    this.setData({
      visitorInfo: t(t({}, s), {}, {
        reason: o,
        reasonNum: Number(a)
      })
    })
  },
  getBuildingName: function() {
    var i = this;
    e.post({
      url: "/mp-visitor/visit/query-building-info",
      data: {
        apartmentId: this.apartmentId
      },
      showLoading: !0
    }).then((function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        a = e.filter((function(t) {
          return t.buildingId === Number(i.buildingId)
        })),
        n = i.data.visitorInfo;
      i.setData({
        visitorInfo: t(t({}, n), {}, {
          buildingName: a.length ? a[0].buildingName : void 0
        })
      })
    })).catch((function(t) {
      wx.showToast({
        title: t.data.data.message || t.message,
        icon: "none",
        duration: 5e3
      })
    }))
  },
  getApartmentName: function() {
    var i = this;
    e.post({
      url: "/mp-visitor/visit/query-all-apartment-list",
      data: {},
      showLoading: !0
    }).then((function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        a = e.filter((function(t) {
          return t.apartmentId === Number(i.apartmentId)
        })),
        n = i.data.visitorInfo;
      i.setData({
        visitorInfo: t(t({}, n), {}, {
          apartmentName: a.length ? a[0].apartmentName : void 0
        })
      })
    })).catch((function(t) {
      wx.showToast({
        title: t.data.data.message || t.message,
        icon: "none",
        duration: 5e3
      })
    }))
  },
  getVisitorDetail: function() {
    var i = this;
    e.post({
      url: "/mp-visitor/visit/processing",
      handleError: !0,
      data: {
        apartmentId: this.apartmentId
      },
      showLoading: !0
    }).then((function(e) {
      if (i.setData({
          accessControl: e.accessControl
        }), 2 === e.visitorProcessing) {
        var a = i.data.visitorInfo,
          n = e.visitorInfoVo,
          o = n.certificateNumber,
          s = n.certificateType,
          r = n.certificateTypeId,
          d = n.name,
          c = n.phone;
        i.setData({
          visitorInfo: t(t({}, a), {}, {
            certificateNumber: o,
            certificateType: s,
            certificateTypeId: r,
            name: d,
            phone: c
          }),
          accessControl: e.accessControl,
          isNewVisitor: !1
        })
      }
    })).catch((function(t) {
      wx.showToast({
        title: t.data.data.message || t.message,
        icon: "none",
        duration: 5e3
      })
    }))
  },
  handleGetName: function(e) {
    var i = e.detail.value,
      a = this.data.visitorInfo;
    this.setData({
      visitorInfo: t(t({}, a), {}, {
        name: i
      })
    })
  },
  handleGetRoomName: function(e) {
    var i = e.detail.value,
      a = this.data.visitorInfo;
    this.setData({
      visitorInfo: t(t({}, a), {}, {
        roomName: i
      })
    })
  },
  handleGetCardType: function(e) {
    var i = e.detail.data,
      a = i.value,
      n = i.text,
      o = this.data.visitorInfo;
    this.setData({
      visitorInfo: t(t({}, o), {}, {
        certificateType: n,
        certificateTypeId: a
      })
    })
  },
  handleGetCertificateNumber: function(e) {
    var i = e.detail.value,
      a = this.data.visitorInfo;
    this.setData({
      visitorInfo: t(t({}, a), {}, {
        certificateNumber: i
      })
    })
  },
  handleGetRemark: function(e) {
    var i = e.detail.value,
      a = this.data.visitorInfo;
    this.setData({
      visitorInfo: t(t({}, a), {}, {
        remarks: i
      })
    })
  },
  jumpNextPage: function() {
    wx.redirectTo({
      url: "/pages/visitor-access/lock-list/index?apartmentId=".concat(this.apartmentIdS, "&buildingId=").concat(this.buildingIdS)
    })
  },
  handleSubmit: function() {
    var t = this.data.visitorInfo,
      e = (t.buildingName, t.certificateNumber),
      i = (t.certificateType, t.certificateTypeId),
      a = (t.name, t.reason, t.roomName);
    t.remarks;
    !e || "1" !== i || /^\d{15}$|^\d{18}$|^\d{17}(X|x)$/.test(e) ? a ? this.addVisitor() : wx.showToast({
      title: "请选择房间",
      icon: "none"
    }) : wx.showToast({
      title: "请输入正确的身份证号码",
      icon: "none"
    })
  },
  onLoad: function(t) {
    wx.hideHomeButton(), t.apartmentId && (this.apartmentId = t.apartmentId.split("-").length ? t.apartmentId.split("-")[0] : 0, this.apartmentIdS = t.apartmentId), t.buildingId && (this.buildingId = t.buildingId.split("-").length ? t.buildingId.split("-")[0] : 0, this.buildingIdS = t.buildingId)
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {}
});