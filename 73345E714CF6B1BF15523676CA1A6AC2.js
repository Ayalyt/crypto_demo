var e = new(require("D2FC93004CF6B1BFB49AFB074A0A6AC2.js").AMapWX)({
  key: "2dc02613c3d625de7d5a889dd01e990f"
});
module.exports = {
  getRegeo: function() {
    return new Promise((function(n, t) {
      e.getRegeo({
        success: function(e) {
          n(e)
        },
        fail: function(e) {
          t(e)
        }
      })
    }))
  },
  getCityId: function(e) {
    return Number(e[0].regeocodeData.addressComponent.adcode.slice(0, 4))
  }
};