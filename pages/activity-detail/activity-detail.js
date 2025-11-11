var t, e = require("../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  c = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  s = require("../../D2980F274CF6B1BFB4FE672005896AC2.js"),
  o = function(t, e) {
    return c.post({
      url: t,
      data: e
    })
  },
  u = getApp();
Page({
  data: {
    visible: !1,
    loading: !1,
    data: {},
    defaultImage: "../../public/imgs/icon_default.png",
    cityIndex: 0,
    limits: [],
    registrationEndTime: "",
    activityDate: "",
    chargeAmount: "",
    apartmentList: [],
    fileds: [],
    customFileds: [],
    selectedApartmentId: "",
    isActivityAttend: !1
  },
  getData: function(t) {
    return o("/not-login-community/activity/activityDetail", {
      activityId: t
    })
  },
  check: function(t) {
    return o("/need-login-community/activity/isActivityAttend", {
      activityId: t
    })
  },
  formatImg: function(t) {
    return t.replace(/<img[^>]*>/gi, (function(t) {
      return t.match(/style=\"(.*)\"/gi) ? t.replace(/style=\"(.*)\"/gi, 'style="width:100%;height:auto;display:block"') : t.replace(/\<img/g, '<img style="width:100%;height:auto;display:block"')
    }))
  },
  doWithData: function(t) {
    var e = t.activityCityList[0].cityId,
      i = t.activityApartmentList.filter((function(t) {
        return t.cityId === e
      }));
    t && t.activityIntroduce && (t.activityIntroduce = this.formatImg(t.activityIntroduce)), this.setData({
      data: t,
      limits: i.map((function(t) {
        return {
          apartmentName: t.apartmentName,
          peopleNumberLimit: 0 === t.peopleNumberLimit ? "不限制人数" : "限制".concat(t.peopleNumberLimit, "人")
        }
      })),
      registrationEndTime: s.dateFormatter("yyyy.MM.dd", t.registrationEndTime),
      activityDate: "".concat(s.dateFormatter("MM.dd", t.activityStartTime), "-").concat(s.dateFormatter("MM.dd", t.activityEndTime)),
      status: 2 === this.status ? [2, 3][t.retrospectStatus] : this.status,
      apartmentList: t.activityApartmentList.map((function(t) {
        return {
          labels: t.apartmentName,
          text: t.apartmentName,
          value: t.apartmentId
        }
      })),
      activityApartmentList: t.activityCityList,
      chargeAmount: 1 === t.chargeAmountLimitFlag ? "¥: ".concat(t.chargeAmount, "元/人") : "免费"
    }), 1 === this.status && 1 === t.activityRegFlag && this.getCustomFileds()
  },
  doWithResult: function(t) {
    var e = t.success;
    this.setData({
      isActivityAttend: e
    })
  },
  init: function(t) {
    var e = this;
    return n(i().mark((function n() {
      var c, s, o, d;
      return i().wrap((function(i) {
        for (;;) switch (i.prev = i.next) {
          case 0:
            return i.prev = 0, e.setData({
              loading: !0
            }), i.next = 4, Promise.all([e.getData(t)]);
          case 4:
            c = i.sent, s = a(c, 1), o = s[0];
            try {
              (0, r.zhugeTrack)("活动模块-进入活动详情页", {
                "活动id": e.activityId,
                "活动名称": o.activityName
              })
            } catch (t) {
              console.log(t)
            }
            return e.activityName = o.activityName, e.doWithData(o), i.next = 12, u.loginVerification(!1);
          case 12:
            if (i.sent) {
              i.next = 15;
              break
            }
            return i.abrupt("return");
          case 15:
            return i.next = 17, e.check(t);
          case 17:
            d = i.sent, e.doWithResult(d), i.next = 25;
            break;
          case 21:
            throw i.prev = 21, i.t0 = i.catch(0), wx.showToast({
              title: i.t0.data.data.message,
              icon: "none"
            }), i.t0;
          case 25:
            return i.prev = 25, e.setData({
              loading: !1
            }), i.finish(25);
          case 28:
          case "end":
            return i.stop()
        }
      }), n, null, [
        [0, 21, 25, 28]
      ])
    })))()
  },
  getCustomFileds: function() {
    var t = this;
    return n(i().mark((function e() {
      var a;
      return i().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, o("/not-login-community/activity/registration-fileds", {
              activityId: t.activityId
            });
          case 2:
            a = e.sent, t.setData({
              customFileds: a.activityRegistrationFieldsList
            });
          case 4:
          case "end":
            return e.stop()
        }
      }), e)
    })))()
  },
  activityCancel: function() {
    var t = this;
    return n(i().mark((function e() {
      return i().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, u.loginVerification();
          case 2:
            if (e.sent) {
              e.next = 5;
              break
            }
            return e.abrupt("return");
          case 5:
            wx.showModal({
              title: "提示",
              content: "确定要取消报名吗?",
              success: function() {
                var e = n(i().mark((function e(a) {
                  var n, c;
                  return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!a.confirm) {
                          e.next = 22;
                          break
                        }
                        return e.prev = 1, e.next = 4, o("/need-login-community/activity/activityCancel", {
                          activityId: t.activityId
                        });
                      case 4:
                        if (n = e.sent, !n.success) {
                          e.next = 15;
                          break
                        }
                        return (0, r.zhugeTrack)("活动模块-活动详情取消报名成功", {
                          "活动名称": t.activityName,
                          "活动id": t.activityId
                        }), wx.showToast({
                          title: "操作成功"
                        }), e.next = 11, t.check(t.activityId);
                      case 11:
                        c = e.sent, t.doWithResult(c), e.next = 16;
                        break;
                      case 15:
                        wx.showToast({
                          title: "操作失败",
                          icon: "none"
                        });
                      case 16:
                        e.next = 22;
                        break;
                      case 18:
                        throw e.prev = 18, e.t0 = e.catch(1), wx.showToast({
                          title: e.t0.data.data.message,
                          icon: "none"
                        }), e.t0;
                      case 22:
                      case "end":
                        return e.stop()
                    }
                  }), e, null, [
                    [1, 18]
                  ])
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }(),
              confirmColor: "#795600"
            });
          case 6:
          case "end":
            return e.stop()
        }
      }), e)
    })))()
  },
  onLoad: function(t) {
    var e = t.activityId,
      i = t.status;
    this.status = Number(i), this.activityId = e, this.init(e)
  },
  onReady: function() {},
  onShow: function() {
    this.duration = Date.now()
  },
  onHide: function() {
    if (this.duration) {
      try {
        (0, r.zhugeTrack)("活动模块-活动详情页停留时长", {
          "停留时长": (Date.now() - this.duration) / 1e3,
          "活动名称": this.activityName,
          "活动id": this.activityId
        })
      } catch (t) {
        console.log("err", t)
      }
      this.duration = 0
    }
  },
  onUnload: function() {
    if (this.duration) {
      try {
        (0, r.zhugeTrack)("活动模块-活动详情页停留时长", {
          "停留时长": (Date.now() - this.duration) / 1e3,
          "活动名称": this.activityName,
          "活动id": this.activityId
        })
      } catch (t) {
        console.log("err", t)
      }
      this.duration = 0
    }
  },
  onPullDownRefresh: (t = n(i().mark((function t() {
    var e;
    return i().wrap((function(t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          return t.prev = 0, wx.showNavigationBarLoading(), t.next = 4, this.getData(this.activityId);
        case 4:
          e = t.sent, this.doWithData(e), t.next = 12;
          break;
        case 8:
          throw t.prev = 8, t.t0 = t.catch(0), wx.showToast({
            title: "刷新失败",
            icon: "none"
          }), t.t0;
        case 12:
          return t.prev = 12, wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), t.finish(12);
        case 16:
        case "end":
          return t.stop()
      }
    }), t, this, [
      [0, 8, 12, 16]
    ])
  }))), function() {
    return t.apply(this, arguments)
  }),
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  handleSignUp: function(t) {
    switch (t.currentTarget.dataset.flag) {
      case 1:
        try {
          (0, r.zhugeTrack)("活动模块-活动详情点击立即报名", {
            "活动名称": this.activityName,
            "活动id": this.activityId
          })
        } catch (t) {
          console.log("err", t)
        }
        this.participate();
        break;
      case 2:
        try {
          (0, r.zhugeTrack)("活动模块-活动详情点击取消报名", {
            "活动名称": this.activityName,
            "活动id": this.activityId
          })
        } catch (t) {
          console.log("err", t)
        }
        this.activityCancel()
    }
  },
  participate: function() {
    var t = this;
    return n(i().mark((function e() {
      return i().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, u.loginVerification();
          case 2:
            if (e.sent) {
              e.next = 5;
              break
            }
            return e.abrupt("return");
          case 5:
            t.selectComponent("#modalId").onShow();
          case 6:
          case "end":
            return e.stop()
        }
      }), e)
    })))()
  },
  submit: function(t) {
    var e = this;
    return n(i().mark((function t() {
      var a, n, c, s, u, d, l, m;
      return i().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (a = e.data, n = a.customFileds, c = a.selectedApartmentId) {
              t.next = 4;
              break
            }
            return wx.showToast({
              title: "请选择参与公寓",
              icon: "none"
            }), t.abrupt("return");
          case 4:
            if (!(s = n.filter((function(t) {
                return !t.registerContent
              }))).length) {
              t.next = 8;
              break
            }
            return wx.showToast({
              title: "".concat(s[0].registerFields, "不能为空"),
              icon: "none"
            }), t.abrupt("return");
          case 8:
            return t.prev = 8, u = {
              activityId: e.activityId,
              apartmentId: c,
              activityRegistrationFieldsList: n.map((function(t) {
                return {
                  fieldsId: t.fieldsId,
                  registerContent: t.registerContent
                }
              }))
            }, t.next = 12, o("/need-login-community/activity/fill/registratio/information", u);
          case 12:
            if (d = t.sent, !d.success) {
              t.next = 23;
              break
            }
            try {
              (0, r.zhugeTrack)("活动模块-活动详情报名成功", {
                "活动名称": e.activityName,
                "活动id": e.activityId
              })
            } catch (t) {
              console.log("err", t)
            }
            return wx.showToast({
              title: "报名成功"
            }), t.next = 19, e.check(e.activityId);
          case 19:
            l = t.sent, e.doWithResult(l), t.next = 24;
            break;
          case 23:
            wx.showToast({
              title: "报名失败",
              icon: "none"
            });
          case 24:
            e.selectComponent("#modalId").onHide(), e.clearForm(), t.next = 33;
            break;
          case 28:
            throw t.prev = 28, t.t0 = t.catch(8), m = t.t0.data.data.message, wx.showToast({
              title: m,
              icon: "none"
            }), t.t0;
          case 33:
          case "end":
            return t.stop()
        }
      }), t, null, [
        [8, 28]
      ])
    })))()
  },
  cancel: function() {
    this.selectComponent("#modalId").onHide(), this.clearForm()
  },
  clearForm: function() {
    var t = this.data.customFileds;
    this.setData({
      selectedApartmentId: "",
      customFileds: t.map((function(t) {
        return e(e({}, t), {}, {
          registerContent: ""
        })
      }))
    })
  },
  handleAdressOnChange: function(t) {
    var e = t.currentTarget.dataset,
      i = e.index,
      a = e.cityid,
      n = this.data.data.activityApartmentList.filter((function(t) {
        return t.cityId === a
      }));
    this.setData({
      cityIndex: i,
      limits: n.map((function(t) {
        return {
          apartmentName: t.apartmentName,
          peopleNumberLimit: 0 === t.peopleNumberLimit ? "不限制人数" : "限制".concat(t.peopleNumberLimit, "人")
        }
      }))
    })
  },
  onPreviewImage: function(t) {
    var e = this.data.data.retrospectPictureList,
      i = t.currentTarget.dataset.image;
    wx.previewImage({
      urls: e.map((function(t) {
        return t.fileUrl
      })),
      current: i
    })
  },
  handlePreviewDetailImage: function(t) {
    wx.previewImage({
      urls: [t.currentTarget.dataset.image]
    })
  },
  handleSelectOnChange: function(t) {
    this.setData({
      selectedApartmentId: t.detail.value
    })
  },
  inputChange: function(t) {
    var i = this.data.customFileds,
      a = t.currentTarget.dataset.filedid,
      n = JSON.parse(JSON.stringify(i)),
      r = n.findIndex((function(t) {
        return t.fieldsId === a
      }));
    n.splice(r, 1, e(e({}, n[r]), {}, {
      registerContent: t.detail ? t.detail.value : ""
    })), this.setData({
      customFileds: n
    })
  }
});