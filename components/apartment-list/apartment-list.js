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
    }
  },
  data: {
    items: [],
    index: 0
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
        a = {
          showRechargeStatus: this.data.showRechargeStatus
        };
      t.post({
        url: "/living/room/get-living-apartment-list",
        showLoading: this.data.showLoading,
        data: a
      }).then((function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = e.data.index, i = 0; i < t.length; i++) {
          var s = t[i];
          s.text = s.buildingName + " " + s.roomNo + " " + s.apartmentName, s.orderNo == e.data.selectedOrderNo && (a = i)
        }
        e.setData({
          items: t,
          index: a
        }), wx.setStorageSync("APARTMENTLIST", {
          value: e.data.items
        }), wx.setStorageSync("APARTMENT-LIST", e.data.items[e.data.index]), e.triggerEvent("change", e.data.items[e.data.index])
      })).catch((function(t) {
        e.triggerEvent("change", !1)
      }))
    },
    bindPickerChange: function(t) {
      var e = parseInt(t.detail.value),
        a = this.data.items[e];
      this.setData({
        index: e,
        selectedOrderNo: a.orderNo
      }), wx.setStorageSync("APARTMENT-LIST", a), this.triggerEvent("change", a)
    },
    refreshData: function() {
      this.loadData()
    }
  }
});