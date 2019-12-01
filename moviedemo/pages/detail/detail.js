// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.name)
    this.setData({
      mName: options.name
    })
    wx.cloud.init()
    console.log(wx.cloud.database())
    const db = wx.cloud.database()
    db.collection('movie_detail').where({
      publishInfo: {
        name: 'Joker'
      }
    }).get({
      success: function (res) {
        console.log(res)
      }
    })
    wx.request({
      url: 'https://plasma.stpass.com/society/articles',
      method: 'GET',
      header:{
        "Content-Type":"application/json"
      },
      success: function(res){
        console.log(res)
      },
      faile: function(){
      },
      complete: function(){
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  f0: function() {
    const db = wx.cloud.database()
    db.collection('movie_detail').where({
      publishInfo: {
        name: 'Joker'
      }
    }).get({
      success: function(res) {
        console.log(res)
      }
    })
  }

})