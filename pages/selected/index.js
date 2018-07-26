// pages/Selected/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ['精选','出版','男生','女生','漫画'],
    curIndex: 0,
    bannerImg: [],
    cateList: [
      { title: '排行', iconUrl: '../../images/cate/cate1.png' },
      { title: '新书', iconUrl: '../../images/cate/cate2.png' },
      { title: '特价', iconUrl: '../../images/cate/cate3.png' },
      { title: '畅销', iconUrl: '../../images/cate/cate4.png' },
      { title: '独家', iconUrl: '../../images/cate/cate5.png' }
    ],
    bookList: {
      titleHead: '小编推荐',
      list: [
        { title: '雨季不再来', imgUrl: '../../images/books/book1.jpg' },
        { title: '他的国', imgUrl: '../../images/books/book2.jpg' },
        { title: '陪你到世界终结(陪你到世界终结)', imgUrl: '../../images/books/book3.jpg' },
        { title: '我不喜欢这世界，我只喜欢你（我不喜欢这世界）', imgUrl: '../../images/books/book4.jpg' },
        { title: '圣墟', imgUrl: '../../images/books/book5.jpg' },
        { title: '鉴宝', imgUrl: '../../images/books/book6.jpg' }
      ]
    },
    bookListO: {
      titleHead: '新书速递',
      list: [
        { title: '雨季不再来', imgUrl: '../../images/books/book1.jpg' },
        { title: '他的国', imgUrl: '../../images/books/book2.jpg' },
        { title: '陪你到世界终结(陪你到世界终结)', imgUrl: '../../images/books/book3.jpg' },
        { title: '陪你到世界终结', imgUrl: '../../images/books/book3.jpg' },
        { title: '陪你到世界终结', imgUrl: '../../images/books/book3.jpg' },
        { title: '陪你到世界终结', imgUrl: '../../images/books/book3.jpg' }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/yyz8023/banner/list',
      success: function(res){
        console.log(res);
        if(res.data.code == 0){
          that.setData({
            bannerImg: res.data.data
          })
        }
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
  
  },
  /**
   * 选项卡切换
   */
  tabClick:function(e){
    this.setData({
      curIndex:  e.currentTarget.id
    })
  },
  /**
   * 跳转至搜索页面
   */
  searchTo: function () {
    wx.navigateTo({
      url: '/pages/sear-page/index'
    })
  } 
})