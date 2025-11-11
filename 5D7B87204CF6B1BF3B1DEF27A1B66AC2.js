var e = d(require("768EF4C44CF6B1BF10E89CC303286AC2.js")),
  t = d(require("D0D16E174CF6B1BFB6B7061065376AC2.js")),
  r = d(require("0A66BE554CF6B1BF6C00D652EAF76AC2.js")),
  a = d(require("D61A94F34CF6B1BFB07CFCF42A086AC2.js")),
  u = d(require("DA3DBFB64CF6B1BFBC5BD7B18A176AC2.js")),
  i = d(require("515194864CF6B1BF3737FC81C6C66AC2.js")),
  n = d(require("7EFBD0924CF6B1BF189DB89595076AC2.js")),
  s = d(require("AD5C37134CF6B1BFCB3A5F14B4E76AC2.js"));

function d(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
module.exports = {
  init: function(a) {
    var s = a.app,
      d = a.options,
      o = a.analyticsInit,
      f = a.success;
    s.globalData.initOptions = {}, r.default.getExtConfig().then((function(r) {
        t.default.base.extConfig = r.extConfig, e.default.login(d).then((function(e) {
          o && u.default.config({
            appId: extConfig.appId,
            appKey: extConfig.maAppId,
            source: "action_report_topic",
            test_flag: !0,
            URL_UUID: i.default+"/dw/report/uuid",
            URL_REPORT: i.default+"/dw/report/action",
            page_map: {}
          }), u.default.updateRunTimeBzParam({
            storeId: t.default.base.currentStore.id,
            storeName: t.default.base.currentStore.name
          }), t.default.base.storeChanged = !0, t.default.base.logged = !0, n.default.frontLoginReady(), f && "function" == typeof f && f(e)
        })).catch((function(e) {
          console.log(e)
        }))
      })),
      function(t) {
        var r = t.query || {},
          a = {
            scene: t.scene || "",
            _ref_storeId: r._ref_storeId || "",
            _ref_wxOpenId: r._ref_wxOpenId || "",
            _ref_useId: r._ref_useId || "",
            _ref_bz: r._ref_bz || ""
          };
        t.query.scene && (a._ref_bz_key = r.scene || "", a._ref_bz_url = t.path || ""), e.default.setBuryInfo(a)
      }(d)
  },
  state: t.default,
  wxClass: a.default,
  register: s.default.register,
  updateUserInfo: s.default.updateUserInfo
};