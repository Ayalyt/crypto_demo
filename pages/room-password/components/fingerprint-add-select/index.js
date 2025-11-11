Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    title: {
      type: String,
      value: "自定义密码"
    },
    disabled: {
      type: Boolean,
      value: !1
    },
    items: {
      type: Array,
      value: []
    }
  },
  data: {
    show: !1
  },
  methods: {
    onShow: function() {
      this.setData({
        show: !0
      })
    },
    onClose: function() {
      this.setData({
        show: !1
      })
    },
    onSelect: function(t) {
      var e = t.target.dataset,
        i = e.cannotAdd,
        o = e.supplierId,
        n = e.clientId,
        s = e.clientKey,
        a = e.devicedId,
        d = e.lockMac,
        l = e.thirdUid,
        c = e.startTimeStr,
        r = e.endTimeStr,
        h = e.sn,
        p = e.lockFlag;
      i ? wx.showToast({
        icon: "none",
        title: "已达指纹上限，不能继续添加"
      }) : (this.onClose(), this.triggerEvent("selected", {
        deviceInfo: {
          clientId: n,
          supplierId: o,
          clientKey: s,
          devicedId: a,
          lockMac: d,
          thirdUid: l,
          startTimeStr: c,
          endTimeStr: r,
          sn: h,
          lockFlag: p
        }
      }))
    }
  }
});