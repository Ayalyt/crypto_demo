var t = require("F9E424F04CF6B1BF9F824CF736786AC2.js");

function e() {
  var t = Math.random().toString(16).slice(2);
  return wx.setStorage({
    key: "device_id",
    data: t
  }), t
}
module.exports = {
  intercept: function(r) {
    return r["X-FUN-TIMESTAMP"] = Date.now() + "", r["X-FUN-APPID"] = "WECHAT", r["X-FUN-APPVERSION"] = "2.1.5", r["X-FUN-SIGN"] = "mini-funlive", r["X-FUN-TOKEN"] = function() {
      try {
        return wx.getStorageSync(t.TOKEN) || ""
      } catch (t) {}
    }(), r["X-FUN-DEVICEID"] = function() {
      try {
        var t = wx.getStorageSync("device_id");
        return t || e()
      } catch (t) {
        return e()
      }
    }(), r
  }
};