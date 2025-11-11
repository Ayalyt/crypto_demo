Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e, t = (e = require("9B56B9304CF6B1BFFD30D137DDE66AC2.js")) && e.__esModule ? e : {
  default: e
};
t.default.prototype.finally = function(e) {
  var t = this.constructor;
  return this.then((function(r) {
    return t.resolve(e()).then((function() {
      return r
    }))
  }), (function(r) {
    return t.resolve(e()).then((function() {
      throw r
    }))
  }))
};
var r = t.default;
exports.default = r;