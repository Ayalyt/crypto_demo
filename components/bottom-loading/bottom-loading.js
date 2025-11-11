Component({
  properties: {
    hasMore: {
      type: Boolean,
      value: !1
    },
    text: {
      type: String,
      value: "加载中..."
    },
    emptyText: {
      type: String,
      value: "没有更多了哦～"
    }
  },
  data: {
    loading: !0
  },
  methods: {
    func: function() {
      console.log(123)
    }
  }
});