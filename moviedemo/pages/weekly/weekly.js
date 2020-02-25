Page({
  data: {
    currentIndex: 0,
    weeklyMovies: [{
      doubanId: 1292052,
      name: "肖申克的救赎",
      comment: "一部没有爱情与美女的电影,却光芒四射",
      imagePath: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
      count: 113,
      score: 912,
      isHighCommend: true
    }, {
      doubanId: 1295644,
      name: "这个杀手不太冷",
      comment: "小萝莉与怪蜀黍的烂漫爱情",
      imagePath: "/images/killer.jpg",
      count: 113,
      score: 912,
      isHighCommend: true
    }, {
      doubanId: 27119724,
      name: "Joker",
      comment: "我们都是小丑 我们都可以是小丑",
      imagePath: "/images/joker.png",
      count: 113,
      score: 912,
      isHighCommend: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      currentIndex: this.data.weeklyMovies.length - 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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
    return {
      title: "每周推荐"
    }
  },

  f0: function(event) {
    this.setData({
      currentIndex: this.data.weeklyMovies.length - 1
    })
  },

  f1: function(event) {
    var movieId = event.currentTarget.dataset.movieId
    var movieName = event.currentTarget.dataset.movieName
    console.log(event.currentTarget.dataset)
    console.log(movieId,movieName)
    wx.navigateTo({
      url: '/pages/detail/detail?name=' + movieName + '&id='+movieId
    })
  }
})