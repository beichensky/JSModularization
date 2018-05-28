(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var module1 = require('./js/module1.js');
var module2 = require('./js/module2.js');
var module3 = require('./js/module3.js');

module1();
module2.print();
module3.print();
},{"./js/module1.js":2,"./js/module2.js":3,"./js/module3.js":4}],2:[function(require,module,exports){
module.exports = function () {
  console.log('module1', 'modul1 模块 log');
}
},{}],3:[function(require,module,exports){
module.exports = {
  msg: 'module2',
  print () {
    console.log('module2', this.msg + ' 模块 log');
  }
} 
},{}],4:[function(require,module,exports){
exports.msg = 'module3'

exports.print = function () {
  console.log('module3', this.msg + ' 模块的 log');
}
},{}]},{},[1]);
