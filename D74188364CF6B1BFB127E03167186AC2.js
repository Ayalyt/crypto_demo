var e, a = (e = require("D0D16E174CF6B1BFB6B7061065376AC2.js")) && e.__esModule ? e : {
  default: e
};
var t = {
  "pages/shopping-cart/index": "wxat-common/pages/tabbar-shopping-cart/index",
  "wxat-common/pages/shopping-cart/index": "wxat-common/pages/tabbar-shopping-cart/index",
  "wxat-common/pages/tabbar-shopping-cart/index": "wxat-common/pages/tabbar-shopping-cart/index"
};
module.exports = {
  templateHandler: function(e, n) {
    var o = n.maTemplateConfigDTO.homeConfig || "[]",
      s = n.maTemplateConfigDTO.tabBarConfig || "{}",
      r = n.maTemplateConfigDTO.config || "{}",
      i = getApp().globalData;
    i.tabbars = s ? JSON.parse(s) : JSON.parse(r).tabBar;
    var f = Object.keys(t);
    if ((i.tabbars.list || []).forEach((function(e) {
        f.some((function(a) {
          return a === e.pagePath
        })) && (e.pagePath = t[e.pagePath], e.realPath = e.pagePath)
      })), i.homeConfig = JSON.parse(o), r) {
      var p = JSON.parse(r);
      p && (i.themeConfig = p.theme, i.mineConfig = p.mineConfig && p.mineConfig.value, a.default.base.mineConfig = p.mineConfig && p.mineConfig.value)
    }
    var u = n.sessionId,
      d = n.vip,
      l = n.appInfo,
      g = n.userInfo,
      b = n.loginInfo,
      m = n.storeVO,
      c = n.stores;
    a.default.base.userInfo = g, a.default.base.loginInfo = b, a.default.base.appId = e.appId, a.default.base.vip = d;
    var I = !!e.longtitude;
    a.default.base.pendingChooseStoreList = c, a.default.store.updateCurrentStore(m, I), a.default.base.appInfo = l, a.default.base.storeVO = m, a.default.base.vip ? (a.default.base.registered = !0, a.default.base.wxUserInfo = {
      avatarUrl: a.default.base.userInfo.avatarImgUrl,
      city: a.default.base.userInfo.city,
      country: a.default.base.userInfo.country,
      gender: a.default.base.userInfo.gender,
      province: a.default.base.userInfo.province,
      nickName: a.default.base.userInfo.nickname
    }) : (a.default.base.registered = !1, a.default.base.wxUserInfo = null, a.default.base.userInfo = {}), a.default.base.sessionId = u
  }
};