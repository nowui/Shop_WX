Page({
    data: {
        windowWidth: 0,
        windowHeight: 0
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

        // wx.request({
        //     url: 'http://localhost:8080/product/list',
        //     method: 'POST',
        //     header: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Token': '',
        //         'Platform': 'WX',
        //         'Version': '1.0.0'
        //     },
        //     data: {
        //         product_name: '',
        //         page_index: 1,
        //         page_size: 10
        //     },
        //     success: function(res) {
        //         console.log(res.data)
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

    }
});
