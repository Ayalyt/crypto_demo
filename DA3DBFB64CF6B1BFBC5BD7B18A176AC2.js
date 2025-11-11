Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
/*!
 * wkapi.js 1.2.2
 * (c) 2018-2020 wakedata
 * Released under the MIT License.
 */
var e = "wk.20181119.uid",
  t = "wk.20181119.opr",
  n = "boot",
  r = "error",
  o = "app_hide",
  a = "app_show",
  i = "page_leave",
  c = "page_onshow",
  s = "user_message",
  u = "user_auth",
  p = "click",
  l = "user_location_message",
  f = "system",
  g = "norm",
  d = "event",
  _ = {
    appId: "",
    appKey: "",
    uuid: "",
    opid: "",
    global: {},
    tzone: function() {
      var e = -(new Date).getTimezoneOffset();
      if ("0" != e && "" !== e && null !== e) {
        var t = Math.abs(e);
        return (e > 0 ? "+" : "-") + ((Math.floor(t / 60).toString().length < 2 ? "0" + Math.floor(t / 60).toString() : Math.floor(t / 60).toString()) + ":" + ((t % 60).toString().length < 2 ? "0" + (t % 60).toString() : (t % 60).toString()))
      }
      return ""
    }()
  },
  v = {
    is_first_day: !1,
    is_first_time: !1
  };

function h() {}
var m = {
    Page: Page,
    App: App,
    Component: Component,
    getCurrentPages: getCurrentPages
  },
  y = wx || {
    getNetworkType: h,
    getSystemInfoSync: h,
    setStorageSync: h,
    getStorageSync: h,
    request: h
  };

function b(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD";
  if (!e) return "";
  "[object Number]" === Object.prototype.toString.call(e) && 10 === (e + "").length && (e *= 1e3), "[object Date]" === !Object.prototype.toString.call(e) && (e = new Date(e));
  var n = e.getFullYear(),
    r = e.getMonth(),
    o = e.getDate(),
    a = e.getHours(),
    i = a % 12 == 0 ? 12 : a % 12,
    c = e.getMinutes(),
    s = e.getSeconds(),
    u = e.getMilliseconds(),
    p = function(e) {
      return ("0" + e).slice(-2)
    },
    l = {
      YYYY: n,
      MM: p(r + 1),
      M: r + 1,
      DD: p(o),
      D: o,
      HH: p(a),
      H: a,
      hh: p(i),
      h: i,
      mm: p(c),
      m: c,
      ss: p(s),
      s: s,
      S: u
    };
  return t.replace(/Y+|M+|D+|H+|h+|m+|s+|S+/g, (function(e) {
    return l[e]
  }))
}
var w, R = ((w = function() {}).setURL_UUID = function(e) {
    e && (w.URL_UUID = e)
  }, w.setURL_REPORT_REAL_TIME = function(e) {
    e && (w.URL_REPORT_REAL_TIME = e)
  }, w.setSource = function(e) {
    e && (w.source = e)
  }, w.URL_UUID = "https://stream.wakedata.com/dmp/api/report/uuid", w.URL_REPORT_REAL_TIME = "https://stream.wakedata.com/dmp/api/report/realtime", w.source = "", w),
  S = {
    enable: !1,
    url: "https://www.wakedata.com/athena/wxappbadreport/recevie"
  },
  U = {
    UUID: "uuid",
    BOOT: "boot",
    APP_ERROR: "apperror"
  };

function I(e, t) {
  (S.enable || e === U.APP_ERROR) && y.request({
    url: S.url + "?scene=" + e + "&opt=" + encodeURIComponent(JSON.stringify(t))
  })
}
var L = {};

function O() {
  var e = m.getCurrentPages();
  if (e && 0 !== e.length) {
    var t = "";
    try {
      t = e && e[e.length - 1] && e[e.length - 1].route
    } catch (e) {}
    if (t === L.ru) return L;
    var n = {
      ru: t,
      lastru: L.ru
    };
    return L = Object.assign({}, n), n
  }
  return {
    ru: "",
    lastru: ""
  }
}
var D = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  P = [],
  T = function(e) {
    try {
      return y.getStorageSync(e)
    } catch (e) {}
  },
  k = function(e, t) {
    try {
      y.setStorageSync(e, t)
    } catch (e) {}
  },
  E = {
    test_flag: 0,
    ableReport: !1,
    apiUidLossTime: 0,
    appId: null,
    launch: {
      sourceappid: "",
      scene: ""
    },
    global: D({
      opid: _.opid,
      mid: _.uuid,
      appKey: _.appKey,
      tzone: _.tzone,
      device: null,
      sdk: {
        version: "1.2.0",
        type: "wx-app"
      }
    }, _.global)
  };

