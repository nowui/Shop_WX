Page({
    data: {
        windowWidth: 0,
        windowHeight: 0,
        index: 0
    },
    onLoad: function () {
        wx.getSystemInfo({
            success: function (res) {
                this.setData({
                    windowWidth: res.windowWidth,
                    windowHeight: res.windowHeight
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
    handleCategory: function (event) {
        this.setData({
            index: event.target.dataset.id
        });
    }
});
