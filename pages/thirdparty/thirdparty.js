

var app = getApp();

Page({
    data: {
        validate: true,
        bankArr: ['请选择银行','中国建设银行', '中国工商银行', '中国银行', '中国农业银行'],
        bankIndex: 0,
        agree:true,
        bankCard:'',
        bankPassword:''
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
    customData: {
        hi: 'Founder'
    },
    // 选择银行
    bindBankChange: function(e) {
        // console.log("bank:" + e.detail.value);

        this.setData({
            bankIndex: e.detail.value
        })

        console.log(this.data.bankIndex);
    },
    //同意协议
    checkAgree:function(e){
        this.setData({
            agree:!this.data.agree
        })
    },
    //输入银行卡号号
    bankCard:function(e){
        console.log(e.detail.value)
        this.setData({
            bankCard:e.detail.value
        })
    },
    //输入银行卡密码
    bankPassword:function(e){
        console.log(e.detail.value)
        this.setData({
            bankCard:e.detail.value
        })
    },
    toRiskTest:function(){
        wx.redirectTo({
          url: '../risktest/risktest',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
});