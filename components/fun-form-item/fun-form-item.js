Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    label: {
      type: String,
      value: ""
    },
    required: {
      type: Boolean,
      value: !1
    },
    type: {
      type: String,
      value: "select"
    },
    placeholder: {
      type: String,
      value: ""
    },
    value: {
      type: null,
      value: null,
      observer: function(e, t, l) {
        e !== t && this.setData({
          currentValue: e
        })
      }
    }
  },
  data: {
    currentValue: null
  },
  methods: {
    onClick: function() {
      var e = this.data.currentValue;
      this.triggerEvent("click", {
        value: e
      })
    }
  }
});