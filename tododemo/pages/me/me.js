Page({
  data: {
    avatar: '',
    name: ''
  },

  onShow: function(){
    this.setData({
      avatar: wx.getStorageSync('avatar') || '',
      name: wx.getStorageSync('name') || ''
    });
  },

  navTo: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.target == 'setting'?'/pages/setting/setting':'/pages/user/user'
    });
  }
})
