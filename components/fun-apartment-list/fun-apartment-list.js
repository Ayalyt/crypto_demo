var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js");
Component({
  options: {
    addGlobalClass: !0
  },
  externalClasses: ["my-class"],
  properties: {
    showRechargeStatus: {
      type: Boolean,
      value: !1
    },
    selectedOrderNo: {
      type: String,
      value: ""
    },
    showLoading: {
      type: Boolean,
      value: !1
    },
    forLock: {
      type: Boolean,
      value: !1
    },
    forNewApi: {
      type: Boolean,
      value: !1
    },
    statusList: {
      type: Array,
      value: []
    }
  },
  data: {
    items: [],
    selectedIndex: 0
  },
  lifetimes: {
    attached: function() {
      wx.getStorageSync({
        key: "APARTMENTLIST",
        success: function(t) {
          this.setData({
            items: t.data.value
          })
        }
      }), this.loadData()
    }
  },
  methods: {
    loadData: function() {
      var e = this,
        a = this.data,
        s = a.statusList,
        o = a.showRechargeStatus,
        i = a.forLock,
        n = a.forNewApi,
        r = {
          showRechargeStatus: o
        },
        d = "";
      i ? d = "/mp-living/room/room-list-for-lock" : n ? (d = "/mp-living/room/user-room-list", r = {
        statusList: s
      }) : d = "/living/room/get-living-apartment-list", t.post({
        url: d,
        showLoading: this.data.showLoading,
        data: r
      }).then((function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = e.data, s = a.selectedIndex, o = (a.items, 0); o < t.length; o++) {
          var i = t[o];
          i.text = i.buildingName + "-" + i.roomNo + " " + i.apartmentName, i.orderNo == e.data.selectedOrderNo && (s = o)
        }
        e.setData({
          items: t,
          selectedIndex: s
        }), wx.setStorageSync("APARTMENTLIST", {
          value: t
        }), wx.setStorageSync("APARTMENT-LIST", t[s]), e.triggerEvent("change", t[s])
      })).catch((function(t) {
        e.triggerEvent("change", !1)
      }))
    },
    bindPickerChange: function(t) {
      this.curIndex = parseInt(t.detail.value[0])
    },
    refreshData: function() {
      this.loadData()
    },
    onShow: function() {
      var t = this.data,
        e = t.selectedIndex,
        a = t.disabled;
      this.curIndex = e, a || (this.setData({
        show: !0
      }), this.triggerEvent("show"))
    },
    onClose: function() {
      this.setData({
        show: !1
      }), this.triggerEvent("hide")
    },
    onDrawerClose: function() {
      this.triggerEvent("hide")
    },
    onConfirm: function() {
      var t = this.data.items[this.curIndex];
      this.setData({
        selectedIndex: this.curIndex,
        selectedOrderNo: t.orderNo,
        show: !1
      }), wx.setStorageSync("APARTMENT-LIST", t), this.triggerEvent("change", t)
    }
  }
});