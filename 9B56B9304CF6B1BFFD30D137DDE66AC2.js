var t, e = require("./@babel/runtime/helpers/typeof.js");
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.0.5
 */
t = function() {
  function t(t) {
    return "function" == typeof t
  }
  var n = Array.isArray ? Array.isArray : function(t) {
      return "[object Array]" === Object.prototype.toString.call(t)
    },
    r = 0,
    o = void 0,
    i = void 0,
    s = function(t, e) {
      d[r] = t, d[r + 1] = e, 2 === (r += 2) && (i ? i(v) : w())
    },
    u = "undefined" != typeof window ? window : void 0,
    c = u || {},
    a = c.MutationObserver || c.WebKitMutationObserver,
    f = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
    l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

  function h() {
    var t = setTimeout;
    return function() {
      return t(v, 1)
    }
  }
  var d = new Array(1e3);

  function v() {
    for (var t = 0; t < r; t += 2)(0, d[t])(d[t + 1]), d[t] = void 0, d[t + 1] = void 0;
    r = 0
  }
  var p, _, y, m, w = void 0;

  function b(t, e) {
    var n = arguments,
      r = this,
      o = new this.constructor(S);
    void 0 === o[A] && K(o);
    var i, u = r._state;
    return u ? (i = n[u - 1], s((function() {
      return D(u, o, i, r._result)
    }))) : P(r, o, t, e), o
  }

  function g(t) {
    if (t && "object" === e(t) && t.constructor === this) return t;
    var n = new this(S);
    return x(n, t), n
  }
  f ? w = function() {
    return process.nextTick(v)
  } : a ? (_ = 0, y = new a(v), m = document.createTextNode(""), y.observe(m, {
    characterData: !0
  }), w = function() {
    m.data = _ = ++_ % 2
  }) : l ? ((p = new MessageChannel).port1.onmessage = v, w = function() {
    return p.port2.postMessage(0)
  }) : w = void 0 === u && "function" == typeof require ? function() {
    try {
      var t = require("cdp/lib/promise/vertx.js");
      return void 0 !== (o = t.runOnLoop || t.runOnContext) ? function() {
        o(v)
      } : h()
    } catch (t) {
      return h()
    }
  }() : h();
  var A = Math.random().toString(36).substring(16);

  function S() {}
  var E = new Y;

  function j(t) {
    try {
      return t.then
    } catch (t) {
      return E.error = t, E
    }
  }

  function T(e, n, r) {
    n.constructor === e.constructor && r === b && n.constructor.resolve === g ? function(t, e) {
      1 === e._state ? C(t, e._result) : 2 === e._state ? O(t, e._result) : P(e, void 0, (function(e) {
        return x(t, e)
      }), (function(e) {
        return O(t, e)
      }))
    }(e, n) : r === E ? O(e, E.error) : void 0 === r ? C(e, n) : t(r) ? function(t, e, n) {
      s((function(t) {
        var r = !1,
          o = function(t, e, n, r) {
            try {
              t.call(e, n, r)
            } catch (t) {
              return t
            }
          }(n, e, (function(n) {
            r || (r = !0, e !== n ? x(t, n) : C(t, n))
          }), (function(e) {
            r || (r = !0, O(t, e))
          }), t._label);
        !r && o && (r = !0, O(t, o))
      }), t)
    }(e, n, r) : C(e, n)
  }

  function x(t, n) {
    var r;
    t === n ? O(t, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof(r = n) || "object" === e(r) && null !== r ? T(t, n, j(n)) : C(t, n)
  }

  function M(t) {
    t._onerror && t._onerror(t._result), q(t)
  }

  function C(t, e) {
    void 0 === t._state && (t._result = e, t._state = 1, 0 !== t._subscribers.length && s(q, t))
  }

  function O(t, e) {
    void 0 === t._state && (t._state = 2, t._result = e, s(M, t))
  }

  function P(t, e, n, r) {
    var o = t._subscribers,
      i = o.length;
    t._onerror = null, o[i] = e, o[i + 1] = n, o[i + 2] = r, 0 === i && t._state && s(q, t)
  }

  function q(t) {
    var e = t._subscribers,
      n = t._state;
    if (0 !== e.length) {
      for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? D(n, r, o, i) : o(i);
      t._subscribers.length = 0
    }
  }

  function Y() {
    this.error = null
  }
  var k = new Y;

  function D(e, n, r, o) {
    var i = t(r),
      s = void 0,
      u = void 0,
      c = void 0,
      a = void 0;
    if (i) {
      if ((s = function(t, e) {
          try {
            return t(e)
          } catch (t) {
            return k.error = t, k
          }
        }(r, o)) === k ? (a = !0, u = s.error, s = null) : c = !0, n === s) return void O(n, new TypeError("A promises callback cannot return that same promise."))
    } else s = o, c = !0;
    void 0 !== n._state || (i && c ? x(n, s) : a ? O(n, u) : 1 === e ? C(n, s) : 2 === e && O(n, s))
  }
  var F = 0;

  function K(t) {
    t[A] = F++, t._state = void 0, t._result = void 0, t._subscribers = []
  }

  function L(t, e) {
    this._instanceConstructor = t, this.promise = new t(S), this.promise[A] || K(this.promise), n(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? C(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && C(this.promise, this._result))) : O(this.promise, new Error("Array Methods must be provided an Array"))
  }

  function N(t) {
    this[A] = F++, this._result = this._state = void 0, this._subscribers = [], S !== t && ("function" != typeof t && function() {
      throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }(), this instanceof N ? function(t, e) {
      try {
        e((function(e) {
          x(t, e)
        }), (function(e) {
          O(t, e)
        }))
      } catch (e) {
        O(t, e)
      }
    }(this, t) : function() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }())
  }
  return L.prototype._enumerate = function() {
    for (var t = this.length, e = this._input, n = 0; void 0 === this._state && n < t; n++) this._eachEntry(e[n], n)
  }, L.prototype._eachEntry = function(t, e) {
    var n = this._instanceConstructor,
      r = n.resolve;
    if (r === g) {
      var o = j(t);
      if (o === b && void 0 !== t._state) this._settledAt(t._state, e, t._result);
      else if ("function" != typeof o) this._remaining--, this._result[e] = t;
      else if (n === N) {
        var i = new n(S);
        T(i, t, o), this._willSettleAt(i, e)
      } else this._willSettleAt(new n((function(e) {
        return e(t)
      })), e)
    } else this._willSettleAt(r(t), e)
  }, L.prototype._settledAt = function(t, e, n) {
    var r = this.promise;
    void 0 === r._state && (this._remaining--, 2 === t ? O(r, n) : this._result[e] = n), 0 === this._remaining && C(r, this._result)
  }, L.prototype._willSettleAt = function(t, e) {
    var n = this;
    P(t, void 0, (function(t) {
      return n._settledAt(1, e, t)
    }), (function(t) {
      return n._settledAt(2, e, t)
    }))
  }, N.all = function(t) {
    return new L(this, t).promise
  }, N.race = function(t) {
    var e = this;
    return n(t) ? new e((function(n, r) {
      for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
    })) : new e((function(t, e) {
      return e(new TypeError("You must pass an array to race."))
    }))
  }, N.resolve = g, N.reject = function(t) {
    var e = new this(S);
    return O(e, t), e
  }, N._setScheduler = function(t) {
    i = t
  }, N._setAsap = function(t) {
    s = t
  }, N._asap = s, N.prototype = {
    constructor: N,
    then: b,
    catch: function(t) {
      return this.then(null, t)
    }
  }, N.Promise = N, N
}, "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (void 0).ES6Promise = t();