App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: function (res) {
        this.globalData.window_width = res.windowWidth;
        this.globalData.window_height = res.windowHeight;
      }.bind(this)
    });
  },
  globalData: {
    window_width: 0,
    window_height: 0
  }
})