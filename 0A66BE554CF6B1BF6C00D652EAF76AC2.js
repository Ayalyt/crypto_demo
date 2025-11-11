Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = r(require("5D679AC74CF6B1BF3B01F2C0A7876AC2.js")),
  t = r(require("5A2FF7964CF6B1BF3C499F918FE76AC2.js")),
  a = r(require("B95C92C54CF6B1BFDF3AFAC273B76AC2.js"));

function r(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = {};
a.default.entries(wx, (function(t, a) {
  u[t] = "function" == typeof a ? e.default.object.wxPromisify(a) : a
})), u.request = t.default, u.$navigateBack = e.default.navigate.navigateBack, u.$navigateTo = e.default.navigate.navigateTo, u.$redirectTo = e.default.navigate.redirectTo, u.$switchTab = e.default.navigate.switchTab, u.$getCurrentPage = e.default.page.getCurrentPage, u.$getCurrentPageUrl = e.default.page.getCurrentPageUrl;
var i = u;
exports.default = i;