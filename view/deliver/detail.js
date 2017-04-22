const china = require("../../util/china.js");

Page({
    data: {
        is_dialog: false,
        province_list: [],
        province: "",
        city_list: [],
        city: "",
        area_list: [],
        area: "",
        province_city_area: [0, 0, 0]
    },
    onLoad: function () {
        var province_list = [];
        var city_list = [];
        var area_list = [];

        for (var i = 0; i < china.children.length; i++) {
            province_list.push(china.children[i].name);
        }

        for (var i = 0; i < china.children[0].children.length; i++) {
            city_list.push(china.children[0].children[i].name);
        }

        for (var i = 0; i < china.children[0].children[0].children.length; i++) {
            area_list.push(china.children[0].children[0].children[i].name);
        }

        this.setData({
            province_list: province_list,
            city_list: city_list,
            area_list: area_list
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
    handlDialogOpen: function () {
        this.setData({
            is_dialog: true
        });
    },
    handlDialogCancel: function () {
        this.setData({
            is_dialog: false
        });
    },
    handlDialogOK: function () {
        var province_index = this.data.province_city_area[0];
        var city_index = this.data.province_city_area[1];
        var area_index = this.data.province_city_area[2];

        var province = china.children[province_index].name;
        var city = china.children[province_index].children[city_index].name;
        var area = china.children[province_index].children[city_index].children[area_index].name;

        console.log(province)
        console.log(city)
        console.log(area)

        this.setData({
            province: province,
            city: city,
            area: area,
            is_dialog: false
        });
    },
    handPickerChange: function (event) {
        if (this.data.is_dialog) {
            var province_city_area = event.detail.value;
            var province_index = province_city_area[0];
            var city_index = province_city_area[1];
            var area_index = province_city_area[2];

            if (this.data.province_city_area[0] != province_city_area[0]) {
                city_index = 0;
                area_index = 0;
            } else if (this.data.province_city_area[1] != province_city_area[1]) {
                area_index = 0;
            }

            var city_list = [];
            var area_list = [];

            for (var i = 0; i < china.children[province_index].children.length; i++) {
                city_list.push(china.children[province_index].children[i].name);
            }

            for (var i = 0; i < china.children[province_index].children[city_index].children.length; i++) {
                area_list.push(china.children[province_index].children[city_index].children[i].name);
            }

            this.setData({
                city_list: city_list,
                area_list: area_list,
                province_city_area: [province_index, city_index, area_index]
            });
        }
    }
});
