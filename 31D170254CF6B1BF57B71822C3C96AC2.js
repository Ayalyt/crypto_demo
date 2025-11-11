var e = require("./@babel/runtime/helpers/classCallCheck.js"),
  t = require("./@babel/runtime/helpers/createClass.js"),
  r = require("7F7F03844CF6B1BF19196B8389686AC2.js"),
  n = require("0D48EEE24CF6B1BF6B2E86E576A96AC2.js"),
  s = require("BD3981924CF6B1BFDB5FE99540F96AC2.js"),
  o = require("788C46804CF6B1BF1EEA2E877AF96AC2.js"),
  i = function() {
    function i() {
      e(this, i)
    }
    return t(i, null, [{
      key: "getUrl",
      value: function(e) {
        e = "/" === e[0] ? e.slice(1) : e;
        var t = o.indexOf(e) > -1 ? wx.getStorageSync("sourcePath") : "";
        return /https?:\/\//.test(e) ? e : r.HOST + t + e
      }
    }, {
      key: "request",
      value: function(e) {
        var t = getCurrentPages(),
          r = t[t.length - 1],
          o = e.url,
          i = void 0 === o ? "" : o,
          a = e.success,
          u = e.header,
          l = void 0 === u ? {} : u,
          c = e.showLoading;
        if (e.url = this.getUrl(i), e.header = s.intercept(l), c && r && r.setData({
            showLoading: !0
          }), "function" == typeof a) {
          var d = e.complete;
          return e.complete = d ? function(t) {
            d.call(e, t), c && r && r.setData({
              showLoading: !1
            })
          } : function(e) {
            c && r && r.setData({
              showLoading: !1
            })
          }, wx.request(e)
        }
        return new Promise((function(t, s) {
          e.success = function(r) {
            e.handleError;
            var o = e.wholeResponse,
              i = r.statusCode,
              a = r.data,
              u = void 0 === a ? {} : a,
              l = u.code,
              c = u.data,
              d = void 0 === c ? {} : c;
            if (200 === i)
              if (200 === l) t(o ? r : d);
              else if (void 0 === l) t(o ? r : d);
            else {
              var h = n.handleBusinessError(l, r, e);
              s(h)
            } else {
              var f = n.handleHttpError(i, r, e);
              s(f)
            }
          }, e.fail = function(t) {
            var r = n.handleHttpError(t.statusCode, t, e);
            s(r)
          }, e.complete = function() {
            c && r && r.setData({
              showLoading: !1
            })
          }, wx.request(e)
        }))
      }
    }, {
      key: "post",
      value: function(e) {
        return (e = e || {}).method = "POST", this.request(e)
      }
    }, {
      key: "get",
      value: function(e) {
        return (e = e || {}).method = "get", this.request(e)
      }
    }]), i
  }();
module.exports = i;