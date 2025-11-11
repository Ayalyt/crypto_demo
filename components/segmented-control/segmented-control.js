Component({
  properties: {
    items: {
      type: Array,
      value: []
    },
    bageNumberArray: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0
    },
    itemWidth: {
      type: String,
      value: "25%"
    },
    itemHeight: {
      type: Number,
      value: 194
    }
  },
  data: {},
  lifetimes: {
    attached: function() {
      var t = 100 / this.data.items.length;
      if (this.setData({
          itemWidth: t + "%"
        }), 0 == this.data.bageNumberArray.length)
        for (var e = 0; e < this.data.items.length; e++) this.data.bageNumberArray.push(0)
    },
    moved: function() {},
    detached: function() {}
  },
  attached: function() {
    console.log(this.data.items)
  },
  ready: function() {},
  pageLifetimes: {
    show: function() {},
    hide: function() {},
    resize: function() {}
  },
  methods: {
    swichNav: function(t) {
      var e = parseInt(t.currentTarget.id);
      this.setData({
        current: e
      }), this.triggerEvent("change", e)
    },
    setBageNumber: function(t, e) {
      t >= 0 && e >= 0 && e < this.data.bageNumberArray.length && (this.data.bageNumberArray[e] = t, this.setData({
        bageNumberArray: this.data.bageNumberArray
      }))
    }
  }
});