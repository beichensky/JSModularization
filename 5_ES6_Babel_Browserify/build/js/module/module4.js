'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  msg: 'module4 模块',
  test: function test() {
    console.log('module4', '测试module4 模块');
  },
  print: function print() {
    console.log('module4', '打印 module4 中的 msg = ' + this.msg);
  }
};