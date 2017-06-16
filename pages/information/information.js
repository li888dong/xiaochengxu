

var formatDate = require('../../utils/formatDate.js');

var app = getApp();

Page({
    data: {
        validate: true,
        // 职业列表下拉数据
        jobArr: ['请选择...', '政府机关', '事业单位', '互联网', '农业', '化工'],
        jobIndex: 0,
        // 学历列表下拉数据
        eduArr: ['请选择...', '博士', '硕士', '本科', '大专', '中专', '高中', '初中', '小学'],
        eduIndex: 0,
        // 日期
        curDate:formatDate.formatDate(),
        // 起始日期-结束日期
        startDate: '请选择...',
        endDate: '请选择...'
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
    // 职业联动
    bindJobChange: function(e) {
        // console.log("job:" + e.detail.value);

        this.setData({
            jobIndex: e.detail.value
        })
    },
    // 学历部联动
    bindEduChange: function(e) {
        // console.log("edu:" + e.detail.value);

        this.setData({
            eduIndex: e.detail.value
        })
    },
    // 起始日期
    listenerStartDatePickerSelected: function(e){
        this.setData({
            startDate: e.detail.value
        })
    },
    // 结束日期
    listenerEndDatePickerSelected: function(e){
        this.setData({
            endDate: e.detail.value
        })
    },
    // 签约协议
    toAgreement: function(){
        // 跳转
        if(this.data.validate){
            wx.redirectTo({ url: '../agreement/agreement' });
        }
    },
    formBindsubmit:function(e){
        
        if(e.detail.value.userName.length==0||e.detail.value.psw.length==0){
            this.setData({
                tip:'提示：'
            })
        }else{
            this.setData({
                tip:''
            })
        }
    },
    formReset:function(){
        this.setData({
            
        })
    },
    customData: {
        hi: 'Founder'
    }
});