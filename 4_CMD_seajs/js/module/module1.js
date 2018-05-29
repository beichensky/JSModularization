define(function(require, exports, module) {
  'use strict';
  let msg = 'module1 模块';
  function print() {
    console.log('module1', msg);
  }
  module.exports = {print};
});