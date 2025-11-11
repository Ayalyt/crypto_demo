var t = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  a = require("../../51EB7A564CF6B1BF378D12510E6A6AC2.js"),
  s = a.Rules,
  e = a.Validations,
  i = ["password"],
  o = ["000", "01234", "111", "12345", "222", "23456", "333", "34567", "444", "45678", "555", "56789", "54321", "666", "65432", "777", "76543", "888", "87654", "999", "98765"];
Page({
  data: {
    maxLength: 6,
    endtime: "",
    password: "",
    disabled: !0,
    showLoading: !1
  },
  onLoad: function(t) {
    var a = t.id,
      s = t.endtime,
      e = t.password,
      i = t.leaseOrderNo;
    this.id = a, this.leaseOrderNo = i, this.setData({
      endtime: s || "--",
      maxLength: e ? e.length : 6
    })
  },
  getValidations: function() {
    return {
      password: [{
        rule: s.isNotEmpty,
        message: "密码不能为空"
      }, {
        rule: s.isNumber,
        message: "密码格式错误"
      }]
    }
  },
  getModel: function() {
    var t = this,
      a = {};
    return i.forEach((function(s) {
      a[s] = t.data[s]
    })), a
  },
  onBlur: function(t) {
    var a = t.detail.value.trim();
    if (!e.isNumber(a, this.data.maxLength)) return wx.showToast({
      title: "请输入数字密码",
      icon: "none"
    }), this.this.setData({
      disabled: !0
    }), !1;
    this.this.setData({
      disabled: !1
    })
  },
  onInput: function(t) {
    var s = t.detail.value.trim(),
      e = t.target.dataset.field,
      o = Object.assign({}, this.data);
    o[e] = s, o.disabled = a.validate(this.getValidations(), i, o).length > 0, this.setData(o)
  },
  onSubmit: function() {
    var t = this.getModel(),
      s = a.validate(this.getValidations(), i, t);
    return s.length ? (wx.showToast({
      title: s[0].message,
      icon: "none"
    }), !1) : t.password.length < this.data.maxLength ? (wx.showToast({
      title: "密码格式错误，请输入".concat(this.data.maxLength, "数字"),
      icon: "none"
    }), !1) : o.some((function(a) {
      return t.password.indexOf(a) > -1
    })) ? (wx.showToast({
      title: "门锁密码较弱，密码不能为连续的3位相同数或5位连续数",
      icon: "none"
    }), !1) : void this.modifyPassword()
  },
  modifyPassword: function() {
    var a = this;
    this.setData({
      showLoading: !0
    });
    var s = {
      leaseOrderNo: this.leaseOrderNo,
      passwordId: this.id,
      password: this.data.password
    };
    t.post({
      url: "/mp-living/room/lock/modify",
      data: s,
      wholeResponse: !0
    }).then((function(t) {
      wx.showToast({
        title: "成功！",
        icon: "none",
        duration: 1500
      }), a.setData({
        showLoading: !1
      }), setTimeout((function() {
        wx.navigateBack()
      }), 1500)
    })).catch((function(t) {
      wx.showToast({
        icon: "none",
        title: t.data.data.message
      }), a.setData({
        showLoading: !1
      })
    }))
  }
});