// tel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel:'',
    telInfo:{
      mts: '',
      province: '',
      catName: '',
      telString: '',
      areaVid: '',
      ispVid: '',
      carrier: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 输入手机号
   */
  getTelNum:function(e){
    this.setData({
      tel:e.detail.value
    })
  },
  /**
   * 请求网络点击获取手机信息
   */
  getTelInfo: function(){
    let that = this;
    wx.request({
      url: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm', 
      data: {
        tel: that.data.tel
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let strs = res.data.replace(/(\s+)|([\{\}])|(\'+)/g, "").split('=')[1].split(',');
        let parseStrs = decodeURI(encodeURI(strs))
        console.log(parseStrs)
        let obj = {};
        for(let i = strs.length-1;i>=0;i--){
          obj[strs[i].split(':')[0]] = strs[i].split(':')[1]
        }
        console.log(encodeURI(obj))
        
        that.setData({
          telInfo: obj
        })
      }
    })
  }
})