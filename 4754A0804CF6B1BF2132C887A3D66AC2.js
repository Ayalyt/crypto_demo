var e = require("./@babel/runtime/helpers/typeof.js"),
  t = function() {
    function t(e, t) {
      return null != t && e instanceof t
    }
    var r, n, o;
    try {
      r = Map
    } catch (e) {
      r = function() {}
    }
    try {
      n = Set
    } catch (e) {
      n = function() {}
    }
    try {
      o = Promise
    } catch (e) {
      o = function() {}
    }

    function u(i, f, a, l, s) {
      "object" === e(f) && (a = f.depth, l = f.prototype, s = f.includeNonEnumerable, f = f.circular);
      var p = [],
        b = [],
        y = "undefined" != typeof Buffer;
      return void 0 === f && (f = !0), void 0 === a && (a = 1 / 0),
        function i(a, d) {
          if (null === a) return null;
          if (0 === d) return a;
          var g, j;
          if ("object" != e(a)) return a;
          if (t(a, r)) g = new r;
          else if (t(a, n)) g = new n;
          else if (t(a, o)) g = new o((function(e, t) {
            a.then((function(t) {
              e(i(t, d - 1))
            }), (function(e) {
              t(i(e, d - 1))
            }))
          }));
          else if (u.__isArray(a)) g = [];
          else if (u.__isRegExp(a)) g = new RegExp(a.source, c(a)), a.lastIndex && (g.lastIndex = a.lastIndex);
          else if (u.__isDate(a)) g = new Date(a.getTime());
          else {
            if (y && Buffer.isBuffer(a)) return g = Buffer.allocUnsafe ? Buffer.allocUnsafe(a.length) : new Buffer(a.length), a.copy(g), g;
            t(a, Error) ? g = Object.create(a) : void 0 === l ? (j = Object.getPrototypeOf(a), g = Object.create(j)) : (g = Object.create(l), j = l)
          }
          if (f) {
            var O = p.indexOf(a);
            if (-1 != O) return b[O];
            p.push(a), b.push(g)
          }
          for (var m in t(a, r) && a.forEach((function(e, t) {
              var r = i(t, d - 1),
                n = i(e, d - 1);
              g.set(r, n)
            })), t(a, n) && a.forEach((function(e) {
              var t = i(e, d - 1);
              g.add(t)
            })), a) {
            var v;
            j && (v = Object.getOwnPropertyDescriptor(j, m)), v && null == v.set || (g[m] = i(a[m], d - 1))
          }
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(a);
            for (m = 0; m < _.length; m++) {
              var h = _[m];
              (!(x = Object.getOwnPropertyDescriptor(a, h)) || x.enumerable || s) && (g[h] = i(a[h], d - 1), (x || {}).enumerable || Object.defineProperty(g, h, {
                enumerable: !1
              }))
            }
          }
          if (s) {
            var w = Object.getOwnPropertyNames(a);
            for (m = 0; m < w.length; m++) {
              var x, P = w[m];
              (x = Object.getOwnPropertyDescriptor(a, P)) && x.enumerable || (g[P] = i(a[P], d - 1), Object.defineProperty(g, P, {
                enumerable: !1
              }))
            }
          }
          return g
        }(i, a)
    }

    function i(e) {
      return Object.prototype.toString.call(e)
    }

    function c(e) {
      var t = "";
      return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), t
    }
    return u.clonePrototype = function(e) {
      if (null === e) return null;
      var t = function() {};
      return t.prototype = e, new t
    }, u.__objToStr = i, u.__isDate = function(t) {
      return "object" === e(t) && "[object Date]" === i(t)
    }, u.__isArray = function(t) {
      return "object" === e(t) && "[object Array]" === i(t)
    }, u.__isRegExp = function(t) {
      return "object" === e(t) && "[object RegExp]" === i(t)
    }, u.__getRegExpFlags = c, u
  }();
"object" === ("undefined" == typeof module ? "undefined" : e(module)) && module.exports && (module.exports = t);