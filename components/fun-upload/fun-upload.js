var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js");
Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    count: {
      type: Number,
      value: 6
    },
    sizeType: {
      type: Array,
      value: ["original", "compressed"]
    },
    sourceType: {
      type: Array,
      value: ["album", "camera"]
    },
    preview: {
      type: Boolean,
      value: !0
    },
    limit: {
      type: Number,
      value: 10485760
    },
    ossHost: {
      type: String,
      value: ""
    },
    images: {
      type: Array,
      value: [],
      observer: function(t, e, s) {
        var a = this,
          i = (t || []).map((function(t) {
            var e = t;
            if (!/^(http::\/\/|https::\/\/|\/\/)/.test(t)) {
              t = (t || "").startsWith("/") ? t.substring(1) : t;
              var s = a.data.ossHost;
              s && s.length > 0 && (s = s.endsWith("/") ? s : s + "/"), e = "".concat(s.replace("http:", "https:") || "").concat(t)
            }
            return {
              image: e,
              status: "done",
              thumb: a.thumbnail(e)
            }
          }));
        this.setData({
          imgs: i
        })
      }
    },
    pictureType: {
      type: String,
      value: ""
    },
    relative: {
      type: Boolean,
      value: !1
    },
    label: {
      type: String,
      value: "上传图片"
    },
    subTitle: {
      type: String,
      value: ""
    }
  },
  data: {
    imgs: []
  },
  lifetimes: {
    attached: function() {
      this.getOssToken()
    }
  },
  methods: {
    getOssToken: function() {
      var e = this,
        s = this.ossToken;
      if (s && s.expireTime > Date.now()) return Promise.resolve(s);
      var a = this.data.pictureType;
      return t.post({
        url: "4" === a ? "/mp-oss/unCheck/get-unCheck-oss-policy" : "/oss/security/get-oss-policy",
        data: {
          pictureType: a
        }
      }).then((function(t) {
        return t.host = (t.host || "").replace("http:", "https:"), e.ossToken = t, t
      }))
    },
    onAdd: function() {
      var t = this,
        e = this.data,
        s = e.count,
        a = e.limit,
        i = e.imgs,
        n = e.sizeType,
        o = e.sourceType,
        r = 0;
      i.forEach((function(t) {
        "done" === t.status && r++
      })), wx.chooseImage({
        count: s - r,
        sizeType: n,
        sourceType: o,
        success: function(e) {
          var s = e.tempFiles || [],
            i = e.tempFilePaths || [],
            n = t.data.imgs,
            o = [],
            r = [];
          if (a)
            for (var u = 0, c = s.length; u < c; u++)
              if (s[u].size > a) return void wx.showToast({
                title: "图片不能超过".concat(parseInt(a / 1024 / 1024), "MB"),
                icon: "none"
              });
          n.forEach((function(t) {
            "fail" !== t.status && o.push(t)
          })), i.forEach((function(t) {
            var e = {
              image: t,
              status: "uploading"
            };
            o.push(e), r.push(e)
          })), t.setData({
            imgs: o
          }), t.upload(r, o)
        }
      })
    },
    uploadImg: function(t) {
      var e = this;
      return new Promise((function(s, a) {
        var i = e.ossToken,
          n = "".concat(i.dir || "mp", "/").concat(Math.random().toString(16).slice(2), ".png"),
          o = i.host + "/" + n;
        wx.uploadFile({
          url: i.host,
          filePath: t.image,
          name: "file",
          formData: {
            key: n,
            policy: i.policy,
            OSSAccessKeyId: i.accessid,
            signature: i.signature,
            success_action_status: 200
          },
          success: function(t) {
            200 === t.statusCode ? s(o) : a(o)
          },
          fail: function(t) {
            a(o)
          }
        })
      }))
    },
    upload: function(t, e) {
      var s = this;
      this.getOssToken().then((function() {
        t.forEach((function(t) {
          s.uploadImg(t).then((function(a) {
            t.status = "done", t.image = a, s.onChange(e)
          })).catch((function(a) {
            t.status = "fail", s.setData({
              allImgs: e
            }), wx.showToast({
              title: "上传失败，请重试～",
              icon: "none"
            })
          }))
        }))
      }))
    },
    onDelete: function(t) {
      var e = parseInt(t.target.dataset.index),
        s = this.data.imgs;
      s.splice(e, 1), this.setData({
        imgs: s
      }), this.onChange(s)
    },
    onChange: function(t) {
      var e = this.data.relative,
        s = this.ossToken,
        a = [];
      t.forEach((function(t) {
        if ("done" === t.status) {
          var i = e ? t.image.replace(s.host, "") : t.image;
          a.push(i)
        }
      }));
      var i = {
        host: s.host
      };
      this.triggerEvent("change", {
        value: a,
        extra: i,
        data: {
          value: a,
          extra: i
        }
      })
    },
    onPreview: function(t) {
      var e = this,
        s = parseInt(t.target.dataset.index),
        a = this.data,
        i = a.preview,
        n = a.imgs;
      if (i) {
        var o = n.map((function(t) {
          return e.preview(t.image)
        }));
        o && wx.previewImage({
          urls: o,
          current: o[s]
        })
      }
    },
    thumbnail: function(t) {
      return t.indexOf("x-oss-process") > -1 ? t : t + (t.indexOf("?") > -1 ? "&" : "?") + "x-oss-process=image/resize,w_375"
    },
    preview: function(t) {
      return t.indexOf("x-oss-process") > -1 ? t : t + (t.indexOf("?") > -1 ? "&" : "?") + "x-oss-process=image/resize,w_1125"
    }
  }
});