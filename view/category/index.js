Page({
    data: {
        windowWidth: 0,
        windowHeight: 0,
        index: 0
    },
    onLoad: function (options) {
        // wx.getSystemInfo({
        //     success: function (res) {
        //         that.setData({
        //             windowWidth: res.windowWidth,
        //             windowHeight: res.windowHeight
        //         });
        //     }
        // });
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
    },
    handleProduct: function (event) {
        wx.navigateTo({
            url: 'product/index'
        });
    }
});
