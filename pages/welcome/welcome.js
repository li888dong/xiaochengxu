
var convert = require("../../utils/convert.js");


var app = getApp();

Page({
    data: {
        red: app.globalData.red,
        white: app.globalData.red,
        agree: true
    },
    onLoad: function (options) {
        // Do some initialize when page load.

    },
    onReady: function () {
        // Do something when page ready.
    },
    onShow: function () {
        // Do something when page show.
    },
    onHide: function () {
        // Do something when page hide.
    },
    onUnload: function () {
        // Do something when page close.
    },
    onPullDownRefresh: function () {
        // Do something when pull down.
    },
    onReachBottom: function () {
        // Do something when page reach bottom.
    },
    onShareAppMessage: function () {
        // return custom share data when user share.
        return {
            title: '自定义分享标题',
            desc: '自定义分享描述',
            path: '/page/user?id=123'
        }
    },
    // Event handler.
    viewTap: function () {
        this.setData({
            text: 'Set some data for updating view.'
        })
    },
    // 查看用户协议
    toAgreement: function(){
        wx.navigateTo({ url: '../agreement/agreement' });
    },
    // 进入手机验证页面
    toMobile: function(){
        wx.navigateTo({ url: '../mobile/mobile' });
    },
    // 是否同意用户协议
    checkAgree: function(e){
        var _ischecked = this.data.agree;

        // 改变默认checked
        if(_ischecked){
            this.setData({"agree": false});
        }else{
            this.setData({"agree": true});
        }
        console.log(_ischecked);
        
    },
    customData: {
        hi: 'Founder'
    }
});