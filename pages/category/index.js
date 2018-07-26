// category/index.js
Page({
  data: {
    cateTabs: [
      {title: '出版', cataList: [
        { img: '../../images/books/book1.jpg', name: '小说' },
        { img: '../../images/books/book2.jpg', name: '文学' },
        { img: '../../images/books/book3.jpg', name: '传记' },
        { img: '../../images/books/book4.jpg', name: '历史' },
        { img: '../../images/books/book1.jpg', name: '青春' },
        { img: '../../images/books/book1.jpg', name: '心理' },
        { img: '../../images/books/book1.jpg', name: '社科' },
        { img: '../../images/books/book1.jpg', name: '励志' },
        { img: '../../images/books/book1.jpg', name: '政治' },
        { img: '../../images/books/book1.jpg', name:'军事'},
        { img: '../../images/books/book3.jpg', name: '奇幻' },
        { img: '../../images/books/book2.jpg', name: '少年' },
        { img: '../../images/books/book1.jpg', name: '武侠' },
        { img: '../../images/books/book2.jpg', name: '仙侠' },
        { img: '../../images/books/book2.jpg', name: '都市' },
        { img: '../../images/books/book2.jpg', name: '校园' },
        { img: '../../images/books/book2.jpg', name: '历史' }
      ]},
      {title: '女频', cataList: [
        { img: '../../images/books/book1.jpg', name: '现代言情' },
        { img: '../../images/books/book4.jpg', name: '古代言情' },
        { img: '../../images/books/book2.jpg', name: '幻想言情' },
        { img: '../../images/books/book3.jpg', name: '青春校园' },
        { img: '../../images/books/book5.jpg', name: '同人作品' },
        { img: '../../images/books/book3.jpg', name: '推理悬疑' },
        { img: '../../images/books/book2.jpg', name: '惊悚/恐怖' },
        { img: '../../images/books/book1.jpg', name: '次元专区' },
        { img: '../../images/books/book3.jpg', name: '幻想言情' },
        { img: '../../images/books/book2.jpg', name: '幻想言情' },
        { img: '../../images/books/book1.jpg', name: '幻想言情' },
        { img: '../../images/books/book2.jpg', name: '幻想言情' },
        { img: '../../images/books/book2.jpg', name: '幻想言情' },
        { img: '../../images/books/book2.jpg', name: '校幻想言情' },
        { img: '../../images/books/book2.jpg', name: '历史幻想言' }
        ]},
      {
        title: '漫画', cataList: [
          { img: '../../images/books/book2.jpg', name: '逗比' },
          { img: '../../images/books/book1.jpg', name: '少女' },
          { img: '../../images/books/book5.jpg', name: '少年' },
          { img: '../../images/books/book4.jpg', name: '温情' },
          { img: '../../images/books/book3.jpg', name: '惊悚' },
          { img: '../../images/books/book2.jpg', name: '玄幻' },
          { img: '../../images/books/book2.jpg', name: '小说改' },
          { img: '../../images/books/book2.jpg', name: '真人漫画' },
          { img: '../../images/books/book3.jpg', name: '奇幻' },
          { img: '../../images/books/book2.jpg', name: '少年' },
          { img: '../../images/books/book1.jpg', name: '逗比' },
          { img: '../../images/books/book2.jpg', name: '逗比' },
          { img: '../../images/books/book2.jpg', name: '都市' },
          { img: '../../images/books/book2.jpg', name: '逗比' },
          { img: '../../images/books/book2.jpg', name: '历史' }
        ]
      },
      {
        title: '男频', cataList: [
          { img: '../../images/books/book2.jpg', name: '玄幻' },
          { img: '../../images/books/book3.jpg', name: '奇幻' },
          { img: '../../images/books/book2.jpg', name: '少年' },
          { img: '../../images/books/book1.jpg', name: '武侠' },
          { img: '../../images/books/book2.jpg', name: '仙侠' },
          { img: '../../images/books/book2.jpg', name: '都市' },
          { img: '../../images/books/book2.jpg', name: '校园' },
          { img: '../../images/books/book2.jpg', name: '历史' },
          { img: '../../images/books/book3.jpg', name: '奇幻' },
          { img: '../../images/books/book2.jpg', name: '少年' },
          { img: '../../images/books/book1.jpg', name: '武侠' },
          { img: '../../images/books/book2.jpg', name: '仙侠' },
          { img: '../../images/books/book2.jpg', name: '都市' },
          { img: '../../images/books/book2.jpg', name: '校园' },
          { img: '../../images/books/book2.jpg', name: '历史' }
        ]
      },
      {
        title: '杂志', cataList: [
          { img: '../../images/books/book1.jpg', name: '文摘文学' },
          { img: '../../images/books/book2.jpg', name: '掌阅出品' },
          { img: '../../images/books/book3.jpg', name: '校园学习' },
          { img: '../../images/books/book4.jpg', name: '小说故事' },
          { img: '../../images/books/book5.jpg', name: '青春文学' },
          { img: '../../images/books/book1.jpg', name: '时尚娱乐' },
          { img: '../../images/books/book1.jpg', name: '生活健康' },
          { img: '../../images/books/book1.jpg', name: '女性杂志' },
          { img: '../../images/books/book3.jpg', name: '奇幻' },
          { img: '../../images/books/book2.jpg', name: '校园' },
          { img: '../../images/books/book1.jpg', name: '武校园侠' },
          { img: '../../images/books/book2.jpg', name: '校园' },
          { img: '../../images/books/book2.jpg', name: '都校园市' },
          { img: '../../images/books/book2.jpg', name: '校园' },
          { img: '../../images/books/book2.jpg', name: '历史' }
        ]
      }
    ],
    curTab: 0
  },
  /**
   * 选项卡切换
   */
  tabChange :function(e){
    this.setData({
      curTab: e.currentTarget.id
    })
  },
  /**
   * 跳转至搜索页面
   */
  searchTo: function () {
    wx.navigateTo({
      url: '/pages/sear-page/index',
    })
  } 
})