const request = (url, data = {}, method = 'POST') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: method,
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      }
    });
  });
};

export default request