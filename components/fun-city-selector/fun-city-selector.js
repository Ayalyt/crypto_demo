var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js");
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
      type: Array,
      value: []
    },
    title: {
      type: String,
      value: ""
    },
    showCountry: {
      type: Boolean,
      value: !0
    }
  },
  data: {
    show: !1,
    displayValue: "",
    data: [],
    options: [],
    selected: [],
    currentId: -1,
    highlightIndex: -1
  },
  observers: {
    value: function(t) {
      var a = this;
      this.ready && this.ready.then((function() {
        a.initValue(t)
      }))
    }
  },
  lifetimes: {
    attached: function() {
      var a = this;
      this.dataMap = {}, this.ready = t.post({
        url: "/member/user/provinces",
        data: {
          showDistricts: !1
        }
      }).then((function(t) {
        t = [{
          name: "中国",
          id: "a",
          children: t
        }, {
          name: "非中国大陆居民",
          id: "b",
          children: null
        }], a.initData(t), a.setData({
          data: t
        })
      }))
    }
  },
  methods: {
    initValue: function(t) {
      var a = this.dataMap;
      t.forEach((function(t) {
        t.name = a[t.id].name || ""
      }));
      var e = this.getDisplayValue(t);
      this.setData({
        displayValue: e
      })
    },
    initData: function(t, a) {
      if (t && t.length)
        for (var e = this.dataMap, i = 0, n = t.length; i < n; i++) {
          var r = t[i];
          a && (r.parentId = a), e[r.id] = r, this.initData(r.children, r.id)
        }
    },
    getDisplayValue: function(t) {
      var a = [],
        e = "";
      return t && t.length && (t.forEach((function(t) {
        a.push(t.name)
      })), e = a.join(" ")), e
    },
    onOpen: function() {
      var t, a, e = this.dataMap,
        i = this.data,
        n = i.value,
        r = i.data,
        l = n && n.length || 0,
        s = l && n[l - 1] ? e[n[l - 1].id] : null,
        h = s ? s.id : null;
      if (s) {
        var d = s.parentId ? e[s.parentId] : null;
        t = (d ? d.children : r) || [], a = Object.assign([], n)
      } else t = r, a = [];
      this.setHighlight(h, a, t), this.setData({
        show: !0
      })
    },
    compare: function(t, a) {
      if (t === a) return !0;
      if (t && a && t.length && a.length && t.length === a.length) {
        for (var e = 0, i = t.length; e < i; e++)
          if (t[e].id !== a[e].id) return !1;
        return !0
      }
      return !1
    },
    getValue: function(t) {
      for (var a = this.dataMap, e = []; t;) e.unshift({
        id: t.id,
        name: t.name
      }), t = a[t.parentId];
      return e
    },
    onSelect: function(t) {
      var a = this,
        e = t.target.dataset || {},
        i = e.option,
        n = e.sameLevel,
        r = this.dataMap,
        l = this.data,
        s = l.selected,
        h = l.data,
        d = r[i.id],
        u = d.id;
      if (d) {
        for (var o = r[d.parentId], c = !d.parentId, p = !d.children, g = !1, f = !1, v = 0, m = 0, y = s.length; m < y; m++) {
          var D = r[s[m].id];
          if (u == D.id) {
            g = !0;
            break
          }
          if (d.parentId && d.parentId == D.parentId) {
            f = !0, v = m;
            break
          }
        }
        g || (c ? s.length = 0 : f && (s = s.slice(0, v)), s.push({
          id: u,
          name: d.name
        }));
        var I = (n ? c ? h : o.children : d.children) || [];
        if (this.setHighlight(u, s, I), p && !n) {
          var V = this.data.value,
            b = this.getValue(d),
            M = this.getDisplayValue(b);
          this.setData({
            value: b,
            displayValue: M
          }, (function() {
            a.compare(b, V) || a.triggerEvent("change", {
              value: b
            })
          })), this.onClose()
        }
      }
    },
    setHighlight: function(t, a, e) {
      var i = this.dataMap,
        n = a.length,
        r = n ? i[a[n - 1].id] : null,
        l = !n || r && !!r.children,
        s = 0;
      t && a.forEach((function(a, e) {
        a.id == t && (s = e)
      })), l && ((a = Object.assign([], a)).push({
        id: e[0] && e[0].id,
        name: "请选择"
      }), r && t && r.id == t && (s = a.length - 1)), this.setData({
        currentId: t,
        selected: a,
        options: e,
        highlightIndex: s
      })
    },
    onClose: function() {
      this.setData({
        show: !1
      })
    }
  }
});