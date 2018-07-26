// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    realFrontUrl: '../../images/cate/cate1.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  uploadImg: function(){
    var _this = this;
    wx.chooseImage({
      count: 1,
      sourceType: ['camera', 'album'],
      success: function (res) {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })
        _this.setData({
          realFrontUrl: res.tempFilePaths[0]
        })
        console.log(res.tempFilePaths[0])
        wx.uploadFile({
          url: 'https://api.mhupro.com/api/v1/wxupload',
          filePath: res.tempFilePaths[0],
          name: 'array_file',
          method: 'POST',
          header: {
            'content-type': 'multipart/form-data'
          },
          success: function (res) {
            console.log(res)
          },
          complete: function () {
            wx.hideToast();
          }
        })
      }
    })
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
  
  }
})