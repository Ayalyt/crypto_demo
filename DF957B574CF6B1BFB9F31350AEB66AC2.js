var t;
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = ((t = require("515194864CF6B1BF3737FC81C6C66AC2.js")) && t.__esModule ? t : {
    default: t
  }).default+"/cs",
  a = {
    poi: {
      location: "".concat(e, "/poi/poi_to_location")
    },
    user: {
      updateUser: "".concat(e, "/auth/vip/user/update_user"),
      userCardIdForDetail: "".concat(e, "/auth/vip/user/card_id"),
      waterScore: "".concat(e, "/auth/vip/user/water_score"),
      isScoreAboutExpiry: "".concat(e, "/auth/vip/user/is_score_about_expiry"),
      scoreIntroduction: "".concat(e, "/auth/user/score_introduction"),
      scoreIntroductionV2: "".concat(e, "/auth/user/score_introduction/v2"),
      isNewUser: "".concat(e, "/auth/vip/user/is_new"),
      wxAuth: "".concat(e, "/auth/user/wx_auth")
    },
    goods: {
      list: "".concat(e, "/auth/wx_store/query/item_list"),
      detail: "".concat(e, "/auth/wx_store/query/item_detail"),
      listWithItemNos: "".concat(e, "/auth/wx_store/query/items"),
      recommendList: "".concat(e, "/auth/wx_store/recommend/items_with_sku"),
      detailSimilarityList: "".concat(e, "/auth/wx_store/recommend/similarity_with_sku"),
      childCategory: "".concat(e, "/auth/category/select/category/detail"),
      skuItem: "".concat(e, "/auth/wx_store/query/sku/one"),
      stockQuery: "".concat(e, "/auth/wx_store/query/item/stock"),
      stockQueryNew: "".concat(e, "/auth/wx_store/query/item/stock/combination"),
      skuListWitSpecItemNos: "".concat(e, "/auth/wx_store/query/item/sku"),
      itemWarehouseInfo: "".concat(e, "/auth/wx_store/query/item_warehouse_info"),
      integralQuery: "".concat(e, "/auth/wx_store/query/item_list"),
      depositRule: "".concat(e, "/auth/wx_store/front_money/rule")
    },
    card: {
      list: "".concat(e, "/auth/wx_item/query/card_list"),
      detail: "".concat(e, "/auth/wx_item/query/card_detail"),
      idForList: "".concat(e, "/auth/wx_item/query/cards"),
      coupon: "".concat(e, "/auth/vip/user/available_card"),
      bindMemberCard: "".concat(e, "/auth/vip/user/bind_outer_user"),
      bindPhoneMemberCard: "".concat(e, "/auth/vip/user/phone_bind_user"),
      sendVerifyCode: "".concat(e, "/auth/vip/user/send_verify_code"),
      shopCard: "".concat(e, "/auth/client/guide/select")
    },
    order: {
      unifiedOrder: "".concat(e, "/auth/vip/order/unifiedOrder"),
      list: "".concat(e, "/auth/vip/order/query_list"),
      detail: "".concat(e, "/auth/vip/order/detail"),
      cancel: "".concat(e, "/auth/vip/order/close"),
      confirmDelivery: "".concat(e, "/auth/vip/order/confirmDelivery"),
      refund: "".concat(e, "/auth/vip/order/refund"),
      stat: "".concat(e, "/auth/vip/order/stat"),
      payOrder: "".concat(e, "/auth/vip/order/pay"),
      cal_price: "".concat(e, "/auth/vip/order/cal_price"),
      coupons: "".concat(e, "/auth/vip/order/query_favorable"),
      refundList: "".concat(e, "/auth/vip/order/refund/list"),
      query_logistics: "".concat(e, "/auth/vip/order/logistics"),
      refundOrder: "".concat(e, "/auth/vip/order/refund"),
      refundFillLogistics: "".concat(e, "/auth/vip/order/refund/fill_logistics"),
      refundDetail: "".concat(e, "/auth/vip/order/refund/detail"),
      queryRefundFee: "".concat(e, "/auth/vip/order/query_refund_fee"),
      shippingCompanyList: "".concat(e, "/auth/vip/order/shipping_company_list"),
      revertRefund: "".concat(e, "/auth/vip/order/refund/revert"),
      updateApplyRefund: "".concat(e, "/auth/vip/order/refund/update"),
      updateAddress: "".concat(e, "/auth/vip/order/address/update"),
      schedule: "".concat(e, "/auth/delivery_local/dada/track")
    },
    logistics: {
      logistics: "".concat(e, "/logistics/message/query")
    },
    coupon: {
      ticketlist: "".concat(e, "/auth/coupon/ticket/list"),
      del: "".concat(e, "/auth/coupon/ticket/delete"),
      list: "".concat(e, "/auth/channel/list"),
      collect: "".concat(e, "/auth/coupon/ticket/collect"),
      auto_collect: "".concat(e, "/auth/coupon/ticket/plan/auto_collect"),
      detail: "".concat(e, "/auth/coupon/query"),
      detailByCode: "".concat(e, "/auth/coupon/ticket/query_by_code"),
      myticketsDetail: "".concat(e, "/auth/coupon/ticket/query"),
      tickdetail: "".concat(e, "/auth/channel/detail"),
      coupons: "".concat(e, "/auth/coupon/ticket/query_available"),
      integral: "".concat(e, "/auth/coupon/ticket/collect_use_integral"),
      get_coupons: "".concat(e, "/auth/coupon/plan/list"),
      plancollect: "".concat(e, "/auth/coupon/ticket/plan/collect"),
      query_status: "".concat(e, "/auth/coupon/list_sub"),
      selectByBusinessIds: "".concat(e, "/auth/coupon/selectByBusinessIds")
    },
    login: {
      login: "".concat(e, "/login/login"),
      loginV2: "".concat(e, "/login_v2/login_v2"),
      register: "".concat(e, "/auth/user/register"),
      userDeal: "".concat(e, "/auth/user/agreement/query_user_agreement")
    },
    getPageConfig: "".concat(e, "/ma/config/page"),
    getUserConfig: "".concat(e, "/ma/config/template"),
    getTemplateID: "".concat(e, "/auth/ma/sub/get_template_id"),
    address: {
      list: "".concat(e, "/auth/vip/user/address/list"),
      delete: "".concat(e, "/auth/vip/user/address/delete"),
      default: "".concat(e, "/auth/vip/user/address/default"),
      add: "".concat(e, "/auth/vip/user/address/add"),
      update: "".concat(e, "/auth/vip/user/address/update")
    },
    userInfo: {
      detail: "".concat(e, "/auth/vip/user/user_detail"),
      update: "".concat(e, "/auth/vip/user/update_user"),
      balance: "".concat(e, "/auth/vip/user/balance"),
      cardStatus: "".concat(e, "/auth/vip/user/wx_card_status"),
      userRight: "".concat(e, "/auth/vip/user/user_right"),
      cardSign: "".concat(e, "/auth/vip/config/card_sign"),
      changePhoneNum: "".concat(e, "/auth/vip/user/change_phone_confirm"),
      sendVCode: "".concat(e, "/auth/vip/user/send_vcode")
    },
    store: {
      list: "".concat(e, "/auth/store/query_list"),
      nearest: "".concat(e, "/auth/store/query_nearest"),
      nearby: "".concat(e, "/auth/store/query_nearby"),
      nearby_New: "".concat(e, "/auth/store/list/query_nearby"),
      choose: "".concat(e, "/auth/store/choose"),
      queryCustomizeShop: "".concat(e, "/auth/store/query_CustomizeShop")
    },
    appointment: {
      servePerson: "".concat(e, "/auth/scheduled/technician/query"),
      query: "".concat(e, "/auth/scheduled/query"),
      scheduled: "".concat(e, "/auth/scheduled/time/query")
    },
    rooms: {
      inventory: "".concat(e, "/auth/wx_store/query/hotel/stock")
    },
    ticket: {
      query: "".concat(e, "/auth/ticket/query"),
      face_bind: "".concat(e, "/auth/vip/order/ticket_face_bind")
    },
    bill: {
      query: "".concat(e, "/auth/vip/user/water_bill")
    },
    group: {
      detail: "".concat(e, "/auth/pt/query_group_detail"),
      queryOwn: "".concat(e, "/auth/pt/query_own_group"),
      queryActivityByGroupNo: "".concat(e, "/auth/pt/query_activity_by_group_no")
    },
    myCardList: "".concat(e, "/auth/vip/user/card"),
    tempMessage: "".concat(e, "/auth/user/add_formId"),
    verification: {
      getQRCode: "".concat(e, "/auth/vip/verification/getQRCode"),
      getQRCodeV2: "".concat(e, "/auth/vip/verification/getNewQRCode"),
      verificate: "".concat(e, "/auth/vip/verification/do"),
      status: "".concat(e, "/auth/vip/verification/status/query")
    },
    membershipCode: {
      getBarCode: "".concat(e, "/auth/vip/user/code_ma")
    },
    shopping_card: {
      add: "".concat(e, "/auth/vip/shopping_cart/add"),
      queryList: "".concat(e, "/auth/vip/shopping_cart/queryList"),
      remove: "".concat(e, "/auth/vip/shopping_cart/remove"),
      update: "".concat(e, "/auth/vip/shopping_cart/update"),
      batch_remove: "".concat(e, "/auth/vip/shopping_cart/batch_remove")
    },
    classify: {
      categoryType: "".concat(e, "/auth/category/use/select"),
      category: "".concat(e, "/auth/wx_store/query/category"),
      categoryNew: "".concat(e, "/auth/wx_store/query/category/new"),
      categoryRoot: "".concat(e, "/auth/category/select/root"),
      categoryChild: "".concat(e, "/auth/category/select/category/detail"),
      categoryAll: "".concat(e, "/auth/wx_store/query/category_all"),
      itemSku: "".concat(e, "/auth/wx_store/query/item_list"),
      itemSkuList: "".concat(e, "/auth/wx_store/query/item_sku_list"),
      categoryList: "".concat(e, "/auth/store-category/queryList")
    },
    redPacket: {
      status: "".concat(e, "/auth/lucky_money/query/status"),
      plan: "".concat(e, "/auth/lucky_money/query/plan"),
      collect: "".concat(e, "/auth/lucky_money/collect"),
      record: "".concat(e, "/auth/lucky_money/query/record"),
      join: "".concat(e, "/auth/lucky_money/join"),
      list: "".concat(e, "/auth/lucky_money/query/cash_coupon"),
      planInfo: "".concat(e, "/auth/lucky_money/query/plan_info"),
      listV2: "".concat(e, "/auth/red_packet/queryList"),
      UnZipList: "".concat(e, "/auth/lucky_money/query/cash_coupon/v2"),
      balance: "".concat(e, "/auth/vip/user/balance"),
      cashing: "".concat(e, "/auth/red_packet/cash/cashing"),
      flow: "".concat(e, "/auth/red_packet/cash/water_bill"),
      count: "".concat(e, "/auth/red_packet/count")
    },
    comment: {
      count: "".concat(e, "/auth/item_comment/item/comment_group_count"),
      query: "".concat(e, "/auth/item_comment/query"),
      query_my: "".concat(e, "/vip/auth/item_comment/query_my"),
      add: "".concat(e, "/auth/vip/item_comment/insert")
    },
    cut_price: {
      itemNosToList: "".concat(e, "/auth/bargain/list/itemNos"),
      itemNosSkuIdToList: "".concat(e, "/auth/bargain/list/itemNos_sku"),
      initiate: "".concat(e, "/auth/bargain/initiate"),
      assist: "".concat(e, "/auth/bargain/assist"),
      assistList: "".concat(e, "/auth/bargain/assist/list"),
      list: "".concat(e, "/auth/bargain/list"),
      detail: "".concat(e, "/auth/bargain/detail"),
      initiateList: "".concat(e, "/auth/bargain/initiate/list")
    },
    activityPopup: {
      query: "".concat(e, "/auth/popup/query")
    },
    giftCard: {
      theme: "".concat(e, "/auth/wx_store/query/gift_card/theme"),
      gift_card: "".concat(e, "/auth/vip/user/gift_card"),
      send_out: "".concat(e, "/auth/vip/user/gift_card/send_out"),
      active: "".concat(e, "/auth/vip/user/gift_card/activate"),
      card_detail: "".concat(e, "/auth/vip/user/gift_card_detail"),
      card_pw: "".concat(e, "/auth/vip/user/gift_card/pw"),
      giftCardBill: "".concat(e, "/auth/vip/user/gift_card/bill"),
      cancelSend: "".concat(e, "/auth/vip/user/gift_card/cancel_send_out")
    },
    deal: "".concat(e, "/auth/recharge/agreement/query/agreement"),
    specialActivity: {
      partitions: "".concat(e, "/auth/topic_activity/topic_with_partitions"),
      detail: "".concat(e, "/auth/topic_activity/items_by_partition"),
      reduce: "".concat(e, "/auth/topic_activity/reduce"),
      limitItemList: "".concat(e, "/auth/topic_activity/topic_with_items")
    },
    upload: "".concat(e, "/auth/vip/img/upload"),
    getReceipt: "".concat(e, "/invoice/generateQrCode"),
    courtesy: {
      participate: "".concat(e, "/auth/order/present/participate"),
      list: "".concat(e, "/auth/coupon/list_sub"),
      getOrderPresentCoupon: "".concat(e, "/auth/order/present/getOrderPresentCoupon")
    },
    shareGift: {
      query: "".concat(e, "/auth/share/present/queryByStoreId"),
      addRecordUser: "".concat(e, "/auth/share/present/addRecordUser")
    },
    article: {
      list: "".concat(e, "/auth/market_article/query/list"),
      availableList: "".concat(e, "/auth/market_article/query_available"),
      detail: "".concat(e, "/auth/market_article/query"),
      commentList: "".concat(e, "/auth/market_article/comment/query"),
      addComment: "".concat(e, "/auth/market_article/comment/add"),
      changeLike: "".concat(e, "/auth/like/record/addLike"),
      deleteComment: "".concat(e, "/auth/market_article/comment/delete")
    },
    luckyDial: {
      startGame: "".concat(e, "/auth/lucky_turning/draw"),
      getActivityDetails: "".concat(e, "/auth/lucky_turning/query"),
      getUserActivityMessage: "".concat(e, "/auth/lucky_turning/query_member"),
      getUserRecords: "".concat(e, "/auth/lucky_turning/query_win_present_record"),
      invite: "".concat(e, "/auth/lucky_turning/invite"),
      draw: "".concat(e, "/auth/lucky_turning/draw"),
      addLuckTimes: "".concat(e, "/auth/lucky_times/plus")
    },
    signIn: {
      getSignInDetail: "".concat(e, "/auth/signed/querySignedActivity"),
      getSignInList: "".concat(e, "/auth/signed/querySignRecord"),
      querySignedAwards: "".concat(e, "/auth/signed/querySignedAwards"),
      actionSignIn: "".concat(e, "/auth/signed/sign"),
      getCoupon: "".concat(e, "/auth/coupon/query"),
      hasSignIn: "".concat(e, "/auth/signed/onGoing")
    },
    seckill: {
      getSeckillList: "".concat(e, "/auth/seckill/query_activity_list"),
      querySetting: "".concat(e, "/auth/seckill/query_setting"),
      queryActivityRemain: "".concat(e, "/auth/seckill/query_activity_remain")
    },
    microOrder: {
      checkPersonalInfo: "".concat(e, "/auth/customizeOrder/checkPersonalInfo"),
      queryList: "".concat(e, "/auth/customizeOrder/queryList"),
      add: "".concat(e, "/auth/customizeOrder/createOrder"),
      cancel: "".concat(e, "/auth/customizeOrder/cancelOrder"),
      query: "".concat(e, "/auth/customizeOrder/query"),
      confirmReceipt: "".concat(e, "/auth/customizeOrder/confirmReceipt"),
      cal_price: "".concat(e, "/auth/customizeOrder/cal_price"),
      placeAnOrder: "".concat(e, "/auth/customizeOrder/placeAnOrder")
    },
    distribution: {
      register: "".concat(e, "/auth/vip/dis_person/register"),
      cashOut: "".concat(e, "/auth/vip/distribution/cash_out/apply"),
      popularizeMaterial: "".concat(e, "/auth/distribution/item/queryList"),
      cashOutRecord: "".concat(e, "/auth/vip/distribution/cash_out/queryList"),
      commissionRecord: "".concat(e, "/auth/vip/dis_commission/queryRecords"),
      performanceRank: "".concat(e, "/auth/vip/dis_commission/rank"),
      myRank: "".concat(e, "/auth/vip/dis_commission/myRank"),
      myCustomers: "".concat(e, "/auth/vip/dis_customer/queryMyCustomers"),
      queryCategory: "".concat(e, "/auth/distribution/item/queryCategory"),
      selectMyDistributor: "".concat(e, "/auth/vip/dis_customer/selectMyDistributor"),
      bindCustomerRelation: "".concat(e, "/auth/vip/dis_customer/bindCustomerRelation"),
      selectSingle: "".concat(e, "/auth/vip/dis_person/selectSingle"),
      distributionState: "".concat(e, "/auth/vip/dis_person/selectJoinedActivities")
    },
    giftActivity: {
      list: "".concat(e, "/auth/vip/gift_activity/giftList"),
      giftDetail: "".concat(e, "/auth/wx_store_gift/query/gift_detail"),
      giftRule: "".concat(e, "/auth/vip/gift_rule/get")
    },
    internalVoucher: {
      gainAvailableVoucherNum: "".concat(e, "/auth/dis/voucher/gainAvailableVoucherNum"),
      gainVoucher: "".concat(e, "/auth/dis/voucher/gainVoucher"),
      getCleanTime: "".concat(e, "/auth/dis/voucher/getCleanTime"),
      getRecord: "".concat(e, "/auth/dis/voucher/getRecord"),
      getVoucherNum: "".concat(e, "/auth/dis/voucher/getVoucherNum"),
      getSystemGiveTime: "".concat(e, "/auth/dis/voucher/getSystemGiveTime")
    },
    below: {
      face_score: "".concat(e, "/auth/interact/face/query"),
      collect_coupon: "".concat(e, "/auth/interact/face/collect_coupon")
    },
    photography: {
      works: "".concat(e, "/auth/photo/sample/queryList"),
      works_detail: "".concat(e, "/auth/photo/sample/query"),
      formConfig: "".concat(e, "/auth/clue/query_config"),
      clueAdd: "".concat(e, "/auth/clue/add"),
      collectCoupon: "".concat(e, "/auth/clue/collect_coupon")
    },
    agreement: {
      download: "".concat(e, "/auth/vip/agreement/download")
    },
    formTool: {
      getConfig: "".concat(e, "/auth/client/form/get"),
      addSubmit: "".concat(e, "/auth/client/form/submit/add")
    },
    taskCenter: {
      getTaskList: "".concat(e, "/auth/promotion/task/list"),
      getAwardList: "".concat(e, "/auth/promotion/award/list"),
      getInviteMemberList: "".concat(e, "/auth/promotion/invite/list"),
      getShareId: "".concat(e, "/auth/promotion/add/share"),
      addInviteRecord: "".concat(e, "/auth/promotion/add/invite")
    },
    couponpocket: {
      couponpocketList: "".concat(e, "/auth/couponpocket/query"),
      detail: "".concat(e, "/auth/couponpocket/detail_v2")
    },
    points: {
      addPhoto: "".concat(e, "/auth/member/photograph/score/add"),
      photoPointList: "".concat(e, "/auth/member/photograph/score/queryList"),
      addScan: "".concat(e, "/auth/member/qr/score/add")
    },
    oss: {
      ossData: "".concat(e, "/auth/oss/config/detail")
    },
    activity: {
      list: "".concat(e, "/auth/pt/query_activity"),
      groupList: "".concat(e, "/auth/pt/query_group"),
      querySetting: "".concat(e, "/auth/pt/query_setting"),
      cutSetting: "".concat(e, "/auth/bargain/setting/select"),
      collectCard: {
        activityDetail: "".concat(e, "/auth/fmall/activity/list"),
        exchangeList: "".concat(e, "/auth/fmall/activity-card/query-rule-list"),
        bulletList: "".concat(e, "/auth/fmall/activity-card/show-exchange-record"),
        queryCard: "".concat(e, "/auth/fmall/activity-card/query-card"),
        initCard: "".concat(e, "/auth/fmall/activity-card/initial-card"),
        receiveShare: "".concat(e, "/auth/fmall/activity-card/receive-share"),
        queryCardInfo: "".concat(e, "/auth/fmall/activity-card/query-card-info"),
        queryHelpRanking: "".concat(e, "/auth/fmall/activity-card/query-help-ranking"),
        queryUnuseCount: "".concat(e, "/auth/fmall/activity-card/query-unuse-count"),
        drawCard: "".concat(e, "/auth/fmall/activity-card/draw-card"),
        receiveCard: "".concat(e, "/auth/fmall/activity-card/receive-card"),
        exchange: "".concat(e, "/auth/fmall/activity-card/cash-prize"),
        sendCard: "".concat(e, "/auth/fmall/activity-card/send-card"),
        giftList: "".concat(e, "/auth/fmall/activity-card/show-gift"),
        getCoupon: "".concat(e, "/auth/coupon/ticket/collect"),
        getQRCode: "".concat(e, "/auth/vip/verification/getNewQRCode")
      },
      rookieAward: {
        activityDetail: "".concat(e, "/auth/fmall/activity/new/activity/list")
      },
      bargain: {
        queryBullet: "".concat(e, "/auth/fmall/activity-bargain/query-bullet"),
        activityDetail: "".concat(e, "/auth/fmall/activity/list"),
        goodList: "".concat(e, "/auth/fmall/activity-bargain/goods-list"),
        processingActivityList: "".concat(e, "/auth/fmall/activity/processing-activity-list"),
        createBargain: "".concat(e, "/auth/fmall/activity-bargain/create-bargain"),
        participateShare: "".concat(e, "/auth/fmall/activity/participate-share"),
        initiateShare: "".concat(e, "/auth/fmall/activity/initiate-share"),
        helpBargainDetail: "".concat(e, "/auth/fmall/activity-bargain/help-bargain-detail"),
        helpBargain: "".concat(e, "/auth/fmall/activity-bargain/help-bargain"),
        bargainDetail: "".concat(e, "/auth/fmall/activity-bargain/detail"),
        equityApply: "".concat(e, "/auth/fmall/equity/apply"),
        decryptCode: "".concat(e, "/auth/fmall/equity/decrypt-code"),
        myGiftList: "".concat(e, "/auth/fmall/activity-card/show-gift")
      },
      oldBringsNew: {
        activityDetail: "".concat(e, "/auth/oldinvitenew/activity/new/activity/list"),
        receive: "".concat(e, "/auth/fmall/activity/old-invite-new/old-invite-new"),
        invitationList: "".concat(e, "/auth/fmall/activity/old-invite-new/invite-record")
      }
    },
    equity: {
      memberDetail: "".concat(e, "/vip/member/queryCsMemberDetailById"),
      levelConfig: "".concat(e, "/vip/member/level/queryInitLevelConfig"),
      levelEquity: "".concat(e, "/vip/member/level/queryLevelRightsListCs"),
      levelConfigRule: "".concat(e, "/vip/member/level/queryLevelConfigList"),
      queryLevelRightsListCs: "".concat(e, "/vip/member/level/sce-card/queryLevelRightsListCs")
    },
    park: {
      bind: "".concat(e, "/vip/member/carlicense/bind"),
      queryByMemberIdCs: "".concat(e, "/vip/member/carlicense/queryByMemberIdCs"),
      unBind: "".concat(e, "/vip/member/carlicense/unBind"),
      queryByStoreId: "".concat(e, "/business/store/project/park/queryByStoreId"),
      queryParkRecordByMemberIdCs: "".concat(e, "/vip/member/carlicense/queryParkRecordByMemberIdCs"),
      queryParkRecordOrderRecordIdCs: "".concat(e, "/vip/member/carlicense/queryParkRecordOrderRecordIdCs")
    },
    business: {
      queryBuilding: "".concat(e, "/business/building/query"),
      queryList: "".concat(e, "/business/queryList"),
      queryBusinessList: "".concat(e, "/business/queryBusinessList"),
      queryBusinessByCode: "".concat(e, "/business/queryBusinessByCode")
    },
    horseCard: {
      yezhuRenzheng: "".concat(e, "/member/udc/proprietor-authentication/authentication"),
      invite: "".concat(e, "/member/udc/invite/invite"),
      inviteList: "".concat(e, "/member/udc/invite/inviteList"),
      backFillInvite: "".concat(e, "/member/udc/invite/backFillInvite")
    }
  };
exports.default = a;