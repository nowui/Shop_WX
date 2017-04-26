const notification = require('../../util/notification.js');
const http = require("../../util/http.js");

Page({
    data: {
        delivery_list: []
    },
    onUnload: function () {
        notification.remove('notification_delivery_index_load', this);
    },
    onLoad: function () {
        notification.on('notification_delivery_index_load', this, function (data) {
            this.handleLoad();
        });

        this.handleLoad();
    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    handleLoad: function () {
        http.request({
            url: '/delivery/list',
            data: {
                page_index: 0,
                page_size: 0
            },
            success: function (data) {
                this.setData({
                    delivery_list: data
                });
            }.bind(this)
        });
    }
});
