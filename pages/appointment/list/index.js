var t = require("../../../BD3981924CF6B1BFDB5FE99540F96AC2.js").intercept,
  e = require("../../../7F7F03844CF6B1BF19196B8389686AC2.js").H5FUNLIVE;
Page({
  data: {
    url: ""
  },
  onLoad: function(n) {
    var r = t({}),
      a = "".concat(e, "page/appointments?headers=").concat(encodeURIComponent(JSON.stringify(r)));
    this.setData({
      url: a
    })
  }
});