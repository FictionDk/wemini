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
    console.log(options.name,options.id)
    var apikey = '0df993c66c0c636e29ecbb5344252a4a'
    this.setData({
      mName: options.name,
      mId: options.id
    })
    var that = this

    wx.request({
      //url: 'https://plasma.stpass.com/society/articles',
      url: 'https://plasma.stpass.com/v2/movie/subject/' + options.id+'?apikey=' + apikey,
      method: 'GET',
      header:{
        "Content-Type":"json"
      },
      success: function(res){
        if(res.statusCode == 200){
          that.setData({movie: res.data})
          wx.hideNavigationBarLoading()
          wx.setNavigationBarTitle({
            title: res.data.rating.average +'分: '+res.data.title,
          })
        }
      },
      faile: function(){
        console.log()
      },
      complete: function(){
      }
    })

    wx.showNavigationBarLoading()
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
    return{
      title:"向你推荐 ["+this.data.movie.title+"]"
    }
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