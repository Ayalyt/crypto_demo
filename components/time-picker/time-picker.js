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
      observer: function(e, t, i) {}
    },
    items: {
      type: Array,
      value: [],
      observer: function(e, t, i) {
        JSON.stringify(e), JSON.stringify(t)
      }
    },
    text: {
      type: String,
      value: ""
    }
  },
  data: {
    index: 0,
    text: "请选择方便维修的时间"
  },
  lifetimes: {
    attached: function() {}
  },
  methods: {
    bindMultiPickerChange: function(e) {
      var t = e.detail.value,
        i = this.data.items;
      i[0], i[1];
      this.triggerEvent("change", {
        index: t
      })
    }
  }
});