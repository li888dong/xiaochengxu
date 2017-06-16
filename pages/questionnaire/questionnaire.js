

var app = getApp();

Page({
    data: {
        item1:{
        index:1,
        question:'请问您是否充分理解并同意网上开户的相关协议？',
        answer:[
            {id:'A',value:'是'},
            {id:'B',value:'否'},
            ]
        },
        item2:{
        index:2,
        question:'请问您选择我公司网上开户是否您本人的真实意愿',
        answer:[
            {id:'A',value:'是'},
            {id:'B',value:'否'},
            ]
        },
        item3:{
        index:3,
        question:'请问您本人是否在网上开户中认真阅读并理解了证券交易风险揭示书、接受了风险交易和评测？',
        answer:[
            {id:'A',value:'是'},
            {id:'B',value:'否'},
            ]
        },
        result1:'',
        result2:'',
        result3:''
        
    
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
    radioChange1:function(e){
        this.setData({
            result1:e.detail.value
        })
        console.log('第一题选择了:'+this.data.result1)
    },
    radioChange2:function(e){
        this.setData({
            result2:e.detail.value
        })
        console.log('第二题选择了:'+this.data.result2)
    },
    radioChange3:function(e){
        this.setData({
            result2:e.detail.value
        })
        console.log('第三题选择了:'+this.data.result2)
    },
    toSuccess:function(){
        wx.redirectTo({
          url: '../success/success',
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