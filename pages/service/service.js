

var request = require('../../utils/request.js');

var app = getApp();

Page({
  data: {
    serviceArr: [{name: '沪A', seled: false},{name: '深A', seled: false},{name: '沪基金', seled: false},{name: '深基金', seled: false}]
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
  // 选择开通服务
  seledObj: function(e){
    var _id = e.target.id;
    // console.log(e);
    var _curItem = this.data.serviceArr[_id],
        _curSeled = _curItem.seled,
        _tempArr = this.data.serviceArr;
    console.log(this.data.serviceArr[_id].seled)
    _tempArr[_id].seled = _curSeled ? false : true;
     
    this.setData({
       serviceArr : _tempArr
    });

    // console.log(_tempArr);

    // 请求开通服务
    // Request.request(url,postData,doSuccess,doFail,doComplete)
    // Request.request('/fe_wx_xiaochengxu/fz_kaihu/data/test.json', {data: _tempArr});

  },
  // 前往设置密码
  toPassword: function(){
    wx.navigateTo({ url: '../password/password' });
  },
  customData: {
    hi: 'Founder'
  }
});