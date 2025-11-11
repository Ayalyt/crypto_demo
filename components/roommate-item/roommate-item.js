Component({
  properties: {
    listData: {
      type: Array,
      value: [],
      observer: function(t, a, e) {
        t !== a && this.setData({
          listData: t
        })
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
    goToEditRoommate: function(t) {
      var a = this.data.listData,
        e = t.currentTarget.dataset.index,
        o = a[e].personId,
        r = a[e].roomId,
        i = a[e].orderNo,
        s = t.currentTarget.dataset.edit;
      wx.navigateTo({
        url: "../../pages/roommates/edit-roommate/edit-roommate?personId=".concat(o, "&roomId=").concat(r, "&orderNo=").concat(i, "&isEdit=").concat(s)
      })
    }
  }
});