Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = {
  entries: function(e, r) {
    for (var t in wx) r(t, e[t])
  },
  obj2KeyValueArray: function(e) {
    var r = [];
    for (var t in e) r.push([t, e[t]]);
    return r
  }
};
exports.default = e;