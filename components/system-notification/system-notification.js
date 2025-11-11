var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js");
Component({
  properties: {
    show: {
      type: Boolean,
      value: !1
    },
    mainWidth: {
      type: Number,
      value: 0
    },
    imageHeight: {
      type: Number,
      value: 0
    }
  },
  data: {
    hideAnimation: "",
    maskShow: !1,
    messageDetail: {}
  },
  lifetimes: {
    attached: function() {
      var t = wx.getSystemInfoSync(),
        e = t.windowWidth;
      console.log(t);
      var a = .8 * e,
        i = 125 * a / 263;
      this.setData({
        mainWidth: a,
        imageHeight: i
      }), this.loadData()
    },
    detached: function() {}
  },
  observers: {
    show: function() {
      this.update()
    }
  },
  methods: {
    update: function() {
      var t = this.data.show;
      this.setData({
        maskShow: t
      })
    },
    goToDetail: function() {
      var t = this.data.messageDetail.redirectUrl,
        e = encodeURIComponent(t);
      wx.navigateTo({
        url: "/pages/h5-container/index?webPath=".concat(e)
      }), this.maskRead(), this.close()
    },
    close: function() {
      var t = this;
      this.setData({
        hideAnimation: "main-view-hide",
        maskShow: !1
      }), setTimeout((function() {
        t.setData({
          show: !1
        })
      }), 300)
    },
    loadData: function() {
      var e = this;
      t.post({
        url: "/mp-living/room/user-notice-unread",
        handleError: "ALL",
        data: {}
      }).then((function(t) {
        t && t.length > 0 && e.setData({
          messageDetail: t[0],
          show: !0
        })
      })).catch((function(t) {}))
    },
    maskRead: function() {
      var e = this.data.messageDetail.id;
      t.post({
        url: "/mp-living/room/update-read",
        handleError: "ALL",
        wholeResponse: !0,
        data: {
          noticeId: e
        }
      }).then((function(t) {})).catch((function(t) {}))
    }
  }
});