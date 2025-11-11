var t = require("../../../@babel/runtime/helpers/objectSpread2"),
  a = require("../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../31D170254CF6B1BF57B71822C3C96AC2.js"),
  i = require("../../../BD7690F64CF6B1BFDB10F8F156596AC2.js");
Page({
  data: {
    defaultValue: "0",
    pickerData: [{
      text: "大陆身份证",
      value: 1,
      display: "身份证"
    }, {
      text: "港澳居民来往内地通行证（回乡证）",
      value: 2,
      display: "回乡证"
    }, {
      text: "台湾居民来往大陆通行证（台胞证）",
      value: 3,
      display: "台胞证"
    }, {
      text: "护照（限外籍人士使用）",
      value: 4,
      display: "护照"
    }, {
      text: "港澳台居民居住证",
      value: 5,
      display: "港澳台居住证"
    }],
    formData: {
      name: "",
      phone: "",
      idCardNo: "",
      idCardType: "",
      idCardTypeDisplay: "",
      orderNo: "",
      personId: "",
      roomId: ""
    },
    isEdit: !1,
    newIdCardNo: "",
    newPhone: "",
    maxlength: 24,
    isDisabled: !1
  },
  onLoad: function(t) {
    var i, o = this;
    this.setData((i = {
      isEdit: t.isEdit
    }, a(i, "formData.orderNo", t.orderNo), a(i, "formData.personId", t.personId), a(i, "formData.roomId", t.roomId), i)), wx.setNavigationBarTitle({
      title: "true" === this.data.isEdit ? "编辑同住人" : "添加同住人"
    }), "true" === this.data.isEdit ? e.post({
      url: "/living/together/get-person-detail",
      data: {
        personId: t.personId
      }
    }).then((function(t) {
      var e;
      o.setData((e = {
        isDisabled: "IN" === t.checkInStatus,
        formData: t
      }, a(e, "formData.idCardType", t.idCardType), a(e, "formData.idCardTypeDisplay", o.data.pickerData.filter((function(a) {
        return a.value === t.idCardType
      }))[0].display), e))
    })) : this.initCache()
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {
    "true" === !this.data.isEdit && (this.submit ? this.removeCache() : this.storeCache())
  },
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  getInputValue: function(t) {
    this.data.formData.name = t.detail.value.replace(/\s*/g, ""), this.saveCache()
  },
  getPhoneValue: function(t) {
    this.setData({
      newPhone: t.detail.value
    }), this.data.formData.phone = t.detail.value.replace(/\s*/g, ""), this.saveCache()
  },
  getIdCardType: function(t) {
    var e;
    this.data.formData.idCardType !== t.detail.value && this.setData({
      newIdCardNo: ""
    }), this.setData((a(e = {}, "formData.idCardType", t.detail.value), a(e, "formData.idCardTypeDisplay", t.detail.text), e)), this.saveCache()
  },
  getIdCardValue: function(t) {
    1 !== this.data.formData.idCardType && 5 !== this.data.formData.idCardType || this.setData({
      newIdCardNo: t.detail.value,
      maxlength: 18
    }), this.data.formData.idCardNo = t.detail.value.replace(/\s*/g, ""), this.saveCache()
  },
  sureBtn: function() {
    var a = this,
      o = this.data.formData,
      r = this.data.formData.name;
    if (!r) return wx.showToast({
      title: "请填写姓名",
      icon: "none"
    });
    if (!/^[ A-Za-z0-9\u4e00-\u9fa5]+$/.test(r)) return wx.showToast({
      title: "请填写2-24字中英文姓名",
      icon: "none"
    });
    if (r.length > 24 || r.length < 2) return wx.showToast({
      title: "请填写2-24字中英文姓名",
      icon: "none"
    });
    if (/[0-9]/g.test(o.name)) return wx.showToast({
      title: "请填写2-24字中英文姓名",
      icon: "none"
    });
    if (!o.phone) return wx.showToast({
      title: "请填写手机号",
      icon: "none"
    });
    var n = i.checkMobile(o.phone.trim());
    if (n) return wx.showToast({
      title: n,
      icon: "none"
    });
    if (!o.idCardType) return wx.showToast({
      title: "请选择证件类型",
      icon: "none"
    });
    var d = o.idCardNo;
    if (!d) return wx.showToast({
      title: "请填写证件号码",
      icon: "none"
    });
    if (o.idCardType + "" == "1" && !i.identityCodeValid(d)) return wx.showToast({
      title: "请填写正确的证件号码",
      icon: "none"
    });
    if (o.idCardType + "" == "2" && !i.travelPermitCodeValidate.hongkong(d)) return wx.showToast({
      title: "请填写正确的证件号码",
      icon: "none"
    });
    if (o.idCardType + "" == "3" && !i.travelPermitCodeValidate.taiwan(d)) return wx.showToast({
      title: "请填写正确的证件号码",
      icon: "none"
    });
    if (o.idCardType + "" == "4" && !i.travelPermitCodeValidate.foreign(d)) return wx.showToast({
      title: "请填写正确的证件号码",
      icon: "none"
    });
    if (o.idCardType + "" != "5" || i.travelPermitCodeValidate.HongKongMacaoTaiwan(d)) {
      if (!/^[0-9a-zA-Z]*$/g.test(d)) return wx.showToast({
        title: "请填写正确的证件号码",
        icon: "none"
      })
    } else if (d.length < 18) return wx.showToast({
      title: "请填写正确的证件号码",
      icon: "none"
    });
    e.post({
      url: "true" === this.data.isEdit ? "/living/together/modify-person" : "/living/together/add-person",
      data: t({}, o),
      showLoading: !0
    }).then((function() {
      wx.showToast({
        title: "true" === a.data.isEdit ? "信息已更新" : "已成功添加同住人",
        icon: "none",
        duration: 1500
      }), a.submit = !0, a.refreshList(), setTimeout((function() {
        wx.navigateBack()
      }), 1e3)
    }))
  },
  cancelBtn: function() {
    var a = this.data.formData;
    "true" === this.data.isEdit ? wx.showModal({
      title: "",
      content: "确认删除本同住人信息?",
      success: function(i) {
        i.confirm && e.post({
          url: "/living/together/delete-person",
          data: t({}, a)
        }).then((function(t) {
          t.success && wx.navigateBack({
            delta: 1
          })
        }))
      }
    }) : wx.navigateBack({
      delta: 1
    })
  },
  saveCache: function() {
    wx.setStorageSync("ADD_ROOMMATE_TEMP_DATA_KEY", this.data.formData)
  },
  removeCache: function() {
    wx.removeStorageSync("ADD_ROOMMATE_TEMP_DATA_KEY")
  },
  initCache: function() {
    var t = this,
      e = wx.getStorageSync("ADD_ROOMMATE_TEMP_DATA_KEY");
    e.orderNo === this.data.formData.orderNo && wx.showModal({
      content: "您还有未保存的同住人信息，要继续编辑吗？",
      confirmText: "继续编辑",
      cancelText: "重新填",
      confirmColor: "#e0ae01",
      success: function(o) {
        var r;
        o.confirm ? t.setData((r = {
          newPhone: i.addSpace(e.phone, [3, 7]),
          newIdCardNo: "1" === e.idCardType || "5" === e.idCardType ? i.addSpace(e.idCardNo, [6, 15]) : e.idCardNo
        }, a(r, "formData.phone", e.phone), a(r, "formData.name", e.name), a(r, "formData.idCardTypeDisplay", e.idCardTypeDisplay), a(r, "formData.idCardType", e.idCardType), a(r, "formData.idCardNo", e.idCardNo), a(r, "formData.orderNo", e.orderNo), a(r, "formData.personId", e.personId), a(r, "formData.roomId", e.roomId), r)) : o.cancel && t.removeCache()
      }
    })
  },
  refreshList: function() {
    var t = getApp().globalData.pagesContainer["pages/roommates/roommates"];
    t && t.refreshData({})
  }
});