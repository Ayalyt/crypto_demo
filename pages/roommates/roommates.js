var t = require("../../31D170254CF6B1BF57B71822C3C96AC2.js"),
  e = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js");
Page({
  data: {
    isNoDataShow: !1,
    text: "",
    queryPersonList: [],
    isEdit: !1,
    orderNo: "",
    roomId: "",
    personId: "",
    num: 0,
    roomNum: 0,
    width: wx.getSystemInfoSync().windowWidth,
    showLoading: !1,
    currentAparement: void 0
  },
  onLoad: function(t) {
    getApp().globalData.pagesContainer[this.route] = this
  },
  onReady: function() {
    this.setData({
      showLoading: !0
    })
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  DocumentFormatting: function(t) {
    return this.data.width < 480 ? (t || "").slice(0, 12) + "..." : t
  },
  onMonitorData: function(t) {
    console.log(t.detail), t.detail ? (this.setData({
      orderNo: t.detail.orderNo,
      roomId: t.detail.roomId,
      num: 2 * t.detail.bedrooms - 1,
      roomNum: t.detail.bedrooms,
      currentAparement: t.detail
    }), this.getLivingRoomData(), this.getPersonList()) : this.setData({
      isNoDataShow: !0,
      text: "什么都没有，请先订房哦~~",
      showLoading: !1
    })
  },
  getLivingRoomData: function() {
    var e = this;
    t.post({
      url: "living/room/get-living-room",
      data: {
        orderNo: this.data.currentAparement && this.data.currentAparement.orderNo || ""
      }
    }).then((function(t) {
      console.log(t), e.setData({})
    }))
  },
  getPersonList: function(o) {
    var a = this;
    this.setData({
      showLoading: !0
    }), t.post({
      url: "/living/together/query-person-list",
      data: {
        orderNo: this.data.currentAparement && this.data.currentAparement.orderNo || "",
        roomId: this.data.currentAparement && this.data.currentAparement.roomId || ""
      }
    }).then((function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        o = 2 * a.data.roomNum - (t.length + 1);
      if (a.setData({
          num: o
        }), t.length > 0) {
        var n = t.map((function(t) {
          return Object.assign(t, {
            lesseeName: a.handleName(t.name),
            newIdCardNo: t.idCardType + "" != "5" ? e.formatIdCardNo(t.idCardNo, t.idCardType) : a.DocumentFormatting(t.idCardNo),
            idCardTypeDesc: ["身份证", "回乡证", "台胞证", "护照", "港澳台居住证"][t.idCardType - 1],
            newPhone: e.addSpace(t.phone, [3, 7])
          })
        }));
        a.setData({
          queryPersonList: n,
          isNoDataShow: !1,
          text: "一起住，生活更美哟"
        })
      } else a.setData({
        queryPersonList: [],
        isNoDataShow: !0,
        text: "一起住，生活更美哟"
      });
      a.setData({
        showLoading: !1
      })
    })).catch((function(t) {
      a.setData({
        showLoading: !1
      })
    }))
  },
  onAddRoommate: function(t) {
    var e = t.currentTarget.dataset.edit,
      o = t.currentTarget.dataset.roomid,
      a = t.currentTarget.dataset.orderno,
      n = t.currentTarget.dataset.personid;
    wx.navigateTo({
      url: "./edit-roommate/edit-roommate?isEdit=".concat(e, "&roomId=").concat(o, "&orderNo=").concat(a, "&personId=").concat(n)
    })
  },
  handleName: function(t) {
    var e = new RegExp("[一-龥]+"),
      o = new RegExp("[A-Za-z]+");
    return e.test(t) ? t.substr(t.length - 2, 2) : o.test(t) ? t.slice(0, 2) : void 0
  },
  refreshData: function(t) {
    this.getLivingRoomData(), this.getPersonList()
  }
});