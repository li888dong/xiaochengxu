// pages/tax/tax.js
Page({
  data: {
    incomeTypeArr: ['工资、薪金所得', '个体经营', '劳务所得', '股份利息'],
    incomeTypeObjArr: [
      {
        id: 0,
        name: '工资、薪金所得'
      },
      {
        id: 1,
        name: '个体经营'
      },
      {
        id: 2,
        name: '劳务所得'
      },
      {
        id: 3,
        name: '股份利息'
      }
    ],
    index:'0',
    incomeBeforeTax: 0,
    socialSecurity: 0,
    taxStart: 3500,
    taxes: 0,
    incomeAfterTax: 0
  },
  selectIncomeType: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  inputIncomeBeforeTax: function (e) {
    console.log('税前工资为', e.detail.value)
    this.setData({
      incomeBeforeTax: e.detail.value
    })
  },
  inputSocialSecurity: function (e) {
    console.log('所缴社保为', e.detail.value)
    this.setData({
      socialSecurity: e.detail.value
    })
  },
  inputTaxStart: function (e) {
    console.log('起征金额为', e.detail.value)
    this.setData({
      taxStart: e.detail.value
    })
  },
  taxCount: function () {
    console.log(this.data.index)
    switch (this.data.index) {
      case '0':
        console.log('count begin')
        let A = this.data.incomeBeforeTax;
        let B = this.data.socialSecurity;
        let C = this.data.taxStart;
        let D = 0;
        let E = 0;
        let L = A - B - C;
        let R = 0;
        let K = 0;
        if (A <= +C) {
          D = 0;
          E = A;
          break;
        }
        console.log(2)
        if (L <= 1500) {
          R = 0.03; K = 0;
        } else if (L <= 4500) {
          R = 0.1; K = 105;
        } else if (L <= 9000) {
          R = 0.2; K = 555;
        } else if (L <= 35000) {
          R = 0.25; K = 1005;
        } else if (L <= 55000) {
          R = 0.30; K = 2755;
        } else if (L <= 80000) {
          R = 0.35; K = 5505;
        } else {
          R = 0.45; K = 13505;
        }
        D = L * R - K;
        E = A - B - D;
        console.log(this)
        console.log('count over')        
        this.setData({
          taxes: D,
          incomeAfterTax: E
        })
        
    }
  },
  reset:function(){
    console.log('开始重置');
    this.setData({
      incomeAfterTax:0,
      incomeBeforeTax:0,
      taxes:0,
      socialSecurity:0,
      taxStart:0,
      index:0
    })
    console.log('重置结束');
  }
})