var t = require("../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../@babel/runtime/helpers/asyncToGenerator"),
  s = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  a = requirePlugin("hlSdk"),
  o = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  r = {
    1: "password-success",
    2: "password-danger",
    3: "password-danger"
  };
Page({
  data: {
    tapKey: "lock",
    showLoading: !0,
    orderNo: "",
    roomId: "",
    downTime: 60,
    isNoDataShow: !0,
    passwordList: [],
    hasPassword: !1,
    passwordError: !1,
    passwordInit: !1,
    showGuide: !1,
    showGuideError: !1,
    guideErrorMessage: "",
    showGuideSuccess: !1,
    guideSuccessMessage: "",
    canAddFingerprint: !1,
    warnModal: !1,
    waitTimes: 0,
    timeList: [],
    currentStatus: 0
  },
  isRegisterApp: !1,
  isRegisterUser: !1,
  deviceInfo: {},
  apartment: {},
  isFirstLoad: !0,
  onLoad: function(t) {},
  onReady: function() {
    this.info = this.selectComponent("#fun-info")
  },
  onShow: function() {
    this.isFirstLoad = !0, "lock" === this.data.tapKey ? this.initRefreshLockList(this.data.orderNo) : "fingerprint" === this.data.tapKey && this.initRefreshFingerList(this.data.orderNo)
  },
  onHide: function() {
    this.isFirstLoad = !1
  },
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  initRefreshLockList: function() {
    var t = this,
      s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (!s) return null;
    this.setData({
      showLoading: !0
    }), o.post({
      url: "/mp-living/room/lock/list",
      handleError: [627100117],
      showLoading: !0,
      data: {
        leaseOrderNo: s
      }
    }).then(function() {
      var s = i(e().mark((function i(s) {
        var a;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              a = s ? s.map((function(t) {
                return t.deviceId
              })) : [], o.post({
                url: "/mp-living/room/device/lock-password/refresh",
                showLoading: !0,
                data: {
                  deviceIds: a
                }
              }).then((function() {
                t.getPasswordList(t.data.orderNo, !0)
              }));
            case 2:
            case "end":
              return e.stop()
          }
        }), i)
      })));
      return function(t) {
        return s.apply(this, arguments)
      }
    }())
  },
  initRefreshFingerList: function() {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (!e) return null;
    this.setData({
      showLoading: !0
    }), o.post({
      url: "/mp-living/room/device/fingerprint/list",
      showLoading: !0,
      data: {
        leaseOrderNo: e
      }
    }).then((function(e) {
      var i = e ? e.map((function(t) {
        return t.deviceId
      })) : [];
      o.post({
        url: "/mp-living/room/device/lock-password/refresh",
        showLoading: !0,
        data: {
          deviceIds: i
        }
      }).then((function() {
        t.getFingerprintList(t.data.orderNo)
      }))
    }))
  },
  singleRefreshLock: function(t) {
    var e = this;
    o.post({
      url: "/mp-living/room/device/lock-password/refresh",
      showLoading: !0,
      data: {
        deviceIds: [t]
      }
    }).then((function() {
      e.getPasswordList(e.data.orderNo)
    }))
  },
  singleRefresh: function(t) {
    var e = t.currentTarget.dataset.value;
    this.singleRefreshLock(e)
  },
  handleClickWarn: function(t) {
    var e = this,
      i = t.currentTarget.dataset,
      s = i.value,
      a = i.operation,
      o = i.type;
    wx.showModal({
      content: "当前密码正在进行 ".concat(a, " 操作\r\n预计2分钟内生效"),
      confirmText: "关闭",
      confirmColor: "#E0AE01",
      cancelText: "刷新",
      success: function(t) {
        t.confirm || t.cancel && ("lock" === o ? e.singleRefreshLock(s) : e.singleRefreshFingerList(s))
      }
    })
  },
  timer: function() {
    var t = this,
      e = this.data.downTime;
    setTimeout((function() {
      e <= 0 ? t.setData({
        downTime: 60,
        disabled: !1
      }) : (t.setData({
        downTime: e - 1
      }), t.timer())
    }), 1e3)
  },
  bindIndex: function(t) {
    var e = this;
    this.setData({
      showGuide: !0
    }), a.bindIndex({
      lockId: t.sn,
      lockMac: t.lockMac,
      validStartTime: t.startTimeStr,
      validEndTime: t.endTimeStr
    }, (function(i) {
      0 !== i.errorCode ? e.setData({
        showGuide: !1,
        guideErrorMessage: i.message,
        showGuideError: !0
      }) : (e.setData({
        guideSuccessMessage: t.endTimeStr
      }), e.addFingerprint(e.data.orderNo, t.devicedId, i.data.index))
    }))
  },
  registerUser: function(t) {
    var e = this;
    wx.showLoading({
      title: "正在连接门锁"
    }), a.registerUser({
      bid: t.clientId,
      huid: t.thirdUid,
      name: "",
      sex: "",
      age: "",
      authentication: "",
      idType: "",
      idNo: "",
      mobile: "",
      email: ""
    }).then((function(i) {
      wx.hideLoading(), 0 !== i.errorCode ? e.setData({
        showGuideError: !0,
        guideErrorMessage: "".concat(i.message, "，请联系管理员")
      }) : (e.isRegisterUser = !0, e.bindIndex(t))
    })).catch((function(t) {
      wx.hideLoading(), wx.showToast({
        icon: "none",
        title: t
      })
    }))
  },
  registerApp: function(t) {
    var e = this;
    a.registerApp({
      appKey: t.clientKey,
      bid: t.clientId,
      pubKey: "",
      deviceInfo: "",
      deviceModel: "",
      deviceVendor: "",
      deviceImei: "",
      deviceVersion: "",
      deviceName: ""
    }, {
      sdkUrl: "https://business.funlive.net.cn",
      protocolUrl: "https://business.funlive.net.cn"
    }).then((function(i) {
      0 !== i.errorCode ? e.setData({
        showGuideError: !0,
        guideErrorMessage: "".concat(i.message, "，请联系管理员")
      }) : (e.isRegisterApp = !0, e.registerUser(t))
    })).catch((function(t) {
      console.log("err", t), e.setData({
        showGuideError: !0,
        guideErrorMessage: "注册APP失败，请联系管理员"
      })
    }))
  },
  onMonitorData: function(t) {
    this.apartment = t.detail;
    try {
      (0, s.zhugeTrack)("服务-门锁密码-点击切换公寓")
    } catch (t) {
      console.log("err", t)
    }
    if (this.isFirstLoad) try {
      (0, s.zhugeTrack)("服务-进入门锁密码页面", {
        "公寓名称": t.detail.apartmentName,
        "房间号": t.detail.buildingName + "-" + t.detail.roomNo + "室"
      })
    } catch (t) {
      console.log("err", t)
    }
    t.detail ? (this.setData({
      orderNo: t.detail.leaseOrderNo,
      roomId: t.detail.roomId,
      isNoDataShow: !1,
      currentStatus: t.detail.status
    }), "lock" === this.data.tapKey ? this.initRefreshLockList(t.detail.leaseOrderNo) : "fingerprint" === this.data.tapKey && this.initRefreshFingerList(t.detail.leaseOrderNo)) : this.setData({
      showLoading: !1,
      isNoDataShow: !0
    })
  },
  getPasswordList: function() {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!e) return null;
    this.setData({
      showLoading: !0
    }), o.post({
      url: "/mp-living/room/lock/list",
      handleError: [627100117],
      showLoading: !0,
      data: {
        leaseOrderNo: e
      }
    }).then((function(e) {
      if (Array.isArray(e))
        if (0 !== e.length) {
          var s = !1,
            a = e.map((function(t) {
              return t.password && (s = !0, t.color = r[t.status], t.passwords = t.password.split("")), t
            }));
          if (t.setData({
              passwordInit: s,
              hasPassword: !0,
              passwordError: !1,
              showLoading: !1,
              passwordList: a
            }), i) {
            var o = e.filter((function(t) {
              return 2 === t.supplyExeStatus && ("延期" === t.latestOperation || "创建" === t.latestOperation || "修改" === t.latestOperation)
            }));
            if (o.length > 0) {
              var n = o[0],
                d = n.deviceId,
                c = n.updateTime,
                h = n.latestOperation;
              t.clickErrorModal(d, c, h, "lock")
            }
          }
        } else t.setData({
          hasPassword: !1,
          passwordError: !1,
          showLoading: !1
        });
      else t.setData({
        hasPassword: !1,
        passwordError: !0,
        showLoading: !1
      })
    })).catch((function(e) {
      t.setData({
        hasPassword: !1,
        passwordError: !0,
        showLoading: !1
      }), wx.showToast({
        icon: "none",
        title: e.data.data.message
      })
    }))
  },
  reTry: function() {
    "lock" === this.data.tapKey ? this.getPasswordList(this.data.orderNo) : "fingerprint" === this.data.tapKey && this.getFingerprintList(this.data.orderNo)
  },
  selectedPassword: function(t) {
    var e = this.data.tapKey;
    if ("lock" === e) {
      var i = t.detail,
        s = i.id,
        a = i.endtime,
        o = i.password;
      s && wx.navigateTo({
        url: "/pages/customize-password/index?id=".concat(s, "&endtime=").concat(a, "&password=").concat(o, "&leaseOrderNo=").concat(this.data.orderNo)
      })
    } else if ("fingerprint" === e) {
      var r = t.detail.deviceInfo;
      this.deviceInfo = r, 2 === Number(r.lockFlag) ? this.addIotFinger(r) : 3 === Number(r.lockFlag) ? this.addLangsiFinger(r) : this.registerApp(r)
    }
  },
  addLangsiFinger: function(t) {
    var e = this;
    this.setData({
      showGuide: !0
    }), o.post({
      url: "/mp-living/room/enter/iot/FingerInputPattern",
      showLoading: !0,
      data: {
        leaseOrderNo: this.data.orderNo,
        deviceId: t.devicedId
      }
    }).then((function(i) {
      i.passwordNo && e.addFingerprint(e.data.orderNo, t.devicedId, i.passwordNo)
    })).catch((function(t) {
      e.setData({
        showGuide: !1,
        guideErrorMessage: t.data.data.message,
        showGuideError: !0
      })
    }))
  },
  addIotFinger: function(t) {
    var e = this;
    this.setData({
      showGuide: !0
    }), o.post({
      url: "/mp-living/room/enter/iot/FingerInputPattern",
      showLoading: !0,
      data: {
        leaseOrderNo: this.data.orderNo,
        deviceId: t.devicedId
      }
    }).then((function(i) {
      e.startWaiting(i.callId, t.devicedId, t.endTimeStr)
    })).catch((function(t) {
      e.setData({
        showGuide: !1,
        guideErrorMessage: t.data.data.message,
        showGuideError: !0
      })
    }))
  },
  getIotPasswordId: function(t, e, i) {
    var s = this,
      a = this.data.waitTimes + 1;
    if (a >= 13) wx.showToast({
      title: " 请求超时",
      icon: "none"
    });
    else {
      var r = setTimeout((function() {
        return s.getIotPasswordId(t, e, i)
      }), 5e3);
      this.data.timeList.push(r), o.post({
        url: "/mp-living/room/query/iot/fingerlockpasswordNo",
        showLoading: !0,
        data: {
          callId: t
        },
        handleError: "ALL"
      }).then((function(t) {
        t.passwordNo && t.iotPasswordId ? (s.stopWaiting(), s.setData({
          guideSuccessMessage: i,
          showGuide: !1
        }), s.setData({
          showLoading: !1,
          showGuide: !1,
          showGuideSuccess: !0
        }), s.getFingerprintList(s.data.orderNo)) : s.setData({
          waitTimes: a
        })
      })).catch((function(t) {
        s.stopWaiting(), s.setData({
          showGuide: !1,
          guideErrorMessage: t.data.data.message,
          showGuideError: !0,
          waitTimes: 0
        })
      }))
    }
  },
  startWaiting: function(t, e, i) {
    var s = this;
    setTimeout((function() {
      return s.getIotPasswordId(t, e, i)
    }), 5e3)
  },
  stopWaiting: function() {
    for (var t = 0; t < this.data.timeList.length; t++) clearTimeout(this.data.timeList[t])
  },
  handleClickError: function(t) {
    var e = t.currentTarget.dataset,
      i = e.value,
      s = e.time,
      a = e.operation,
      o = e.type;
    this.clickErrorModal(i, s, a, o)
  },
  clickErrorModal: function(t, e, i, s) {
    var a = this;
    wx.showModal({
      content: "当前密码在".concat(e, "执行\r\n").concat(i, " 操作失败了"),
      confirmText: "重试",
      confirmColor: "#E0AE01",
      success: function(e) {
        e.confirm && o.post({
          url: "/mp-living/room/device/lock-password/retry",
          showLoading: !0,
          data: {
            latestOperation: i,
            passwordId: t
          }
        }).then((function() {
          "lock" === s ? a.getPasswordList(a.data.orderNo) : a.getFingerprintList(a.data.orderNo)
        }))
      }
    })
  },
  addFingerprint: function() {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
    this.setData({
      showLoading: !0
    }), o.post({
      url: "/mp-living/room/device/fingerprint/add",
      showLoading: !0,
      data: {
        leaseOrderNo: e,
        deviceId: i,
        passwordNo: s,
        iotPasswordId: a
      }
    }).then((function(e) {
      t.setData({
        showLoading: !1,
        showGuide: !1,
        showGuideSuccess: !0
      }), t.getFingerprintList(t.data.orderNo)
    })).catch((function(e) {
      t.setData({
        showGuide: !1,
        showLoading: !1
      }), wx.showToast({
        icon: "none",
        title: e.data.data.message
      })
    }))
  },
  singleRefreshFingerList: function(t) {
    var e = this;
    o.post({
      url: "/mp-living/room/device/lock-password/refresh",
      showLoading: !0,
      data: {
        deviceIds: [t]
      }
    }).then((function() {
      e.getFingerprintList(e.data.orderNo)
    }))
  },
  singleRefreshFinger: function(t) {
    var e = t.currentTarget.dataset.value;
    this.singleRefreshFingerList(e)
  },
  deleteFingerprint: function() {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    this.setData({
      showLoading: !0
    }), o.post({
      url: "/mp-living/room/device/fingerprint/delete",
      showLoading: !0,
      data: {
        id: e
      }
    }).then((function(e) {
      t.setData({
        showLoading: !1
      }), wx.showToast({
        icon: "none",
        title: "删除成功"
      }), t.getFingerprintList(t.data.orderNo)
    })).catch((function(e) {
      t.setData({
        showLoading: !1
      }), wx.showToast({
        icon: "none",
        title: e.data.data.message
      })
    }))
  },
  handleGuideClose: function() {
    this.stopWaiting(), this.setData({
      showGuide: !1,
      waitTimes: 0
    })
  },
  handleGuideErrorClose: function() {
    this.setData({
      showGuideError: !1
    })
  },
  handleGuideErrorRetry: function() {
    this.setData({
      showGuideError: !1
    }), 2 === Number(this.deviceInfo.lockFlag) ? this.addIotFinger(this.deviceInfo) : this.registerApp(this.deviceInfo)
  },
  handleGuideSuccessClose: function() {
    this.setData({
      showGuideSuccess: !1
    })
  },
  onCountDownCompleted: function() {
    this.setData({
      showGuide: !1,
      showGuideError: !0,
      guideErrorMessage: "连接错误"
    })
  },
  handleDeleteFingerprint: function(t) {
    var e = this,
      i = t.currentTarget.dataset,
      s = i.id;
    i.name;
    wx.showModal({
      title: "提示",
      content: "操作删除指纹密码，门锁需要等待2分钟，删除操作将在下一次开门后生效",
      success: function(t) {
        t.confirm && e.deleteFingerprint(s)
      }
    })
  },
  getFingerprintList: function() {
    var e = this,
      i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (!i) return null;
    this.setData({
      showLoading: !0
    }), o.post({
      url: "/mp-living/room/device/fingerprint/list",
      showLoading: !0,
      data: {
        leaseOrderNo: i
      }
    }).then((function(i) {
      if (Array.isArray(i)) {
        var s = i.map((function(e) {
          return t(t({}, e), {}, {
            fingerPrintList: (e.fingerPrintList || []).map((function(e) {
              return t(t({}, e), {}, {
                color: r[e.status]
              })
            })),
            cannotAdd: (e.fingerPrintList || []).length >= 6
          })
        }));
        e.setData({
          canAddFingerprint: !0,
          showLoading: !1,
          passwordList: s
        })
      } else e.setData({
        showLoading: !1,
        canAddFingerprint: !1,
        passwordList: []
      })
    })).catch((function(t) {
      e.setData({
        showLoading: !1,
        canAddFingerprint: !1
      })
    }))
  },
  handleChangeTap: function(t) {
    try {
      (0, s.zhugeTrack)("服务-门锁密码-点击锁类别", {
        "锁类别": {
          lock: "密码锁",
          fingerprint: "指纹锁"
        } [t.detail],
        "公寓名称": this.apartment.apartmentName,
        "房间号": this.apartment.text
      })
    } catch (t) {
      console.log("err", t)
    }
    var e = t.detail;
    this.setData({
      tapKey: e
    }), this.setData({
      passwordList: []
    }), "lock" === e ? this.getPasswordList(this.data.orderNo) : this.getFingerprintList(this.data.orderNo)
  }
});