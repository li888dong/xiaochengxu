//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tax: '前往个税计算器',
    game:'前往小游戏',
    kaihu:'前往小方开户',
    tel:'前往手机号查询',
    welcome:'欢迎来到李栋的小程序实验',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 前往小方开户
  gotoKaiHu: function () {
    wx.navigateTo({
      url: '../welcome/welcome'
    })
  },
  // 前往个税计算器
  gotoTax:function(){
    wx.navigateTo({
      url: '../tax/tax'
    })
  },
  // 前往小游戏
  gotoGame:function(){
    wx.navigateTo({
      url: '../game/game'
    })
  },
  // 前往手机号查询
  gotoTel: function () {
    wx.navigateTo({
      url: '../tel/tel'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
