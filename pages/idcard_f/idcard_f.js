

// 图片等比缩放
var imageUtil = require('../../utils/imageUtil.js'); 

var app = getApp();

Page({
    data: {
        validate: false, // 按钮是否可点
        tempFilePaths: [], // 上传图片临时地址
        previewImg: '', // 上传前预览图地址
        imagewidth: 0,//缩放后的宽  
        imageheight: 0,//缩放后的高  
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
    // 选择身份证正面
    chooseIdCard: function(){
        var _this = this;

        // 选择相片或者自拍
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;

                _this.setData({
                    tempFilePaths: tempFilePaths,
                    previewImg: tempFilePaths,
                    validate: true
                });
               
            }
        })

    },
    // 等比缩放
    imageLoad: function (e) {  
        var imageSize = imageUtil.imageUtil(e)  
        this.setData({  
            imagewidth: imageSize.imageWidth,  
            imageheight: imageSize.imageHeight  
        })  
    },
    // 上传身份证
    uploadIdcard: function(){
        
        // wx.uploadFile({
        //     url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //     filePath: this.data.tempFilePaths[0],
        //     name: 'file',
        //     formData:{
        //         'user': 'test'
        //     },
        //     success: function(res){
        //         var data = res.data
        //         console.log("upload photo:" + data);
        //         //do something
        //     }
        // })

        // 模拟上传成功
        wx.showToast({
            title: '上传成功',
            icon: 'success',
            duration: 2000
        })

        

        // 改变底部按钮状态

        // 点击跳转
        wx.redirectTo({ url: '../idcard_b/idcard_b' });

    },
    customData: {
        hi: 'Founder'
    }
});