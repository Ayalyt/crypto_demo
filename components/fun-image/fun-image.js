Component({
  properties: {
    src: {
      type: String,
      value: "/public/imgs/icon_default.png",
      observer: "srcChanged"
    },
    mode: {
      type: String,
      value: "aspectFill"
    }
  },
  data: {
    isLoadSuccess: !1,
    showSrc: "/public/imgs/icon_default.png"
  },
  methods: {
    srcChanged: function(s, t, e) {
      if (s) {
        var c = this;
        s.startsWith("http://") && (s = "https://" + s.substring(7)), wx.getImageInfo({
          src: s,
          success: function(s) {
            c.setData({
              showSrc: s.path,
              isLoadSuccess: !0
            })
          }
        })
      }
    }
  }
});