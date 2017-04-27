App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: function (res) {
        this.globalData.window_width = res.windowWidth;
        this.globalData.window_height = res.windowHeight;
      }.bind(this)
    });

    wx.login({
      success: function(res) {
        if (res.code) {
          this.globalData.open_id = res.code;
        }
      }.bind(this)
    });
  },
  globalData: {
    window_width: 0,
    window_height: 0,
    open_id: ''
  }
})