const constant = require("../../util/constant.js");
const http = require("../../util/http.js");

Page({
    data: {
        window_width: 0,
        category_list: [],
        product_list: []
    },
    onLoad: function () {
        // wx.clearStorage();
        
        wx.getSystemInfo({
            success: function (res) {
                this.setData({
                    window_width: res.windowWidth
                });
            }.bind(this)
        });

        http.request({
            url: '/product/list',
            data: {
                product_name: '',
                page_index: 1,
                page_size: 10
            },
            success: function (data) {
                for (let i = 0; i < data.length; i++) {
                    data[i].product_image_original = constant.host + JSON.parse(data[i].product_image_original)[0];
                }

                this.setData({
                    product_list: data
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

    }
});
