define( function(require) {
  'use strict';
  let module1 = require('./module/module1');
  module1.print();
  let module4 = require('./module/module4');
  module4();
});

/**
 * 最终打印的结果是：
 *    module1 module1 模块
 *    module2 module2 模块
 *    module4 module4 模块
 *    module3 module3 模块
 * 
 * 原因：
 *    在 module4 模块中，module2 是同步引入，module3 是异步引入
 */