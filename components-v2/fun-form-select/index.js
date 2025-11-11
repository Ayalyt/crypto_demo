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
      observer: function(e, t) {
        e || this.resetValue()
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
        t = e.innerItems,
        n = void 0 === t ? [] : t,
        i = e.innerValue,
        a = e.valueKey,
        l = e.textKey,
        s = [],
        r = [],
        u = "";
      n.length !== i.length ? (s = new Array(n.length)).fill(0, 0, n.length) : n.forEach((function(e, t) {
        var n = i[t];
        s[t] = 0, e.forEach((function(e, i) {
          e[a] === n && (s[t] = i, r[t] = e)
        }))
      })), r.length === n.length && (u = r.map((function(e) {
        return e[displayKey || l]
      })).join(" ")), this.setData({
        selectedIndex: s,
        confirmedIndex: s.slice(0),
        text: u
      })
    },
    resetValue: function(e) {
      var t = this.data.selectedIndex;
      (e || []).forEach((function(e) {
        t[e] = 0
      })), this.setData({
        selectedIndex: t,
        confirmedIndex: t.slice(0)
      })
    },
    handleShow: function() {
      var e = this.data,
        t = e.confirmedIndex;
      e.disabled || (this.setData({
        show: !0,
        selectedIndex: t.slice(0)
      }), this.triggerEvent("show"))
    },
    handleClose: function() {
      this.setData({
        show: !1
      }), this.triggerEvent("hide")
    },
    handleDrawerClose: function() {
      this.triggerEvent("hide")
    },
    handleChange: function(e) {
      var t = e.detail.value;
      this.setData({
        selectedIndex: t
      }), this.triggerEvent("selectchange", {
        selectedIndex: t
      })
    },
    handleStart: function(e) {
      this.scrolling = !0
    },
    handleEnd: function(e) {
      this.scrolling = !1
    },
    handleConfirm: function() {
      var e = this;
      if (this.scrolling) return setTimeout((function() {
        e.handleConfirm()
      }), 300), void this.setData({
        isConfirm: !0
      });
      var t, n, i = this.data,
        a = i.name,
        l = i.multiple,
        s = i.valueKey,
        r = i.textKey,
        u = i.displayKey,
        o = i.selectedIndex,
        d = this.getSelectedItems();
      l ? (t = d.map((function(e) {
        return e[s]
      })), n = d.map((function(e) {
        return e[u || r]
      })).join(" ")) : (t = d[0][s], n = d[0][u || r]), this.setData({
        show: !1,
        isConfirm: !1,
        text: n,
        confirmedIndex: o.slice(0)
      }), this.triggerEvent("change", {
        name: a,
        value: t,
        text: n,
        data: l ? d : d[0]
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