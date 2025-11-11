var e = require("../../../BD3981924CF6B1BFDB5FE99540F96AC2.js").intercept,
  t = require("../../../7F7F03844CF6B1BF19196B8389686AC2.js").H5FUNLIVE;
Page({
  data: {
    url: ""
  },
  onLoad: function(n) {
    var r = e({}),
      a = "".concat(t, "page/feedback-list?headers=").concat(encodeURIComponent(JSON.stringify(r)));
    console.log(a), this.setData({
      url: a
    })
  }
});