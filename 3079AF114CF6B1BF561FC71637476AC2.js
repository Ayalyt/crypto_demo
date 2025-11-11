Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = u(require("FFE7E0434CF6B1BF9981884406C76AC2.js")),
  t = u(require("EF8F1C504CF6B1BF89E97457A6276AC2.js")),
  r = u(require("7EFBD0924CF6B1BF189DB89595076AC2.js")),
  o = u(require("DA3DBFB64CF6B1BFBC5BD7B18A176AC2.js"));

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var d = e.default.toComputed({
    id: n,
    name: s
  }),
  i = e.default.toComputed([]),
  a = "undefined" == typeof requestAnimationFrame ? function(e) {
    setTimeout((function() {
      e()
    }), 17)
  } : requestAnimationFrame,
  n = -999,
  s = "我的所有店铺",
  l = {
    oldStoreId: -1
  },
  f = {
    lastSearchStore: d,
    totalStores: i,
    STORE_ALL_ID: n,
    STORE_ALL_NAME: s,
    updateCurrentStore: function(e, u) {
      var d = t.default.currentStore = e,
        i = l.oldStoreId;
      !!d.id && d.id !== i && (o.default.updateRunTimeBzParam({
        storeId: d.id,
        storeName: d.name
      }), getApp().globalData.initOptions.storeId = d.id, u && wx.setStorageSync("location_store_1121", d.id + ""), -1 === i ? t.default.currentStoreViewVisible = !0 : (t.default.currentStoreViewVisible = !1, a((function() {
        t.default.currentStoreViewVisible = !0
      }))), l.oldStoreId = d.id, t.default.userInfo.storeId = d.id, r.default.user(t.default.loginInfo, t.default.userInfo))
    }
  };
exports.default = f;