function A() {
  P.length > 0 && M.run < M.max && (M.run += 1, function(e) {
    var t = e.config;
    !t.bzparm && H && (t.bzparm = H), t.global = E.global, (e.getCategory() === n || e.getCategory() === s) && (t.sourceappid = E.launch.sourceappid, t.scene = E.launch.scene), E.test_flag && (t.test_flag = 1);
    var r, o = R.URL_REPORT_REAL_TIME + "?appId=" + E.appId + "&ts=" + +new Date + "&content=" + encodeURIComponent(JSON.stringify(t));
    R.source && (o = o + "&source=" + R.source), y.request({
      url: o,
      success: A,
      fail: (r = t.event, function() {
        "boot" === r && I(U.BOOT, {
          uuid: E.global.mid
        })
      }),
      complete: x
    })
  }(P.splice(0, 1)[0]))
}
var M = {
  run: 0,
  max: 2
};

function x() {
  M.run -= 1
}

function C(e) {
  B(new z(f, {
    event: n,
    parm: {}
  }));
  try {
    e && e.referrerInfo && e.referrerInfo.appId && (E.launch.sourceappid = e.referrerInfo.appId), e && e.scene && (E.launch.scene = e.scene)
  } catch (e) {}
  var r = T(t);
  r ? (r -= 0, r += 1) : r = 1e3, k(t, r), E.global.opid = r, M.start = +new Date, Y()
}

function j() {
  var t, n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    a = o.appId,
    i = o.appKey,
    c = o.URL_UUID,
    s = o.URL_REPORT,
    u = o.test_flag,
    p = o.source,
    l = void 0 === p ? "action_report_topic" : p;
  return a ? i ? (E.appId = a, E.global.appKey = i, c && R.setURL_UUID(c), s && R.setURL_REPORT_REAL_TIME(s), l && R.setSource(l), u && (E.test_flag = 1), function() {
    y.getStorageSync("wk_bury_is_not_first_time") || (y.setStorageSync("wk_bury_is_not_first_time", !0), v.is_first_time = !0);
    var e = new Date,
      t = y.getStorageSync("wk_bury_first_time_stamp");
    t ? b(e) === b(t) && (v.is_first_day = !0) : (y.setStorageSync("wk_bury_is_not_first_time", e), v.is_first_day = !0)
  }(), function(t) {
    var n = T(e);
    if (n) return E.global.mid = n, t();
    ! function n() {
      E.apiUidLossTime > 3 || (E.apiUidLossTime += 1, y.request({
        url: R.URL_UUID,
        success: function(r) {
          var o = r.data ? r.data.data : "";
          o ? (k(e, E.global.mid = o), t()) : n()
        },
        fail: function(e) {
          I(U.UUID, {
            time: E.apiUidLossTime
          }), n()
        }
      }))
    }()
  }((function() {
    Y()
  })), t = function(e) {
    E.global.device = e, Y()
  }, n = {}, (r = y.getSystemInfoSync()) && function(e, t) {
    t.dp = e.screenWidth + "x" + e.screenHeight, t.model = e.model, t.wxver = e.SDKVersion, t.language = e.language, t.brand = e.brand, t.platform = e.platform;
    var n = e.system;
    t.os_ver = n;
    var r = n.split(" ");
    r && r.length && (t.os = r[0])
  }(r, n), void y.getNetworkType({
    success: function(e) {
      e && e.networkType && (n.nt = e.networkType)
    },
    complete: function() {
      t(n)
    }
  })) : console.warn("埋点初始化失败，缺少appKey") : console.warn("埋点初始化失败，缺少appId")
}

function B(e) {
  setTimeout((function() {
    P.push(e), E.ableReport ? A() : Y()
  }), 0)
}

function Y() {
  var e = O();
  e.ru && E.appId && E.global.opid && E.global.mid && E.global.device && H && (P.forEach((function(t) {
    t.config.page_info && t.config.page_info.ru || (t.config.page_info = e)
  })), A(), E.ableReport = !0)
}

