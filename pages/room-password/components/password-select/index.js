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
      this.onClose();
      var e = t.target,
        s = e.id,
        o = e.dataset,
        a = o.endtime,
        i = o.password;
      s && this.triggerEvent("selected", {
        id: s,
        endtime: a,
        password: i
      })
    }
  }
});