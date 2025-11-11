var e = require("./@babel/runtime/helpers/objectWithoutProperties.js"),
  r = ["rule", "message", "disable"],
  t = require("ABE2B3374CF6B1BFCD84DB308E9A6AC2.js");
module.exports = function(i, s, u, a) {
  for (var n = [], o = 0, l = s.length; o < l; o++)
    for (var f = s[o], b = u[f], c = i[f] || [], d = 0, g = c.length; d < g; d++) {
      var h = c[d],
        m = h.rule,
        p = h.message,
        v = h.disable,
        q = e(h, r),
        j = "function" == typeof m ? m : t[m];
      if (!v && (!j || !j(b, q))) {
        if (n.push({
            field: f,
            message: p
          }), a) continue;
        return n
      }
    }
  return n
};