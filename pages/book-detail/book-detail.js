// pages/book-detail/book-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowInfo: false,
    moreBookList: {
      titleHead: '喜欢这本书的人也喜欢',
      list: [
        { title: '雨季不再来', imgUrl: '../../images/books/book1.jpg' },
        { title: '他的国', imgUrl: '../../images/books/book2.jpg' },
        { title: '陪你到世界终结(陪你到世界终结)', imgUrl: '../../images/books/book3.jpg' },
        { title: '我不喜欢这世界，我只喜欢你（我不喜欢这世界）', imgUrl: '../../images/books/book4.jpg' },
        { title: '圣墟', imgUrl: '../../images/books/book5.jpg' },
        { title: '鉴宝', imgUrl: '../../images/books/book6.jpg' }
      ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 显示全部简介或收起
   */
  showAllInfo: function(){
    this.setData({
      isShowInfo: !this.data.isShowInfo
    })
  }
})