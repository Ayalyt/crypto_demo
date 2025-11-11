Component({
  options: {
    addGlobalClass: !0
  },
  properties: {
    data: {
      type: Array,
      value: [],
      observer: function(t, a, e) {
        JSON.stringify(t) !== JSON.stringify(a) && (this.setData({
          apartments: t
        }), this.setValue())
      }
    },
    value: {
      type: null,
      value: null,
      observer: function(t, a, e) {
        t !== a && (this.setData({
          apartmentId: t
        }), this.setValue())
      }
    },
    myApartmentIds: {
      type: Array,
      value: []
    },
    showApartmentSelect: {
      type: null,
      value: null,
      observer: function(t, a, e) {
        t && this.setData({
          show: !0
        })
      }
    }
  },
  data: {
    show: !1,
    cityIndex: 0,
    apartments: [],
    apartmentId: "",
    apartmentName: ""
  },
  methods: {
    onShow: function() {
      this.setData({
        show: !0
      }), this.setValue()
    },
    setValue: function() {
      var t = this.data,
        a = t.apartments,
        e = t.apartmentId,
        n = {
          cityIndex: void 0,
          apartmentName: ""
        };
      a.forEach((function(t, a) {
        (t.apartments || []).forEach((function(t) {
          t.apartmentId === e && (n = {
            cityIndex: a,
            apartmentName: t.apartmentName
          })
        }))
      })), this.setData(n)
    },
    onSwitchCity: function(t) {
      var a = t.currentTarget.dataset.index;
      this.data.apartments[a] && this.setData({
        cityIndex: a
      })
    },
    onSelect: function(t) {
      var a = t.currentTarget.dataset.item;
      this.setData({
        show: !1,
        apartmentId: a.apartmentId,
        apartmentName: a.apartmentName
      }), this.triggerEvent("change", {
        value: a.apartmentId,
        text: a.apartmentName,
        data: a
      })
    },
    onClose: function() {
      this.setData({
        show: !1
      })
    }
  }
});