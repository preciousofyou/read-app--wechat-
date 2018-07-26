// user/index.js

const app = getApp();
Page({
  data:{
    userItem: [
      { title: '充值', img: '../../images/user/user1.png' },
      { title: '阅读偏爱', img: '../../images/user/user2.png' },
      { title: '礼品中心', img: '../../images/user/user3.png' },
      { title:'消费记录', img: '../../images/user/user4.png'},
    ]
  },
  onLoad: function(){
    if (app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo
      });
    }
  },
  onShow(){
    // this.getUserInfo();
  },
  login: function(res){
    console.log(res)
    if(res.detail.errMsg = 'getUserInfo:ok'){
      this.setData({
        userInfo: res.detail.userInfo
      });
      this.globalData.userInfo = res.detail.userInfo;
    }
  },
  getUserInfo: function(){
    var that = this;
    wx.login({
      success: function(){
        wx.getUserInfo({
          success: function(res){
            console.log(res);
            that.setData({
              userInfo: res.userInfo
            });
          }
        })
      }
    })
  }
})