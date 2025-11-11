var e = require("../../@babel/runtime/helpers/defineProperty");
Component({
  properties: {
    liveData: {
      type: Array,
      value: [],
      observer: function(e, t, a) {
        e !== t && this.setData({
          liveData: e
        })
      }
    }
  },
  data: {
    isMoreShow: !1,
    active: null,
    height: 0,
    selected: [!1, !1, !1]
  },
  lifetimes: {},
  ready: function() {
    this.getHeight()
  },
  methods: {
    toggerVisible: function(t) {
      var a;
      this.getHeight();
      var i = t.currentTarget.dataset.index,
        s = this.data.active;
      this.setData((e(a = {}, "selected[".concat(i, "]"), !this.data.selected["".concat(i)]), e(a, "active", i), a)), null !== s && s !== i && this.setData(e({}, "selected[".concat(s, "]"), !1))
    },
    getHeight: function() {
      var e = this;
      this.createSelectorQuery().selectAll(".content").boundingClientRect((function(t) {
        var a = e.data.active;
        e.setData({
          height: 0 == t.length ? 0 : 2 * t[a].height
        })
      })).exec()
    }
  }
});