function z(e, t) {
  this.category = e, t.event_type = e, t.optime = +new Date, t.page_info = O(), H && (t.bzparm = H), t.is_first_day = v.is_first_day, t.is_first_time = v.is_first_time, this.config = t
}
z.prototype.getCategory = function() {
  return this.category === f || this.category === g ? this.config.event : ""
};
var H = null,
  K = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  N = {
    heatBeatStart: !1,
    time: 0,
    ru: "",
    lastru: ""
  };
var q = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
  }
  return e
};

function J(e, t) {
  B(new z(e, t))
}

function F(e, t, n) {
  var r = void 0;
  if (e && t && (r = e(n))) return q({}, r, {
    pageKey: t
  })
}
var V = "ftBuryLoadArgument",
  W = "ftBuryPageKey",
  G = function(e) {
    var t = this[V],
      n = this[W];
    if (t && n) {
      var r = F(t, n, e);
      r ? this._buryLoadArg = r : this.__cache_bury_load_msg = e
    }
  },
  Q = function(e) {
    J(f, {
      event: r,
      parm: {
        msg: e
      }
    })
  },
  X = function() {
    N.time = +new Date, J(f, {
      event: c,
      parm: {}
    })
  },
  Z = function() {
    var e = this._buryLoadArg;
    this.__cache_bury_load_msg && (e = F(this[V], this[W], this.__cache_bury_load_msg)),
      function(e) {
        ! function(e) {
          B(new z(f, {
            event: i,
            parm: K({
              stay_dur: +new Date - N.time
            }, e || {})
          }))
        }(e)
      }(e)
  },
  $ = function(e) {
    console.log("burySdk:AppLife:hide", e), J(f, {
      event: o,
      parm: {}
    })
  },
  ee = function() {
    console.log("burySdk:AppLife:show"), J(f, {
      event: a,
      parm: {}
    })
  },
  te = {
    wkBuz: function(e, t) {
      J(d, {
        event: e,
        parm: t
      })
    },
    wkClick: function(e) {
      J(g, {
        event: p,
        parm: {
          x: e.detail.x,
          y: e.detail.y
        }
      })
    },
    wkReport: function(e, t, n) {
      J(g, {
        event: p,
        parm: {
          x: n.detail.x,
          y: n.detail.y,
          key: e,
          value: t
        }
      })
    },
    wkHotCatch: function(e) {
      J(g, {
        event: p,
        parm: {
          x: e.detail.x,
          y: e.detail.y
        }
      })
    }
  };

function ne(e, t, n) {
  var r = e[t];
  e[t] = function() {
    for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    n.call.apply(n, [this].concat(t)), r && r.call.apply(r, [this].concat(t))
  }
}
var re = App;
App = function(e) {
  ne(e, "onError", Q), ne(e, "onLaunch", C), ne(e, "onShow", ee), ne(e, "onHide", $), re.call(this, e)
};
var oe = Page;
Page = function(e) {
  for (var t in te) e[t] = te[t];
  ne(e, "onLoad", G), ne(e, "onShow", X), ne(e, "onHide", Z), ne(e, "onUnload", Z), oe.call(this, e)
};
var ae = Component;
Component = function(e) {
  for (var t in e.methods || (e.methods = {}), te) e.methods[t] = te[t];
  ae.call(this, e)
};
var ie = {
  updateRunTimeBzParam: function(e) {
    H = D({}, H || {}, e), Y()
  },
  badJs: {
    BAD_SCENE: U,
    openBadReport: function() {
      S.enable = !0
    },
    reportBad: I
  },
  config: function(e) {
    j(e)
  },
  currentPageInfo: O,
  report: function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e ? J(d, {
      event: e,
      parm: t
    }) : console.warn("请输入事件名")
  },
  reportUser: function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ! function(e) {
      var t = {};
      for (var n in e) t[n] = e[n];
      E.global.user = t
    }(e), J(g, {
      event: s,
      parm: {
        user: e,
        user_profile: t
      }
    })
  },
  reportAuthOperation: function() {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    J(g, {
      event: u,
      parm: {
        result: e ? 1 : 0,
        author_type: t
      }
    })
  },
  reportLocation: function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    J(g, {
      event: l,
      parm: e
    })
  }
};
exports.default = ie;