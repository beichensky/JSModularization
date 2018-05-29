define(function(require, exports, module) {
  'use strict';
  let msg = 'module3 模块';
  function print() {
    console.log('module3', msg);
  }
  exports.test = print;
});