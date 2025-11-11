Component({
  properties: {
    countDownModel: {
      type: Object,
      value: {},
      observer: "countDownModelChanged"
    },
    color: {
      type: String,
      value: "#333333"
    },
    fontSize: {
      type: Number,
      value: 24
    }
  },
  data: {},
  lifetimes: {
    attached: function() {}
  },
  methods: {
    countDownModelChanged: function(t, o, a) {
      t !== o && (this.data.countDownModel.daysDisplay = this.formatDisplay(this.data.countDownModel.days), this.data.countDownModel.hoursDisplay = this.formatDisplay(this.data.countDownModel.hours), this.data.countDownModel.minutesDisplay = this.formatDisplay(this.data.countDownModel.minutes), this.data.countDownModel.secondDisplay = this.formatDisplay(this.data.countDownModel.second), this.setData({
        countDownModel: this.data.countDownModel
      }))
    },
    formatDisplay: function(t) {
      return t < 10 ? "0" + t : t
    }
  }
});