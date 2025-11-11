var e = void 0;
module.exports = {
  ifNeedCountDown: function(i) {
    var n = "0" == i.status && 0 == i.overdueDays;
    if ((1 == i.billType || 2 == i.billType || 4 == i.billType) && n) {
      var r = 0;
      return 2 == i.billType ? (i.utilityRemainTime -= 1e3, r = i.utilityRemainTime / 1e3) : (i.remainTime -= 1e3, r = i.remainTime / 1e3),
        function(i, n) {
          var r = i;
          if (r < 0) return n.countDownNode = {}, !1;
          if (0 == r) return n.countDownNode = void 0, e(), !1;
          var t = r / 86400,
            o = (r %= 86400) / 3600,
            u = (r %= 3600) / 60,
            s = r % 60,
            a = {
              days: parseInt(t),
              hours: parseInt(o),
              minutes: parseInt(u),
              second: parseInt(s)
            };
          1 == n.billType ? a.prefixDesc = "倒计时" : a.prefixDesc = "剩";
          return n.countDownModel = a, !0
        }(r, i)
    }
    return !1
  },
  isTimeOut: function(i) {
    e = i
  }
};