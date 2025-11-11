var e, n = require("./@babel/runtime/helpers/typeof.js");
e = function() {
  return function(e) {
    return e = e || Object.create(null), {
      on: function(n, t) {
        (e[n] || (e[n] = [])).push(t)
      },
      off: function(n, t) {
        e[n] && e[n].splice(e[n].indexOf(t) >>> 0, 1)
      },
      emit: function(n, t) {
        (e[n] || []).slice().map((function(e) {
          e(t)
        })), (e["*"] || []).slice().map((function(e) {
          e(n, t)
        }))
      }
    }
  }
}, "object" == ("undefined" == typeof exports ? "undefined" : n(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (void 0).mitt = e();