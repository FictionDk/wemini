// pages/weekly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisWeekMovie:{
      name: "Joker",
      comment: "我们都是小丑,我们都可以是小丑",
      iamgePath: "/images/joker.png"
    },
    count: 113,
    score: 912,
    ave: 0
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
    this.data.ave = this.data.score / this.data.count
    console.log(this.data.ave)
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

  }
})