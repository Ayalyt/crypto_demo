require("./@babel/runtime/helpers/Arrayincludes.js");
var t = require("./@babel/runtime/helpers/regeneratorRuntime.js"),
  e = require("./@babel/runtime/helpers/typeof.js");
! function(t) {
  var r, n = Object.prototype,
    u = n.hasOwnProperty,
    i = "function" == typeof Symbol ? Symbol : {},
    o = i.iterator || "@@iterator",
    a = i.asyncIterator || "@@asyncIterator",
    s = i.toStringTag || "@@toStringTag";

  function c(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e]
  }
  try {
    c({}, "")
  } catch (t) {
    c = function(t, e, r) {
      return t[e] = r
    }
  }

  function m(t, e, r, n) {
    var u = e && e.prototype instanceof g ? e : g,
      i = Object.create(u.prototype),
      o = new T(n || []);
    return i._invoke = function(t, e, r) {
      var n = f;
      return function(u, i) {
        if (n === p) throw new Error("Generator is already running");
        if (n === d) {
          if ("throw" === u) throw i;
          return E()
        }
        for (r.method = u, r.arg = i;;) {
          var o = r.delegate;
          if (o) {
            var a = O(o, r);
            if (a) {
              if (a === v) continue;
              return a
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (n === f) throw n = d, r.arg;
            r.dispatchException(r.arg)
          } else "return" === r.method && r.abrupt("return", r.arg);
          n = p;
          var s = l(t, e, r);
          if ("normal" === s.type) {
            if (n = r.done ? d : h, s.arg === v) continue;
            return {
              value: s.arg,
              done: r.done
            }
          }
          "throw" === s.type && (n = d, r.method = "throw", r.arg = s.arg)
        }
      }
    }(t, r, o), i
  }

  function l(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      }
    } catch (t) {
      return {
        type: "throw",
        arg: t
      }
    }
  }
  t.wrap = m;
  var f = "suspendedStart",
    h = "suspendedYield",
    p = "executing",
    d = "completed",
    v = {};

  function g() {}

  function _() {}

  function y() {}
  var w = {};
  w[o] = function() {
    return this
  };
  var b = Object.getPrototypeOf,
    k = b && b(b(j([])));
  k && k !== n && u.call(k, o) && (w = k);
  var x = y.prototype = g.prototype = Object.create(w);

  function S(t) {
    ["next", "throw", "return"].forEach((function(e) {
      c(t, e, (function(t) {
        return this._invoke(e, t)
      }))
    }))
  }

  function P(t, r) {
    function n(i, o, a, s) {
      var c = l(t[i], t, o);
      if ("throw" !== c.type) {
        var m = c.arg,
          f = m.value;
        return f && "object" == e(f) && u.call(f, "__await") ? r.resolve(f.__await).then((function(t) {
          n("next", t, a, s)
        }), (function(t) {
          n("throw", t, a, s)
        })) : r.resolve(f).then((function(t) {
          m.value = t, a(m)
        }), (function(t) {
          return n("throw", t, a, s)
        }))
      }
      s(c.arg)
    }
    var i;
    this._invoke = function(t, e) {
      function u() {
        return new r((function(r, u) {
          n(t, e, r, u)
        }))
      }
      return i = i ? i.then(u, u) : u()
    }
  }

  function O(t, e) {
    var n = t.iterator[e.method];
    if (n === r) {
      if (e.delegate = null, "throw" === e.method) {
        if (t.iterator.return && (e.method = "return", e.arg = r, O(t, e), "throw" === e.method)) return v;
        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
      }
      return v
    }
    var u = l(n, t.iterator, e.arg);
    if ("throw" === u.type) return e.method = "throw", e.arg = u.arg, e.delegate = null, v;
    var i = u.arg;
    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, v) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v)
  }

  function $(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
  }

  function D(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e
  }

  function T(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach($, this), this.reset(!0)
  }

  function j(t) {
    if (t) {
      var e = t[o];
      if (e) return e.call(t);
      if ("function" == typeof t.next) return t;
      if (!isNaN(t.length)) {
        var n = -1,
          i = function e() {
            for (; ++n < t.length;)
              if (u.call(t, n)) return e.value = t[n], e.done = !1, e;
            return e.value = r, e.done = !0, e
          };
        return i.next = i
      }
    }
    return {
      next: E
    }
  }

  function E() {
    return {
      value: r,
      done: !0
    }
  }
  _.prototype = x.constructor = y, y.constructor = _, _.displayName = c(y, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === _ || "GeneratorFunction" === (e.displayName || e.name))
  }, t.mark = function(t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, c(t, s, "GeneratorFunction")), t.prototype = Object.create(x), t
  }, t.awrap = function(t) {
    return {
      __await: t
    }
  }, S(P.prototype), P.prototype[a] = function() {
    return this
  }, t.AsyncIterator = P, t.async = function(e, r, n, u, i) {
    void 0 === i && (i = Promise);
    var o = new P(m(e, r, n, u), i);
    return t.isGeneratorFunction(r) ? o : o.next().then((function(t) {
      return t.done ? t.value : o.next()
    }))
  }, S(x), c(x, s, "Generator"), x[o] = function() {
    return this
  }, x.toString = function() {
    return "[object Generator]"
  }, t.keys = function(t) {
    var e = [];
    for (var r in t) e.push(r);
    return e.reverse(),
      function r() {
        for (; e.length;) {
          var n = e.pop();
          if (n in t) return r.value = n, r.done = !1, r
        }
        return r.done = !0, r
      }
  }, t.values = j, T.prototype = {
    constructor: T,
    reset: function(t) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(D), !t)
        for (var e in this) "t" === e.charAt(0) && u.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
    },
    stop: function() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval
    },
    dispatchException: function(t) {
      if (this.done) throw t;
      var e = this;

      function n(n, u) {
        return a.type = "throw", a.arg = t, e.next = n, u && (e.method = "next", e.arg = r), !!u
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var o = this.tryEntries[i],
          a = o.completion;
        if ("root" === o.tryLoc) return n("end");
        if (o.tryLoc <= this.prev) {
          var s = u.call(o, "catchLoc"),
            c = u.call(o, "finallyLoc");
          if (s && c) {
            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
          } else if (s) {
            if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
          } else {
            if (!c) throw new Error("try statement without catch or finally");
            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
          }
        }
      }
    },
    abrupt: function(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var n = this.tryEntries[r];
        if (n.tryLoc <= this.prev && u.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
          var i = n;
          break
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var o = i ? i.completion : {};
      return o.type = t, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(o)
    },
    complete: function(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
    },
    finish: function(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), D(r), v
      }
    },
    catch: function(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var u = n.arg;
            D(r)
          }
          return u
        }
      }
      throw new Error("illegal catch attempt")
    },
    delegateYield: function(t, e, n) {
      return this.delegate = {
        iterator: j(t),
        resultName: e,
        nextLoc: n
      }, "next" === this.method && (this.arg = r), v
    }
  }
}({});
! function(t, r) {
  "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (t = "undefined" != typeof globalThis ? globalThis : t || self).zhuge = r()
}(void 0, (function() {
  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
      return e(t)
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
    })(t)
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function u(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
  }

  function i(t, e, r) {
    return e && u(t.prototype, e), r && u(t, r), t
  }

  function o(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && function(t, e) {
      (Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }(t, e)
  }

  function s(t) {
    return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function c(t, r) {
    return !r || "object" != e(r) && "function" != typeof r ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : r
  }

  function m(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = s(t);
      if (e) {
        var u = s(this).constructor;
        r = Reflect.construct(n, arguments, u)
      } else r = n.apply(this, arguments);
      return c(this, r)
    }
  }

  function l(t, e, r) {
    return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, r) {
      var n = function(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)););
        return t
      }(t, e);
      if (n) {
        var u = Object.getOwnPropertyDescriptor(n, e);
        return u.get ? u.get.call(r) : u.value
      }
    })(t, e, r || t)
  }

  function f(t) {
    return function(t) {
      if (Array.isArray(t)) return p(t)
    }(t) || function(t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }(t) || h(t) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function h(t, e) {
    if (t) {
      if ("string" == typeof t) return p(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(t, e) : void 0
    }
  }

  function p(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
  }
  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
    
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
    
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
  function d(t, r, n, u) {
    var i, o = arguments.length,
      a = o < 3 ? r : null === u ? u = Object.getOwnPropertyDescriptor(r, n) : u;
    if ("object" == ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, r, n, u);
    else
      for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(r, n, a) : i(r, n)) || a);
    return o > 3 && a && Object.defineProperty(r, n, a), a
  }

  function v(t, e, r, n) {
    return new(r || (r = Promise))((function(u, i) {
      function o(t) {
        try {
          s(n.next(t))
        } catch (t) {
          i(t)
        }
      }

      function a(t) {
        try {
          s(n.throw(t))
        } catch (t) {
          i(t)
        }
      }

      function s(t) {
        var e;
        t.done ? u(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
          t(e)
        }))).then(o, a)
      }
      s((n = n.apply(t, e || [])).next())
    }))
  }
  var g, _, y, w = {
      utmKeys: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
      isValid: function(t) {
        return null == t
      },
      type: function(t) {
        return Object.prototype.toString.call(t)
      },
      isObject: function(t) {
        return "[object Object]" === this.type(t)
      },
      isArray: function(t) {
        return "[object Array]" === this.type(t)
      },
      isString: function(t) {
        return "[object String]" === this.type(t)
      },
      isNumber: function(t) {
        return "[object Number]" === this.type(t)
      },
      isDate: function(t) {
        return "[object Date]" === this.type(t)
      },
      isFunction: function(t) {
        return "[object Function]" === this.type(t)
      },
      isEmpty: function(t) {
        return Array.isArray(t) || "string" == typeof t || t instanceof String ? 0 === t.length : t instanceof Map || t instanceof Set ? 0 === t.size : "[object Object]" === Object.prototype.toString.call(t) && 0 === Object.keys(t).length
      },
      merge: function() {
        for (var t = this, e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        return r.reduce((function(e, r) {
          return Object.keys(r).forEach((function(n) {
            Array.isArray(e[n]) && Array.isArray(r[n]) ? e[n] = Array.from(new Set(e[n].concat(r[n]))) : t.isObject(e[n]) && t.isObject(r[n]) ? e[n] = t.merge(e[n], r[n]) : e[n] = r[n]
          })), e
        }), {})
      },
      UUID: function() {
        var t = function() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        };
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
      },
      clone: function(t) {
        var e = function(t) {
            var e = t.constructor;
            switch (n(t)) {
              case "Boolean":
              case "Number":
              case "String":
              case "Error":
              case "Date":
                return new e(t);
              case "RegExp":
                return i(t);
              case "Symbol":
                return u(t);
              case "Function":
                return t;
              default:
                return null
            }
          },
          n = function(t) {
            return Object.prototype.toString.call(t).slice(8, -1)
          },
          u = function(t) {
            return Object(Symbol.prototype.valueOf.call(t))
          },
          i = function(t) {
            var e = new t.constructor(t.source, /\w*$/.exec(t));
            return e.lastIndex = t.lastIndex, e
          },
          o = function(t, e) {
            for (var r = -1, n = t.length; ++r < n;) e(t[r], r);
            return t
          };
        return function t(u) {
          var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new WeakMap;
          if ("object" !== r(u) || null === u) return u;
          var a = n(u),
            s = null;
          return i.get(u) ? i.get(u) : (i.set(u, s), "Set" !== a && "Map" !== a && "Array" !== a && "Object" !== a ? e(u) : "Set" === a ? (s = new Set, u.forEach((function(e) {
            s.add(t(e, i))
          })), s) : "Map" === a ? (s = new Map, u.forEach((function(e, r) {
            s.set(r, t(e, i))
          })), s) : ("Array" === a && (s = new Array, o(u, (function(e, r) {
            s[r] = t(e, i)
          }))), "Object" === a && (s = new Object, o(Object.keys(u), (function(e) {
            s[e] = t(u[e], i)
          }))), s))
        }(t)
      },
      parseQuery: function(t) {
        if (this.isEmpty(t)) return "";
        var e = [];
        for (var r in t) e.push("".concat(r, "=").concat(t[r]));
        return e.join("&")
      },
      getTimezone: function(t) {
        return 6e4 * -t.getTimezoneOffset()
      },
      encode: function(t) {
        var e = {};
        for (var r in t) e["_" + r] = t[r];
        return e
      },
      isEqual: function(t, e) {
        if (this.type(t) !== this.type(e)) return !1;
        var r = !0;
        for (var n in t) t[n] !== e[n] && (r = !1);
        return r
      },
      getUtmByQuery: function(t) {
        var e = {};
        for (var r in t) this.utmKeys.includes(r) && (e[r] = t[r]);
        return e
      },
      filterUtm: function(t) {
        var e = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
          r = !1,
          n = {};
        for (var u in t) e.indexOf(u) > -1 && (r = !0, n[u] = t[u]);
        return r ? n : null
      },
      deleteQueryParams: function(t, e) {
        var r = t.split("&"),
          n = [];
        return r.forEach((function(t) {
          var r = new RegExp(e + "=.*"),
            u = "";
          r.test(t) ? (u = t.replace(r, "")) && n.push(u) : n.push(t)
        })), n.join("&")
      },
      addUrlParam: function(t, e) {
        var r = t,
          n = "";
        for (var u in e) n && (n += "&"), r = this.deleteQueryParams(r, u), n += u + "=" + e[u];
        var i = r.split("?");
        return i.length > 1 ? i[1] ? i[1] = n + "&" + i[1] : i[1] = n : 1 === i.length && i.push(n), i.join("?")
      },
      getCurrentPage: function() {
        var t = getCurrentPages();
        return t[t.length - 1]
      },
      wxGetTitle: function(t) {
        var e, r, n, u = "";
        t.data && t.data.title && t.data.title.length > 0 && (u = Array.isArray(t.data.title) ? t.data.title.join(" ") : t.data.title);
        try {
          if (!u.length && __wxConfig && (__wxConfig.tabBar && __wxConfig.tabBar.list.forEach((function(e) {
              e.pagePath === "".concat(t.route, ".html") && e.text && (u = e.text)
            })), !u.length)) {
            var i = __wxConfig.page[t.route] || __wxConfig.page["".concat(t.route, ".html")];
            u = i ? null === (e = i.window) || void 0 === e ? void 0 : e.navigationBarTitleText : null === (n = null === (r = null === __wxConfig || void 0 === __wxConfig ? void 0 : __wxConfig.global) || void 0 === r ? void 0 : r.window) || void 0 === n ? void 0 : n.navigationBarTitleText
          }
        } catch (t) {}
        return u || t.route
      }
    },
    b = function() {
      function t(e, r) {
        n(this, t), this.timeout = 500, this.catch = [], this.clearCatchTimer = null, this.url = "".concat(r.config.serverUrl.normal, "/apipool"), this.timeout = r.config.timeout || this.timeout, this.requestTimeout = r.config.requestTimeout, this.debug = r.config.debug ? 1 : 0, this.appKey = r.appKey, this.did = r.storage.allData.did, this.sendLimit = r.config.sendLimit, this.requestFunction = e
      }
      return i(t, [{
        key: "generateRequestData",
        value: function() {
          var t = new Date,
            e = {
              method: "web_event_sr.upload",
              event: JSON.stringify({
                sln: "itn",
                pl: "js",
                sdk: "sys",
                sdkv: "__sdkv__",
                owner: "zg",
                ut: "".concat(t.getFullYear(), "-").concat(t.getMonth() + 1, "-").concat(t.getDate(), " ").concat(t.getHours(), ":").concat(t.getMinutes(), ":").concat(t.getSeconds()),
                tz: w.getTimezone(t),
                debug: this.debug ? 1 : 0,
                ak: this.appKey,
                usr: {
                  did: this.did
                },
                data: f(this.catch)
              }),
              _: t.getTime() + ""
            };
          return this.catch = [], e
        }
      }, {
        key: "clear",
        value: function() {
          if (this.catch.length) {
            var t = this.generateRequestData();
            this.requestFunction(this.url, t, {
              timeout: this.requestTimeout
            })
          }
        }
      }, {
        key: "send",
        value: function(t) {
          var e = this;
          if (this.catch.push(t), this.clearCatchTimer && clearTimeout(this.clearCatchTimer), this.clearCatchTimer = setTimeout((function() {
              e.clear()
            }), 3e4), !(this.catch.length < this.sendLimit)) {
            this.clearCatchTimer && clearTimeout(this.clearCatchTimer);
            var r = this.generateRequestData();
            return new Promise((function(t, n) {
              var u, i = !1;
              u = setTimeout((function() {
                i = !0, t(null)
              }), e.timeout), e.requestFunction(e.url, r, {
                timeout: e.requestTimeout
              }).then((function(e) {
                i || (clearTimeout(u), t(e))
              })).catch((function(t) {
                n(t)
              }))
            }))
          }
        }
      }]), t
    }(),
    k = function() {
      function e(t, r, u) {
        n(this, e), this.storageFunction = t, this.allData = u || {}, this.allData.did || this.set("did", r.config.did || w.UUID()), this.allData.cuid || this.set("cuid", void 0), w.isEmpty(r.config.utm) || this.set("utm", r.config.utm)
      }
      return i(e, [{
        key: "get",
        value: function(t) {
          return this.allData[t]
        }
      }, {
        key: "set",
        value: function(e, r) {
          return v(this, void 0, void 0, t().mark((function n() {
            return t().wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return this.allData[e] = r, t.next = 3, this.storageFunction.set("zg", this.allData);
                case 3:
                case "end":
                  return t.stop()
              }
            }), n, this)
          })))
        }
      }]), e
    }();

  function x(t, e, r) {
    var n = r.value;
    return r.value = function() {
      for (var t = arguments.length, r = new Array(t), u = 0; u < t; u++) r[u] = arguments[u];
      if (this.pageReady && this.loadReady) return n.apply(this, r);
      this.buffer.push({
        fnName: e,
        args: r
      })
    }, r
  }
  var S = function() {
    function e(t, r, u) {
      n(this, e), this.buffer = [], this.currentPage = {
        queryObj: {},
        query: "",
        route: "",
        time: 0,
        url: "",
        title: ""
      }, this.prevPage = {
        queryObj: {},
        query: "",
        route: "",
        time: 0,
        url: "",
        title: ""
      }, this.cn = "", this.previousCountEvent = {
        name: "",
        props: {}
      }, this.count = 0, this.countTimer = null, this.pageReady = !1, this.loadReady = !1, _ = t, g = r, y = u, this.referrerDomain = "miniprogram", this.appKey = "", this.config = {
        serverUrl: {
          normal: "https://u.zhugeapi.net",
          bac: "https://ubak.zhugeio.com"
        },
        debug: !1,
        pv: !1,
        click: !1,
        timeout: 18e5,
        requestTimeout: 6e4,
        did: "",
        duration: !1,
        vn: "1.0",
        appId: "",
        sendLimit: 1,
        superProperty: {},
        forwardShare: !1,
        beforeDuration: function() {},
        afterDuration: function() {},
        countDuration: 3e3,
        parseScene: !0,
        utm: {},
        utmMode: "session",
        shareToUtm: {},
        exposure: !1
      }
    }
    return i(e, [{
      key: "load",
      value: function(e, r) {
        return v(this, void 0, void 0, t().mark((function n() {
          var u;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return this.appKey = e, this.config = w.merge(this.config, r || {}), t.prev = 2, t.next = 5, g.get();
              case 5:
                if ((u = t.sent) && u.did) {
                  t.next = 10;
                  break
                }
                return t.next = 9, g.getDid();
              case 9:
                u.did = t.sent;
              case 10:
                this.storage = new k(g, this, u), this.request = new b(_, this), this.loadReady = !0, this.updateSession("load"), this.freeBuffer(), t.next = 20;
                break;
              case 17:
                t.prev = 17, t.t0 = t.catch(2), console.error("sdk初始化失败，缓存读取失败", t.t0);
              case 20:
              case "end":
                return t.stop()
            }
          }), n, this, [
            [2, 17]
          ])
        })))
      }
    }, {
      key: "freeBuffer",
      value: function() {
        if (this.loadReady && this.pageReady)
          for (; this.buffer.length;) {
            var t = this.buffer.shift();
            t && (e.prototype[t.fnName] || this[t.fnName]).apply(this, t.args)
          }
      }
    }, {
      key: "send",
      value: function(t) {
        var e = this.storage.allData.utm;
        if (e)
          for (var r in e) e[r] && (t.pr["$".concat(r)] = e[r]);
        return this.request.send(t)
      }
    }, {
      key: "trackBaseData",
      value: function(e) {
        return v(this, void 0, void 0, t().mark((function r() {
          var n, u;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return n = new Date, t.t0 = e, t.t1 = n.getTime(), t.t2 = this.storage.allData.sid, t.t3 = this.storage.allData.cuid, t.t4 = this.cn, t.t5 = w.getTimezone(n), t.t6 = this.currentPage.url, t.t7 = this.prevPage.url, t.t8 = y.os(), t.t9 = y.ov(), t.t10 = y.version(), t.next = 14, y.mnet();
              case 14:
                return t.t11 = t.sent, t.next = 17, y.net();
              case 17:
                return t.t12 = t.sent, t.t13 = this.config.vn, t.t14 = this.referrerDomain, t.t15 = this.config.appId, t.t16 = {
                  $eid: t.t0,
                  $ct: t.t1,
                  $sid: t.t2,
                  $cuid: t.t3,
                  $cn: t.t4,
                  $tz: t.t5,
                  $url: t.t6,
                  $ref: t.t7,
                  $os: t.t8,
                  $ov: t.t9,
                  $wv: t.t10,
                  $mnet: t.t11,
                  $net: t.t12,
                  $vn: t.t13,
                  $referrer_domain: t.t14,
                  $wxeid: t.t15
                }, (u = {
                  dt: "evt",
                  pr: t.t16
                }).pr = w.merge(u.pr, w.encode(this.config.superProperty)), t.abrupt("return", u);
              case 25:
              case "end":
                return t.stop()
            }
          }), r, this)
        })))
      }
    }, {
      key: "environmentInfo",
      value: function() {
        var t = new Date,
          e = {
            dt: "pl",
            pr: {
              $rs: "".concat(y.windowWidth(), "x").concat(y.windowHeight()),
              $tz: w.getTimezone(t),
              $ct: t.getTime(),
              $cuid: this.storage.allData.cuid,
              $sid: this.storage.allData.sid,
              $dv: void 0,
              $br: void 0
            }
          };
        if (wx.getSystemInfoSync) {
          var r = wx.getSystemInfoSync();
          e.pr.$dv = r.model, e.pr.$br = r.brand
        } else delete e.pr.$dv, delete e.pr.$br;
        this.send(e)
      }
    }, {
      key: "sessionEnd",
      value: function(t) {
        var e = new Date,
          r = t.update - t.sid,
          n = {
            dt: "se",
            pr: {
              $ct: t.update,
              $cn: this.cn,
              $tz: w.getTimezone(e),
              $dru: r,
              $sid: t.sid,
              $cuid: t.cuid,
              $referrer_domain: this.referrerDomain
            }
          };
        this.send(n)
      }
    }, {
      key: "sessionStart",
      value: function() {
        return v(this, void 0, void 0, t().mark((function e() {
          var r, n, u, i, o;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return r = new Date, n = this.storage.allData, u = n.sid, i = n.cuid, t.t0 = u, t.t1 = u, t.t2 = i, t.t3 = this.cn, t.t4 = w.getTimezone(r), t.t5 = this.currentPage.url, t.t6 = this.prevPage.url, t.t7 = y.os(), t.t8 = y.ov(), t.t9 = y.version(), t.next = 14, y.mnet();
              case 14:
                return t.t10 = t.sent, t.next = 17, y.net();
              case 17:
                t.t11 = t.sent, t.t12 = this.config.vn, t.t13 = this.referrerDomain, t.t14 = this.config.appId, t.t15 = {
                  $ct: t.t0,
                  $sid: t.t1,
                  $cuid: t.t2,
                  $cn: t.t3,
                  $tz: t.t4,
                  $url: t.t5,
                  $ref: t.t6,
                  $os: t.t7,
                  $ov: t.t8,
                  $wv: t.t9,
                  $mnet: t.t10,
                  $net: t.t11,
                  $vn: t.t12,
                  $referrer_domain: t.t13,
                  $wxeid: t.t14
                }, o = {
                  dt: "ss",
                  pr: t.t15
                }, this.config.utm && !w.isEmpty(this.config.utm) || !this.utmCatch || this.storage.set("utm", this.utmCatch), this.send(o), this.environmentInfo();
              case 26:
              case "end":
                return t.stop()
            }
          }), e, this)
        })))
      }
    }, {
      key: "updateSession",
      value: function(t) {
        var e = this.storage.allData,
          r = Date.now();
        if (e.sid && e.update)
          if (r - e.update > this.config.timeout) {
            var n = w.clone(e);
            this.storage.set("sid", r), this.storage.set("update", r), this.sessionEnd(n), this.sessionStart()
          } else this.storage.set("update", r);
        else this.storage.set("sid", r), this.storage.set("update", r), this.sessionStart()
      }
    }, {
      key: "click",
      value: function(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          $element_content: "",
          $element_selector: "",
          $element_style: []
        };
        return v(this, void 0, void 0, t().mark((function e() {
          var n;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (this.config.click) {
                  t.next = 2;
                  break
                }
                return t.abrupt("return");
              case 2:
                return this.updateSession("click"), t.next = 5, this.trackBaseData("click");
              case 5:
                return (n = t.sent).dt = "abp", n.pr = w.merge(n.pr, {
                  $page_url: this.currentPage.url,
                  $page_title: this.currentPage.title
                }, r), t.next = 10, this.send(n);
              case 10:
              case "end":
                return t.stop()
            }
          }), e, this)
        })))
      }
    }, {
      key: "pv",
      value: function(e) {
        return v(this, void 0, void 0, t().mark((function r() {
          var n, u;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (this.config.pv) {
                  t.next = 2;
                  break
                }
                return t.abrupt("return");
              case 2:
                return this.updateSession("pv"), t.next = 5, this.trackBaseData("pv");
              case 5:
                return (n = t.sent).dt = "abp", u = {
                  $page_title: this.currentPage.title
                }, n.pr = w.merge(n.pr, u, e || {}), t.next = 11, this.send(n);
              case 11:
              case "end":
                return t.stop()
            }
          }), r, this)
        })))
      }
    }, {
      key: "duration",
      value: function() {
        return v(this, void 0, void 0, t().mark((function e() {
          var r, n;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (this.config.duration) {
                  t.next = 2;
                  break
                }
                return t.abrupt("return");
              case 2:
                return this.updateSession("duration"), w.isFunction(this.config.beforeDuration) && this.config.beforeDuration(), r = this.currentPage.time - this.prevPage.time, t.next = 7, this.trackBaseData("dr");
              case 7:
                return (n = t.sent).dt = "abp", n.pr = w.merge(n.pr, {
                  $dr: r,
                  $url: this.prevPage.url,
                  $title: this.prevPage.title
                }), t.next = 12, this.send(n);
              case 12:
                w.isFunction(this.config.afterDuration) && this.config.afterDuration();
              case 13:
              case "end":
                return t.stop()
            }
          }), e, this)
        })))
      }
    }, {
      key: "track",
      value: function(e, r) {
        return v(this, void 0, void 0, t().mark((function n() {
          var u;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return this.updateSession("track"), t.next = 3, this.trackBaseData(e);
              case 3:
                return (u = t.sent).pr = w.merge(u.pr, w.encode(r)), t.next = 7, this.send(u);
              case 7:
              case "end":
                return t.stop()
            }
          }), n, this)
        })))
      }
    }, {
      key: "identify",
      value: function(e, r) {
        return v(this, void 0, void 0, t().mark((function n() {
          var u, i;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return this.storage.set("cuid", e), this.updateSession("identify"), u = new Date, (i = {
                  dt: "usr",
                  pr: {
                    $ct: u.getTime(),
                    $tz: w.getTimezone(u),
                    $cuid: e,
                    $sid: this.storage.allData.sid,
                    $url: this.currentPage.url
                  }
                }).pr = w.merge(i.pr, w.encode(r)), t.next = 7, this.trackBaseData("usr");
              case 7:
                return t.next = 9, this.send(i);
              case 9:
              case "end":
                return t.stop()
            }
          }), n, this)
        })))
      }
    }, {
      key: "setPushClient",
      value: function(e, r) {
        return v(this, void 0, void 0, t().mark((function n() {
          var u, i;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return u = new Date, i = {
                  dt: "um",
                  pr: {
                    $ct: u.getTime(),
                    $tz: w.getTimezone(u),
                    $push_ch: r || "getui",
                    $push_id: e
                  }
                }, t.next = 4, this.trackBaseData("usr");
              case 4:
                return t.next = 6, this.send(i);
              case 6:
              case "end":
                return t.stop()
            }
          }), n, this)
        })))
      }
    }, {
      key: "trackCount",
      value: function(t, e) {
        var r = this;
        0 === this.count && (this.countStartTime = Date.now(), this.previousCountEvent.name = t, this.previousCountEvent.props = w.clone(e)), this.previousCountEvent.name === t && w.isEqual(this.previousCountEvent.props, e) || (this.sendCountEvent(this.previousCountEvent.name, this.previousCountEvent.props, !1), this.previousCountEvent.name = t, this.previousCountEvent.props = w.clone(e), this.countStartTime = Date.now(), this.count = 0), this.count += 1, this.countTimer && clearTimeout(this.countTimer), this.countTimer = setTimeout((function() {
          r.sendCountEvent(t, e, !0)
        }), this.config.countDuration)
      }
    }, {
      key: "sendCountEvent",
      value: function(e, r, n) {
        return v(this, void 0, void 0, t().mark((function u() {
          var i, o, a, s;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return this.updateSession("track count"), i = Date.now() - this.countStartTime, n && (i -= this.config.countDuration), o = this.count, this.count = n ? 0 : 1, t.next = 7, this.trackBaseData(e);
              case 7:
                return a = t.sent, s = {}, w.isObject(r) && (s = w.clone(r)), a.pr = w.merge(a.pr, w.encode(s), w.encode({
                  count: o,
                  countTime: i
                })), t.next = 13, this.send(a);
              case 13:
              case "end":
                return t.stop()
            }
          }), u, this)
        })))
      }
    }, {
      key: "trackRevenue",
      value: function(e) {
        return v(this, void 0, void 0, t().mark((function r() {
          var n, u, i, o, a, s, c, m;
          return t().wrap((function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return i = function(t, e) {
                  var r = 0;
                  try {
                    t.toString().split(".")[1] && (r += t.toString().split(".")[1].length)
                  } catch (t) {
                    console.error(t)
                  }
                  try {
                    e.toString().split(".")[1] && (r += e.toString().split(".")[1].length)
                  } catch (t) {
                    console.error(t)
                  }
                  return Number(t.toString().replace(".", "")) * Number(e.toString().replace(".", "")) / Math.pow(10, r)
                }, this.updateSession("track revenue"), r.next = 4, this.trackBaseData("revenue");
              case 4:
                (n = r.sent).dt = "abp", (u = w.merge({
                  price: 0,
                  total: 0,
                  productID: null,
                  productQuantity: 0,
                  revenueType: null
                }, e)).total = i(u.price, u.productQuantity), o = ["productID", "revenueType"], a = ["price", "total", "productQuantity"], s = {}, r.t0 = t().keys(u);
              case 12:
                if ((r.t1 = r.t0()).done) {
                  r.next = 21;
                  break
                }
                if (c = r.t1.value, -1 !== o.indexOf(c) || -1 !== a.indexOf(c)) {
                  r.next = 16;
                  break
                }
                return r.abrupt("continue", 12);
              case 16:
                m = u[c], a.indexOf(c) > -1 && ((m = Number(m)) || (m = 0)), s["$" + c] = m, r.next = 12;
                break;
              case 21:
                return n.pr = w.merge(n.pr, s), r.next = 24, this.send(n);
              case 24:
              case "end":
                return r.stop()
            }
          }), r, this)
        })))
      }
    }, {
      key: "setUtm",
      value: function(e) {
        return v(this, void 0, void 0, t().mark((function r() {
          var n;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                null !== (n = w.filterUtm(e)) && (this.storage.set("utm", n), this.updateSession("setUtm"));
              case 2:
              case "end":
                return t.stop()
            }
          }), r, this)
        })))
      }
    }, {
      key: "setSuperProperty",
      value: function(t) {
        w.isObject(t) && (this.config.superProperty = t)
      }
    }, {
      key: "extendSuperPropertys",
      value: function(t) {
        w.isObject(t) && (this.config.superProperty = w.merge(this.config.superProperty, t))
      }
    }, {
      key: "removeSuperProperty",
      value: function(t) {
        var e, r = function(t, e) {
          var r;
          if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (Array.isArray(t) || (r = h(t))) {
              r && (t = r);
              var n = 0,
                u = function() {};
              return {
                s: u,
                n: function() {
                  return n >= t.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: t[n++]
                  }
                },
                e: function(t) {
                  throw t
                },
                f: u
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var i, o = !0,
            a = !1;
          return {
            s: function() {
              r = t[Symbol.iterator]()
            },
            n: function() {
              var t = r.next();
              return o = t.done, t
            },
            e: function(t) {
              a = !0, i = t
            },
            f: function() {
              try {
                o || null == r.return || r.return()
              } finally {
                if (a) throw i
              }
            }
          }
        }(t);
        try {
          for (r.s(); !(e = r.n()).done;) {
            var n = e.value;
            delete this.config.superProperty[n]
          }
        } catch (t) {
          r.e(t)
        } finally {
          r.f()
        }
      }
    }, {
      key: "getSuperProperty",
      value: function() {
        return this.config.superProperty
      }
    }, {
      key: "flush",
      value: function() {
        this.request.clear()
      }
    }]), e
  }();
  d([x], S.prototype, "environmentInfo", null), d([x], S.prototype, "sessionEnd", null), d([x], S.prototype, "sessionStart", null), d([x], S.prototype, "updateSession", null), d([x], S.prototype, "click", null), d([x], S.prototype, "pv", null), d([x], S.prototype, "duration", null), d([x], S.prototype, "track", null), d([x], S.prototype, "identify", null), d([x], S.prototype, "setPushClient", null), d([x], S.prototype, "trackCount", null), d([x], S.prototype, "trackRevenue", null), d([x], S.prototype, "setUtm", null);
  var P = ["onLaunch", "onShow", "onHide", "onError", "onPageNotFound", "onUnhandledRejection", "onThemeChange", "onShareAppMessage", "onLogin"],
    O = ["onLoad", "onShow", "onReady", "onHide", "onUnload", "onShareAppMessage", "onReachBottom", "onPageScroll", "onPullDownRefresh", "onTabItemTap", "onInit", "onShareTimeline", "onAddToFavorites", "onResize", "onTitleClick", "onOptionMenuClick", "onPullIntercept", "onURLQueryChange"],
    $ = function(t) {
      return w.wxGetTitle(t)
    },
    D = function(t, e, r) {
      return new Promise((function(n, u) {
        var i;
        wx.request((o(i = {
          url: t,
          data: e,
          method: "POST",
          timeout: null == r ? void 0 : r.timeout
        }, "header", {
          "content-type": "application/x-www-form-urlencoded"
        }), o(i, "dataType", "json"), o(i, "responseType", "arraybuffer"), o(i, "success", (function(t) {
          n(t)
        })), o(i, "fail", (function(t) {
          u(t)
        })), i))
      }))
    },
    T = {
      did: null,
      getDid: function() {
        return new Promise((function(t, e) {
          wx.getStorage({
            key: "zg-did",
            success: function(e) {
              t(e.data || ""), wx.removeStorage({
                key: "zg-did"
              })
            },
            fail: function(e) {
              t("")
            }
          })
        }))
      },
      get: function() {
        return new Promise((function(t, e) {
          wx.getStorage({
            key: "zg",
            success: function(e) {
              t(e.data || {})
            },
            fail: function(e) {
              t({})
            }
          })
        }))
      },
      set: function(t, e) {
        return new Promise((function(r, n) {
          wx.setStorage({
            key: t,
            data: e,
            success: r,
            fail: n
          })
        }))
      }
    },
    j = !1,
    E = wx.getSystemInfoSync(),
    C = E.system.split(/\s/),
    A = {
      os: C[0],
      ov: C[1],
      version: E.version,
      windowHeight: E.windowHeight,
      windowWidth: E.windowWidth,
      net: 0,
      mnet: 0
    };

  function z(t) {
    var e = t.toLowerCase();
    "wifi" === e ? (A.net = 1, A.mnet = 0) : (A.net = 0, A.mnet = {
      "2g": 1,
      "3g": 3,
      "4g": 13
    } [e] || 0)
  }

  function L(t) {
    return new Promise((function(e, r) {
      if (j) return e(A[t]);
      wx.getNetworkType({
        success: function(r) {
          j = !0, z(r.networkType), e(A[t])
        }
      })
    }))
  }
  wx.onNetworkStatusChange((function(t) {
    z(t.networkType)
  }));
  var R, I, q = {
      os: function() {
        return A.os
      },
      ov: function() {
        return A.ov
      },
      version: function() {
        return A.version
      },
      net: function() {
        return L("net")
      },
      mnet: function() {
        return L("mnet")
      },
      windowWidth: function() {
        return A.windowWidth
      },
      windowHeight: function() {
        return A.windowHeight
      }
    },
    U = App,
    F = Page,
    N = Component,
    M = ["eid", "ct", "tz", "cuid", "cn", "sid", "url", "os", "ov", "wv", "mnet", "referrer_domain", "net", "vn", "wxeid", "uid", "share_id", "share_title", "share_level", "title", "path"];

  function B(t, e, r) {
    if (t[r] && w.isFunction(t[r])) {
      var n = t[r];
      t[r] = function() {
        n.apply(this, arguments), e[r].apply(this, arguments)
      }
    } else t[r] = function() {
      e[r].apply(this, arguments)
    }
  }

  function H(t, e, r) {
    var n = t[e];
    t[e] = function() {
      var t = arguments[0];
      if (R === t || t && R && R.timeStamp === t.timeStamp) return n.apply(this, arguments);
      if (R = t, t) {
        var e = t.type;
        "tap" === e && r.click(t)
      }
      return n.apply(this, arguments)
    }
  }
  var W = function(e) {
    a(u, e);
    var r = m(u);

    function u(t) {
      var e;
      return n(this, u), (e = r.call(this, D, T, q)).openData = {
        path: "",
        props: {}
      }, e.shared = !1, e.semiAutoTrackEventCatch = {}, e.isShareOperation = !1, I = t, e.initLifeCycleHook(), e
    }
    return i(u, [{
      key: "initLifeCycleHook",
      value: function() {
        var t, e = this,
          r = (t = e, {
            App: {
              onShow: function(e) {
                t.sceneToUtm(e), t.openOptions = e, t.updateSession("appOnShow")
              },
              onHide: function() {
                t.flush(), t.config.duration && !t.isShareOperation && (t.pageReady = !0, t.currentPage.time = Date.now(), t.duration().then((function() {
                  t.pageReady = !1, t.prevPage = {
                    queryObj: {},
                    query: "",
                    route: "",
                    time: 0,
                    url: "",
                    title: ""
                  }
                })))
              }
            },
            Page: {
              onLoad: function(e) {
                t.currentPage.query = w.parseQuery(e), t.currentPage.queryObj = e
              },
              onShow: function() {
                var e = getCurrentPages(),
                  r = e[e.length - 1];
                t.currentPage.route = r.__route__ || r.route, t.currentPage.time = Date.now(), t.currentPage.url = "".concat(t.currentPage.route);
                var n = $;
                if (t.currentPage.title = "function" == typeof n ? n(r) : "", t.currentPage.query && (t.currentPage.url += "?".concat(t.currentPage.query)), t.pageReady = !0, t.freeBuffer(), t.currentPage.url !== t.prevPage.url) {
                  "" !== t.prevPage.url && t.duration();
                  try {
                    t.trackOpenShare(t.openOptions)
                  } catch (e) {
                    console.warn(e, "".concat(t.referrerDomain, " ", "zhuge", " sdk trackOpenShare error"))
                  }
                  t.pv()
                }
                t.startObserveMarkElement(r), t.openOptions = null, t.isShareOperation = !1
              },
              onHide: function() {
                t.semiAutoTrackEventCatch = {}, t.prevPage = w.clone(t.currentPage), t.pageReady = !1, t.flush()
              },
              onUnload: function() {
                t.semiAutoTrackEventCatch = {}, t.prevPage = w.clone(t.currentPage), t.pageReady = !1, t.flush()
              }
            }
          });
        this.lifecycle = r;
        var n = function(t) {
          for (var n in r.App) B(t, r.App, n);
          for (var u in t) !P.includes(u) && w.isFunction(t[u]) && H(t, u, e);
          return U(t)
        };
        for (var u in App) n[u] = App[u];
        App = n;
        var i = function(t) {
          for (var n in r.Page) B(t, r.Page, n);
          for (var u in t) !O.includes(u) && w.isFunction(t[u]) && "onShareAppMessage" !== u && H(t, u, e);
          var i = t.onShareAppMessage;
          return w.isFunction(i) && (t.onShareAppMessage = e.onShareAppMessage(i)), F(t)
        };
        for (var o in Page) i[o] = Page[o];
        Page = i, Component = function(t) {
          if (void 0 !== t.methods)
            for (var r in t.methods) H(t.methods, r, e);
          return N(t)
        }, global && global.mpvue && (global.App = App, global.Page = Page, global.Component = Component), App.zhuge = e
      }
    }, {
      key: "load",
      value: function(t, e) {
        return l(s(u.prototype), "load", this).call(this, t, e)
      }
    }, {
      key: "pv",
      value: function(e) {
        var r = this,
          n = Object.create(null, {
            pv: {
              get: function() {
                return l(s(u.prototype), "pv", r)
              }
            }
          });
        return v(this, void 0, void 0, t().mark((function e() {
          var r, u;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return r = {}, u = w.getCurrentPage(), this.config.forwardShare && this.openOptions && (r.$share_open_type = 1008 === this.openOptions.scene ? "群聊" : "聊天", this.openOptions.query && this.openOptions.query.zg_share_level && (r.$share_level = Number(this.openOptions.query.zg_share_level)), u.data && u.data.zg_share_data && (r = w.merge(r, w.encode(u.data.zg_share_data)))), t.next = 5, n.pv.call(this, r);
              case 5:
              case "end":
                return t.stop()
            }
          }), e, this)
        })))
      }
    }, {
      key: "click",
      value: function(e, r) {
        var n = this,
          i = Object.create(null, {
            click: {
              get: function() {
                return l(s(u.prototype), "click", n)
              }
            }
          });
        return v(this, void 0, void 0, t().mark((function n() {
          var u, o, a, s;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return u = e.target, o = u.dataset.title, a = u.dataset.index, [], s = "alipay-miniprogram" === this.referrerDomain ? ["", "", e.detail.pageX, e.detail.pageY] : ["", "", e.detail.x, e.detail.y], t.next = 7, i.click.call(this, e, w.merge({
                  $element_content: o || "",
                  $element_selector: a || "",
                  $element_style: s
                }, r || {}));
              case 7:
              case "end":
                return t.stop()
            }
          }), n, this)
        })))
      }
    }, {
      key: "sceneToUtm",
      value: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = w.getUtmByQuery(t.query);
        if (this.config.parseScene && t.scene && I) {
          var r = t.scene;
          this.cn = r + "";
          var n = I[r],
            u = {},
            i = null,
            o = I.isShare(r);
          if (o && t.referrerInfo && (i = t.referrerInfo.appId), n) {
            u = {
              utm_source: n.utm_source,
              utm_medium: n.utm_medium,
              utm_campaign: i
            };
            var a = t.query || {};
            I.isCartShare(r) && a.zg_uid && a.zg_share_id && (u.utm_term = a.zg_uid, u.utm_content = a.zg_share_id)
          }
          e = w.merge(u, e)
        }
        this.utmCatch = e, "fresh" === this.config.utmMode && w.isEmpty(this.config.utm) && this.storage.set("utm", e)
      }
    }, {
      key: "trackOpenShare",
      value: function(e) {
        return v(this, void 0, void 0, t().mark((function r() {
          var n, u, i, o, a, s, c, m, l, f, h;
          return t().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (e && this.config.forwardShare) {
                  t.next = 2;
                  break
                }
                return t.abrupt("return");
              case 2:
                if (!this.shared) {
                  t.next = 5;
                  break
                }
                return this.shared = !1, t.abrupt("return");
              case 5:
                if (n = e.query || {}, u = this.currentPage.route, !(I.isCartShare(e.scene) && n.zg_uid && n.zg_share_id)) {
                  t.next = 24;
                  break
                }
                for (a in i = {
                    $uid: n.zg_uid,
                    $share_id: n.zg_share_id,
                    $title: this.currentPage.title,
                    $path: u,
                    $share_open_type: 1008 === e.scene ? "群聊" : "聊天",
                    $share_level: Number(n.zg_share_level)
                  }, this.shareId = n.zg_share_id, this.shareLevel = Number(n.zg_share_level), o = {}, n) s = a.replace(/^zg_/, ""), -1 === M.indexOf(s) && /^zg_/.test(a) && (o[s] = n[a]);
                if (c = this.config.shareToUtm, w.isObject(c) && !w.isEmpty(c)) {
                  for (l in m = {}, c) null !== o[l] && void 0 !== o[l] && (f = c[l], m[f] = o[l]);
                  w.isEmpty(m) || (m.utm_campaign || (m.utm_campaign = "分享打开"), this.setUtm(m))
                }
                return this.openData = {
                  path: u,
                  props: o
                }, i = w.merge(i, w.encode(o)), t.next = 19, this.trackBaseData("wxsopen");
              case 19:
                return (h = t.sent).dt = "abp", h.pr = w.merge(h.pr, i), t.next = 24, this.send(h);
              case 24:
              case "end":
                return t.stop()
            }
          }), r, this)
        })))
      }
    }, {
      key: "onShareAppMessage",
      value: function(t) {
        var e = this;
        return function() {
          e.isShareOperation = !0;
          var r = t.apply(this, arguments) || {};
          if (!e.config.forwardShare) return r;
          r.path = r.path || e.currentPage.url;
          var n = r.title || e.currentPage.title,
            u = r.path.split("?")[0],
            i = this.data.zg_share_data,
            o = (new Date).getTime(),
            a = 1;
          !this.data.newShare && e.openData && e.openData.path === u && w.isEqual(i || {}, e.openData.props) && (o = e.shareId, a = e.shareLevel + 1);
          var s = {
              share_id: o,
              uid: e.storage.allData.cuid || e.storage.allData.did,
              share_level: a
            },
            c = {
              $share_title: n,
              $title: e.currentPage.title || "",
              $path: u
            },
            m = {};
          for (var l in s) c["$".concat(l)] = m["zg_".concat(l)] = s[l];
          for (var f in i) - 1 === M.indexOf(f) && (c["_".concat(f)] = m["zg_".concat(f)] = i[f]);
          return r.path = w.addUrlParam(r.path, m), e.trackBaseData("wxshare").then((function(t) {
            t.dt = "abp", t.pr = w.merge(t.pr, c), e.request.send(t)
          })), e.shared = !0, r
        }
      }
    }, {
      key: "startObserveMarkElement",
      value: function(t) {
        var e = this;
        this.config.exposure && (this.elementObserver && this.elementObserver.disconnect(), t.isComponent ? this.elementObserver = t.createIntersectionObserver({
          observeAll: !0
        }) : this.elementObserver = wx.createIntersectionObserver(t, {
          observeAll: !0
        }), this.elementObserver.relativeToViewport().observe(".zhuge-expo-track", (function(t) {
          if (t.intersectionRatio > 0) {
            var r, n = e.getEventDataFromDataset(t.dataset);
            (r = l(s(u.prototype), "track", e)).call.apply(r, [e].concat(f(n)))
          }
        })))
      }
    }, {
      key: "getEventDataFromDataset",
      value: function(t) {
        var e = {},
          r = "";
        for (var n in t) n.startsWith("expo") && ("expoName" === n ? r = t[n] : e[n.replace(/^expo(.*)/, (function(t, e, r, n) {
          return e.replace(e[0], e[0].toLocaleLowerCase())
        }))] = t[n]);
        return [r, e]
      }
    }]), u
  }(S);
  d([x], W.prototype, "sceneToUtm", null), d([x], W.prototype, "trackOpenShare", null);
  var G = {
      1e3: {
        utm_source: "其他",
        utm_medium: "其他"
      },
      1001: {
        utm_source: "微信主程序",
        utm_medium: "发现栏小程序主入口"
      },
      1005: {
        utm_source: "搜索",
        utm_medium: "顶部搜索框的搜索结果页"
      },
      1006: {
        utm_source: "搜索",
        utm_medium: "发现栏小程序主入口搜索框的搜索结果页"
      },
      1007: {
        utm_source: "分享",
        utm_medium: "单人聊天会话中的小程序消息卡片"
      },
      1008: {
        utm_source: "分享",
        utm_medium: "群聊会话中的小程序消息卡片"
      },
      1010: {
        utm_source: "收藏",
        utm_medium: "收藏夹"
      },
      1011: {
        utm_source: "扫码",
        utm_medium: "扫描二维码"
      },
      1012: {
        utm_source: "扫码",
        utm_medium: "长按图片识别二维码"
      },
      1013: {
        utm_source: "扫码",
        utm_medium: "手机相册选取二维码"
      },
      1014: {
        utm_source: "小程序模板消息",
        utm_medium: "小程序模板消息"
      },
      1017: {
        utm_source: "体验版",
        utm_medium: "前往体验版的入口页"
      },
      1019: {
        utm_source: "微信支付",
        utm_medium: "微信钱包"
      },
      1023: {
        utm_source: "桌面图标",
        utm_medium: "安卓系统桌面图标"
      },
      1024: {
        utm_source: "微信主程序",
        utm_medium: "小程序 profile 页"
      },
      1025: {
        utm_source: "扫码",
        utm_medium: "扫描一维码"
      },
      1026: {
        utm_source: "微信主程序",
        utm_medium: "附近小程序列表"
      },
      1027: {
        utm_source: "搜索",
        utm_medium: "顶部搜索框搜索结果页“使用过的小程序”列表"
      },
      1028: {
        utm_source: "微信卡券",
        utm_medium: "我的卡包"
      },
      1029: {
        utm_source: "微信卡券",
        utm_medium: "卡券详情页"
      },
      1030: {
        utm_source: "测试",
        utm_medium: "自动化测试下打开小程序"
      },
      1031: {
        utm_source: "扫码",
        utm_medium: "长按图片识别一维码"
      },
      1032: {
        utm_source: "扫码",
        utm_medium: "手机相册选取一维码"
      },
      1034: {
        utm_source: "微信支付",
        utm_medium: "微信支付完成页"
      },
      1035: {
        utm_source: "公众号",
        utm_medium: "公众号自定义菜单"
      },
      1036: {
        utm_source: "分享",
        utm_medium: "App分享消息卡片"
      },
      1037: {
        utm_source: "小程序",
        utm_medium: "小程序打开小程序"
      },
      1038: {
        utm_source: "小程序",
        utm_medium: "从另一个小程序返回"
      },
      1039: {
        utm_source: "摇电视",
        utm_medium: "摇电视"
      },
      1042: {
        utm_source: "搜索",
        utm_medium: "添加好友搜索框的搜索结果页"
      },
      1043: {
        utm_source: "公众号",
        utm_medium: "公众号模板消息"
      },
      1044: {
        utm_source: "分享",
        utm_medium: "带shareTicket的小程序消息卡片（详情）"
      },
      1045: {
        utm_source: "广告",
        utm_medium: "朋友圈广告"
      },
      1046: {
        utm_source: "广告",
        utm_medium: "朋友圈广告详情页"
      },
      1047: {
        utm_source: "扫码",
        utm_medium: "扫描小程序码"
      },
      1048: {
        utm_source: "扫码",
        utm_medium: "长按图片识别小程序码"
      },
      1049: {
        utm_source: "扫码",
        utm_medium: "手机相册选取小程序码"
      },
      1052: {
        utm_source: "微信卡券",
        utm_medium: "卡券的适用门店列表"
      },
      1053: {
        utm_source: "搜索",
        utm_medium: "搜一搜的结果页"
      },
      1056: {
        utm_source: "音乐播放器菜单",
        utm_medium: "音乐播放器菜单"
      },
      1057: {
        utm_source: "微信支付",
        utm_medium: "钱包中的银行卡详情页"
      },
      1058: {
        utm_source: "公众号",
        utm_medium: "公众号文章"
      },
      1059: {
        utm_source: "体验版",
        utm_medium: "体验版小程序绑定邀请页"
      },
      1060: {
        utm_source: "支付完成",
        utm_medium: "微信支付完成页"
      },
      1064: {
        utm_source: "微信WIFI",
        utm_medium: "微信连Wi-Fi状态栏"
      },
      1065: {
        utm_source: "scheme 详情",
        utm_medium: "URL scheme 详情"
      },
      1067: {
        utm_source: "广告",
        utm_medium: "公众号文章广告"
      },
      1069: {
        utm_source: "移动应用",
        utm_medium: "移动应用"
      },
      1071: {
        utm_source: "微信支付",
        utm_medium: "钱包中的银行卡列表页"
      },
      1072: {
        utm_source: "微信支付",
        utm_medium: "二维码收款页面"
      },
      1073: {
        utm_source: "客服消息",
        utm_medium: "客服消息列表下发的小程序消息卡片"
      },
      1074: {
        utm_source: "公众号会话",
        utm_medium: "公众号会话下发的小程序消息卡片"
      },
      1077: {
        utm_source: "摇周边",
        utm_medium: "摇周边"
      },
      1078: {
        utm_source: "微信WIFI",
        utm_medium: "连Wi-Fi成功页"
      },
      1079: {
        utm_source: "微信游戏中心",
        utm_medium: "微信游戏中心"
      },
      1081: {
        utm_source: "客服消息",
        utm_medium: "客服消息下发的文字链"
      },
      1082: {
        utm_source: "公众号",
        utm_medium: "公众号会话下发的文字链"
      },
      1084: {
        utm_source: "广告",
        utm_medium: "朋友圈广告原生页"
      },
      1088: {
        utm_source: "打开小程序",
        utm_medium: "会话中查看系统消息，打开小程序"
      },
      1089: {
        utm_source: "微信主程序",
        utm_medium: "微信聊天主界面下拉"
      },
      1090: {
        utm_source: "小程序",
        utm_medium: "长按小程序右上角菜单唤出最近使用历史"
      },
      1091: {
        utm_source: "公众号",
        utm_medium: "公众号文章商品卡片"
      },
      1092: {
        utm_source: "微信城市服务",
        utm_medium: "城市服务入口"
      },
      1095: {
        utm_source: "广告",
        utm_medium: "小程序广告组件"
      },
      1096: {
        utm_source: "分享",
        utm_medium: "聊天记录"
      },
      1097: {
        utm_source: "微信支付",
        utm_medium: "微信支付签约页"
      },
      1099: {
        utm_source: "小程序",
        utm_medium: "页面内嵌插件"
      },
      1100: {
        utm_source: "打开小程序",
        utm_medium: "红包封面详情页打开小程序"
      },
      1101: {
        utm_source: "调试",
        utm_medium: "远程调试热更新（开发者工具中，预览 -> 自动预览 -> 编译并预览）"
      },
      1102: {
        utm_source: "公众号",
        utm_medium: "公众号profile页服务预览"
      },
      1106: {
        utm_source: "打开小程序",
        utm_medium: "聊天主界面下拉，从顶部搜索结果页，打开小程序"
      },
      1107: {
        utm_source: "打开小程序",
        utm_medium: "订阅消息，打开小程序"
      },
      1113: {
        utm_source: "打开小程序",
        utm_medium: "安卓手机负一屏，打开小程序（三星）"
      },
      1114: {
        utm_source: "打开小程序",
        utm_medium: "安卓手机侧边栏，打开小程序（三星）"
      },
      1119: {
        utm_source: "打开小程序",
        utm_medium: "【企业微信】工作台内打开小程序"
      },
      1120: {
        utm_source: "打开小程序",
        utm_medium: "【企业微信】个人资料页内打开小程序"
      },
      1121: {
        utm_source: "打开小程序",
        utm_medium: "【企业微信】聊天加号附件框内打开小程序"
      },
      1124: {
        utm_source: "打开小程序",
        utm_medium: "扫“一物一码”打开小程序"
      },
      1125: {
        utm_source: "图片识别",
        utm_medium: "长按图片识别“一物一码”"
      },
      1126: {
        utm_source: "扫描手机相册",
        utm_medium: "扫描手机相册中选取的“一物一码”"
      },
      1129: {
        utm_source: "爬虫",
        utm_medium: "微信爬虫"
      },
      1131: {
        utm_source: "浮窗",
        utm_medium: "浮窗"
      },
      1133: {
        utm_source: "打开小程序详情",
        utm_medium: "硬件设备打开小程序详情"
      },
      1135: {
        utm_source: "打开小程序",
        utm_medium: "小程序 profile 页相关小程序列表，打开小程序"
      },
      1144: {
        utm_source: "视频贴片",
        utm_medium: "公众号文章 - 视频贴片"
      },
      1145: {
        utm_source: "发现小程序",
        utm_medium: "发现栏 - 发现小程序"
      },
      1146: {
        utm_source: "打开出行类小程序",
        utm_medium: "地理位置信息打开出行类小程序"
      },
      1148: {
        utm_source: "打开小程序",
        utm_medium: "卡包 - 交通卡，打开小程序"
      },
      1150: {
        utm_source: "扫一扫",
        utm_medium: "扫一扫商品条码结果页打开小程序"
      },
      1151: {
        utm_source: "我的订单",
        utm_medium: "发现栏 - 我的订单"
      },
      1152: {
        utm_source: "打开小程序",
        utm_medium: "订阅号视频打开小程序"
      },
      1153: {
        utm_source: "打开小程序",
        utm_medium: "“识物”结果页打开小程序"
      },
      1154: {
        utm_source: "打开“单页模式”",
        utm_medium: "朋友圈内打开“单页模式”"
      },
      1155: {
        utm_source: "打开小程序",
        utm_medium: "“单页模式”打开小程序"
      },
      1157: {
        utm_source: "打开小程序",
        utm_medium: "服务号会话页打开小程序"
      },
      1158: {
        utm_source: "打开小程序",
        utm_medium: "群工具打开小程序"
      },
      1160: {
        utm_source: "群待办",
        utm_medium: "群待办"
      },
      1167: {
        utm_source: "打开小程序详情",
        utm_medium: "H5 通过开放标签打开小程序详情"
      },
      1168: {
        utm_source: "运行小程序",
        utm_medium: "移动应用直接运行小程序"
      },
      1169: {
        utm_source: "小程序入口",
        utm_medium: "发现栏小程序主入口，各个生活服务入口"
      },
      1171: {
        utm_source: "微信运动记录",
        utm_medium: "微信运动记录"
      },
      1173: {
        utm_source: "打开小程序详情",
        utm_medium: "聊天素材用小程序打开详情"
      },
      1175: {
        utm_source: "商店入口",
        utm_medium: "视频号主页商店入口"
      },
      1176: {
        utm_source: "打开小程序",
        utm_medium: "视频号直播间主播打开小程序"
      },
      1177: {
        utm_source: "直播商品",
        utm_medium: "视频号直播商品"
      },
      1178: {
        utm_source: "打开小程序",
        utm_medium: "在电脑打开手机上打开的小程序"
      },
      1179: {
        utm_source: "打开小程序",
        utm_medium: "#话题页打开小程序"
      },
      1181: {
        utm_source: "打开 PC 小程序",
        utm_medium: "网站应用打开 PC 小程序"
      },
      1183: {
        utm_source: "搜索",
        utm_medium: "PC微信 - 小程序面板 - 发现小程序 - 搜索"
      },
      1184: {
        utm_source: "打开小程序",
        utm_medium: "视频号链接打开小程序"
      },
      1185: {
        utm_source: "群公告",
        utm_medium: "群公告"
      },
      1186: {
        utm_source: "收藏",
        utm_medium: "收藏 - 笔记"
      },
      1187: {
        utm_source: "浮窗",
        utm_medium: "浮窗"
      },
      1189: {
        utm_source: "表情雨广告",
        utm_medium: "表情雨广告"
      },
      1191: {
        utm_source: "视频号活动",
        utm_medium: "视频号活动"
      },
      1192: {
        utm_source: "企业微信联系人 profile 页",
        utm_medium: "企业微信联系人 profile 页"
      },
      1193: {
        utm_source: "打开小程序",
        utm_medium: "视频号主页服务菜单打开小程序"
      },
      1194: {
        utm_source: "URL Link 详情",
        utm_medium: "URL Link 详情"
      },
      1195: {
        utm_source: "主页商品tab",
        utm_medium: "视频号主页商品tab"
      },
      1196: {
        utm_source: "打开小程序",
        utm_medium: "个人状态打开小程序"
      },
      1197: {
        utm_source: "返回小游戏",
        utm_medium: "视频号主播从直播间返回小游戏"
      },
      1198: {
        utm_source: "打开小游戏",
        utm_medium: "视频号开播界面打开小游戏"
      },
      1201: {
        utm_source: "打开小程序",
        utm_medium: "视频号广告详情页打开小程序"
      },
      1202: {
        utm_source: "打开小程序卡片",
        utm_medium: "企微客服号会话打开小程序卡片"
      },
      1203: {
        utm_source: "压测工具的请求",
        utm_medium: "微信小程序压测工具的请求"
      },
      1206: {
        utm_source: "打开小游戏",
        utm_medium: "视频号小游戏直播间打开小游戏"
      },
      1207: {
        utm_source: "打开小程序文字链",
        utm_medium: "企微客服号会话打开小程序文字链"
      },
      1208: {
        utm_source: "打开商品卡片",
        utm_medium: "聊天打开商品卡片"
      },
      1212: {
        utm_source: "打开小程序",
        utm_medium: "青少年模式申请页打开小程序"
      },
      1215: {
        utm_source: "打开小程序",
        utm_medium: "广告预约打开小程序"
      },
      1216: {
        utm_source: "打开小程序",
        utm_medium: "视频号订单中心打开小程序"
      },
      isShare: function(t) {
        return [1096].includes(t)
      },
      isCartShare: function(t) {
        return [1007, 1008, 1036, 1044].includes(t)
      }
    },
    Q = new(function(t) {
      a(r, t);
      var e = m(r);

      function r() {
        return n(this, r), e.call(this, G)
      }
      return i(r, [{
        key: "load",
        value: function(t, e) {
          var n = e || {};
          if (wx.getAccountInfoSync) {
            var u = wx.getAccountInfoSync();
            u && u.miniProgram && u.miniProgram.appId && (n.appId = u.miniProgram.appId)
          }
          return l(s(r.prototype), "load", this).call(this, t, n)
        }
      }]), r
    }(W));
  return App.zhuge = Q, Q
}));