Page({
  data: {
    src: "",
    title: ""
  },
  onLoad: function(t) {
    var n = decodeURIComponent(t.src);
    this.setData({
      src: n,
      title: t.title
    }), t.title && wx.setNavigationBarTitle({
      title: t.title
    })
  },
  reloadPage: function(t) {
    this.setData({
      url: t
    })
  },
  onReady: function() {},
  onShow: function() {},
  bindError: function(t) {
    console.log(t)
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {}
});