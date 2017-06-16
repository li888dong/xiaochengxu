
var app = getApp();

Page({
    data: {
        // 视频临时存放地址
        videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        // 是否显示弹层
        showDialog: false,
        // 视频预览
        showPreVideo: false,
        // 是否上传成功
        uploadSuccess: false
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
    // 视频录制弹层弹层
    videoTips: function(){
        this.setData({
            showDialog: true
        })
    },
    // 录制视频
    startVideo: function(){

        // 关闭提示弹层
        // this.setData({
        //     showDialog: false
        // })

        // 显示预览弹层
        this.setData({
            showPreVideo: true,
            showDialog: false
        })

        var that = this;
        wx.chooseVideo({
            sourceType: ['camera'],
            maxDuration: 40,
            camera: 'front',
            success: function(res) {
                console.log(res.tempFilePath);
                that.setData({
                    videoSrc: res.tempFilePath

                    // 准备上传

                })
            }
        })
    },
    // 重新录制视频
    rechooseVideo: function(){
        // 关闭预览弹层
        this.setData({
            showPreVideo: false,
            showDialog: true,
            videoSrc: ''
        })
    },
    // 上传成功
    uploadSuccess: function(){
        // 上传成功后提示
        wx.showToast({
            title: '上传成功',
            icon: 'success',
            duration: 2000
        });

        // 设置上传成功标签
        this.setData({
            uploadSuccess: true
        });
    },
    // 上传视文件
    uploadVideo: function(){

        this.uploadSuccess();

        wx.uploadFile({
            url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
            filePath: this.data.videoSrc[0],
            name: 'file',
            formData:{
                'user': 'test'
            },
            success: function(res){
                var data = res.data
                //do something

                // 提示上传成功
                // 改变底部按钮状态
                this.uploadSuccess();
            }
        });
    },
    // 跳转至选择开通服务
    toService: function(){
        wx.redirectTo({ url: '../service/service' });
    },
    customData: {
        hi: 'Founder'
    }
});