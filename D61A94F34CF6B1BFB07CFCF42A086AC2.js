Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("./@babel/runtime/helpers/slicedToArray.js"),
  t = require("./@babel/runtime/helpers/createForOfIteratorHelper.js"),
  n = require("./@babel/runtime/helpers/defineProperty.js"),
  r = o(require("20A5B0474CF6B1BF46C3D840DB776AC2.js")),
  a = (o(require("DA3DBFB64CF6B1BFBC5BD7B18A176AC2.js")), o(require("B95C92C54CF6B1BFDF3AFAC273B76AC2.js")));

function o(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function i(e) {
  var t;
  return (n(t = {}, 0, {
    load: "onLoad",
    unLoad: "onUnload",
    onShow: "onShow",
    onHide: "onHide"
  }), n(t, 1, {
    load: "attached",
    unLoad: "detached"
  }), t)[e]
}

function u(n, o) {
  var u = i(n),
    l = o[u.load],
    c = o[u.unLoad],
    f = o[u.onShow],
    d = o[u.onHide],
    s = {};
  o[u.load] = function() {
    var n, i = t(a.default.obj2KeyValueArray(o.on || {}));
    try {
      for (i.s(); !(n = i.n()).done;) {
        var u = e(n.value, 2),
          c = u[0],
          f = u[1],
          d = f.bind(this);
        s[c] = d, r.default.on(c, d)
      }
    } catch (e) {
      i.e(e)
    } finally {
      i.f()
    }
    this.$broadcast = function(e, t) {
      r.default.emit(e, t)
    };
    for (var h = arguments.length, p = new Array(h), y = 0; y < h; y++) p[y] = arguments[y];
    l && l.call.apply(l, [this].concat(p))
  }, o[u.unLoad] = function() {
    var n, o = t(a.default.obj2KeyValueArray(s));
    try {
      for (o.s(); !(n = o.n()).done;) {
        var i = e(n.value, 2),
          u = i[0],
          l = i[1];
        r.default.off(u, l)
      }
    } catch (e) {
      o.e(e)
    } finally {
      o.f()
    }
    c && c.call(this)
  }, 0 === n && (o[u.onShow] = function() {
    this.setData({
      __isPageShow: !0
    }), f && f.call(this)
  }), o[u.onHide] = function() {
    this.setData({
      __isPageShow: !1
    }), d && d.call(this)
  }
}

function l(n, r) {
  if (r.computed) {
    var o = i(n),
      u = r[o.load];
    r[o.load] = function() {
      var n = this,
        o = this.setData,
        i = function() {
          var i, u = {},
            l = t(a.default.obj2KeyValueArray(r.computed));
          try {
            for (l.s(); !(i = l.n()).done;) {
              var c = e(i.value, 2),
                f = c[0],
                d = c[1],
                s = d.call(n);
              n.data[f] !== s && (u[f] = d.call(n))
            }
          } catch (e) {
            l.e(e)
          } finally {
            l.f()
          }
          o.call(n, u)
        };
      Object.defineProperty(this, "setData", {
        get: function() {
          var e = this;
          return function(t, n) {
            o.call(e, t, (function() {
              i();
              for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
              n && n.call.apply(n, [e].concat(r))
            }))
          }
        }
      }), i();
      for (var l = arguments.length, c = new Array(l), f = 0; f < l; f++) c[f] = arguments[f];
      u.call.apply(u, [this].concat(c))
    }
  }
}
var c = {
  Page: function(e) {
    function t(t) {
      return e.apply(this, arguments)
    }
    return t.toString = function() {
      return e.toString()
    }, t
  }((function(e) {
    return u(0, e), l(0, e), Page(e)
  })),
  Component: function(e) {
    function t(t) {
      return e.apply(this, arguments)
    }
    return t.toString = function() {
      return e.toString()
    }, t
  }((function(e) {
    return u(1, e), l(1, e), Component(e)
  }))
};
exports.default = c;