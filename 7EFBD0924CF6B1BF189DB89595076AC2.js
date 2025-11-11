Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = i(require("DA3DBFB64CF6B1BFBC5BD7B18A176AC2.js")),
  e = i(require("062E79E44CF6B1BF604811E3A1176AC2.js"));

function i(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var c = void 0,
  r = {
    user: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      i = i || {};
      var c = {
          unionid: e.unionId || i.wxUnionId || "",
          openid: e.openId || i.wxOpenId || "",
          phone: e.phone || i.phone || "",
          uid: i.id || ""
        },
        r = {
          nickname: i.nickname || "",
          avatarUrl: i.avatarImgUrl || "",
          gender: i.gender || "",
          prov: i.province || "",
          city: i.city || "",
          state: i.country || "",
          store_id: i.storeId || ""
        };
      t.default.reportUser(c, r)
    },
    location: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t.default.reportLocation(e)
    },
    search: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      t.default.report("click_search", {
        keyword: e
      })
    },
    clickSearchItem: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        i = arguments.length > 1 ? arguments[1] : void 0,
        c = arguments.length > 2 ? arguments[2] : void 0;
      t.default.report("click_resource", {
        keyword: e,
        item_no: i,
        item_name: c
      })
    },
    share: function(e) {
      var i = t.default.currentPageInfo();
      t.default.report("share_app", {
        ru: i.ru || c,
        result: e ? 1 : 0
      })
    },
    reportAuthOperation: function(e, i) {
      t.default.reportAuthOperation(e, i)
    },
    reportLocation: function(e) {
      t.default.report("author_location", {
        result: e ? 1 : 0
      })
    },
    reportAccAddress: function(e) {
      t.default.report("author_address", {
        result: e ? 1 : 0
      })
    },
    goodsExposure: function(e) {
      var i = t.default.currentPageInfo();
      t.default.report("exposure_item", {
        ru: i.ru || c,
        itemid: e
      })
    },
    detailPage: function(e) {
      var i = t.default.currentPageInfo();
      t.default.report("click_item", {
        ru: i.ru || c,
        item_no: e,
        itemid: e
      })
    },
    getBrowseItemSessionId: function(t) {
      return t + "_" + (new Date).getTime()
    },
    browseItem: function() {
      var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        c = e.default.SOURCE_TYPE[i.source],
        r = i.sessionId;
      t.default.report("browse_item", {
        itemid: i.itemNo,
        item_no: i.itemNo,
        item_name: i.name,
        sale_price: i.salePrice,
        thumbnail: i.thumbnail,
        source: c.source,
        name: c.name,
        session_id: r
      })
    },
    toShopCart: function(e, i) {
      t.default.report("add_shop", {
        itemid: e,
        item_no: e,
        session_id: i
      })
    },
    clickBuyNowProductpage: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t.default.report("click_buy_now_productpage", {
        sku_num: e.sku_num || c,
        itemNo: e.itemNo || c,
        item_no: e.itemNo || c,
        barcode: e.barcode || c,
        product_count: e.product_count || 1
      })
    },
    uniferOrder: function(e) {
      if (e.itemInfos) {
        var i = e.itemInfos.map((function(t) {
          var e = {};
          try {
            e = JSON.parse(t.reportExt || {})
          } catch (t) {}
          return {
            itemid: t.itemNo,
            session_id: e.sessionId || ""
          }
        })).filter((function(t) {
          return t.session_id
        }));
        i.length && t.default.report("unifer_order", {
          item_infos: i,
          result: e.result || 0,
          order_no: e.orderNo || 0
        })
      }
    },
    payResult: function(e) {
      if (e.itemInfos) {
        var i = e.itemInfos.map((function(t) {
          var e = {};
          try {
            e = JSON.parse(t.reportExt || {})
          } catch (t) {}
          return {
            itemid: t.itemNo,
            session_id: e.sessionId || ""
          }
        })).filter((function(t) {
          return t.session_id
        }));
        i.length && t.default.report("pay_result", {
          item_infos: i,
          result: e.result || 0,
          order_no: e.orderNo || 0
        })
      }
    },
    clickBuy: function(e) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      t.default.report("click_buy", {
        itemid: e,
        ordertype: i
      })
    },
    clickShopNext: function(e, i) {
      t.default.report("click_shop_next", {
        itemid: e,
        item_size: i
      })
    },
    clickPay: function(e) {
      t.default.report("click_pay", {
        result: e.result ? 1 : 0,
        fail_reason: e.fail_reason || "",
        item_count: 0,
        amount: e.amount,
        pay_type: e.pay_type,
        trade_type: ""
      })
    },
    redPacketShow: function() {
      t.default.report("packet_show", {})
    },
    joinRedPacketActivity: function(e) {
      t.default.report("click_join_packet_activity", {
        result: !!e
      })
    },
    openRedPacket: function(e) {
      t.default.report("click_open_packet", {
        result: e ? 1 : 0
      })
    },
    getRedPacket: function(e) {
      t.default.report("click_get_packet", {
        result: e ? 1 : 0
      })
    },
    shareRedPacket: function(e) {
      var i = t.default.currentPageInfo();
      t.default.report("click_share_packet", {
        ru: i.ru || c,
        result: e ? 1 : 0
      })
    },
    useRedPacket: function(e) {
      t.default.report("click_use_packet", {
        result: e ? 1 : 0
      })
    },
    openNewRecdPacket: function() {
      t.default.report("click_open_new_packet", {
        result: success ? 1 : 0
      })
    },
    joinGroup: function(e) {
      t.default.report("click_join_group", {
        itemid: e.groupNo,
        act_id: e.activityId,
        group_no: e.groupNo
      })
    },
    startGroup: function(e) {
      t.default.report("click_start_group", {
        itemid: e,
        act_id: e
      })
    },
    shareGroup: function(e) {
      t.default.report("click_share_group", {
        itemid: e
      })
    },
    startDiscount: function(e) {
      t.default.report("click_start_discount", {
        itemid: e
      })
    },
    shareDiscount: function(e) {
      t.default.report("click_share_discount", {
        itemid: e
      })
    },
    shareHelpDiscount: function(e) {
      t.default.report("click_help_share_discount", {
        itemid: e
      })
    },
    clickNavigationBar: function(e, i) {
      t.default.report("click_navigation_bar", {
        navigation_index: e || 0,
        navigation_link: i || c
      })
    },
    clickBanner: function(e, i) {
      t.default.report("click_banner", {
        navigation_index: e || 0,
        navigation_link: i || c
      })
    },
    clickStoreInfo: function(e) {
      t.default.report("click_store_info", {
        store_id: e
      })
    },
    firstStoreInfo: function(e) {
      t.default.report("seted_store_info", {
        store_id: e
      })
    },
    clickStoreLocation: function() {
      t.default.report("click_store_location", {})
    },
    clickStorePhone: function() {
      t.default.report("click_store_phone", {})
    },
    clickSweepCode: function() {
      t.default.report("click_sweep_code", {})
    },
    clickNavModule: function(e, i, c) {
      t.default.report("click_nav_module", {
        item_link_type: e,
        item_link: i,
        item_title: c
      })
    },
    clickSpecialActivity: function(e, i) {
      t.default.report("click_activity_item", {
        item_id: e,
        item_name: i
      })
    },
    clickPoster: function(e) {
      t.default.report("click_poster", {
        link: e
      })
    },
    clickCube: function(e, i) {
      t.default.report("click_cube_item", {
        index: e,
        link: i
      })
    },
    clickPtoductGuess: function() {
      t.default.report("click_product_guess", {})
    },
    clickGetCoupon: function(e, i) {
      t.default.report("click_get_coupon", {
        coupon_source: e ? 1 : 0,
        coupon_id: i
      })
    },
    clickChangeRank: function(e, i) {
      t.default.report("click_change_rank", {
        sort_filed: e || c,
        sort_type: i || c
      })
    },
    clickCategoryItem: function(e, i) {
      t.default.report("click_category_item", {
        category_level: e,
        category_id: i
      })
    },
    clickCategoryBanner: function(e) {
      t.default.report("click_category_banner", {
        item_id: e
      })
    },
    clickVipCode: function() {
      t.default.report("click_vip_code", {})
    },
    clickMineOrder: function(e) {
      t.default.report("click_mine_order", {
        type: e
      })
    },
    clickMyBargain: function() {
      t.default.report("click_my_bargain", {})
    },
    clickMyGroup: function() {
      t.default.report("click_my_group", {})
    },
    clickMyPacket: function() {
      t.default.report("click_my_packet", {})
    },
    clickCouponCenter: function() {
      t.default.report("click_coupon_center", {})
    },
    clickGiftShop: function() {
      t.default.report("click_gift_shop", {})
    },
    clickRealVipCard: function() {
      t.default.report("click_real_vipcard", {})
    },
    clickAddressSetting: function() {
      t.default.report("click_address_setting", {})
    },
    clickSetting: function() {
      t.default.report("click_setting", {})
    },
    clickTextNavigation: function(e, i) {
      t.default.report("click_text_navigation", {
        link_type: e,
        link: i
      })
    },
    clickConsult: function() {
      t.default.report("click_consult", {})
    },
    pageviewIn: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t.default.report("pageview_in", {
        page_title: e.page_title,
        page_type: e.page_type,
        item_id: e.item_id,
        item_no: e.item_no,
        item_name: e.item_name,
        act_id: e.act_id,
        act_type: e.act_type,
        act_name: e.act_name
      })
    },
    pageviewOut: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t.default.report("pageview_out", {
        page_title: e.page_title,
        page_type: e.page_type,
        item_id: e.item_id,
        item_no: e.item_no,
        item_name: e.item_name,
        act_id: e.act_id,
        act_type: e.act_type,
        act_name: e.act_name,
        stay_dur: e.stay_dur
      })
    },
    clickStartAct: function(e, i, c) {
      t.default.report("click_start_act", {
        act_id: e,
        act_name: i,
        act_type: c
      })
    },
    successStartAct: function(e, i, c) {
      t.default.report("success_start_act", {
        act_id: e,
        act_name: i,
        act_type: c
      })
    },
    clickHelpAct: function(e, i, c, r) {
      t.default.report("click_help_act", {
        act_id: e,
        act_name: i,
        act_type: c,
        start_uid: r
      })
    },
    successHelpGroup: function(e, i, c, r) {
      t.default.report("success_help_group", {
        act_id: e,
        act_name: i,
        act_type: c,
        start_uid: r
      })
    },
    successAct: function(e, i, c, r) {
      t.default.report("success_act", {
        act_id: e,
        act_name: i,
        act_type: c,
        success_uid: r
      })
    },
    clickDrawAct: function(e, i, c) {
      t.default.report("click_draw_act", {
        act_id: e,
        act_name: i,
        act_type: c
      })
    },
    registerSuccess: function(e, i) {
      t.default.report("user_register", {
        user: {
          uid: e
        },
        act_id: i ? i.id : null,
        act_name: i ? i.name : null,
        act_type: i ? i.typeId : null
      })
    },
    frontLoginReady: function() {
      t.default.report("front_login_ready", {})
    }
  };
exports.default = r;