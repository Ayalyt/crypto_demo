var e = require("./@babel/runtime/helpers/createClass.js"),
  s = require("./@babel/runtime/helpers/classCallCheck.js"),
  r = e((function e(r, t, a) {
    s(this, e), this.name = "HttpError", this.code = r || "99001", this.data = t || {}, this.message = a || "网络开小差，等会儿再试吧！"
  }));
module.exports = r;