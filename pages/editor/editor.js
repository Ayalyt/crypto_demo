var t = require("../../BD7690F64CF6B1BFDB10F8F156596AC2.js"),
  e = require("../../03F505464CF6B1BF65936D4171E96AC2.js"),
  a = require("../../F9E424F04CF6B1BF9F824CF736786AC2.js"),
  i = require("../../ABE2B3374CF6B1BFCD84DB308E9A6AC2.js"),
  n = i.isIdentityCard,
  o = i.isHXCard,
  r = i.isTWCard,
  s = i.isPassportCard,
  c = i.isJZCard,
  u = require("../../559B5D914CF6B1BF33FD35961C396AC2.js").certificates,
  l = {
    name: "姓名",
    gender: "性别",
    birthday: "生日",
    email: "邮箱",
    cardNum: "证件号码",
    cardType: "证件类型"
  };
Page({
  data: {
    name: "",
    type: "text",
    value: "",
    placeholder: "",
    tips: "",
    pattern: "",
    certificates: u
  },
  onLoad: function(t) {
    var e = this;
    wx.getStorage({
      key: a.USERINFO_EDIT_TRANSFER,
      success: function(t) {
        var i = t.data || {} || {},
          n = i.name,
          o = i.title,
          r = i.placeholder,
          s = i.type,
          c = i.value,
          u = i.extraValue,
          l = i.maxlength,
          d = i.tips,
          f = i.pattern;
        if (e.setData({
            name: n,
            placeholder: r,
            type: s,
            value: c,
            extraValue: u,
            maxlength: l,
            tips: d,
            pattern: f
          }), "certificates" === n) {
          var h = u.split("-");
          e.setData({
            cardType: h[0],
            cardNum: h[1]
          })
        }
        wx.setNavigationBarTitle({
          title: o
        }), wx.removeStorage({
          key: a.USERINFO_EDIT_TRANSFER
        })
      }
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onSelectChange: function(t) {
    this.setData({
      cardType: t.detail.value,
      maxlength: t.detail.data.maxlength,
      cardNum: ""
    })
  },
  onInput: function(t) {
    var e = t.detail.value;
    this.data.name;
    this.setData({
      value: e
    })
  },
  onCardNoInput: function(t) {
    var e = t.detail.value;
    this.setData({
      cardNum: e
    })
  },
  onSave: function() {
    var i = this.data,
      u = i.name,
      d = i.value,
      f = i.cardType,
      h = i.cardNum;
    d = d.trim();
    var v = {};
    if ("name" === u) {
      if (!d) return void wx.showToast({
        title: "请设置姓名",
        icon: "none"
      });
      if (!/^(([a-zA-Z]+(\s+[a-zA-z]+)|[a-zA-z]*){1,}|[\u4e00-\u9fa5\·]{1,})$/.test(d)) return void wx.showToast({
        title: "请填写正确的姓名",
        icon: "none"
      });
      v[u] = d
    } else if ("nickname" === u) {
      if (!d) return void wx.showToast({
        title: "请设置昵称",
        icon: "none"
      });
      if (!/^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(d)) return void wx.showToast({
        title: "请填写正确的昵称",
        icon: "none"
      });
      v[u] = d
    } else if ("email" === u) {
      if (!d) return void wx.showToast({
        title: "请设置邮箱",
        icon: "none"
      });
      if (!/\w+@+\w/.test(d)) return void wx.showToast({
        title: "请填写正确的邮箱地址",
        icon: "none"
      });
      v[u] = d
    } else if ("certificates" === u) {
      if (0 === f) return void wx.showToast({
        title: "请选择证件类型",
        icon: "none"
      });
      if (1 === f && !n(h) || 2 === f && !o(h) || 3 === f && !r(h) || 4 === f && !s(h) || 5 === f && !c(h)) return void wx.showToast({
        title: "请填写正确的证件号码",
        icon: "none"
      });
      try {
        (0, t.zhugeTrack)("我的-编辑资料-单条信息设置完成", {
          "信息类型": "证件类型"
        }), (0, t.zhugeTrack)("我的-编辑资料-单条信息设置完成", {
          "信息类型": "证件号码"
        })
      } catch (t) {
        console.log("err", t)
      }
      v = {
        cardType: f,
        cardNum: h
      }
    }
    if ("certificates" !== u) try {
      (0, t.zhugeTrack)("我的-编辑资料-单条信息设置完成", {
        "信息类型": l[u]
      })
    } catch (t) {
      console.log("err", t)
    }
    e.post({
      url: "/member/user/modify/v2",
      data: v
    }).then((function(t) {
      wx.showToast({
        title: "修改成功",
        icon: "none"
      }), wx.setStorage({
        key: a.USERINFO_EDIT_TRANSFER,
        data: v
      }), wx.navigateBack()
    })).catch((function() {
      wx.showToast({
        title: "修改失败",
        icon: "none"
      })
    }))
  }
});