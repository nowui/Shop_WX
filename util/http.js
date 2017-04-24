const constant = require("./constant.js");
const storage = require("./storage.js");

function request(config) {
    wx.request({
        url: constant.host + config.url,
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Token': storage.getToken(),
            'Platform': 'WX',
            'Version': '1.0.0'
        },
        data: config.data,
        success: function(response) {
            if (response.data.code == 200) {
                config.success(response.data.data);
            } else {
                wx.showModal({
                    content: '网络发生错误',
                    confirmColor: constant.color,
                    showCancel: false,
                    success: function () {

                    }
                });
            }
        }
    });
}

module.exports = {
    request: request
};