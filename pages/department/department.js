

var app = getApp();

Page({
    data: {
        validate: true,
        proArr: ['北京', '上海', '天津', '湖南', '广东'],
        proIndex: 0,
        cityArr: ['广州', '深圳', '佛山', '东莞'],
        cityIndex: 0,
        depArr: ['广州天河营业部', '越秀营业部', '白云营业部'],
        depIndex: 0
    },
    onLoad: function(options) {
        // Do some initialize when page load.

        // 根据传递过来的推荐人手机号选择营业部

        // 或者 获取用户IP地址
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
    // 变更picker
    // 省级联动
    bindProChange: function(e) {
        // console.log("pro:" + e.detail.value);

        // 获取市级数据
        this.setData({
            proIndex: e.detail.value
        })

        console.log(this.data.proIndex, this.data.cityIndex, this.data.depIndex);
    },
    // 市级联动
    bindCityChange: function(e) {
        // console.log("city:" + e.detail.value);

        // 获取市级营业部数据

        // 设置市级数据
        this.setData({
            cityIndex: e.detail.value
        })

        console.log(this.data.proIndex, this.data.cityIndex, this.data.depIndex);
    },
    // 营业部联动
    bindDepChange: function(e) {
        // console.log("dep:" + e.detail.value);

        // 设置营业部信息
        this.setData({
            depIndex: e.detail.value
        })

        console.log(this.data.proIndex, this.data.cityIndex, this.data.depIndex);
    },
    // 跳转到上传身份证页面
    toIdcardf: function(){
        wx.redirectTo({ url: '../idcard_f/idcard_f' });
    },
    customData: {
        hi: 'Founder'
    }
});