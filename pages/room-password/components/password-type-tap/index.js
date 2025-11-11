Component({
  options: {},
  properties: {
    tapKey: {
      type: String,
      value: "lock"
    }
  },
  data: {},
  methods: {
    handleChangeTap: function(t) {
      var e = t.currentTarget.dataset.tapKey;
      this.triggerEvent("change", e)
    }
  }
});