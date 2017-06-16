

var app = getApp();

Page({
    data: {
        item1:{
        index:1,
        question:'您的主要收入来源',
        answer:[
            {id:'A',value:'工资、劳务所得'},
            {id:'B',value:'生产经营所得'},
            {id:'C',value:'利息、股息、转让证券等金融性资产收入'},
            {id:'D',value:'出租、出售房地产等非金融性资产收入'},
            {id:'E',value:'无固定收入'}
            ]
        },
        item2:{
        index:2,
        question:'最近您家庭预计进行证券投资的资金占家庭现有总资产（不含自住、自用房产及汽车等固定资产）的比例是',
        answer:[
            {id:'A',value:'70%以上'},
            {id:'B',value:'50%-70%'},
            {id:'C',value:'30%-50%'},
            {id:'B',value:'10%-30%'}
            ]
        },
        result1:'',
        result2:''
        
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
    toQuestionNaire:function(){
        wx.redirectTo({
          url: '../questionnaire/questionnaire',
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