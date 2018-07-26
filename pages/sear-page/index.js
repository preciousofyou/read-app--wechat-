// pages/sear-page/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searList: [
      ['他的国', '陪你到世界终结', '雨季不再来', '总裁老婆', '穿越狂妃', '宠婚', '黑道男友', '伪装者', '重生'],
      ['三体', '蛇选王妃', '重生', '鬼夫鬼妻', '伪装者', '火爆兵王', '逍遥兵王', '小农民', '寂寞空庭'],
      ['总裁虐恋', '总裁老婆', '寂寞空庭', '南派三叔', '逆天腰带', '三生三世', '桃运神医', '受宠萌妃', '旋风少女']
    ],
    curSearItem: 0,
    isFocus: false
  },
  /**
   * 换一批切换
   */
  changeCurSear: function(){
    this.setData({
      curSearItem: this.data.curSearItem > 1 ? 0 : this.data.curSearItem + 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isFocus: true
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