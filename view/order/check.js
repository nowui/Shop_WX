const storage = require("../../util/storage.js");
const Quantity = require('../../component/quantity/index');

Page(Object.assign({}, Quantity, {
    data: {
        cart_list: []
    },
    onLoad: function () {
        //console.log((11 * 568).toFixed(2));
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