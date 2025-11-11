Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    multiple: {
      type: Boolean,
      value: !1
    },
    name: {
      type: String,
      value: ""
    },
    label: {
      type: String,
      value: ""
    },
    placeholder: {
      type: String,
      value: ""
    },
    required: {
      type: Boolean,
      value: !1
    },
    title: {
      type: String,
      value: ""
    },
    valueKey: {
      type: String,
      value: "value"
    },
    textKey: {
      type: String,
      value: "text"
    },
    displayKey: {
      type: String,
      value: ""
    },
    items: {
      type: Array,
      value: [],
      observer: function(e, t, n) {
        if (JSON.stringify(e) !== JSON.stringify(t))
          if (this.initItems(), this.data.multiple) {
            var i = [];
            e.forEach((function(e, n) {
              JSON.stringify(e) !== JSON.stringify(t[n]) && i.push(n)
            })), i.length && this.resetValue(i)
          } else this.setValue()
      }
    },
    value: {
      type: null,
      value: null,
      observer: function(e, t, n) {
        e !== t && (this.initValue(), this.setValue())
      }
    },
    disabled: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    innerItems: [],
    innerValue: [],
    show: !1,
    selectedIndex: [],
    confirmedIndex: [],
    text: ""
  },
  lifetimes: {
    attached: function() {
      this.setValue()
    }
  },
  methods: {
    initItems: function() {
      var e = this.data,
        t = e.multiple,
        n = e.items,
        i = t ? n : [n];
      this.setData({
        innerItems: i
      })
    },
    initValue: function() {
      var e = this.data,
        t = e.multiple,
        n = e.value,
        i = t ? n : [n];
      this.setData({
        innerValue: i
      })
    },
    setValue: function() {
      var e = this.data,
        t = (e.multiple, e.innerItems),
        n = void 0 === t ? [] : t,
        i = e.innerValue,
        a = e.valueKey,
        s = e.textKey,
        l = e.displayKey,
        r = [],
        o = [],
        u = "";
      n.length !== i.length ? (r = new Array(n.length)).fill(0, 0, n.length) : n.forEach((function(e, t) {
        var n = i[t];
        r[t] = 0, e.forEach((function(e, i) {
          e[a] === n && (r[t] = i, o[t] = e)
        }))
      })), o.length === n.length && (u = o.map((function(e) {
        return e[l || s]
      })).join(" ")), this.setData({
        selectedIndex: r,
        confirmedIndex: r.slice(0),
        text: u
      })
    },
    resetValue: function(e) {
      var t = this.data.selectedIndex;
      e.forEach((function(e) {
        t[e] = 0
      })), this.setData({
        selectedIndex: t,
        confirmedIndex: t.slice(0)
      })
    },
    onShow: function() {
      var e = this.data,
        t = e.confirmedIndex;
      e.disabled || (this.setData({
        show: !0,
        selectedIndex: t.slice(0)
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
    onChange: function(e) {
      var t = e.detail.value;
      this.setData({
        selectedIndex: t
      }), this.triggerEvent("selectchange", {
        selectedIndex: t
      })
    },
    onStart: function(e) {
      this.scrolling = !0
    },
    onEnd: function(e) {
      this.scrolling = !1
    },
    onConfirm: function() {
      var e = this;
      if (this.scrolling) return setTimeout((function() {
        e.onConfirm()
      }), 300), void this.setData({
        isConfirm: !0
      });
      var t, n, i = this.data,
        a = i.name,
        s = i.multiple,
        l = i.valueKey,
        r = i.textKey,
        o = i.displayKey,
        u = i.selectedIndex,
        h = this.getSelectedItems();
      s ? (t = h.map((function(e) {
        return e[l]
      })), n = h.map((function(e) {
        return e[o || r]
      })).join(" ")) : (t = h[0][l], n = h[0][o || r]), this.setData({
        show: !1,
        isConfirm: !1,
        text: n,
        confirmedIndex: u.slice(0)
      }), this.triggerEvent("change", {
        name: a,
        value: t,
        text: n,
        data: s ? h : h[0]
      })
    },
    getSelectedItems: function() {
      var e = this.data,
        t = e.multiple,
        n = e.items,
        i = e.selectedIndex,
        a = [];
      return t ? n.forEach((function(e, t) {
        a[t] = e[i[t]]
      })) : a[0] = n[i[0]], a
    }
  }
});