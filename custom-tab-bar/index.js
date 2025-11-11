Component({
  data2: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/index/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "组件"
    }, {
      pagePath: "/index/index2",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "接口"
    }]
  },
  data: {
    selected: 0,
    color: "#999999",
    selectedColor: "#999999",
    brand: {
      pagePath: "/pages/brand/brand",
      iconPath: "/public/imgs/tabbar_logo.png",
      selectedIconPath: "/public/imgs/tabbar_logo_selected.png",
      id: 0
    },
    list: [{
      pagePath: "/pages/store/index",
      iconPath: "/public/imgs/home.png",
      selectedIconPath: "/public/imgs/home_selected.png",
      text: "租房",
      id: 1
    }, {
      pagePath: "/pages/found/found",
      iconPath: "/public/imgs/service.png",
      selectedIconPath: "/public/imgs/service_selected.png",
      text: "发现",
      id: 2
    }, {
      pagePath: "/pages/discover/discover",
      iconPath: "/public/imgs/discover.png",
      selectedIconPath: "/public/imgs/discover_selected.png",
      text: "活动",
      id: 3
    }, {
      pagePath: "/pages/service/service",
      iconPath: "/public/imgs/tabbar_mine.png",
      selectedIconPath: "/public/imgs/tabbar_mine_selected.png",
      text: "我的",
      id: 4
    }]
  },
  attached: function() {},
  methods: {
    switchTab: function(e) {
      var t = e.currentTarget.dataset.path;
      wx.switchTab({
        url: t
      })
    }
  }
});