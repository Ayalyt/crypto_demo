function t(t) {
  return null == t || /^\s*$/.test(t)
}
module.exports = {
  isEmpty: t,
  isNotEmpty: function(s) {
    return !t(s)
  },
  isMobile: function(t) {
    return /^1\d{10}$/.test(t)
  },
  isNumber: function(t) {
    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : params,
      n = s.len,
      e = n ? new RegExp("^\\d{".concat(n, "}$")) : /^\d+$/;
    return e.test(t)
  },
  isLength: function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : params,
      n = s.min,
      e = s.max,
      r = (t + "").length;
    return (!n || r >= n) && (!e || r <= e)
  },
  isPassword: function(t) {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)(?![a-zA-Z_\-]+$)(?![0-9_\-]+$)[0-9A-Za-z_\-]{8,20}$/.test(t)
  },
  isUserName: function(t) {
    return /^[a-zA-Z\u4e00-\u9fa5 ]{2,24}$/.test(t)
  },
  isChinese: function(t) {
    return /^[\u4e00-\u9fa5]+$/.test(t)
  },
  isbankAccountNo: function(t) {
    return /^[0-9]{15,20}$/.test(t)
  },
  isIdentityCard: function(t) {
    var s = {
      pass: !0,
      msg: "验证成功"
    };
    if (t && /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(t))
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
        } [t.substr(0, 2)]) {
        if (18 == t.length) {
          t = t.split("");
          for (var n = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], e = 0, r = 0; r < 17; r++) e += t[r] * n[r];
          [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2][e % 11] != t[17].toUpperCase() && (s = {
            pass: !1,
            msg: "身份证号校验位错误"
          })
        }
      } else s = {
        pass: !1,
        msg: "身份证号地址编码错误"
      };
    else s = {
      pass: !1,
      msg: "身份证号格式错误"
    };
    return console.log(s), s.pass
  },
  isHXCard: function(t) {
    return /^[H|hM|m][0-9]{10}$/.test(t)
  },
  isTWCard: function(t) {
    return /^[0-9A-Za-z]{1,10}$/.test(t)
  },
  isPassportCard: function(t) {
    return /^(?![a-zA-Z]+$)[a-zA-Z0-9]{6,12}$/.test(t)
  },
  isJZCard: function(t) {
    return /^(8)([1-3])([0]{4})(\\d{11})([0-9]|X|x)$/.test(t)
  }
};