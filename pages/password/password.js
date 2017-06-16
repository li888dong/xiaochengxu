

var app = getApp();

Page({
    data: {
        validate: false,
        agree: false
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
    // 跳转三方存管
    toThirdparty: function(){
        wx.redirectTo({
          url: '../thirdparty/thirdparty',
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
    },
    customData: {
        hi: 'Founder'
    }
});