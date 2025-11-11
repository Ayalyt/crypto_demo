var e = require("03F505464CF6B1BF65936D4171E96AC2.js"),
  t = require("F9E424F04CF6B1BF9F824CF736786AC2.js"),
  n = require("miniprogram_npm/zg-sdk-wechart/index.js"),
  r = require("0C847BE34CF6B1BF6AE213E4E13A6AC2.js"),
  o = function(e) {
    return (e = e.toString())[1] ? e : "0" + e
  },
  a = function(e, t) {
    var n, r;
    e = (e = (e || "").split(" ").join("")).split("");
    for (var o = 0, a = t.length; o < a; o++)(n = e[r = t[o]]) && " " !== n && (e[r] = " " + n);
    return e.join("")
  },
  i = function(e) {
    return "000".concat(e).slice(-2)
  },
  s = function(e) {
    var t = e.split("&"),
      n = {};
    return t.map((function(e, t) {
      var r = e.split("=");
      2 === r.length && (n[r[0]] = r[1])
    })), n
  },
  c = wx.getFileSystemManager();
module.exports = {
  formatTime: function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = e.getFullYear(),
      r = e.getMonth() + 1,
      a = e.getDate(),
      i = e.getHours(),
      s = e.getMinutes(),
      c = e.getSeconds(),
      u = t.splitter ? t.splitter : "/",
      g = [i, s];
    return t.second && g.push(c), [n, r, a].map(o).join(u) + " " + g.map(o).join(":")
  },
  formatIdCardNo: function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return 1 === t ? a(e, [6, 14]) : e
  },
  checkMobile: function(e) {
    if (!e || !/^[1][0-9]{10}$/.test(e)) return "请填写正确的手机号"
  },
  identityCodeValid: function(e) {
    var t = !0;
    if (e && /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))
      if ({
          11: "北京",
          12: "天津",
          13: "河北",
          14: "山西",
          15: "内蒙古",
          21: "辽宁",
          22: "吉林",
          23: "黑龙江 ",
          31: "上海",
          32: "江苏",
          33: "浙江",
          34: "安徽",
          35: "福建",
          36: "江西",
          37: "山东",
          41: "河南",
          42: "湖北 ",
          43: "湖南",
          44: "广东",
          45: "广西",
          46: "海南",
          50: "重庆",
          51: "四川",
          52: "贵州",
          53: "云南",
          54: "西藏 ",
          61: "陕西",
          62: "甘肃",
          63: "青海",
          64: "宁夏",
          65: "新疆",
          71: "台湾",
          81: "香港",
          82: "澳门",
          91: "国外 "
        } [e.substr(0, 2)]) {
        if (18 === e.length) {
          e = e.split("");
          for (var n = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], r = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2], o = 0, a = 0; a < 17; a++) o += e[a] * n[a];
          r[o % 11] != e[17] && ("校验位错误", t = !1)
        }
      } else "地址编码错误", t = !1;
    else "身份证号格式错误", t = !1;
    return t
  },
  travelPermitCodeValidate: {
    hongkong: function(e) {
      return /^([HMhm]\d{9}(\(\w{1}\))?)$/.test(e)
    },
    taiwan: function(e) {
      return /^\d{8}$/.test(e)
    },
    foreign: function(e) {
      return /^(?=.*\d)([a-zA-z]|[0-9]){7,9}$/.test(e)
    },
    HongKongMacaoTaiwan: function(e) {
      if (e.length < 18) return !1
    }
  },
  addSpace: a,
  formatPureDate: function(e, t) {
    t = t || {};
    var n = new Date(e);
    if ("Invalid Date" == n) return "未获取到时间";
    var r = "";
    if (r += n.getFullYear(), r += t.dayFormat ? t.dayFormat : "年", r += t.formatMD ? ("00" + (n.getMonth() + 1)).slice(-2) : n.getMonth() + 1, r += t.dayFormat ? t.dayFormat : "月", r += t.formatMD ? ("00" + n.getDate()).slice(-2) : n.getDate(), r += t.dayFormat ? " " : "日 ", r += ("00" + n.getHours()).slice(-2), r += ":", r += ("00" + n.getMinutes()).slice(-2), t.durationHour) r += " 至 ", r += ("00" + (n.getHours() + t.durationHour)).slice(-2), r += ":", r += ("00" + n.getMinutes()).slice(-2);
    else if (t.durationMinute) {
      var o = n.getMinutes() + t.durationMinute;
      r += " 至 ", r += ("00" + (n.getHours() + parseInt(o / 60))).slice(-2), r += ":", r += ("00" + n.getMinutes() + o % 60).slice(-2)
    }
    return r
  },
  formatDateDuration: function(e, t) {
    var n = new Date(e),
      r = n.getFullYear();
    return r += "-" + i(n.getMonth() + 1), r += "-" + i(n.getDate()) + " ", r += i(n.getHours()) + ":" + i(n.getMinutes()), r += "-" + i(n.getHours() + 2) + ":" + i(n.getMinutes())
  },
  numberEnum: function(e) {
    switch (Number(e)) {
      case 1:
        return "一";
      case 2:
        return "二";
      case 3:
        return "三";
      case 4:
        return "四";
      case 5:
        return "五";
      case 6:
        return "六";
      case 7:
        return "七";
      case 8:
        return "八";
      default:
        return "九"
    }
  },
  moneyCommafy: function(e) {
    if ("" != (e = (e += "").replace(/[ ]/g, "")) && !isNaN(e)) {
      var t = e.indexOf(".");
      if (-1 == t)
        for (var n = /(-?\d+)(\d{3})/; n.test(e);) e = e.replace(n, "$1,$2");
      else {
        var r = e.substring(0, t),
          o = e.substring(t + 1, e.length);
        for (n = /(-?\d+)(\d{3})/; n.test(r);) r = r.replace(n, "$1,$2");
        e = r + "." + o
      }
      return e
    }
  },
  openAdLink: function(e, t, n) {
    return new Promise((function(r, o) {
      if (e)
        if ((e = decodeURIComponent(e)).startsWith("gh_")) {
          var a = e.match("^(.+)[:][\\/][\\/]([^?.]+)[?]?(.*)$");
          console.log(JSON.stringify(a));
          var i = a[2];
          a[3] && a[3].length > 0 && (i = i + "?" + a[3]);
          var c = s(a[3]),
            u = c.wxAppId,
            g = "release";
          if (1 == c.miniprogramType ? g = "develop" : 2 == c.miniprogramType && (g = "trial"), u && "wx2be3bf5dd4b31b98" !== u) {
            if (n) return void wx.showModal({
              title: "温馨提示",
              content: "即将进入活动信息页",
              confirmText: "确定",
              cancelText: "点错了",
              success: function(t) {
                t.cancel || wx.navigateToMiniProgram({
                  appId: u,
                  path: i,
                  envVersion: g,
                  complete: function(t) {
                    r({
                      success: -1 !== t.errMsg.indexOf("navigateToMiniProgram:ok"),
                      message: t.errMsg,
                      type: "otherMiniProgram",
                      url: e
                    })
                  }
                })
              }
            });
            wx.navigateToMiniProgram({
              appId: u,
              path: i,
              envVersion: g,
              complete: function(t) {
                r({
                  success: -1 !== t.errMsg.indexOf("navigateToMiniProgram:ok"),
                  message: t.errMsg,
                  type: "otherMiniProgram",
                  url: e
                })
              }
            })
          } else t ? wx.redirectTo({
            url: "/" + i + "&inMini=true"
          }) : wx.navigateTo({
            url: "/" + i + "&inMini=true"
          }), r({
            success: !0,
            message: "跳转成功",
            type: "native",
            url: "/" + i
          })
        } else {
          var f = encodeURIComponent(e);
          wx.navigateTo({
            url: "/pages/h5-container/index?webPath=".concat(f)
          }), r({
            success: !0,
            message: "跳转成功",
            type: "h5",
            url: f
          })
        }
      else o({
        success: !1,
        message: "跳转链接不能为空"
      })
    }))
  },
  getQuery: s,
  downloadQRCode: function(t, n, r) {
    return new Promise((function(o, a) {
      e.post({
        url: "/funlive/applet-qr-code/generate",
        handleError: "ALL",
        wholeResponse: !0,
        responseType: "arrayBuffer",
        data: {
          scene: t,
          page: n,
          envVersion: "release",
          isHyaline: r
        }
      }).then((function(e) {
        var t = "tmp_base64src." + (r ? "png" : "jpg");
        console.log("res.data", e),
          function(e, t) {
            return new Promise((function(n, r) {
              var o = "".concat(wx.env.USER_DATA_PATH, "/").concat(t);
              c.writeFile({
                filePath: o,
                data: e,
                encoding: "utf-8",
                success: function() {
                  n(o)
                },
                fail: function() {
                  r(new Error("WRITE BASE64SRC ERROR"))
                }
              })
            }))
          }(e.data, t).then((function(e) {
            o({
              local: e
            })
          })).catch((function(e) {
            console.log(e), a(e)
          }))
      })).catch((function(e) {
        a(e), setTimeout((function() {
          -1 !== e.errMsg.indexOf("41030") ? wx.showToast({
            title: "需要使用小程序码，发布上线后方可使用",
            icon: "none"
          }) : -1 !== e.errMsg.indexOf("45009") && wx.showToast({
            title: "调用分钟频率受限(目前5000次/分钟，会调整)，如需大量小程序码，建议预生成",
            icon: "none"
          })
        }), 100)
      }))
    }))
  },
  autoAuthLogin: function(r, o, a) {
    try {
      r && n.identify(r)
    } catch (e) {
      console.log("err", e)
    }
    return new Promise((function(n, i) {
      var s = wx.getStorageSync(t.ISLOGIN);
      e.post({
        url: "/mp-ac/authentication/login-and-register",
        handleError: "ALL",
        wholeResponse: !0,
        data: {
          cdpMemberId: r,
          sessionId: o
        }
      }).then((function(e) {
        var r = e && e.header || {},
          o = r["X-Fun-Issue"] || r["X-FUN-ISSUE"];
        if (o) {
          wx.setStorageSync(t.TOKEN, o), wx.setStorageSync(t.ISLOGIN, !0), wx.setStorageSync(t.LOGINMOBILE, a);
          var c = getCurrentPages(),
            u = c[c.length - 1];
          u && u.route && !s && u.onLoad(u.options), n(!0)
        } else i(!1)
      })).catch((function(e) {
        console.log("e", e), i(e)
      }))
    }))
  },
  getSign: function(e) {
    return new Promise((function(t, n) {
      try {
        var o = Object.keys(e).sort(),
          a = "";
        o.forEach((function(t) {
          e[t] && (a += "".concat(t, "=").concat(e[t], "&"))
        }));
        var i = "".concat(a).concat("b6514988b6e9891a9c6fbbaecc8699d4");
        t(r(i))
      } catch (e) {
        n(e)
      }
    }))
  },
  getOpenId: function(e) {
    return new Promise((function(e, n) {
      try {
        var r = wx.getStorageSync(t.OPENID);
        r ? e(r) : n("get openId failed.")
      } catch (e) {
        n(e)
      }
    }))
  },
  saveMobileUserId: function(e, n) {
    var r = wx.getStorageSync(t.ISLOGIN),
      o = wx.getStorageSync(t.LOGINMOBILE);
    r && !o && e ? (wx.setStorageSync(t.LOGINMOBILE, e), wx.setStorageSync(t.USERID, n)) : !r && o && (wx.removeStorageSync(t.LOGINMOBILE), wx.removeStorageSync(t.USERID))
  },
  getQueryFromUrl: function(e) {
    if (-1 === e.indexOf("?")) return {};
    var t = {},
      n = e.split("?");
    if (n.length) {
      n = n[1].split("&");
      for (var r = 0; r < n.length; r++) {
        var o = n[r].split("=");
        t[o[0]] = o[1]
      }
    }
    return t
  },
  throttle: function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3;
    if ("function" != typeof e) throw new Error("传入的第一个参数不是函数");
    var n = null;
    return function() {
      var r = +new Date;
      (r - n > t || !n) && (e.apply(this, arguments), n = r)
    }
  },
  uuid: function() {
    for (var e = [], t = 0; t < 36; t++) e[t] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
    e[14] = "4", e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-";
    var n = e.join("");
    return n
  },
  zhugeTrack: function(e, t) {
    n.track(e, t)
  },
  zhugeIdentify: function(e) {
    n.identify(e)
  },
  compareVersion: function(e, t) {
    e = e.split("."), t = t.split(".");
    for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
    for (; t.length < n;) t.push("0");
    for (var r = 0; r < n; r++) {
      var o = parseInt(e[r]),
        a = parseInt(t[r]);
      if (o > a) return 1;
      if (o < a) return -1
    }
    return 0
  }
};