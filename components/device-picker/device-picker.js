require("../../03F505464CF6B1BF65936D4171E96AC2.js");
Component({
  properties: {
    isShow: {
      type: Boolean,
      value: !1
    },
    placeholder: {
      type: String,
      value: ""
    },
    name: {
      type: String,
      value: ""
    },
    text: {
      type: String,
      value: ""
    }
  },
  data: {
    items: [{
      name: "空调",
      value: "00"
    }, {
      name: "冰箱",
      value: "01"
    }, {
      name: "洗衣机",
      value: "02"
    }, {
      name: "油烟机",
      value: "03"
    }, {
      name: "电视",
      value: "04"
    }, {
      name: "热水器",
      value: "05"
    }, {
      name: "家具",
      value: "06"
    }, {
      name: "橱柜",
      value: "07"
    }, {
      name: "马桶",
      value: "08"
    }, {
      name: "面盆",
      value: "09"
    }, {
      name: "水槽",
      value: "10"
    }, {
      name: "卫浴",
      value: "11"
    }, {
      name: "地漏",
      value: "12"
    }, {
      name: "水管",
      value: "13"
    }, {
      name: "天花板",
      value: "14"
    }, {
      name: "墙面",
      value: "15"
    }, {
      name: "地板",
      value: "16"
    }, {
      name: "门窗",
      value: "17"
    }, {
      name: "其他",
      value: "18"
    }],
    index: 0,
    clsName: "device",
    isShowModal: !1
  },
  lifetimes: {
    attached: function() {
      this.getColumns()
    }
  },
  methods: {
    clickPicker: function() {
      this.setData({
        isShowModal: !0
      })
    },
    getColumns: function() {
      var e = 4 * Math.ceil(this.data.items.length / 4),
        a = this.data.items;
      this.setData({
        items: a.concat([{
          labels: "",
          value: "",
          text: ""
        }]).slice(0, e)
      })
    },
    onClickRadio: function(e) {
      this.setData({
        id: e.currentTarget.dataset.id
      })
    },
    radioChange: function(e) {
      var a = this.data.items,
        t = e.detail.value;
      this.setData({
        value: e.detail.value
      });
      var n = a.filter((function(e) {
        if (e.name === t) return e.value
      }));
      this.triggerEvent("change", n)
    },
    cancelBtn: function() {
      this.setData({
        isShowModal: !1
      })
    },
    okBtn: function() {
      this.setData({
        isShowModal: !1,
        name: this.data.value
      })
    }
  }
});