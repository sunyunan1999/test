var app = getApp()





Page({

  data: {

    height: 0,
    money:0,
    tt:0

  },

  onLoad() {
     
    this.setData({
    
      money:  ( app.globalData.light.datapoints[0].value),

      
      
    })

  },

  onPullDownRefresh: function () {

    console.log('onPullDownRefresh', new Date())

  }



})