module.exports = {
  mask: function(e) {
    return /^1\d{10}$/.test(e) ? e.slice(0, 3) + "****" + e.slice(7) : e
  }
};