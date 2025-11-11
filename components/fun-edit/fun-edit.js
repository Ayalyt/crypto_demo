var e = require("../../F9E424F04CF6B1BF9F824CF736786AC2.js");
Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    name: {
      type: String,
      value: ""
    },
    type: {
      type: String,
      value: "text"
    },
    label: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: ""
    },
    extraValue: {
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: ""
    },
    placeholder: {
      type: String,
      value: ""
    },
    inputPlaceholder: {
      type: String,
      value: ""
    },
    maxlength: {
      type: Number,
      value: 1e4
    },
    tips: {
      type: String,
      value: ""
    },
    pattern: {
      type: String,
      value: ""
    }
  },
  data: {},
  methods: {
    onEdit: function() {
      var t = this.data,
        a = t.name,
        l = t.title,
        r = t.inputPlaceholder,
        n = t.type,
        i = t.label,
        p = t.value,
        u = t.extraValue,
        o = t.maxlength,
        g = t.tips,
        v = t.pattern;
      wx.setStorage({
        key: e.USERINFO_EDIT_TRANSFER,
        data: {
          name: a,
          type: n,
          value: p,
          extraValue: u,
          maxlength: o,
          title: l || "设置".concat(i),
          placeholder: r || "请输入".concat(r),
          tips: g,
          pattern: v
        }
      }), wx.navigateTo({
        url: "/pages/editor/editor"
      })
    }
  }
});