Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    label: {
      type: String,
      value: ""
    },
    placeholder: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: "",
      observer: function(t, e, a) {
        t !== e && this.setValue()
      }
    },
    items: {
      type: Array,
      value: [],
      observer: function(t, e, a) {
        JSON.stringify(t) !== JSON.stringify(e) && this.setValue()
      }
    },
    disabled: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    index: 0,
    text: "请选择证件类型"
  },
  lifetimes: {
    attached: function() {
      this.setValue()
    }
  },
  methods: {
    bindPickerChange: function(t) {
      var e = t.detail.value,
        a = this.data,
        i = a.items,
        n = a.name,
        s = i[e];
      this.setData({
        text: s.text,
        iconChange: !this.data.iconChange
      }), this.triggerEvent("change", {
        name: n,
        value: s.value,
        text: s.text
      })
    },
    setValue: function() {
      var t = "",
        e = 0,
        a = this.data,
        i = a.items,
        n = void 0 === i ? [] : i,
        s = a.value;
      null != s && "" !== s && (n.forEach((function(t, a) {
        t.value === s && (e = a)
      })), t = n[e].text), this.setData({
        index: e,
        text: t
      })
    }
  }
});