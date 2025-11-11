require("./runtime"), require("./taro"), module.exports = (wx.webpackJsonp = wx.webpackJsonp || []).push([
  [0],
  [function(e, r, t) {
    e.exports = t(12)
  }, , function(e, r, t) {
    t.d(r, "a", (function() {
      return n
    })), t.d(r, "e", (function() {
      return a
    })), t.d(r, "f", (function() {
      return c
    })), t.d(r, "c", (function() {
      return o
    })), t.d(r, "d", (function() {
      return s
    })), t.d(r, "b", (function() {
      return i
    }));
    var n = "appInfo",
      a = "userInfo",
      c = "userLockInfo",
      o = "pwdKey",
      s = "scr30",
      i = "deviceNameMapDeviceId"
  }, function(e, r, t) {
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c);
    var s, i = {
      "config": function config() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e
      },
      "success": (s = function _asyncToGenerator(e) {
        return function() {
          var r = e.apply(this, arguments);
          return new Promise((function(e, t) {
            return function step(n, a) {
              try {
                var c = r[n](a),
                  o = c.value
              } catch (e) {
                return void t(e)
              }
              if (!c.done) return Promise.resolve(o).then((function(e) {
                step("next", e)
              }), (function(e) {
                step("throw", e)
              }));
              e(o)
            }("next")
          }))
        }
      }(a.a.mark((function _callee(e) {
        return a.a.wrap((function _callee$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", e);
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee, void 0)
      }))), function success(e) {
        return s.apply(this, arguments)
      }),
      "fail": function fail(e) {
        return e.errMsg, e
      },
      "complete": function complete() {}
    };
    var u = function() {
        var e = function request_asyncToGenerator(e) {
          return function() {
            var r = e.apply(this, arguments);
            return new Promise((function(e, t) {
              return function step(n, a) {
                try {
                  var c = r[n](a),
                    o = c.value
                } catch (e) {
                  return void t(e)
                }
                if (!c.done) return Promise.resolve(o).then((function(e) {
                  step("next", e)
                }), (function(e) {
                  step("throw", e)
                }));
                e(o)
              }("next")
            }))
          }
        }(a.a.mark((function _callee(e) {
          var r, t, n;
          return a.a.wrap((function _callee$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return r = e.params, i.config && (r = i.config(e.params)), a.prev = 2, a.next = 5, o.a.request({
                  "url": e.url,
                  "method": e.method || "GET",
                  "data": r,
                  "dataType": "json",
                  "header": e.header || {}
                });
              case 5:
                return t = a.sent, i.complete && i.complete(t.data), t = 200 === t.statusCode ? i.success && i.success(t.data) : i.fail && i.fail(t.data), a.abrupt("return", t);
              case 11:
                return a.prev = 11, a.t0 = a.catch(2), n = i.fail && i.fail(a.t0), a.abrupt("return", n);
              case 15:
              case "end":
                return a.stop()
            }
          }), _callee, this, [
            [2, 11]
          ])
        })));
        return function request(r) {
          return e.apply(this, arguments)
        }
      }(),
      l = t(2),
      d = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      };

    function actions_asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var p, f, k, h, v, m, y, g, _, x, C, w, b, I, B, S, T, P, D, N, G, M, L, F, U, $, O, E, q, A, R, j, X = "/api/v2/sdk/execute",
      V = "/api/v2/sdk/business",
      z = void 0,
      W = void 0,
      H = void 0,
      K = {
        "registerApp": function() {
          var e = actions_asyncToGenerator(a.a.mark((function _callee(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
              "sdkUrl": "https://alone.unovo.com.cn",
              "protocolUrl": "https://alone.unovo.com.cn"
            };
            return a.a.wrap((function _callee$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return z = r.sdkUrl + "/herelink-sdk-api", W = r.protocolUrl + "/herelink/api/v2/sdk", H = r.protocolUrl + "/herelink/api/free/wechatsdk/door/lock/bluetooth/instruction/response", t.next = 5, o.a.setStorage({
                    "key": "url",
                    "data": {
                      "sdkUrl": z,
                      "protocolUrl": W,
                      "xieyiCallBackUrl": H
                    }
                  });
                case 5:
                  return t.abrupt("return", u(d({
                    "url": "" + z + X + "/app/register",
                    "method": "POST",
                    "params": e
                  }, r)));
                case 6:
                case "end":
                  return t.stop()
              }
            }), _callee, void 0)
          })));
          return function registerApp(r) {
            return e.apply(this, arguments)
          }
        }(),
        "registerUser": (j = actions_asyncToGenerator(a.a.mark((function _callee2(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee2$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/user/register",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee2, void 0)
        }))), function registerUser(e) {
          return j.apply(this, arguments)
        }),
        "registerUserLock": (R = actions_asyncToGenerator(a.a.mark((function _callee3(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/bind/user/doorlock",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee3, void 0)
        }))), function registerUserLock(e) {
          return R.apply(this, arguments)
        }),
        "getOpenDoorParam": (A = actions_asyncToGenerator(a.a.mark((function _callee4(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee4$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/doorlock/open",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee4, void 0)
        }))), function getOpenDoorParam(e) {
          return A.apply(this, arguments)
        }),
        "crc16Dnp": (q = actions_asyncToGenerator(a.a.mark((function _callee5(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee5$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": n + "/api/v2/sdk/lib/crc16DNP",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee5, void 0)
        }))), function crc16Dnp(e) {
          return q.apply(this, arguments)
        }),
        "aesEncrypt": (E = actions_asyncToGenerator(a.a.mark((function _callee6(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee6$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": n + "/api/v2/sdk/lib/aesEncrypt",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee6, void 0)
        }))), function aesEncrypt(e) {
          return E.apply(this, arguments)
        }),
        "aesDecrypt": (O = actions_asyncToGenerator(a.a.mark((function _callee7(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee7$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": n + "/api/v2/sdk/lib/aesDecrypt",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee7, void 0)
        }))), function aesDecrypt(e) {
          return O.apply(this, arguments)
        }),
        "aes10Decrypt": ($ = actions_asyncToGenerator(a.a.mark((function _callee8(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee8$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": n + "/api/v2/sdk/lib/aes10Decrypt",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee8, void 0)
        }))), function aes10Decrypt(e) {
          return $.apply(this, arguments)
        }),
        "aesEncrypt2": (U = actions_asyncToGenerator(a.a.mark((function _callee9(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee9$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": n + "/api/v2/sdk/lib/aesEncrypt2",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee9, void 0)
        }))), function aesEncrypt2(e) {
          return U.apply(this, arguments)
        }),
        "aesDecrypt2": (F = actions_asyncToGenerator(a.a.mark((function _callee10(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee10$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": n + "/api/v2/sdk/lib/aesDecrypt2",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee10, void 0)
        }))), function aesDecrypt2(e) {
          return F.apply(this, arguments)
        }),
        "callBackSdk": (L = actions_asyncToGenerator(a.a.mark((function _callee11(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee11$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + V + "/result/notify",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee11, void 0)
        }))), function callBackSdk(e) {
          return L.apply(this, arguments)
        }),
        "callBackXieySdk": (M = actions_asyncToGenerator(a.a.mark((function _callee12(e) {
          var r, t, n, c, s, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee12$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, (t = r.data).sdkUrl, t.protocolUrl, n = t.xieyiCallBackUrl, a.next = 9, o.a.getStorage({
                  "key": l.a
                });
              case 9:
                return c = a.sent, s = c.data, a.abrupt("return", u(d({
                  "url": "" + n,
                  "method": "POST",
                  "params": e,
                  "header": {
                    "X-Ca-BID": "98431D867CA7D0D547CBB84C63585439",
                    "X-Ca-APPID": s.appId,
                    "X-Ca-Signauth": "",
                    "X-Ca-Signature": ""
                  }
                }, i)));
              case 12:
              case "end":
                return a.stop()
            }
          }), _callee12, void 0)
        }))), function callBackXieySdk(e) {
          return M.apply(this, arguments)
        }),
        "bindIndex": (G = actions_asyncToGenerator(a.a.mark((function _callee13(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee13$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/bind/index",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee13, void 0)
        }))), function bindIndex(e) {
          return G.apply(this, arguments)
        }),
        "unBindIndex": (N = actions_asyncToGenerator(a.a.mark((function _callee14(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee14$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/unbind/index",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee14, void 0)
        }))), function unBindIndex(e) {
          return N.apply(this, arguments)
        }),
        "setCupCard": (D = actions_asyncToGenerator(a.a.mark((function _callee15(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee15$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/set/cpu/card",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee15, void 0)
        }))), function setCupCard(e) {
          return D.apply(this, arguments)
        }),
        "readCard": (P = actions_asyncToGenerator(a.a.mark((function _callee16(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee16$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/read/nfc/card",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee16, void 0)
        }))), function readCard(e) {
          return P.apply(this, arguments)
        }),
        "queryTimePower": (T = actions_asyncToGenerator(a.a.mark((function _callee17(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee17$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/query/time/power",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee17, void 0)
        }))), function queryTimePower(e) {
          return T.apply(this, arguments)
        }),
        "queryDoorLockLog": (S = actions_asyncToGenerator(a.a.mark((function _callee18(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee18$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/query/doorlock/log",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee18, void 0)
        }))), function queryDoorLockLog(e) {
          return S.apply(this, arguments)
        }),
        "freezeIndex": (B = actions_asyncToGenerator(a.a.mark((function _callee19(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee19$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/freeze/index",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee19, void 0)
        }))), function freezeIndex(e) {
          return B.apply(this, arguments)
        }),
        "unfreezeIndex": (I = actions_asyncToGenerator(a.a.mark((function _callee20(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee20$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/unfreeze/index",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee20, void 0)
        }))), function unfreezeIndex(e) {
          return I.apply(this, arguments)
        }),
        "delDynamicPwd": (b = actions_asyncToGenerator(a.a.mark((function _callee21(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee21$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/del/dynamic/pwd",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee21, void 0)
        }))), function delDynamicPwd(e) {
          return b.apply(this, arguments)
        }),
        "cleanCpuCard": (w = actions_asyncToGenerator(a.a.mark((function _callee22(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee22$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/clean/cpu/card",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee22, void 0)
        }))), function cleanCpuCard(e) {
          return w.apply(this, arguments)
        }),
        "getKeysList": (C = actions_asyncToGenerator(a.a.mark((function _callee23(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee23$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/get/doorlock/keys",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee23, void 0)
        }))), function getKeysList(e) {
          return C.apply(this, arguments)
        }),
        "delDoorLock": (x = actions_asyncToGenerator(a.a.mark((function _callee24(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee24$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/del/doorlock",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee24, void 0)
        }))), function delDoorLock(e) {
          return x.apply(this, arguments)
        }),
        "getDoorLockInfo": (_ = actions_asyncToGenerator(a.a.mark((function _callee25(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee25$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/get/doorlock/info",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee25, void 0)
        }))), function getDoorLockInfo(e) {
          return _.apply(this, arguments)
        }),
        "getDoorLockList": (g = actions_asyncToGenerator(a.a.mark((function _callee26(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee26$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/get/doorlock/list",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee26, void 0)
        }))), function getDoorLockList(e) {
          return g.apply(this, arguments)
        }),
        "getDoorLockPowerTime": (y = actions_asyncToGenerator(a.a.mark((function _callee27(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee27$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/get/doorlock/time/power",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee27, void 0)
        }))), function getDoorLockPowerTime(e) {
          return y.apply(this, arguments)
        }),
        "getDoorLockDynamicPwd": (m = actions_asyncToGenerator(a.a.mark((function _callee28(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee28$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/get/doorlock/dynamic/pwd",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee28, void 0)
        }))), function getDoorLockDynamicPwd(e) {
          return m.apply(this, arguments)
        }),
        "getServerTime": (v = actions_asyncToGenerator(a.a.mark((function _callee29(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee29$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + V + "/health",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee29, void 0)
        }))), function getServerTime(e) {
          return v.apply(this, arguments)
        }),
        "initDoorLockApp": (h = actions_asyncToGenerator(a.a.mark((function _callee30(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee30$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, (t = r.data).sdkUrl, n = t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": n + "/door/lock/app/init",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee30, void 0)
        }))), function initDoorLockApp(e) {
          return h.apply(this, arguments)
        }),
        "getAuthBst": (k = actions_asyncToGenerator(a.a.mark((function _callee31(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee31$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + V + "/get/authbst",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee31, void 0)
        }))), function getAuthBst(e) {
          return k.apply(this, arguments)
        }),
        "secretSave": (f = actions_asyncToGenerator(a.a.mark((function _callee32(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee32$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + V + "/secret/save",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee32, void 0)
        }))), function secretSave(e) {
          return f.apply(this, arguments)
        }),
        "resetTime": (p = actions_asyncToGenerator(a.a.mark((function _callee33(e) {
          var r, t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return a.a.wrap((function _callee33$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, o.a.getStorage({
                  "key": "url"
                });
              case 2:
                return r = a.sent, t = r.data, n = t.sdkUrl, t.protocolUrl, t.xieyiCallBackUrl, a.abrupt("return", u(d({
                  "url": "" + n + X + "/reset/time",
                  "method": "POST",
                  "params": e
                }, c)));
              case 8:
              case "end":
                return a.stop()
            }
          }), _callee33, void 0)
        }))), function resetTime(e) {
          return p.apply(this, arguments)
        })
      };
    r.a = K
  }, function(e, r, t) {
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c),
      s = t(3),
      i = t(2);

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var u, l, d, p = {
      "hex_change": function hex_change(e) {
        var r;
        switch (e) {
          case "a":
            r = 10;
            break;
          case "b":
            r = 11;
            break;
          case "c":
            r = 12;
            break;
          case "d":
            r = 13;
            break;
          case "e":
            r = 14;
            break;
          case "f":
            r = 15;
            break;
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            r = Number(e);
            break;
          default:
            r = 0
        }
        return r
      },
      "stripscript": function stripscript(e) {
        for (var r = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？↵\r\n]"), t = "", n = 0; n < e.length; n++) t += e.substr(n, 1).replace(r, "");
        return t
      },
      "muti16": function muti16(e, r) {
        for (var t = e, n = 1; n < r; n++) t *= 16;
        return t
      },
      "ex16hex": function ex16hex(e) {
        var r = 0;
        if (e) {
          var t = (e = (e = p.stripscript(e)).replace("0x", "")).split(""),
            n = t.length;
          t.forEach((function(e, t) {
            var a = p.hex_change(("" + e).toLowerCase());
            r += p.muti16(a, n - t)
          }))
        }
        return r
      },
      "hex2ArrayBuffer": function hex2ArrayBuffer(e) {
        for (var r = e.length / 2, t = new ArrayBuffer(r), n = new DataView(t), a = e.split(""), c = 0; c < r; c++) {
          var o = a[2 * c] + a[2 * c + 1];
          n.setUint8(c, parseInt(o, 16))
        }
        return t
      },
      "crc16Dnp": (d = _asyncToGenerator(a.a.mark((function _callee2(e) {
        return a.a.wrap((function _callee2$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee(r, t) {
                  var n;
                  return a.a.wrap((function _callee$(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return a.next = 2, s.a.crc16Dnp({
                          "data": e
                        });
                      case 2:
                        0 === (n = a.sent).errorCode ? r(n.data) : t("");
                      case 4:
                      case "end":
                        return a.stop()
                    }
                  }), _callee, void 0)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee2, void 0)
      }))), function crc16Dnp(e) {
        return d.apply(this, arguments)
      }),
      "splicingCmd": function splicingCmd(e) {
        return new Promise((r = _asyncToGenerator(a.a.mark((function _callee3(r, t) {
          var n, c, o, s;
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return n = 0 === (n = e.instructionNum).indexOf("0x") ? n.substr(2, 2) : n, c = 1 === (c = (c = e.instructionContent.length / 2).toString(16)).length ? "0" + c : c, o = "55AA" + n + c + e.instructionContent, a.next = 8, p.crc16Dnp(o);
              case 8:
                (s = a.sent) ? r(o + s): t("");
              case 10:
              case "end":
                return a.stop()
            }
          }), _callee3, this)
        }))), function(e, t) {
          return r.apply(this, arguments)
        }));
        var r
      },
      "setMacMapDeviceId": (l = _asyncToGenerator(a.a.mark((function _callee5(e, r) {
        return a.a.wrap((function _callee5$(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", new Promise(function() {
                var t = _asyncToGenerator(a.a.mark((function _callee4(t, n) {
                  var c, s;
                  return a.a.wrap((function _callee4$(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, o.a.getStorage({
                          "key": i.b
                        });
                      case 2:
                        return c = n.sent, (s = c.data)[e] || (s[e] = r), n.next = 7, o.a.setStorage({
                          "key": i.b,
                          "data": s
                        });
                      case 7:
                        t();
                      case 8:
                      case "end":
                        return n.stop()
                    }
                  }), _callee4, this)
                })));
                return function(e, r) {
                  return t.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return t.stop()
          }
        }), _callee5, void 0)
      }))), function setMacMapDeviceId(e, r) {
        return l.apply(this, arguments)
      }),
      "checkHasConnectDevive": (u = _asyncToGenerator(a.a.mark((function _callee7(e) {
        return a.a.wrap((function _callee7$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee6(r, t) {
                  var n, c;
                  return a.a.wrap((function _callee6$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.b
                        });
                      case 2:
                        n = t.sent, c = n.data, r(c[e]);
                      case 5:
                      case "end":
                        return t.stop()
                    }
                  }), _callee6, this)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee7, void 0)
      }))), function checkHasConnectDevive(e) {
        return u.apply(this, arguments)
      }),
      "get32RandomNum": function get32RandomNum() {
        for (var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], r = "", t = 0; t < 32; t++) {
          r += e[parseInt(16 * Math.random())]
        }
        return r
      },
      "getOneTimeEnd": function getOneTimeEnd(e) {
        var r = new Date(new Date(e).setTime(new Date(e).getTime() + 18e5));
        return r.getFullYear() + "-" + (r.getMonth() + 1 < 10 ? "0" + (r.getMonth() + 1) : r.getMonth() + 1) + "-" + (r.getDate() < 10 ? "0" + r.getDate() : r.getDate()) + " " + (r.getHours() < 10 ? "0" + r.getHours() : r.getHours()) + ":" + (r.getMinutes() < 10 ? "0" + r.getMinutes() : r.getMinutes()) + ":" + (r.getSeconds() < 10 ? "0" + r.getSeconds() : r.getSeconds())
      },
      "getCurrentTime": function getCurrentTime() {
        var e = new Date;
        return e.getFullYear() + "-" + (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-" + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate()) + " " + (e.getHours() < 10 ? "0" + e.getHours() : e.getHours()) + ":" + (e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()) + ":" + (e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds())
      }
    };
    r.a = p
  }, function(e, r, t) {
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c),
      s = t(4),
      i = t(3),
      u = {
        "01": "指令执行成功",
        "02": "指令执行失败",
        "03": "指令数据包Crc错误",
        "04": "数据包解析错误",
        "05": "门锁未激活",
        "06": "校验指令 ID 失败",
        "07": "指令已经过期",
        "08": "密码的存储空间已满",
        "09": "密码不存在",
        "0A": "密码已存在（重复密码）",
        "0B": "指纹不存在",
        "0C": "指纹已存在（重复指纹）",
        "0D": "指纹的存储空间已满",
        "0E": "NFC 卡片不存在",
        "0F": "NFC 卡片的存储空间已满",
        "10": "NFC  卡片已存在（重复卡片）",
        "11": "上电超过5分钟",
        "12": "离线指令数据包错误"
      },
      l = t(2),
      d = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      };

    function _defineProperty(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        "value": t,
        "enumerable": !0,
        "configurable": !0,
        "writable": !0
      }) : e[r] = t, e
    }

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var p, f, k, h, v = {
      "callBackXieySdk": (h = _asyncToGenerator(a.a.mark((function _callee2(e, r) {
        return a.a.wrap((function _callee2$(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", new Promise(function() {
                var t = _asyncToGenerator(a.a.mark((function _callee(t, n) {
                  var c, s, u, p, f;
                  return a.a.wrap((function _callee$(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, o.a.getStorage({
                          "key": l.a
                        });
                      case 2:
                        return c = n.sent, s = c.data, u = {}, n.prev = 5, n.next = 8, o.a.getStorage({
                          "key": l.e
                        });
                      case 8:
                        p = n.sent, u = p.data, n.next = 15;
                        break;
                      case 12:
                        n.prev = 12, n.t0 = n.catch(5), u = {
                          "huid": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
                        };
                      case 15:
                        return n.next = 17, i.a.callBackXieySdk(d({}, e, {
                          "instructionNum": "0x" + e.instNum,
                          "lockMac": r.lockMac,
                          "huid": u.huid,
                          "bid": s.bid,
                          "appId": s.appId,
                          "seqNum": e.seqNum,
                          "respData": e.secretContent,
                          "pid": r.lockId,
                          "respCode": e.secretContent ? 0 : -1
                        }));
                      case 17:
                        f = n.sent, t({
                          "errorCode": f.errorCode,
                          "message": f.message
                        });
                      case 19:
                      case "end":
                        return n.stop()
                    }
                  }), _callee, void 0, [
                    [5, 12]
                  ])
                })));
                return function(e, r) {
                  return t.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return t.stop()
          }
        }), _callee2, void 0)
      }))), function callBackXieySdk(e, r) {
        return h.apply(this, arguments)
      }),
      "dealResponse": (k = _asyncToGenerator(a.a.mark((function _callee4(e, r, t) {
        return a.a.wrap((function _callee4$(n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              return n.abrupt("return", new Promise(function() {
                var n = _asyncToGenerator(a.a.mark((function _callee3(n, c) {
                  var d, p, f, k, h, v, m, y, g, _;
                  return a.a.wrap((function _callee3$(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return d = null, a.prev = 1, a.next = 4, o.a.getStorage({
                          "key": l.e
                        });
                      case 4:
                        p = a.sent, d = p.userInfo, a.next = 10;
                        break;
                      case 8:
                        a.prev = 8, a.t0 = a.catch(1);
                      case 10:
                        if (f = 0, k = void 0, h = void 0, v = void 0, m = void 0, y = void 0, !((e = e.toUpperCase()).indexOf("55AA") < 0)) {
                          a.next = 22;
                          break
                        }
                        f = 0, a.next = 37;
                        break;
                      case 22:
                        if (g = e.indexOf("55AA"), e = e.substr(g), h = e.substr(4, 2), v = e.substr(6, 2), y = 2 * s.a.ex16hex(e.substr(8, 2)), m = e.substr(10, y), e.substr(10 + y), f = s.a.ex16hex("01" === v ? "0" : "1"), k = u["" + v], !d) {
                          a.next = 37;
                          break
                        }
                        return a.next = 34, i.a.callBackSdk({
                          "seqNum": t,
                          "protocolVersion": "v2",
                          "excuteStatus": v,
                          "huid": d.huid,
                          "passwordSecretKey": "",
                          "instructionNum": h,
                          "commandSecretKey": m,
                          "pid": r.lockId,
                          "deviceTime": "",
                          "devicePower": ""
                        });
                      case 34:
                        _ = a.sent, f = _.errorCode, k = _.message;
                      case 37:
                        n({
                          "seqNum": t,
                          "errorCode": f,
                          "message": k,
                          "instNum": h,
                          "instCode": v,
                          "secretContent": m
                        });
                      case 38:
                      case "end":
                        return a.stop()
                    }
                  }), _callee3, void 0, [
                    [1, 8]
                  ])
                })));
                return function(e, r) {
                  return n.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return n.stop()
          }
        }), _callee4, void 0)
      }))), function dealResponse(e, r, t) {
        return k.apply(this, arguments)
      }),
      "dealBindDoorResponse": (f = _asyncToGenerator(a.a.mark((function _callee8(e, r, t) {
        t.instCode;
        var n = t.instNum,
          c = t.seqNum;
        return a.a.wrap((function _callee8$(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", new Promise(function() {
                var t = _asyncToGenerator(a.a.mark((function _callee7(t, u) {
                  var d, p, f, k, h, m, y;
                  return a.a.wrap((function _callee7$(u) {
                    for (;;) switch (u.prev = u.next) {
                      case 0:
                        return d = 0, p = "", u.next = 4, i.a.aesDecrypt2({
                          "data": e
                        });
                      case 4:
                        if (0 !== (f = u.sent).errorCode) {
                          u.next = 22;
                          break
                        }
                        return k = f ? f.data : "", h = k.substr(0, 90), m = k.substr(90, 32), y = k.substr(122), u.next = 12, s.a.crc16Dnp(h + m);
                      case 12:
                        if (u.sent === y) {
                          u.next = 18;
                          break
                        }
                        d = 900, p = "crc校验报错", u.next = 22;
                        break;
                      case 18:
                        return u.next = 20, v.callBackXieySdk({
                          "seqNum": c,
                          "secretContent": h,
                          "instNum": n
                        }, r);
                      case 20:
                        0 === u.sent.errorCode ? o.a.getStorage({
                          "key": l.d,
                          "success": function() {
                            var e = _asyncToGenerator(a.a.mark((function _callee5(e) {
                              var t;
                              return a.a.wrap((function _callee5$(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return (t = e.data) ? t[r.lockId] = m : t = _defineProperty({}, r.lockId, m), n.next = 4, o.a.setStorage({
                                      "key": l.d,
                                      "data": t
                                    });
                                  case 4:
                                  case "end":
                                    return n.stop()
                                }
                              }), _callee5, void 0)
                            })));
                            return function success(r) {
                              return e.apply(this, arguments)
                            }
                          }(),
                          "fail": function() {
                            var e = _asyncToGenerator(a.a.mark((function _callee6(e) {
                              return a.a.wrap((function _callee6$(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.a.setStorage({
                                      "key": l.d,
                                      "data": _defineProperty({}, r.lockId, m)
                                    });
                                  case 2:
                                  case "end":
                                    return e.stop()
                                }
                              }), _callee6, void 0)
                            })));
                            return function fail(r) {
                              return e.apply(this, arguments)
                            }
                          }()
                        }) : (d = 901, p = "回调协议平台错误");
                      case 22:
                        t({
                          "errorCode": d,
                          "message": p
                        });
                      case 23:
                      case "end":
                        return u.stop()
                    }
                  }), _callee7, void 0)
                })));
                return function(e, r) {
                  return t.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return t.stop()
          }
        }), _callee8, void 0)
      }))), function dealBindDoorResponse(e, r, t) {
        return f.apply(this, arguments)
      }),
      "dealA1CodeResponse": (p = _asyncToGenerator(a.a.mark((function _callee10(e, r) {
        return a.a.wrap((function _callee10$(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", new Promise(function() {
                var t = _asyncToGenerator(a.a.mark((function _callee9(t, n) {
                  var c, u, p, f, k, h, v, m, y, g, _, x, C;
                  return a.a.wrap((function _callee9$(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return c = r.lockId, u = "", p = "", f = "", k = "", n.next = 8, i.a.aesDecrypt2({
                          "data": e.secretContent
                        });
                      case 8:
                        return 0 === (h = n.sent).errorCode && (p = h.data), v = p.substr(0, 2), u = p.substr(2, 4), n.next = 14, o.a.getStorage({
                          "key": l.d
                        });
                      case 14:
                        return m = n.sent, y = m.data, g = "ffffffffffff", 1 === r.indexType && (g = (g = r.password + "ffffff").substring(0, 12)), n.next = 20, i.a.aesDecrypt({
                          "data": u + g,
                          "key": y[c]
                        });
                      case 20:
                        return 0 === (_ = n.sent).errorCode && (f = _.data), n.next = 24, s.a.crc16Dnp(v + f);
                      case 24:
                        return x = n.sent, n.next = 27, i.a.aesEncrypt2({
                          "data": v + f + x
                        });
                      case 27:
                        0 === (C = n.sent).errorCode && (k = C.data), t(d({}, e, {
                          "instructionNum": e.instNum,
                          "instructionContent": k
                        }));
                      case 30:
                      case "end":
                        return n.stop()
                    }
                  }), _callee9, void 0)
                })));
                return function(e, r) {
                  return t.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return t.stop()
          }
        }), _callee10, void 0)
      }))), function dealA1CodeResponse(e, r) {
        return p.apply(this, arguments)
      })
    };
    r.a = v
  }, function(e, r, t) {
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c),
      s = t(3),
      i = t(2),
      u = t(4),
      l = t(8),
      d = void 0,
      p = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      };

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var f, k, h, v, m, y, g, _, x, C, w, b = {
      "getBindUserLockCmd": (w = _asyncToGenerator(a.a.mark((function _callee4(e) {
        return a.a.wrap((function _callee4$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee3(r, t) {
                  var n, c, f, k, h, v, m, y, g;
                  return a.a.wrap((function _callee3$(_) {
                    for (;;) switch (_.prev = _.next) {
                      case 0:
                        return _.next = 2, o.a.getStorage({
                          "key": i.e
                        });
                      case 2:
                        return n = _.sent, c = n.data, _.next = 6, l.default.registerUser(c);
                      case 6:
                        if (f = _.sent, k = f.errorCode, h = f.message, v = f.data, 0 !== k) {
                          _.next = 19;
                          break
                        }
                        return _.next = 13, o.a.getStorage({
                          "key": i.a
                        });
                      case 13:
                        m = _.sent, y = m.data, g = e.pid, o.a.getStorage({
                          "key": i.f,
                          "success": function() {
                            var n = _asyncToGenerator(a.a.mark((function _callee(n) {
                              var c, l, f, k;
                              return a.a.wrap((function _callee$(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    if (!(c = n.data)[g]) {
                                      a.next = 5;
                                      break
                                    }
                                    t(), a.next = 17;
                                    break;
                                  case 5:
                                    return a.next = 7, s.a.registerUserLock(p({
                                      "huid": v.huid,
                                      "bid": y.bid,
                                      "appId": y.appId
                                    }, e));
                                  case 7:
                                    if (l = a.sent, c[g] = l.data, 0 !== l.errorCode) {
                                      a.next = 17;
                                      break
                                    }
                                    return a.next = 12, o.a.setStorage({
                                      "key": i.f,
                                      "data": c
                                    });
                                  case 12:
                                    return f = l.data, a.next = 15, u.a.splicingCmd(f);
                                  case 15:
                                    k = a.sent, r({
                                      "appInfo": y,
                                      "userInfo": v,
                                      "seqNum": f.seqNum,
                                      "cmd": k
                                    });
                                  case 17:
                                  case "end":
                                    return a.stop()
                                }
                              }), _callee, d)
                            })));
                            return function success(e) {
                              return n.apply(this, arguments)
                            }
                          }(),
                          "fail": function() {
                            var t = _asyncToGenerator(a.a.mark((function _callee2(t) {
                              var n, c, l;
                              return a.a.wrap((function _callee2$(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.a.registerUserLock(p({
                                      "huid": v.huid,
                                      "bid": y.bid,
                                      "appId": y.appId
                                    }, e));
                                  case 2:
                                    if (0 !== (n = t.sent).errorCode) {
                                      t.next = 11;
                                      break
                                    }
                                    return t.next = 6, o.a.setStorage({
                                      "key": i.f,
                                      "data": (a = {}, d = g, f = n.data, d in a ? Object.defineProperty(a, d, {
                                        "value": f,
                                        "enumerable": !0,
                                        "configurable": !0,
                                        "writable": !0
                                      }) : a[d] = f, a)
                                    });
                                  case 6:
                                    return c = n.data, t.next = 9, u.a.splicingCmd(c);
                                  case 9:
                                    l = t.sent, r({
                                      "appInfo": y,
                                      "userInfo": v,
                                      "seqNum": c.seqNum,
                                      "cmd": l
                                    });
                                  case 11:
                                  case "end":
                                    return t.stop()
                                }
                                var a, d, f
                              }), _callee2, d)
                            })));
                            return function fail(e) {
                              return t.apply(this, arguments)
                            }
                          }()
                        }), _.next = 20;
                        break;
                      case 19:
                        r({
                          "errorCode": k,
                          "message": h,
                          "data": data
                        });
                      case 20:
                      case "end":
                        return _.stop()
                    }
                  }), _callee3, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee4, d)
      }))), function getBindUserLockCmd(e) {
        return w.apply(this, arguments)
      }),
      "getOpenDoorCmd": (C = _asyncToGenerator(a.a.mark((function _callee6(e) {
        return a.a.wrap((function _callee6$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee5(r, t) {
                  var n, c, l, f, k, h, v;
                  return a.a.wrap((function _callee5$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return l = t.sent, f = l.data, t.next = 10, s.a.getOpenDoorParam(p({
                          "huid": f.huid,
                          "bid": c.bid,
                          "appId": c.appId
                        }, e));
                      case 10:
                        if (0 !== (k = t.sent).errorCode) {
                          t.next = 19;
                          break
                        }
                        return h = k.data, t.next = 15, u.a.splicingCmd(h);
                      case 15:
                        v = t.sent, r({
                          "errorCode": k.errorCode,
                          "seqNum": h.seqNum,
                          "cmd": v
                        }), t.next = 20;
                        break;
                      case 19:
                        r(k);
                      case 20:
                      case "end":
                        return t.stop()
                    }
                  }), _callee5, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee6, d)
      }))), function getOpenDoorCmd(e) {
        return C.apply(this, arguments)
      }),
      "getA1Cmd": (x = _asyncToGenerator(a.a.mark((function _callee8(e) {
        return a.a.wrap((function _callee8$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee7(r, t) {
                  var n;
                  return a.a.wrap((function _callee7$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, u.a.splicingCmd(e);
                      case 2:
                        n = t.sent, r({
                          "errorCode": e.errorCode,
                          "seqNum": e.seqNum,
                          "cmd": n
                        });
                      case 4:
                      case "end":
                        return t.stop()
                    }
                  }), _callee7, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee8, d)
      }))), function getA1Cmd(e) {
        return x.apply(this, arguments)
      }),
      "getBindIndexCmd": (_ = _asyncToGenerator(a.a.mark((function _callee10(e) {
        return a.a.wrap((function _callee10$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee9(r, t) {
                  var n, c, l, f, k, h, v;
                  return a.a.wrap((function _callee9$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return l = t.sent, f = l.data, t.next = 10, s.a.bindIndex(p({
                          "huid": f.huid,
                          "bid": c.bid,
                          "appId": c.appId
                        }, e));
                      case 10:
                        if (0 !== (k = t.sent).errorCode) {
                          t.next = 19;
                          break
                        }
                        return h = k.data, t.next = 15, u.a.splicingCmd(h);
                      case 15:
                        v = t.sent, r({
                          "errorCode": k.errorCode,
                          "seqNum": h.seqNum,
                          "index": h.index,
                          "cmd": v
                        }), t.next = 20;
                        break;
                      case 19:
                        r(k);
                      case 20:
                      case "end":
                        return t.stop()
                    }
                  }), _callee9, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee10, d)
      }))), function getBindIndexCmd(e) {
        return _.apply(this, arguments)
      }),
      "getReadCardCmd": (g = _asyncToGenerator(a.a.mark((function _callee12(e) {
        return a.a.wrap((function _callee12$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee11(r, t) {
                  var n, c, l, f, k, h, v;
                  return a.a.wrap((function _callee11$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return l = t.sent, f = l.data, t.next = 10, s.a.readCard(p({
                          "huid": f.huid,
                          "bid": c.bid,
                          "appId": c.appId
                        }, e));
                      case 10:
                        if (0 !== (k = t.sent).errorCode) {
                          t.next = 19;
                          break
                        }
                        return h = k.data, t.next = 15, u.a.splicingCmd(h);
                      case 15:
                        v = t.sent, r({
                          "errorCode": k.errorCode,
                          "seqNum": h.seqNum,
                          "cmd": v
                        }), t.next = 20;
                        break;
                      case 19:
                        r(k);
                      case 20:
                      case "end":
                        return t.stop()
                    }
                  }), _callee11, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee12, d)
      }))), function getReadCardCmd(e) {
        return g.apply(this, arguments)
      }),
      "setCpuCardCmd": (y = _asyncToGenerator(a.a.mark((function _callee14(e) {
        return a.a.wrap((function _callee14$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee13(r, t) {
                  var n, c, l, f, k, h, v;
                  return a.a.wrap((function _callee13$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return l = t.sent, f = l.data, t.next = 10, s.a.setCupCard(p({
                          "huid": f.huid,
                          "bid": c.bid,
                          "appId": c.appId
                        }, e));
                      case 10:
                        if (0 !== (k = t.sent).errorCode) {
                          t.next = 19;
                          break
                        }
                        return h = k.data, t.next = 15, u.a.splicingCmd(h);
                      case 15:
                        v = t.sent, r(p({}, h, {
                          "errorCode": k.errorCode,
                          "cmd": v
                        })), t.next = 20;
                        break;
                      case 19:
                        r(k);
                      case 20:
                      case "end":
                        return t.stop()
                    }
                  }), _callee13, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee14, d)
      }))), function setCpuCardCmd(e) {
        return y.apply(this, arguments)
      }),
      "getUnBindIndexCmd": (m = _asyncToGenerator(a.a.mark((function _callee16(e) {
        return a.a.wrap((function _callee16$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee15(r, t) {
                  var n, c, l, f, k, h, v;
                  return a.a.wrap((function _callee15$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return l = t.sent, f = l.data, t.next = 10, s.a.unBindIndex(p({
                          "huid": f.huid,
                          "bid": c.bid,
                          "appId": c.appId
                        }, e));
                      case 10:
                        if (0 !== (k = t.sent).errorCode) {
                          t.next = 19;
                          break
                        }
                        return h = k.data, t.next = 15, u.a.splicingCmd(h);
                      case 15:
                        v = t.sent, r({
                          "errorCode": k.errorCode,
                          "seqNum": h.seqNum,
                          "cmd": v
                        }), t.next = 20;
                        break;
                      case 19:
                        r(k);
                      case 20:
                      case "end":
                        return t.stop()
                    }
                  }), _callee15, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee16, d)
      }))), function getUnBindIndexCmd(e) {
        return m.apply(this, arguments)
      }),
      "getFrozenIndexCmd": (v = _asyncToGenerator(a.a.mark((function _callee18(e) {
        return a.a.wrap((function _callee18$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee17(r, t) {
                  var n, c, l, f, k, h, v;
                  return a.a.wrap((function _callee17$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return l = t.sent, f = l.data, t.next = 10, s.a.freezeIndex(p({
                          "huid": f.huid,
                          "bid": c.bid,
                          "appId": c.appId
                        }, e));
                      case 10:
                        if (0 !== (k = t.sent).errorCode) {
                          t.next = 19;
                          break
                        }
                        return h = k.data, t.next = 15, u.a.splicingCmd(h);
                      case 15:
                        v = t.sent, r({
                          "errorCode": k.errorCode,
                          "seqNum": h.seqNum,
                          "cmd": v
                        }), t.next = 20;
                        break;
                      case 19:
                        r(k);
                      case 20:
                      case "end":
                        return t.stop()
                    }
                  }), _callee17, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee18, d)
      }))), function getFrozenIndexCmd(e) {
        return v.apply(this, arguments)
      }),
      "getThawIndexCmd": (h = _asyncToGenerator(a.a.mark((function _callee20(e) {
        return a.a.wrap((function _callee20$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee19(r, t) {
                  var n, c, l, f, k, h, v;
                  return a.a.wrap((function _callee19$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return l = t.sent, f = l.data, t.next = 10, s.a.unfreezeIndex(p({
                          "huid": f.huid,
                          "bid": c.bid,
                          "appId": c.appId
                        }, e));
                      case 10:
                        if (0 !== (k = t.sent).errorCode) {
                          t.next = 19;
                          break
                        }
                        return h = k.data, t.next = 15, u.a.splicingCmd(h);
                      case 15:
                        v = t.sent, r({
                          "errorCode": k.errorCode,
                          "seqNum": h.seqNum,
                          "cmd": v
                        }), t.next = 20;
                        break;
                      case 19:
                        r(k);
                      case 20:
                      case "end":
                        return t.stop()
                    }
                  }), _callee19, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee20, d)
      }))), function getThawIndexCmd(e) {
        return h.apply(this, arguments)
      }),
      "delDynamicPwdCmd": (k = _asyncToGenerator(a.a.mark((function _callee22(e) {
        return a.a.wrap((function _callee22$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee21(r, t) {
                  var n, c, l, f, k, h, v;
                  return a.a.wrap((function _callee21$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return l = t.sent, f = l.data, t.next = 10, s.a.delDynamicPwd(p({
                          "huid": f.huid,
                          "bid": c.bid,
                          "appId": c.appId
                        }, e));
                      case 10:
                        if (0 !== (k = t.sent).errorCode) {
                          t.next = 19;
                          break
                        }
                        return h = k.data, t.next = 15, u.a.splicingCmd(h);
                      case 15:
                        v = t.sent, r({
                          "errorCode": k.errorCode,
                          "seqNum": h.seqNum,
                          "cmd": v
                        }), t.next = 20;
                        break;
                      case 19:
                        r(k);
                      case 20:
                      case "end":
                        return t.stop()
                    }
                  }), _callee21, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee22, d)
      }))), function delDynamicPwdCmd(e) {
        return k.apply(this, arguments)
      }),
      "cleanCpuCardCmd": (f = _asyncToGenerator(a.a.mark((function _callee24(e) {
        return a.a.wrap((function _callee24$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee23(r, t) {
                  var n, c, l, f, k, h, v;
                  return a.a.wrap((function _callee23$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return l = t.sent, f = l.data, t.next = 10, s.a.cleanCpuCard(p({
                          "huid": f.huid,
                          "bid": c.bid,
                          "appId": c.appId
                        }, e));
                      case 10:
                        if (0 !== (k = t.sent).errorCode) {
                          t.next = 19;
                          break
                        }
                        return h = k.data, t.next = 15, u.a.splicingCmd(h);
                      case 15:
                        v = t.sent, r({
                          "errorCode": k.errorCode,
                          "seqNum": h.seqNum,
                          "cmd": v
                        }), t.next = 20;
                        break;
                      case 19:
                        r(k);
                      case 20:
                      case "end":
                        return t.stop()
                    }
                  }), _callee23, d)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee24, d)
      }))), function cleanCpuCardCmd(e) {
        return f.apply(this, arguments)
      })
    };
    r.a = b
  }, function(e, r, t) {
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c),
      s = t(4),
      i = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var u = function() {
        function BlueConnectService(e) {
          var r = this;
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BlueConnectService), this.serviceId = "0000FEE0-0000-1000-8000-00805F9B34FB", this.notifyCharacteristicId = "0000FEE1-0000-1000-8000-00805F9B34FB", this.writeCharacteristicId = "0000FEE2-0000-1000-8000-00805F9B34FB", this.setLockInfo = function(e) {
            r._lockMac = e.lockMac, r._lockId = e.lockId
          }, this.getLockInfo = function() {
            return {
              "lockId": r._lockId,
              "lockMac": r._lockMac
            }
          }, this.callBack = function(e) {
            r._callBack && r._callBack(e)
          }, this._lockMac = e.lockMac, this._deviceId = e.deviceId, this._lockId = e.lockId, this._sendCmd = e.sendCmd, this._params = e.params, this._callBack = e.callBack, this._onBLECharacteristicValueChange = e.onBLECharacteristicValueChange
        }
        return i(BlueConnectService, [{
          "key": "getBLEDeviceServices",
          "value": function getBLEDeviceServices() {
            var e = this;
            o.a.getBLEDeviceServices({
              "deviceId": e._deviceId,
              "success": function success(r) {
                e.getBLEDeviceCharacteristics()
              },
              "fail": function fail(e) {}
            })
          }
        }, {
          "key": "getBLEDeviceCharacteristics",
          "value": function getBLEDeviceCharacteristics() {
            var e = this;
            o.a.getBLEDeviceCharacteristics({
              "deviceId": e._deviceId,
              "serviceId": e.serviceId,
              "success": function success(r) {
                e.notifyBLECharacteristicValueChange()
              },
              "fail": function fail(e) {}
            })
          }
        }, {
          "key": "createBLEConnection",
          "value": function createBLEConnection(e) {
            var r, t, n = this;
            n._connectTimer || (n._connectTimer = setTimeout((function() {
              n.callBack({
                "errorCode": -2,
                "message": "连接超时:15000"
              })
            }), 15e3)), o.a.createBLEConnection({
              "deviceId": n._deviceId,
              "success": (t = _asyncToGenerator(a.a.mark((function _callee(e) {
                return a.a.wrap((function _callee$(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (clearTimeout(n._connectTimer), !n._lockId) {
                        e.next = 4;
                        break
                      }
                      return e.next = 4, s.a.setMacMapDeviceId(n._lockId, n._deviceId);
                    case 4:
                      n.getBLEDeviceServices();
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }), _callee, this)
              }))), function success(e) {
                return t.apply(this, arguments)
              }),
              "fail": (r = _asyncToGenerator(a.a.mark((function _callee2(e) {
                return a.a.wrap((function _callee2$(r) {
                  for (;;) switch (r.prev = r.next) {
                    case 0:
                      if (-1 !== e.errCode) {
                        r.next = 6;
                        break
                      }
                      if (clearTimeout(n._connectTimer), !n._lockId) {
                        r.next = 5;
                        break
                      }
                      return r.next = 5, s.a.setMacMapDeviceId(n._lockId, n._deviceId);
                    case 5:
                      n.getBLEDeviceServices();
                    case 6:
                    case "end":
                      return r.stop()
                  }
                }), _callee2, this)
              }))), function fail(e) {
                return r.apply(this, arguments)
              })
            })
          }
        }, {
          "key": "notifyBLECharacteristicValueChange",
          "value": function notifyBLECharacteristicValueChange() {
            var e = this;
            e._notifyTimer || (e._notifyTimer = setTimeout((function() {
              e.callBack({
                "errorCode": -3,
                "message": "启用低功耗蓝牙设备特征值变化超时"
              })
            }), 15e3)), o.a.notifyBLECharacteristicValueChange({
              "state": !0,
              "deviceId": e._deviceId,
              "serviceId": e.serviceId,
              "characteristicId": e.notifyCharacteristicId,
              "success": function success(r) {
                clearTimeout(e._notifyTimer), e._onBLECharacteristicValueChange(), e._sendCmd(e._deviceId)
              },
              "fail": function fail(r) {
                e.notifyBLECharacteristicValueChange()
              }
            })
          }
        }, {
          "key": "clearReceiveNotification",
          "value": function clearReceiveNotification() {
            ;
            ""
          }
        }]), BlueConnectService
      }(),
      l = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function BlueSearchService_asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var d = function judgeDeviceByLockMac(e, r) {
        var t = r.replace(/:/g, "").substr(4),
          n = e.name.split(":")[1] || "";
        return t.toLocaleLowerCase() === n.toLocaleLowerCase()
      },
      p = {},
      f = function() {
        function blueService(e) {
          var r = this;
          ! function BlueSearchService_classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, blueService), this.serviceId = "0000FEE0-0000-1000-8000-00805F9B34FB", this.begin = BlueSearchService_asyncToGenerator(a.a.mark((function _callee2() {
            var e;
            return a.a.wrap((function _callee2$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (e = r, o.a.openBluetoothAdapter) {
                    t.next = 4;
                    break
                  }
                  return o.a.showToast({
                    "title": "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
                  }), t.abrupt("return");
                case 4:
                  o.a.openBluetoothAdapter({
                    "success": function() {
                      var t = BlueSearchService_asyncToGenerator(a.a.mark((function _callee() {
                        return a.a.wrap((function _callee$(r) {
                          for (;;) switch (r.prev = r.next) {
                            case 0:
                              e._lockId && e._lockMac ? e.getBlueService() : (e.searchbluetooth(), e.onBluetoothDeviceFound());
                            case 1:
                            case "end":
                              return r.stop()
                          }
                        }), _callee, r)
                      })));
                      return function success() {
                        return t.apply(this, arguments)
                      }
                    }(),
                    "fail": function fail(r) {
                      e.callBack({
                        "errorCode": -999,
                        "message": "开启蓝牙失败"
                      })
                    }
                  });
                case 5:
                case "end":
                  return t.stop()
              }
            }), _callee2, r)
          }))), this.getBlueService = BlueSearchService_asyncToGenerator(a.a.mark((function _callee3() {
            var e, t;
            return a.a.wrap((function _callee3$(n) {
              for (;;) switch (n.prev = n.next) {
                case 0:
                  return e = r, n.next = 3, s.a.checkHasConnectDevive(r._lockId);
                case 3:
                  (t = n.sent) ? (p[e._lockMac.toLocaleLowerCase()] = t, e._onBlueFoundBack && e._onBlueFoundBack(e._lockMac.toLocaleLowerCase(), p)) : o.a.getBluetoothDevices({
                    "success": function success(t) {
                      var n = t.devices.filter((function(e) {
                        return d(e, r._lockMac)
                      }));
                      if (n.length > 0) {
                        var a = n[0];
                        p[e._lockMac.toLocaleLowerCase()] = a.deviceId, e._onBlueFoundBack && e._onBlueFoundBack(e._lockMac.toLocaleLowerCase(), p)
                      } else r.searchbluetooth(), r.onBluetoothDeviceFound()
                    }
                  });
                case 5:
                case "end":
                  return n.stop()
              }
            }), _callee3, r)
          }))), this.callBack = function(e) {
            r._callBack && r._callBack(e)
          }, this._lockMac = e.lockMac, this._lockId = e.lockId, this._callBack = e.callBack, this._onBlueFoundBack = e.onBlueFoundBack, this.blueConnectServiceIns = new u({
            "lockMac": e.lockMac,
            "lockId": e.lockId
          })
        }
        return l(blueService, [{
          "key": "searchbluetooth",
          "value": function searchbluetooth() {
            var e = this;
            o.a.stopBluetoothDevicesDiscovery({}), o.a.getBluetoothAdapterState({
              "success": function success(r) {
                r.available && !r.discovering && o.a.startBluetoothDevicesDiscovery({
                  "success": function success(r) {
                    e._lockMac && (e._scanDeviceTimer = setTimeout((function() {
                      e.callBack({
                        "errorCode": -1,
                        "message": "扫描超时"
                      }), o.a.stopBluetoothDevicesDiscovery({})
                    }), 15e3))
                  },
                  "fail": function fail(e) {
                    this.searchbluetooth()
                  }
                })
              },
              "fail": function fail(e) {
                this.searchbluetooth()
              }
            })
          }
        }, {
          "key": "onBluetoothDeviceFound",
          "value": function onBluetoothDeviceFound() {
            var e = this;
            o.a.onBluetoothDeviceFound((function(r) {
              var t = r.devices[0];
              if (e._lockMac) d(t, e._lockMac) && (p[e._lockMac.toLocaleLowerCase()] = t.deviceId, e._onBlueFoundBack && e._onBlueFoundBack(e._lockMac.toLocaleLowerCase(), p), clearTimeout(e._scanDeviceTimer), o.a.stopBluetoothDevicesDiscovery({
                "success": function success(e) {}
              }));
              else if ("HL" === t.name.substr(0, 2)) {
                var n = t.name.split(":")[1] || "";
                p[n.toLocaleLowerCase()] = t.deviceId, e._onBlueFoundBack && e._onBlueFoundBack(n.toLocaleLowerCase(), p)
              }
            }))
          }
        }]), blueService
      }(),
      k = t(5),
      h = t(6),
      v = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      m = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function BlueService_asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var y = function() {
        function BlueService(e) {
          ! function BlueService_classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BlueService), g.call(this), this.serviceId = "0000FEE0-0000-1000-8000-00805F9B34FB", this.writeCharacteristicId = "0000FEE2-0000-1000-8000-00805F9B34FB", this._deviceMap = {}, this._dealResponseCallBack = e.dealResponseCallBack, this._sendCmd = e.sendCmd, this._lockId = e.lockId, this._lockInfo = e.lockInfo, this._callBack = e.callBack, this.blueSearchServiceIns = new f({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "callBack": this._callBack,
            "onBlueFoundBack": this.onBlueFoundBack
          })
        }
        return m(BlueService, [{
          "key": "begin",
          "value": function begin() {
            this.blueSearchServiceIns.begin()
          }
        }, {
          "key": "sendDataSubpackage",
          "value": function sendDataSubpackage(e, r, t, n) {
            var a = this;
            this._deviceMap[n.toLocaleUpperCase()].seqNum = t, 0 == r && (a._deviceMap[n].data = "");
            var c = r + 40,
              i = e.slice(r, c),
              u = s.a.hex2ArrayBuffer(i);
            o.a.writeBLECharacteristicValue({
              "deviceId": n,
              "serviceId": a.serviceId,
              "characteristicId": a.writeCharacteristicId,
              "value": u,
              "success": function success(r) {
                c < e.length && a.sendDataSubpackage(e, c, a._deviceMap[n.toLocaleUpperCase()].seqNum, n)
              },
              "fail": function fail(e) {
                a.callBack({
                  "errorCode": -2,
                  "message": "写入失败，请重新写入"
                })
              }
            })
          }
        }]), BlueService
      }(),
      g = function _initialiseProps() {
        var e = this;
        this.callBack = function(r) {
          e._callBack && e._callBack(r)
        }, this.onBlueFoundBack = function(r, t) {
          var n;
          n = t[r];
          var a = new u({
            "lockMac": r,
            "deviceId": n,
            "lockId": e._lockId,
            "callBack": e.callBack,
            "sendCmd": e._sendCmd,
            "params": e._lockInfo,
            "onBLECharacteristicValueChange": e.onBLECharacteristicValueChange
          });
          a.createBLEConnection(), e._deviceMap[n] = {}, e._deviceMap[n].connectService = a
        }, this.onBLECharacteristicValueChange = function() {
          var r, t = e,
            n = 0;
          o.a.onBLECharacteristicValueChange((r = BlueService_asyncToGenerator(a.a.mark((function _callee2(r) {
            var c, o, i, u, l, d, p, f, m, y, g, _;
            return a.a.wrap((function _callee2$(x) {
              for (;;) switch (x.prev = x.next) {
                case 0:
                  for (c = r.deviceId, o = t._deviceMap[c].connectService._lockId, i = t._deviceMap[c].connectService._lockMac, u = t._deviceMap[c].connectService._params, t._deviceMap[c].data = t._deviceMap[c].data || "", l = r.value, d = new DataView(l), p = d.byteLength, f = 0; f < p; f++) m = (m = d.getUint8(f).toString(16)).length > 1 ? m : "0" + m, t._deviceMap[c].data += m;
                  if (0 === t._deviceMap[c].data.indexOf("55aa") && 0 === n && (n = s.a.ex16hex(t._deviceMap[c].data.substr(8, 2))), t._deviceMap[c].data.length !== 2 * n + 14) {
                    x.next = 31;
                    break
                  }
                  return n = 0, x.next = 14, k.a.dealResponse(t._deviceMap[c].data, {
                    "lockMac": i,
                    "lockId": o
                  }, e._deviceMap[c].seqNum);
                case 14:
                  if (y = x.sent, t._deviceMap[c].data = "", "" + y.errorCode != "0") {
                    x.next = 27;
                    break
                  }
                  if ("" + y.instNum != "A1") {
                    x.next = 24;
                    break
                  }
                  return x.next = 20, k.a.dealA1CodeResponse(y, v({
                    "lockId": o,
                    "lockMac": i
                  }, u));
                case 20:
                  g = x.sent, h.a.getA1Cmd(g).then(function() {
                    var r = BlueService_asyncToGenerator(a.a.mark((function _callee(r) {
                      var t = r.cmd,
                        n = r.seqNum;
                      return a.a.wrap((function _callee$(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            e._deviceMap[c].seqNum = n, e.sendDataSubpackage(t, 0, n, c);
                          case 2:
                          case "end":
                            return r.stop()
                        }
                      }), _callee, e)
                    })));
                    return function(e) {
                      return r.apply(this, arguments)
                    }
                  }()), x.next = 25;
                  break;
                case 24:
                  e._dealResponseCallBack(y, c);
                case 25:
                  x.next = 31;
                  break;
                case 27:
                  return x.next = 29, k.a.callBackXieySdk(y, {
                    "lockMac": i,
                    "lockId": o
                  });
                case 29:
                  _ = x.sent, t.callBack({
                    "errorCode": _.errorCode,
                    "message": _.message
                  });
                case 31:
                case "end":
                  return x.stop()
              }
            }), _callee2, e)
          }))), function(e) {
            return r.apply(this, arguments)
          }))
        }
      };
    r.a = y
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c),
      s = t(3),
      i = t(2),
      u = t(4),
      l = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      };

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var d, p, f, k = {
      "registerApp": (f = _asyncToGenerator(a.a.mark((function _callee4(e, r) {
        return a.a.wrap((function _callee4$(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", new Promise((function(t, n) {
                var c, u, d, p = (c = _asyncToGenerator(a.a.mark((function _callee(e, r) {
                  var n;
                  return a.a.wrap((function _callee$(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return a.next = 2, s.a.registerApp(e, r);
                      case 2:
                        if (0 !== (n = a.sent).errorCode) {
                          a.next = 11;
                          break
                        }
                        return a.next = 6, o.a.setStorage({
                          "key": i.a,
                          "data": l({}, e, n.data)
                        });
                      case 6:
                        return a.next = 8, o.a.setStorage({
                          "key": i.b,
                          "data": {}
                        });
                      case 8:
                        t({
                          "errorCode": 0,
                          "message": "注册app成功",
                          "data": l({}, e, n.data)
                        }), a.next = 14;
                        break;
                      case 11:
                        return a.next = 13, o.a.setStorage({
                          "key": i.a,
                          "data": e
                        });
                      case 13:
                        t({
                          "errorCode": -1,
                          "message": "注册app失败",
                          "data": e
                        });
                      case 14:
                      case "end":
                        return a.stop()
                    }
                  }), _callee, this)
                }))), function registerAppAction(e, r) {
                  return c.apply(this, arguments)
                });
                o.a.getStorage({
                  "key": i.a,
                  "fail": (d = _asyncToGenerator(a.a.mark((function _callee2() {
                    return a.a.wrap((function _callee2$(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          p(e, r);
                        case 1:
                        case "end":
                          return t.stop()
                      }
                    }), _callee2, void 0)
                  }))), function fail() {
                    return d.apply(this, arguments)
                  }),
                  "success": (u = _asyncToGenerator(a.a.mark((function _callee3(e) {
                    var n = e.data;
                    return a.a.wrap((function _callee3$(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          n && n.appId ? t({
                            "errorCode": 0,
                            "data": n
                          }) : p(n, r);
                        case 1:
                        case "end":
                          return e.stop()
                      }
                    }), _callee3, void 0)
                  }))), function success(e) {
                    return u.apply(this, arguments)
                  })
                })
              })));
            case 1:
            case "end":
              return t.stop()
          }
        }), _callee4, void 0)
      }))), function registerApp(e, r) {
        return f.apply(this, arguments)
      }),
      "initDoorLockApp": (p = _asyncToGenerator(a.a.mark((function _callee6() {
        return a.a.wrap((function _callee6$(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.abrupt("return", new Promise(function() {
                var e = _asyncToGenerator(a.a.mark((function _callee5(e, r) {
                  var t, n, c, l, d, p, f, k;
                  return a.a.wrap((function _callee5$(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return t = r.sent, n = t.data, r.next = 6, o.a.getStorage({
                          "key": i.e
                        });
                      case 6:
                        return c = r.sent, l = c.data, d = u.a.get32RandomNum(), p = "", r.next = 12, s.a.aesEncrypt2({
                          "data": d
                        });
                      case 12:
                        return 0 === (f = r.sent).errorCode && (p = f.data), r.next = 16, s.a.initDoorLockApp({
                          "huid": l.huid,
                          "appId": n.appId,
                          "passwordDisplayKey": p
                        });
                      case 16:
                        if (0 !== (k = r.sent).errorCode) {
                          r.next = 22;
                          break
                        }
                        return r.next = 20, o.a.setStorage({
                          "key": i.c,
                          "data": d
                        });
                      case 20:
                        r.next = 23;
                        break;
                      case 22:
                        e(k);
                      case 23:
                        return r.next = 25, s.a.secretSave({
                          "huid": l.huid,
                          "appId": n.appId,
                          "secretKey22": p
                        });
                      case 25:
                        r.sent;
                      case 26:
                      case "end":
                        return r.stop()
                    }
                  }), _callee5, void 0)
                })));
                return function(r, t) {
                  return e.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return e.stop()
          }
        }), _callee6, void 0)
      }))), function initDoorLockApp() {
        return p.apply(this, arguments)
      }),
      "registerUser": (d = _asyncToGenerator(a.a.mark((function _callee10(e) {
        return a.a.wrap((function _callee10$(r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return r.abrupt("return", new Promise(function() {
                var r = _asyncToGenerator(a.a.mark((function _callee9(r, t) {
                  var n, c, u, d, p, f;
                  return a.a.wrap((function _callee9$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, o.a.getStorage({
                          "key": i.a
                        });
                      case 2:
                        return n = t.sent, c = n.data, t.next = 6, k.registerApp(c);
                      case 6:
                        if (u = t.sent, d = u.errorCode, p = u.message, f = u.data, 0 !== d) {
                          t.next = 14;
                          break
                        }
                        o.a.getStorage({
                          "key": i.e,
                          "fail": function() {
                            var t = _asyncToGenerator(a.a.mark((function _callee7() {
                              var t;
                              return a.a.wrap((function _callee7$(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, s.a.registerUser(l({
                                      "bid": f.bid
                                    }, e));
                                  case 2:
                                    if (0 !== (t = n.sent).errorCode) {
                                      n.next = 11;
                                      break
                                    }
                                    return n.next = 6, o.a.setStorage({
                                      "key": i.e,
                                      "data": t.data
                                    });
                                  case 6:
                                    return r({
                                      "errorCode": 0,
                                      "data": t.data
                                    }), n.next = 9, k.initDoorLockApp();
                                  case 9:
                                    n.next = 14;
                                    break;
                                  case 11:
                                    return n.next = 13, o.a.setStorage({
                                      "key": i.e,
                                      "data": e
                                    });
                                  case 13:
                                    r(t);
                                  case 14:
                                  case "end":
                                    return n.stop()
                                }
                              }), _callee7, void 0)
                            })));
                            return function fail() {
                              return t.apply(this, arguments)
                            }
                          }(),
                          "success": function() {
                            var t = _asyncToGenerator(a.a.mark((function _callee8(t) {
                              var n, c = t.data;
                              return a.a.wrap((function _callee8$(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (c.id && c.huid === e.huid) {
                                      t.next = 15;
                                      break
                                    }
                                    return t.next = 3, s.a.registerUser(l({
                                      "bid": f.bid
                                    }, e));
                                  case 3:
                                    if (0 !== (n = t.sent).errorCode) {
                                      t.next = 12;
                                      break
                                    }
                                    return t.next = 7, o.a.setStorage({
                                      "key": i.e,
                                      "data": n.data
                                    });
                                  case 7:
                                    return r({
                                      "errorCode": 0,
                                      "data": n.data
                                    }), t.next = 10, k.initDoorLockApp();
                                  case 10:
                                    t.next = 13;
                                    break;
                                  case 12:
                                    r(n);
                                  case 13:
                                    t.next = 16;
                                    break;
                                  case 15:
                                    r({
                                      "errorCode": 0,
                                      "data": c
                                    });
                                  case 16:
                                  case "end":
                                    return t.stop()
                                }
                              }), _callee8, void 0)
                            })));
                            return function success(e) {
                              return t.apply(this, arguments)
                            }
                          }()
                        }), t.next = 17;
                        break;
                      case 14:
                        return t.next = 16, o.a.setStorage({
                          "key": i.e,
                          "data": e
                        });
                      case 16:
                        r({
                          "errorCode": d,
                          "message": p,
                          "data": f
                        });
                      case 17:
                      case "end":
                        return t.stop()
                    }
                  }), _callee9, void 0)
                })));
                return function(e, t) {
                  return r.apply(this, arguments)
                }
              }()));
            case 1:
            case "end":
              return r.stop()
          }
        }), _callee10, void 0)
      }))), function registerUser(e) {
        return d.apply(this, arguments)
      })
    };
    r.default = k
  }, function(e, r) {
    var t, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t = function() {
      return this
    }();
    try {
      t = t || new Function("return this")()
    } catch (e) {
      "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (t = window)
    }
    e.exports = t
  }, function(e, r, t) {
    var n = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      a = t(11).default,
      c = t(8).default,
      o = t(18).default,
      s = t(19).default,
      i = t(20).default,
      u = t(21).default,
      l = t(22).default,
      d = t(23).default,
      p = t(24).default,
      f = t(25).default,
      k = t(26).default,
      h = t(27).default,
      v = t(28).default;
    e.exports = n({}, a, {
      "registerApp": c.registerApp,
      "registerUser": c.registerUser,
      "openDoor": function openDoor(e, r) {
        new o(e, r).openDoor()
      },
      "bindIndex": function bindIndex(e, r) {
        e.indexType = 2, new s(e, r).start()
      },
      "bindCard": function bindCard(e, r) {
        new i(e, r).start()
      },
      "getElectricity": function getElectricity(e, r) {
        new u(e, r).start()
      },
      "getDoorLockLog": function getDoorLockLog(e, r) {
        new l(e, r).start()
      },
      "bindIndexPwd": function bindIndexPwd(e, r) {
        e.indexType = 1, new s(e, r).start()
      },
      "unBindIndex": function unBindIndex(e, r) {
        new d(e, r).start()
      },
      "frozenIndex": function frozenIndex(e, r) {
        new p(e, r).start()
      },
      "thawIndex": function thawIndex(e, r) {
        new f(e, r).start()
      },
      "delRandomPwd": function delRandomPwd(e, r) {
        new k(e, r).start()
      },
      "cleanCpuCard": function cleanCpuCard(e, r) {
        new h(e, r).start()
      },
      "doorLockTiming": function doorLockTiming(e, r) {
        new v(e, r).start()
      }
    })
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c),
      s = t(3),
      i = t(2),
      u = t(4),
      l = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      };

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var d, p, f, k, h, v, m, y, g, _ = i.a,
      x = i.e,
      C = i.c,
      w = {
        "getKeysList": (g = _asyncToGenerator(a.a.mark((function _callee(e, r) {
          var t, n, c, i, u, d;
          return a.a.wrap((function _callee$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.prev = 0, t = e.lockId, a.next = 4, o.a.getStorage({
                  "key": _
                });
              case 4:
                return n = a.sent, c = n.data, a.next = 8, o.a.getStorage({
                  "key": x
                });
              case 8:
                return i = a.sent, u = i.data, a.next = 12, s.a.getKeysList(l({
                  "huid": u.huid,
                  "bid": c.bid,
                  "pid": t
                }, e));
              case 12:
                d = a.sent, r(d), a.next = 19;
                break;
              case 16:
                a.prev = 16, a.t0 = a.catch(0), r({
                  "errorCode": -1,
                  "message": a.t0
                });
              case 19:
              case "end":
                return a.stop()
            }
          }), _callee, void 0, [
            [0, 16]
          ])
        }))), function getKeysList(e, r) {
          return g.apply(this, arguments)
        }),
        "delDoorLock": (y = _asyncToGenerator(a.a.mark((function _callee2(e, r) {
          var t, n, c, i;
          return a.a.wrap((function _callee2$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.prev = 0, t = e.lockId, a.next = 4, o.a.getStorage({
                  "key": _
                });
              case 4:
                return n = a.sent, c = n.data, a.next = 8, s.a.delDoorLock(l({
                  "bid": c.bid,
                  "pid": t
                }, e));
              case 8:
                i = a.sent, r(i), a.next = 15;
                break;
              case 12:
                a.prev = 12, a.t0 = a.catch(0), r({
                  "errorCode": -1,
                  "message": a.t0
                });
              case 15:
              case "end":
                return a.stop()
            }
          }), _callee2, void 0, [
            [0, 12]
          ])
        }))), function delDoorLock(e, r) {
          return y.apply(this, arguments)
        }),
        "getDoorLockInfo": (m = _asyncToGenerator(a.a.mark((function _callee3(e, r) {
          var t, n;
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.prev = 0, t = e.lockId, a.next = 4, s.a.getDoorLockInfo(l({
                  "pid": t
                }, e));
              case 4:
                n = a.sent, r(n), a.next = 11;
                break;
              case 8:
                a.prev = 8, a.t0 = a.catch(0), r({
                  "errorCode": -1,
                  "message": a.t0
                });
              case 11:
              case "end":
                return a.stop()
            }
          }), _callee3, void 0, [
            [0, 8]
          ])
        }))), function getDoorLockInfo(e, r) {
          return m.apply(this, arguments)
        }),
        "getDoorLockList": (v = _asyncToGenerator(a.a.mark((function _callee4(e, r) {
          var t, n, c;
          return a.a.wrap((function _callee4$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.prev = 0, e.lockId, a.next = 4, o.a.getStorage({
                  "key": x
                });
              case 4:
                return t = a.sent, n = t.data, a.next = 8, s.a.getDoorLockList(l({
                  "huid": n.huid
                }, e));
              case 8:
                c = a.sent, r(c), a.next = 15;
                break;
              case 12:
                a.prev = 12, a.t0 = a.catch(0), r({
                  "errorCode": -1,
                  "message": a.t0
                });
              case 15:
              case "end":
                return a.stop()
            }
          }), _callee4, void 0, [
            [0, 12]
          ])
        }))), function getDoorLockList(e, r) {
          return v.apply(this, arguments)
        }),
        "getDoorLockPowerTime": (h = _asyncToGenerator(a.a.mark((function _callee5(e, r) {
          var t, n;
          return a.a.wrap((function _callee5$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.prev = 0, t = e.lockId, a.next = 4, s.a.getDoorLockPowerTime(l({
                  "pid": t
                }, e));
              case 4:
                n = a.sent, r(n), a.next = 11;
                break;
              case 8:
                a.prev = 8, a.t0 = a.catch(0), r({
                  "errorCode": -1,
                  "message": a.t0
                });
              case 11:
              case "end":
                return a.stop()
            }
          }), _callee5, void 0, [
            [0, 8]
          ])
        }))), function getDoorLockPowerTime(e, r) {
          return h.apply(this, arguments)
        }),
        "getOneTimePassword": (k = _asyncToGenerator(a.a.mark((function _callee6(e, r) {
          var t, n, c, i, d, p, f, k, h, v, m;
          return a.a.wrap((function _callee6$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.prev = 0, t = e.lockId, a.next = 4, o.a.getStorage({
                  "key": _
                });
              case 4:
                return n = a.sent, c = n.data, a.next = 8, o.a.getStorage({
                  "key": x
                });
              case 8:
                return i = a.sent, d = i.data, a.next = 12, o.a.getStorage({
                  "key": C
                });
              case 12:
                return p = a.sent, f = p.data, a.next = 16, s.a.getServerTime();
              case 16:
                return k = a.sent, h = u.a.getOneTimeEnd(k.time.replace(/-/g, "/")), a.next = 20, s.a.getDoorLockDynamicPwd(l({
                  "huid": d.huid,
                  "appId": c.appId,
                  "pid": t,
                  "type": 2,
                  "startTime": k.time,
                  "endTime": h
                }, e));
              case 20:
                if (0 !== (v = a.sent).errorCode) {
                  a.next = 28;
                  break
                }
                return a.next = 24, s.a.aes10Decrypt({
                  "data": v.data.password,
                  "key": f
                });
              case 24:
                m = a.sent, r(m), a.next = 29;
                break;
              case 28:
                r(v);
              case 29:
                a.next = 34;
                break;
              case 31:
                a.prev = 31, a.t0 = a.catch(0), r({
                  "errorCode": -1,
                  "message": a.t0
                });
              case 34:
              case "end":
                return a.stop()
            }
          }), _callee6, void 0, [
            [0, 31]
          ])
        }))), function getOneTimePassword(e, r) {
          return k.apply(this, arguments)
        }),
        "getCustomTimePassword": (f = _asyncToGenerator(a.a.mark((function _callee7(e, r) {
          var t, n, c, i, u, d, p, f, k;
          return a.a.wrap((function _callee7$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.prev = 0, t = e.lockId, a.next = 4, o.a.getStorage({
                  "key": _
                });
              case 4:
                return n = a.sent, c = n.data, a.next = 8, o.a.getStorage({
                  "key": x
                });
              case 8:
                return i = a.sent, u = i.data, a.next = 12, o.a.getStorage({
                  "key": C
                });
              case 12:
                return d = a.sent, p = d.data, a.next = 16, s.a.getDoorLockDynamicPwd(l({
                  "huid": u.huid,
                  "appId": c.appId,
                  "pid": t,
                  "type": 1
                }, e));
              case 16:
                if (0 !== (f = a.sent).errorCode) {
                  a.next = 24;
                  break
                }
                return a.next = 20, s.a.aes10Decrypt({
                  "data": f.data.password,
                  "key": p
                });
              case 20:
                k = a.sent, r(k), a.next = 25;
                break;
              case 24:
                r(f);
              case 25:
                a.next = 30;
                break;
              case 27:
                a.prev = 27, a.t0 = a.catch(0), r({
                  "errorCode": -1,
                  "message": a.t0
                });
              case 30:
              case "end":
                return a.stop()
            }
          }), _callee7, void 0, [
            [0, 27]
          ])
        }))), function getCustomTimePassword(e, r) {
          return f.apply(this, arguments)
        }),
        "getForeverPwd": (p = _asyncToGenerator(a.a.mark((function _callee8(e, r) {
          var t, n, c, i, d, p, f, k, h;
          return a.a.wrap((function _callee8$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.prev = 0, t = e.lockId, a.next = 4, o.a.getStorage({
                  "key": _
                });
              case 4:
                return n = a.sent, c = n.data, a.next = 8, o.a.getStorage({
                  "key": x
                });
              case 8:
                return i = a.sent, d = i.data, a.next = 12, o.a.getStorage({
                  "key": C
                });
              case 12:
                return p = a.sent, f = p.data, a.next = 16, s.a.getDoorLockDynamicPwd(l({
                  "huid": d.huid,
                  "appId": c.appId,
                  "pid": t,
                  "type": 3,
                  "startTime": u.a.getCurrentTime(),
                  "endTime": ""
                }, e));
              case 16:
                if (0 !== (k = a.sent).errorCode) {
                  a.next = 24;
                  break
                }
                return a.next = 20, s.a.aes10Decrypt({
                  "data": k.data.password,
                  "key": f
                });
              case 20:
                h = a.sent, r(h), a.next = 25;
                break;
              case 24:
                r(k);
              case 25:
                a.next = 30;
                break;
              case 27:
                a.prev = 27, a.t0 = a.catch(0), r({
                  "errorCode": -1,
                  "message": a.t0
                });
              case 30:
              case "end":
                return a.stop()
            }
          }), _callee8, void 0, [
            [0, 27]
          ])
        }))), function getForeverPwd(e, r) {
          return p.apply(this, arguments)
        }),
        "getCyclePwd": (d = _asyncToGenerator(a.a.mark((function _callee9(e, r) {
          var t, n, c, i, u, d, p, f, k;
          return a.a.wrap((function _callee9$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return a.prev = 0, t = e.lockId, a.next = 4, o.a.getStorage({
                  "key": _
                });
              case 4:
                return n = a.sent, c = n.data, a.next = 8, o.a.getStorage({
                  "key": x
                });
              case 8:
                return i = a.sent, u = i.data, a.next = 12, o.a.getStorage({
                  "key": C
                });
              case 12:
                return d = a.sent, p = d.data, a.next = 16, s.a.getDoorLockDynamicPwd(l({
                  "huid": u.huid,
                  "appId": c.appId,
                  "pid": t,
                  "type": 5
                }, e));
              case 16:
                if (0 !== (f = a.sent).errorCode) {
                  a.next = 24;
                  break
                }
                return a.next = 20, s.a.aes10Decrypt({
                  "data": f.data.password,
                  "key": p
                });
              case 20:
                k = a.sent, r(k), a.next = 25;
                break;
              case 24:
                r(f);
              case 25:
                a.next = 30;
                break;
              case 27:
                a.prev = 27, a.t0 = a.catch(0), r({
                  "errorCode": -1,
                  "message": a.t0
                });
              case 30:
              case "end":
                return a.stop()
            }
          }), _callee9, void 0, [
            [0, 27]
          ])
        }))), function getCyclePwd(e, r) {
          return d.apply(this, arguments)
        })
      };
    r.default = w
  }, function(e, r, t) {
    var n = function() {
        return this
      }() || {
        "Function": Function,
        "Boolean": Boolean,
        "Object": Object,
        "Number": Number,
        "Array": Array,
        "Date": Date,
        "String": String,
        "Symbol": Symbol,
        "Error": Error,
        "TypeError": TypeError,
        "Map": Map,
        "Set": Set,
        "WeakMap": WeakMap,
        "WeakSet": WeakSet,
        "ArrayBuffer": ArrayBuffer,
        "Math": Math,
        "Promise": Promise,
        "RegExp": RegExp,
        "DataView": DataView,
        "isFinite": isFinite,
        "parseInt": parseInt,
        "parseFloat": parseFloat,
        "Float32Array": Float32Array,
        "Float64Array": Float64Array,
        "Int8Array": Int8Array,
        "Int16Array": Int16Array,
        "Int32Array": Int32Array,
        "Uint8Array": Uint8Array,
        "Uint16Array": Uint16Array,
        "Uint32Array": Uint32Array,
        "Uint8ClampedArray": Uint8ClampedArray,
        "setTimeout": setTimeout,
        "clearTimeout": clearTimeout,
        "setInterval": setInterval,
        "clearInterval": clearInterval
      },
      a = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
      c = a && n.regeneratorRuntime;
    if (n.regeneratorRuntime = void 0, e.exports = t(13), a) n.regeneratorRuntime = c;
    else try {
      delete n.regeneratorRuntime
    } catch (e) {
      n.regeneratorRuntime = void 0
    }
  }, function(e, r, t) {
    (function(e) {
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      ! function(t) {
        var n = Object.prototype,
          a = n.hasOwnProperty,
          c = "function" == typeof Symbol ? Symbol : {},
          o = c.iterator || "@@iterator",
          s = c.asyncIterator || "@@asyncIterator",
          i = c.toStringTag || "@@toStringTag",
          u = "object" === r(e),
          l = t.regeneratorRuntime;
        if (l) u && (e.exports = l);
        else {
          (l = t.regeneratorRuntime = u ? e.exports : {}).wrap = wrap;
          var d = {},
            p = {};
          p[o] = function() {
            return this
          };
          var f = Object.getPrototypeOf,
            k = f && f(f(values([])));
          k && k !== n && a.call(k, o) && (p = k);
          var h = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
          GeneratorFunction.prototype = h.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[i] = GeneratorFunction.displayName = "GeneratorFunction", l.isGeneratorFunction = function(e) {
            var r = "function" == typeof e && e.constructor;
            return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name))
          }, l.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, i in e || (e[i] = "GeneratorFunction")), e.prototype = Object.create(h), e
          }, l.awrap = function(e) {
            return {
              "__await": e
            }
          }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[s] = function() {
            return this
          }, l.AsyncIterator = AsyncIterator, l.async = function(e, r, t, n) {
            var a = new AsyncIterator(wrap(e, r, t, n));
            return l.isGeneratorFunction(r) ? a : a.next().then((function(e) {
              return e.done ? e.value : a.next()
            }))
          }, defineIteratorMethods(h), h[i] = "Generator", h[o] = function() {
            return this
          }, h.toString = function() {
            return "[object Generator]"
          }, l.keys = function(e) {
            var r = [];
            for (var t in e) r.push(t);
            return r.reverse(),
              function next() {
                for (; r.length;) {
                  var t = r.pop();
                  if (t in e) return next.value = t, next.done = !1, next
                }
                return next.done = !0, next
              }
          }, l.values = values, Context.prototype = {
            "constructor": Context,
            "reset": function reset(e) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !e)
                for (var r in this) "t" === r.charAt(0) && a.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
            },
            "stop": function stop() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval
            },
            "dispatchException": function dispatchException(e) {
              if (this.done) throw e;
              var r = this;

              function handle(t, n) {
                return c.type = "throw", c.arg = e, r.next = t, n && (r.method = "next", r.arg = void 0), !!n
              }
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t],
                  c = n.completion;
                if ("root" === n.tryLoc) return handle("end");
                if (n.tryLoc <= this.prev) {
                  var o = a.call(n, "catchLoc"),
                    s = a.call(n, "finallyLoc");
                  if (o && s) {
                    if (this.prev < n.catchLoc) return handle(n.catchLoc, !0);
                    if (this.prev < n.finallyLoc) return handle(n.finallyLoc)
                  } else if (o) {
                    if (this.prev < n.catchLoc) return handle(n.catchLoc, !0)
                  } else {
                    if (!s) throw new Error("try statement without catch or finally");
                    if (this.prev < n.finallyLoc) return handle(n.finallyLoc)
                  }
                }
              }
            },
            "abrupt": function abrupt(e, r) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                  var c = n;
                  break
                }
              }
              c && ("break" === e || "continue" === e) && c.tryLoc <= r && r <= c.finallyLoc && (c = null);
              var o = c ? c.completion : {};
              return o.type = e, o.arg = r, c ? (this.method = "next", this.next = c.finallyLoc, d) : this.complete(o)
            },
            "complete": function complete(e, r) {
              if ("throw" === e.type) throw e.arg;
              return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && r && (this.next = r), d
            },
            "finish": function finish(e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var t = this.tryEntries[r];
                if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), resetTryEntry(t), d
              }
            },
            "catch": function _catch(e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var t = this.tryEntries[r];
                if (t.tryLoc === e) {
                  var n = t.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    resetTryEntry(t)
                  }
                  return a
                }
              }
              throw new Error("illegal catch attempt")
            },
            "delegateYield": function delegateYield(e, r, t) {
              return this.delegate = {
                "iterator": values(e),
                "resultName": r,
                "nextLoc": t
              }, "next" === this.method && (this.arg = void 0), d
            }
          }
        }

        function wrap(e, r, t, n) {
          var a = r && r.prototype instanceof Generator ? r : Generator,
            c = Object.create(a.prototype),
            o = new Context(n || []);
          return c._invoke = function makeInvokeMethod(e, r, t) {
            var n = "suspendedStart";
            return function invoke(a, c) {
              if ("executing" === n) throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === a) throw c;
                return doneResult()
              }
              for (t.method = a, t.arg = c;;) {
                var o = t.delegate;
                if (o) {
                  var s = maybeInvokeDelegate(o, t);
                  if (s) {
                    if (s === d) continue;
                    return s
                  }
                }
                if ("next" === t.method) t.sent = t._sent = t.arg;
                else if ("throw" === t.method) {
                  if ("suspendedStart" === n) throw n = "completed", t.arg;
                  t.dispatchException(t.arg)
                } else "return" === t.method && t.abrupt("return", t.arg);
                n = "executing";
                var i = tryCatch(e, r, t);
                if ("normal" === i.type) {
                  if (n = t.done ? "completed" : "suspendedYield", i.arg === d) continue;
                  return {
                    "value": i.arg,
                    "done": t.done
                  }
                }
                "throw" === i.type && (n = "completed", t.method = "throw", t.arg = i.arg)
              }
            }
          }(e, t, o), c
        }

        function tryCatch(e, r, t) {
          try {
            return {
              "type": "normal",
              "arg": e.call(r, t)
            }
          } catch (e) {
            return {
              "type": "throw",
              "arg": e
            }
          }
        }

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {}

        function defineIteratorMethods(e) {
          ["next", "throw", "return"].forEach((function(r) {
            e[r] = function(e) {
              return this._invoke(r, e)
            }
          }))
        }

        function AsyncIterator(e) {
          var t;
          this._invoke = function enqueue(n, c) {
            function callInvokeWithMethodAndArg() {
              return new Promise((function(t, o) {
                ! function invoke(t, n, c, o) {
                  var s = tryCatch(e[t], e, n);
                  if ("throw" !== s.type) {
                    var i = s.arg,
                      u = i.value;
                    return u && "object" === (void 0 === u ? "undefined" : r(u)) && a.call(u, "__await") ? Promise.resolve(u.__await).then((function(e) {
                      invoke("next", e, c, o)
                    }), (function(e) {
                      invoke("throw", e, c, o)
                    })) : Promise.resolve(u).then((function(e) {
                      i.value = e, c(i)
                    }), o)
                  }
                  o(s.arg)
                }(n, c, t, o)
              }))
            }
            return t = t ? t.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
          }
        }

        function maybeInvokeDelegate(e, r) {
          var t = e.iterator[r.method];
          if (void 0 === t) {
            if (r.delegate = null, "throw" === r.method) {
              if (e.iterator.return && (r.method = "return", r.arg = void 0, maybeInvokeDelegate(e, r), "throw" === r.method)) return d;
              r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return d
          }
          var n = tryCatch(t, e.iterator, r.arg);
          if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, d;
          var a = n.arg;
          return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, d) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d)
        }

        function pushTryEntry(e) {
          var r = {
            "tryLoc": e[0]
          };
          1 in e && (r.catchLoc = e[1]), 2 in e && (r.finallyLoc = e[2], r.afterLoc = e[3]), this.tryEntries.push(r)
        }

        function resetTryEntry(e) {
          var r = e.completion || {};
          r.type = "normal", delete r.arg, e.completion = r
        }

        function Context(e) {
          this.tryEntries = [{
            "tryLoc": "root"
          }], e.forEach(pushTryEntry, this), this.reset(!0)
        }

        function values(e) {
          if (e) {
            var r = e[o];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var t = -1,
                n = function next() {
                  for (; ++t < e.length;)
                    if (a.call(e, t)) return next.value = e[t], next.done = !1, next;
                  return next.value = void 0, next.done = !0, next
                };
              return n.next = n
            }
          }
          return {
            "next": doneResult
          }
        }

        function doneResult() {
          return {
            "value": void 0,
            "done": !0
          }
        }
      }(function() {
        return this
      }() || {
        "Function": Function,
        "Boolean": Boolean,
        "Object": Object,
        "Number": Number,
        "Array": Array,
        "Date": Date,
        "String": String,
        "Symbol": Symbol,
        "Error": Error,
        "TypeError": TypeError,
        "Map": Map,
        "Set": Set,
        "WeakMap": WeakMap,
        "WeakSet": WeakSet,
        "ArrayBuffer": ArrayBuffer,
        "Math": Math,
        "Promise": Promise,
        "RegExp": RegExp,
        "DataView": DataView,
        "isFinite": isFinite,
        "parseInt": parseInt,
        "parseFloat": parseFloat,
        "Float32Array": Float32Array,
        "Float64Array": Float64Array,
        "Int8Array": Int8Array,
        "Int16Array": Int16Array,
        "Int32Array": Int32Array,
        "Uint8Array": Uint8Array,
        "Uint16Array": Uint16Array,
        "Uint32Array": Uint32Array,
        "Uint8ClampedArray": Uint8ClampedArray,
        "setTimeout": setTimeout,
        "clearTimeout": clearTimeout,
        "setInterval": setInterval,
        "clearInterval": clearInterval
      })
    }).call(this, t(14)(e))
  }, function(e, r) {
    e.exports = function(e) {
      return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        "enumerable": !0,
        "get": function get() {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        "enumerable": !0,
        "get": function get() {
          return e.i
        }
      }), e.webpackPolyfill = 1), e
    }
  }, , function(e, r) {
    var t, n, a = e.exports = {};

    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined")
    }

    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined")
    }

    function runTimeout(e) {
      if (t === setTimeout) return setTimeout(e, 0);
      if ((t === defaultSetTimout || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
      try {
        return t(e, 0)
      } catch (r) {
        try {
          return t.call(null, e, 0)
        } catch (r) {
          return t.call(this, e, 0)
        }
      }
    }! function() {
      try {
        t = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
      } catch (e) {
        t = defaultSetTimout
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
      } catch (e) {
        n = defaultClearTimeout
      }
    }();
    var c, o = [],
      s = !1,
      i = -1;

    function cleanUpNextTick() {
      s && c && (s = !1, c.length ? o = c.concat(o) : i = -1, o.length && drainQueue())
    }

    function drainQueue() {
      if (!s) {
        var e = runTimeout(cleanUpNextTick);
        s = !0;
        for (var r = o.length; r;) {
          for (c = o, o = []; ++i < r;) c && c[i].run();
          i = -1, r = o.length
        }
        c = null, s = !1,
          function runClearTimeout(e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === defaultClearTimeout || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
            try {
              return n(e)
            } catch (r) {
              try {
                return n.call(null, e)
              } catch (r) {
                return n.call(this, e)
              }
            }
          }(e)
      }
    }

    function Item(e, r) {
      this.fun = e, this.array = r
    }

    function noop() {}
    a.nextTick = function(e) {
      var r = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
      o.push(new Item(e, r)), 1 !== o.length || s || runTimeout(drainQueue)
    }, Item.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = noop, a.addListener = noop, a.once = noop, a.off = noop, a.removeListener = noop, a.removeAllListeners = noop, a.emit = noop, a.prependListener = noop, a.prependOnceListener = noop, a.listeners = function(e) {
      return []
    }, a.binding = function(e) {
      throw new Error("process.binding is not supported")
    }, a.cwd = function() {
      return "/"
    }, a.chdir = function(e) {
      throw new Error("process.chdir is not supported")
    }, a.umask = function() {
      return 0
    }
  }, , function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(7),
      o = t(6),
      s = t(5),
      i = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var u = function() {
        function openDoorService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, openDoorService), l.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new c.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return i(openDoorService, [{
          "key": "openDoor",
          "value": function openDoor() {
            this.blueServiceIns.begin()
          }
        }]), openDoorService
      }(),
      l = function _initialiseProps() {
        var e, r = this;
        this.callBack = function(e) {
          r._callBack && r._callBack(e)
        }, this.sendCmd = function(e) {
          var t, n = r.lockInfo,
            c = n.lockId,
            s = n.lockMac;
          o.a.getBindUserLockCmd({
            "pid": c,
            "lockMac": s
          }).then((t = _asyncToGenerator(a.a.mark((function _callee(t) {
            var n = t.cmd,
              c = t.seqNum,
              o = t.message,
              s = t.errorCode;
            return a.a.wrap((function _callee$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n && c ? (r.seqNum = c, r.blueServiceIns.sendDataSubpackage(n, 0, c, e)) : r.callBack({
                    "message": o,
                    "errorCode": s
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }), (function() {
            r.sendOpenCmd(e)
          }))
        }, this.sendOpenCmd = function(e) {
          var t, n = r.lockInfo,
            c = n.lockId,
            s = n.lockMac;
          o.a.getOpenDoorCmd({
            "pid": c,
            "lockMac": s
          }).then((t = _asyncToGenerator(a.a.mark((function _callee2(t) {
            var n = t.errorCode,
              c = t.message,
              o = t.cmd,
              s = t.seqNum;
            return a.a.wrap((function _callee2$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o && s ? (r.seqNum = s, r.blueServiceIns.sendDataSubpackage(o, 0, s, e)) : r.callBack({
                    "errorCode": n,
                    "message": c
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee2, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.dealResponseCallBack = (e = _asyncToGenerator(a.a.mark((function _callee3(e, t) {
          var n, c, o, i, u;
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (n = r.lockInfo, c = n.lockId, o = n.lockMac, "" + e.instNum != "31") {
                  a.next = 6;
                  break
                }
                return a.next = 4, s.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": c,
                  "lockMac": o
                }, {
                  "seqNum": r.seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 4:
                "" + (i = a.sent).errorCode == "0" ? r.sendOpenCmd(t) : r.callBack(i);
              case 6:
                if ("" + e.instNum != "71") {
                  a.next = 11;
                  break
                }
                return a.next = 9, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 9:
                "" + (u = a.sent).errorCode == "0" ? r.callBack({
                  "errorCode": 0,
                  "message": "开门成功"
                }) : r.callBack(u);
              case 11:
              case "end":
                return a.stop()
            }
          }), _callee3, r)
        }))), function(r, t) {
          return e.apply(this, arguments)
        })
      };
    r.default = u
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(7),
      o = t(6),
      s = t(5),
      i = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      u = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var l = function() {
        function BindIndexService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindIndexService), d.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new c.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "lockInfo": e,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return u(BindIndexService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindIndexService
      }(),
      d = function _initialiseProps() {
        var e, r = this;
        this.callBack = function(e) {
          r._callBack && r._callBack(e)
        }, this.sendCmd = function(e) {
          var t, n = r.lockInfo,
            c = n.lockId,
            s = n.lockMac;
          o.a.getBindUserLockCmd({
            "pid": c,
            "lockMac": s
          }).then((t = _asyncToGenerator(a.a.mark((function _callee(t) {
            var n = t.cmd,
              c = t.seqNum,
              o = t.message,
              s = t.errorCode;
            return a.a.wrap((function _callee$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n && c ? (r.seqNum = c, r.blueServiceIns.sendDataSubpackage(n, 0, c, e)) : r.callBack({
                    "message": o,
                    "errorCode": s
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }), (function() {
            r.sendBindIndexCmd(e)
          }))
        }, this.sendBindIndexCmd = function(e) {
          var t, n = r.lockInfo.lockId;
          o.a.getBindIndexCmd(i({}, r.lockInfo, {
            "pid": n
          })).then((t = _asyncToGenerator(a.a.mark((function _callee2(t) {
            var n = t.errorCode,
              c = t.message,
              o = t.cmd,
              s = t.seqNum,
              i = t.index;
            return a.a.wrap((function _callee2$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o && s ? (r.seqNum = s, r.index = i, r.blueServiceIns.sendDataSubpackage(o, 0, s, e)) : r.callBack({
                    "errorCode": n,
                    "message": c
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee2, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.dealResponseCallBack = (e = _asyncToGenerator(a.a.mark((function _callee3(e, t) {
          var n, c, o;
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (n = r.lockInfo, c = n.lockId, o = n.lockMac, "" + e.instNum != "31") {
                  a.next = 6;
                  break
                }
                return a.next = 4, s.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": c,
                  "lockMac": o
                }, {
                  "seqNum": r.seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 4:
                "" + a.sent.errorCode == "0" && r.sendBindIndexCmd(t);
              case 6:
                if ("" + e.instNum != "33") {
                  a.next = 11;
                  break
                }
                return a.next = 9, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 9:
                "" + a.sent.errorCode == "0" ? r.callBack({
                  "errorCode": 0,
                  "data": {
                    "index": r.index
                  }
                }) : r.callBack({
                  "errorCode": 1,
                  "message": "指令解析失败"
                });
              case 11:
              case "end":
                return a.stop()
            }
          }), _callee3, r)
        }))), function(r, t) {
          return e.apply(this, arguments)
        })
      };
    r.default = l
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(7),
      o = t(6),
      s = t(5),
      i = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      u = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var l = function() {
        function BindCardService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindCardService), d.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new c.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return u(BindCardService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindCardService
      }(),
      d = function _initialiseProps() {
        var e, r = this;
        this.callBack = function(e) {
          r._callBack && r._callBack(e)
        }, this.sendCmd = function(e) {
          var t, n = r.lockInfo,
            c = n.lockId,
            s = n.lockMac;
          o.a.getBindUserLockCmd({
            "pid": c,
            "lockMac": s
          }).then((t = _asyncToGenerator(a.a.mark((function _callee(t) {
            var n = t.cmd,
              c = t.seqNum,
              o = t.message,
              s = t.errorCode,
              i = t.index;
            return a.a.wrap((function _callee$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n && c ? (r.seqNum = c, r.index = i, r.blueServiceIns.sendDataSubpackage(n, 0, c, e)) : r.callBack({
                    "message": o,
                    "errorCode": s
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }), (function() {
            r.sendReadCardCmd(e)
          }))
        }, this.sendReadCardCmd = function(e) {
          var t, n = r.lockInfo.lockId;
          o.a.getReadCardCmd(i({}, r.lockInfo, {
            "pid": n
          })).then((t = _asyncToGenerator(a.a.mark((function _callee2(t) {
            var n = t.errorCode,
              c = t.message,
              o = t.cmd,
              s = t.seqNum;
            return a.a.wrap((function _callee2$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o && s ? (r.seqNum = s, r.blueServiceIns.sendDataSubpackage(o, 0, s, e)) : r.callBack({
                    "message": c,
                    "errorCode": n
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee2, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.sendSetCpuCardCmd = function(e) {
          var t, n = r.lockInfo.lockId;
          o.a.setCpuCardCmd(i({}, r.lockInfo, {
            "brandSeqNum": r.seqNum,
            "pid": n
          })).then((t = _asyncToGenerator(a.a.mark((function _callee3(t) {
            var n = t.errorCode,
              c = t.cmd,
              o = t.seqNum,
              s = t.cardId,
              i = t.cardType,
              u = t.instructionStatus;
            return a.a.wrap((function _callee3$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  r.seqNum = o, r.cardId = s, r.cardType = i, 0 === n ? "" + u == "1" ? r.blueServiceIns.sendDataSubpackage(c, 0, o, e) : r.sendBindCardCmd(e) : r.callBack({
                    "errorCode": 1,
                    "message": "发起设置密钥指令失败"
                  });
                case 4:
                case "end":
                  return t.stop()
              }
            }), _callee3, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.sendBindCardCmd = function(e) {
          var t, n = r.lockInfo.lockId,
            c = "" + r.cardType == "1" ? 3 : 4;
          o.a.getBindIndexCmd(i({}, r.lockInfo, {
            "cardId": r.cardId,
            "indexType": c,
            "pid": n
          })).then((t = _asyncToGenerator(a.a.mark((function _callee4(t) {
            var n = t.errorCode,
              c = t.message,
              o = t.cmd,
              s = t.seqNum;
            return a.a.wrap((function _callee4$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o && s ? (r.seqNum = s, r.blueServiceIns.sendDataSubpackage(o, 0, s, e)) : r.callBack({
                    "errorCode": n,
                    "message": c
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee4, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.dealResponseCallBack = (e = _asyncToGenerator(a.a.mark((function _callee5(e, t) {
          var n, c, o, i, u, l, d;
          return a.a.wrap((function _callee5$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (n = r.lockInfo, c = n.lockId, o = n.lockMac, "" + e.instNum != "31") {
                  a.next = 6;
                  break
                }
                return a.next = 4, s.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": c,
                  "lockMac": o
                }, {
                  "seqNum": r.seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 4:
                "" + (i = a.sent).errorCode == "0" ? r.sendReadCardCmd(t) : r.callBack(i);
              case 6:
                if ("" + e.instNum != "43") {
                  a.next = 11;
                  break
                }
                return a.next = 9, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 9:
                "" + (u = a.sent).errorCode == "0" ? r.sendSetCpuCardCmd(t) : r.callBack(u);
              case 11:
                if ("" + e.instNum != "45") {
                  a.next = 16;
                  break
                }
                return a.next = 14, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 14:
                "" + (l = a.sent).errorCode == "0" ? r.sendBindCardCmd(t) : r.callBack(l);
              case 16:
                if ("" + e.instNum != "33") {
                  a.next = 21;
                  break
                }
                return a.next = 19, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 19:
                "" + (d = a.sent).errorCode == "0" && "" + d.instructionStatus == "1" ? r.callBack({
                  "errorCode": 0,
                  "data": {
                    "index": r.index
                  }
                }) : r.callBack(d);
              case 21:
              case "end":
                return a.stop()
            }
          }), _callee5, r)
        }))), function(r, t) {
          return e.apply(this, arguments)
        })
      };
    r.default = l
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c),
      s = t(7),
      i = t(3),
      u = t(2),
      l = t(4),
      d = t(6),
      p = t(5),
      f = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      k = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var h = function() {
        function BindIndexService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindIndexService), v.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new s.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return k(BindIndexService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindIndexService
      }(),
      v = function _initialiseProps() {
        var e, r, t = this;
        this.callBack = function(e) {
          t._callBack && t._callBack(e)
        }, this.sendCmd = function(e) {
          var r, n = t.lockInfo,
            c = n.lockId,
            o = n.lockMac;
          d.a.getBindUserLockCmd({
            "pid": c,
            "lockMac": o
          }).then((r = _asyncToGenerator(a.a.mark((function _callee(r) {
            var n = r.cmd,
              c = r.seqNum,
              o = r.message,
              s = r.errorCode;
            return a.a.wrap((function _callee$(r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  n && c ? (t.seqNum = c, t.blueServiceIns.sendDataSubpackage(n, 0, c, e)) : t.callBack({
                    "message": o,
                    "errorCode": s
                  });
                case 1:
                case "end":
                  return r.stop()
              }
            }), _callee, t)
          }))), function(e) {
            return r.apply(this, arguments)
          }), (function() {
            t.sendBindIndexCmd(e)
          }))
        }, this.sendBindIndexCmd = (e = _asyncToGenerator(a.a.mark((function _callee2(e) {
          var r, n, c, s, d, p, k, h;
          return a.a.wrap((function _callee2$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return r = t.lockInfo.lockId, a.next = 3, o.a.getStorage({
                  "key": u.a
                });
              case 3:
                return n = a.sent, c = n.data, a.next = 7, o.a.getStorage({
                  "key": u.e
                });
              case 7:
                return s = a.sent, d = s.data, a.next = 11, i.a.queryTimePower(f({
                  "huid": d.huid,
                  "bid": c.bid,
                  "appId": c.appId,
                  "pid": r
                }, t.lockInfo));
              case 11:
                if (0 !== (p = a.sent).errorCode) {
                  a.next = 20;
                  break
                }
                return k = p.data, a.next = 16, l.a.splicingCmd(k);
              case 16:
                h = a.sent, t.blueServiceIns.sendDataSubpackage(h, 0, k.seqNum, e), a.next = 21;
                break;
              case 20:
                t.callBack(p);
              case 21:
              case "end":
                return a.stop()
            }
          }), _callee2, t)
        }))), function(r) {
          return e.apply(this, arguments)
        }), this.dealResponseCallBack = (r = _asyncToGenerator(a.a.mark((function _callee4(e, r) {
          var n, c, s, l, f, k, h, v;
          return a.a.wrap((function _callee4$(m) {
            for (;;) switch (m.prev = m.next) {
              case 0:
                if (n = t.lockInfo, c = n.lockId, s = n.lockMac, "" + e.instNum != "31") {
                  m.next = 6;
                  break
                }
                return m.next = 4, p.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": c,
                  "lockMac": s
                }, {
                  "seqNum": t.seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 4:
                "" + m.sent.errorCode == "1" && t.sendBindIndexCmd(r);
              case 6:
                if ("" + e.instNum != "A1") {
                  m.next = 11;
                  break
                }
                return m.next = 9, p.a.dealA1CodeResponse(e);
              case 9:
                l = m.sent, "" + e.errorCode == "1" && d.a.getA1Cmd(l).then(function() {
                  var e = _asyncToGenerator(a.a.mark((function _callee3(e) {
                    var n = e.cmd,
                      c = e.seqNum;
                    return a.a.wrap((function _callee3$(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          t.seqNum = c, t.blueServiceIns.sendDataSubpackage(n, 0, c, r);
                        case 2:
                        case "end":
                          return e.stop()
                      }
                    }), _callee3, t)
                  })));
                  return function(r) {
                    return e.apply(this, arguments)
                  }
                }());
              case 11:
                if ("" + e.instNum != "74") {
                  m.next = 24;
                  break
                }
                return m.next = 14, o.a.getStorage({
                  "key": u.a
                });
              case 14:
                return f = m.sent, k = f.data, m.next = 18, o.a.getStorage({
                  "key": u.e
                });
              case 18:
                return h = m.sent, v = h.data, m.next = 22, i.a.callBackXieySdk({
                  "instructionNum": "0x" + e.instNum,
                  "lockMac": s,
                  "huid": v.huid,
                  "bid": k.bid,
                  "appId": k.appId,
                  "seqNum": e.seqNum,
                  "respData": e.secretContent,
                  "pid": c,
                  "respCode": e.secretContent ? 0 : -1
                });
              case 22:
                "" + m.sent.errorCode == "0" ? t.callBack({
                  "errorCode": 0
                }) : t.callBack({
                  "errorCode": 1,
                  "message": "指令解析失败"
                });
              case 24:
              case "end":
                return m.stop()
            }
          }), _callee4, t)
        }))), function(e, t) {
          return r.apply(this, arguments)
        })
      };
    r.default = h
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c),
      s = t(7),
      i = t(3),
      u = t(2),
      l = t(4),
      d = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      p = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var f = function() {
        function BindIndexService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindIndexService), k.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new s.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return p(BindIndexService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindIndexService
      }(),
      k = function _initialiseProps() {
        var e, r, t = this;
        this.callBack = function(e) {
          t._callBack && t._callBack(e)
        }, this.sendCmd = (e = _asyncToGenerator(a.a.mark((function _callee(e) {
          var r, n, c, s, p, f, k, h;
          return a.a.wrap((function _callee$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return r = t.lockInfo.lockId, a.next = 3, o.a.getStorage({
                  "key": u.a
                });
              case 3:
                return n = a.sent, c = n.data, a.next = 7, o.a.getStorage({
                  "key": u.e
                });
              case 7:
                return s = a.sent, p = s.data, a.next = 11, i.a.queryDoorLockLog(d({
                  "huid": p.huid,
                  "bid": c.bid,
                  "appId": c.appId,
                  "pid": r
                }, t.lockInfo));
              case 11:
                if (0 !== (f = a.sent).errorCode) {
                  a.next = 20;
                  break
                }
                return k = f.data, a.next = 16, l.a.splicingCmd(k);
              case 16:
                h = a.sent, t.blueServiceIns.sendDataSubpackage(h, 0, k.seqNum, e), a.next = 21;
                break;
              case 20:
                t.callBack(f);
              case 21:
              case "end":
                return a.stop()
            }
          }), _callee, t)
        }))), function(r) {
          return e.apply(this, arguments)
        }), this.dealResponseCallBack = (r = _asyncToGenerator(a.a.mark((function _callee2(e, r) {
          var n, c, s, l, d, p, f, k;
          return a.a.wrap((function _callee2$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (n = t.lockInfo, c = n.lockId, s = n.lockMac, "" + e.instNum != "75") {
                  a.next = 14;
                  break
                }
                return a.next = 4, o.a.getStorage({
                  "key": u.a
                });
              case 4:
                return l = a.sent, d = l.data, a.next = 8, o.a.getStorage({
                  "key": u.e
                });
              case 8:
                return p = a.sent, f = p.data, a.next = 12, i.a.callBackXieySdk({
                  "instructionNum": "0x" + e.instNum,
                  "lockMac": s,
                  "huid": f.huid,
                  "bid": d.bid,
                  "appId": d.appId,
                  "seqNum": e.seqNum,
                  "respData": e.secretContent,
                  "pid": c,
                  "respCode": e.secretContent ? 0 : -1
                });
              case 12:
                "" + (k = a.sent).errorCode == "0" ? k.data.remainingLogQuantity > 0 ? t.sendCmd(r) : t.callBack && t.callBack({
                  "errorCode": 0
                }) : t.callBack && t.callBack({
                  "errorCode": 1,
                  "message": "指令解析失败"
                });
              case 14:
              case "end":
                return a.stop()
            }
          }), _callee2, t)
        }))), function(e, t) {
          return r.apply(this, arguments)
        })
      };
    r.default = f
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(7),
      o = t(6),
      s = t(5),
      i = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      u = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var l = function() {
        function BindIndexService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindIndexService), d.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new c.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack
          })
        }
        return u(BindIndexService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindIndexService
      }(),
      d = function _initialiseProps() {
        var e, r = this;
        this.callBack = function(e) {
          r._callBack && r._callBack(e)
        }, this.sendCmd = function(e) {
          var t, n = r.lockInfo,
            c = n.lockId,
            s = n.lockMac;
          o.a.getBindUserLockCmd({
            "pid": c,
            "lockMac": s
          }).then((t = _asyncToGenerator(a.a.mark((function _callee(t) {
            var n = t.cmd,
              c = t.seqNum,
              o = t.message,
              s = t.errorCode;
            return a.a.wrap((function _callee$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n && c ? (r.seqNum = c, r.blueServiceIns.sendDataSubpackage(n, 0, c, e)) : r.callBack({
                    "message": o,
                    "errorCode": s
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }), (function() {
            r.sendBindIndexCmd(e)
          }))
        }, this.sendBindIndexCmd = function(e) {
          var t, n = r.lockInfo.lockId;
          o.a.getUnBindIndexCmd(i({}, r.lockInfo, {
            "pid": n
          })).then((t = _asyncToGenerator(a.a.mark((function _callee2(t) {
            var n = t.errorCode,
              c = t.message,
              o = t.cmd,
              s = t.seqNum;
            return a.a.wrap((function _callee2$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o && s ? (r.seqNum = s, r.blueServiceIns.sendDataSubpackage(o, 0, s, e)) : r.callBack({
                    "errorCode": n,
                    "message": c
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee2, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.dealResponseCallBack = (e = _asyncToGenerator(a.a.mark((function _callee3(e, t) {
          var n, c, o;
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (n = r.lockInfo, c = n.lockId, o = n.lockMac, "" + e.instNum != "31") {
                  a.next = 6;
                  break
                }
                return a.next = 4, s.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": c,
                  "lockMac": o
                }, {
                  "seqNum": r.seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 4:
                "" + a.sent.errorCode == "0" && r.sendBindIndexCmd(t);
              case 6:
                if ("" + e.instNum != "34") {
                  a.next = 11;
                  break
                }
                return a.next = 9, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 9:
                "" + a.sent.errorCode == "0" ? r.callBack({
                  "errorCode": 0
                }) : r.callBack({
                  "errorCode": 1,
                  "message": "指令解析失败"
                });
              case 11:
              case "end":
                return a.stop()
            }
          }), _callee3, r)
        }))), function(r, t) {
          return e.apply(this, arguments)
        })
      };
    r.default = l
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(7),
      o = t(6),
      s = t(5),
      i = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      u = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var l = function() {
        function BindIndexService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindIndexService), d.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new c.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return u(BindIndexService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindIndexService
      }(),
      d = function _initialiseProps() {
        var e, r = this;
        this.callBack = function(e) {
          r._callBack && r._callBack(e)
        }, this.sendCmd = function(e) {
          var t, n = r.lockInfo,
            c = n.lockId,
            s = n.lockMac;
          o.a.getBindUserLockCmd({
            "pid": c,
            "lockMac": s
          }).then((t = _asyncToGenerator(a.a.mark((function _callee(t) {
            var n = t.cmd,
              c = t.seqNum,
              o = t.message,
              s = t.errorCode;
            return a.a.wrap((function _callee$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n && c ? (r.seqNum = c, r.blueServiceIns.sendDataSubpackage(n, 0, c, e)) : r.callBack({
                    "message": o,
                    "errorCode": s
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }), (function() {
            r.sendBindIndexCmd(e)
          }))
        }, this.sendBindIndexCmd = function(e) {
          var t, n = r.lockInfo.lockId;
          o.a.getFrozenIndexCmd(i({}, r.lockInfo, {
            "pid": n
          })).then((t = _asyncToGenerator(a.a.mark((function _callee2(t) {
            var n = t.errorCode,
              c = t.message,
              o = t.cmd,
              s = t.seqNum;
            return a.a.wrap((function _callee2$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o && s ? (r.seqNum = s, r.blueServiceIns.sendDataSubpackage(o, 0, s, e)) : r.callBack({
                    "errorCode": n,
                    "message": c
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee2, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.dealResponseCallBack = (e = _asyncToGenerator(a.a.mark((function _callee3(e, t) {
          var n, c, o;
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (n = r.lockInfo, c = n.lockId, o = n.lockMac, "" + e.instNum != "31") {
                  a.next = 6;
                  break
                }
                return a.next = 4, s.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": c,
                  "lockMac": o
                }, {
                  "seqNum": r.seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 4:
                "" + a.sent.errorCode == "0" && r.sendBindIndexCmd(t);
              case 6:
                if ("" + e.instNum != "36") {
                  a.next = 11;
                  break
                }
                return a.next = 9, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 9:
                "" + a.sent.errorCode == "0" ? r.callBack({
                  "errorCode": 0
                }) : r.callBack({
                  "errorCode": 1,
                  "message": "指令解析失败"
                });
              case 11:
              case "end":
                return a.stop()
            }
          }), _callee3, r)
        }))), function(r, t) {
          return e.apply(this, arguments)
        })
      };
    r.default = l
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(7),
      o = t(6),
      s = t(5),
      i = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      u = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var l = function() {
        function BindIndexService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindIndexService), d.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new c.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return u(BindIndexService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindIndexService
      }(),
      d = function _initialiseProps() {
        var e, r = this;
        this.callBack = function(e) {
          r._callBack && r._callBack(e)
        }, this.sendCmd = function(e) {
          var t, n = r.lockInfo,
            c = n.lockId,
            s = n.lockMac;
          o.a.getBindUserLockCmd({
            "pid": c,
            "lockMac": s
          }).then((t = _asyncToGenerator(a.a.mark((function _callee(t) {
            var n = t.cmd,
              c = t.seqNum,
              o = t.message,
              s = t.errorCode;
            return a.a.wrap((function _callee$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n && c ? (r.seqNum = c, r.blueServiceIns.sendDataSubpackage(n, 0, c, e)) : r.callBack({
                    "message": o,
                    "errorCode": s
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }), (function() {
            r.sendBindIndexCmd(e)
          }))
        }, this.sendBindIndexCmd = function(e) {
          var t, n = r.lockInfo.lockId;
          o.a.getThawIndexCmd(i({}, r.lockInfo, {
            "pid": n
          })).then((t = _asyncToGenerator(a.a.mark((function _callee2(t) {
            var n = t.errorCode,
              c = t.message,
              o = t.cmd,
              s = t.seqNum;
            return a.a.wrap((function _callee2$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o && s ? (r.seqNum = s, r.blueServiceIns.sendDataSubpackage(o, 0, s, e)) : r.callBack({
                    "errorCode": n,
                    "message": c
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee2, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.dealResponseCallBack = (e = _asyncToGenerator(a.a.mark((function _callee3(e, t) {
          var n, c, o;
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (n = r.lockInfo, c = n.lockId, o = n.lockMac, "" + e.instNum != "31") {
                  a.next = 6;
                  break
                }
                return a.next = 4, s.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": c,
                  "lockMac": o
                }, {
                  "seqNum": r.seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 4:
                "" + a.sent.errorCode == "0" && r.sendBindIndexCmd(t);
              case 6:
                if ("" + e.instNum != "39") {
                  a.next = 11;
                  break
                }
                return a.next = 9, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 9:
                "" + a.sent.errorCode == "0" ? r.callBack({
                  "errorCode": 0
                }) : r.callBack({
                  "errorCode": 1,
                  "message": "指令解析失败"
                });
              case 11:
              case "end":
                return a.stop()
            }
          }), _callee3, r)
        }))), function(r, t) {
          return e.apply(this, arguments)
        })
      };
    r.default = l
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(7),
      o = t(6),
      s = t(5),
      i = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      u = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var l = function() {
        function BindIndexService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindIndexService), d.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new c.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return u(BindIndexService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindIndexService
      }(),
      d = function _initialiseProps() {
        var e, r = this;
        this.callBack = function(e) {
          r._callBack && r._callBack(e)
        }, this.sendCmd = function(e) {
          var t, n = r.lockInfo,
            c = n.lockId,
            s = n.lockMac;
          o.a.getBindUserLockCmd({
            "pid": c,
            "lockMac": s
          }).then((t = _asyncToGenerator(a.a.mark((function _callee(t) {
            var n = t.cmd,
              c = t.seqNum,
              o = t.message,
              s = t.errorCode;
            return a.a.wrap((function _callee$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n && c ? (r.seqNum = c, r.blueServiceIns.sendDataSubpackage(n, 0, c, e)) : r.callBack({
                    "message": o,
                    "errorCode": s
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }), (function() {
            r.sendBindIndexCmd(e)
          }))
        }, this.sendBindIndexCmd = function(e) {
          var t, n = r.lockInfo.lockId;
          o.a.delDynamicPwdCmd(i({}, r.lockInfo, {
            "pid": n
          })).then((t = _asyncToGenerator(a.a.mark((function _callee2(t) {
            var n = t.errorCode,
              c = t.message,
              o = t.cmd,
              s = t.seqNum;
            return a.a.wrap((function _callee2$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o && s ? (r.seqNum = s, r.blueServiceIns.sendDataSubpackage(o, 0, s, e)) : r.callBack({
                    "errorCode": n,
                    "message": c
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee2, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.dealResponseCallBack = (e = _asyncToGenerator(a.a.mark((function _callee3(e, t) {
          var n, c, o;
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (n = r.lockInfo, c = n.lockId, o = n.lockMac, "" + e.instNum != "31") {
                  a.next = 6;
                  break
                }
                return a.next = 4, s.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": c,
                  "lockMac": o
                }, {
                  "seqNum": r.seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 4:
                "" + a.sent.errorCode == "0" && r.sendBindIndexCmd(t);
              case 6:
                if ("" + e.instNum != "41") {
                  a.next = 11;
                  break
                }
                return a.next = 9, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 9:
                "" + a.sent.errorCode == "0" ? r.callBack({
                  "errorCode": 0
                }) : r.callBack({
                  "errorCode": 1,
                  "message": "指令解析失败"
                });
              case 11:
              case "end":
                return a.stop()
            }
          }), _callee3, r)
        }))), function(r, t) {
          return e.apply(this, arguments)
        })
      };
    r.default = l
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(7),
      o = t(6),
      s = t(5),
      i = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      },
      u = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var l = function() {
        function BindIndexService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindIndexService), d.call(this), this.lockInfo = e, this._callBack = r, this.blueServiceIns = new c.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return u(BindIndexService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindIndexService
      }(),
      d = function _initialiseProps() {
        var e, r = this;
        this.callBack = function(e) {
          r._callBack && r._callBack(e)
        }, this.sendCmd = function(e) {
          var t, n = r.lockInfo,
            c = n.lockId,
            s = n.lockMac;
          o.a.getBindUserLockCmd({
            "pid": c,
            "lockMac": s
          }).then((t = _asyncToGenerator(a.a.mark((function _callee(t) {
            var n = t.cmd,
              c = t.seqNum,
              o = t.message,
              s = t.errorCode;
            return a.a.wrap((function _callee$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n && c ? (r.seqNum = c, r.blueServiceIns.sendDataSubpackage(n, 0, c, e)) : r.callBack({
                    "message": o,
                    "errorCode": s
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }), (function() {
            r.sendBindIndexCmd(e)
          }))
        }, this.sendBindIndexCmd = function(e) {
          var t, n = r.lockInfo.lockId;
          o.a.cleanCpuCardCmd(i({}, r.lockInfo, {
            "pid": n
          })).then((t = _asyncToGenerator(a.a.mark((function _callee2(t) {
            var n = t.errorCode,
              c = t.message,
              o = t.cmd,
              s = t.seqNum;
            return a.a.wrap((function _callee2$(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  o && s ? (r.seqNum = s, r.blueServiceIns.sendDataSubpackage(o, 0, s, e)) : r.callBack({
                    "errorCode": n,
                    "message": c
                  });
                case 1:
                case "end":
                  return t.stop()
              }
            }), _callee2, r)
          }))), function(e) {
            return t.apply(this, arguments)
          }))
        }, this.dealResponseCallBack = (e = _asyncToGenerator(a.a.mark((function _callee3(e, t) {
          var n, c, o;
          return a.a.wrap((function _callee3$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (n = r.lockInfo, c = n.lockId, o = n.lockMac, "" + e.instNum != "31") {
                  a.next = 6;
                  break
                }
                return a.next = 4, s.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": c,
                  "lockMac": o
                }, {
                  "seqNum": r.seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 4:
                "" + a.sent.errorCode == "0" && r.sendBindIndexCmd(t);
              case 6:
                if ("" + e.instNum != "44") {
                  a.next = 11;
                  break
                }
                return a.next = 9, s.a.callBackXieySdk(e, {
                  "lockMac": o,
                  "lockId": c
                });
              case 9:
                "" + a.sent.errorCode == "0" ? r.callBack({
                  "errorCode": 0
                }) : r.callBack({
                  "errorCode": 1,
                  "message": "指令解析失败"
                });
              case 11:
              case "end":
                return a.stop()
            }
          }), _callee3, r)
        }))), function(r, t) {
          return e.apply(this, arguments)
        })
      };
    r.default = l
  }, function(e, r, t) {
    t.r(r);
    var n = t(0),
      a = t.n(n),
      c = t(1),
      o = t.n(c),
      s = t(7),
      i = t(3),
      u = t(2),
      l = t(4),
      d = t(5),
      p = function() {
        function defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, r, t) {
          return r && defineProperties(e.prototype, r), t && defineProperties(e, t), e
        }
      }();

    function _asyncToGenerator(e) {
      return function() {
        var r = e.apply(this, arguments);
        return new Promise((function(e, t) {
          return function step(n, a) {
            try {
              var c = r[n](a),
                o = c.value
            } catch (e) {
              return void t(e)
            }
            if (!c.done) return Promise.resolve(o).then((function(e) {
              step("next", e)
            }), (function(e) {
              step("throw", e)
            }));
            e(o)
          }("next")
        }))
      }
    }
    var f = function() {
        function BindIndexService(e, r) {
          ! function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
          }(this, BindIndexService), k.call(this), this.serviceId = "0000FEE0-0000-1000-8000-00805F9B34FB", this.writeCharacteristicId = "0000FEE2-0000-1000-8000-00805F9B34FB", this._callBack = r, this.blueServiceIns = new s.a({
            "lockMac": e.lockMac,
            "lockId": e.lockId,
            "sendCmd": this.sendCmd,
            "dealResponseCallBack": this.dealResponseCallBack,
            "callBack": r
          })
        }
        return p(BindIndexService, [{
          "key": "start",
          "value": function start() {
            this.blueServiceIns.begin()
          }
        }]), BindIndexService
      }(),
      k = function _initialiseProps() {
        var e, r, t = this;
        this.callBack = function(e) {
          t._callBack && t._callBack(e)
        }, this.sendCmd = (e = _asyncToGenerator(a.a.mark((function _callee(e) {
          var r, n, c, o, s, u;
          return a.a.wrap((function _callee$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return r = "76", n = Math.floor((new Date).getTime() / 1e3).toString(16), a.next = 5, l.a.crc16Dnp(r + n + n);
              case 5:
                return c = a.sent, a.next = 8, i.a.aesEncrypt2({
                  "data": r + n + n + c
                });
              case 8:
                if (0 !== (o = a.sent).errorCode) {
                  a.next = 15;
                  break
                }
                return s = o.data, a.next = 13, l.a.splicingCmd({
                  "instructionNum": "76",
                  "instructionContent": s
                });
              case 13:
                u = a.sent, e && t.blueServiceIns.sendDataSubpackage(u, 0, "", e);
              case 15:
              case "end":
                return a.stop()
            }
          }), _callee, t)
        }))), function(r) {
          return e.apply(this, arguments)
        }), this.dealResponseCallBack = (r = _asyncToGenerator(a.a.mark((function _callee2(e, r) {
          var n, c, s, p, f, k, h, v, m, y, g, _, x, C;
          return a.a.wrap((function _callee2$(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return n = t.blueServiceIns._deviceMap[r].connectService, a.next = 3, o.a.getStorage({
                  "key": u.a
                });
              case 3:
                return c = a.sent, s = c.data, p = {}, a.prev = 6, a.next = 9, o.a.getStorage({
                  "key": u.e
                });
              case 9:
                f = a.sent, p = f.data, a.next = 16;
                break;
              case 13:
                a.prev = 13, a.t0 = a.catch(6), p = {
                  "huid": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
                };
              case 16:
                if ("" + e.instNum != "76") {
                  a.next = 34;
                  break
                }
                return a.next = 19, i.a.aesDecrypt2({
                  "data": e.secretContent
                });
              case 19:
                if (0 !== (k = a.sent).errorCode) {
                  a.next = 34;
                  break
                }
                return h = k.data.substr(50, 32), v = k.data.substr(114, 12), n.setLockInfo({
                  "lockId": h,
                  "lockMac": v
                }), a.next = 26, i.a.registerUserLock({
                  "huid": p.huid,
                  "appId": s.appId,
                  "pid": h,
                  "lockMac": v
                });
              case 26:
                if (0 !== (m = a.sent).errorCode) {
                  a.next = 34;
                  break
                }
                return y = m.data, a.next = 31, l.a.splicingCmd(y);
              case 31:
                g = a.sent, t.blueServiceIns._deviceMap[r].seqNum = y.seqNum, t.blueServiceIns.sendDataSubpackage(g, 0, y.seqNum, r);
              case 34:
                if ("" + e.instNum != "31") {
                  a.next = 47;
                  break
                }
                return a.next = 37, d.a.dealBindDoorResponse(e.secretContent, {
                  "lockId": n.getLockInfo().lockId,
                  "lockMac": n.getLockInfo().lockMac
                }, {
                  "seqNum": t.blueServiceIns._deviceMap[r].seqNum,
                  "instNum": e.instNum,
                  "instCode": e.instCode
                });
              case 37:
                if ("" + a.sent.errorCode != "0") {
                  a.next = 47;
                  break
                }
                return a.next = 41, i.a.resetTime({
                  "huid": p.huid,
                  "appId": s.appId,
                  "pid": n.getLockInfo().lockId,
                  "lockMac": n.getLockInfo().lockMac
                });
              case 41:
                return _ = a.sent, x = _.data, a.next = 45, l.a.splicingCmd(x);
              case 45:
                C = a.sent, t.blueServiceIns.sendDataSubpackage(C, 0, "", r);
              case 47:
                "" + e.instNum == "73" && (t.blueServiceIns._deviceMap[r].success = "0", o.a.closeBLEConnection({
                  "deviceId": r
                }), t._callBack({
                  "errorCode": 0,
                  "data": t.blueServiceIns._deviceMap
                }));
              case 48:
              case "end":
                return a.stop()
            }
          }), _callee2, t, [
            [6, 13]
          ])
        }))), function(e, t) {
          return r.apply(this, arguments)
        })
      };
    r.default = f
  }],
  [
    [10, 1, 2]
  ]
]);