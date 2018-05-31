export default {
  msg: 'module4 模块',
  test() {
    console.log('module4', '测试module4 模块');
  },
  print() {
    console.log('module4', '打印 module4 中的 msg = ' + this.msg);
  }
}