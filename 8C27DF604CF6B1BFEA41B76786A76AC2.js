Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = {
  separator: function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
    if (!e) return "0";
    for (var r = (e += "").split("."), o = /(\d+)(\d{3})/; o.test(r[0]);) r[0] = r[0].replace(o, "$1" + t + "$2");
    return r.join(".")
  },
  toPerc: function(e) {
    return module.exports.toFixed(100 * e, 2) + "%"
  }
};
exports.default = e;