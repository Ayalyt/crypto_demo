Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("./@babel/runtime/helpers/slicedToArray.js"),
  r = require("./@babel/runtime/helpers/createForOfIteratorHelper.js"),
  t = n(require("6E3D3A124CF6B1BF085B52151BF66AC2.js")),
  u = n(require("B95C92C54CF6B1BFDF3AFAC273B76AC2.js"));

function n(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var a = {
    getCurrentPage: function() {
      var e = getCurrentPages();
      return e[e.length - 1]
    },
    getCurrentPageUrl: function() {
      var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return new t.default((function(t, o) {
        var i = a.getCurrentPage();
        n ? setTimeout((function() {
          var n, a = i.route,
            o = i.options,
            l = a + "?",
            s = r(u.default.obj2KeyValueArray(o));
          try {
            for (s.s(); !(n = s.n()).done;) {
              var f = e(n.value, 2);
              l += f[0] + "=" + f[1] + "&"
            }
          } catch (e) {
            s.e(e)
          } finally {
            s.f()
          }
          var d = "/" + l.substring(0, l.length - 1);
          t(d)
        }), 0) : t(i.route)
      }))
    }
  },
  o = a;
exports.default = o;