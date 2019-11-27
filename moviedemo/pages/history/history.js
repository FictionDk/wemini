// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeklyMovies: [{
      name: "蓝色星球2",
      comment: "BBC经典纪录片,豆瓣评分9.6",
      imagePath: "/images/center.jpg",
      isHighCommend: true
    }, {
      name: "这个杀手不太冷",
      comment: "小萝莉与怪蜀黍的烂漫爱情",
      imagePath: "/images/killer.jpg",
      isHighCommend: true
    }, {
      name: "Joker",
      comment: "我们都是小丑 我们都可以是小丑",
      imagePath: "/images/joker.png",
      isHighCommend: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  }
})