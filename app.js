//app.js
App({
  onLaunch: function (options) {  //小程序启动之后执行
    // 展示本地存储能力
    console.log('当小程序初始化完成时，会触发onLaunch函数');
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function(options){ //监听小程序显示
    console.log('当小程序第一次显示，或从后台进入前台，会触发onShow函数' + options);
    console.log(options)
  },
  onHide: function (){ //监听小程序隐藏
    console.log('当小程序从前台进入后台，会触发onHide函数');
  },
  onError: function(msg){ //错误监听函数
    console.log('当小程序发生脚本错误，或者api调用失败时，会触发onError并带上错误信息' + msg);
  },
  globalData: {  //开发者可以添加任意额函数或数据到Object参数中，用this可以访问
    userInfo: null
  }
})