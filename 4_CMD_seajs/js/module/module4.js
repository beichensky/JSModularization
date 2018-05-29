define(function(require, exports, module) {
  'use strict';
  let module2 = require('./module2');
  module2.print();
  require.async('./module3', function(module3) {
    module3.test();
  });
  let msg = 'module4 模块';
  function print() {
    console.log('module4', msg);
  }
  module.exports = print;
});