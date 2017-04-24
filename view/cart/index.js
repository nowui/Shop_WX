const storage = require("../../util/storage.js");
const Quantity = require('../../component/quantity/index');

Page(Object.assign({}, Quantity, {
    data: {
        is_all: false,
        is_select: false,
        is_edit: false,
        cart_total: 0,
        cart_list: storage.getCart()
    },
    onLoad: function () {

    },
    onReady: function () {

    },
    onShow: function () {
        this.setData({
            cart_count: storage.getCart().length
        });
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
    handleAll: function () {
        this.setData({
            is_all: !this.data.is_all
        });
    },
    handleZanQuantityChange(event) {
        var componentId = event.componentId;
        var quantity = event.quantity;

        for (var i = 0; i < this.data.cart_list.length; i++) {
            if (this.data.cart_list[i].product_id == componentId) {
                this.data.cart_list[i].product_quantity.quantity = quantity;
            }
        }

        this.setData({
            cart_list: this.data.cart_list
        });
    }
}));
