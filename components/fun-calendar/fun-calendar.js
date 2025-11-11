var t = require("../../D2980F274CF6B1BFB4FE672005896AC2.js");
Component({
  properties: {
    startDateString: {
      type: String,
      value: void 0
    },
    endDateString: {
      type: String,
      value: void 0
    },
    selectedDateString: {
      type: String,
      value: void 0,
      observer: "selectedDateChanged"
    },
    startDate: {
      type: Date,
      value: void 0
    },
    endDate: {
      type: Date,
      value: void 0
    },
    selectedDate: {
      type: Date,
      value: void 0,
      observer: "selectedDateChanged"
    },
    height: {
      type: Number,
      value: 200,
      observer: "heightChanged"
    }
  },
  data: {
    weeks: ["日", "一", "二", "三", "四", "五", "六"],
    calendarData: [],
    startDateString: "",
    endDateString: "",
    selectedDateString: "",
    scrollViewHeight: 0
  },
  lifetimes: {
    attached: function() {
      this.initData()
    }
  },
  methods: {
    initDate: function() {
      var t = void 0;
      this.data.startDateString && (t = new Date(this.formatDateString(this.data.startDateString))), this.data.startDate = t || new Date;
      var e = void 0;
      this.data.selectedDateString && (e = new Date(this.formatDateString(this.data.selectedDateString))), this.data.selectedDate = e || new Date;
      var a = void 0;
      if (this.data.endDateString && (a = new Date(this.formatDateString(this.data.endDateString))), a) this.data.endDate = a;
      else {
        var r = new Date;
        r.setFullYear(r.getFullYear() + 1), this.data.endDate = r
      }
    },
    initData: function() {
      var e = 0;
      this.initDate();
      var a = t.dateFormatter("yyyy-MM-dd", this.data.startDate),
        r = t.dateFormatter("yyyy-MM-dd", this.data.endDate),
        i = t.dateFormatter("yyyy-MM-dd", this.data.selectedDate);
      this.setData({
        startDateString: a,
        endDateString: r,
        selectedDateString: i
      });
      for (var n = t.dateFormatter("yyyy/MM", this.data.startDate), d = t.dateFormatter("yyyy-MM", this.data.endDate), s = new Date(n + "/01"), D = [], g = "";;) {
        var h = new Date(s.getTime() + 24 * e * 60 * 60 * 1e3),
          y = t.dateFormatter("yyyy-MM", h);
        if (y > d) break;
        var l = t.dateFormatter("yyyy-MM-dd", h),
          o = {
            dateString: l,
            dateMonthString: y,
            year: h.getFullYear(),
            month: h.getMonth() + 1,
            day: h.getDate(),
            week: h.getDay(),
            type: this.detectDayType(l)
          };
        if (g != y) {
          g = y, o.marginLeft = 14.28 * o.week;
          var c = {
            key: y,
            values: [o]
          };
          D.push(c)
        } else {
          (c = D[D.length - 1]).values.push(o)
        }
        e++
      }
      this.setData({
        calendarData: D
      })
    },
    detectDayType: function(t) {
      return t < this.data.startDateString ? 1 : t >= this.data.startDateString && t <= this.data.endDateString ? 2 : 3
    },
    selectedDate: function(t) {
      var e = t.currentTarget.dataset.date;
      if (2 == e.type) {
        var a = new Date(e.dateString.replace(/-/g, "/"));
        this.setData({
          selectedDateString: e.dateString,
          selectedDate: a
        }), this.triggerEvent("selected", a)
      }
    },
    getSelectedDate: function() {
      return this.data.selectedDate
    },
    heightChanged: function(t, e, a) {
      var r = 50 / (750 / wx.getSystemInfoSync().windowWidth),
        i = this.data.height - r;
      this.setData({
        scrollViewHeight: i
      })
    },
    formatDateString: function(t) {
      var e = "";
      t && t.length >= 10 && (e = t.substr(0, 4) + "/" + t.substr(5, 2) + "/" + t.substr(8, 2));
      return e
    },
    selectedDateChanged: function(t, e, a) {}
  }
});