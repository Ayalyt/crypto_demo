Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("./@babel/runtime/helpers/typeof.js"),
  t = a(require("4754A0804CF6B1BF2132C887A3D66AC2.js")),
  r = a(require("6E3D3A124CF6B1BF085B52151BF66AC2.js")),
  n = a(require("20A5B0474CF6B1BF46C3D840DB776AC2.js")),
  o = a(require("B95C92C54CF6B1BFDF3AFAC273B76AC2.js"));

function a(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var i = {
  clone: function(e) {
    return (0, t.default)(e)
  },
  toUrlParams: function(t) {
    return o.default.obj2KeyValueArray(t).map((function(t) {
      var r = "";
      return "object" === e(t[1]) ? r = JSON.stringify(t[1]) : null != t[1] && (r = t[1]), "".concat(t[0], "=").concat(r)
    })).join("&")
  },
  isEmptyObject: function(e) {
    return null == e || 0 === Object.keys(e).length
  },
  toComputed: function(t) {
    for (var r = this.clone(t), o = function() {
        var o = i[a];
        Object.defineProperty(t, o, {
          get: function() {
            var e = r[o];
            return e && "function" == typeof e.get ? e.get.call(r) : e && e.storage ? e.val || wx.getStorageSync(e.storage) : e && (e.val || e)
          },
          set: function(t) {
            var a = r[o],
              i = function() {
                n.default.emit("stateChange", {
                  key: o,
                  val: t
                })
              };
            if (a && a.storage)
              if (a.val = t, "object" === e(t)) {
                var u = JSON.stringify(t);
                wx.setStorageSync(a.storage, u)
              } else wx.setStorageSync(a.storage, t);
            if (a && "function" == typeof a.set) return a.set.call(r, t), void i();
            if (a && "function" == typeof a.get) throw "无法修改变量".concat(o, "，因为该变量没有定义setter");
            if (a && a.val) return a.val = t, void i();
            r[o] = t, i()
          }
        });
        var u = r[o];
        if (u && u.storage) {
          var c = wx.getStorageSync(o);
          if ("" !== c) try {
            u.val = JSON.parse(c)
          } catch (e) {
            u.val = c
          }
        }
      }, a = 0, i = Object.keys(r); a < i.length; a++) o();
    return t
  },
  wxPromisify: function(e) {
    return function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return new r.default((function(r, n) {
        t.success = r, t.fail = n, e(t)
      }))
    }
  }
};
exports.default = i;