Component({
  properties: {
    blank: {
      type: Boolean,
      value: !1
    },
    required: {
      type: Boolean,
      value: !1
    },
    readonly: {
      type: Boolean,
      value: !1
    },
    prompt: {
      type: String,
      value: ""
    },
    mapEvaluateDesc: {
      type: Array,
      value: ["很差", "较差", "一般", "满意", "超赞"]
    },
    selectArr: {
      type: Array,
      value: [0, 0, 0, 0, 0],
      observer: function(e, t, a) {
        var r = (e || []).reduce((function(e, t) {
          return e + t
        }), -1);
        this.setData({
          desc: this.data.mapEvaluateDesc[r < 0 ? 0 : r]
        })
      }
    }
  },
  data: {
    desc: ""
  },
  methods: {
    onSelect: function(e) {
      if (!this.data.readonly) {
        var t = e.currentTarget.dataset.index;
        this.setData({
          desc: this.data.mapEvaluateDesc[t],
          selectArr: new Array(t + 1).fill(1).concat(new Array(4 - t).fill(0))
        });
        var a = {
          starNum: t + 1
        };
        this.triggerEvent("selectstar", a)
      }
    }
  }
});