Component({
  properties: {
    text: {
      type: String,
      value: "按钮"
    },
    disabled: {
      type: Boolean,
      value: !1
    }
  },
  data: {},
  methods: {
    handleClick: function() {
      this.triggerEvent("click")
    }
  }
});