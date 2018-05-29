define(function(require, exports, module) {
  'use strict';
  let msg = 'module2 模块';
  function print() {
    console.log('module2', msg);
  }
  exports.print = print;
});