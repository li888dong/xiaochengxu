

// 倒计时
var countdown = require("../../utils/countdown.js");
// 手机号校验
var checkMobile = require("../../utils/checkMobile.js");
// 发送验证码
var sendCode = require("../../utils/sendCode.js");

var app = getApp();

Page({
    data: {
        validate: true,
        second: 6,
        mobile: '',
        code: '',
        recommend: ''
    },
    onLoad: function(options) {
        // Do some initialize when page load.
    },
    onReady: function() {
        // Do something when page ready.
    },
    onShow: function() {
        // Do something when page show.
    },
    onHide: function() {
        // Do something when page hide.
    },
    onUnload: function() {
        // Do something when page close.
    },
    onPullDownRefresh: function() {
        // Do something when pull down.
    },
    onReachBottom: function() {
        // Do something when page reach bottom.
    },
    onShareAppMessage: function () {
        // return custom share data when user share.
    },
    // Event handler.
    viewTap: function() {
        this.setData({
            text: 'Set some data for updating view.'
        })
    },
    // 记录用户手机号
    setDataMobile: function(e){
        this.setData({
            mobile: e.detail.value
        })
    },
    // 校验手机号码
    checkMobile: function(){
        return checkMobile.checkMobile(this.data.mobile);
    },
    // 获取验证码
    getCode: function(){
        // 校验手机号格式
        if(this.checkMobile()){
            // 发送验证码
            sendCode.sendCode(this.data.mobile);
            // 开始倒计时
            countdown.countdown(this);
        }
    },
    // 重发验证码
    reGetCode: function(){
        if(this.checkMobile()){
            // 发送验证码
            sendCode.sendCode(this.data.mobile);
            
            // 重置倒计时秒数
            this.setData({
                second: 60
            });
            countdown.countdown(this);
        }
    },
    // 前往选择营业部
    toDepartment: function(){
        // 提交用户手机号码
        // 获取用户地理位置
        // ...

        // 成功后跳转
        wx.navigateTo({ url: '../department/department' });
    },
    customData: {
        hi: 'Founder'
    }
});