Component({
  properties: {
    isShowModal: {
      type: Boolean,
      value: !1
    },
    modalTitle: {
      type: String,
      value: ""
    },
    defaultValue: {
      type: String,
      value: "0"
    },
    items: {
      type: Array,
      value: []
    }
  },
  data: {},
  methods: {
    hideFunModal: function() {
      this.setData({
        isShowModal: !this.data.isShowModal
      })
    }
  }
});