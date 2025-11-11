Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = function(e, t, n) {
    return e.reduce((function(e, r) {
      return n ? t(e, r) ? r : e : t(e, r) ? e : r
    }))
  },
  t = {
    findMax: function(t, n) {
      return e(t, n, !0)
    },
    findMin: function(t, n) {
      return e(t, n, !1)
    }
  };
exports.default = t;