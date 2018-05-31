'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require('./module/module1');

var _module2 = require('./module/module2');

var _module3 = require('./module/module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module/module4');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)('body').css('background', 'lightblue');
  console.log('main.js', '测试module1 中的 msg = ' + _module.msg);
  (0, _module.test1)();
  (0, _module.test2)();
  (0, _module2.print1)();
  (0, _module2.print2)();
  (0, _module4.default)();
  _module6.default.test();
  _module6.default.print();
});