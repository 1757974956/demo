// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    cat:1,
    pageIndex:1,
    pageSize:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      cat: options.cat,
    });
    console.log(options)
    if(options.title){
      wx.setNavigationBarTitle({
        title: options.title,
      })
    };

 

    wx.request({
      url: 'https://locally.uieee.com/categories/' + options.cat + '/shops',
      data: {
        _page: this.data.pageIndex++,
        _limit: this.data.pageSize,
        cat: options.cat
      },
      success: (res) => {
        console.log(res);
        var newList = this.data.shopList.concat(res.data);
       
        this.setData({
          shopList: newList
        })
      },

    })
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

  }
})