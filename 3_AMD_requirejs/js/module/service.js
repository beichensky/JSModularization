define(['data'], function(data) {
  'use strict';
  let obj = {
    msg: 'service 模块',
    print() {
      console.log('service', '当前是：' + this.msg + ", 可以打印出 data 模块的 msg信息： " + data.msg);
    }
  }
  return obj;
});