Component({
  properties: {
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
      observer: function(e, t, a) {
        JSON.stringify(e), JSON.stringify(t)
      }
    },
    value: {
      type: null,
      value: null,
      observer: function(e, t, a) {}
    },
    disabled: {
      type: Boolean,
      value: !1
    }
  },
  data: {},
  methods: {
    onChange: function(e) {
      var t = this.data.name,
        a = e.detail.value;
      this.setData({
        value: a
      }), this.triggerEvent("change", {
        name: t,
        value: a
      })
    }
  }
});