const constant = require("../../util/constant.js");

Page({
    data: {
        window_width: 0,
        category_list: constant.category_list,
        category_id: 0
    },
    onLoad: function () {
        wx.getSystemInfo({
            success: function (res) {
                this.setData({
                    window_width: res.windowWidth
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
            category_id: event.currentTarget.id
        });
    }
});
