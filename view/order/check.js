const storage = require("../../util/storage.js");
const http = require("../../util/http.js");
const Quantity = require('../../component/quantity/index');

Page(Object.assign({}, Quantity, {
    data: {
        is_delivery: false,
        delivery: {
            delivery_name: '',
            delivery_phone: '',
            delivery_address: ''
        },
        product_list: [],
        freight: 0,
        total: 0
    },
    onUnload: function () {

    },
    onLoad: function () {
        http.request({
            url: '/order/check',
            data: {
                product_list: []
            },
            success: function (data) {
                var is_delivery = false;
                if (data.delivery_name == '') {
                    wx.showModal({
                        content: '您还没有收货地址，是否新建一个？',
                        success: function (res) {
                            if (res.confirm) {
                                wx.navigateTo({
                                    url: '/view/delivery/index'
                                });
                            } else if (res.cancel) {

                            }
                        }
                    });
                } else {
                    is_delivery = true;
                }

                var delivery = {
                    delivery_name: data.delivery_name,
                    delivery_phone: data.delivery_phone,
                    delivery_address: data.delivery_address
                }
                this.setData({
                    is_delivery: is_delivery,
                    delivery: delivery
                });
            }.bind(this)
        });

        var product_list = storage.getProduct();
        var freight = 0;
        var total = 0;

        for (var i = 0; i < product_list.length; i++) {
            var product = product_list[i];

            var product_total_price = product.product_quantity.quantity * product.product_price;

            product.product_total_price = product_total_price.toFixed(2);
            total += product_total_price;
        }

        this.setData({
            product_list: product_list,
            freight: new Number(freight).toFixed(2),
            total: total.toFixed(2)
        });
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

    }
}));