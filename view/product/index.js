const constant = require("../../util/constant.js");
const http = require("../../util/http.js");
const storage = require("../../util/storage.js");
const Quantity = require('../../component/quantity/index');
const htmlToWxml = require('../../util/htmlToWxml.js');

Page(Object.assign({}, Quantity, {
    data: {
        product_quantity: {
            quantity: 1,
            min: 1,
            max: 99999
        },
        window_width: 0,
        tab_index: 0,
        slider_offset: 0,
        slider_left: 0,
        slider_width: 0,
        sku_id: '',
        product_id: '',
        product_name: '',
        product_price: 0.00,
        product_image: [],
        product_image_list: [],
        product_content: [],
        cart_count: []
    },
    onLoad: function (option) {
        http.request({
            url: '/product/find',
            data: {
                product_id: option.product_id,
                // product_id: '9f813c2d34f746f09b75661bb5278616'
            },
            success: function (data) {
                let product_image_list = JSON.parse(data.product_image_list_original);
                for (let i = 0; i < product_image_list.length; i++) {
                    product_image_list[i] = constant.host + product_image_list[i];
                }

                this.setData({
                    sku_id: data.sku_list[0].sku_id,
                    product_id: data.product_id,
                    product_name: data.product_name,
                    product_price: JSON.parse(data.sku_list[0].product_price)[0].product_price.toFixed(2),
                    product_image: JSON.parse(data.product_image),
                    product_image_list: product_image_list,
                    product_content: htmlToWxml.html2json(data.product_content)
                });
            }.bind(this)
        });

        wx.getSystemInfo({
            success: function (res) {
                this.setData({
                    window_width: res.windowWidth,
                    slider_left: (res.windowWidth / 2 - res.windowWidth / 2) / 2,
                    slider_offset: res.windowWidth / 2 * this.data.tab_index,
                    slider_width: res.windowWidth / 2
                });
            }.bind(this)
        });
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
    handleTab: function (event) {
        this.setData({
            slider_offset: event.currentTarget.offsetLeft,
            tab_index: event.currentTarget.id
        });
    },
    handleZanQuantityChange(event) {
        var componentId = event.componentId;
        var quantity = event.quantity;

        this.setData({
            [`${componentId}.quantity`]: quantity
        });
    },
    handleImageLoad: function (event) {
        var width = event.detail.width;
        var height = event.detail.height;
        var index = event.currentTarget.dataset.index;
        this.data.product_content[index].attr.height = (height / width) * wx.getSystemInfoSync().windowWidth;
        this.setData({
            product_content: this.data.product_content
        });
    },
    handleCart: function () {
        wx.switchTab({
            url: '/view/cart/index'
        })
    },
    handleFavor: function () {
        wx.showToast({
            title: '收藏成功',
            icon: 'success',
            duration: 1500
        });
    },
    handleAddCart: function () {
        if (this.data.product_id == '') {
            return;
        }

        storage.addCart({
            sku_id: this.data.sku_id,
            product_id: this.data.product_id,
            product_name: this.data.product_name,
            product_image: constant.host + this.data.product_image[0],
            product_price: this.data.product_price,
            product_quantity: {
                quantity: this.data.product_quantity.quantity,
                min: 1,
                max: 99999
            },
            product_stock: this.data.product_quantity.max
        });

        this.setData({
            cart_count: storage.getCart().length
        });

        wx.showToast({
            title: '加入成功',
            icon: 'success',
            duration: 1500
        })
    },
    handleBuy: function () {
        if (this.data.product_id == '') {
            return;
        }

        storage.addProduct([{
            sku_id: this.data.sku_id,
            product_id: this.data.product_id,
            product_name: this.data.product_name,
            product_image: constant.host + this.data.product_image[0],
            product_price: this.data.product_price,
            product_quantity: {
                quantity: this.data.product_quantity.quantity,
                min: 1,
                max: 99999
            },
            product_stock: this.data.product_quantity.max
        }]);
    }
}));