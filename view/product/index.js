Page({
    data: {
        windowWidth: 0,
        windowHeight: 0,
        tabs: ["商品介绍", "规格参数", "售后保障"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        sliderWidth: 0
    },
    onLoad: function () {
        wx.getSystemInfo({
            success: function (res) {
                this.setData({
                    windowWidth: res.windowWidth,
                    windowHeight: res.windowHeight,
                    sliderLeft: (res.windowWidth / this.data.tabs.length - res.windowWidth / this.data.tabs.length) / 2,
                    sliderOffset: res.windowWidth / this.data.tabs.length * this.data.activeIndex,
                    sliderWidth: res.windowWidth / this.data.tabs.length
                });
            }.bind(this)
        });
    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});