Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("./@babel/runtime/helpers/objectSpread2.js"),
  t = a(require("D0D16E174CF6B1BFB6B7061065376AC2.js")),
  r = a(require("0A66BE554CF6B1BF6C00D652EAF76AC2.js"));

function a(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = {
  checkAuth: function() {
    var a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
      u = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      i = !!t.default.base.registered;
    return !i && a && r.default.$navigateTo({
      url: "/wxat-common/pages/wx-auth/index",
      data: e(e({}, d), {}, {
        goBack: !!u
      })
    }), i
  }
};
exports.default = u;